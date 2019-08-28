"use strict";define(["modules/default/defaultcontroller"],function(a){"use strict";function b(){}return $.extend(!0,b.prototype,a),b.prototype.moduleInformation={name:"Progress bar",description:"Display a progress bar",author:"Micha\xEBl Zasso",date:"28.04.2015",license:"MIT",cssClass:"progress"},b.prototype.references={total:{label:"Total progress",type:"number"}},b.prototype.variablesIn=["total"],b.prototype.actionsIn={inc:"Increment current progress",set:"Set current progress",total:"Change total progress"},b.prototype.configurationStructure=function(){return{groups:{group:{options:{type:"list"},fields:{tpl:{type:"text",title:"Progress template",default:":current / :total"},barcolor:{type:"spectrum",title:"Bar color",default:[204,204,204,1]}}}}}},b.prototype.configAliases={tpl:["groups","group",0,"tpl",0],barcolor:["groups","group",0,"barcolor",0]},b});
