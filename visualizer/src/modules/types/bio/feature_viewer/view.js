"use strict";define(["modules/default/defaultview","src/util/util","BiojsCore","jquery-ui/ui/widgets/slider","BiojsDasProteinFeatureViewer"],function(a,b,c){"use strict";function d(){}return $.extend(!0,d.prototype,a,{init:function(){this.dom||(this._id=b.getNextUniqueId(),this.dom=$(` <div id="${this._id}"></div>`).css("height","100%").css("width","100%"),this.module.getDomContent().html(this.dom))},blank:{feature:function(){this.dom.empty()}},inDom:function(){this.resolveReady()},onResize:function(){this.dom.find("table").attr("width",this.dom.width())},update:{feature:function(a){var b=this,d=new c.MyFeatureViewer({target:this._id,json:a,imageWidth:200}),e=this.dom.find("svg").first(),f=[0,0,e.attr("width"),e.attr("height")];e[0].setAttribute("viewBox",f.join(" ")),e.attr("width","100%"),e.attr("height","100%"),e.parent().width("100%").height("100%"),d.onFeatureClick(function(a){delete a.shape,b.module.controller.onFeatureClicked(a)}),d.onFeatureOn(function(a){delete a.shape,b.module.controller.onFeatureMouseOver(a)})}},getDom:function(){return this.dom}}),d});
