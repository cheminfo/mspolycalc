"use strict";

define(['src/util/ui', 'lodash'], function (UI, _) {
  function editGroups(record, allGroups) {
    var groups = JSON.parse(JSON.stringify(allGroups));
    var groupNames = groups.map(function (group) {
      return group.name;
    }); // we will also take the current groups from the record

    var owners = DataObject.resurrect(record.$owners).slice(1); // eslint-disable-line

    var groupsToAdd = _.difference(owners, groupNames);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = groupsToAdd[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var group = _step.value;
        groups.push({
          name: group
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

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = groups[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _group = _step2.value;

        if (owners.includes(_group.name)) {
          _group.checked = true;
          _group.previous = true;
        } else {
          _group.checked = false;
          _group.previous = false;
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

    return UI.form("\n    <div>\n    <form>\n        <table>\n        <tr>\n        <th>Groups</th>\n        <td>\n        {% for group in groups %}\n          <div>\n            <input type=\"checkbox\" name=\"groups.{{ loop.index0 }}.checked\" />\n            <span style=\"font-weight: bold;\">{{group.name}}</span>\n            <span>{{ group.description }}</span>\n          </div>\n        {% endfor %}\n        </td>\n        </tr>\n        </table>\n        Add new owner: <input type=\"text\" name=\"email\" placeholder=\"email or group name\" size=40>\n        <input type=\"submit\" value=\"Submit\"/>\n    </form>\n    </div>\n", {
      groups: groups
    }, {
      twig: {
        groups: groups
      }
    }).then(function (result) {
      if (!result) return undefined;
      var groups = result.groups;
      var add = groups.filter(function (r) {
        return !r.previous && r.checked;
      }).map(function (r) {
        return r.name;
      });
      if (result.email) add.push(result.email);
      return {
        add: add,
        remove: groups.filter(function (r) {
          return r.previous && !r.checked;
        }).map(function (r) {
          return r.name;
        })
      };
    });
  }

  return editGroups;
});