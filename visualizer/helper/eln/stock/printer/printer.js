"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

define(['src/util/api', './PrinterInstance', './printProcessors', './printServerFactory', '../../../rest-on-couch/Roc'], function (API, Printer, processors, printServerFactory, Roc) {
  var SECOND = 1000;
  var MINUTE = 60 * SECOND;
  var LIMIT = 11 * MINUTE;
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee13(opts) {
        var printerRoc, formatsRoc, printServerRoc, printers, printFormats, printServers, allIds, onlineServers, onlinePrinters, exports;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                exports = {
                  getDBPrinters: function getDBPrinters() {
                    return printers;
                  },
                  refresh: function () {
                    var _refresh = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee() {
                      var printerModels;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              allIds = new Set();
                              printerRoc = new Roc(opts);
                              formatsRoc = new Roc(opts);
                              printServerRoc = new Roc(opts);
                              _context.next = 6;
                              return printerRoc.view('entryByKind', {
                                key: 'printer',
                                varName: 'labelPrinters',
                                sort: function sort(a, b) {
                                  return b.$modificationDate - a.$modificationDate;
                                }
                              });

                            case 6:
                              printers = _context.sent;
                              _context.next = 9;
                              return formatsRoc.view('entryByKind', {
                                key: 'printFormat',
                                varName: 'labelPrintFormats',
                                sort: function sort(a, b) {
                                  return b.$modificationDate - a.$modificationDate;
                                }
                              });

                            case 9:
                              printFormats = _context.sent;
                              _context.next = 12;
                              return printServerRoc.view('printServerByMacAddress', {
                                varName: 'printServers',
                                sort: function sort(a, b) {
                                  return b.$modificationDate - a.$modificationDate;
                                }
                              });

                            case 12:
                              printServers = _context.sent;
                              onlineServers = printServers.filter(function (ps) {
                                return ps.$content.isOnline !== false && Date.now() - ps.$modificationDate < LIMIT;
                              });
                              onlinePrinters = printers.filter(function (p) {
                                return onlineServers.find(function (ps) {
                                  return ps.$content.macAddress === p.$content.macAddress;
                                });
                              });
                              _context.next = 17;
                              return Promise.all(onlineServers.map(function (ps) {
                                return exports.getConnectedPrinters(ps.$content).then(function (ids) {
                                  ps.ids = ids;
                                  ids.forEach(function (id) {
                                    return allIds.add(id);
                                  });
                                  ps.responds = true;
                                  ps.color = 'lightgreen';
                                })["catch"](function () {
                                  ps.ids = [];
                                  ps.responds = false;
                                  ps.color = 'pink';
                                }).then(function () {
                                  ps.triggerChange();
                                });
                              }));

                            case 17:
                              API.createData('allIds', Array.from(allIds));
                              printerModels = new Set();
                              printers.forEach(function (p) {
                                return printerModels.add(String(p.$content.model));
                              });
                              API.createData('printerModels', Array.from(printerModels));

                            case 21:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    function refresh() {
                      return _refresh.apply(this, arguments);
                    }

                    return refresh;
                  }(),
                  getConnectedPrinters: function () {
                    var _getConnectedPrinters = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee2(s) {
                      var printServer;
                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              printServer = printServerFactory(s, opts);
                              return _context2.abrupt("return", printServer.getDeviceIds());

                            case 2:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2);
                    }));

                    function getConnectedPrinters(_x2) {
                      return _getConnectedPrinters.apply(this, arguments);
                    }

                    return getConnectedPrinters;
                  }(),
                  // printerFormat: uuid of the printer format or printer format document
                  print: function () {
                    var _print = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee3(printer, printFormat, data) {
                      var printServer, p;
                      return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              _context3.next = 2;
                              return printerRoc.get(printer);

                            case 2:
                              printer = _context3.sent;

                              if (printFormat.resurrect) {
                                printFormat = printFormat.resurrect();
                              }

                              if (!(typeof printFormat === 'string')) {
                                _context3.next = 8;
                                break;
                              }

                              _context3.next = 7;
                              return formatsRoc.get(printFormat);

                            case 7:
                              printFormat = _context3.sent;

                            case 8:
                              printServer = printServers.find(function (ps) {
                                return String(ps.$content.macAddress) === String(printer.$content.macAddress);
                              });
                              p = new Printer(printer.$content, printServer.$content, opts);
                              _context3.next = 12;
                              return p.print(printFormat.$content, data);

                            case 12:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3);
                    }));

                    function print(_x3, _x4, _x5) {
                      return _print.apply(this, arguments);
                    }

                    return print;
                  }(),
                  createPrinter: function () {
                    var _createPrinter = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee4(printer) {
                      return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              printer.$kind = 'printer';
                              _context4.next = 3;
                              return printerRoc.create(printer);

                            case 3:
                              _context4.next = 5;
                              return exports.refresh();

                            case 5:
                            case "end":
                              return _context4.stop();
                          }
                        }
                      }, _callee4);
                    }));

                    function createPrinter(_x6) {
                      return _createPrinter.apply(this, arguments);
                    }

                    return createPrinter;
                  }(),
                  createFormat: function () {
                    var _createFormat = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee5(format) {
                      return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              format.$kind = 'printFormat';
                              _context5.next = 3;
                              return formatsRoc.create(format);

                            case 3:
                            case "end":
                              return _context5.stop();
                          }
                        }
                      }, _callee5);
                    }));

                    function createFormat(_x7) {
                      return _createFormat.apply(this, arguments);
                    }

                    return createFormat;
                  }(),
                  updateFormat: function () {
                    var _updateFormat = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee6(format) {
                      return regeneratorRuntime.wrap(function _callee6$(_context6) {
                        while (1) {
                          switch (_context6.prev = _context6.next) {
                            case 0:
                              _context6.next = 2;
                              return formatsRoc.update(format);

                            case 2:
                            case "end":
                              return _context6.stop();
                          }
                        }
                      }, _callee6);
                    }));

                    function updateFormat(_x8) {
                      return _updateFormat.apply(this, arguments);
                    }

                    return updateFormat;
                  }(),
                  updatePrinter: function () {
                    var _updatePrinter = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee7(printer) {
                      return regeneratorRuntime.wrap(function _callee7$(_context7) {
                        while (1) {
                          switch (_context7.prev = _context7.next) {
                            case 0:
                              _context7.next = 2;
                              return printerRoc.update(printer);

                            case 2:
                            case "end":
                              return _context7.stop();
                          }
                        }
                      }, _callee7);
                    }));

                    function updatePrinter(_x9) {
                      return _updatePrinter.apply(this, arguments);
                    }

                    return updatePrinter;
                  }(),
                  deletePrinter: function () {
                    var _deletePrinter = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee8(printer) {
                      return regeneratorRuntime.wrap(function _callee8$(_context8) {
                        while (1) {
                          switch (_context8.prev = _context8.next) {
                            case 0:
                              _context8.next = 2;
                              return printerRoc["delete"](printer);

                            case 2:
                            case "end":
                              return _context8.stop();
                          }
                        }
                      }, _callee8);
                    }));

                    function deletePrinter(_x10) {
                      return _deletePrinter.apply(this, arguments);
                    }

                    return deletePrinter;
                  }(),
                  deleteFormat: function () {
                    var _deleteFormat = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee9(format) {
                      return regeneratorRuntime.wrap(function _callee9$(_context9) {
                        while (1) {
                          switch (_context9.prev = _context9.next) {
                            case 0:
                              _context9.next = 2;
                              return formatsRoc["delete"](format);

                            case 2:
                            case "end":
                              return _context9.stop();
                          }
                        }
                      }, _callee9);
                    }));

                    function deleteFormat(_x11) {
                      return _deleteFormat.apply(this, arguments);
                    }

                    return deleteFormat;
                  }(),
                  // get online printers that can print a given format
                  getPrinters: function () {
                    var _getPrinters = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee10(format) {
                      var onlineMacAdresses;
                      return regeneratorRuntime.wrap(function _callee10$(_context10) {
                        while (1) {
                          switch (_context10.prev = _context10.next) {
                            case 0:
                              if (format) {
                                _context10.next = 2;
                                break;
                              }

                              return _context10.abrupt("return", onlinePrinters);

                            case 2:
                              _context10.next = 4;
                              return formatsRoc.get(format);

                            case 4:
                              format = _context10.sent;
                              onlineMacAdresses = onlinePrinters.map(function (ps) {
                                return ps.$content.macAddress;
                              });
                              return _context10.abrupt("return", printers.filter(function (p) {
                                return onlineMacAdresses.includes(p.$content.macAddress);
                              }).filter(function (p) {
                                return format.$content.models.filter(function (m) {
                                  return String(m.name) === String(p.$content.model);
                                }).length > 0;
                              }));

                            case 7:
                            case "end":
                              return _context10.stop();
                          }
                        }
                      }, _callee10);
                    }));

                    function getPrinters(_x12) {
                      return _getPrinters.apply(this, arguments);
                    }

                    return getPrinters;
                  }(),
                  getFormats: function () {
                    var _getFormats = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee11(printer, type) {
                      var formats;
                      return regeneratorRuntime.wrap(function _callee11$(_context11) {
                        while (1) {
                          switch (_context11.prev = _context11.next) {
                            case 0:
                              if (printer) {
                                _context11.next = 4;
                                break;
                              }

                              formats = printFormats.filter(function (f) {
                                return onlinePrinters.some(function (printer) {
                                  return f.$content.models.some(function (m) {
                                    return String(m.name) === String(printer.$content.model);
                                  });
                                });
                              });
                              _context11.next = 8;
                              break;

                            case 4:
                              _context11.next = 6;
                              return printerRoc.get(printer);

                            case 6:
                              printer = _context11.sent;
                              formats = printFormats.filter(function (f) {
                                return f.$content.models.some(function (m) {
                                  return String(m.name) === String(printer.$content.model);
                                });
                              });

                            case 8:
                              if (type) {
                                formats = formats.filter(function (f) {
                                  return String(f.$content.type) === type;
                                });
                              }

                              return _context11.abrupt("return", formats);

                            case 10:
                            case "end":
                              return _context11.stop();
                          }
                        }
                      }, _callee11);
                    }));

                    function getFormats(_x13, _x14) {
                      return _getFormats.apply(this, arguments);
                    }

                    return getFormats;
                  }(),
                  getProcessors: function getProcessors() {
                    return Object.keys(processors);
                  },
                  getTypes: function () {
                    var _getTypes = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee12() {
                      var _len,
                          args,
                          _key,
                          formats,
                          s,
                          _iteratorNormalCompletion,
                          _didIteratorError,
                          _iteratorError,
                          _iterator,
                          _step,
                          format,
                          _args12 = arguments;

                      return regeneratorRuntime.wrap(function _callee12$(_context12) {
                        while (1) {
                          switch (_context12.prev = _context12.next) {
                            case 0:
                              for (_len = _args12.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                                args[_key] = _args12[_key];
                              }

                              _context12.next = 3;
                              return exports.getFormats.apply(null, args);

                            case 3:
                              formats = _context12.sent;
                              s = new Set();
                              _iteratorNormalCompletion = true;
                              _didIteratorError = false;
                              _iteratorError = undefined;
                              _context12.prev = 8;

                              for (_iterator = formats[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                format = _step.value;
                                s.add(String(format.$content.type));
                              }

                              _context12.next = 16;
                              break;

                            case 12:
                              _context12.prev = 12;
                              _context12.t0 = _context12["catch"](8);
                              _didIteratorError = true;
                              _iteratorError = _context12.t0;

                            case 16:
                              _context12.prev = 16;
                              _context12.prev = 17;

                              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                                _iterator["return"]();
                              }

                            case 19:
                              _context12.prev = 19;

                              if (!_didIteratorError) {
                                _context12.next = 22;
                                break;
                              }

                              throw _iteratorError;

                            case 22:
                              return _context12.finish(19);

                            case 23:
                              return _context12.finish(16);

                            case 24:
                              return _context12.abrupt("return", Array.from(s));

                            case 25:
                            case "end":
                              return _context12.stop();
                          }
                        }
                      }, _callee12, null, [[8, 12, 16, 24], [17,, 19, 23]]);
                    }));

                    function getTypes() {
                      return _getTypes.apply(this, arguments);
                    }

                    return getTypes;
                  }()
                };
                _context13.next = 3;
                return exports.refresh();

              case 3:
                return _context13.abrupt("return", exports);

              case 4:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
});