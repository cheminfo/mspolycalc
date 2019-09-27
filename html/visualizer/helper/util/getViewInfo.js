"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

define(['src/util/versioning'], function (Versioning) {
  function getViewInfo() {
    return _getViewInfo.apply(this, arguments);
  }

  function _getViewInfo() {
    _getViewInfo = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var viewURL, recordURL, response, info;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!Versioning.lastLoaded || !Versioning.lastLoaded.view || !Versioning.lastLoaded.view.url)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", {});

            case 2:
              viewURL = Versioning.lastLoaded.view.url;
              recordURL = viewURL.replace(/\/view.json.*/, '');
              _context.next = 6;
              return fetch(recordURL, {
                credentials: 'include'
              });

            case 6:
              response = _context.sent;
              _context.next = 9;
              return response.json();

            case 9:
              info = _context.sent;
              info.rev = Number(info._rev.replace(/-.*/, ''));
              return _context.abrupt("return", info);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getViewInfo.apply(this, arguments);
  }

  return getViewInfo;
});