/**/﻿_jsload&&_jsload('hotspot', 'function dh(e){this._map=e;this._enableSpot=true;this.bindMapEvent()}dh.prototype.enable=function(){this._enableSpot=true};dh.prototype.disable=function(){this._enableSpot=false};dh.prototype.bindMapEvent=function(){var hT=this._map;var hR=this;function i(){hR.disable()}function e(){hR.enable()}hT.addEventListener("movestart",i);hT.addEventListener("moveend",e);hT.addEventListener("zoomstart",i);hT.addEventListener("zoomend",function(){setTimeout(e,10)});function T(){hR.reset()}hT.addEventListener("load",T);hT.addEventListener("moveend",T);hT.addEventListener("zoomend",T);hT.addEventListener("dragend",function(){this.temp.__dragged=true});hT.addEventListener("mousemove",function hS(h3){if(hT.currentOperation!==dU.idle||hR._enableSpot===false){return}if(h3.overlay&&!(h3.overlay instanceof w)||h3.infoWindow){return}var h8=this.temp;if(h8.spottimer){clearTimeout(h8.spottimer);h8.spottimer=null}if(hT.spotsPool){var hU=hT.temp.curSpots.slice(0);hT.temp.curSpots=[];var h4=hR.getSpotsByScreenPosition(h3.pixel);if(h4.length>0){hT.platform.style.cursor="pointer"}hT.temp.curSpotsArray=[];for(var h1=hT.temp.curSpots.length-1;h1>=0;h1--){if(hT.temp.curSpots[h1]&&hT.temp.curSpots[h1].spots&&hT.temp.curSpots[h1].spots.length>0){hT.temp.curSpotsArray=hT.temp.curSpots[h1].spots;break}}var h5=hT.temp.curSpotsArray.slice(0);var hW=[];var h7=h1;for(var h1=hU.length-1;h1>=0;h1--){if(h1===h7){hW=hU[h7]&&hU[h7].spots||[];for(var h0=0,hY=hW.length;h0<hY;h0++){for(var hZ=0,hV=0,hX=hT.temp.curSpotsArray.length;hZ<hX;hZ++,hV++){if(hW[h0]===hT.temp.curSpotsArray[hZ]){hW.splice(h0,1);h0--;h5.splice(hV,1);hV--}}}}else{if(hU[h1]&&hU[h1].spots&&hU[h1].spots.length>0){for(var h0=0;h0<hU[h1].spots.length;h0++){hW.push(hU[h1].spots[h0])}}}}if(hW.length>0){var h2=new bb("onspotmouseout");h2.spots=hW.slice(0);hT.dispatchEvent(h2)}if(hT.temp.curSpotsArray.length===0){var h6=null;if(hT.getZoom()>=17){h6=hR.checkAreaSpot(h3.point)}if(h6){if(hT.platform.style.cursor!=="pointer"){hT.platform.style.cursor="pointer"}hT.temp.curAreaSpot=h6}else{if(hT.platform.style.cursor!==hT.config.defaultCursor){hT.platform.style.cursor=hT.config.defaultCursor}hT.temp.curAreaSpot=null}}else{if(h5.length>0){var h2=new bb("onspotmouseover");if(hT.temp.curSpots[hT.temp.curSpots.length-1].enableMultiResponse){h2.spots=h5.slice(0)}else{h5.sort(function(ia,h9){return ia._distance-h9._distance});h2.spots=h5.slice(0,1)}if(h3.point){h2.point=new hs(h3.point.lng,h3.point.lat)}h2.pixel=new ej(h3.pixel.x,h3.pixel.y);hT.dispatchEvent(h2)}}}});hT.addEventListener("click",function(h0){var hY=this.temp;if(h0.overlay&&!(h0.overlay instanceof aR)){return}if(!h0.point){return}if(C.Platform.iphone||C.Platform.ipad||C.Platform.android){hY.curSpotsArray=hR.getSpotsByScreenPosition(h0.pixel)}var hZ=new bb("onspotclick");hZ.point=new hs(h0.point.lng,h0.point.lat);hZ.pixel=new ej(h0.pixel.x,h0.pixel.y);if(hY.curSpotsArray.length>0){for(var hX=0,hU=hY.curSpots.length;hX<hU;hX++){if(hY.curSpots[hX].spots&&hY.curSpots[hX].spots.length>0){if(hY.curSpots[hX].enableMultiResponse){hZ.spots=hY.curSpotsArray.slice(0)}else{hY.curSpotsArray.sort(function(h3,h2){return h3._distance-h2._distance});hZ.spots=hY.curSpotsArray.slice(0,1)}break}}}var hW=hZ.spots||[];for(var hX=0;hX<hW.length;hX++){var hV=hW[hX].pt;var h1=hR.checkAreaSpot(hV);if(h1){hY.curAreaSpot=h1}}hZ.curAreaSpot=hY.curAreaSpot;this.dispatchEvent(hZ)});hT.addEventListener("rightclick",function(hV){if(hV.overlay&&!(hV.overlay instanceof aR)){return}if(!hV.point){return}var hU=new bb("onhotspotrightclick");hU.point=new hs(hV.latlng.lng,hV.latlng.lat);hU.mct=new hs(hV.point.lng,hV.point.lat);hU.pixel=new ej(hV.pixel.x,hV.pixel.y);if(f.environment==="customEditor"){hU.styleIds=hR.checkStyleAreaSpot(hV.point)}this.dispatchEvent(hU)})};dh.prototype.getSpotsByScreenPosition=function(hT){var h0=[];var e=this._map;var hV=e.getTilt();if(!e.spotsPool){return h0}for(var hR in e.spotsPool){var hY=e.spotsPool[hR];var hW=hY.spots.slice(0);if(hW[0]&&hW[0].userdata&&hW[0].userdata.mapPoi&&e._displayOptions.poi===false){continue}e.temp.curSpots[hY.zIndex]={spots:[],enableMultiResponse:hY.enableMultiResponse};for(var hU=0,hS=hW.length;hU<hS;hU++){var hZ=hW[hU];if(hZ.lr&&(e.getZoom()<hZ.lr[0]||e.getZoom()>hZ.lr[1])){continue}var T=hZ.px||e.pointToPixelIn(hZ.pt);if(T.x<e.width&&T.y<e.height){if((hT.x-T.x<hZ.bd[2]&&hT.x-T.x>hZ.bd[0])&&(T.y-hT.y<hZ.bd[3]&&T.y-hT.y>hZ.bd[1])){if(hV>55){var hX=e.pointToOverlayPixelIn(hZ.pt);if(hX.outOfFrustum){continue}}e.temp.curSpots[hY.zIndex].spots.push(hZ);hZ._distance=gW(T,hT);h0.push(hZ)}}}}return h0};dh.prototype.checkAreaSpot=function(e){if(!e){return null}var T=this._map;if(T._displayOptions.indoor===false){return null}for(var hR in T.areaSpots){var i=T.areaSpots[hR];if(dg([e.lng,e.lat],i.spot)){return hR}}return null};dh.prototype.checkStyleAreaSpot=function(T){if(!T){return null}var hS=this._map;var i=[];for(var hT in hS.areaSpots){var hR=hS.areaSpots[hT];var e=hR.userData;if(e.type==="mapstyle"&&dg([T.lng,T.lat],hR.spot)){i.push([e.styleId])}}return i};dh.prototype.reset=function(){var e=this._map;if(e.temp.__dragged==true){e.temp.__dragged=false}else{e.temp.curSpots=[];e.platform.style.cursor=e.config.defaultCursor}};dh.prototype.resetAreaSpot=function(){for(var T in this.areaSpots){var i=this.areaSpots[T];var e=i.userData;if(e.type==="mapstyle"){delete this.areaSpots[T]}}};bo.register(function(e){e._spotsMgr=new dh(e)});');