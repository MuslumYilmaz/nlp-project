var Client;(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();var t={};function n(e){return console.log("::: Running checkForName :::",e),new RegExp(/^(http|https):\/\/[^ "]+$/).test(e)}function r(e){e.preventDefault();let t=document.getElementById("name").value;n(t)?fetch("http://localhost:8081/userInput",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({formText:t})}).then((e=>e.json())).then((function(e){document.getElementById("model").innerHTML="Model: "+e.model,document.getElementById("score_tag").innerHTML="Score: "+e.score_tag,document.getElementById("agreement").innerHTML="Agreement: "+e.agreement,document.getElementById("subjectivity").innerHTML="Subjectivity: "+e.subjectivity,document.getElementById("confidence").innerHTML="Confidence: "+e.confidence,document.getElementById("irony").innerHTML="Irony: "+e.irony})):alert("Please enter a valid URL")}e.r(t),e.d(t,{checkForName:()=>n,handleSubmit:()=>r}),e.p,window.addEventListener("DOMContentLoaded",(e=>{document.getElementById("form").addEventListener("submit",r)})),Client=t})();