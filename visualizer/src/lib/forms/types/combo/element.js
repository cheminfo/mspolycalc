"use strict";define([],function(){"use strict";var a=function(){};return a.prototype.__makeDom=function(){var a=this,b=$("<div />"),c=$("<div>&nbsp;</div>").addClass("form-field").attr("tabIndex","1").appendTo(b).bind("click",function(b){a.select(b),b.stopPropagation()});return this.fieldElement=c,this.div=c,this.dom=b,b},a.prototype.checkValue=function(){if(this.dom){var a=this.value,b=this.field.getOptions(this),c=this.lookRecursively(a,b);void 0===c?this.div.html(""):this.div.html(c.title)}},a.prototype.lookRecursively=function(a,b){if(b){var c=!1,d=0,e=b.length;if(b)for(;d<e;d++){if(b[d].key==a)return b[d];if(b[d].children&&(c=this.lookRecursively(a,b[d].children)))return c}}},a.prototype.getOptions=function(){return this.combooptions||!1},a.prototype.setOptions=function(a){this.combooptions=a,this.checkValue()},a});
