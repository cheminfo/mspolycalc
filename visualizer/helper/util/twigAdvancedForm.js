"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* eslint-disable no-console */

/**
 * This code allows to create complex form in the twig module
 * You need in place modification
 *
 * In the twig templat eyou will have something like:
 *
 *  <script>
 *   require(['src/util/api'], function(API) {
 *       AdvancedForm('extendedForm', 'data', {debug:true});
 *   });
 *   </script>
 *   And the template will be like:
 *
 *   <table>
 *       <tr>
 *           <th></th><th></th>
 *           <th>Kind</th>
 *           <th>Firstname</th>
 *           <th>Lastname</th>
 *           <th>Nationalities</th>
 *       </tr>
 *       <tr data-repeat='authors'>
 *           <td>
 *               <select data-field='kind'>
 *                   <option value=''></option>
 *                   <option value='author'>Author</option>
 *                   <option value='editor'>Editor</option>
 *              </select>
 *           </td>
 *           <td>
 *               <input type='text' size=10 data-field='firstname'>
 *           </td>
 *           <td>
 *               <input type='text' size=10 data-field='lastname'>
 *           </td>
 *           <td>
 *               <table>
 *                    <tr data-repeat='nationalities'>
 *                       <td>
 *                           <input placeholder="Nationality" type='text' size=10 data-field=''>
 *                       </td>
 *                   </tr>
 *               </table>
 *           </td>
 *       </tr>
 *   </table>
 */
