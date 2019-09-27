"use strict";

define(["module", "src/util/api", "src/util/versioning", "uri/URI"], function (module, _api, _versioning, _URI) {
  var _api2 = _interopRequireDefault(_api);

  var _versioning2 = _interopRequireDefault(_versioning);

  var _URI2 = _interopRequireDefault(_URI);

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

  function track() {
    return _track.apply(this, arguments);
  }

  function _track() {
    _track = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var sample, uri, search, data, _OCLE, Molecule, molecule, _molecule, _OCLE2, _Molecule, _molecule2;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              sample = JSON.parse(window.localStorage.getItem('external_cache') || '{}');

              _api2["default"].createData('nmr', []);

              _api2["default"].createData('mass', []);

              _api2["default"].createData('ir', []);

              uri = new _URI2["default"](document.location.href);
              search = uri.search(true);

              if (search.smiles) {
                sample.smiles = search.smiles;
                sample.molfile = '';
              }

              data = _versioning2["default"].getData();
              data.onChange(function (evt) {
                if (evt.jpath.length === 1 && evt.jpath[0] === 'molfile') {
                  localStorage.setItem('molfile', evt.target.get());
                }
              });

              if (!sample.molfile) {
                _context.next = 23;
                break;
              }

              if (!(typeof OCLE === 'undefined')) {
                _context.next = 19;
                break;
              }

              _context.next = 13;
              return _api2["default"].require('vh/eln/libs/OCLE');

            case 13:
              _OCLE = _context.sent;
              Molecule = _OCLE["default"] ? _OCLE["default"].Molecule : _OCLE.Molecule;
              molecule = Molecule.fromMolfile(sample.molfile);

              _api2["default"].createData('molfile', molecule.toMolfile());

              _context.next = 21;
              break;

            case 19:
              _molecule = OCLE.Molecule.fromMolfile(sample.molfile);

              _api2["default"].createData('molfile', _molecule.toMolfile());

            case 21:
              _context.next = 36;
              break;

            case 23:
              if (!sample.smiles) {
                _context.next = 34;
                break;
              }

              if (!(typeof _OCLE2 === 'undefined')) {
                _context.next = 28;
                break;
              }

              _context.next = 27;
              return _api2["default"].require('vh/eln/libs/OCLE');

            case 27:
              _OCLE2 = _context.sent;

            case 28:
              _Molecule = _OCLE2["default"] ? _OCLE2["default"].Molecule : _OCLE2.Molecule;
              _molecule2 = _Molecule.fromSmiles(sample.smiles);
              sample.molfile = _molecule2.toMolfile();

              _api2["default"].createData('molfile', sample.molfile);

              _context.next = 36;
              break;

            case 34:
              sample.molfile = window.localStorage.getItem('molfile');

              if (sample.molfile) {
                _api2["default"].createData('molfile', sample.molfile);
              } else {
                _api2["default"].createData('molfile', '');
              }

            case 36:
              return _context.abrupt("return", Promise.resolve(sample));

            case 37:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _track.apply(this, arguments);
  }

  module.exports = track();
});