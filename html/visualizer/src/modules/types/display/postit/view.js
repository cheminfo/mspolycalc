'use strict';define(["modules/default/defaultview","forms/button","src/util/util","src/main/grid"],function(a,b,c,d){"use strict";function e(){}return $.extend(!0,e.prototype,a,{init:function(){var a=this,b=c.getNextUniqueId(),e=!1;this._id=b,this.module.getConfigurationCheckbox("editable","isEditable")?(this.inside=$("<div>",{id:b,class:"inside",contentEditable:"true"}).html(a.module.definition.text||""),require(["ckeditor"],function(b){e||(b.disableAutoInline=!0,a.instance=b.inline(a._id,{extraPlugins:"mathjax",mathJaxLib:"//cdn.mathjax.org/mathjax/2.2-latest/MathJax.js?config=TeX-AMS_HTML"}),a.instance.on("change",function(){a.module.definition.text=a.instance.getData(),a.module.getDomWrapper().height(a.inside.height()+70),d.moduleResize(a.module)}),e=!0)})):this.inside=$("<div>",{id:b,class:"inside"}).html(a.module.definition.text||""),this.dom=$("<div />",{class:"postit"}).css("font-family",`${this.module.getConfiguration("fontfamily")}, Arial`),this.dom.html(this.inside),this.module.getDomContent().html(this.dom),this.resolveReady()}}),e});