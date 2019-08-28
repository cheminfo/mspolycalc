"use strict";define(["modules/default/defaultview","src/util/util","lib/dhtmlxchart/dhtmlxchart"],function(a,b){"use strict";function c(){}return $.extend(!0,c.prototype,a,{init:function(){this.dom||(this._id=b.getNextUniqueId(),this.dom=$(`<div style="height: 100%;width: 100%" id="${this._id}"></div>`),this.module.getDomContent().html(this.dom)),this._data=[],this.resolveReady()},onResize:function(){this._redraw()},update:{chart:function(a){this.value=a.get(),this._redraw()}},blank:{chart:function(){this.dom&&this.dom.empty()}},_redraw:function(){if(this.value){this.dom&&this.dom.empty();var a=this._convertChartToData(this.value);this.createChart(this.value),this._radar.parse(a,"json");var b=this;this._radar.attachEvent("onMouseMove",function(c,d){return a.forEach(function(a){if(a.id==c){var e=a;"d"==d.toElement.outerHTML[d.toElement.outerHTML.length-3]?b.module.controller.elementHover(e._highlight[0]):b.module.controller.elementHover(e._highlight[d.toElement.outerHTML[d.toElement.outerHTML.length-3]])}}),!0}),this._radar.attachEvent("onMouseOut",function(){b.module.controller.elementOut()})}},_convertChartToData:function(a){var b=[];if(a&&Array.isArray(a.data))for(var c=0;c<a.data[0].x.length;c++){b[c]={},b[c].xunit=a.data[0].x[c],b[c]._highlight=[];for(var d,e=0;e<a.data.length;e++)d=`serie${e}`,b[c][d]=a.data[e].y[c],a.data[e]._highlight&&a.data[e]._highlight[c]&&b[c]._highlight.push({name:d,_highlight:a.data[e]._highlight[c]})}return b},getRandomColor:function(a,b){return`hsla(${360/a*b},100%,50%,0.3)`},createChart:function(a){var b=this.module.getConfiguration;switch(b("preference")){case"radar":a.data[0].color||(a.data[0].color=this.getRandomColor(a.data.length,0));var c={view:"radar",container:this._id,alpha:.2,value:"#serie0#",disableLines:b("line"),disableItems:b("point"),color:a.data[0].color,fill:a.data[0].color,line:{color:a.data[0].color,width:1},xAxis:{template:"#xunit#"},yAxis:{lineShape:b("lineshape"),start:b("start"),end:b("end"),step:b("step")}};this._radar=new dhtmlXChart(c);for(var d=[],e=0;e<a.data.length;e++)0!=e&&(!a.data[e].color&&(a.data[e].color=this.getRandomColor(a.data.length,e)),this._radar.addSeries({value:`#serie${e}#`,fill:a.data[e].color,disableLines:b("line"),line:{color:a.data[e].color,width:1}})),d.push({text:a.data[e].serieLabel,color:a.data[e].color});break;case"pie":var c={view:b("pie"),container:this._id,radius:220,value:"#serie0#",color:a.data[0].color,pieInnerText:"<b>#xunit#</b>"};this._radar=new dhtmlXChart(c);}if("true"==b("showlegend"))switch(b("legendalign")){case"top-left":this._radar.define("legend",{width:120,align:"left",valign:"top",marker:{type:b("legendmarker"),width:15},values:d});break;case"top-right":this._radar.define("legend",{width:120,align:"right",valign:"top",marker:{type:b("legendmarker"),width:15},values:d});break;case"bottom-left":this._radar.define("legend",{width:120,align:"left",valign:"bottom",marker:{type:b("legendmarker"),width:15},values:d});break;case"bottom-right":this._radar.define("legend",{width:120,align:"right",valign:"bottom",marker:{type:b("legendmarker"),width:15},values:d});}}}),c});
