"use strict";define(["modules/default/defaultcontroller","src/util/datatraversing","src/util/util"],function(a,b,c){"use strict";function d(){this._data=new DataObject}function e(a,b){if(b.children)for(var c=0,d=b.children.length;c<d;c++)e(a,b.children[c]);else b.data&&a.push(b.data)}return $.extend(!0,d.prototype,a),d.prototype.moduleInformation={name:"Phylogram",description:"Display phylogram using D3 library",author:"Nathana\xEAl Khodl, Luc Patiny, Micha\xEBl Zasso",date:"30.12.2013",license:"MIT",cssClass:"phylogram"},d.prototype.mouseOverLeaf=function(a){a.data&&(this._data=DataObject.check(a.data),this.createDataFromEvent("onLeafHover","leaf",DataObject.check(this._data)))},d.prototype.mouseOutLeaf=function(){},d.prototype.clickLeaf=function(a){a.data&&(this._data=DataObject.check(a.data),this.createDataFromEvent("onLeafSelect","leaf",DataObject.check(this._data)))},d.prototype.mouseOverBranch=function(a){this.sendTreeFromEvent(a,"onBranchHover")},d.prototype.mouseOutBranch=function(){},d.prototype.clickBranch=function(a){this.sendTreeFromEvent(a,"onBranchSelect")},d.prototype.sendTreeFromEvent=function(a,b){var c=new DataObject({type:"tree",value:a},!0);this.sendActionFromEvent(b,"tree",c),this.createDataFromEvent(b,"tree",c),this.createDataFromEvent(b,"list",function(){var b=[];return e(b,a),DataArray(b)})},d.prototype.configurationStructure=function(){var a=[],d=this.module.getDataFromRel("data");return d&&b.getJPathsFromElement(d[0],a),{groups:{group:{options:{type:"list"},fields:{branchWidth:{type:"text",default:4,title:"Branch width"},jpathColor:{type:"combo",title:"Color jpath",options:a,extractValue:c.jpathToArray,insertValue:c.jpathToString},d3check:{type:"checkbox",title:"d3 options",options:{skipLabels:"Skip labels",skipBranchLengthScaling:"Skip branch scaling"},default:["skipLabels","skipBranchLengthScaling"]},jpathLabel:{type:"combo",title:"Label jpath",options:a,extractValue:c.jpathToArray,insertValue:c.jpathToString},labelSize:{type:"text",title:"Label font size",default:"10px"},labelDx:{type:"float",title:"Label dx",default:-30},labelDy:{type:"float",title:"Label dy",default:4}}}}}},d.prototype.configAliases={branchWidth:["groups","group",0,"branchWidth",0],jpathColor:["groups","group",0,"jpathColor",0],jpathLabel:["groups","group",0,"jpathLabel",0],d3check:["groups","group",0,"d3check",0],labelSize:["groups","group",0,"labelSize",0],labelDx:["groups","group",0,"labelDx",0],labelDy:["groups","group",0,"labelDy",0]},d.prototype.events={onLeafSelect:{label:"Select a leaf",refVariable:["leaf"]},onLeafHover:{label:"Hovers a leaf",refVariable:["leaf"]},onBranchSelect:{label:"Select a branch",refVariable:["tree","list"]},onBranchHover:{label:"Hovers a branch",refVariable:["tree","list"]}},d.prototype.references={tree:{type:["tree","object"],label:"A tree with children"},leaf:{label:"Value of the leaf"},list:{type:"array",label:"A list of children"},newTree:{type:["tree","object"],label:"Annotated tree"},data:{type:["array"],label:"Annotation data"}},d.prototype.variablesIn=["tree","newTree","data"],d});
