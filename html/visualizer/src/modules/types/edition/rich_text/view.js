'use strict';define(["jquery","modules/default/defaultview","src/util/util","ckeditor","lodash","src/main/grid","chroma"],function(a,b,c,d,e,f,g){"use strict";function h(){this._id=c.getNextUniqueId()}return a.extend(!0,h.prototype,b,{init:function(){var a=this;this.plainHtml=this.module.getConfigurationCheckbox("plainHtml","yes"),this.debounce=this.module.getConfiguration("debouncing"),this.storeInView=this.module.getConfigurationCheckbox("storeInView","yes"),this.valueChanged=e.debounce(function(){a.module.controller.valueChanged.apply(a.module.controller,arguments)},this.debounce)},inDom:function(){this.initEditor()},blank:{html:function(){this.updateEditor("")}},update:{html:function(a){this.module.data=a;var b=a.get();this.storeInView&&(this.module.definition.richtext=b),this.updateEditor(b)}},initEditor:function(){var b=this,c=this.module.definition.richtext||"";if(this.readOnly=!this.module.getConfigurationCheckbox("editable","isEditable"),this.readOnly&&this.plainHtml)this.dom=a("<div>"),this.storeInView&&this.dom.html(c),this.module.getDomContent().html(this.dom),this._setCss();else{this.dom=a(`<div id="${this._id}" contenteditable="true">`),this.storeInView&&(this.dom.html(c),this.module.controller.valueChanged(c)),this.module.getDomContent().html(this.dom),this._setCss(),d.instances[this._id]&&d.instances[this._id].destroy(),d.disableAutoInline=!0;var e={extraPlugins:"mathjax,font,sourcedialog,codesnippet",removeButtons:"",language:"en",mathJaxLib:"//cdn.mathjax.org/mathjax/2.2-latest/MathJax.js?config=TeX-AMS_HTML"};this.readOnly&&(e.readOnly=!0,e.removePlugins="toolbar",e.allowedContent=!0),this.instance=d.inline(this._id,e),this.instance.on("change",function(){b.valueChanged(b.instance.getData()),b.module.getConfigurationCheckbox("autoHeight","yes")&&(b.module.getDomWrapper().height(b.getContentHeight()+50),f.moduleResize(b.module))}),this.instance.on("loaded",function(){b.resolveReady()})}},updateEditor:function(a){a+="",this.plainHtml?this.dom.html(a):this.instance.setData(a)},getContentHeight:function(){var b=0;return this.dom.children().each(function(){b+=a(this).height()}),b},onActionReceive:{insertHtml:function(a){this.instance.insertHtml(a,"unfiltered_html")},insertText:function(a){setImmediate(()=>{this.instance.insertText(a)})}},_setCss:function(){var a=this.module.getConfiguration("bgColor");if(this.dom.css({height:"100%",width:"100%",padding:"5px",boxSizing:"border-box"}),this.module.getConfigurationCheckbox("postit","yes")){var b=g(a[0],a[1],a[2]);this.dom.addClass("richtext-postit"),this.dom.parents(".ci-module-wrapper").addClass("ci-module-richtext-postit"),this.dom.css({background:`${c.getCssVendorPrefix()}radial-gradient(center, ellipse cover, ${b.brighter().hex()} 0%, ${b.hex()} 100%)`})}else this.dom.css({background:""}),this.dom.css({"background-color":`rgba(${a.join(",")})`}),this.dom.removeClass("richtext-postit"),this.dom.parents(".ci-module-wrapper").removeClass("ci-module-richtext-postit")}}),h});