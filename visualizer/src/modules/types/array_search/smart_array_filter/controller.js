"use strict";define(["jquery","modules/default/defaultcontroller","smart-array-filter"],function(a,b,c){"use strict";function d(){}return a.extend(!0,d.prototype,b),d.prototype.moduleInformation={name:"Smart array filter",description:"Use simple text queries to search in an array of complex objects.",author:"Micha\xEBl Zasso",date:"06.11.2015",license:"MIT",cssClass:"smart_array_filter"},d.prototype.references={input:{label:"Input array",type:"array"},output:{label:"Output array",type:"array"},search:{label:"Search string",type:"string"}},d.prototype.events={onQuery:{label:"Query is changed",refVariable:["output","search"]}},d.prototype.variablesIn=["input"],d.prototype.actionsIn={clearQuery:"Clear current query",setQuery:"Set query",appendQuery:"Append to current query"},d.prototype.configurationStructure=function(){return{groups:{group:{options:{type:"list"},fields:{debounce:{type:"float",title:"Search debouncing (ms)",default:100},limit:{type:"float",title:"Limit output length (0 to disable)",default:0},initialValue:{type:"text",title:"Initial value",default:""},placeholder:{type:"text",title:"Placeholder",default:""},fontSize:{type:"float",title:"Font size",default:20}}}}}},d.prototype.configAliases={debounce:["groups","group",0,"debounce",0],limit:["groups","group",0,"limit",0],initialValue:["groups","group",0,"initialValue",0],placeholder:["groups","group",0,"placeholder",0],fontSize:["groups","group",0,"fontSize",0]},d.prototype.onQuery=function(a){var b=this.module.view._data;if(b){for(var d=c(b,{keywords:a,index:!0,limit:this.module.getConfiguration("limit",0)}),e=this.module.view._originalData,f=Array(d.length),g=0;g<d.length;g++)f[g]=e[d[g]];this.createDataFromEvent("onQuery","search",a),this.createDataFromEvent("onQuery","output",f)}},d});
