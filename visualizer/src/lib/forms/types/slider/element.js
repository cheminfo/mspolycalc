"use strict";define(["jquery","jquery-ui/ui/widgets/slider"],function(a){"use strict";var b=function(){};return b.prototype.__makeDom=function(){var b,c=this,d=a("<div />"),e=a("<div></div>").addClass("field-list").appendTo(d),f=[this.field.options.min,this.field.options.max],g=c.field.options.range,h=a("<div />").appendTo(e).slider({min:this.field.options.min,max:this.field.options.max,step:this.field.options.step,range:this.field.options.range,change:function(a,d){d.value=g?d.values[b]:d.value,j[b]&&f[b]!==d.value&&!isNaN(d.value)&&(f[b]=d.value,j[b].val(f[b]),c.setValueSilent(g?f:f[0]))},slide:function(d,e){var h=a(e.handle).index();b=h,g&&b--,e.value=g?e.values[b]:e.value,isNaN(e.value)||!j[b]||f[b]===e.value||isNaN(e.value)||(f[b]=e.value,j[b]&&(j[b].val(f[b]),c.setValueSilent(g?f:f[0])))}}),i=a("<div />").addClass("forms-field-slider-value").appendTo(e),j=[];return j[0]=a("<input />").bind("keyup",function(){var d=a(this).val(),e=parseFloat(d);!isNaN(d)&&isFinite(d)&&(f[0]=e,b=0,g?c.slider.slider("values",b,e):c.slider.slider("value",e))}),i.append(this.field.options.range?"<span>Min</span>":"<span>Value</span>").append(j[0]),this.field.options.range&&(j[1]=a("<input />").bind("keyup",function(){var d=a(this).val(),e=parseFloat(d);!isNaN(d)&&isFinite(d)&&(f[1]=e,b=1,c.slider.slider("values",b,e))}),i.append("<span>Max</span>").append(j[1])),this.fieldElement=e,this.div=e,this.dom=d,this.slider=h,this.inputs=j,d},b.prototype.checkValue=function(){if(this.slider&&"undefined"!=typeof this.value)if(!this.field.options.range)this.slider.slider("value",this.value);else if(this.value instanceof Array)for(var a=0,b=this.value.length;a<b;a++)this.slider.slider("values",a,this.value[a]),this.inputs[a].val(this.value[a])},b});
