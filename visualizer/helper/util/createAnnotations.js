"use strict";

/*
Create jsgraph annotations from an array
This method will put the original data in 'info' of the annotations
*/
define(['src/util/api'], function (API) {
  function create(data, variableName) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _options$from = options.from,
        from = _options$from === void 0 ? function (datum) {
      return datum.from;
    } : _options$from,
        _options$to = options.to,
        to = _options$to === void 0 ? function (datum) {
      return datum.to;
    } : _options$to,
        _options$top = options.top,
        top = _options$top === void 0 ? '10px' : _options$top,
        _options$bottom = options.bottom,
        bottom = _options$bottom === void 0 ? '20px' : _options$bottom,
        _options$highlight = options.highlight,
        highlight = _options$highlight === void 0 ? function (datum) {
      return datum._highlight;
    } : _options$highlight,
        _options$fillColor = options.fillColor,
        fillColor = _options$fillColor === void 0 ? 'red' : _options$fillColor,
        _options$strokeColor = options.strokeColor,
        strokeColor = _options$strokeColor === void 0 ? 'red' : _options$strokeColor;
    var annotations = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var datum = _step.value;
        annotations.push({
          position: [{
            x: typeof from === 'function' ? from(datum) : from,
            y: typeof top === 'function' ? top(datum) : top
          }, {
            x: typeof to === 'function' ? to(datum) : to,
            y: typeof bottom === 'function' ? bottom(datum) : bottom
          }],
          type: 'rect',
          fillColor: typeof fillColor === 'function' ? fillColor(datum) : fillColor,
          strokeColor: typeof strokeColor === 'function' ? strokeColor(datum) : strokeColor,
          _highlight: typeof highlight === 'function' ? highlight(datum) : highlight,
          info: datum
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

    API.createData(variableName, annotations);
  }

  return create;
});