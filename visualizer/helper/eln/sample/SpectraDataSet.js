"use strict";

define(["module", "src/util/api", "src/util/versioning", "src/util/color"], function (module, _api, _versioning, _color) {
  var _api2 = _interopRequireDefault(_api);

  var _versioning2 = _interopRequireDefault(_versioning);

  var _color2 = _interopRequireDefault(_color);

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

  var SpectraConfigs = {
    IR: {
      tocFilter: function tocFilter(entry) {
        return entry.value.nbIR;
      },
      tocCallback: function tocCallback(entry) {
        entry.value.nbSpectra = entry.value.nbIR;
      },
      getSpectra: function getSpectra(sample) {
        if (sample && sample.$content && sample.$content.spectra && Array.isArray(sample.$content.spectra.ir)) {
          var spectra = sample.$content.spectra.ir;
          return spectra;
        } else {
          return [];
        }
      },
      chartPrefs: {
        xLabel: 'Wavelength [cm-1]',
        displayXAxis: ['display', 'flip', 'main', 'sec']
      }
    },
    '1H NMR': {
      tocFilter: function tocFilter(entry) {
        return entry.value.nb1h;
      },
      tocCallback: function tocCallback(entry) {
        entry.value.nbSpectra = entry.value.nb1h;
      },
      getSpectra: function getSpectra(sample) {
        if (sample && sample.$content && sample.$content.spectra && Array.isArray(sample.$content.spectra.nmr)) {
          var spectra = sample.$content.spectra.nmr;
          spectra = spectra.filter(function (spectrum) {
            return spectrum.dimension === 1 && spectrum.nucleus[0] === '1H';
          });
          spectra.forEach(function (spectrum) {
            var info = [];
            if (spectrum.nucleus) info.push(spectrum.nucleus[0]);
            if (spectrum.experiment) info.push(spectrum.experiment);
            if (spectrum.solvent) info.push(spectrum.solvent);
            if (spectrum.frequency) info.push(spectrum.frequency.toFixed(0));
            spectrum.info = info.join(', ');
          });
          return spectra;
        } else {
          return [];
        }
      },
      chartPrefs: {
        xLabel: 'δ [ppm]',
        displayXAxis: ['display', 'flip', 'main', 'sec']
      }
    },
    Chromatography: {
      tocFilter: function tocFilter(entry) {
        return entry.value.mbChrom;
      },
      tocCallback: function tocCallback(entry) {
        entry.value.nbSpectra = entry.value.mbChrom;
      },
      getSpectra: function getSpectra(sample) {
        if (sample && sample.$content && sample.$content.spectra && Array.isArray(sample.$content.spectra.chromatogram)) {
          var spectra = sample.$content.spectra.chromatogram;
          return spectra;
        } else {
          return [];
        }
      },
      chartPrefs: {
        xLabel: 'Time [s]',
        displayXAxis: ['display', 'flip', 'main', 'sec']
      }
    }
  };

  var SpectraDataSet = function () {
    function SpectraDataSet(roc, sampleToc) {
      _classCallCheck(this, SpectraDataSet);

      this.roc = roc;
      this.sampleToc = sampleToc;
      this.spectraConfig = undefined;
    }

    _createClass(SpectraDataSet, [{
      key: "getChartPrefs",
      value: function getChartPrefs() {
        return this.spectraConfig.chartPrefs;
      }
    }, {
      key: "initializeAnalysis",
      value: function () {
        var _initializeAnalysis = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var _this = this;

          var options,
              _options$schemaVarNam,
              schemaVarName,
              _options$varName,
              varName,
              _options$cookieName,
              cookieName,
              possibleAnalysis,
              defaultAnalysis,
              schema,
              analysisKind,
              mainData,
              _args = arguments;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                  _options$schemaVarNam = options.schemaVarName, schemaVarName = _options$schemaVarNam === void 0 ? 'analysisKindSchema' : _options$schemaVarNam, _options$varName = options.varName, varName = _options$varName === void 0 ? 'analysisKind' : _options$varName, _options$cookieName = options.cookieName, cookieName = _options$cookieName === void 0 ? 'eln-default-analysis-kind' : _options$cookieName;
                  possibleAnalysis = Object.keys(SpectraConfigs);
                  defaultAnalysis = localStorage.getItem(cookieName);

                  if (possibleAnalysis.indexOf(defaultAnalysis) === -1) {
                    defaultAnalysis = possibleAnalysis[0];
                  }

                  schema = {
                    type: 'object',
                    properties: {
                      analysis: {
                        type: 'string',
                        "enum": possibleAnalysis,
                        "default": defaultAnalysis,
                        required: true
                      }
                    }
                  };

                  _api2["default"].createData(schemaVarName, schema);

                  _context.next = 9;
                  return _api2["default"].createData(varName, {
                    analysis: defaultAnalysis
                  });

                case 9:
                  analysisKind = _context.sent;
                  this.spectraConfig = SpectraConfigs[defaultAnalysis];
                  _context.next = 13;
                  return this.refresh();

                case 13:
                  mainData = _versioning2["default"].getData();
                  mainData.onChange(function (evt) {
                    if (evt.jpath[0] === varName) {
                      localStorage.setItem(cookieName, analysisKind.analysis);
                      _this.spectraConfig = SpectraConfigs[String(analysisKind.analysis)];

                      _this.refresh();
                    }
                  });
                  return _context.abrupt("return", analysisKind);

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function initializeAnalysis() {
          return _initializeAnalysis.apply(this, arguments);
        }

        return initializeAnalysis;
      }()
    }, {
      key: "refresh",
      value: function refresh() {
        this.sampleToc.options.filter = this.spectraConfig.tocFilter;
        this.sampleToc.options.callback = this.spectraConfig.tocCallback;
        this.sampleToc.refresh();
      }
    }, {
      key: "processAction",
      value: function () {
        var _processAction = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(action) {
          var selectedSpectra;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.t0 = action.name;
                  _context2.next = _context2.t0 === 'clickedSample' ? 3 : _context2.t0 === 'refresh' ? 5 : _context2.t0 === 'clearSelectedSamples' ? 7 : _context2.t0 === 'addSelectedSamples' ? 11 : _context2.t0 === 'addSample' ? 14 : _context2.t0 === 'addSpectrum' ? 17 : 20;
                  break;

                case 3:
                  this.clickedSample(action.value);
                  return _context2.abrupt("break", 20);

                case 5:
                  this.refresh();
                  return _context2.abrupt("break", 20);

                case 7:
                  selectedSpectra = _api2["default"].getData('selectedSpectra');
                  selectedSpectra.length = 0;
                  selectedSpectra.triggerChange();
                  return _context2.abrupt("break", 20);

                case 11:
                  _context2.next = 13;
                  return this.addSelectedSamples(_api2["default"].getData('tocSelected').resurrect());

                case 13:
                  return _context2.abrupt("break", 20);

                case 14:
                  _context2.next = 16;
                  return this.addSelectedSamples([action.value.resurrect()]);

                case 16:
                  return _context2.abrupt("break", 20);

                case 17:
                  _context2.next = 19;
                  return this.addSpectrum(_api2["default"].getData('tocClicked').resurrect(), action.value.resurrect());

                case 19:
                  return _context2.abrupt("break", 20);

                case 20:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function processAction(_x) {
          return _processAction.apply(this, arguments);
        }

        return processAction;
      }()
    }, {
      key: "clickedSample",
      value: function () {
        var _clickedSample = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(uuid) {
          var data, spectra;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this.roc.document(uuid, {
                    varName: 'linkedSample'
                  });

                case 2:
                  data = _context3.sent;
                  spectra = this.spectraConfig.getSpectra(data);

                  // let spectra = data.$content.spectra.ir;
                  _api2["default"].createData('spectra', spectra);

                case 5:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function clickedSample(_x2) {
          return _clickedSample.apply(this, arguments);
        }

        return clickedSample;
      }()
    }, {
      key: "addSpectrum",
      value: function addSpectrum(tocEntry, spectrum) {
        var selectedSpectra = _api2["default"].getData('selectedSpectra');

        this.addSpectrumToSelected(spectrum, tocEntry, selectedSpectra);
        recolor(selectedSpectra);
        selectedSpectra.triggerChange();
      }
    }, {
      key: "addSelectedSamples",
      value: function () {
        var _addSelectedSamples = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(tocSelected) {
          var _this2 = this;

          var selectedSpectra, promises, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step;

          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  selectedSpectra = _api2["default"].getData('selectedSpectra');
                  promises = [];
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context4.prev = 5;

                  _loop = function _loop() {
                    var tocEntry = _step.value;
                    promises.push(_this2.roc.document(tocEntry.id).then(function (sample) {
                      if (sample.$content.spectra && sample.$content.spectra.ir) {
                        var spectra = sample.$content.spectra.ir;
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                          for (var _iterator2 = spectra[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var spectrum = _step2.value;

                            if (spectrum.jcamp && spectrum.jcamp.filename) {
                              _this2.addSpectrumToSelected(spectrum, tocEntry, selectedSpectra);
                            }
                          }
                        } catch (err) {
                          _didIteratorError2 = true;
                          _iteratorError2 = err;
                        } finally {
                          try {
                            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                              _iterator2["return"]();
                            }
                          } finally {
                            if (_didIteratorError2) {
                              throw _iteratorError2;
                            }
                          }
                        }
                      }
                    }));
                  };

                  for (_iterator = tocSelected[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    _loop();
                  }

                  _context4.next = 14;
                  break;

                case 10:
                  _context4.prev = 10;
                  _context4.t0 = _context4["catch"](5);
                  _didIteratorError = true;
                  _iteratorError = _context4.t0;

                case 14:
                  _context4.prev = 14;
                  _context4.prev = 15;

                  if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                    _iterator["return"]();
                  }

                case 17:
                  _context4.prev = 17;

                  if (!_didIteratorError) {
                    _context4.next = 20;
                    break;
                  }

                  throw _iteratorError;

                case 20:
                  return _context4.finish(17);

                case 21:
                  return _context4.finish(14);

                case 22:
                  _context4.next = 24;
                  return Promise.all(promises);

                case 24:
                  recolor(selectedSpectra);
                  selectedSpectra.triggerChange();

                case 26:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, null, [[5, 10, 14, 22], [15,, 17, 21]]);
        }));

        function addSelectedSamples(_x3) {
          return _addSelectedSamples.apply(this, arguments);
        }

        return addSelectedSamples;
      }()
    }, {
      key: "addSpectrumToSelected",
      value: function addSpectrumToSelected(spectrum, tocEntry, selectedSpectra) {
        if (spectrum.jcamp) {
          var spectrumID = String(tocEntry.id + spectrum.jcamp.filename);
          var sampleID = String(tocEntry.id);
          if (selectedSpectra.filter(function (spectrum) {
            return String(spectrum.id) === spectrumID;
          }).length > 0) return;
          spectrum.sampleID = sampleID;
          spectrum.id = spectrumID;
          spectrum.display = true;
          spectrum.pcaModel = false;
          spectrum.sampleCode = tocEntry.key.slice(1).join('_');
          spectrum.toc = tocEntry;
          spectrum.category = spectrum.sampleCode;
          spectrum._highlight = Math.random();
          selectedSpectra.push(spectrum);
        }
      }
    }]);

    return SpectraDataSet;
  }();

  function recolor(selectedSpectra) {
    // need to count the categories
    var categoryColors = {};
    var existingColors = 0;
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = selectedSpectra[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var spectrum = _step3.value;
        var category = String(spectrum.category);

        if (categoryColors[category] === undefined) {
          if (spectrum.color) {
            categoryColors[String(spectrum.category)] = spectrum.color;
            existingColors++;
          } else {
            categoryColors[String(spectrum.category)] = '';
          }
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    var nbColors = Math.max(8, 1 << Math.ceil(Math.log2(Object.keys(categoryColors).length)));

    var colors = _color2["default"].getDistinctColorsAsString(nbColors);

    var i = existingColors;

    for (var key in categoryColors) {
      if (!categoryColors[key]) {
        categoryColors[key] = colors[i++];
      }
    }

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = selectedSpectra[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _spectrum = _step4.value;

        if (!_spectrum.color) {
          _spectrum.color = categoryColors[String(_spectrum.category)];
        }
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
          _iterator4["return"]();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }
  }

  module.exports = SpectraDataSet;
});