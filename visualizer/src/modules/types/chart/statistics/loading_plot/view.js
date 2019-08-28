"use strict";define(["modules/default/defaultview","src/util/util","src/util/api","src/util/ui","lib/loadingplot/loadingplot","components/jquery-mousewheel/jquery.mousewheel.min"],function(a,b,c,d,e){"use strict";function f(){}return b.loadCss("lib/loadingplot/svg.css"),$.extend(!0,f.prototype,a,{init:function(){this.dom=d.getSafeElement("div"),this.module.getDomContent().html(this.dom),this.resolveReady()},onResize:function(a,b){this._w=a,this._h=b,this._w&&this._h&&this._svg&&this._svg.setSize(this._w,this._h),this.refresh()},blank:{loading:function(){this.dom&&this.dom.empty(),c.killHighlight(this.module.getId())}},update:{preferences:function(a){if(this._lastConf=a,!!this._lastValue)for(var b in a)for(var c=0;c<this._lastValue.series.length;c++)if(this._lastValue.series[c].category==b)for(var d=0;d<this._lastValue.series[c].data.length;d++)this._instances[c][d].filter(a[b])},center:function(a){a&&this._svg.setCenter.apply(this._svg,a)},zoom:function(a){a&&this._svg.setZoom(a)},viewport:function(a){a&&this._svg.setViewBox.apply(this._svg,[!1].concat(a))},loading:function(a){var b=this;if(a&&a.value){this._highlights=[];var d=new e.SVG(null,null,null,null,this.module.getConfiguration("navigation")[0][0]||!1);d._svgEl.style.display="block",d.onZoomChange(function(a){b.module.controller.onZoomChange(a),b.module.controller.onChangeViewport(d.getViewBox())}),d.onMove(function(a,c){b.module.controller.onMove(a,c),b.module.controller.onChangeViewport(d.getViewBox())}),this._svg=d,this._w&&this._h&&d.setSize(this._w,this._h);var f=a.value.minX||0,g=a.value.minY||0,h=(a.value.maxX||100)-f,m=(a.value.maxY||100)-g;d.setViewBoxWidth(f,g,h,m,!0),d.create(),d.bindTo(this.dom);var n=new e.SpringLabels(d);if(d.initZoom(),e.SVGElement.prototype.Springs=n,this._lastValue=a.value,this._instances=[],a.value&&a.value.series){for(var o=this.module.getConfiguration("layers"),p=0;p<o.length;p++){var q,r=o[p].groups.group[0],s=r.labels[0],t={};for(q=0;q<s.length;q++)t[s[q]]=!0;var u=r.el[0],v=r.type[0]||"ellipse";for(q=0;q<a.value.series.length;q++)if(a.value.series[q].category===u){for(var w,x=a.value.series[q].data,y=0,z=x.length;y<z;y++){"pie"===v?w=new e.Pie(d,x[y].x,x[y].y,x[y]):"ellipse"===v?w=new e.Ellipse(d,x[y].x,x[y].y,x[y]):"img"===v&&(w=new e.Image(d,x[y].x,x[y].y,x[y])),w.allowLabelDisplay(t.display_labels),r.labelsize[0]&&w.setLabelSize(r.labelsize[0]),w.forceField(t.forcefield),""!==r.labelzoomthreshold[0]&&w.setLabelDisplayThreshold(r.labelzoomthreshold[0]);var l=r.highlightmag[0]?r.highlightmag[0]:1,A=!!r.highlighteffect[0][0];w.setHighlightMag(l),w.setHighlightEffect({mag:l,yStroke:A}),w.setLabelStroke(t.blackstroke),w.setLabelScale(t.scalelabel);var B=w.highlight.bind(w);c.listenHighlight(x[y],B,!1,this.module.getId()),w.hoverCallback=function(){b.module.controller.hover(this._data)},this._instances[q]=this._instances[q]||[],this._instances[q][y]=w,d.add(w)}break}}d.ready(),n.resolve(),this._lastConf&&this.update.preferences.call(this,this._lastConf)}}}}}),f});
