"use strict";

define(["module", "superagent", "src/util/util", "src/util/ui", "lodash"], function (module, _superagent, _util, _ui, _lodash) {
  var _superagent2 = _interopRequireDefault(_superagent);

  var _util2 = _interopRequireDefault(_util);

  var _ui2 = _interopRequireDefault(_ui);

  var _lodash2 = _interopRequireDefault(_lodash);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  module.exports = {
    search: function search(term) {
      return _superagent2["default"].get("https://www.chemexper.com/search/reference/json2/quick/".concat(encodeURIComponent(term))).then(function (result) {
        result = result.body && result.body.entry;

        if (!result) {
          _ui2["default"].showNotification('No results in reference DB', 'warn');

          return Promise.resolve([]);
        }

        var list = [];

        for (var i = 0; i < result.length; i++) {
          if (result[i] && result[i].value) {
            var val = result[i].value;
            val.code = val.catalogID;
            list.push({
              id: i,
              name: val && val.iupac && val.iupac[0] ? val.iupac[0].value : '',
              row: val
            });
          }
        }

        return list;
      }).then(function (data) {
        return data.map(fromChemexper);
      }).then(function (data) {
        return data.sort(function (a, b) {
          var rn1 = a.$content.identifier.cas.length > 0 ? Number(a.$content.identifier.cas[0].value.replace(/-/g, '')) : Number.MAX_SAFE_INTEGER;
          var rn2 = b.$content.identifier.cas.length > 0 ? Number(b.$content.identifier.cas[0].value.replace(/-/g, '')) : Number.MAX_SAFE_INTEGER;
          return rn1 - rn2;
        });
      });
    }
  };

  function fromChemexper(chemexper) {
    var mol = chemexper.row.mol;
    var mf = chemexper.row.mf && chemexper.row.mf[0] && chemexper.row.mf[0].value.value;
    var cas = chemexper.row.rn && chemexper.row.rn.map(function (rn) {
      return {
        value: numberToCas(rn.value.value)
      };
    });
    if (!chemexper.row.iupac) chemexper.row.iupac = [];
    return {
      $content: {
        general: {
          molfile: mol && mol[0] && mol[0].value.value,
          description: chemexper.name,
          name: chemexper.row.iupac,
          mf: mf
        },
        identifier: {
          cas: cas
        },
        stock: {
          catalogNumber: chemexper.row.code
        },
        physical: {
          density: chemexper.row.density,
          mp: chemexper.row.mp,
          bp: chemexper.row.bp
        }
      },
      id: _util2["default"].getNextUniqueId(true),
      names: _lodash2["default"].uniq([chemexper.name].concat(_toConsumableArray(chemexper.row.iupac.map(function (i) {
        return i.value;
      })))),
      source: 'reference'
    };
  }

  function numberToCas(nb) {
    nb = String(nb);
    return "".concat(nb.slice(0, -3), "-").concat(nb.slice(-3, -1), "-").concat(nb.slice(-1));
  }
});