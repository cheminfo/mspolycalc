"use strict";define(["jquery","modules/default/defaultview","src/util/datatraversing","src/util/api","src/util/util","src/util/ui","lib/jit/jit-custom","src/util/tree","src/util/color"],function(a,b,c,d,e,f,g,h,i){"use strict";function j(){this._value={}}function k(a,b,c){Array.isArray(c)&&(a[b]=c)}return a.extend(!0,j.prototype,b,{highlightNode(){},init(){this.dom||(this._id=e.getNextUniqueId(),this.dom=f.getSafeElement("div").attr("id",this._id),this.module.getDomContent().html(this.dom)),this.dom&&this.dom.empty(),this._rgraph&&delete this._rgraph,this._highlighted={},this.updateOptions(),this.resolveReady()},onResize(){this.createDendrogram(),this.updateDendrogram()},getIdHash(a){if(a&&(a.id&&(this._idHash[a.id]=a),Array.isArray(a.children)))for(var b=0;b<a.children.length;b++)this.getIdHash(a.children[b])},blank:{tree(){this._value={},this.updateTree()},newTree(){this._tree=null,this._value={},this.updateTree()},data(){this._data=null,this._value={},this.updateTree()}},update:{tree(b){this._value=a.extend(!0,new DataObject({}),b.get()),this.updateTree()},newTree(a){this._tree=a.get(),this.doAnnotation()},data(a){this._data=a.get(),this.doAnnotation()}},doAnnotation(){if(this._tree){var a=this.getOptions();this._value=h.annotateTree(this._tree,this._data||[],a),this.updateTree()}},updateTree(){if(this._idHash={},this.getIdHash(this._value),!this._rgraph){if(!document.getElementById(this._id))return;this.createDendrogram()}this.updateDendrogram()},getOptions(){var a={},b=this.module.getConfiguration;return k(a,"$color",b("jpathColor")),k(a,"$dim",b("jpathSize")),k(a,"$type",b("jpathShape")),k(a,"label",b("jpathLabel")),a},updateDendrogram(){this._rgraph&&(this._rgraph.loadJSON(this._value),this._value&&(g.Graph.Util.each(this._rgraph.graph,a=>{a.name=a.data&&a.data.label?a.data.label:""}),this._rgraph.refresh()))},updateOptions(){var a=this.module.getConfiguration;this._options={nodeSize:a("nodeSize")||1,nodeColor:i.getColor(a("nodeColor"))||"yellow"}},createDendrogram(){var a=this.module.vars_out();if(a&&0!=a.length){var b=a=>{this.module.controller.onHover(this._idHash[a.id])},c=a=>{this.module.controller.onClick(this._idHash[a.id])},d=this.module.getConfiguration;this.dom.empty();this._options;this._rgraph=new g.RGraph({injectInto:this._id,levelDistance:50,background:{CanvasStyles:{strokeStyle:i.getColor(d("strokeColor"))||"#333",lineWidth:d("strokeWidth")||"1"}},Navigation:{enable:!0,panning:!0,zooming:50},Edge:{overridable:!0,color:i.getColor(d("edgeColor"))||"green",lineWidth:d("edgeWidth")||.5},Label:{overridable:!0,type:"Native",size:d("labelSize")||10,family:"sans-serif",textAlign:"center",textBaseline:"alphabetic",color:i.getColor(d("labelColor"))||"black"},Node:{CanvasStyles:{shadowColor:"rgb(0, 0, 0)",shadowBlur:0},overridable:!0,type:d("nodeType")||"circle",color:i.getColor(d("nodeColor"))||"yellow",dim:d("nodeSize")||3,height:3,width:3,lineWidth:10},Events:{getRgraph(a){var b=a.srcElement.id.replace(/-.*/,"");return g.existingInstance[b]?g.existingInstance[b]:(b=a.srcElement.parentElement.id.replace(/-.*/,""),g.existingInstance[b])?g.existingInstance[b]:void 0},enable:!0,enableForEdges:!0,type:"Native",onClick(a,b,d){if(a){var e,f=this.getRgraph(d);if(a.collapsed)e=a;else if(a.ignore)for(e=a.getParents()[0];e.ignore;)e=e.getParents()[0];else a.nodeFrom&&(e=a.nodeFrom._depth>a.nodeTo._depth?a.nodeFrom:a.nodeTo,a.nodeFrom.collapsed&&(e=a.nodeFrom),a.nodeTo.collapsed&&(e=a.nodeTo));e?e.collapsed?f.op.expand(e,{type:"animate",duration:500,hideLabels:!1,transition:g.Trans.Quart.easeInOut}):f.op.contract(a.nodeFrom,{type:"animate",duration:500,hideLabels:!0,transition:g.Trans.Quart.easeInOut}):!a.ignore&&c(a)}},onMouseEnter(a,c,d){b(a),this.getRgraph(d).canvas.getElement().style.cursor="pointer"},onMouseLeave(a,b,c){this.getRgraph(c).canvas.getElement().style.cursor=""}},Tips:{enable:!1}}),g.existingInstance=g.existingInstance||{},g.existingInstance[this._id]=this._rgraph}},_doHighlight(a,b){if(!(this._highlighted[a]&&b)&&(this._highlighted[a]||b))for(var c in this._highlighted[a]=b,this._currentValue._atoms)-1<this._currentValue._atoms[c].indexOf(a)&&d.highlight(c,b)}}),j});
