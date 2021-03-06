"use strict";

define(["module", "src/util/ui", "openchemlib/openchemlib-full", "../eln/libs/MolecularFormula"], function (module, _ui, _openchemlibFull, _MolecularFormula) {
  var _ui2 = _interopRequireDefault(_ui);

  var _openchemlibFull2 = _interopRequireDefault(_openchemlibFull);

  var _MolecularFormula2 = _interopRequireDefault(_MolecularFormula);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /*
  We retrieve some exercises for structural analysis
   */
  var MF = _MolecularFormula2["default"].MF;
  var groups = JSON.parse(JSON.stringify(_MolecularFormula2["default"].Groups));
  groups.forEach(function (group) {
    group.mfHtml = new MF(String(group.mf)).toHtml();
  });
  var html = "\n    <style>\n        #allGroups {\n            width: 100%;\n        }\n        #allGroups thead, #allGroups tbody {\n            display: block;\n        }\n        #allGroups tbody {\n            height: 600px;\n            overflow-y: auto;\n        }\n        #allGroups td {\n            vertical-align: top;\n        }\n        #allGroups tr:nth-child(even) {\n            background: #DDD;\n        }\n        #allGroups tr:nth-child(odd) {\n            background: #EEE;\n        }\n        #allGroups thead th:nth-child(1), #allGroups tbody td:nth-child(1) {\n            width: 90px;\n        }\n        #allGroups thead th:nth-child(2), #allGroups tbody td:nth-child(2) {\n            width: 200px;\n            text-overflow:ellipsis;\n        }\n        #allGroups thead th:nth-child(3), #allGroups tbody td:nth-child(3) {\n            width: 80px;\n            text-overflow:ellipsis;\n        }\n        #allGroups thead th:nth-child(4), #allGroups tbody td:nth-child(4) {\n            width: 250px;\n            text-overflow:ellipsis;\n        }\n    </style>\n    Filter the list: <input type='text' oninput='filter(this)'>\n    <table id='allGroups'>\n        <thead>\n            <tr>\n                <th>Symbol</th>\n                <th>Name</th>\n                <th>mf</th>\n                <th>Structure</th>\n            </tr>\n        </thead>\n        <tbody>\n            ".concat(groups.map(function (group) {
    return "\n                <tr>\n                    <td>".concat(group.symbol, "</td>\n                    <td>").concat(group.name, "</td>\n                    <td>").concat(group.mfHtml, "<span style='display:none'>").concat(group.mf, "</span></td>\n                    <td><span  style=\"zoom: 0.8\">\n                        ").concat(group.ocl && group.ocl.value.length > 2 ? _openchemlibFull2["default"].Molecule.fromIDCode(group.ocl.value, group.ocl.coordinates).toSVG(200, 150, undefined, {
      autoCrop: true,
      autoCropMargin: 5,
      suppressChiralText: true,
      suppressCIPParity: true,
      suppressESR: true,
      noStereoProblem: true
    }) : '', "\n                    </span></td>\n                </tr>\n            ");
  }).join('\n'), "\n        </tbody>\n    </table>\n    <script>\n        function filter(input) {\n            let regexp=new RegExp(input.value,'i')\n            let lines=document.getElementById('allGroups').getElementsByTagName('TR');\n            for (let line of lines) {\n                let content=line.innerHTML;\n                if (content.match(regexp) || content.match(/<th>/i)) {\n                    line.style.display='';\n                } else {\n                    line.style.display='none';\n                }\n            }\n        }\n    </script>\n");

  module.exports = function showMfGroupsList() {
    _ui2["default"].dialog(html, {
      width: 700,
      height: 700,
      title: 'List of known groups'
    });
  };
});