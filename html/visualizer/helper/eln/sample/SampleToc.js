"use strict";

define(["module", "src/util/api", "src/util/versioning"], function (module, _api, _versioning) {
  var _api2 = _interopRequireDefault(_api);

  var _versioning2 = _interopRequireDefault(_versioning);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
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

  var defaultOptions = {
    group: 'all',
    varName: 'sampleToc',
    viewName: 'sample_toc',
    sort: function sort(a, b) {
      if (a.value.modificationDate > b.value.modificationDate) {
        return -1;
      } else if (a.value.modificationDate < b.value.modificationDate) {
        return 1;
      } else {
        return 0;
      }
    }
  };

  var SampleToc = function () {
    /**
     * Create an object managing the Toc
     * @param {object} [options={}]
     * @param {object} [roc=undefined]
     * @param {string} [options.group='mine'] Group to retrieve products. mine, all of a specific group name
     * @param {string} [options.varName='sampleToc']
     * @param {string} [options.viewName='sample_toc']
     * @param {function} [options.sort] Callback, by default sort by reverse date
     * @param {function} [options.filter] Callback to filter the result
     */
    function SampleToc(roc) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, SampleToc);

      this.roc = roc;
      this.options = Object.assign({}, defaultOptions, options);
    }

    _createClass(SampleToc, [{
      key: "setFilter",
      value: function setFilter(filter) {
        this.filter = filter;
        this.refresh();
      }
    }, {
      key: "refresh",
      value: function refresh() {
        var _this = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        console.log('Refresh sampleToc');

        var _Object$assign = Object.assign({}, this.options, options),
            group = _Object$assign.group,
            sort = _Object$assign.sort,
            filter = _Object$assign.filter,
            viewName = _Object$assign.viewName;

        var mine = 0;
        var groups = '';
        group = String(group);

        if (group === 'mine') {
          mine = 1;
        } else if (group !== 'all') {
          groups = group;
        }

        return this.roc.query(viewName, {
          groups: groups,
          mine: mine,
          sort: sort,
          filter: filter,
          varName: this.options.varName
        }).then(function (entries) {
          if (_this.options.callback) {
            entries.forEach(_this.options.callback);
          }
        });
      }
    }, {
      key: "initializeGroupForm",
      value: function () {
        var _initializeGroupForm = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var _this2 = this;

          var options,
              _options$schemaVarNam,
              schemaVarName,
              _options$varName,
              varName,
              _options$cookieName,
              cookieName,
              groups,
              possibleGroups,
              defaultGroup,
              schema,
              groupForm,
              mainData,
              _args = arguments;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                  _options$schemaVarNam = options.schemaVarName, schemaVarName = _options$schemaVarNam === void 0 ? 'groupFormSchema' : _options$schemaVarNam, _options$varName = options.varName, varName = _options$varName === void 0 ? 'groupForm' : _options$varName, _options$cookieName = options.cookieName, cookieName = _options$cookieName === void 0 ? 'eln-default-sample-group' : _options$cookieName;
                  _context.next = 4;
                  return this.roc.getGroupMembership();

                case 4:
                  _context.t0 = function (g) {
                    return g.name;
                  };

                  groups = _context.sent.map(_context.t0);
                  possibleGroups = ['all', 'mine'].concat(groups);
                  defaultGroup = localStorage.getItem(cookieName);

                  if (possibleGroups.indexOf(defaultGroup) === -1) {
                    defaultGroup = 'all';
                  }

                  schema = {
                    type: 'object',
                    properties: {
                      group: {
                        type: 'string',
                        "enum": possibleGroups,
                        "default": defaultGroup,
                        required: true
                      }
                    }
                  };

                  _api2["default"].createData(schemaVarName, schema);

                  _context.next = 13;
                  return _api2["default"].createData(varName, {
                    group: defaultGroup
                  });

                case 13:
                  groupForm = _context.sent;
                  this.options.group = groupForm.group;
                  _context.next = 17;
                  return this.refresh();

                case 17:
                  mainData = _versioning2["default"].getData();
                  mainData.onChange(function (evt) {
                    if (evt.jpath[0] === varName) {
                      localStorage.setItem(cookieName, groupForm.group);
                      _this2.options.group = String(groupForm.group);

                      _this2.refresh();
                    }
                  });
                  return _context.abrupt("return", groupForm);

                case 20:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function initializeGroupForm() {
          return _initializeGroupForm.apply(this, arguments);
        }

        return initializeGroupForm;
      }()
    }]);

    return SampleToc;
  }();

  module.exports = SampleToc;
});