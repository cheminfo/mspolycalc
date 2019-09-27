"use strict";

define(["exports", "../libs/MolecularFormula"], function (exports, _MolecularFormula) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toHTML;

  var _MolecularFormula2 = _interopRequireDefault(_MolecularFormula);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function toHTML(value) {
    var results = [];
    var exactMass = formatExactMass(value);
    if (exactMass) results.push(exactMass);
    var peaks = formatPeaks(value);
    if (peaks) results.push(peaks);
    return results.join(', ');
  }

  function getCharge(charge) {
    if (!charge) charge = 1;
    if (charge > 0) charge = "+".concat(charge);
    if (charge === '+1') charge = '+';
    if (charge === -1) charge = '-';
    return "<sup>".concat(charge, "</sup>");
  }

  function formatPeaks(value) {
    if (!value.peak || !value.peak.length > 0) return '';
    var experiment = [];
    experiment.push('MS');
    var inParenthesis = [];
    if (value.ionisation) inParenthesis.push(value.ionisation);
    if (value.analyzer) inParenthesis.push(value.analyzer);
    if (inParenthesis.length > 0) experiment.push("(".concat(inParenthesis.join('/'), ")"));
    experiment.push('m/z:');
    var peaks = [];
    var maxIntensity = 0;
    value.peak.forEach(function (peak) {
      if (peak.intensity > maxIntensity) maxIntensity = peak.intensity;
    });
    var factor = 100 / maxIntensity;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = value.peak[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var peak = _step.value;
        var _value = peak.mass;

        if (peak.intensity && maxIntensity) {
          _value += " (".concat(Math.round(peak.intensity * factor), ")");
        }

        peaks.push(_value);
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

    return "".concat(experiment.join(' '), " ").concat(peaks.join(', '));
  }

  function formatExactMass(value) {
    if (!value.accurate || !value.accurate.mf || !String(value.accurate.mf)) {
      return '';
    }

    var accurate = value.accurate;
    var mfInfo = new _MolecularFormula2["default"].MF("".concat(accurate.mf, "(").concat(accurate.modification, ")")).getInfo();
    var modificationInfo = new _MolecularFormula2["default"].MF(String(accurate.modification)).getInfo();
    var result = [];
    var experiment = [];
    experiment.push('HRMS');
    var inParenthesis = [];
    if (value.ionisation) inParenthesis.push(value.ionisation);
    if (value.analyzer) inParenthesis.push(value.analyzer);
    if (inParenthesis.length > 0) experiment.push("(".concat(inParenthesis.join('/'), ")"));
    experiment.push('m/z:');
    result.push(experiment.join(' '));
    var modificationMF = new _MolecularFormula2["default"].MF(modificationInfo.mf.replace(/\(.*/, '')).toHtml();

    if (modificationMF) {
      result.push("[M + ".concat(modificationMF, "]").concat(getCharge(modificationInfo.charge)));
    } else {
      result.push("[M]".concat(getCharge(modificationInfo.charge)));
    }

    result.push('Calcd for');
    var mf = mfInfo.mf.replace(/\(.*/, '').replace(/([^+-])([0-9]+)/g, '$1<sub>$2</sub>');
    result.push(mf + getCharge(mfInfo.charge));
    result.push("".concat(mfInfo.observedMonoisotopicMass.toFixed(4), ";"));
    result.push('Found');
    result.push(Number(accurate.value).toFixed(4));
    return "".concat(result.join(' '), ".");
  }
});