!function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);for(h&&h(e);p.length;)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={0:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var h=l;r.push([3,1]),n()}([,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);n(1),n(2);var a=n(0),i=n.n(a),r=i.a.map("mapid");r.setView([12.9716,77.5946],13),i.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://openstreetmap.org/copyright">OpenStreepMap Contributors</a>'}).addTo(r);var o=r;function s(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,a;return e=t,(n=[{key:"distanceCalculator",value:function(t,e){var n,a=0,i=0,r=[],o=[],s=[];for(n=0;n<t.length-1;n++){var l=12742*Math.asin(Math.sqrt(Math.pow(Math.sin((.0174533*t[n+1][0]-.0174533*t[n][0])/2),2)+Math.cos(.0174533*t[n][0])*Math.cos(.0174533*t[n+1][0])*Math.pow(Math.sin((.0174533*t[n+1][1]-.0174533*t[n][1])/2),2)));a+=l,o.push(a);var c=(e[n+1]-e[n])/1e3,h=void 0,u=void 0;c>0?(h=Math.atan(Math.abs(c)/l),u=l/Math.cos(h)):c<0?(h=Math.atan(l/Math.abs(c)),u=l/Math.sin(h)):(h=0,u=l),r.push(h),i+=u,s.push(i)}return[i,a,o,s]}}])&&s(e.prototype,n),a&&s(e,a),t}();function c(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var h=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,a;return e=t,(n=[{key:"randomColorGenerator",value:function(){var t=Math.floor(360*Math.random());return"hsl(".concat(t,", 100%, 35%)")}}])&&c(e.prototype,n),a&&c(e,a),t}();function u(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var p=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,a;return e=t,(n=[{key:"speedCalculator",value:function(t,e,n){var a,i=[],r=[];for(a=0;a<e.length-1;a++){var o=e[a].textContent;i.push(new Date(o))}for(a=0;a<t.length-1;a+=5)if(i[a+6]-i[a+1]>0){var s=(t[a+5]-t[a])/((i[a+6]-i[a+1])/36e5);r.push(s)}var l=(i[i.length-1]-i[1])/36e5;return{timeArray:i,speedArray:r,duration:l,minSpeed:Math.min.apply(null,r),maxSpeed:Math.max.apply(null,r),avgSpeed:n/l}}}])&&u(e.prototype,n),a&&u(e,a),t}();function v(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var d=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,a;return e=t,(n=[{key:"hrCalculations",value:function(t){var e,n=[],a=0;for(e=0;e<t.length-1;e++){var i=parseInt(t[e].textContent);n.push(i),a+=i}return{hrDataArray:n,minHr:Math.min.apply(null,n),avgHr:parseInt(a/n.length),maxHr:Math.max.apply(null,n)}}}])&&v(e.prototype,n),a&&v(e,a),t}();var f=function t(e,n,a,i,r,o,s,l,c,h,u,p,v,d){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.title=e,this.date=n,this.distance=a,this.duration=i,this.avgSpeed=r,this.maxSpeed=o,this.elevationStart=s,this.elevationMax=l,this.avgHr=c,this.maxHr=h,this.color=u,this.speedArray=p,this.hrDataArray=v,this.elevationArray=d};function g(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var y=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.hrGraph=document.getElementById("hrGraph"),this.hrGraphCtx=this.hrGraph.getContext("2d"),this.elevationGraph=document.getElementById("elevationGraph"),this.elevationGraphCtx=this.elevationGraph.getContext("2d"),this.speedGraph=document.getElementById("speedGraph"),this.speedGraphCtx=this.speedGraph.getContext("2d"),this.width=this.hrGraph.width,this.height=this.hrGraph.height}var e,n,a;return e=t,(n=[{key:"clearCanvas",value:function(){this.speedGraphCtx.clearRect(0,0,this.width,this.height),this.elevationGraphCtx.clearRect(0,0,this.width,this.height),this.hrGraphCtx.clearRect(0,0,this.width,this.height)}},{key:"plotSpeedGraph",value:function(t,e,n){var a,i=t.length,r=this.width/i,o=this.height/e;for(this.speedGraphCtx.fillStyle=n,this.speedGraphCtx.beginPath(),this.speedGraphCtx.moveTo(0,this.height),a=0;a<t.length;a++)this.speedGraphCtx.lineTo(a*r,this.height-t[a]*o);this.speedGraphCtx.lineTo(this.width,this.height),this.speedGraphCtx.fill()}},{key:"plotelevationGraph",value:function(t,e,n){var a,i=t.length,r=this.width/i,o=this.height/e;for(this.elevationGraphCtx.fillStyle=n,this.elevationGraphCtx.beginPath(),this.elevationGraphCtx.moveTo(0,this.height),a=0;a<t.length;a++)this.elevationGraphCtx.lineTo(a*r,this.height-t[a]*o);this.elevationGraphCtx.lineTo(this.width,this.height),this.elevationGraphCtx.fill()}},{key:"plotHrGraph",value:function(t,e,n){var a,i=t.length,r=this.width/i,o=this.height/e;for(this.hrGraphCtx.fillStyle=n,this.hrGraphCtx.beginPath(),this.hrGraphCtx.moveTo(0,this.height),a=0;a<t.length;a++)this.hrGraphCtx.lineTo(a*r,this.height-t[a]*o);this.hrGraphCtx.lineTo(this.width,this.height),this.hrGraphCtx.fill()}}])&&g(e.prototype,n),a&&g(e,a),t}();function m(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var b=new y,x=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.activities=document.getElementById("activities"),this.statsContainer=document.querySelectorAll(".stats-container")[0]}var e,n,a;return e=t,(n=[{key:"renderUi",value:function(t){var e=this.getDate(t.date),n=this.sanitizeSpeed(t),a=this.sanitizeElevation(t),i=this.sanitizeHeartRate(t),r='\n            <div class="activity '.concat(t.date,'" style="background: linear-gradient(45deg, rgba(0, 0, 0, 0.5), ').concat(t.color,');">\n                <div class="activity__head">\n                    <p class="activity__head__stat title">').concat(t.title,'</p>\n                    <p class="activity__head__stat date">').concat(e,'</p>\n                </div>\n                <div class="activity__row">\n                    <p class="activity__stat distance">Distance: ').concat(t.distance.toFixed(2)," km</p>\n                </div>\n                ").concat(a,"\n                ").concat(n,"\n\n                ").concat(i,"\n            </div>\n        ");this.activities.insertAdjacentHTML("beforeend",r),this.statsContainer.classList.add("stats-container--is-visible"),b.clearCanvas(),"NA"!=t.avgHr&&"NA"!=t.maxHr&&b.plotHrGraph(t.hrDataArray,t.maxHr,"rgba(255, 0, 64, 1)"),"NA"!=t.elevationStart&&"NA"!=t.elevationMax&&b.plotelevationGraph(t.elevationArray,t.elevationMax,"rgba(0, 230, 187, 1)",2),"NA"!=t.avgSpeed&&"NA"!=t.maxSpeed&&b.plotSpeedGraph(t.speedArray,t.maxSpeed,"rgba(0, 153, 255, 1)")}},{key:"getDate",value:function(t){var e=new Date(t);return"NA"!=t?"".concat(e.getDate()," ").concat({0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"June",6:"July",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec"}[e.getMonth()]," ").concat(e.getFullYear()," ").concat(e.getHours(),":").concat(e.getMinutes()):"Time not available"}},{key:"sanitizeSpeed",value:function(t){return"NA"!=t.avgSpeed&&"NA"!=t.maxSpeed?'\n            <div class="activity__row">\n                <p class="activity__stat avgspeed">Avg Speed: '.concat(t.avgSpeed.toFixed(2),' km/h</p>\n                <p class="activity__stat maxspeed">Max Speed: ').concat(t.maxSpeed.toFixed(2)," km/h</p>\n            </div>"):'\n            <div class="activity__row">\n                <p class="activity__stat avgspeed">Avg Speed: '.concat(t.avgSpeed,'</p>\n                <p class="activity__stat maxspeed">Max Speed: ').concat(t.maxSpeed,"</p>\n            </div>")}},{key:"sanitizeElevation",value:function(t){return"NA"!=t.elevationStart&&"NA"!=t.elevationMax?'\n            <div class="activity__row">\n                <p class="activity__stat elevationstart">Elevation Start: '.concat(t.elevationStart.toFixed(2),' m</p>\n                <p class="activity__stat elevationmax">Elevation Max: ').concat(t.elevationMax.toFixed(2)," m</p>\n            </div>\n            "):'\n            <div class="activity__row">\n                <p class="activity__stat elevationstart">Elevation Start: '.concat(t.elevationStart,'</p>\n                <p class="activity__stat elevationmax">Elevation Max: ').concat(t.elevationMax,"</p>\n            </div>            \n            ")}},{key:"sanitizeHeartRate",value:function(t){return"NA"!=t.avgHr&&"NA"!=t.maxHr?'\n                <div class="activity__row">\n                    <p class="activity__stat avghr">HR Avg: '.concat(t.avgHr.toFixed(0),' bpm</p>\n                    <p class="activity__stat maxhr">HR Max: ').concat(t.maxHr.toFixed(0)," bpm</p>\n                </div>\n            "):'\n            <div class="activity__row">\n                <p class="activity__stat avghr">HR Avg: NA</p>\n                <p class="activity__stat maxhr">HR Max: NA</p>\n            </div>\n        '}}])&&m(e.prototype,n),a&&m(e,a),t}();function w(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var _=new l,M=new h,C=new p,k=new d,E=new x,A=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.longs=[],this.zoomLevelsList=[]}var e,n,a;return e=t,(n=[{key:"renderGpx",value:function(t){var e=new DOMParser;this.gpxParsedDocument=e.parseFromString(t,"text/xml");var n,a,i,r,s,l,c=this.gpxParsedDocument.getElementsByTagName("trkpt"),h=this.gpxParsedDocument.getElementsByTagName("name")[0].textContent;try{n=this.gpxParsedDocument.getElementsByTagName("time")[1].textContent,a=this.gpxParsedDocument.getElementsByTagName("time")}catch(t){n="NA"}this.activityTypeCalc(this.gpxParsedDocument),this.gpxParsedDocument.getElementsByTagName("ele")[0]?(r=(i=this.elevationCalc())[0],s=Math.max.apply(null,i)):(r="NA",s="NA",i=[]);var u=[],p=[],v=[];for(l=0;l<c.length;l++){var d=parseFloat(c[l].attributes[0].value),g=parseFloat(c[l].attributes[1].value);p.push(d),v.push(g),this.longs.push(g),u.push([d,g])}var y,m,b,x=_.distanceCalculator(u,i);y=this.gpxParsedDocument.getElementsByTagName("time")[1]?C.speedCalculator(x[2],a,x[0]):{timeArray:"NA",speedArray:"NA",duration:"NA",minSpeed:"NA",maxSpeed:"NA",avgSpeed:"NA"},this.gpxParsedDocument.getElementsByTagName("gpxtpx:hr")[0]?(m=this.gpxParsedDocument.getElementsByTagName("gpxtpx:hr"),b=k.hrCalculations(m)):b={hrDataArray:"NA",minHr:"NA",avgHr:"NA",maxHr:"NA"},this.latMin=Math.min.apply(null,p),this.latMax=Math.max.apply(null,p),this.longMin=Math.min.apply(null,this.longs),this.longMax=Math.max.apply(null,this.longs),this.centerCoordinate=this.centerCoordinateCalc(),this.zoomLevel=this.zoomLevelCalc(),this.zoomLevelsList.push(this.zoomLevel);var w=Math.min.apply(null,this.zoomLevelsList),A=M.randomColorGenerator();o.setView(this.centerCoordinate,w),L.polyline(u,{color:A}).addTo(o);var T=new f(h,n,x[0],y.duration,y.avgSpeed,y.maxSpeed,r,s,b.avgHr,b.maxHr,A,y.speedArray,b.hrDataArray,i);E.renderUi(T)}},{key:"centerCoordinateCalc",value:function(){return[(this.latMin+this.latMax)/2,(this.longMin+this.longMax)/2]}},{key:"zoomLevelCalc",value:function(){var t=Math.abs(this.longMin-this.longMax)/360;return parseInt(Math.log2(1/t))}},{key:"activityTypeCalc",value:function(t){var e,n={1:"Cycling",9:"Running",10:"Walking",undefined:"Unknown Activity"};try{e=parseInt(t.getElementsByTagName("type")[0].textContent)}catch(t){e=void 0}return void 0===n[e]?"Activity ID detected: ".concat(e):n[e]}},{key:"elevationCalc",value:function(){var t,e=[],n=this.gpxParsedDocument.getElementsByTagName("ele");if(this.gpxParsedDocument.getElementsByTagName("ele"))for(t=0;t<n.length;t++)e.push(parseFloat(n[t].textContent));return e}}])&&w(e.prototype,n),a&&w(e,a),t}();function T(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var G=new A,S=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.addFiles=document.getElementById("add-files"),this.gpxFormInput=document.getElementById("gpx-file"),this.gpxFormSubmit=document.getElementById("submit"),this.events()}var e,n,a;return e=t,(n=[{key:"events",value:function(){var t=this;this.addFiles.addEventListener("click",(function(e){return t.addFilesMethod(e)})),this.gpxFormSubmit.addEventListener("click",(function(e){return t.gpxFunc(e)}))}},{key:"addFilesMethod",value:function(t){this.gpxFormInput.click()}},{key:"gpxFunc",value:function(t){t.preventDefault();var e=this.gpxFormInput.files;if(e.length>0){var n,a=function(){var t=URL.createObjectURL(e[n]),a=new XMLHttpRequest;a.open("GET",t),a.responseType=XMLDocument,a.onload=function(t){G.renderGpx(a.response)},a.send()};for(n=0;n<e.length;n++)a()}else console.log("No files loaded!")}}])&&T(e.prototype,n),a&&T(e,a),t}();function D(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var H=new A,N=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.injectHTML(),this.dragDropArea=document.getElementById("drag-drop"),this.paintWhiteDiv=document.getElementsByClassName("paint-white"),this.events()}var e,n,a;return e=t,(n=[{key:"events",value:function(){var t=this;this.dragDropArea.addEventListener("drop",(function(e){t.renderGpxfile(e),t.paintWhite(e)})),this.dragDropArea.addEventListener("dragover",(function(e){return t.dragHandlerFunc(e)})),window.addEventListener("drop",(function(e){t.dragHandlerFunc(e),t.paintWhite(e)})),window.addEventListener("dragover",(function(e){return t.dragHandlerFunc(e)})),window.addEventListener("dragenter",(function(e){return t.paintWhite(e)})),window.addEventListener("dragleave",(function(e){return t.paintWhite(e)}))}},{key:"renderGpxfile",value:function(t){t.preventDefault(),this.paintWhite(t);var e=t.dataTransfer.files;if(e.length>0){var n,a=function(){var t=URL.createObjectURL(e[n]),a=new XMLHttpRequest;a.open("GET",t),a.responseType=XMLDocument,a.onload=function(t){H.renderGpx(a.response)},a.send()};for(n=0;n<e.length;n++)a()}}},{key:"dragHandlerFunc",value:function(t){t.preventDefault()}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n        <div class="paint-white">\n        </div>')}},{key:"paintWhite",value:function(t){this.paintWhiteDiv[0].classList.contains("paint-white--is-visible")?this.paintWhiteDiv[0].classList.remove("paint-white--is-visible"):this.paintWhiteDiv[0].classList.add("paint-white--is-visible"),this.dragDropArea.classList.toggle("drop-area__drag-over")}}])&&D(e.prototype,n),a&&D(e,a),t}();function P(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var B=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.contactButton=document.getElementById("show-social-buttons"),this.socialButtons=document.getElementsByClassName("header__nav__social"),this.events()}var e,n,a;return e=t,(n=[{key:"events",value:function(){var t=this;this.contactButton.addEventListener("click",(function(e){return t.showSocialButtons(e)}))}},{key:"showSocialButtons",value:function(t){t.preventDefault();var e=Object.values(this.socialButtons),n=0;e.map((function(t){setTimeout((function(){t.classList.toggle("header__nav__social--is-visible")}),n),n+=300}))}}])&&P(e.prototype,n),a&&P(e,a),t}();function j(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var O=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.injectHTML(),this.modalWindow=document.getElementById("modal-window"),this.openButton=document.getElementById("about"),this.closeButton=document.getElementById("close-button"),this.events()}var e,n,a;return e=t,(n=[{key:"events",value:function(){var t=this;this.openButton.addEventListener("click",(function(e){return t.openModal(e)})),this.closeButton.addEventListener("click",(function(e){return t.closeModal(e)})),document.addEventListener("keyup",(function(e){return t.keyPressHandler(e)}))}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n            <div class="about" id="modal-window">\n            <div class="about__container">\n                <div>\n                    <img id="close-button" class="close-button-image" src="/assets/images/close_button.svg" alt="button to close the modal window">\n                </div>\n\n                <div class="about__container__content">\n                    <h1 class="text-content about__container__content__title">What is this Trip Visualizer for?</h1>\n                    <main class="about__container__content__text">\n                        <ul class="text-content about__container__content__text--item">\n                            <li>Trip Visualizer is a simple web-app to visualize your GPX files on a map.</li>\n                            <li>You can either drop your files over the <strong>Drop files here</strong> area or click on <strong>Add files</strong> to select from your file manager.</li>\n                            <li>Please note that only GPX files are supported.</li>\n                            <li>You can add select or drop multiple files at one or keep adding the files progressively.</li>\n                            <li>This app will not store any of your files.</li>\n                        </ul>\n                    </main>\n                </div>\n                \n            </div>        \n        </div>\n        ')}},{key:"openModal",value:function(t){t.preventDefault(),this.modalWindow.classList.add("about--is-visible")}},{key:"closeModal",value:function(t){this.modalWindow.classList.remove("about--is-visible")}},{key:"keyPressHandler",value:function(t){27===t.keyCode&&this.modalWindow.classList.remove("about--is-visible")}}])&&j(e.prototype,n),a&&j(e,a),t}();function F(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var I=new A,R=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.demoButton=document.getElementById("demo"),this.events()}var e,n,a;return e=t,(n=[{key:"events",value:function(){var t=this;this.demoButton.addEventListener("click",(function(e){return t.parseGpx(e)}))}},{key:"parseGpx",value:function(t){t.preventDefault();var e=new XMLHttpRequest;e.open("GET","/assets/tracks/31.51_HR.gpx"),e.responseType=XMLDocument,e.onload=function(t){I.renderGpx(e.response)},e.send()}}])&&F(e.prototype,n),a&&F(e,a),t}();new N,new S;new B,new O,new R,new y}]);