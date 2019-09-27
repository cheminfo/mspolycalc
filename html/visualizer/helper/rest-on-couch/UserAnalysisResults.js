"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

define(['../util/getViewInfo', 'src/util/api', 'src/util/couchdbAttachments'], function (getViewInfo, API, CDB) {
  var UserAnalysisResults =
  /*#__PURE__*/
  function () {
    function UserAnalysisResults(roc, sampleID) {
      _classCallCheck(this, UserAnalysisResults);

      this.roc = roc;
      this.sampleID = sampleID;
      this.viewID = undefined;
    }

    _createClass(UserAnalysisResults, [{
      key: "setSampleID",
      value: function setSampleID(sampleID) {
        this.sampleID = sampleID;
      }
    }, {
      key: "refresh",
      value: function () {
        var _refresh = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var analysisResults, analysisTemplates;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.loadResults();

                case 2:
                  analysisResults = _context.sent;
                  API.createData('analysisResults', analysisResults);
                  _context.next = 6;
                  return this.loadTemplates();

                case 6:
                  analysisTemplates = _context.sent;
                  API.createData('analysisTemplates', analysisTemplates);

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function refresh() {
          return _refresh.apply(this, arguments);
        }

        return refresh;
      }()
    }, {
      key: "loadTemplates",
      value: function () {
        var _loadTemplates = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(key) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", this.loadResults(key, {
                    sampleID: ''
                  }));

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function loadTemplates(_x) {
          return _loadTemplates.apply(this, arguments);
        }

        return loadTemplates;
      }()
      /**
       * Retrieve all the analytical results for a sample in a view
       * @param {string} key
       */

    }, {
      key: "loadResults",
      value: function () {
        var _loadResults = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3(key) {
          var options,
              _options$sampleID,
              sampleID,
              user,
              queryOptions,
              entries,
              _args3 = arguments;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  options = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
                  _options$sampleID = options.sampleID, sampleID = _options$sampleID === void 0 ? this.sampleID : _options$sampleID;
                  _context3.t0 = this.viewID;

                  if (_context3.t0) {
                    _context3.next = 7;
                    break;
                  }

                  _context3.next = 6;
                  return getViewInfo();

                case 6:
                  _context3.t0 = _context3.sent._id;

                case 7:
                  this.viewID = _context3.t0;
                  _context3.next = 10;
                  return this.roc.getUser();

                case 10:
                  user = _context3.sent;

                  if (!(!user || !user.username)) {
                    _context3.next = 13;
                    break;
                  }

                  return _context3.abrupt("return", undefined);

                case 13:
                  queryOptions = key ? {
                    key: [user.username, ['userAnalysisResults', this.viewID, sampleID, key]]
                  } : {
                    startkey: [user.username, ['userAnalysisResults', this.viewID, sampleID, "\0"]],
                    endkey: [user.username, ['userAnalysisResults', this.viewID, sampleID, "\uFFFF"]]
                  };
                  _context3.next = 16;
                  return this.roc.view('entryByOwnerAndId', queryOptions);

                case 16:
                  entries = _context3.sent;

                  if (!sampleID) {
                    _context3.next = 19;
                    break;
                  }

                  return _context3.abrupt("return", entries.filter(function (entry) {
                    return entry.$id[2].match(/^[0-9a-f]{32}$/i);
                  }));

                case 19:
                  return _context3.abrupt("return", entries);

                case 20:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function loadResults(_x2) {
          return _loadResults.apply(this, arguments);
        }

        return loadResults;
      }()
    }, {
      key: "delete",
      value: function _delete(entry) {
        return this.roc["delete"](entry);
      }
      /**
       * Result is stored in an attachment called result.json
       * @param {*} entry
       */

    }, {
      key: "loadResult",
      value: function loadResult(entry) {
        return this.roc.getAttachment(entry, 'result.json');
      }
    }, {
      key: "saveTemplate",
      value: function () {
        var _saveTemplate = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee4(key, meta, result) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  return _context4.abrupt("return", this.save(key, meta, result, {
                    sampleID: ''
                  }));

                case 1:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function saveTemplate(_x3, _x4, _x5) {
          return _saveTemplate.apply(this, arguments);
        }

        return saveTemplate;
      }()
    }, {
      key: "save",
      value: function () {
        var _save = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5(key, meta, result) {
          var options,
              _options$sampleID2,
              sampleID,
              entry,
              attachments,
              _args5 = arguments;

          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  options = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : {};
                  _options$sampleID2 = options.sampleID, sampleID = _options$sampleID2 === void 0 ? this.sampleID : _options$sampleID2;
                  _context5.t0 = this.viewID;

                  if (_context5.t0) {
                    _context5.next = 7;
                    break;
                  }

                  _context5.next = 6;
                  return getViewInfo();

                case 6:
                  _context5.t0 = _context5.sent._id;

                case 7:
                  this.viewID = _context5.t0;
                  _context5.next = 10;
                  return this.loadResults(key, {
                    sampleID: sampleID
                  });

                case 10:
                  entry = _context5.sent[0];

                  if (!entry) {
                    _context5.next = 17;
                    break;
                  }

                  entry.$content = meta;
                  _context5.next = 15;
                  return this.roc.update(entry);

                case 15:
                  _context5.next = 20;
                  break;

                case 17:
                  _context5.next = 19;
                  return this.roc.create({
                    $id: ['userAnalysisResults', this.viewID, sampleID, key],
                    $content: meta,
                    $kind: 'userAnalysisResults'
                  });

                case 19:
                  entry = _context5.sent;

                case 20:
                  if (!result) {
                    _context5.next = 24;
                    break;
                  }

                  attachments = [{
                    filename: 'result.json',
                    data: JSON.stringify(result),
                    contentType: 'application/json'
                  }];
                  _context5.next = 24;
                  return this.roc.addAttachment(entry, attachments);

                case 24:
                  return _context5.abrupt("return", entry);

                case 25:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        function save(_x6, _x7, _x8) {
          return _save.apply(this, arguments);
        }

        return save;
      }()
    }]);

    return UserAnalysisResults;
  }();

  return UserAnalysisResults;
});