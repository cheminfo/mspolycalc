"use strict";define(["require","jquery","src/util/util","ace/ace"],function(a,b,c,d){"use strict";var e=function(){};return e.prototype.__makeDom=function(){this._id=c.getNextUniqueId();var a=this,d=b("<div />"),e=b("<div />",{id:this._id,tabindex:1}).css({width:"100%",height:"100%",position:"relative",padding:20,margin:0}).addClass("field-list").appendTo(d);return this.fieldElement=e,this.input=e,d.addClass("ui-widget-content"),d.resizable({handles:"s",stop:function(){a.editor.resize()}}),d.css({height:"200px",width:"100%"}),this.dom=d,d},e.prototype.afterShow=function(){this.editor.resize()},e.prototype.focus=function(){this.editor&&this.editor.focus()},e.prototype.inDom=function(){var a=this,b=d.edit(a._id),c=this.field.options.mode||"javascript";b.setTheme("./theme/monokai"),b.setPrintMarginColumn(!1),b.getSession().setOption("useWorker",!1),b.getSession().setMode("./mode/"+c),b.$blockScrolling=1/0,b.getSession().on("change",function(){a.setValueSilent(b.getValue())}),this.editor=b,this.checkValue()},e.prototype.checkValue=function(){this.editor&&this.editor.setValue(this.value||"")},e});