define(['jquery', 'src/util/api', 'modules/modulefactory'], function ($, API, Module) {
  function AdvancedForm(divID) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // we will find automatically the variableName
    var moduleId = $("#".concat(divID)).closest('[data-module-id]').attr('data-module-id');
    var module = Module.getModules().find(function (m) {
      return "".concat(m.getId()) === "".concat(moduleId);
    });
    var ips = module.vars_in().filter(function (v) {
      return v.rel === 'form';
    });

    if (ips.length === 0) {
      throw new Error('The twig module does not have variable in of type "form"');
    }

    var variableName = ips[0].name;
    var data;
    if (options.debug) console.log('variableName:', variableName);
    var variable = API.getVar(variableName);
    variable.listen({
      getId: function getId() {
        return moduleId + variableName;
      }
    }, function (newData) {
      newData.currentPromise.then(function () {
        if (!data) {
          if (options.debug) {
            console.log('The variable', variableName, 'does not exist yet. We will load it.');
          }

          data = API.getData(variableName);
          updateTwig();
        }
      });
    }); // we will initialise the form

    var dom = $(document.getElementById(divID)); // Add the buttons ADD / REMOVE

    dom.find('[data-repeat]').prepend("\n                <td><span class=\"form-button addRow\" /></td>\n                <td><span class=\"form-button removeRow\" /></td>\n            ");

    if (!data && API.getData(variableName)) {
      data = API.getData(variableName);
      updateTwig();
    } // Add the style


    dom.parent().prepend("<style>\n                #".concat(divID, " .addRow {height: 14px;}\n                #").concat(divID, " .addRow:before {content: \"+\"; cursor: pointer;}\n                #").concat(divID, " .removeRow {height: 14px;}\n                #").concat(divID, " .removeRow:before {content: \"-\"; cursor: pointer;}\n                #").concat(divID, " :focus {box-shadow: 0 0 2px 2px rgba(81, 203, 238, 1);}\n                #").concat(divID, " td, #extendedForm th {vertical-align: top;}\n            </style>"));

    function handleDataRepeat(index, row) {
      row = $(row);
      var jpath = getJpath(row);
      var variable = data ? data.getChildSync(jpath) : '';
      var table = row.closest('table');
      var length = 0;
      var empty = false;

      if (!variable || variable.length === 0) {
        length = 1;
        empty = true;
      } else if (Array.isArray(variable)) {
        length = variable.length;
      } else {
        console.log('Wrong variable type', variable);
      }

      for (var i = 0; i < length; i++) {
        var currentRow;

        if (i === 0) {
          currentRow = row;
        } else {
          currentRow = row.clone();
          table.append(currentRow);
        }

        currentRow.attr('data-index', i);
        renameRow(currentRow, jpath, i, empty);
      }

      rename(table);
    } // need to replicate rows based on the external variable


    function updateTwig() {
      do {
        var elements = dom.find('[data-repeat]:not([data-index])');
        elements.each(handleDataRepeat);
      } while (elements.length > 0); // we force the incorporation of the data in the form


      if (data && module.view.formObject) {
        if (options.debug) console.log('FORCE update data');
        module.view.fillForm(true);
      }
    } // rename the attributes 'name' or 'name-empty' of one specific row based on the jpath


    function renameRow(row, jpath, rowIndex, empty) {
      row = $(row);
      row.children('td:not(:has(table))').find('[data-field]').each(function (index, element) {
        element = $(element);
        var name = jpath.join('.');
        if (name) name += '.';
        name += rowIndex;
        var attr = element.attr('data-field');
        if (attr) name += ".".concat(attr);

        if (empty) {
          element.attr('name-empty', name);
        } else {
          element.attr('name', name);
        }
      });
    } // get the jpath from one element based on the attributes 'data-repeat' and 'data-index'
    // the jpath is returned as an array


    function getJpath(element) {
      var jpath = [];

      while ($(element).length) {
        if ($(element).attr('data-index')) {
          jpath.unshift($(element).attr('data-index'));
        }

        var repeatName = $(element).attr('data-repeat');
        if (repeatName) jpath.unshift.apply(jpath, _toConsumableArray(repeatName.split('.')));
        element = $(element).parent().closest('[data-repeat]');
      }

      return jpath;
    }
    /*
             Rename the the full table
             */


    function rename(tbody) {
      var base = getBase(tbody).base;
      var search = new RegExp("".concat(base, ".[0-9]+"));
      var rows = tbody.children('tr:has(td)');
      rows.each(function (rowIndex, row) {
        var replace = "".concat(base, ".").concat(rowIndex);

        for (var _i = 0, _arr = ['name', 'name-empty']; _i < _arr.length; _i++) {
          var attr = _arr[_i];
          $(row).find("[".concat(attr, "]")).each( // eslint-disable-next-line no-loop-func
          function (index, element) {
            element = $(element);
            var name = element.attr(attr);
            name = name.replace(search, replace);
            element.attr(attr, name);
          });
        }
      });
    }

    function getBase(element) {
      var names = [];
      element.find('[name]').each(function (index, element) {
        names.push($(element).attr('name'));
      });

      if (names.length === 0) {
        return '';
      }

      names.sort();
      return {
        base: names[0].replace(/(.*)\.([0-9]+).*/, '$1'),
        index: names[0].replace(/(.*)\.([0-9]+).*/, '$2')
      };
    }

    if (options.debug) {
      document.getElementById(divID).addEventListener('mouseover', function (event) {
        var target = $(event.target);

        if (target.attr('name')) {
          console.log('Name', target.attr('name'));
        }
      });
      document.getElementById(divID).addEventListener('mouseover', function (event) {
        var target = $(event.target);

        if (target.attr('name-empty')) {
          console.log('Empty', target.attr('name'));
        }
      });
    }

    function changeInputFct(event) {
      var target = $(event.target);

      if (target.attr('name-empty')) {
        var empties = target.closest('tr').children('td:not(:has(table))').find('[name-empty]');
        empties.each(function (index, element) {
          $(element).attr('name', $(element).attr('name-empty'));
          $(element).removeAttr('name-empty');
        });
      }
    } // when the value of a row change we should rename property if it was hidden


    document.getElementById(divID).addEventListener('change', changeInputFct);
    document.getElementById(divID).addEventListener('input', changeInputFct);
    document.getElementById(divID).addEventListener('click', function (event) {
      var from = event.target;
      var table = $(from).closest('tbody');
      var tr = $(from).closest('tr');

      switch (from.className) {
        case 'form-button addRow':
        case 'addRow':
          // if we try to add a row we should check if
          // there is already an empty one
          var empties = table.children('tr').children('td:not(:has(table))').find('[name-empty]');

          if (empties.length > 0) {
            empties[0].focus();
            return;
          }

          var clone = tr.clone();
          clone.find('select, input, textarea').val('');
          clone.find('tr:not(:first-child)').remove();
          var fields = clone.find('[name]'); // rename attribute 'name' to 'name-empty'

          fields.each(function (index, element) {
            $(element).attr('name-empty', $(element).attr('name'));
            $(element).removeAttr('name');
          });
          table.append(clone);
          clone.find('[name-empty]')[0].focus();
          rename(table);
          break;

        case 'form-button removeRow':
        case 'removeRow':
          var base = getBase(tr);

          if (base) {
            var jpath = base.base.split('.');
            var data = API.getData(variableName);
            var variable = data.getChildSync(jpath);
            variable.splice(base.index, 1);
            data.triggerChange();
          } // need to throw an event to remove this entry


          if (table.children('tr:has(td)').length > 1) {
            tr.remove();
          } else {
            tr.find('select, input, textarea').val('');
            tr.find('tr:not(:first-child)').remove();
            tr.find('[name]').each(function (index, element) {
              $(element).attr('name-empty', $(element).attr('name'));
              $(element).removeAttr('name');
            });
            tr.find('[name-empty]')[0].focus();
          }

          rename(table);
          break;

        case '':
          break;

        default:
          throw new Error("Unexpected class name: ".concat(from.className));
      }
    });
  }

  return AdvancedForm;
});