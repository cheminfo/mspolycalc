"use strict";

define(["exports"], function (exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  var options1D = {
    type: 'rect',
    line: 0,
    lineLabel: 1,
    labelColor: 'red',
    strokeColor: 'red',
    strokeWidth: '1px',
    fillColor: 'green',
    width: 0.05,
    height: 10,
    toFixed: 1,
    maxLines: Number.MAX_VALUE,
    selectable: true,
    fromToc: false
  };
  var options2D = {
    type: 'rect',
    labelColor: 'red',
    strokeColor: 'red',
    strokeWidth: '1px',
    fillColor: 'green',
    width: '6px',
    height: '6px'
  };
  /**
   * Add missing highlight in ranges array
   * A range must have highlights to link the various modules in the visualizer
   * If there is no assignment, highlight will be a random number
   * If there is an assignment, we will take it from the signals
   * @param {Array} ranges - An array of ranges
   * @return {boolean}
   */

  function ensureRangesHighlight(ranges) {
    var isChanged = false;

    if (ranges && Array.isArray(ranges)) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = ranges[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var range = _step.value;

          if (!range._highlight) {
            Object.defineProperty(range, '_highlight', {
              value: [],
              enumerable: false,
              writable: true
            });
          } // assignment can only be done at the level of a signal !


          if (range.signal) {
            var newHighlight = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = range.signal[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var signal = _step2.value;

                if (!signal._highlight) {
                  Object.defineProperty(signal, '_highlight', {
                    enumerable: false,
                    writable: true
                  });
                }

                signal._highlight = signal.diaID;

                if (signal.diaID) {
                  if (Array.isArray(signal.diaID)) {
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                      for (var _iterator3 = signal.diaID[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var diaID = _step3.value;
                        newHighlight.push(diaID);
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
                  } else {
                    newHighlight.push(signal.diaID);
                  }
                }
              } // there is some newHighlight and before it was just a random number
              // or the highlight changed

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

            if (newHighlight.length > 0 && range._highlight.length > 0 && range._highlight[0].match(/^[0-9.]+$/) || newHighlight.length !== 0 && range._highlight.join('.') !== newHighlight.join('.') || newHighlight.length === 0 && range._highlight.length > 0 && !range._highlight[0].match(/^[0-9.]+$/)) {
              range._highlight = newHighlight;
              isChanged = true;
            }
          } // is there is still no highlight ... we just add a random number


          if (range._highlight.length === 0) {
            range._highlight.push(String(Math.random()));

            isChanged = true;
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
    }

    return isChanged;
  }

  function annotations1D(ranges, optionsG) {
    var options = Object.assign({}, options1D, optionsG);
    var height = options.height,
        line = options.line,
        _options$dy = options.dy,
        dy = _options$dy === void 0 ? [0, 0] : _options$dy,
        y = options.y;
    var annotations = [];

    for (var i = 0; i < ranges.length; i++) {
      var currentRange = ranges[i];
      var annotation = {};
      annotation.info = ranges[i];
      annotations.push(annotation);
      annotation.line = line;
      annotation._highlight = options._highlight || currentRange._highlight;

      if (!annotation._highlight && currentRange.signal) {
        annotation._highlight = [];
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = currentRange.signal[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var signal = _step4.value;

            if (signal._highlight) {
              if (signal._highlight instanceof Array) {
                var _annotation$_highligh;

                (_annotation$_highligh = annotation._highlight).push.apply(_annotation$_highligh, _toConsumableArray(signal._highlight));
              } else {
                annotation._highlight.push(signal._highlight);
              }
            }
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
              _iterator4["return"]();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }

      if ((typeof currentRange.to === 'undefined' || typeof currentRange.from === 'undefined' || currentRange.to === currentRange.from) && currentRange.signal && currentRange.signal.length > 0) {
        annotation.position = [{
          x: currentRange.signal[0].delta - options.width,
          y: "".concat(options.line * height, "px")
        }, {
          x: currentRange.signal[0].delta + options.width,
          y: "".concat(options.line * height + 8, "px")
        }];
      } else {
        annotation.position = [{
          x: currentRange.to,
          y: y ? y[0] : "".concat(options.line * height, "px"),
          dy: dy[0]
        }, {
          x: currentRange.from,
          y: y ? y[1] : "".concat(options.line * height + 5, "px"),
          dy: dy[1]
        }];
      }

      annotation.type = options.type;
      var labelColor = 'lightgrey';

      if (!options.noLabel && currentRange.integral) {
        if (!currentRange.kind || String(currentRange.kind) !== 'solvent' && String(currentRange.kind) !== 'reference' && String(currentRange.kind) !== 'impurity' && String(currentRange.kind) !== 'standard') {
          labelColor = options.labelColor;
        }

        annotation.label = {
          text: Number(currentRange.integral).toFixed(options.toFixed),
          size: '11px',
          anchor: 'middle',
          color: labelColor,
          position: {
            x: (annotation.position[0].x + annotation.position[1].x) / 2,
            dy: "".concat(height + 20, "px")
          }
        };
      }

      annotation.selectable = options.selectable;
      annotation.strokeColor = options.strokeColor;
      annotation.strokeWidth = options.strokeWidth;
      annotation.fillColor = options.fillColor;
    } // we could shift the annotations to prevent overlap


    if (options.zigzag) {
      annotations.sort(function (a, b) {
        return b.position[0].x - a.position[0].x;
      });
      annotations.forEach(function (a, i) {
        a.position[0].dy = "".concat(25 * (i % 2), "px;");
        a.position[1].dy = "".concat(25 * (i % 2), "px;");

        if (a.label) {
          a.label.position.dy = "".concat(25 * (i % 2) + height + 20, "px");
        }
      });
    }

    return annotations;
  }

  function annotations2D(zones, optionsG) {
    var options = Object.assign({}, options2D, optionsG);
    var annotations = [];

    for (var k = zones.length - 1; k >= 0; k--) {
      var signal = zones[k];
      var annotation = {};
      annotation.type = options.type;
      annotation._highlight = signal._highlight;

      if (!annotation._highlight || annotation._highlight.length === 0) {
        annotation._highlight = [signal.signalID];
      }

      signal._highlight = annotation._highlight;
      annotation.position = [{
        x: signal.fromTo[0].from - 0.01,
        y: signal.fromTo[1].from - 0.01,
        dx: options.width,
        dy: options.height
      }, {
        x: signal.fromTo[0].to + 0.01,
        y: signal.fromTo[1].to + 0.01
      }];
      annotation.fillColor = options.fillColor;
      annotation.label = {
        text: signal.remark,
        position: {
          x: signal.signal[0].delta[0],
          y: signal.signal[0].delta[1] - 0.025
        }
      };

      if (signal.integral === 1) {
        annotation.strokeColor = options.strokeColor;
      } else {
        annotation.strokeColor = 'rgb(0,128,0)';
      }

      annotation.strokeWidth = options.strokeWidth;
      annotation.width = options.width;
      annotation.height = options.height;
      annotation.info = signal;
      annotations.push(annotation);
    }

    return annotations;
  }

  exports.annotations2D = annotations2D;
  exports.annotations1D = annotations1D;
  exports.ensureRangesHighlight = ensureRangesHighlight;
});