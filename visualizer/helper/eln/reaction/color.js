"use strict";

define(["module"], function (module) {
  var STATUS = [{
    code: 10,
    label: 'Started',
    color: 'rgba(244,204,204,1)'
  }, {
    code: 20,
    label: 'Finished',
    color: 'rgba(252,229,205,1)'
  }, {
    code: 30,
    label: 'Worked up',
    color: 'rgba(255,242,204,1)'
  }, {
    code: 40,
    label: 'Purified',
    color: 'rgba(217,234,211,1)'
  }, {
    code: 50,
    label: 'Closed',
    color: 'rgba(206,224,227,1)'
  }];

  function getColor(statusCode) {
    for (var _i = 0, _STATUS = STATUS; _i < _STATUS.length; _i++) {
      var status = _STATUS[_i];

      if (Number(status.code) === Number(statusCode)) {
        return status.color;
      }
    }

    return 'white';
  }

  function getColorFromReaction(reaction) {
    var status = Number(reaction.$content.status && reaction.$content.status[0] && reaction.$content.status[0].code);
    return getColor(status);
  }

  function updateStatuses(statuses) {
    if (!statuses || !Array.isArray(statuses)) return [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = statuses[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var status = _step.value;
        updateStatus(status);
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

    return statuses;
  }
  /*
   * We will migrate all code to a number
   @param {object} status
   @returns {object}
   */


  function updateStatus(status) {
    if (isNaN(status.code)) {
      switch (status.code) {
        case 'started':
          status.code = 10;
          break;

        case 'finished':
          status.code = 20;
          break;

        case 'worked-up':
          status.code = 30;
          break;

        case 'purified':
          status.code = 40;
          break;

        case 'closed':
          status.code = 50;
          break;

        default:
      }
    }

    return status;
  }

  function getLabel(statusCode) {
    for (var _i2 = 0, _STATUS2 = STATUS; _i2 < _STATUS2.length; _i2++) {
      var status = _STATUS2[_i2];

      if (Number(status.code) === Number(statusCode)) {
        return status.label;
      }
    }

    return 'white';
  }

  function getNextStatus(statusCode) {
    for (var i = 0; i < STATUS.length; i++) {
      var status = STATUS[i];

      if (status.code === statusCode && i < STATUS.length - 1) {
        return STATUS[i + 1].code;
      }
    }

    return statusCode;
  }

  function getForm(currentStatus) {
    return "\n    <style>\n        #status {\n            zoom: 1.5;\n        }\n    </style>\n    <div id='status'>\n        <b>Please select the new status</b>\n        <p>&nbsp;</p>\n        <form>\n            <select name=\"status\">\n                ".concat(STATUS.map(function (item) {
      return "<option value=\"".concat(item.code, "\" ").concat(item.code === currentStatus ? 'selected' : '', ">").concat(item.label, "</option>");
    }), "\n            </select>\n            <input type=\"submit\" value=\"Submit\"/>\n        </form>\n    </div>\n");
  }

  module.exports = {
    STATUS: STATUS,
    getColor: getColor,
    getLabel: getLabel,
    getForm: getForm,
    getNextStatus: getNextStatus,
    getColorFromReaction: getColorFromReaction,
    updateStatus: updateStatus,
    updateStatuses: updateStatuses
  };
});