'use strict';Biojs.MyFeatureViewer=Biojs.FeatureViewer.extend({_webservice:"http://wwwdev.ebi.ac.uk/uniprot/featureViewer/image",_dasReference:"http://www.ebi.ac.uk/das-srv/uniprot/das/uniprot/",constructor:function(a){this.base(a);try{Biojs.Utils.isEmpty(this.opt.json)||this.paintFeatures(this.opt.json)}catch(a){document.getElementById(this.opt.target).innerHTML="",document.getElementById(this.opt.target).innerHTML="No image available. Did you provide a valid UniProt accession or identifier, and valid limits?"}},opt:{dasSources:"http://www.ebi.ac.uk/das-srv/uniprot/das/uniprot",featureTypes:"",featureNames:"",imageWidth:700,imageStyle:"nonOverlapping",optionResponse:"raphael",hgrid:!1,vgrid:!1,allFeatures:!0,allRectangles:!1,allSameSize:!1,proxyUrl:"../biojs/dependencies/proxy/proxy.php"},eventTypes:[],showGeneralLegend:function(){var a=this.opt.json.configuration,b=`${this._webservice}?`;window.open(b)},exportFeaturesToImage:function(){var a=this.opt.json.configuration,b="";if(jQuery.browser.msie){var c=`segment=${this.opt.json.segment}`;0!=a.requestedStart&&0!=a.requestedStop&&(c=`${c}:${a.requestedStart},${a.requestedStop}`),c=`${c}&dasReference=${a.dasReference}&dasSources=${a.dasSources}&width=${a.sizeX}&option=image`+`&hgrid=${a.horizontalGrid}&vgrid=${a.verticalGrid}&style=${a.style}`,b=`${this._webservice}?${c}`,window.open(b)}else{var d=jQuery("#uniprotFeaturePainter-holder"),e=d.find("svg"),f=e.attr("width"),g=e.attr("height");e.attr("width",`${e.width()}px`),e.attr("height",`${e.height()}px`);var h=document.getElementById("uniprotFeaturePainter-holder").innerHTML,i=document.createElement("canvas");canvg(i,h),b=i.toDataURL(),e.attr("width",`${e.width()}px`),e.attr("height",g).attr("width",f),this.$imageExported=jQuery("<div id=\"uniprotFeaturePainter-imageExportedDiv\"></div>").html(`<img id="uniprotFeaturePainter-imageExported" alt="exported image" src="${b}"/>`).dialog({autoOpen:!0,title:"Exported image",modal:!0,width:e.width()+20})}},applyStyle:function(a){if(a!=null&&("centered"==a||"nonOverlapping"==a||(a="rows"))){var b=this.opt.json.configuration;this.customize(a,b.horizontalGrid,b.verticalGrid)}},showHideHorizontalGrid:function(a){if(a!=null&&(!0==a||!1==a)){var b=this.opt.json.configuration;this.customize(b.style,a,b.verticalGrid)}},showHideVerticalGrid:function(a){if(a!=null&&(!0==a||!1==a)){var b=this.opt.json.configuration;this.customize(b.style,b.horizontalGrid,a)}}});