"use strict";

define(["module", "src/main/datas", "src/util/api", "src/util/ui", "../rest-on-couch/Roc", "./ExpandableMolecule", "./Nmr1dManager", "./MF", "./jpaths", "./libs/elnPlugin", "./Sequence", "./libs/convertToJcamp"], function (module, _datas, _api, _ui, _Roc, _ExpandableMolecule, _Nmr1dManager, _MF, _jpaths, _elnPlugin, _Sequence, _convertToJcamp) {
  var _datas2 = _interopRequireDefault(_datas);

  var _api2 = _interopRequireDefault(_api);

  var _ui2 = _interopRequireDefault(_ui);

  var _Roc2 = _interopRequireDefault(_Roc);

  var _ExpandableMolecule2 = _interopRequireDefault(_ExpandableMolecule);

  var _Nmr1dManager2 = _interopRequireDefault(_Nmr1dManager);

  var _MF2 = _interopRequireDefault(_MF);

  var _elnPlugin2 = _interopRequireDefault(_elnPlugin);

  var _Sequence2 = _interopRequireDefault(_Sequence);

  var _convertToJcamp2 = _interopRequireDefault(_convertToJcamp);

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

  var DataObject = _datas2["default"].DataObject;
  var defaultOptions = {
    varName: 'sample',
    track: false,
    bindChange: true
  };

  var Sample = function () {
    function Sample(couchDB, uuid, options) {
      var _this = this;

      _classCallCheck(this, Sample);

      this.options = Object.assign({}, defaultOptions, options);

      var roc = _api2["default"].cache('roc');

      if (!roc) {
        roc = new _Roc2["default"]({
          url: couchDB.url,
          database: couchDB.database,
          processor: _elnPlugin2["default"],
          kind: couchDB.kind
        });

        _api2["default"].cache('roc', roc);
      }

      this.roc = roc;

      if (options.onSync) {
        var emitter = this.roc.getDocumentEventEmitter(uuid);
        emitter.on('sync', function () {
          return options.onSync(true);
        });
        emitter.on('unsync', function () {
          return options.onSync(false);
        });
      }

      this.uuid = uuid;

      if (!this.uuid) {
        _ui2["default"].showNotification('Cannot create an editable sample without an uuid', 'error');

        return;
      }

      this.sample = this.roc.document(this.uuid, this.options).then(function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sample) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this.sample = sample;

                  _this._loadInstanceInVisualizer();

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());

      this._checkServerChanges();
    }

    _createClass(Sample, [{
      key: "waitSampleLoaded",
      value: function waitSampleLoaded() {
        return this.sample;
      }
    }, {
      key: "_checkServerChanges",
      value: function _checkServerChanges() {
        var _this2 = this;

        window.setInterval(_asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var uuid, rev, headers, remoteRev, target, remoteHasChangedDiv, alertDiv;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(_this2.sample && _this2.sample._rev)) {
                    _context2.next = 11;
                    break;
                  }

                  uuid = _this2.sample._id;
                  rev = _this2.sample._rev;
                  _context2.next = 5;
                  return _this2.roc.getHeader(uuid);

                case 5:
                  headers = _context2.sent;

                  if (!(!headers || !headers.etag)) {
                    _context2.next = 8;
                    break;
                  }

                  return _context2.abrupt("return");

                case 8:
                  remoteRev = String(headers.etag).replace(/"/g, '');
                  target = document.getElementById('modules-grid');

                  if (remoteRev && rev !== remoteRev && _this2.options.track) {
                    remoteHasChangedDiv = document.getElementById('remoteHasChanged');

                    if (!remoteHasChangedDiv) {
                      alertDiv = document.createElement('DIV');
                      alertDiv.innerHTML = "<p id=\"remoteHasChanged\" style=\"font-weight: bold; color: red; font-size: 3em; background-color: yellow\">\nThis entry has changed on the server, please reload the sample.<br>\nYour local changes will be lost.</p>";
                      alertDiv.style.zIndex = 99;
                      alertDiv.style.position = 'fixed';
                      target.prepend(alertDiv);
                    } else {
                      remoteHasChangedDiv.style.display = 'block';
                    }

                    _this2.remoteChanged = true;
                  }

                case 11:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        })), 60 * 1000);
      }
    }, {
      key: "_loadInstanceInVisualizer",
      value: function () {
        var _loadInstanceInVisualizer2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var _this3 = this;

          var sampleVar;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  updateSample(this.sample);
                  sampleVar = _api2["default"].getVar(this.options.varName);
                  (0, _jpaths.createVar)(sampleVar, 'sampleCode');
                  (0, _jpaths.createVar)(sampleVar, 'batchCode');
                  (0, _jpaths.createVar)(sampleVar, 'creationDate');
                  (0, _jpaths.createVar)(sampleVar, 'modificationDate');
                  (0, _jpaths.createVar)(sampleVar, 'content');
                  (0, _jpaths.createVar)(sampleVar, 'general');
                  (0, _jpaths.createVar)(sampleVar, 'molfile');
                  (0, _jpaths.createVar)(sampleVar, 'firstPeptide');
                  (0, _jpaths.createVar)(sampleVar, 'firstNucleotide');
                  (0, _jpaths.createVar)(sampleVar, 'mf');
                  (0, _jpaths.createVar)(sampleVar, 'mw');
                  (0, _jpaths.createVar)(sampleVar, 'em');
                  (0, _jpaths.createVar)(sampleVar, 'title');
                  (0, _jpaths.createVar)(sampleVar, 'description');
                  (0, _jpaths.createVar)(sampleVar, 'keyword');
                  (0, _jpaths.createVar)(sampleVar, 'name');
                  (0, _jpaths.createVar)(sampleVar, 'physical');
                  (0, _jpaths.createVar)(sampleVar, 'bp');
                  (0, _jpaths.createVar)(sampleVar, 'nd');
                  (0, _jpaths.createVar)(sampleVar, 'mp');
                  (0, _jpaths.createVar)(sampleVar, 'density');
                  (0, _jpaths.createVar)(sampleVar, 'stockHistory');
                  (0, _jpaths.createVar)(sampleVar, 'lastStock');
                  (0, _jpaths.createVar)(sampleVar, 'supplier');
                  (0, _jpaths.createVar)(sampleVar, 'ir');
                  (0, _jpaths.createVar)(sampleVar, 'uv');
                  (0, _jpaths.createVar)(sampleVar, 'raman');
                  (0, _jpaths.createVar)(sampleVar, 'mass');
                  (0, _jpaths.createVar)(sampleVar, 'nmr');
                  (0, _jpaths.createVar)(sampleVar, 'iv');
                  (0, _jpaths.createVar)(sampleVar, 'xray');
                  (0, _jpaths.createVar)(sampleVar, 'chromatogram');
                  (0, _jpaths.createVar)(sampleVar, 'thermogravimetricAnalysis');
                  (0, _jpaths.createVar)(sampleVar, 'elementalAnalysis');
                  (0, _jpaths.createVar)(sampleVar, 'differentialScanningCalorimetry');
                  (0, _jpaths.createVar)(sampleVar, 'image');
                  (0, _jpaths.createVar)(sampleVar, 'sampleCode');
                  (0, _jpaths.createVar)(sampleVar, 'attachments');
                  (0, _jpaths.createVar)(sampleVar, 'nucleic');
                  (0, _jpaths.createVar)(sampleVar, 'peptidic');
                  (0, _jpaths.createVar)(sampleVar, 'biology');

                  this._initializeObjects();

                  this.onChange = function (event) {
                    var jpathStr = event.jpath.join('.');

                    if (jpathStr.match(/\$content.spectra.nmr.[0-9]+.range/)) {
                      _this3.nmr1dManager.rangesHasChanged();
                    }

                    switch (jpathStr) {
                      case '$content.general.molfile':
                        _this3.mf.fromMolfile();

                        _this3.nmr1dManager.handleAction({
                          name: 'clearAllAssignments'
                        });

                        break;

                      case '$content.general.mf':
                        _this3.mf.fromMF();

                        _this3.nmr1dManager.updateIntegralOptionsFromMF();

                        break;

                      case '$content.biology':
                        break;

                      case '$content.general.sequence':
                        throw new Error('Trying to change old sequence, this is a bug');

                      default:
                        break;
                      // ignore
                    }
                  };

                  this.bindChange();

                case 46:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function _loadInstanceInVisualizer() {
          return _loadInstanceInVisualizer2.apply(this, arguments);
        }

        return _loadInstanceInVisualizer;
      }()
    }, {
      key: "_initializeObjects",
      value: function _initializeObjects() {
        this.expandableMolecule = new _ExpandableMolecule2["default"](this.sample, this.options);
        this.nmr1dManager = new _Nmr1dManager2["default"](this.sample);
        this.mf = new _MF2["default"](this.sample);
        this.mf.fromMF();
      }
    }, {
      key: "bindChange",
      value: function bindChange() {
        if (this.options.bindChange) {
          this.sample.unbindChange(this.onChange);
          this.sample.onChange(this.onChange);
        }
      }
    }, {
      key: "unbindChange",
      value: function unbindChange() {
        if (this.options.bindChange) this.sample.unbindChange(this.onChange);
      }
    }, {
      key: "handleOverview",
      value: function () {
        var _handleOverview = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(variableName) {
          var data, file;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  data = _api2["default"].getData(variableName);

                  if (!(data && data.file && data.file[0])) {
                    _context4.next = 15;
                    break;
                  }

                  file = data.file[0];
                  _context4.t0 = file.mimetype;
                  _context4.next = _context4.t0 === 'image/png' ? 6 : _context4.t0 === 'image/jpeg' ? 8 : _context4.t0 === 'image/svg+xml' ? 10 : 12;
                  break;

                case 6:
                  file.filename = 'overview.png';
                  return _context4.abrupt("break", 14);

                case 8:
                  file.filename = 'overview.jpg';
                  return _context4.abrupt("break", 14);

                case 10:
                  file.filename = 'overview.svg';
                  return _context4.abrupt("break", 14);

                case 12:
                  _ui2["default"].showNotification('For overview only the following formats are allowed: png, jpg and svg.', 'error');

                  return _context4.abrupt("return", undefined);

                case 14:
                  return _context4.abrupt("return", this.handleDrop(variableName, false));

                case 15:
                  return _context4.abrupt("return", undefined);

                case 16:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function handleOverview(_x2) {
          return _handleOverview.apply(this, arguments);
        }

        return handleOverview;
      }()
    }, {
      key: "handleDrop",
      value: function () {
        var _handleDrop = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(variableName, askType) {
          var options,
              type,
              types,
              droppedDatas,
              jcampTypes,
              _iteratorNormalCompletion,
              _didIteratorError,
              _iteratorError,
              _iterator,
              _step,
              droppedData,
              extension,
              info,
              meta,
              content,
              _args5 = arguments;

          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  options = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : {};

                  if (variableName) {
                    _context5.next = 3;
                    break;
                  }

                  throw new Error('handleDrop expects a variable name');

                case 3:
                  variableName = String(variableName);

                  if (askType) {
                    _context5.next = 11;
                    break;
                  }

                  types = {
                    droppedNmr: 'nmr',
                    droppedIR: 'ir',
                    droppedUV: 'uv',
                    droppedIV: 'iv',
                    droppedMS: 'mass',
                    droppedRaman: 'raman',
                    droppedChrom: 'chromatogram',
                    droppedXray: 'xray',
                    droppedOverview: 'image',
                    droppedImage: 'image',
                    droppedGenbank: 'genbank'
                  };

                  if (types[variableName]) {
                    _context5.next = 8;
                    break;
                  }

                  throw new Error('Unexpected variable name');

                case 8:
                  type = types[variableName];
                  _context5.next = 16;
                  break;

                case 11:
                  _context5.next = 13;
                  return _ui2["default"].choose({
                    nmr: 'NMR (csv, tsv, txt, jcamp, pdf)',
                    mass: 'Mass (csv, tsv, txt, jcamp, pdf, netcdf, xml)',
                    ir: 'Infrared (csv, tsv, txt, jcamp, pdf)',
                    raman: 'Raman (csv, tsv, txt, jcamp, pdf)',
                    uv: 'UV (csv, tsv, txt, jcamp, pdf)',
                    iv: 'IV (csv, tsv, txt, jcamp, pdf)',
                    chromatogram: 'Chromatogram LC, GC, LC/MS, GC/MS (csv, tsv, txt, jcamp, pdf, netcdf, xml)',
                    thermogravimetricAnalysis: 'Thermogravimetric Analysis (txt)',
                    differentialScanningCalorimetry: 'Differential Scanning Calorimetry (txt)',
                    xray: 'Xray (cif, pdb)',
                    image: 'Images (jpg, png or tiff)',
                    other: 'Other'
                  }, {
                    noConfirmation: true,
                    columns: [{
                      id: 'description',
                      name: 'description',
                      field: 'description'
                    }]
                  });

                case 13:
                  type = _context5.sent;

                  if (type) {
                    _context5.next = 16;
                    break;
                  }

                  return _context5.abrupt("return");

                case 16:
                  droppedDatas = _api2["default"].getData(variableName);
                  droppedDatas = droppedDatas.file || droppedDatas.str;
                  /*
                    Possible autoconvertion of text file to jcamp
                    * if filename ends with TXT, TSV or CSV
                    * use convert-to-jcamp
                  */

                  if (!options.autoJcamp) {
                    _context5.next = 63;
                    break;
                  }

                  jcampTypes = {
                    nmr: {
                      type: 'NMR SPECTRUM',
                      xUnit: 'Delta [ppm]',
                      yUnit: 'Relative'
                    },
                    ir: {
                      type: 'IR SPECTRUM',
                      xUnit: 'wavelength [cm-1]',
                      yUnit: ['Transmittance (%)', 'Absorbance']
                    },
                    raman: {
                      type: 'RAMAN SPECTRUM',
                      xUnit: 'wavelength [cm-1]',
                      yUnit: 'Absorbance'
                    },
                    iv: {
                      type: 'IV SPECTRUM',
                      xUnit: ['Potential vs Fc/Fc+ [V]', 'Potential vs Ag/AgNO3 [V]', 'Potential vs Ag/AgCl/KCl [V]', 'Potential vs Ag/AgCl/NaCl [V]', 'Potential vs SCE [V]', 'Potential vs NHE [V]', 'Potential vs SSCE [V]', 'Potential vs Hg/Hg2SO4/K2SO4 [V]'],
                      yUnit: ['Current [mA]', 'Current [µA]']
                    },
                    uv: {
                      type: 'UV SPECTRUM',
                      xUnit: 'wavelength [nm]',
                      yUnit: 'Absorbance'
                    },
                    mass: {
                      type: 'MASS SPECTRUM',
                      xUnit: 'm/z [Da]',
                      yUnit: 'Relative'
                    }
                  };
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context5.prev = 23;
                  _iterator = droppedDatas[Symbol.iterator]();

                case 25:
                  if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    _context5.next = 49;
                    break;
                  }

                  droppedData = _step.value;
                  extension = droppedData.filename.replace(/.*\./, '').toLowerCase();

                  if (!(extension === 'txt' || extension === 'csv' || extension === 'tsv')) {
                    _context5.next = 46;
                    break;
                  }

                  info = jcampTypes[type];
                  info.filename = "".concat(droppedData.filename.replace(/\.[^.]*$/, ''), ".jdx");

                  if (!info) {
                    _context5.next = 45;
                    break;
                  }

                  _context5.next = 34;
                  return _ui2["default"].form("\n              <style>\n                  #jcamp {\n                      zoom: 1.5;\n                  }\n              </style>\n              <div id='jcamp'>\n                  <b>Automatic conversion of text file to jcamp</b>\n                  <form>\n                  <table>\n                  <tr>\n                    <th>Kind</th>\n                    <td><input type=\"text\" readonly name=\"type\" value=\"".concat(info.type, "\"></td>\n                  </tr>\n                  <tr>\n                    <th>Filename (ending with .jdx)</th>\n                    <td><input type=\"text\" pattern=\".*\\.jdx$\" name=\"filename\" size=40 value=\"").concat(info.filename, "\"></td>\n                  </tr>\n                  <tr>\n                    <th>xUnit (horizon axis)</th>\n                    ").concat(info.xUnit instanceof Array ? "<td><select name=\"xUnit\">".concat(info.xUnit.map(function (xUnit) {
                    return "<option value=\"".concat(xUnit, "\">").concat(xUnit, "</option>");
                  }), "</select></td>") : "<td><input type=\"text\" readonly name=\"xUnit\" value=\"".concat(info.xUnit, "\"></td>"), "\n                  </tr>\n                  <tr>\n                  <th>yUnit (vectical axis)</th>\n                  ").concat(info.yUnit instanceof Array ? "<td><select name=\"yUnit\">".concat(info.yUnit.map(function (yUnit) {
                    return "<option value=\"".concat(yUnit, "\">").concat(yUnit, "</option>");
                  }), "</select></td>") : "<td><input type=\"text\" readonly name=\"yUnit\" value=\"".concat(info.yUnit, "\"></td>"), "\n                </tr>\n                  </table>\n                    <input type=\"submit\" value=\"Submit\"/>\n                  </form>\n              </div>\n            "), {}, {
                    dialog: {
                      width: 600
                    }
                  });

                case 34:
                  meta = _context5.sent;

                  if (meta) {
                    _context5.next = 37;
                    break;
                  }

                  return _context5.abrupt("return");

                case 37:
                  droppedData.filename = "".concat(meta.filename);
                  droppedData.mimetype = 'chemical/x-jcamp-dx';
                  droppedData.contentType = 'chemical/x-jcamp-dx';
                  content = droppedData.content;

                  if (droppedData.encoding === 'base64') {
                    content = atob(droppedData.content);
                    droppedData.encoding = 'text';
                  }

                  droppedData.content = (0, _convertToJcamp2["default"])(content, {
                    meta: meta
                  });
                  _context5.next = 46;
                  break;

                case 45:
                  // eslint-disable-next-line no-console
                  console.log('Could not convert to jcamp file: ', type);

                case 46:
                  _iteratorNormalCompletion = true;
                  _context5.next = 25;
                  break;

                case 49:
                  _context5.next = 55;
                  break;

                case 51:
                  _context5.prev = 51;
                  _context5.t0 = _context5["catch"](23);
                  _didIteratorError = true;
                  _iteratorError = _context5.t0;

                case 55:
                  _context5.prev = 55;
                  _context5.prev = 56;

                  if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                    _iterator["return"]();
                  }

                case 58:
                  _context5.prev = 58;

                  if (!_didIteratorError) {
                    _context5.next = 61;
                    break;
                  }

                  throw _iteratorError;

                case 61:
                  return _context5.finish(58);

                case 62:
                  return _context5.finish(55);

                case 63:
                  if (!(type === 'other')) {
                    _context5.next = 68;
                    break;
                  }

                  _context5.next = 66;
                  return this.roc.addAttachment(this.sample, droppedDatas);

                case 66:
                  _context5.next = 70;
                  break;

                case 68:
                  _context5.next = 70;
                  return this.attachFiles(droppedDatas, type, options);

                case 70:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this, [[23, 51, 55, 63], [56,, 58, 62]]);
        }));

        function handleDrop(_x3, _x4) {
          return _handleDrop.apply(this, arguments);
        }

        return handleDrop;
      }()
    }, {
      key: "handleAction",
      value: function () {
        var _handleAction = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(action) {
          var advancedOptions1H, attachment, tempType, type, droppedDatas, ok, remoteHasChangedDiv;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  if (action) {
                    _context6.next = 2;
                    break;
                  }

                  return _context6.abrupt("return");

                case 2:
                  if (!(this.expandableMolecule && this.expandableMolecule.handleAction(action))) {
                    _context6.next = 4;
                    break;
                  }

                  return _context6.abrupt("return");

                case 4:
                  if (!(this.nmr1dManager && this.nmr1dManager.handleAction(action))) {
                    _context6.next = 6;
                    break;
                  }

                  return _context6.abrupt("return");

                case 6:
                  _context6.t0 = action.name;
                  _context6.next = _context6.t0 === 'save' ? 9 : _context6.t0 === 'explodeSequences' ? 12 : _context6.t0 === 'calculateMFFromSequence' ? 14 : _context6.t0 === 'createOptions' ? 16 : _context6.t0 === 'deleteAttachment' ? 19 : _context6.t0 === 'deleteNmr' ? 23 : _context6.t0 === 'unattach' ? 23 : _context6.t0 === 'attachNMR' ? 26 : _context6.t0 === 'attachIR' ? 26 : _context6.t0 === 'attachRaman' ? 26 : _context6.t0 === 'attachMass' ? 26 : _context6.t0 === 'refresh' ? 33 : 49;
                  break;

                case 9:
                  _context6.next = 11;
                  return this.roc.update(this.sample);

                case 11:
                  return _context6.abrupt("break", 50);

                case 12:
                  _Sequence2["default"].explodeSequences(this.sample);

                  return _context6.abrupt("break", 50);

                case 14:
                  _Sequence2["default"].calculateMFFromSequence(this.sample);

                  return _context6.abrupt("break", 50);

                case 16:
                  advancedOptions1H = _api2["default"].cache('nmr1hAdvancedOptions');

                  if (advancedOptions1H) {
                    _api2["default"].createData('nmr1hOndeTemplate', _api2["default"].cache('nmr1hOndeTemplates').full);
                  } else {
                    _api2["default"].createData('nmr1hOndeTemplate', _api2["default"].cache('nmr1hOndeTemplates')["short"]);
                  }

                  return _context6.abrupt("break", 50);

                case 19:
                  attachment = action.value.name;
                  _context6.next = 22;
                  return this.roc.deleteAttachment(this.sample, attachment);

                case 22:
                  return _context6.abrupt("break", 50);

                case 23:
                  _context6.next = 25;
                  return this.roc.unattach(this.sample, action.value);

                case 25:
                  return _context6.abrupt("break", 50);

                case 26:
                  tempType = action.name.replace('attach', '');
                  type = tempType.charAt(0).toLowerCase() + tempType.slice(1);
                  droppedDatas = action.value;
                  droppedDatas = droppedDatas.file || droppedDatas.str;
                  _context6.next = 32;
                  return this.attachFiles(droppedDatas, type);

                case 32:
                  return _context6.abrupt("break", 50);

                case 33:
                  _context6.next = 35;
                  return _ui2["default"].confirm('Are you sure you want to refresh? This will discard your local modifications.');

                case 35:
                  ok = _context6.sent;

                  if (ok) {
                    _context6.next = 38;
                    break;
                  }

                  return _context6.abrupt("return");

                case 38:
                  this.unbindChange();
                  this.expandableMolecule.unbindChange();
                  _context6.next = 42;
                  return this.roc.discardLocal(this.sample);

                case 42:
                  this._initializeObjects();

                  this.bindChange();
                  this.remoteChanged = false;
                  remoteHasChangedDiv = document.getElementById('remoteHasChanged');

                  if (remoteHasChangedDiv) {
                    remoteHasChangedDiv.style.display = 'none';
                  }

                  this.nmr1dManager.handleAction({
                    name: 'nmrChanged'
                  });
                  return _context6.abrupt("break", 50);

                case 49:
                  return _context6.abrupt("break", 50);

                case 50:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        function handleAction(_x5) {
          return _handleAction.apply(this, arguments);
        }

        return handleAction;
      }()
    }, {
      key: "attachFiles",
      value: function () {
        var _attachFiles = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(files, type, options) {
          var i, data;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  if (!(!files || !type)) {
                    _context7.next = 2;
                    break;
                  }

                  return _context7.abrupt("return");

                case 2:
                  if (!Array.isArray(files)) {
                    files = [files];
                  }

                  i = 0;

                case 4:
                  if (!(i < files.length)) {
                    _context7.next = 11;
                    break;
                  }

                  data = DataObject.resurrect(files[i]);
                  _context7.next = 8;
                  return this.roc.attach(type, this.sample, data, options);

                case 8:
                  i++;
                  _context7.next = 4;
                  break;

                case 11:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        function attachFiles(_x6, _x7, _x8) {
          return _attachFiles.apply(this, arguments);
        }

        return attachFiles;
      }()
    }]);

    return Sample;
  }();

  function updateSample(sample) {
    if (!sample.$content.general) {
      sample.$content.general = {};
    }
    /** This is the old place we used to put the sequence.
     * By default we expect it is a peptidic sequence
     */


    if (sample.$content.general.sequence) {
      // eslint-disable-next-line no-console
      console.log('Migrating sequence', sample.$content.general.sequence);
      if (!sample.$content.biology) sample.$content.biology = {};

      if (!sample.$content.biology.peptidic) {
        sample.$content.biology.peptidic = [];
      }

      if (!sample.$content.biology.peptidic.length > 0) {
        sample.$content.biology.peptidic[0] = {};
      }

      if (!sample.$content.biology.peptidic[0].seq) {
        sample.$content.biology.peptidic[0].seq = [];
      }

      if (!sample.$content.biology.peptidic[0].seq.length > 0) {
        sample.$content.biology.peptidic[0].seq[0] = {};
      }

      sample.setChildSync(['$content', 'biology', 'peptidic', 0, 'seq', 0, 'sequence'], sample.$content.general.sequence);
      sample.$content.general.sequence = undefined;
    }
  }

  module.exports = Sample;
});