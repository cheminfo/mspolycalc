"use strict";require.config({shim:{"components/leaflet/dist/leaflet":{exports:"L",init:function(){return this.L.noConflict()}}}}),define(["jquery","modules/default/defaultview","src/util/util","src/util/api","src/util/color","components/leaflet/dist/leaflet","components/leaflet-omnivore/leaflet-omnivore.min"],function(a,b,c,d,e,f,g){"use strict";function h(){this.mapID=c.getNextUniqueId()}function i(b){var c=this.options=a.extend({},i.defaultOptions,b);switch(this.div=a("<div>"),this.kind=c.kind,c.kind){case"image":this.div=a(`<img src="${c.img}">`);break;case"circle":this.div.css("border-radius",c.size);default:this.div.css("background",c.color);}this.div.css({width:this.width,height:this.height})}function j(a){d.killHighlight(`${this.module.getId()}_${a}`),this.mapLayers.hasOwnProperty(a)&&(this.map.removeLayer(this.mapLayers[a]),delete this.mapLayers[a]),this.mapLayer.hasOwnProperty(a)&&this.map.removeLayer(this.mapLayer[a]),this.mapBounds.hasOwnProperty(a)&&delete this.mapBounds[a],this.updateFit()}function k(a){return Math.floor(1e3*a)}c.loadCss("components/leaflet/dist/leaflet.css");var l=f.Icon.extend({createIcon:function(){this._marker=this.options.marker;var a=this._marker.div[0];return this._setIconStyles(a,"icon"),a},createShadow:function(){return null}});return i.defaultOptions={size:30,color:"rgba(1,1,1,0.5)",kind:"circle"},i.setDefaultOptions=function(b){a.extend(i.defaultOptions,b)},i.prototype={highlight:function(a){a?"image"===this.kind&&this.options.imgHighlight?this.div.attr("src",this.options.imgHighlight):this.div.css("border","solid"):"image"===this.kind&&this.options.imgHighlight?this.div.attr("src",this.options.img):this.div.css("border","none")},get center(){return"image"===this.kind?[this.width/2,this.height]:[this.width/2,this.height/2]},get width(){return this.options.width||this.options.height||this.options.size},get height(){return this.options.height||this.options.width||this.options.size}},a.extend(!0,h.prototype,b,{init:function(){this.mapLayers={},this.mapLayer={},this.mapBounds={},this.dom=a(`<div id="${this.mapID}"></div>`).css({height:"100%",width:"100%"}),this.module.getDomContent().html(this.dom),i.setDefaultOptions({kind:this.module.getConfiguration("markerkind"),color:e.getColor(this.module.getConfiguration("markercolor")),size:parseInt(this.module.getConfiguration("markersize"),10),img:"components/leaflet/dist/images/marker-icon.png",imgHighlight:"modules/types/chart/maps/leaflet/marker-icon-red.png"}),this.markerjpath=this.module.getConfiguration("markerjpath")},inDom:function(){function a(){return c?void(c=!1):void(b.module.controller.moveAction.call(b),b.module.controller.zoomAction.call(b))}this.dom.empty();var b=this;this.map=f.map(this.mapID,{zoomAnimation:!1}),this.getTileLayer().addTo(b.map);var c=!0;this.map.on("drag",b.module.controller.moveAction,b),this.map.on("zoomend",a);var d,e=[46.522117,6.566144],g=this.module.getConfiguration("mapcenter");d=g?Promise.resolve(g):new Promise(function(a){window.navigator&&window.navigator.geolocation?navigator.geolocation.getCurrentPosition(function(b){a([b.coords.latitude,b.coords.longitude])},function(){a(e)}):a(e)}),d.then(function(a){var c=b.module.getConfiguration("mapzoom")||10;b.map.setView(a,c),b.resolveReady()})},blank:{geojson:j,csv:j,kml:j,gpx:j,wkt:j,topojson:j,point:j},update:{position:function(a){2>a.length||this.map.setView(f.latLng(a[0],a[1]))},geojson:function(a,b){try{var c=a.get(),d=f.geoJson(c,{pointToLayer:(a,b)=>f.circleMarker(b,{radius:4,fillColor:"#0074D9",color:"#000000",weight:1,opacity:1,fillOpacity:.8}),style:a=>a.properties&&a.properties.style});this.addGeoJSON(d,b)}catch(a){}this.updateFit(b)},csv:function(a,b){try{this.addGeoJSON(g.csv.parse(a.get()+""),b)}catch(a){}this.updateFit(b)},kml:function(a,b){try{this.addGeoJSON(g.kml.parse(a.get()+""),b)}catch(a){}this.updateFit(b)},gpx:function(a,b){try{this.addGeoJSON(g.gpx.parse(a.get()+""),b)}catch(a){}this.updateFit(b)},wkt:function(a,b){try{this.addGeoJSON(g.wkt.parse(a.get()+""),b)}catch(a){}this.updateFit(b)},topojson:function(a,b){try{this.addGeoJSON(g.topojson.parse(a.get()),b)}catch(a){}this.updateFit(b)},point:function(a,b){var c=f.latLng(a[0],a[1]),d=f.circle(c,20,{color:"#f00",fillColor:"#f00"});this.addLayer(d,b),this.updateFit(b)}},addLayer:function(a,b){a.addTo(this.map),this.mapLayer[b]=a,this.mapBounds[b]=new f.LatLngBounds,this.mapBounds[b].extend(a.getBounds?a.getBounds():a.getLatLng())},addGeoJSON:function(a,b){this.map.addLayer(a),this.mapLayers[b]=a,this.mapBounds[b]=new f.LatLngBounds,a.eachLayer(a=>{this.addEvents(a,b),this.mapBounds[b].extend(a.getBounds?a.getBounds():a.getLatLng())})},updateFit:function(a){var b,c=this.module.getConfiguration("autofit");if("var"===c)b=this.mapBounds[a];else if("all"===c)for(var d in b=new f.LatLngBounds,this.mapBounds)b.extend(this.mapBounds[d]);b&&b.isValid()&&this.map.fitBounds(b)},onResize:function(){this.map.invalidateSize()},onActionReceive:{position:function(a){var b=this.map.getCenter();(k(a[0])!==k(b.lat)||k(a[1])!==k(b.lng))&&this.map.setView(f.latLng(a[0],a[1]))},zoom:function(a){var b=this.map.getMinZoom(),c=this.map.getMaxZoom();a<b?a=b:a>c&&(a=c),a!==this.map.getZoom()&&this.map.setZoom(a)}},getTileLayer:function(){var a=this.module.getConfiguration("maptiles")||"osm",b={parameters:{}};switch(a){case"hb":b.template="http://toolserver.org/tiles/hikebike/{z}/{x}/{y}.png";break;case"osm":default:b.template="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",b.parameters.attribution="&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors";}return f.tileLayer(b.template,b.parameters)}}),h});
