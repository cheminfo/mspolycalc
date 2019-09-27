"use strict";

define(["module", "src/util/api", "src/util/ui", "./libs/OCLE"], function (module, _api, _ui, _OCLE) {
  var _api2 = _interopRequireDefault(_api);

  var _ui2 = _interopRequireDefault(_ui);

  var _OCLE2 = _interopRequireDefault(_OCLE);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var noop = function noop() {
    /* noop */
  };

  var defaultOptions = {
    onMolfileChanged: noop,
    calculateDiastereotopicID: false,
    maxDiastereotopicCalculationTime: 3000
  };

  var ExpandableMolecule = function () {
    function ExpandableMolecule(sample, options) {
      var _this = this;

      _classCallCheck(this, ExpandableMolecule);

      this.options = Object.assign({}, defaultOptions, options);
      this.sample = sample;
      this.molfile = String(this.sample.getChildSync(['$content', 'general', 'molfile']) || '');
      this.idCode = _OCLE2["default"].Molecule.fromMolfile(this.molfile).getIDCode();
      this.expandedHydrogens = false;
      this.jsmeEditionMode = false;
      this.calculateDiastereotopicID = this.options.calculateDiastereotopicID;
      this.maxDiastereotopicCalculationTime = this.options.maxDiastereotopicCalculationTime;

      this.onChange = function (event) {
        // us this really a modification ? or a loop event ...
        // need to compare former oclID with new oclID
        var newMolecule = _OCLE2["default"].Molecule.fromMolfile("".concat(event.target));

        var oclID = newMolecule.getIDCodeAndCoordinates();

        if (oclID.idCode !== _this.idCode) {
          _this.idCode = oclID.idCode;
          _this.molfile = "".concat(event.target);

          _this.sample.setChildSync(['$content', 'general', 'molfile'], _this.molfile);

          _this.sample.setChildSync(['$content', 'general', 'ocl'], {
            value: oclID.idCode,
            coordinates: oclID.coordinates,
            index: newMolecule.getIndex()
          });
        }

        _this.options.onMolfileChanged(_this);

        _this.updateHistory();
      };

      _api2["default"].createData('editableMolfile', this.molfile).then(function (editableMolfile) {
        _this.editableMolfile = editableMolfile;

        _this.bindChange();

        _this.createViewVariable();
      });
    }

    _createClass(ExpandableMolecule, [{
      key: "bindChange",
      value: function bindChange() {
        this.editableMolfile.onChange(this.onChange);
      }
    }, {
      key: "unbindChange",
      value: function unbindChange() {
        this.editableMolfile.unbindChange(this.onChange);
      }
    }, {
      key: "updateHistory",
      value: function updateHistory() {
        var history = JSON.parse(localStorage.getItem('moleculesHistory') || '[]');
        var exists = false;
        var uuid = this.sample._id;
        var entry;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = history[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            entry = _step.value;

            if (entry.uuid === uuid) {
              exists = true;
              break;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (!exists) {
          entry = {
            uuid: uuid
          };
          history.push(entry);
        }

        entry.timestamp = Date.now();
        entry.idCode = this.idCode;
        entry.molfile = this.molfile;

        if (this.sample.$id) {
          entry.id = DataObject.resurrect(this.sample.$id).filter(function (a) {
            return a;
          }).join(' ');
        } // we sort by timestamp


        history = history.filter(function (entry) {
          return entry.idCode !== 'd@';
        });
        history.sort(function (a, b) {
          return b.timestamp - a.timestamp;
        });
        history.slice(0, 20);
        localStorage.setItem('moleculesHistory', JSON.stringify(history));
      }
    }, {
      key: "toggleJSMEEdition",
      value: function toggleJSMEEdition() {
        this.jsmeEditionMode = !this.jsmeEditionMode;
        this.expandedHydrogens = false;
        var options = {
          prefs: []
        };

        if (this.jsmeEditionMode) {
          options.prefs.push('nodepict');

          _api2["default"].createData('editableMolfile', this.molfile);
        } else {
          options.prefs.push('depict');
          this.createViewVariable();
        }

        _api2["default"].doAction('setJSMEOptions', options);
      }
    }, {
      key: "setExpandedHydrogens",
      value: function setExpandedHydrogens() {
        if (this.jsmeEditionMode) {
          this.toggleJSMEEdition();
        } else {
          this.expandedHydrogens = !this.expandedHydrogens;
        }

        this.createViewVariable();
      }
    }, {
      key: "createViewVariable",
      value: function createViewVariable() {
        var molecule = _OCLE2["default"].Molecule.fromMolfile(this.molfile);

        var calculateDiastereotopicID = this.calculateDiastereotopicID;

        if (calculateDiastereotopicID) {
          // is it reasonnable to calculate the DiastereotopicID. We check the time it will take
          var start = Date.now();
          molecule.getCompactCopy().getIDCode();
          var expected = (Date.now() - start) * 4 * molecule.getAllAtoms();

          if (expected > this.maxDiastereotopicCalculationTime) {
            // eslint-disable-next-line no-console
            console.log('The diastereotopic calculation is expected to last more than 3s. No way to assign molecule.', this.maxDiastereotopicCalculationTime);
            calculateDiastereotopicID = false;
          }
        }

        if (this.expandedHydrogens) {
          molecule.addImplicitHydrogens();
          var viewMolfileExpandedH = molecule.toVisualizerMolfile({
            diastereotopic: calculateDiastereotopicID
          });

          _api2["default"].createData('viewMolfileExpandedH', viewMolfileExpandedH);
        } else {
          var viewMolfile = molecule.toVisualizerMolfile({
            heavyAtomHydrogen: true,
            diastereotopic: calculateDiastereotopicID
          });

          _api2["default"].createData('viewMolfile', viewMolfile);
        }
      }
    }, {
      key: "setMolfile",
      value: function setMolfile(molfile) {
        var editableMolfile = _api2["default"].getData('editableMolfile');

        if (editableMolfile) editableMolfile.setValue(molfile || '');
      }
    }, {
      key: "loadMolfileFromHistory",
      value: function () {
        var _loadMolfileFromHistory = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var history, molecule;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  history = JSON.parse(localStorage.getItem('moleculesHistory') || '[]');
                  _context.next = 3;
                  return _ui2["default"].choose(history, {
                    autoSelect: false,
                    noConfirmation: true,
                    returnRow: true,
                    dialog: {
                      width: 600,
                      height: 800
                    },
                    columns: [{
                      id: 'id',
                      name: 'Reference',
                      jpath: ['id'],
                      maxWidth: 100
                    }, {
                      id: 'molfile',
                      name: 'Structure',
                      jpath: ['molfile'],
                      rendererOptions: {
                        forceType: 'mol2d'
                      }
                    }],
                    idField: 'uuid',
                    slick: {
                      rowHeight: 140
                    }
                  });

                case 3:
                  molecule = _context.sent;

                  if (molecule) {
                    this.setMolfile(String(molecule.molfile));
                  }

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function loadMolfileFromHistory() {
          return _loadMolfileFromHistory.apply(this, arguments);
        }

        return loadMolfileFromHistory;
      }()
    }, {
      key: "handleAction",
      value: function handleAction(action) {
        if (!action) return false;

        switch (action.name) {
          case 'toggleJSMEEdition':
            this.toggleJSMEEdition(!this.jsmeEditionMode);
            break;

          case 'clearMolfile':
            var molfile = _api2["default"].getData('editableMolfile');

            molfile.setValue('');
            break;

          case 'swapHydrogens':
            this.setExpandedHydrogens();
            break;

          case 'loadMolfileFromHistory':
            this.loadMolfileFromHistory();
            break;

          default:
            return false;
        }

        return true;
      }
    }]);

    return ExpandableMolecule;
  }();

  module.exports = ExpandableMolecule;
});