"use strict";

define(["exports", "src/util/api", "../libs/elnPlugin"], function (exports, _api, _elnPlugin) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appendedDragAndDrop = appendedDragAndDrop;

  var _api2 = _interopRequireDefault(_api);

  var _elnPlugin2 = _interopRequireDefault(_elnPlugin);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  /**
   * Append a list of drag and dropped files to a given variable
   * @param {Array|object} experimentalFiles
   * @param {string} targetName
   * @return {Array<object>}
   */
  function appendedDragAndDrop(experimentalFiles, targetName) {
    var target = _api2["default"].getData(targetName);

    var newTarget = false;

    if (!target) {
      target = [];
      newTarget = true;
    }

    if (!Array.isArray(experimentalFiles)) {
      experimentalFiles = [experimentalFiles];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = experimentalFiles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var file = _step.value;

        if (file.filename && String(file.filename) !== '') {
          // handle from drag and drop
          var property = _elnPlugin2["default"].util.getTargetProperty(String(file.filename));

          if (property !== 'file') {
            target.push(_defineProperty({}, property, file));
          } else if (String(file.encoding) === 'text') {
            target.push({
              text: file
            });
          } else {
            target.push({
              file: file
            });
          }
        } else {
          var type;

          if (String(file.encoding) === 'text') {
            type = getTargetType(String(file.content));
          } else {
            var first = firstCharacters(String(file.content));
            type = getTargetType(first);
          }

          file.filename = target.length + 1;
          target.push(_defineProperty({}, type, file));
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

    if (newTarget) {
      _api2["default"].createData(targetName, target);
    } else {
      target.triggerChange();
    }

    return target;
  }

  function getTargetType(content) {
    if (content[0] === '#') {
      return 'jcamp';
    }

    if (content[0] === '<') {
      return 'xml';
    }

    if (content.slice(0, 3) === 'CDF') {
      return 'cdf';
    }

    return 'text';
  } // https://stackoverflow.com/questions/36487636/javascript-convert-array-buffer-to-string


  function firstCharacters(arrayBuffer) {
    var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
    var byteArray = new Uint8Array(arrayBuffer);
    var str = '';
    var charCode = 0;
    var numBytes = 0;

    for (var i = 0; i < len; ++i) {
      var v = byteArray[i];

      if (numBytes > 0) {
        // 2 bit determining that this is a tailing byte + 6 bit of payload
        if ((charCode & 192) === 192) {
          // processing tailing-bytes
          charCode = charCode << 6 | v & 63;
        } else {
          throw new Error('this is no tailing-byte');
        }
      } else if (v < 128) {
        // single-byte
        numBytes = 1;
        charCode = v;
      } else if (v < 192) {
        // these are tailing-bytes
        throw new Error('invalid byte, this is a tailing-byte');
      } else if (v < 224) {
        // 3 bits of header + 5bits of payload
        numBytes = 2;
        charCode = v & 31;
      } else if (v < 240) {
        // 4 bits of header + 4bit of payload
        numBytes = 3;
        charCode = v & 15;
      } else {
        // UTF-8 theoretically supports up to 8 bytes containing up to 42bit of payload
        // but JS can only handle 16bit.
        throw new Error('invalid encoding, value out of range');
      }

      if (--numBytes === 0) {
        str += String.fromCharCode(charCode);
      }
    }

    return str;
  }
});