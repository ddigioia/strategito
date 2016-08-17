/*
The MIT License (MIT)

Copyright (c) 2015 Daniel Borowski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

window.jsboard=function(){"use strict";function e(e,t,r){var a=[],n={matrix:function(){for(;a.length>0;)a.pop();for(var t=0;t<e.childNodes.length;t++){a.push([]);for(var r=0;r<e.childNodes[0].childNodes.length;r++)a[t].push("undefined"!=typeof e.childNodes[t].childNodes[r].childNodes[0]?e.childNodes[t].childNodes[r].childNodes[0].innerHTML:null)}return a},rows:function(){return t[0]},cols:function(){return t[1]},style:function(e){for(var t in e)document.getElementById(r).style[t]=e[t]},removeEvents:function(e,t){for(var r=0;r<document.getElementsByTagName("td").length;r++)document.getElementsByTagName("td")[r].removeEventListener(e,t)},cell:function(e,r){function a(e,t){return document.getElementsByClassName("boardRow_"+e)[0].childNodes[t]}function n(e){var t=e.split("x");if(t[0]=parseInt(t[0]),t[1]=parseInt(t[1]),r){var a=i(r,[t[0],t[1]]);t[0]=a[0],t[1]=a[1]}return[t[0],t[1]]}function i(e,r){if(0>e)for(;0>e;)r[1]>0?r[1]-=1:(r[1]=t[1]-1,r[0]-=1),e++;else for(;e>0;)r[1]<t[1]-1?r[1]+=1:(r[1]=0,r[0]+=1),e--;return[r[0],r[1]]}var o={DOM:function(){if("number"==typeof e[0])return e[0]<0||e[1]<0||e[0]>t[0]-1||e[1]>t[1]-1?document.createElement("div"):document.getElementsByClassName("boardRow_"+e[0])[0].childNodes[e[1]];var r=n(e.attributes["data-matrixval"].value);if(r[0]<0||r[1]<0||r[0]>t[0]-1||r[1]>t[1]-1)return document.createElement("div");var i=a(r[0],r[1]);return"undefined"==typeof i.childNodes[0]?document.createElement("div"):a(r[0],r[1])},style:function(r){if("each"==e)for(var i in r)for(var o=0;o<t[0];o++)for(var d=0;d<t[1];d++)a(o,d).style[i]=r[i];else if("number"==typeof e[0]){if(e[0]<0||e[1]<0||e[0]>t[0]-1||e[1]>t[1]-1)return"OOB";for(var i in r)a(e[0],e[1]).style[i]=r[i]}else{var l=n(e.attributes["data-matrixval"].value);if(l[0]<0||l[1]<0||l[0]>t[0]-1||l[1]>t[1]-1)return"OOB";var s=a(l[0],l[1]);for(var i in r)s.style[i]=r[i]}},place:function(r){if("each"==e)for(var i=0;i<t[0];i++)for(var o=0;o<t[1];o++){for(var d=a(i,o);d.firstChild;)d.removeChild(d.firstChild);var l=Math.floor(3e3*Math.random()+1),s=r.cloneNode(!0);s.className="pieceID_"+l,d.appendChild(s)}else if("number"==typeof e[0]){for(var d=a(e[0],e[1]);d.firstChild;)d.removeChild(d.firstChild);a(e[0],e[1]).appendChild(r)}else{var f=n(e.attributes["data-matrixval"].value);if(f[0]<0||f[1]<0||f[0]>t[0]-1||f[1]>t[1]-1)return"OOB";for(var d=a(f[0],f[1]);d.firstChild;)d.removeChild(d.firstChild);a(f[0],f[1]).appendChild(r)}},rid:function(){if("each"==e)for(var r=0;r<t[0];r++)for(var i=0;i<t[1];i++)for(var o=a(r,i);o.firstChild;)o.removeChild(o.firstChild);else if("number"==typeof e[0])for(var o=a(e[0],e[1]);o.firstChild;)o.removeChild(o.firstChild);else{var d=n(e.attributes["data-matrixval"].value);if(d[0]<0||d[1]<0||d[0]>t[0]-1||d[1]>t[1]-1)return"OOB";for(var o=a(d[0],d[1]);o.firstChild;)o.removeChild(o.firstChild)}},on:function(r,i){if("each"==e)for(var o=0;o<t[0];o++)for(var d=0;d<t[1];d++)a(o,d).addEventListener(r,i);else if("number"==typeof e[0]){if(e[0]<0||e[1]<0||e[0]>t[0]-1||e[1]>t[1]-1)return"OOB";a(e[0],e[1]).addEventListener(r,i)}else{var l=n(e.attributes["data-matrixval"].value);if(l[0]<0||l[1]<0||l[0]>t[0]-1||l[1]>t[1]-1)return"OOB";var s=a(l[0],l[1]);s.addEventListener(r,i)}},removeOn:function(r,i){if("each"==e)for(var o=0;o<t[0];o++)for(var d=0;d<t[1];d++)a(o,d).removeEventListener(r,i);else if("number"==typeof e[0]){if(e[0]<0||e[1]<0||e[0]>t[0]-1||e[1]>t[1]-1)return"OOB";a(e[0],e[1]).removeEventListener(r,i)}else{var l=n(e.attributes["data-matrixval"].value);if(l[0]<0||l[1]<0||l[0]>t[0]-1||l[1]>t[1]-1)return"OOB";var s=a(l[0],l[1]);s.removeEventListener(r,i)}},get:function(){if("number"==typeof e[0]){if(e[0]<0||e[1]<0||e[0]>t[0]-1||e[1]>t[1]-1)return"OOB";var r=a(e[0],e[1]);return"undefined"==typeof r.childNodes[0]?null:r.childNodes[0].childNodes[0].data}var i=n(e.attributes["data-matrixval"].value);if(i[0]<0||i[1]<0||i[0]>t[0]-1||i[1]>t[1]-1)return"OOB";var r=a(i[0],i[1]);return"undefined"==typeof r.childNodes[0]?null:r.childNodes[0].childNodes[0].data},where:function(){var r=n(e.attributes["data-matrixval"].value);return r[0]<0||r[1]<0||r[0]>t[0]-1||r[1]>t[1]-1?"OOB":[r[0],r[1]]}};return o}};return n}function t(e){var e=e,t={clone:function(){var t=e.cloneNode(!0),r=Math.floor(3e3*Math.random()+1);return t.className="pieceID_"+r,t},style:function(t){for(var r in t)e.style[r]=t[r]}};return t}var r={board:function(t){var r=[];for(var a in t)if("size"==a)if(t.attach){var n=t[a].split("x");r.push(parseInt(n[0]),parseInt(n[1]));for(var i=0;i<r[0];i++){var o=document.createElement("tr");o.className="boardRow_"+i;for(var d=0;d<r[1];d++){var l=document.createElement("td");l.className="boardCol_"+d,l.dataset.matrixval=i+"x"+d,o.appendChild(l)}document.getElementById(t.attach).appendChild(o)}document.getElementById(t.attach).style.borderSpacing="2px";for(var i=0;i<document.getElementsByTagName("td").length;i++)document.getElementsByTagName("td")[i].style.background="lightgray",document.getElementsByTagName("td")[i].style.width="50px",document.getElementsByTagName("td")[i].style.height="50px";if(t.style&&"checkerboard"==t.style){var s="gray";if(t.stylePattern){for(var i=0;i<document.getElementsByTagName("td").length;i++)document.getElementsByTagName("td")[i].style.background=t.stylePattern[0];s=t.stylePattern[1]}for(var f=0;f<r[0];f++){if(f%2)var u=!0;else var u=!1;for(var c=0;c<r[1];c++)u&&(document.getElementsByClassName("boardRow_"+f)[0].childNodes[c].style.background=s),u=!u}}}else console.log("Need attachment for game board");return e(document.getElementById(t.attach),r,t.attach)},piece:function(e){var r=document.createElement("div");if(e.text){var a=document.createTextNode(e.text);r.appendChild(a)}for(var n in e)"text"!=n&&(r.style[n]=e[n]);return t(r)}};return r}();
