"use strict";var count=0;function getColorFromValue(a){var b=min,c=max;highContrast||(b=0,c=1);var d=c-b,e=colors.length-1,f=d/e,g=Math.round(e*(a-b)/d);return g=Math.min(Math.max(0,g),colors.length-2),getColorBetween(a,colors[g],colors[g+1],g*f+b,(g+1)*f+b)}function getColorBetween(a,b,c,d,e){var f=(a-d)/(e-d);return[parseInt(f*(c[0]-b[0])+b[0],10),parseInt(f*(c[1]-b[1])+b[1],10),parseInt(f*(c[2]-b[2])+b[2],10),parseInt(f*(c[3]-b[3])+b[3],10)]}function getRGB(a){if(!a)return!1;return 7==a.length?[parseInt(`0x${a.substring(1,3)}`,16),parseInt(`0x${a.substring(3,5)}`,16),parseInt(`0x${a.substring(5,7)}`,16)]:4==a.length?[parseInt(`0x${a.substring(1,2)}`,16),parseInt(`0x${a.substring(2,3)}`,16),parseInt(`0x${a.substring(3,4)}`,16)]:void 0}function generate(a,b,c,d){for(var e=a*squareLoading,f=b*squareLoading,g=e+squareLoading,h=f+squareLoading,i=e,j=f,k=c.data;i<g;i++)for(j=f;j<h;j++){if("undefined"==typeof data[j]||"undefined"==typeof data[j][i])continue;else{var l=data[j][i];l.value&&(l=l.value)}var m=getColorFromValue(l);drawCell(l,i-e,j-f,m,k,d)}return c}function drawCell(a,b,c,d,e,f){for(var g,h=f*pxPerCell,k=0,l=0;l<pxPerCell;){for(;k<pxPerCell;)count++,g=4*(b*pxPerCell+k+(c*pxPerCell+l)*h),e[g+0]=d[0],e[g+1]=d[1],e[g+2]=d[2],e[g+3]=255,k++;k=0,l++}l=0}var data,min,max,colors,pxPerCell,squareLoading,highContrast;self.onmessage=function(a){var b=a.data;"init"==b.title?(colors=b.message.colors,squareLoading=b.message.squareLoading,highContrast=b.message.highcontrast):"changeData"==b.title?(data=JSON.parse(b.message.data),min=b.message.min,max=b.message.max):"doPx"==b.title&&(pxPerCell=b.message.pxPerCell,postMessage({pxPerCell:pxPerCell,indexX:b.message.indexX,indexY:b.message.indexY,data:generate(b.message.indexX,b.message.indexY,b.message.buffer,b.message.nbValX)}))};
