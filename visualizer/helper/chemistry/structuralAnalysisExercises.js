"use strict";

define(["exports", "src/util/couchdbAttachments", "../eln/libs/OCLE"], function (exports, _couchdbAttachments, _OCLE) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.fetchData = undefined;

  var _couchdbAttachments2 = _interopRequireDefault(_couchdbAttachments);

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

  function fetchData() {
    return _fetchData.apply(this, arguments);
  }

  function _fetchData() {
    _fetchData = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var query,
          url,
          ca,
          files,
          data,
          _iteratorNormalCompletion,
          _didIteratorError,
          _iteratorError,
          _iterator,
          _step,
          file,
          datum,
          molfile,
          molecule,
          results,
          _i,
          _Object$keys,
          key,
          counter,
          _args = arguments;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = _args.length > 0 && _args[0] !== undefined ? _args[0] : undefined;
              url = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'https://couch.cheminfo.org/cheminfo-public/668677b6432fb3fde76305cfe706856d';
              ca = new _couchdbAttachments2["default"](url);
              _context.next = 5;
              return ca.fetchList();

            case 5:
              files = _context.sent;
              files = files.filter(function (a) {
                return a.filename.match('upload');
              });
              files = files.map(function (a) {
                var filename = a.filename.replace('upload/', '');
                var parts;

                if (filename.match(/.*\.mol/)) {
                  parts = [filename.replace(/\..*/, ''), 'mol'];
                } else {
                  filename = filename.replace(/\..+?$/, '');
                  parts = filename.split('_');
                }

                return {
                  filename: filename,
                  rn: parts[0],
                  kind: parts[1],
                  experiment: parts[2],
                  url: a.url
                };
              });
              files = files.filter(function (a) {
                return !query || query[a.rn];
              }); // we combine the files based on some filters

              data = {};
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 13;
              _iterator = files[Symbol.iterator]();

            case 15:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context.next = 72;
                break;
              }

              file = _step.value;

              if (!data[file.rn]) {
                data[file.rn] = {
                  rn: file.rn,
                  myResult: ''
                };
              }

              datum = data[file.rn];
              _context.t0 = file.kind;
              _context.next = _context.t0 === 'mol' ? 22 : _context.t0 === 'mass' ? 39 : _context.t0 === 'ir' ? 42 : _context.t0 === 'nmr' ? 45 : 68;
              break;

            case 22:
              datum.mol = {
                type: 'mol2d',
                url: file.url
              };
              _context.next = 25;
              return fetch(file.url);

            case 25:
              _context.next = 27;
              return _context.sent.text();

            case 27:
              molfile = _context.sent;
              molecule = _OCLE2["default"].Molecule.fromMolfile(molfile);
              datum.oclCode = molecule.getIDCode();
              datum.id = datum.rn;
              datum.result = datum.oclCode;
              datum.mf = molecule.getMolecularFormula().formula;
              molecule.addImplicitHydrogens();
              datum.nbDiaH = molecule.getGroupedDiastereotopicAtomIDs({
                atomLabel: 'H'
              }).length;
              datum.nbDiaC = molecule.getGroupedDiastereotopicAtomIDs({
                atomLabel: 'C'
              }).length;
              datum.nbH = Number(datum.mf.replace(/.*H([0-9]+).*/, '$1'));
              datum.nbC = Number(datum.mf.replace(/.*C([0-9]+).*/, '$1'));
              return _context.abrupt("break", 69);

            case 39:
              datum.mass = {
                type: 'jcamp',
                url: file.url
              };
              datum.isMass = true;
              return _context.abrupt("break", 69);

            case 42:
              datum.ir = {
                type: 'jcamp',
                url: file.url
              };
              datum.isIr = true;
              return _context.abrupt("break", 69);

            case 45:
              _context.t1 = file.experiment;
              _context.next = _context.t1 === '1h' ? 48 : _context.t1 === 'cosy' ? 51 : _context.t1 === 'hsqc' ? 54 : _context.t1 === 'hmbc' ? 57 : _context.t1 === '13cDec' ? 60 : _context.t1 === '13c' ? 63 : 66;
              break;

            case 48:
              datum.h1 = {
                type: 'jcamp',
                url: file.url
              };
              datum.isH1 = true;
              return _context.abrupt("break", 67);

            case 51:
              datum.cosy = {
                type: 'jcamp',
                url: file.url
              };
              datum.isCosy = true;
              return _context.abrupt("break", 67);

            case 54:
              datum.hsqc = {
                type: 'jcamp',
                url: file.url
              };
              datum.isHsqc = true;
              return _context.abrupt("break", 67);

            case 57:
              datum.hmbc = {
                type: 'jcamp',
                url: file.url
              };
              datum.isHmbc = true;
              return _context.abrupt("break", 67);

            case 60:
              datum.c13dec = {
                type: 'jcamp',
                url: file.url
              };
              datum.isC13dec = true;
              return _context.abrupt("break", 67);

            case 63:
              datum.c13 = {
                type: 'jcamp',
                url: file.url
              };
              datum.isC13 = true;
              return _context.abrupt("break", 67);

            case 66:
              return _context.abrupt("break", 67);

            case 67:
              return _context.abrupt("break", 69);

            case 68:
              return _context.abrupt("break", 69);

            case 69:
              _iteratorNormalCompletion = true;
              _context.next = 15;
              break;

            case 72:
              _context.next = 78;
              break;

            case 74:
              _context.prev = 74;
              _context.t2 = _context["catch"](13);
              _didIteratorError = true;
              _iteratorError = _context.t2;

            case 78:
              _context.prev = 78;
              _context.prev = 79;

              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }

            case 81:
              _context.prev = 81;

              if (!_didIteratorError) {
                _context.next = 84;
                break;
              }

              throw _iteratorError;

            case 84:
              return _context.finish(81);

            case 85:
              return _context.finish(78);

            case 86:
              results = [];

              for (_i = 0, _Object$keys = Object.keys(data); _i < _Object$keys.length; _i++) {
                key = _Object$keys[_i];
                results.push(data[key]);
              }

              counter = 1;
              results.forEach(function (a) {
                a.number = counter++;
              });
              return _context.abrupt("return", results);

            case 91:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[13, 74, 78, 86], [79,, 81, 85]]);
    }));
    return _fetchData.apply(this, arguments);
  }

  exports.fetchData = fetchData;
});