parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,l=!0,i=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return l=e.done,e},e:function(e){i=!0,a=e},f:function(){try{l||null==o.return||o.return()}finally{if(i)throw a}}}}function t(e){return a(e)||o(e)||r(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function o(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function a(e){if(Array.isArray(e))return l(e)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=document.querySelector("thead"),c=document.querySelector("tbody"),s=0,u=0,d=0,f=0,p=0;i.addEventListener("click",function(e){var n=t(c.querySelectorAll("tr"));switch(e.target.textContent){case"Name":s++,u=0,d=0,f=0,p=0,n.sort(function(e,t){return e.cells[0].textContent.localeCompare(t.cells[0].textContent)}),s%2==0&&n.sort(function(e,t){return t.cells[0].textContent.localeCompare(e.cells[0].textContent)});break;case"Position":s=0,u++,d=0,f=0,p=0,n.sort(function(e,t){return e.cells[1].textContent.localeCompare(t.cells[1].textContent)}),u%2==0&&n.sort(function(e,t){return t.cells[1].textContent.localeCompare(e.cells[1].textContent)});break;case"Office":s=0,u=0,d++,f=0,p=0,n.sort(function(e,t){return e.cells[2].textContent.localeCompare(t.cells[2].textContent)}),d%2==0&&n.sort(function(e,t){return t.cells[2].textContent.localeCompare(e.cells[2].textContent)});break;case"Age":s=0,u=0,d=0,f++,p=0,n.sort(function(e,t){return+e.cells[3].textContent-+t.cells[3].textContent}),f%2==0&&n.sort(function(e,t){var n=+e.cells[3].textContent;return+t.cells[3].textContent-n});break;case"Salary":s=0,u=0,d=0,f=0,p++;var r=/,/gi;n.sort(function(e,t){var n=+e.cells[4].textContent.replace(r,"").slice(1),o=+t.cells[4].textContent.replace(r,"").slice(1);return p%2==0?-1*(n-o):n-o})}c.append.apply(c,t(n))}),c.addEventListener("click",function(t){var n,r=e(c.querySelectorAll("tr"));try{for(r.s();!(n=r.n()).done;){n.value.classList.remove("active")}}catch(o){r.e(o)}finally{r.f()}t.target.parentNode.className="active"}),document.body.insertAdjacentHTML("beforeend",'\n  <form class="new-employee-form">\n    <label>\n      Name:\n      <input\n        name="name"\n        data-qa="name"\n        required\n        minlength="4"\n      >\n    </label>\n\n    <label>Position: <input name="position" data-qa="position" required></label>\n\n    <label>Office: \n      <select name="office" data-qa="office" required>\n        <option>Tokyo</option>\n        <option>Singapore</option>\n        <option>London</option>\n        <option>New York</option>\n        <option>Edinburgh</option>\n        <option>San Francisco</option>\n      </select>\n    </label>\n    \n    <label>\n      Age: \n      <input\n        type="number"\n        name="age"\n        data-qa="age"\n        required\n      >\n    </label>\n\n    <label>\n      Salary:\n      <input\n        type="number"\n        name="salary"\n        data-qa="salary"\n        required\n      >\n    </label>\n\n    <button>Save to table</button>\n  </form>\n');var y=document.querySelector("form"),m=document.createElement("div");m.className="new-employee-form",m.setAttribute("data-qa","notification"),m.style.fontWeight="bold",m.style.fontSize="20px",m.style.position="absolute",m.style.top="440px",m.style.visibility="hidden",document.body.append(m),c.addEventListener("dblclick",function(e){var t=e.target.innerText,n=document.createElement("input");e.target.innerText="",n.classList.add("cell-input"),e.target.appendChild(n),n.focus(),n.addEventListener("keydown",function(n){"Enter"===n.key&&(e.target.textContent=n.target.value,""===n.target.value&&(e.target.innerText=t))}),n.addEventListener("blur",function(r){e.target.innerText=r.target.value,""===n.value&&(e.target.innerText=t)})});var v=document.querySelector("button");function b(){var t=h(y.elements.name.value,y.elements.position.value,y.elements.age.value,y.elements.salary.value);if(t.flag){c.insertAdjacentHTML("beforeend","\n      <tr>\n        <td>".concat(y.elements.name.value,"</td>\n        <td>").concat(y.elements.position.value,"</td>\n        <td>").concat(y.elements.office.value,"</td>\n        <td>").concat(y.elements.age.value,"</td>\n        <td>").concat(g(y.elements.salary.value),"</td>\n      </tr>\n    ")),m.innerText="Sucsess!!! \n\n New employee added.",m.classList.add("success"),m.style.visibility="visible";var n,r=e(y.elements);try{for(r.s();!(n=r.n()).done;){var o=n.value;"office"!==o.name&&(o.value="")}}catch(a){r.e(a)}finally{r.f()}setTimeout(function(){m.style.visibility="hidden"},3e3)}else m.innerText=t.description,m.classList.add("error"),m.style.visibility="visible"}function g(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=e.toString(),r="",o=0;o<n.length/3;o++)r=t+n.slice(-3*(o+1),n.length-3*o)+r;return"$"+r.slice(1)}function h(e,t,n,r){var o={flag:!0};return e.length<4&&(o.flag=!1,o.description="Error!!!\n\nPut your name at least 4 letters!"),""===t&&(o.description+="\n\nWhat is your job?",o.flag&&(o.flag=!1,o.description="Error!!!\n\nWhat is your job?")),n||(o.description+="\n\nHow old are you?",o.flag&&(o.flag=!1,o.description="Error!!!\n\nHow old are you?")),n<18&&n>0&&(o.description+="\n\nGrow up a little...",o.flag&&(o.flag=!1,o.description="Error!!!\n\nGrow up a little...")),n>90&&(o.description+="\n\nSee you next life...",o.flag&&(o.flag=!1,o.description="Error!!!\n\nSee you next life...")),r||(o.description+="\n\nEvery man has his price...",o.flag&&(o.flag=!1,o.description="Error!!!\n\nEvery man has his price...")),o}v.addEventListener("click",function(e){e.preventDefault(),b();var t=parseInt(window.getComputedStyle(y,null).width),n=parseInt(window.getComputedStyle(y,null).padding),r=parseInt(window.getComputedStyle(c,null).width),o=(window.innerWidth-(r+t+n))/2;m.style.right="".concat(o,"px"),m.style.width=window.getComputedStyle(y,null).width});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.0e772851.js.map