"use strict";define(["modules/default/defaultcontroller","src/util/datatraversing"],function(a,b){"use strict";function c(){}return $.extend(!0,c.prototype,a),c.prototype.moduleInformation={name:"Parallel coordinates",description:"Multivariate data visualization",author:"Micha\xEBl Zasso",date:"11.03.2014",license:"MIT",cssClass:"parallel_coordinates"},c.prototype.references={value:{type:"array",label:"An array of data points"},columns:{type:"array",label:"Array of column descriptions"},flagResult:{type:"array",label:"Array of boolean values"},countResult:{type:"number",label:"Number of selected items"}},c.prototype.events={onBrushSelection:{label:"A selection has been made",refVariable:["value","flagResult","countResult"]}},c.prototype.variablesIn=["value","columns"],c.prototype.actionsIn={addColumn:"Add a column",removeColumn:"Remove a column"},c.prototype.configurationStructure=function(){var a=b.getJPathsFromElement(this.module.view._value[0]);return{groups:{group:{options:{type:"list",multiple:"false"},fields:{colJPath:{type:"combo",title:"Color jPath",options:a},options:{type:"checkbox",title:"Options",options:{reorder:"Reorderable",shadow:"Keep shadows while brushing",hide:"Prevent highlight of hidden lines",brush:"Export selection only on brush end"},default:["reorder"]},brushMode:{type:"combo",title:"Brush mode",options:[{key:"None",title:"None"},{key:"1D-axes",title:"1D axes"},{key:"1D-axes-multi",title:"1D axes multi"},{key:"2D-strums",title:"2D strums"},{key:"angular",title:"Angular"}],default:"1D-axes-multi",displaySource:{None:"n","1D-axes":"y","1D-axes-multi":"y","2D-strums":"y",angular:"y"}},predicate:{type:"combo",title:"Predicate",options:[{key:"and",title:"AND"},{key:"or",title:"OR"}],default:"and",displayTarget:["y"]}}},cols:{options:{type:"table",multiple:!0,title:"Columns"},fields:{name:{type:"text",title:"Columns name"},jpath:{type:"combo",title:"jPath",options:a}}}}}},c.prototype.configAliases={colsjPaths:["groups","cols",0],colorjpath:["groups","group",0,"colJPath",0],brushMode:["groups","group",0,"brushMode",0],brushPredicate:["groups","group",0,"predicate",0],options:["groups","group",0,"options",0]},c.prototype.onBrushSelection=function(a){var b=a,c=a.length,d=this.module.view._value,e=Array(d.length);if(a[0]&&a[0].hasOwnProperty("__id")){d=this.module.view._value,b=Array(c);for(var f,g=0;g<c;g++)f=a[g].__id,b[g]=d[f],e[f]=!0}this.createDataFromEvent("onBrushSelection","value",b),this.createDataFromEvent("onBrushSelection","flagResult",e),this.createDataFromEvent("onBrushSelection","countResult",c)},c});