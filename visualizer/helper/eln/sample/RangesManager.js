"use strict";

define(["module", "exports", "src/util/api"], function (module, exports, _api) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RangesManager = undefined;

  var _api2 = _interopRequireDefault(_api);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var RangesManager = exports.RangesManager = function () {
    function RangesManager(ranges) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, RangesManager);

      this.ranges = ranges;
      this.currentRange = undefined;
      this.ensureLabel = options.ensureLabel;
    }

    _createClass(RangesManager, [{
      key: "processAction",
      value: function processAction(action) {
        if (!action.value.event.altKey) return;
        var track;

        if (action.value && action.value.data) {
          var firstChart = Object.keys(action.value.data)[0];

          if (firstChart) {
            track = action.value.data[firstChart];
          }
        }

        if (!track) return;

        switch (action.name) {
          case 'trackClicked':
            this.updateRange(track);
            break;

          case 'trackMove':
            this.updateAnnotations(track);
            break;

          default:
        }
      }
    }, {
      key: "updateAnnotations",
      value: function updateAnnotations(track) {
        if (!this.ranges || this.ranges.length === 0) {
          _api2["default"].createData('rangeAnnotations', []);

          return;
        }

        var annotations = [];
        var updateHighlight = false;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.ranges[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var range = _step.value;

            if (!range._highlight) {
              updateHighlight = true;
              Object.defineProperty(range, '_highlight', {
                enumerable: false,
                value: Math.random()
              });
            }

            if (range.to) {
              var annotation = {
                position: [{
                  x: range.from,
                  y: '15px'
                }, {
                  x: range.to,
                  y: '20px'
                }],
                type: 'rect',
                fillColor: 'red',
                strokeColor: 'red',
                _highlight: [range._highlight],
                info: range
              };

              if (range.label) {
                annotation.label = [{
                  text: range.label,
                  size: '18px',
                  anchor: 'middle',
                  color: 'red',
                  position: {
                    x: (range.from + range.to) / 2,
                    y: '10px'
                  }
                }];
              }

              annotations.push(annotation);
            }

            if (updateHighlight) {
              _api2["default"].getData('ranges').triggerChange();
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

        if (track && this.currentRange && !this.currentRange.to) {
          annotations.push({
            position: [{
              x: this.currentRange.from,
              y: '15px'
            }, {
              x: track.xClosest,
              y: '20px'
            }],
            type: 'rect',
            fillColor: 'green',
            strokeColor: 'green'
          });
        }

        _api2["default"].createData('rangeAnnotations', annotations);
      }
    }, {
      key: "setLabel",
      value: function setLabel(currentRange) {
        // look for the first letter not used
        var current = 65;

        label: while (current < 91) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.ranges[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var range = _step2.value;

              if (range.label && range.label.charCodeAt(0) === current) {
                current++;
                continue label;
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

          currentRange.label = String.fromCharCode(current);
          return;
        }
      }
    }, {
      key: "updateRange",
      value: function updateRange(track) {
        if (this.currentRange) {
          this.currentRange.to = track.xClosest;
          checkFromTo(this.currentRange);
          this.currentRange = undefined;
        } else {
          var range = {};
          this.ranges.push(range);
          this.currentRange = range;
          range.from = track.xClosest;
        }

        if (this.ensureLabel && this.currentRange && !this.currentRange.label) {
          this.setLabel(this.currentRange);
        }

        this.ranges.triggerChange();
        this.updateAnnotations();
      }
    }]);

    return RangesManager;
  }();

  function checkFromTo(range) {
    if (range.to === undefined) return;

    if (range.from > range.to) {
      var _ref = [range.to, range.from];
      range.from = _ref[0];
      range.to = _ref[1];
    }
  }

  module.exports = RangesManager;
});