"use strict";

define(["module"], function (module) {
  module.exports = function getTable(sol) {
    var result = [];
    result.push("x\t".concat(sol.species.join('\t')));

    for (var i = 0; i < sol.x.length; i++) {
      var line = [];
      line.push(sol.x[i]);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = sol.species[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var specie = _step.value;
          line.push(sol.solutions[i][specie]);
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

      result.push(line.join('\t'));
    }

    return result.join('\r\n');
  };
});