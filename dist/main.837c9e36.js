parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#note"),r=document.querySelector("#style"),e='/*我叫McCall\n*开始制作一个圆形*/\n#container{\n  border:1px solid red;\n  height:200px;\n  width:200px;\n  border-radius: 50%;\n}\n/*\n*太极是左白右黑，我们先初步上色*/\n#container{\n  background: linear-gradient(90deg, rgba(255,255,255,1) 49%, rgba(255,255,255,1) 49%, rgba(0,0,0,1) 50%);\n  border:none;\n  box-shadow:0 0 3px rgba(0,0,0,0.5);\n}\n/**\n * 接下来给太极里面画圆\n * 首先使用伪元素创建两个div\n * **/\n#container::before {\n  content: "";\n  border: 1px solid red;\n  display: block;\n  width: 100px;\n  height: 100px;\n  \n}\n#container::after {\n  content: "";\n  border: 1px solid red;\n\n  display: block;\n  width: 100px;\n  height: 100px;\n}\n/**\n * 给中间两个方框居中，并且画圆\n * **/\n#container::before {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 50%;\n}\n#container::after {\n  position: absolute;\n  bottom: 0%;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 50%;\n}\n/**\n * 太极上白下黑\n *\n * **/\n#container::before {\n  background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);\n  border:none;\n}\n#container::after {\n  background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%); \n  border:none;\n}\n',o="",t=0,a=function a(){setTimeout(function(){"\n"===e[t]?o+="<br>":" "===e[t]?o+="&nbsp;":o+=e[t],window.scrollTo(0,9999),note.scrollTo(0,9999),t<e.length&&(t+=1,n.innerHTML=o,r.innerHTML=e.substring(0,t)),a()},50)};a();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.837c9e36.js.map