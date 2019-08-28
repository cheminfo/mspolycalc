"use strict";

define(["exports", "https://www.lactame.com/lib/spectra-data/3.7.2/spectra-data.min.js"], function (exports, _spectraDataMin) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SD = exports.Ranges = exports.NMR2D = exports.NMR = exports.GUI = exports.default = undefined;

  var SDLib = _interopRequireWildcard(_spectraDataMin);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

            if (desc.get || desc.set) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  var GUI = SDLib.GUI,
      NMR = SDLib.NMR,
      NMR2D = SDLib.NMR2D,
      Ranges = SDLib.Ranges,
      SD = SDLib.SD;
  exports.default = SDLib;
  exports.GUI = GUI;
  exports.NMR = NMR;
  exports.NMR2D = NMR2D;
  exports.Ranges = Ranges;
  exports.SD = SD;
});