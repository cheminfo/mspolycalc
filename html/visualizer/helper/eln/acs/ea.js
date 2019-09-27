"use strict";

define(["exports", "../libs/MolecularFormula"], function (exports, _MolecularFormula) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toHtml;

  var _MolecularFormula2 = _interopRequireDefault(_MolecularFormula);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function toHtml(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var mf = options.mf,
        _options$elements = options.elements,
        elements = _options$elements === void 0 ? ['C', 'H', 'N', 'S'] : _options$elements;

    if (!mf) {
      return 'Missing theoretical MF';
    }

    var theoretical = [];
    var found = [];
    var mfObject = new _MolecularFormula2["default"].MF(String(options.mf));
    mfObject.canonize();
    var ea = mfObject.getEA();

    if (Array.isArray(value)) {
      value = findBest(value, ea);
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var element = _step.value;
        var field = element.toLowerCase();

        if (value[field]) {
          var oneTheoretical = ea.filter(function (ea) {
            return ea.element === element;
          });
          var th = oneTheoretical.length ? oneTheoretical[0].ratio * 100 : 0;
          theoretical.push("".concat(element.toUpperCase(), ", ").concat(th.toFixed(2)));
          found.push("".concat(element.toUpperCase(), ", ").concat((value[field] * 100).toFixed(2)));
        }
      };

      for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
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

    var result = "Anal. Calcd for ".concat(mfObject.toHtml(), ": ");
    result += theoretical.join('; ');
    result += '. Found: ';
    result += found.join('; ');
    result += '.';
    return result;
  }

  function findBest(eas, theoretical) {
    var bestError = Number.MAX_VALUE;
    var bestEA;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = eas[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var ea = _step2.value;
        var error = 0;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = theoretical[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var th = _step3.value;
            var key = th.element.toLowerCase();

            if (ea[key]) {
              error += Math.abs(ea[key] - th.ratio);
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        if (error < bestError) {
          bestError = error;
          bestEA = ea;
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

    return bestEA;
  }
});