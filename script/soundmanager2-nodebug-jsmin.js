/*

 SoundManager 2: Javascript Sound for the Web
 --------------------------------------------
 http://schillmania.com/projects/soundmanager2/

 Copyright (c) 2007, Scott Schiller. All rights reserved.
 Code provided under the BSD License:
 http://schillmania.com/projects/soundmanager2/license.txt

 V2.95b.20100323+DEV
*/
(function(g){function ga(I,xa){function ha(){}this.flashVersion=8;this.debugFlash=this.debugMode=false;this.useConsole=true;this.waitForWindowLoad=this.consoleOnly=false;this.nullURL="null.mp3";this.allowPolling=true;this.useMovieStar=this.useFastPolling=false;this.bgColor="#ffffff";this.useHighPerformance=false;this.flashLoadTimeout=1E3;this.wmode=null;this.allowFullScreen=true;this.allowScriptAccess="always";this.useFlashBlock=false;this.useHTML5Audio=true;this.html5Test=/^probably$/i;this.requiredFormats=
{mp3:{type:["audio/mpeg",'audio/mpeg; codecs="mp3"',"audio/mp3","audio/mpeg3"],required:true},aac:{type:["audio/aac",'audio/mp4; codecs="mp4a.40.2"',"audio/x-m4a"],required:true}};if(this.requiredFormats.aac.required)this.flashVersion=9;this.defaultOptions={autoLoad:false,stream:true,autoPlay:false,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onstop:null,onfinish:null,onbeforefinish:null,onbeforefinishtime:5E3,onbeforefinishcomplete:null,
onjustbeforefinish:null,onjustbeforefinishtime:200,multiShot:true,multiShotEvents:false,position:null,pan:0,volume:100};this.flash9Options={isMovieStar:null,usePeakData:false,useWaveformData:false,useEQData:false,onbufferchange:null,ondataerror:null};this.movieStarOptions={onmetadata:null,useVideo:false,bufferTime:3};this.version=null;this.versionNumber="V2.95b.20100323+DEV";this.movieURL=null;this.url=I||null;this.altURL=null;this.enabled=this.swfLoaded=false;this.o=null;this.movieID="sm2-container";
this.id=xa||"sm2movie";this.swfCSS={swfDefault:"movieContainer",swfError:"swf_error",swfTimedout:"swf_timedout",swfUnblocked:"swf_unblocked",sm2Debug:"sm2_debug",highPerf:"high_performance",flashDebug:"flash_debug"};this.oMC=null;this.sounds={};this.soundIDs=[];this.isFullScreen=this.muted=false;this.isIE=navigator.userAgent.match(/MSIE/i);this.isSafari=navigator.userAgent.match(/safari/i);this.debugID="soundmanager-debug";this.debugURLParam=/([#?&])debug=1/i;this.didFlashBlock=this.specialWmodeCase=
false;this.filePattern=null;this.filePatterns={flash8:/\.mp3(\?\.*)?$/i,flash9:/\.mp3(\?\.*)?$/i};this.baseMimeTypes=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.netStreamMimeTypes=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.netStreamTypes=["aac","flv","mov","mp4","m4v","f4v","m4a","mp4v","3gp","3g2"];this.netStreamPattern=new RegExp("\\.("+this.netStreamTypes.join("|")+")(\\?.*)?$","i");this.mimePattern=this.baseMimeTypes;this.features={buffering:false,peakData:false,waveformData:false,
eqData:false,movieStar:false};this.sandbox={type:null,types:{remote:"remote (domain-based) rules",localWithFile:"local with file access (no internet access)",localWithNetwork:"local with network (internet access only, no local access)",localTrusted:"local, trusted (local+internet access)"},description:null,noRemote:null,noLocal:null};this.hasHTML5=null;this.html5={};var W,b=this,u;I=navigator.userAgent;var ia,J,v=[],K=false,L=false,n=false,s=false,ja=false,D,q,ka,w,x,M,X,Y,t,la,N,O,P,ma,na,Q,oa,pa,
E,qa,F=null,Z=null,y,$,G,R,aa,m,S=false,ba=false,T,U,ra,sa,H=true,ca,z,A,ta=I.match(/mobile/i),ua=I.match(/ipad/i),da,va=document.location?document.location.protocol.match(/http/i):null,ea=typeof document.hasFocus!=="undefined"?document.hasFocus():null,B=typeof document.hasFocus==="undefined"&&this.isSafari,wa=!B;A=function(c){if(!b.useHTML5Audio||!b.hasHTML5)return false;var a=typeof c.type!=="undefined"?c.type:null,f=typeof c==="string"?c.match(/\.(aac|mp3|mp4|ogg)/i):null;if(!f||!f.length){if(!a)return false}else f=
f[0].substr(1);(f||a)&&(c&&!c.type?decodeURI(c.substr(c.indexOf("/")!==-1?c.lastIndexOf("/")+1:0)):decodeURI(c));if(f&&typeof b.html5[f]!=="undefined")return b.html5[f];else{if(!a)if(f&&b.html5[f])return b.html5[f];else a="audio/"+f;c=b.html5.canPlayType(a);return b.html5[f]=c}};this.useAltURL=!va;this.supported=function(){return H?n&&!s:b.useHTML5Audio&&b.hasHTML5};this.getMovie=function(c){return b.isIE?g[c]:b.isSafari?u(c)||document[c]:u(c)};this.loadFromXML=function(c){try{b.o._loadFromXML(c)}catch(a){E();
return true}};this.createSound=function(c){function a(){f=R(f);b.sounds[e.id]=new W(e);b.soundIDs.push(e.id);return b.sounds[e.id]}var f=null,i=null,e=null;if(!n)throw aa("soundManager.createSound(): "+y("notReady"),arguments.callee.caller);if(arguments.length===2)c={id:arguments[0],url:arguments[1]};e=f=q(c);if(m(e.id,true))return b.sounds[e.id];if(A(e.url)){i=a();i._setup_html5({url:e.url})}else{if(b.flashVersion>8&&b.useMovieStar){if(e.isMovieStar===null)e.isMovieStar=e.url.match(b.netStreamPattern)?
true:false;if(e.isMovieStar&&e.usePeakData)e.usePeakData=false}i=a();b.flashVersion===8?b.o._createSound(e.id,e.onjustbeforefinishtime,e.loops||1):b.o._createSound(e.id,e.url,e.onjustbeforefinishtime,e.usePeakData,e.useWaveformData,e.useEQData,e.isMovieStar,e.isMovieStar?e.useVideo:false,e.isMovieStar?e.bufferTime:false,e.loops||1)}if(e.autoLoad||e.autoPlay)if(i)if(b.useHTML5){i.autobuffer="auto";i.preload="auto"}else i.load(e);e.autoPlay&&i.play();return i};this.createVideo=function(c){if(arguments.length===
2)c={id:arguments[0],url:arguments[1]};if(b.flashVersion>=9){c.isMovieStar=true;c.useVideo=true}else return false;return b.createSound(c)};this.destroyVideo=this.destroySound=function(c,a){if(!m(c))return false;for(var f=0;f<b.soundIDs.length;f++)b.soundIDs[f]===c&&b.soundIDs.splice(f,1);b.sounds[c].unload();a||b.sounds[c].destruct();delete b.sounds[c]};this.load=function(c,a){if(!m(c))return false;b.sounds[c].load(a)};this.unload=function(c){if(!m(c))return false;b.sounds[c].unload()};this.start=
this.play=function(c,a){if(!n)throw aa("soundManager.play(): "+y("notReady"),arguments.callee.caller);if(!m(c)){a instanceof Object||(a={url:a});if(a&&a.url){a.id=c;return b.createSound(a).play()}else return false}b.sounds[c].play(a)};this.setPosition=function(c,a){if(!m(c))return false;b.sounds[c].setPosition(a)};this.stop=function(c){if(!m(c))return false;b.sounds[c].stop()};this.stopAll=function(){for(var c in b.sounds)b.sounds[c]instanceof W&&b.sounds[c].stop()};this.pause=function(c){if(!m(c))return false;
b.sounds[c].pause()};this.pauseAll=function(){for(var c=b.soundIDs.length;c--;)b.sounds[b.soundIDs[c]].pause()};this.resume=function(c){if(!m(c))return false;b.sounds[c].resume()};this.resumeAll=function(){for(var c=b.soundIDs.length;c--;)b.sounds[b.soundIDs[c]].resume()};this.togglePause=function(c){if(!m(c))return false;b.sounds[c].togglePause()};this.setPan=function(c,a){if(!m(c))return false;b.sounds[c].setPan(a)};this.setVolume=function(c,a){if(!m(c))return false;b.sounds[c].setVolume(a)};this.mute=
function(c){var a=0;if(typeof c!=="string")c=null;if(c){if(!m(c))return false;b.sounds[c].mute()}else{for(a=b.soundIDs.length;a--;)b.sounds[b.soundIDs[a]].mute();b.muted=true}};this.muteAll=function(){b.mute()};this.unmute=function(c){if(typeof c!=="string")c=null;if(c){if(!m(c))return false;b.sounds[c].unmute()}else{for(c=b.soundIDs.length;c--;)b.sounds[b.soundIDs[c]].unmute();b.muted=false}};this.unmuteAll=function(){b.unmute()};this.toggleMute=function(c){if(!m(c))return false;b.sounds[c].toggleMute()};
this.getMemoryUse=function(){if(b.flashVersion===8)return 0;if(b.o)return parseInt(b.o._getMemoryUse(),10)};this.disable=function(c){if(typeof c==="undefined")c=false;if(s)return false;s=true;for(var a=b.soundIDs.length;a--;)pa(b.sounds[b.soundIDs[a]]);D(c);g.removeEventListener&&g.removeEventListener("load",x,false)};this.canPlayMIME=function(c){var a;if(b.hasHTML5)a=A({type:c});return!H||a?a:c?c.match(b.mimePattern)?true:false:null};this.canPlayURL=function(c){var a;if(b.hasHTML5)a=A(c);return!H||
a?a:c?c.match(b.filePattern)?true:false:null};this.canPlayLink=function(c){if(typeof c.type!=="undefined"&&c.type)if(b.canPlayMIME(c.type))return true;return b.canPlayURL(c.href)};this.getSoundById=function(c){if(!c)throw new Error("SoundManager.getSoundById(): sID is null/undefined");return b.sounds[c]};this.onready=function(c,a){if(c&&c instanceof Function){a||(a=g);ka(c,a);w();return true}else throw y("needFunction");};this.oninitmovie=function(){};this.onload=function(){};this.onerror=function(){};
this.getMoviePercent=function(){return b.o&&typeof b.o.PercentLoaded!=="undefined"?b.o.PercentLoaded():null};this._wD=this._writeDebug=function(){};this._debug=function(){};this.reboot=function(){for(var c=b.soundIDs.length;c--;)b.sounds[b.soundIDs[c]].destruct();try{if(b.isIE)Z=b.o.innerHTML;F=b.o.parentNode.removeChild(b.o)}catch(a){}F=Z=null;s=L=K=ba=S=n=b.enabled=false;b.swfLoaded=false;b.soundIDs={};b.sounds=[];b.o=null;for(c=v.length;c--;)v[c].fired=false;g.setTimeout(function(){b.beginDelayedInit()},
20)};this.destruct=function(){b.disable(true)};this.beginDelayedInit=function(){ja=true;setTimeout(X,500);setTimeout(la,20)};N={};u=function(c){return document.getElementById(c)};y=function(){var c=Array.prototype.slice.call(arguments),a=c.shift();a=N&&N[a]?N[a]:"";var f,i;if(a&&c&&c.length){f=0;for(i=c.length;f<i;f++)a=a.replace("%s",c[f])}return a};R=function(c){if(b.flashVersion===8&&c.loops>1&&c.stream)c.stream=false;return c};aa=function(c,a){if(!a)return new Error("Error: "+c);typeof console!==
"undefined"&&typeof console.trace!=="undefined"&&console.trace();c="Error: "+c+". \nCaller: "+a.toString();return new Error(c)};ia=function(){return false};pa=function(c){for(var a in c)if(c.hasOwnProperty(a)&&typeof c[a]==="function")c[a]=ia};E=function(c){if(typeof c==="undefined")c=false;if(s||c)b.disable(c)};qa=function(c){var a=null;if(c)if(c.match(/\.swf(\?\.*)?$/i)){if(a=c.substr(c.toLowerCase().lastIndexOf(".swf?")+4))return c}else if(c.lastIndexOf("/")!==c.length-1)c+="/";return(c&&c.lastIndexOf("/")!==
-1?c.substr(0,c.lastIndexOf("/")+1):"./")+b.movieURL};Y=function(){if(b.flashVersion!==8&&b.flashVersion!==9){alert(y("badFV",b.flashVersion,8));b.flashVersion=8}var c=b.debugMode||b.debugFlash?"_debug.swf":".swf";b.version=b.versionNumber+(z?" (HTML5-only mode)":b.flashVersion===9?" (AS3/Flash 9)":" (AS2/Flash 8)");if(b.flashVersion>8){b.defaultOptions=q(b.defaultOptions,b.flash9Options);b.features.buffering=true}if(b.flashVersion>8&&b.useMovieStar){b.defaultOptions=q(b.defaultOptions,b.movieStarOptions);
b.filePatterns.flash9=new RegExp("\\.(mp3|"+b.netStreamTypes.join("|")+")(\\?.*)?$","i");b.mimePattern=b.netStreamMimeTypes;b.features.movieStar=true}else{b.useMovieStar=false;b.features.movieStar=false}b.filePattern=b.filePatterns[b.flashVersion!==8?"flash9":"flash8"];b.movieURL=(b.flashVersion===8?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",c);b.features.peakData=b.features.waveformData=b.features.eqData=b.flashVersion>8};na=function(){return document.body?document.body:document.documentElement?
document.documentElement:document.getElementsByTagName("div")[0]};oa=function(c,a){if(!b.o||!b.allowPolling)return false;b.o._setPolling(c,a)};Q=function(c,a){function f(){}var i=null;i=a?a:b.url;a=b.altURL?b.altURL:i;var e,k,p;c=typeof c==="undefined"?b.id:c;if(z){Y();f();b.oMC=u(b.movieID);J();return false}if(K&&L)return false;K=true;Y();b.url=qa(va?i:a);a=b.url;if(b.useHighPerformance&&b.useMovieStar&&b.defaultOptions.useVideo===true){i="soundManager note: disabling highPerformance, not applicable with movieStar mode+useVideo";
b.useHighPerformance=false}b.wmode=!b.wmode&&b.useHighPerformance&&!b.useMovieStar?"transparent":b.wmode;if(b.wmode!==null&&!b.isIE&&!b.useHighPerformance&&navigator.platform.match(/win32/i)){b.specialWmodeCase=true;b.wmode=null}if(b.flashVersion===8)b.allowFullScreen=false;e={name:c,id:c,src:a,width:"100%",height:"100%",quality:"high",allowScriptAccess:b.allowScriptAccess,bgcolor:b.bgColor,pluginspage:"http://www.macromedia.com/go/getflashplayer",type:"application/x-shockwave-flash",wmode:b.wmode,
allowfullscreen:b.allowFullScreen?"true":"false"};if(b.debugFlash)e.FlashVars="debug=1";b.wmode||delete e.wmode;if(b.isIE){i=document.createElement("div");p='<object id="'+c+'" data="'+a+'" type="'+e.type+'" width="'+e.width+'" height="'+e.height+'"><param name="movie" value="'+a+'" /><param name="AllowScriptAccess" value="'+b.allowScriptAccess+'" /><param name="quality" value="'+e.quality+'" />'+(b.wmode?'<param name="wmode" value="'+b.wmode+'" /> ':"")+'<param name="bgcolor" value="'+b.bgColor+
'" /><param name="allowFullScreen" value="'+e.allowFullScreen+'" />'+(b.debugFlash?'<param name="FlashVars" value="'+e.FlashVars+'" />':"")+"<!-- --\></object>"}else{i=document.createElement("embed");for(k in e)e.hasOwnProperty(k)&&i.setAttribute(k,e[k])}ha();k=G();if(c=na()){b.oMC=u(b.movieID)?u(b.movieID):document.createElement("div");if(b.oMC.id){c=b.oMC.className;b.oMC.className=(c?c+" ":b.swfCSS.swfDefault)+(k?" "+k:"");b.oMC.appendChild(i);if(b.isIE){k=b.oMC.appendChild(document.createElement("div"));
k.className="sm2-object-box";k.innerHTML=p}L=true}else{b.oMC.id=b.movieID;b.oMC.className=b.swfCSS.swfDefault+" "+k;k=a=null;b.useFlashBlock||(a=b.useHighPerformance?{position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"}:{position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"});e=null;if(!b.debugFlash)for(e in a)if(a.hasOwnProperty(e))b.oMC.style[e]=a[e];try{b.isIE||b.oMC.appendChild(i);c.appendChild(b.oMC);if(b.isIE){k=b.oMC.appendChild(document.createElement("div"));
k.className="sm2-object-box";k.innerHTML=p}L=true}catch(d){throw new Error(y("appXHTML"));}}}f()};m=this.getSoundById;q=function(c,a){var f={},i,e;for(i in c)if(c.hasOwnProperty(i))f[i]=c[i];c=typeof a==="undefined"?b.defaultOptions:a;for(e in c)if(c.hasOwnProperty(e)&&typeof f[e]==="undefined")f[e]=c[e];return f};O=function(){if(b.debugURLParam.test(g.location.href.toString()))b.debugMode=true;if(z){ha();Q();return false}if(b.o)return false;b.o=b.getMovie(b.id);if(!b.o){if(F){if(b.isIE)b.oMC.innerHTML=
Z;else b.oMC.appendChild(F);F=null;K=true}else Q(b.id,b.url);b.o=b.getMovie(b.id)}typeof b.oninitmovie==="function"&&setTimeout(b.oninitmovie,1)};M=function(c){if(c)b.url=c;O()};X=function(){if(S)return false;S=true;if(B&&!ea)return false;var c;n||(c=b.getMoviePercent());setTimeout(function(){c=b.getMoviePercent();if(!n&&wa)if(c===null)if(b.useFlashBlock||b.flashLoadTimeout===0)b.useFlashBlock&&$();else E(true);else b.flashLoadTimeout!==0&&E(true)},b.flashLoadTimeout)};G=function(){var c=[];b.debugMode&&
c.push(b.swfCSS.sm2Debug);b.debugFlash&&c.push(b.swfCSS.flashDebug);b.useHighPerformance&&c.push(b.swfCSS.highPerf);return c.join(" ")};$=function(){var c=b.getMoviePercent();if(b.supported()){if(b.oMC)b.oMC.className=G()+" "+b.swfCSS.swfDefault+(" "+b.swfCSS.swfUnblocked)}else{b.oMC.className=G()+" "+b.swfCSS.swfDefault+" "+(c===null?b.swfCSS.swfTimedout:b.swfCSS.swfError);w(true);b.onerror instanceof Function&&b.onerror.apply(g);b.didFlashBlock=true}};t=function(){if(ea||!B)return true;ea=wa=true;
B&&g.removeEventListener("mousemove",t,false);S=false;setTimeout(X,500);if(g.removeEventListener)g.removeEventListener("focus",t,false);else g.detachEvent&&g.detachEvent("onfocus",t)};D=function(c){if(n)return false;if(z){n=true;w();x();return true}b.useFlashBlock&&b.flashLoadTimeout&&!b.getMoviePercent()||(n=true);if(s||c){if(b.useFlashBlock)b.oMC.className=G()+" "+(b.getMoviePercent()===null?b.swfCSS.swfTimedout:b.swfCSS.swfError);w();b.onerror instanceof Function&&b.onerror.apply(g);return false}if(b.waitForWindowLoad&&
!ja){if(g.addEventListener)g.addEventListener("load",x,false);else g.attachEvent&&g.attachEvent("onload",x);return false}else x()};ka=function(c,a){v.push({method:c,scope:a||null,fired:false})};w=function(c){if(!n&&!c)return false;c={success:c?b.supported():!s};var a=[],f,i,e=!b.useFlashBlock||b.useFlashBlock&&!b.supported();f=0;for(i=v.length;f<i;f++)v[f].fired!==true&&a.push(v[f]);if(a.length){f=0;for(i=a.length;f<i;f++){a[f].scope?a[f].method.apply(a[f].scope,[c]):a[f].method(c);if(!e)a[f].fired=
true}}};x=function(){g.setTimeout(function(){b.useFlashBlock&&$();w();b.onload.apply(g)},1)};J=function(){function c(){if(g.removeEventListener)g.removeEventListener("load",b.beginDelayedInit,false);else g.detachEvent&&g.detachEvent("onload",b.beginDelayedInit)}if(n){typeof g.console!=="undefined"&&console.log&&console.log("::init(): Warning: Ignoring double-init case");return false}if(z){if(!n){c();b.enabled=true;D()}return true}O();if(n)return false;try{b.o._externalInterfaceTest(false);if(b.allowPolling)oa(true,
b.useFastPolling?true:false);b.debugMode||b.o._disableDebug();b.enabled=true}catch(a){E(true);D();return false}D();c()};la=function(){if(ba)return false;Q();O();return ba=true};P=function(){ma=true;if(b.useHTML5Audio&&b.hasHTML5)ca&&M();else M()};U=function(){var c,a=0,f=null;for(c=b.soundIDs.length;c--;){f=b.sounds[b.soundIDs[c]];a+=f._onTimer()===true?1:0}if(!a){g.clearInterval(T);T=null}};ra=function(c){if(!c._hasTimer)c._hasTimer=true;T||(T=g.setInterval(U,ta&&!ua?500:b.useFastPolling?ua?100:
33:100))};sa=function(c){if(c._hasTimer)c._hasTimer=false};this._setSandboxType=function(c){var a=b.sandbox;a.type=c;a.description=a.types[typeof a.types[c]!=="undefined"?c:"unknown"];if(a.type==="localWithFile"){a.noRemote=true;a.noLocal=false}else if(a.type==="localWithNetwork"){a.noRemote=false;a.noLocal=true}else if(a.type==="localTrusted"){a.noRemote=false;a.noLocal=false}};this._externalInterfaceOK=function(){if(b.swfLoaded)return false;(new Date).getTime();b.swfLoaded=true;B=false;b.isIE?setTimeout(J,
100):J()};this._onfullscreenchange=function(c){b.isFullScreen=c===1?true:false;if(!b.isFullScreen)try{g.focus()}catch(a){}};W=function(c){var a=this,f,i,e,k,p;this.sID=c.id;this.url=c.url;this._iO=this.instanceOptions=this.options=q(c);this.pan=this.options.pan;this.volume=this.options.volume;this._lastURL=null;this.useHTML5=false;this.id3={};this._debug=function(){};this._debug();this.load=function(d){if(typeof d!=="undefined"){a._iO=q(d);a.instanceOptions=a._iO}else{d=a.options;a._iO=d;a.instanceOptions=
a._iO;if(a._lastURL&&a._lastURL!==a.url){a._iO.url=a.url;a.url=null}}if(typeof a._iO.url==="undefined")a._iO.url=a.url;if(a._iO.url===a.url&&a.readyState!==0&&a.readyState!==2)return false;a.url=a._iO.url;a._lastURL=a._iO.url;a.loaded=false;a.readyState=1;a.playState=0;a._iO=R(a._iO);try{if(A(a._iO.url)){a._setup_html5({url:a._iO.url});a._iO.autoPlay&&a.play()}else{a.useHTML5=false;if(b.flashVersion===8)b.o._load(a.sID,a._iO.url,a._iO.stream,a._iO.autoPlay,a._iO.whileloading?1:0,a._iO.loops||1);else{b.o._load(a.sID,
a._iO.url,a._iO.stream?true:false,a._iO.autoPlay?true:false,a._iO.loops||1);a._iO.isMovieStar&&a._iO.autoLoad&&!a._iO.autoPlay&&a.pause()}}}catch(h){b.onerror();b.disable()}};this.unload=function(){if(a.readyState!==0){a.readyState!==2&&a.setPosition(0,true);if(a.useHTML5){e();if(a.__element){a.__element.pause();a.__element.src="about:blank";a.__element.load();a.__element=null}}else b.o._unload(a.sID,b.nullURL);f()}};this.destruct=function(){if(a.useHTML5){e();if(a.__element){a.__element.pause();
a.__element.src="about:blank";a.__element.load();a.__element=null}}else b.o._destroySound(a.sID);b.destroySound(a.sID,true)};this.start=this.play=function(d){d||(d={});a._iO=q(d,a._iO);a._iO=q(a._iO,a.options);a.instanceOptions=a._iO;if(A(a._iO.url)){a._setup_html5({url:a._iO.url});k()}if(a.playState===1)if(d=a._iO.multiShot)a.useHTML5&&a.setPosition(a._iO.position);else return false;if(!a.loaded)if(a.readyState===0){if(!a.useHTML5)a._iO.autoPlay=true;a.load(a._iO)}else if(a.readyState===2)return false;
if(a.paused)a.resume();else{a.playState=1;if(!a.instanceCount||b.flashVersion>8&&!a.useHTML5)a.instanceCount++;a.position=typeof a._iO.position!=="undefined"&&!isNaN(a._iO.position)?a._iO.position:0;a._iO=R(a._iO);a._iO.onplay&&a._iO.onplay.apply(a);a.setVolume(a._iO.volume,true);a.setPan(a._iO.pan,true);if(a.useHTML5){k();a._setup_html5().play()}else b.o._start(a.sID,a._iO.loop||1,b.flashVersion===9?a.position:a.position/1E3)}};this.stop=function(d){if(a.playState===1){a._onbufferchange(0);a.playState=
0;a.paused=false;a._iO.onstop&&a._iO.onstop.apply(a);if(a.useHTML5){if(a.__element){a.__element.pause();a.setPosition(0);U();e()}}else b.o._stop(a.sID,d);a.instanceCount=0;a._iO={}}};this.setPosition=function(d){if(typeof d==="undefined")d=0;d=Math.min(a.duration,Math.max(d,0));a._iO.position=d;if(a.useHTML5){if(a.__element){if(a.playState)a.__element.currentTime=a._iO.position/1E3;a.paused&&U(true)}}else b.o._setPosition(a.sID,b.flashVersion===9?a._iO.position:a._iO.position/1E3,a.paused||!a.playState)};
this.pause=function(){if(a.paused||a.playState===0)return false;a.paused=true;if(a.useHTML5){a._setup_html5().pause();e()}else b.o._pause(a.sID);a._iO.onpause&&a._iO.onpause.apply(a)};this.resume=function(){if(!a.paused||a.playState===0)return false;a.paused=false;if(a.useHTML5){a._setup_html5().play();k()}else b.o._pause(a.sID);a._iO.onresume&&a._iO.onresume.apply(a)};this.togglePause=function(){if(a.playState===0){a.play({position:b.flashVersion===9&&!a.useHTML5?a.position:a.position/1E3});return false}a.paused?
a.resume():a.pause()};this.setPan=function(d,h){if(typeof d==="undefined")d=0;if(typeof h==="undefined")h=false;a.useHTML5||b.o._setPan(a.sID,d);a._iO.pan=d;if(!h)a.pan=d};this.setVolume=function(d,h){if(typeof d==="undefined")d=100;if(typeof h==="undefined")h=false;if(a.useHTML5){if(a.__element)a.__element.volume=d/100}else b.o._setVolume(a.sID,b.muted&&!a.muted||a.muted?0:d);a._iO.volume=d;if(!h)a.volume=d};this.mute=function(){a.muted=true;if(a.useHTML5){if(a.__element)a.__element.muted=true}else b.o._setVolume(a.sID,
0)};this.unmute=function(){a.muted=false;var d=typeof a._iO.volume!=="undefined";if(a.useHTML5){if(a.__element)a.__element.muted=false}else b.o._setVolume(a.sID,d?a._iO.volume:a.options.volume)};this.toggleMute=function(){a.muted?a.unmute():a.mute()};this._onTimer=function(d){if(a._hasTimer||d)if(a.__element&&(d||(a.playState>0||a.readyState===1)&&!a.paused)){d=a.__element;a.duration=p();a.durationEstimate=a.duration;d=d.currentTime?d.currentTime*1E3:0;a._whileplaying(d,{},{},{},{});return true}else return false};
p=function(){var d=a.__element?a.__element.duration*1E3:undefined;if(d)return!isNaN(d)?d:null};k=function(){a.useHTML5&&ra(a)};e=function(){a.useHTML5&&sa(a)};f=function(){a._hasTimer=null;a._added_events=null;a.__element=null;a.bytesLoaded=null;a.bytesTotal=null;a.position=null;a.duration=null;a.durationEstimate=null;a.loaded=false;a.playState=0;a.paused=false;a.readyState=0;a.muted=false;a.didBeforeFinish=false;a.didJustBeforeFinish=false;a.isBuffering=false;a.instanceOptions={};a.instanceCount=
0;a.peakData={left:0,right:0};a.waveformData={left:[],right:[]};a.eqData=[];a.eqData.left=[];a.eqData.right=[]};f();this._setup_html5=function(d){d=q(a._iO,d);if(a.__element){if(decodeURI(a.__element.src)!==decodeURI(d.url))a.__element.src=d.url}else{a.__element=new Audio(d.url);a.useHTML5=true;i()}return a.__element};i=function(){if(a._added_events)return false;a._added_events=true;a.__element.addEventListener("load",function(){if(a.__element){a._onbufferchange(0);a._whileloading(a.bytesTotal,a.bytesTotal,
p());a._onload(1)}},false);a.__element.addEventListener("canplay",function(){a._onbufferchange(0)},false);a.__element.addEventListener("waiting",function(){a._onbufferchange(1)},false);a.__element.addEventListener("progress",function(d){var h=a.__element;if(!a.loaded&&h){a._onbufferchange(0);a._whileloading(d.loaded||0,d.total||1,p())}},false);a.__element.addEventListener("end",function(){a._onfinish()},false);a.__element.addEventListener("error",function(){a.__element&&a._onload(0)},false);a.__element.addEventListener("empty",
function(){},false);a.__element.addEventListener("loadstart",function(){a._onbufferchange(1)},false);a.__element.addEventListener("play",function(){a._onbufferchange(0)},false);a.__element.addEventListener("playing",function(){a._onbufferchange(0)},false);setTimeout(function(){a&&a.__element&&a.__element.addEventListener("ended",function(){a._onfinish()},false)},250)};this._whileloading=function(d,h,j){if(a._iO.isMovieStar){a.bytesLoaded=d;a.bytesTotal=h;a.duration=Math.floor(j);a.durationEstimate=
a.duration}else{a.bytesLoaded=d;a.bytesTotal=h;a.duration=Math.floor(j);a.durationEstimate=parseInt(a.bytesTotal/a.bytesLoaded*a.duration,10);if(a.durationEstimate===undefined)a.durationEstimate=a.duration}a.readyState!==3&&a._iO.whileloading&&a._iO.whileloading.apply(a)};this._onid3=function(d,h){var j=[],o,l;o=0;for(l=d.length;o<l;o++)j[d[o]]=h[o];a.id3=q(a.id3,j);a._iO.onid3&&a._iO.onid3.apply(a)};this._whileplaying=function(d,h,j,o,l){if(isNaN(d)||d===null)return false;if(a.playState===0&&d>0)d=
0;a.position=d;if(b.flashVersion>8&&!a.useHTML5){if(a._iO.usePeakData&&typeof h!=="undefined"&&h)a.peakData={left:h.leftPeak,right:h.rightPeak};if(a._iO.useWaveformData&&typeof j!=="undefined"&&j)a.waveformData={left:j.split(","),right:o.split(",")};if(a._iO.useEQData)if(typeof l!=="undefined"&&l&&l.leftEQ){d=l.leftEQ.split(",");a.eqData=d;a.eqData.left=d;if(typeof l.rightEQ!=="undefined"&&l.rightEQ)a.eqData.right=l.rightEQ.split(",")}}if(a.playState===1){!a.useHTML5&&a.isBuffering&&a._onbufferchange(0);
a._iO.whileplaying&&a._iO.whileplaying.apply(a);a.loaded&&a._iO.onbeforefinish&&a._iO.onbeforefinishtime&&!a.didBeforeFinish&&a.duration-a.position<=a._iO.onbeforefinishtime&&a._onbeforefinish()}};this._onload=function(d){d=d===1?true:false;a.loaded=d;a.readyState=d?3:2;a._iO.onload&&a._iO.onload.apply(a)};this._onbeforefinish=function(){if(!a.didBeforeFinish){a.didBeforeFinish=true;a._iO.onbeforefinish&&a._iO.onbeforefinish.apply(a)}};this._onjustbeforefinish=function(){if(!a.didJustBeforeFinish){a.didJustBeforeFinish=
true;a._iO.onjustbeforefinish&&a._iO.onjustbeforefinish.apply(a)}};this._onfinish=function(){a._onbufferchange(0);a._iO.onbeforefinishcomplete&&a._iO.onbeforefinishcomplete.apply(a);a.didBeforeFinish=false;a.didJustBeforeFinish=false;if(a.instanceCount){a.instanceCount--;if(!a.instanceCount){a.playState=0;a.paused=false;a.instanceCount=0;a.instanceOptions={};e()}if(!a.instanceCount||a._iO.multiShotEvents)a._iO.onfinish&&a._iO.onfinish.apply(a)}};this._onmetadata=function(d){if(!d.width&&!d.height){d.width=
320;d.height=240}a.metadata=d;a.width=d.width;a.height=d.height;a._iO.onmetadata&&a._iO.onmetadata.apply(a)};this._onbufferchange=function(d){if(a.playState===0)return false;if(d&&a.isBuffering||!d&&!a.isBuffering)return false;a.isBuffering=d===1?true:false;a._iO.onbufferchange&&a._iO.onbufferchange.apply(a)};this._ondataerror=function(){a.playState>0&&a._iO.ondataerror&&a._iO.ondataerror.apply(a)}};b.useHTML5Audio&&typeof Audio!=="undefined"&&function(){function c(h){var j,o,l=false;if(!f||typeof f.canPlayType!==
"function")return false;if(h instanceof Array){j=0;for(o=h.length;j<o&&!l;j++)if(b.html5[h[j]]||f.canPlayType(h[j]).match(b.html5Test)){typeof g.console!=="undefined"&&console.log&&console.log("canPlay test: "+h[j]+" (OK)");l=true;b.html5[h[j]]=true}else typeof g.console!=="undefined"&&console.log&&console.log("canPlay test: Ignoring false-y response for "+h[j]+" = '"+f.canPlayType(h[j])+"'");return l}else{typeof g.console!=="undefined"&&console.log&&console.log("canPlay test: checking single mime: "+
h);return(h=f&&typeof f.canPlayType==="function"?f.canPlayType(h):false)&&(h.match(b.html5Test)?true:false)}}function a(h,j){function o(){if(p>=k&&!ca){ca=true;ma&&M()}}function l(C){if(!fa){fa=true;p++;d[h]=C;j(C);o()}}var r,fa=false;k++;if(ta){p++;j();o();return false}if(typeof d[h]!=="undefined"){fa=true;j(d[h])}else{r=new Audio;r.addEventListener("canplaythrough",function(C){typeof g.console!=="undefined"&&console.log&&console.log("data/base64: Audio()::canplaythrough(), type: "+h);l(true,C);
r=null},false);r.addEventListener("error",function(C){typeof g.console!=="undefined"&&console.log&&console.log("data/base64: Audio()::error(), code: "+this.error.code+", type: "+h+" (may be false positive, ignoring)");l(false,this.error?this.error:C);r=null},false);setTimeout(function(){if(r){r.src=e[h];r.load()}},b.isSafari?500:1)}}var f=typeof Audio!=="undefined"?new Audio:null,i={mp3:"data:audio/mpeg;base64,/+MYxAALOAHgCAAAAD////////////v6OGAfB8HwfAgIAgCAYB8HwfB8CAgCAIAgD4Pg+D4OAgCAIP9Xt6vb1CV0qLA0DQND/+MYxA4FcAHcAAAAAISgqCtvV7eqTEFNRTMuOTguNKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq/+MYxDMAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
wav:"data:audio/wave;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQIAAAD//w=="},e={mp3:i.mp3,wav:i.wav},k=0,p=0,d={};b.html5=q(b.html5,{canPlayType:f?c:null,mp3:c(b.requiredFormats.mp3.type),aac:c(b.requiredFormats.aac.type),ogg:c('audio/ogg; codecs="vorbis"')});typeof g.console!=="undefined"&&console.log&&console.log("Initial HTML5 canPlayType() tests: MP3: "+b.html5.mp3+" AAC: "+b.html5.aac+", OGG: "+b.html5.ogg);a("mp3",function(h){if(h)b.html5.mp3=h;else a("mpeg",function(j){if(j)b.html5.mp3=
j})});a("wav",function(h){b.html5.wav=h})}();H=function(){var c,a;if(navigator.userAgent.match(/iphone os 3_0/i)){b.hasHTML5=true;if(b.oMC)b.oMC.style.display="none";return false}if(b.useHTML5Audio)if(!b.html5||!b.html5.canPlayType){b.hasHTML5=false;return true}else b.hasHTML5=true;else return true;for(a in b.requiredFormats)if(b.requiredFormats.hasOwnProperty(a))if(b.requiredFormats[a].required&&!b.html5.canPlayType(b.requiredFormats[a].type)){c=true;typeof g.console!=="undefined"&&console.log&&
console.log("_featureCheck: Flash may be needed for "+a)}z=b.useHTML5Audio&&b.hasHTML5&&!c;return c}();if(!b.hasHTML5||H)if(g.addEventListener){g.addEventListener("focus",t,false);g.addEventListener("load",b.beginDelayedInit,false);g.addEventListener("unload",b.destruct,false);B&&g.addEventListener("mousemove",t,false)}else if(g.attachEvent){g.attachEvent("onfocus",t);g.attachEvent("onload",b.beginDelayedInit);g.attachEvent("unload",b.destruct)}else{V.onerror();V.disable()}da=function(){if(document.readyState===
"complete"){P();document.detachEvent("onreadystatechange",da)}};if(document.addEventListener)document.addEventListener("DOMContentLoaded",P,false);else document.attachEvent&&document.attachEvent("onreadystatechange",da);document.readyState==="complete"&&setTimeout(P,100)}var V=null;if(typeof SM2_DEFER==="undefined"||!SM2_DEFER)V=new ga;g.SoundManager=ga;g.soundManager=V})(window);
