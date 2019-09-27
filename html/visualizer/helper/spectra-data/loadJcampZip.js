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
            filterOptions,
            JSZip,
            superagent,
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
            jcamp,
            spectrum,
            _args = arguments;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                filterOptions = options.filterOptions;
                _context.next = 4;
                return API.require('jszip');

              case 4:
                JSZip = _context.sent;
                _context.next = 7;
                return API.require('superagent');

              case 7:
                superagent = _context.sent;
                _context.next = 10;
                return API.require('SD');

              case 10:
                SD = _context.sent;
                jszip = new JSZip();
                spectraDataSet = [];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 16;
                _iterator = zipURLs[Symbol.iterator]();

              case 18:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 61;
                  break;
                }

                zipURL = _step.value;
                _context.next = 22;
                return superagent.get(zipURL).withCredentials().responseType('blob');

              case 22:
                zipFiles = _context.sent;
                _context.next = 25;
                return jszip.loadAsync(zipFiles.body);

              case 25:
                zip = _context.sent;
                filesToProcess = Object.keys(zip.files).filter(function (filename) {
                  return filename.match(/jdx$/);
                });
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context.prev = 30;
                _iterator2 = filesToProcess[Symbol.iterator]();

              case 32:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context.next = 44;
                  break;
                }

                filename = _step2.value;
                _context.next = 36;
                return zip.files[filename].async('string');

              case 36:
                jcamp = _context.sent;
                spectrum = SD.NMR.fromJcamp(jcamp, {});
                spectrum.sd.filename = filename.replace(/[0-9 a-z A-Z]+\//, '').replace(/.jdx$/, '');
                if (options.filter) options.filter(spectrum, filterOptions);
                spectraDataSet.push(spectrum);

              case 41:
                _iteratorNormalCompletion2 = true;
                _context.next = 32;
                break;

              case 44:
                _context.next = 50;
                break;

              case 46:
                _context.prev = 46;
                _context.t0 = _context["catch"](30);
                _didIteratorError2 = true;
                _iteratorError2 = _context.t0;

              case 50:
                _context.prev = 50;
                _context.prev = 51;

                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }

              case 53:
                _context.prev = 53;

                if (!_didIteratorError2) {
                  _context.next = 56;
                  break;
                }

                throw _iteratorError2;

              case 56:
                return _context.finish(53);

              case 57:
                return _context.finish(50);

              case 58:
                _iteratorNormalCompletion = true;
                _context.next = 18;
                break;

              case 61:
                _context.next = 67;
                break;

              case 63:
                _context.prev = 63;
                _context.t1 = _context["catch"](16);
                _didIteratorError = true;
                _iteratorError = _context.t1;

              case 67:
                _context.prev = 67;
                _context.prev = 68;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 70:
                _context.prev = 70;

                if (!_didIteratorError) {
                  _context.next = 73;
                  break;
                }

                throw _iteratorError;

              case 73:
                return _context.finish(70);

              case 74:
                return _context.finish(67);

              case 75:
                return _context.abrupt("return", spectraDataSet);

              case 76:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[16, 63, 67, 75], [30, 46, 50, 58], [51,, 53, 57], [68,, 70, 74]]);
      }));

      function loadZips(_x) {
        return _loadZips.apply(this, arguments);
      }

      return loadZips;
    }()
  );
});