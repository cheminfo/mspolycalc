"use strict";define(["modules/default/defaultcontroller","modules/types/edition/onde/controller","modules/types/display/template-twig/controller"],function(a,b,c){"use strict";function d(){this.twigC=new c,this.ondeC=new b}return $.extend(!0,d.prototype,a),d.prototype.setModule=function(a){this.module=a,this.twigC.module=a.twigM,this.twigC.module.controller=this.twigC,this.ondeC.module=a.ondeM,this.ondeC.module.controller=this.ondeC},d.prototype.init=function(){this.twigC.init(),this.ondeC.init()},d.prototype.moduleInformation={name:"Edit/Display",description:"Dual-view module, with a displayer that is based on Twig and a JSON editor based on Onde.",author:"Micha\xEBl Zasso",date:"13.05.2014",license:"MIT",cssClass:"dualview",hidden:!0},d.prototype.references={value:{label:"Any object"}},d.prototype.variablesIn=["value"],d.prototype.configurationStructure=function(){return{groups:{group:{options:{type:"list"},fields:{template:{type:"jscode",title:"Template",mode:"html",default:""},schema:{type:"jscode",title:"Schema",mode:"json",default:"{}"},button_text:{type:"text",title:"Text of the save button",default:"Save"}}}}}},d.prototype.configFunctions={mode:function(){return"schema"},schemaSource:function(){return"config"},output:function(){return"modified"}},d.prototype.configAliases={template:["groups","group",0,"template",0],schema:["groups","group",0,"schema",0],button_text:["groups","group",0,"button_text",0],mode:[],schemaSource:[],output:[]},d});
