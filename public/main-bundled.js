!function(e){function t(t){for(var o,a,l=t[0],s=t[1],u=t[2],d=0,f=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(c&&c(t);f.length;)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={0:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=s;i.push([3,1]),n()}([,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);n(1),n(2);var o=n(0),r=n.n(o),i=r.a.map("mapid");i.setView([12.9716,77.5946],13),r.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://openstreetmap.org/copyright">OpenStreepMap Contributor</a>'}).addTo(i);var a=i;function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.addFiles=document.getElementById("add-files"),this.gpxFormInput=document.getElementById("gpx-file"),this.gpxFormSubmit=document.getElementById("submit"),this.events()}var t,n,o;return t=e,(n=[{key:"events",value:function(){var e=this;this.addFiles.addEventListener("click",(function(t){return e.addFilesMethod(t)})),this.gpxFormSubmit.addEventListener("click",(function(t){return e.gpxFunc(t)}))}},{key:"addFilesMethod",value:function(e){this.gpxFormInput.click()}},{key:"gpxFunc",value:function(e){e.preventDefault();var t,n=this.gpxFormInput.files;if(n.length>0)for(t=0;t<n.length;t++){var o=URL.createObjectURL(n[t]);new L.GPX(o,{async:!0}).on("loaded",(function(e){a.fitBounds(e.target.getBounds())})).addTo(a)}else console.log("No files loaded!")}}])&&l(t.prototype,n),o&&l(t,o),e}();function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.dragDropArea=document.getElementById("drag-drop"),this.events()}var t,n,o;return t=e,(n=[{key:"events",value:function(){var e=this;this.dragDropArea.addEventListener("drop",(function(t){return e.renderGpxfile(t)})),this.dragDropArea.addEventListener("dragover",(function(t){return e.dragHandlerFunc(t)}))}},{key:"renderGpxfile",value:function(e){e.preventDefault(),this.dragDropArea.classList.remove("drop-area__drag-over");var t,n=e.dataTransfer.files;for(t=0;t<n.length;t++){var o=URL.createObjectURL(n[t]);new L.GPX(o,{async:!0}).on("loaded",(function(e){a.fitBounds(e.target.getBounds())})).addTo(a)}}},{key:"dragHandlerFunc",value:function(e){e.preventDefault(),this.dragDropArea.classList.add("drop-area__drag-over")}}])&&u(t.prototype,n),o&&u(t,o),e}();function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHTML(),this.modalWindow=document.getElementById("modal-window"),this.openButton=document.getElementById("about"),this.closeButton=document.getElementById("close-button"),this.events()}var t,n,o;return t=e,(n=[{key:"events",value:function(){var e=this;this.openButton.addEventListener("click",(function(t){return e.openModal(t)})),this.closeButton.addEventListener("click",(function(t){return e.closeModal(t)})),document.addEventListener("keyup",(function(t){return e.keyPressHandler(t)}))}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n            <div class="about" id="modal-window">\n            <div class="about__container">\n                <div id="close-button">\n                    <img class="close-button-image" src="/assets/images/close_button.svg" alt="button to close the modal window">\n                </div>\n                <h1 class="text-content about__title">What is this Trip Visualizer for?</h1>\n                <main class="about__text">\n                    <ul class="text-content about__text--item">\n                        <li>Trip Visualizer is a simple web-app to visualize your GPX files on a map.</li>\n                        <li>You can either drop your files over the <strong>Drop files here</strong> area or click on <strong>Add files</strong> to select from your file manager.</li>\n                        <li>Please note that only GPX files are supported.</li>\n                        <li>You can add select or drop multiple files at one or keep adding the files progressively.</li>\n                        <li>This app will not store any of your files.</li>\n                    </ul>\n                </main>\n            </div>        \n        </div>\n        ')}},{key:"openModal",value:function(e){e.preventDefault(),this.modalWindow.classList.add("about--is-visible")}},{key:"closeModal",value:function(e){this.modalWindow.classList.remove("about--is-visible")}},{key:"keyPressHandler",value:function(e){27===e.keyCode&&this.modalWindow.classList.remove("about--is-visible")}}])&&d(t.prototype,n),o&&d(t,o),e}();new c,new s;new f}]);