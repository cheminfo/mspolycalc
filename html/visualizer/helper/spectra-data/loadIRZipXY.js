"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

define(['src/util/api'], function (API) {
  return (
    /*#__PURE__*/
    function () {
      var _loadZips = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(zipURLs) {
        var options,
            JSZip,
            superagent,
            xyParser,
            SD,
            jszip,
            spectraDataSet,
            _iteratorNormalCompletion,
            _didIteratorError,
            _iteratorError,
            _iterator,
            _step,
            zipURL,
            zipFiles,
            zip,
            filesToProcess,
            _iteratorNormalCompletion2,
            _didIteratorError2,
            _iteratorError2,
            _iterator2,
            _step2,
            filename,
            fileData,
            result,
            spectrum,
            _args = arguments;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                _context.next = 3;
                return API.require('jszip');

              case 3:
                JSZip = _context.sent;
                _context.next = 6;
                return API.require('superagent');

              case 6:
                superagent = _context.sent;
                _context.next = 9;
                return API.require('https://www.lactame.com/lib/xy-parser/1.3.0/xy-parser.min.js');

              case 9:
                xyParser = _context.sent;
                _context.next = 12;
                return API.require('https://www.lactame.com/lib/spectra-data/3.0.7/spectra-data.min.js');

              case 12:
                SD = _context.sent;
                jszip = new JSZip();
                spectraDataSet = [];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 18;
                _iterator = zipURLs[Symbol.iterator]();

              case 20:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 65;
                  break;
                }

                zipURL = _step.value;
                _context.next = 24;
                return superagent.get(zipURL).withCredentials().responseType('blob');

              case 24:
                zipFiles = _context.sent;
                _context.next = 27;
                return jszip.loadAsync(zipFiles.body);

              case 27:
                zip = _context.sent;
                filesToProcess = Object.keys(zip.files).filter(function (filename) {
                  return filename.match(/\.[0-9]+$/);
                });
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context.prev = 32;
                _iterator2 = filesToProcess[Symbol.iterator]();

              case 34:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context.next = 48;
                  break;
                }

                filename = _step2.value;
                _context.next = 38;
                return zip.files[filename].async('string');

              case 38:
                fileData = _context.sent;
                result = xyParser(fileData, {
                  arrayType: 'xxyy'
                });
                spectrum = SD.NMR.fromXY(result[0], result[1], {
                  dataType: 'IR',
                  xUnit: 'waveNumber',
                  yUnit: ''
                });
                if (options.filter) options.filter(spectrum.sd);
                spectrum.sd.info = {};
                spectrum.sd.filename = filename.replace(/[0-9 a-z A-Z]+\//, '');
                spectraDataSet.push(spectrum);

              case 45:
                _iteratorNormalCompletion2 = true;
                _context.next = 34;
                break;

              case 48:
                _context.next = 54;
                break;

              case 50:
                _context.prev = 50;
                _context.t0 = _context["catch"](32);
                _didIteratorError2 = true;
                _iteratorError2 = _context.t0;

              case 54:
                _context.prev = 54;
                _context.prev = 55;

                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }

              case 57:
                _context.prev = 57;

                if (!_didIteratorError2) {
                  _context.next = 60;
                  break;
                }

                throw _iteratorError2;

              case 60:
                return _context.finish(57);

              case 61:
                return _context.finish(54);

              case 62:
                _iteratorNormalCompletion = true;
                _context.next = 20;
                break;

              case 65:
                _context.next = 71;
                break;

              case 67:
                _context.prev = 67;
                _context.t1 = _context["catch"](18);
                _didIteratorError = true;
                _iteratorError = _context.t1;

              case 71:
                _context.prev = 71;
                _context.prev = 72;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 74:
                _context.prev = 74;

                if (!_didIteratorError) {
                  _context.next = 77;
                  break;
                }

                throw _iteratorError;

              case 77:
                return _context.finish(74);

              case 78:
                return _context.finish(71);

              case 79:
                return _context.abrupt("return", spectraDataSet);

              case 80:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[18, 67, 71, 79], [32, 50, 54, 62], [55,, 57, 61], [72,, 74, 78]]);
      }));

      function loadZips(_x) {
        return _loadZips.apply(this, arguments);
      }

      return loadZips;
    }()
  );
});