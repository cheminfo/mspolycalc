"use strict";

define(["module"], function (module) {
  /**
  Checks if one of the usernames is part of the rights list
   A right may be a regular expression.
  
   */
  module.exports = function checkRights(usernames) {
    var rights = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (!rights) return defaultValue;
    if (!usernames) return false;
    if (!Array.isArray(usernames)) usernames = [usernames];
    var alloweds = rights.split(/[ ,;\r\n]+/).filter(function (a) {
      return a;
    });
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = alloweds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var allowed = _step.value;
        var isRegExp = false;

        if (allowed.startsWith('/') && allowed.endsWith('/')) {
          isRegExp = true;
          var regexp = new RegExp(allowed.substring(1, allowed.length - 1));
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = usernames[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var username = _step2.value;

            if (isRegExp) {
              if (username.match(regexp)) return true;
            } else {
              if (username.toLowerCase() === allowed.toLowerCase()) return true;
            }
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

    return false;
  };
});