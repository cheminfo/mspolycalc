'use strict';define(["jquery","src/header/components/default","src/util/versioning","src/util/util"],function(a,b,c,d){"use strict";function e(){}var f;return d.inherits(e,b,{_onClick:function(){var a=this;this.setStyleOpen(this._open),this._open?(f&&f!==this&&f._open&&f.onClick(),f=a,(this.options.viewURL||this.options.dataURL)&&this.load(this.options),this.doElements()):this.close()},load:function(a){var b={};(a.views||a.viewURL)&&(b.view={url:a.viewURL,branch:a.viewBranch,urls:a.views}),(a.results||a.dataURL)&&(b.data={url:a.dataURL,branch:a.branchURL,urls:a.views}),c.switchView(b,!0)},doElements:function(){this.$_elToOpen=this._doElements(this.options.elements),this.open()},_doElements:function(b){if(b){for(var c=a("<ul />")||this.$_elToOpen.empty(),d=0,e=b.length;d<e;d++)c.append(this._buildSubElement(b[d])),b[d].elements&&0<b[d].elements.length&&c.append(this._doElements(b[d].elements));return c}},_buildSubElement:function(b){var c=this,d=a("<li />").text(b.label||"");return(b.viewURL||b.dataURL)&&d.addClass("hasEvent").bind("click",function(){c.load(b),c.onClick()}),d}}),e});