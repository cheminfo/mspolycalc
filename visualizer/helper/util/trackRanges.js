"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

define(['src/util/api'], function (API) {
  function track(_x, _x2) {
    return _track.apply(this, arguments);
  }

  function _track() {
    _track = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(localName, defaultValue) {
      var options,
          varName,
          annotationName,
          localValue,
          _args = arguments;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
              varName = options.varName || localName;
              annotationName = "".concat(varName, "Annotations");
              localValue = [];
              _context.prev = 4;
              localValue = JSON.parse(window.localStorage.getItem(localName)) || [];

              if (Array.isArray(localValue)) {
                _context.next = 8;
                break;
              }

              throw new Error('TrackRanges expected an array in local storage');

            case 8:
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](4);
              return _context.abrupt("return", Promise.reject(_context.t0));

            case 13:
              return _context.abrupt("return", API.createData(varName, localValue).then(function (data) {
                createAnnotations(data, annotationName);
                data.onChange(function () {
                  ensureHighlight(data);
                  createAnnotations(data, annotationName);
                  localStorage.setItem(localName, JSON.stringify(data));
                });
                return data;
              }));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 10]]);
    }));
    return _track.apply(this, arguments);
  }

  return track;

  function ensureHighlight(data) {
    var shouldUpdate = false;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var datum = _step.value;

        if (!datum._highlight) {
          shouldUpdate = true;
          datum._highlight = Math.random();
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

    if (shouldUpdate) data.triggerChange();
  }

  function createAnnotations(data, annotationName) {
    var annotations = [];
    data = data.resurrect();
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var datum = _step2.value;
        var color = 'red';
        if (!datum.active) color = 'pink';
        annotations.push({
          position: [{
            x: datum.from,
            y: 0,
            dy: '2px'
          }, {
            x: datum.to,
            y: 0,
            dy: '-2px'
          }],
          type: 'rect',
          fillColor: color,
          strokeColor: color,
          _highlight: datum._highlight,
          info: datum
        });
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

    API.createData(annotationName, annotations);
  }
});