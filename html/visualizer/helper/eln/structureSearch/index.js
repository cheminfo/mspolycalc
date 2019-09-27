"use strict";

define(["module", "src/util/api", "../libs/OCLE"], function (module, _api, _OCLE) {
  var _api2 = _interopRequireDefault(_api);

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

  function waitImmediate() {
    return new Promise(function (resolve) {
      setImmediate(resolve);
    });
  }

  module.exports = {
    buildDatabase: function () {
      var _buildDatabase = _asyncToGenerator(regeneratorRuntime.mark(function _callee(tocData) {
        var options,
            l,
            db,
            date,
            i,
            entry,
            idCode,
            moleculeInfo,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                l = tocData.length;
                db = new _OCLE2["default"].DB({
                  computeProperties: options.calculateProperties
                });
                date = Date.now();
                i = 0;

              case 5:
                if (!(i < l)) {
                  _context.next = 20;
                  break;
                }

                if (!options.showLoading) {
                  _context.next = 11;
                  break;
                }

                if (!(i % 100 === 0 && Date.now() - date > 500)) {
                  _context.next = 11;
                  break;
                }

                _context.next = 10;
                return waitImmediate();

              case 10:
                _api2["default"].loading('mol', "Loading molecules (".concat(i + 1, "/").concat(l, ")"));

              case 11:
                entry = tocData[i];
                idCode = entry.value.ocl && entry.value.ocl.value;

                if (idCode) {
                  _context.next = 15;
                  break;
                }

                return _context.abrupt("continue", 17);

              case 15:
                moleculeInfo = {
                  idCode: idCode,
                  index: entry.value.ocl.index
                };
                db.pushMoleculeInfo(moleculeInfo, entry);

              case 17:
                i++;
                _context.next = 5;
                break;

              case 20:
                if (options.showLoading) {
                  _api2["default"].stopLoading('mol');
                }

                return _context.abrupt("return", db);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function buildDatabase(_x) {
        return _buildDatabase.apply(this, arguments);
      }

      return buildDatabase;
    }()
  };
});