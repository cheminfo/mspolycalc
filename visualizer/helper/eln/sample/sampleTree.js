"use strict";

define(["exports", "d3-hierarchy", "src/util/tree", "lodash", "src/main/datas"], function (exports, _d3Hierarchy, _tree, _lodash, _datas) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getTree = getTree;
  exports.getAnnotatedTree = getAnnotatedTree;

  var _tree2 = _interopRequireDefault(_tree);

  var _lodash2 = _interopRequireDefault(_lodash);

  var _datas2 = _interopRequireDefault(_datas);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var DataObject = _datas2["default"].DataObject; // data should have id as first level property
  // id should be an array that represents the hierarchy

  function getTree(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      idProperty: 'id'
    };
    var idProperty = options.idProperty;
    var getId = getIdFunction(idProperty);
    var getParentId = getParentIdFunction(idProperty);
    fillGaps(data, options);
    var strat = (0, _d3Hierarchy.stratify)().id(getId).parentId(getParentId);
    var tree = strat(data);
    tree.each(function (node) {
      node.index = _lodash2["default"].property(node, idProperty);
    });
    return tree;
  }

  var defaultAnnotationOptions = {
    label: ['label']
  }; // Creates tree and annotates it

  function getAnnotatedTree(data) {
    var annotationOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultAnnotationOptions;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      idProperty: 'id'
    };
    var annotations = {};
    var idProperty = options.idProperty;
    var tree = getTree(data, options);

    for (var key in annotations) {
      annotations[key] = DataObject.check(annotations[key], true);
    }

    tree.each(function (node) {
      node.index = idToString(_lodash2["default"].get(node.data, idProperty));
      annotations[node.index] = node.data;
    });
    tree = _tree2["default"].annotateTree(tree, annotations, annotationOptions);
    return tree;
  }

  function getIdFunction(idProperty) {
    return function getId(d) {
      var id = _lodash2["default"].get(d, idProperty);

      return idToString(id);
    };
  }

  function getParentIdFunction(idProperty) {
    return function getParentId(d) {
      var id = _lodash2["default"].get(d, idProperty);

      if (id.length === 0) {
        return null;
      }

      id = id.slice();
      id.pop();
      return idToString(id);
    };
  }

  function getCreateParent(idProperty) {
    return function createParent(element) {
      var id = _lodash2["default"].get(element, idProperty);

      var parent = {};
      var parentId = id.slice();
      parentId.pop();

      _lodash2["default"].set(parent, idProperty, parentId);

      return parent;
    };
  }

  function fillGaps(data, options) {
    var idProperty = options.idProperty;
    var getId = getIdFunction(idProperty);
    var getParentId = getParentIdFunction(idProperty);
    var createParent = getCreateParent(idProperty);
    var map = new Map();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var element = _step.value;
        var id = getId(element);
        map.set(id, {
          data: element
        });
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

    function fillParents(element) {
      var pid = getParentId(element);
      if (pid === null) return;
      var mapped = map.get(pid);

      if (!mapped) {
        var newElement = createParent(element);
        data.push(newElement);
        map.set(pid, {
          done: true,
          data: newElement
        });
        fillParents(newElement);
      } else if (!mapped.done) {
        mapped.done = true;
        fillParents(mapped.data);
      }
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _element = _step2.value;
        fillParents(_element);
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
  }

  function idToString(id) {
    return id.length === 0 ? '.' : id.join('.');
  }
});