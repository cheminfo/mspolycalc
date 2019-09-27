"use strict";

define(["module", "src/util/api", "src/util/IDBKeyValue", "./ExpandableMolecule", "./MF", "./libs/elnPlugin"], function (module, _api, _IDBKeyValue, _ExpandableMolecule, _MF, _elnPlugin) {
  var _api2 = _interopRequireDefault(_api);

  var _IDBKeyValue2 = _interopRequireDefault(_IDBKeyValue);

  var _ExpandableMolecule2 = _interopRequireDefault(_ExpandableMolecule);

  var _MF2 = _interopRequireDefault(_MF);

  var _elnPlugin2 = _interopRequireDefault(_elnPlugin);

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

  var idb = new _IDBKeyValue2["default"]('external-samples');
  var defaultOptions = {
    varName: 'sample'
  };

  var Sample = function () {
    function Sample(sample, options) {
      _classCallCheck(this, Sample);

      // make sure we don't copy attachment metadata
      var s = sample.$content ? {
        $content: {
          general: sample.$content.general,
          identifier: sample.$content.identifier,
          stock: sample.$content.stock
        }
      } : {
        $content: {
          general: {
            title: '',
            description: '',
            mf: '',
            molfile: ''
          },
          spectra: {
            nmr: [],
            mass: [],
            ir: []
          }
        }
      };
      this.sample = JSON.parse(JSON.stringify(s));
      this.options = Object.assign({}, defaultOptions, options);
      Object.assign(this.sample, this.options.sample);
      console.log('this', {
        sample: this.sample
      });

      this._init();
    }

    _createClass(Sample, [{
      key: "_loadSample",
      value: function _loadSample(sample) {
        var _this = this;

        console.log('loadSample:', {
          sample: sample
        });
        this.sample = sample;

        var sampleVar = _api2["default"].getVar(this.options.varName);

        _api2["default"].setVariable('sampleCode', sampleVar, ['$id', 0]);

        _api2["default"].setVariable('batchCode', sampleVar, ['$id', 1]);

        _api2["default"].setVariable('content', sampleVar, ['$content']);

        _api2["default"].setVariable('general', sampleVar, ['$content', 'general']);

        _api2["default"].setVariable('molfile', sampleVar, ['$content', 'general', 'molfile']);

        _api2["default"].setVariable('mf', sampleVar, ['$content', 'general', 'mf']);

        _api2["default"].setVariable('mw', sampleVar, ['$content', 'general', 'mw']);

        _api2["default"].setVariable('em', sampleVar, ['$content', 'general', 'em']);

        _api2["default"].setVariable('mass', sampleVar, ['$content', 'spectra', 'mass']);

        _api2["default"].setVariable('nmr', sampleVar, ['$content', 'spectra', 'nmr']);

        _api2["default"].setVariable('ir', sampleVar, ['$content', 'spectra', 'ir']);

        _api2["default"].setVariable('description', sampleVar, ['$content', 'general', 'description']);

        _api2["default"].setVariable('title', sampleVar, ['$content', 'general', 'title']);

        _api2["default"].setVariable('iupac', sampleVar, ['$content', 'general', 'iupac']);

        this.expandableMolecule = new _ExpandableMolecule2["default"](this.sample, this.options);
        this.mf = new _MF2["default"](this.sample);
        this.mf.fromMF();

        this.onChange = function (event) {
          var jpathStr = event.jpath.join('.');

          if (jpathStr.replace(/\.\d+\..*/, '') === '$content.spectra.nmr') {
            _this.nmr1dManager.updateIntegralOptions();
          }

          switch (event.jpath.join('.')) {
            case '$content.general.molfile':
              _this.mf.fromMolfile();

              break;

            case '$content.general.mf':
              try {
                _this.mf.fromMF();
              } catch (e) {// ignore
              }

              break;

            default:
              break;
          }

          var contentString = JSON.stringify(_this.sample.$content);

          if (contentString !== _this.contentString && _this.options.trackId) {
            _this.contentString = JSON.stringify(_this.sample.$content);
            idb.set(_this.options.trackId, _this.sample.resurrect());
          }
        };

        this.bindChange();
      }
    }, {
      key: "_init",
      value: function () {
        var _init2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var _this2 = this;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  this._initialized = new Promise(function () {
                    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(resolve) {
                      var sample;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              if (!_this2.options.trackId) {
                                _context.next = 12;
                                break;
                              }

                              _context.prev = 1;
                              _context.next = 4;
                              return idb.get(_this2.options.trackId);

                            case 4:
                              sample = _context.sent;
                              _context.next = 12;
                              break;

                            case 7:
                              _context.prev = 7;
                              _context.t0 = _context["catch"](1);
                              // eslint-disable-next-line no-console
                              console.error(_context.t0);
                              sample = _this2.sample;
                              _this2.options.trackId = false;

                            case 12:
                              _context.next = 14;
                              return _api2["default"].createData(_this2.options.varName, sample || _this2.sample);

                            case 14:
                              sample = _context.sent;

                              if (sample.$content.general.molfile) {
                                // Let the mf be calculated from the molfile
                                delete sample.$content.general.mf;
                              } else {
                                sample.$content.general.molfile = ''; // can not be edited otherwise
                              }

                              _this2._loadSample(sample);

                              resolve();

                            case 18:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee, null, [[1, 7]]);
                    }));

                    return function (_x) {
                      return _ref.apply(this, arguments);
                    };
                  }());

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function _init() {
          return _init2.apply(this, arguments);
        }

        return _init;
      }()
    }, {
      key: "bindChange",
      value: function bindChange() {
        this.sample.unbindChange(this.onChange);
        this.sample.onChange(this.onChange);
      }
    }, {
      key: "unbindChange",
      value: function unbindChange() {
        this.sample.unbindChange(this.onChange);
      }
    }, {
      key: "handleDrop",
      value: function handleDrop(name) {
        if (!name) {
          throw new Error('handleDrop expects a variable name');
        }

        name = String(name); // maps name of variable to type of data

        var types = {
          droppedNmr: 'nmr',
          droppedIR: 'ir',
          droppedUV: 'uv',
          droppedIV: 'iv',
          droppedMS: 'mass',
          droppedChrom: 'chromatogram',
          droppedXray: 'xray',
          droppedOverview: 'image',
          droppedImage: 'image',
          droppedGenbank: 'genbank'
        };

        if (!types[name]) {
          throw new Error('Unexpected variable name');
        } // Dropped data can be an array
        // Expecting format as from drag and drop module
        // we store the data in the view


        var droppedDatas = _api2["default"].getData(name);

        droppedDatas = droppedDatas.file || droppedDatas.str;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = droppedDatas[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var data = _step.value;

            _elnPlugin2["default"].process(types[name], this.sample.$content, data, {}, {
              keepContent: true
            });
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

        this.sample.triggerChange();
      }
    }, {
      key: "handleAction",
      value: function handleAction(action) {
        if (!action) return;

        switch (action.name) {
          case 'unattach':
            {
              var value = action.value;

              if (value && value.__parent) {
                for (var i = 0; i < value.__parent.length; i++) {
                  var row = value.__parent[i];

                  if (row === value) {
                    value.__parent.splice(i, 1);

                    value.__parent.triggerChange();

                    return;
                  }
                }
              }
            }
            break;

          default:
        }

        if (this.expandableMolecule) {
          this.expandableMolecule.handleAction(action);
        }
      }
    }]);

    return Sample;
  }();

  module.exports = Sample;
});