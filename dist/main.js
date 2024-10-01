/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.background-container {
    background: linear-gradient(to right, #003060, #044576, #0e67a2, #1371af);
    display: flex;
    flex-direction: column;
}

.search-bar {
    max-width: 0;
    display: flex;
    align-items: center;
    overflow: hidden;
    transition: max-width 0.5s ease-in-out;
    border-radius: 50px;
    background-color: #f5f5f5;
    padding: 0.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.search-bar.open {
    max-width: 500px;
    transition: max-width 0.5s ease-in-out;
}

#movie-name {
    border: none;
    padding: 10px 20px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
    font-size: 18px;
    color: #003060;
    outline: none;
    border-radius: 50px;
    background-color: #fff;
    width: 100%;
    transition: width 0.5s ease-in-out;
}

#movie-name:focus {
    border: 2px solid #0e67a2;
    box-shadow: 0 0 8px rgba(0, 96, 192, 0.2);
}

#clearInput {
    position: relative;
    color: black;
    font-weight: bold;
    cursor: pointer;
    margin-left: 10px;
    right: 18px;
}

#clearInput:hover {
    font-weight: bold;
    color: #ff6347;
}

#movie-slides {
    width: 100%;
    height: 100vh;
}

.slide {
    width: 100%;
    height: 90vh;
    animation-name: fade;
    animation-duration: 1.5s;
}

.slide img {
    width: 100%;
    height: 90%;
    object-fit: cover;
    opacity: 0.8;
}

.slide h3,
.slide p {
    color: aliceblue;
    font-size: 2.5vw;
    padding: 8px 12px;
    position: absolute;
    width: 100%;
}

.slide h3 {
    bottom: 12vh;
}

.slide p {
    bottom: 6vh;
}

.movie-plot {
    display: none;
}

.movie-details {
    width: 100vw;
    height: 100vh;
    margin: 20px auto;
    display: none;
    padding: 50px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    overflow-y: scroll;
}

.results {
    background-color: #fff;
    padding: 20px;
    width: 100%;
    height: 500px;
    border-radius: 10px;
    box-shadow: 3px 3px 12px rgba(65, 148, 250, 0.4);
    display: inline-flex;
    flex-direction: column;
    gap: 20px;
    color: darkolivegreen;
}

.results img {
    object-fit: cover;
    width: 70%;
    height: 50%;
}

.icons {
    width: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px;
    padding: 10px;
}

.icons i {
    font-size: 24px;
    color: #f5f5f5;
    cursor: pointer;
    transition: color 0.3s ease, transform 0.3s ease;
}

.icons i:hover {
    color: #ffcc00;
    transform: scale(1.1);
}

@keyframes fade {
    from {
        opacity: 0.4;
    }
    to {
        opacity: 1;
    }
}

@media screen and (max-width: 1370px) {
    .movie-details {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    .movie-overview {
        font-size: 1.2vw;
    }
    #movie-name {
        width: 40vw;
        height: 3vw;
    }
}

@media screen and (max-width: 1030px) {
    .movie-details {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    #movie-name {
        width: 45vw;
        height: 3.5vw;
    }
}

@media screen and (max-width: 720px) {
    .movie-details {
        grid-template-columns: 1fr;
    }
    #movie-name {
        width: 50vw;
        height: 4.5vw;
        font-size: 12px;
    }
}

@media screen and (max-width: 372px) {
    #movie-name {
        width: 60vw;
        height: 5vw;
        font-size: 10px;
    }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA;IACI,yEAAyE;IACzE,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,sCAAsC;IACtC,mBAAmB;IACnB,yBAAyB;IACzB,eAAe;IACf,yCAAyC;AAC7C;;AAEA;IACI,gBAAgB;IAChB,sCAAsC;AAC1C;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB;kBACc;IACd,eAAe;IACf,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,WAAW;IACX,kCAAkC;AACtC;;AAEA;IACI,yBAAyB;IACzB,yCAAyC;AAC7C;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,WAAW;IACX,iBAAiB;IACjB,YAAY;AAChB;;AAEA;;IAEI,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,aAAa;IACb,aAAa;IACb,2DAA2D;IAC3D,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,gDAAgD;IAChD,oBAAoB;IACpB,sBAAsB;IACtB,SAAS;IACT,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,WAAW;AACf;;AAEA;IACI,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,eAAe;IACf,gDAAgD;AACpD;;AAEA;IACI,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI;QACI,YAAY;IAChB;IACA;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,2DAA2D;IAC/D;IACA;QACI,gBAAgB;IACpB;IACA;QACI,WAAW;QACX,WAAW;IACf;AACJ;;AAEA;IACI;QACI,2DAA2D;IAC/D;IACA;QACI,WAAW;QACX,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,0BAA0B;IAC9B;IACA;QACI,WAAW;QACX,aAAa;QACb,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,WAAW;QACX,WAAW;QACX,eAAe;IACnB;AACJ","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n.background-container {\r\n    background: linear-gradient(to right, #003060, #044576, #0e67a2, #1371af);\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.search-bar {\r\n    max-width: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    overflow: hidden;\r\n    transition: max-width 0.5s ease-in-out;\r\n    border-radius: 50px;\r\n    background-color: #f5f5f5;\r\n    padding: 0.5rem;\r\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.search-bar.open {\r\n    max-width: 500px;\r\n    transition: max-width 0.5s ease-in-out;\r\n}\r\n\r\n#movie-name {\r\n    border: none;\r\n    padding: 10px 20px;\r\n    font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\",\r\n        sans-serif;\r\n    font-size: 18px;\r\n    color: #003060;\r\n    outline: none;\r\n    border-radius: 50px;\r\n    background-color: #fff;\r\n    width: 100%;\r\n    transition: width 0.5s ease-in-out;\r\n}\r\n\r\n#movie-name:focus {\r\n    border: 2px solid #0e67a2;\r\n    box-shadow: 0 0 8px rgba(0, 96, 192, 0.2);\r\n}\r\n\r\n#clearInput {\r\n    position: relative;\r\n    color: black;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    margin-left: 10px;\r\n    right: 18px;\r\n}\r\n\r\n#clearInput:hover {\r\n    font-weight: bold;\r\n    color: #ff6347;\r\n}\r\n\r\n#movie-slides {\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n.slide {\r\n    width: 100%;\r\n    height: 90vh;\r\n    animation-name: fade;\r\n    animation-duration: 1.5s;\r\n}\r\n\r\n.slide img {\r\n    width: 100%;\r\n    height: 90%;\r\n    object-fit: cover;\r\n    opacity: 0.8;\r\n}\r\n\r\n.slide h3,\r\n.slide p {\r\n    color: aliceblue;\r\n    font-size: 2.5vw;\r\n    padding: 8px 12px;\r\n    position: absolute;\r\n    width: 100%;\r\n}\r\n\r\n.slide h3 {\r\n    bottom: 12vh;\r\n}\r\n\r\n.slide p {\r\n    bottom: 6vh;\r\n}\r\n\r\n.movie-plot {\r\n    display: none;\r\n}\r\n\r\n.movie-details {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    margin: 20px auto;\r\n    display: none;\r\n    padding: 50px;\r\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n    gap: 30px;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.results {\r\n    background-color: #fff;\r\n    padding: 20px;\r\n    width: 100%;\r\n    height: 500px;\r\n    border-radius: 10px;\r\n    box-shadow: 3px 3px 12px rgba(65, 148, 250, 0.4);\r\n    display: inline-flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    color: darkolivegreen;\r\n}\r\n\r\n.results img {\r\n    object-fit: cover;\r\n    width: 70%;\r\n    height: 50%;\r\n}\r\n\r\n.icons {\r\n    width: 10vw;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    margin: 20px;\r\n    padding: 10px;\r\n}\r\n\r\n.icons i {\r\n    font-size: 24px;\r\n    color: #f5f5f5;\r\n    cursor: pointer;\r\n    transition: color 0.3s ease, transform 0.3s ease;\r\n}\r\n\r\n.icons i:hover {\r\n    color: #ffcc00;\r\n    transform: scale(1.1);\r\n}\r\n\r\n@keyframes fade {\r\n    from {\r\n        opacity: 0.4;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1370px) {\r\n    .movie-details {\r\n        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n    }\r\n    .movie-overview {\r\n        font-size: 1.2vw;\r\n    }\r\n    #movie-name {\r\n        width: 40vw;\r\n        height: 3vw;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1030px) {\r\n    .movie-details {\r\n        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n    }\r\n    #movie-name {\r\n        width: 45vw;\r\n        height: 3.5vw;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 720px) {\r\n    .movie-details {\r\n        grid-template-columns: 1fr;\r\n    }\r\n    #movie-name {\r\n        width: 50vw;\r\n        height: 4.5vw;\r\n        font-size: 12px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 372px) {\r\n    #movie-name {\r\n        width: 60vw;\r\n        height: 5vw;\r\n        font-size: 10px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


const key = "ab0e9b3e";
const movieSlides = document.querySelector("#movie-slides");
const movieNameElement = document.getElementById("movie-name");
const movieDetails = document.querySelector(".movie-details");

const searchIcon = document.querySelector(".fa-search");
const homeIcon = document.querySelector(".fa-home");

const noResults = document.createElement("dialog");

const noResultsMessage = document.createElement("h2");
noResultsMessage.textContent = "No movies found...";
noResultsMessage.classList.add("title");
noResults.classList.add("no-results");
const closeButton = document.createElement("a");
closeButton.textContent = "X";
noResults.appendChild(noResultsMessage);
noResults.appendChild(closeButton);
closeButton.classList.add("close-button");
document.body.appendChild(noResults);

searchIcon.addEventListener("click", () => {
  const searchBar = document.querySelector(".search-bar");
  searchBar.classList.toggle("open");
  movieNameElement.focus();
});

homeIcon.addEventListener("click", () => {
  movieDetails.style.display = "none";
  movieSlides.style.display = "block";
  movieNameElement.value = "";
});

document
  .getElementById("clearInput")
  .addEventListener("click", () => (movieNameElement.value = ""));
movieNameElement.addEventListener("keydown", async (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    movieSlides.style.display = "none";
    movieDetails.style.display = "grid";
    movieDetails.innerHTML = "";
    const movieName = movieNameElement.value;
    const apiUrl = `https://www.omdbapi.com/?apikey=${key}&s=${movieName}`;
    const response = await fetch(apiUrl);
    const movieData = await response.json();
    console.log(movieData);

    if (movieData.Response === "False") {
      noResults.showModal();
      noResults.style.display = "flex";
      closeButton.addEventListener("click", () => {
        noResults.close();
        noResults.style.display = "none";
      });
    } else {
      movieData.Search.forEach((element) => {
        const results = document.createElement("div");
        const poster = document.createElement("img");
        const titleMovie = document.createElement("h2");
        const rating = document.createElement("p");
        const movieOverview = document.createElement("p");

        results.appendChild(poster);
        results.appendChild(titleMovie);
        results.appendChild(rating);
        results.appendChild(movieOverview);
        movieDetails.appendChild(results);

        results.classList.add("results");
        poster.classList.add("poster");
        titleMovie.classList.add("title");
        rating.classList.add("rating");
        movieOverview.classList.add("movie-overview");

        if (element.Poster) {
          poster.src = element.Poster;
          poster.alt = `${element.Title} poster`;
        } else {
          poster.alt = "No poster available";
        }
        titleMovie.textContent = element.Title;
        const movieId = element.imdbID;
        fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=${key}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.Response === "True") {
              console.log(data);
              rating.textContent = `${data.Ratings[0]?.Value}⭐`;
              movieOverview.textContent = data.Plot;
            } else {
              console.log("Movie not found");
            }
          })
          .catch((error) => {
            console.error(
              "There was a problem with the fetch operation:",
              error
            );
          });
      });
    }
  }
});

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "de0c4dc09cmsha23578880a13cbcp10203djsnd333482b1180",
        "x-rapidapi-host": "imdb188.p.rapidapi.com",
      },
    };
    const response = await fetch(
      "https://imdb188.p.rapidapi.com/api/v1/getWeekTop10",
      options
    );
    const result = await response.json();
    console.log(result.data);
    const highRatedMovies = result.data;
    console.log("hello");
    createSlides(highRatedMovies);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

function createSlides(movies) {
  if (!movieSlides) {
    console.error("No movieSlides element found!");
    return;
  }

  movies?.forEach((movie) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");

    const moviePoster = document.createElement("img");
    moviePoster.src = movie.primaryImage.imageUrl;
    moviePoster.alt = movie.titleText.text;

    const movieTitle = document.createElement("h3");
    movieTitle.classList.add("movie-title");
    movieTitle.textContent = movie.titleText.text;

    const movieRating = document.createElement("p");
    movieRating.classList.add("movie-rating");
    movieRating.innerHTML = movie.ratingsSummary.aggregateRating + "⭐";

    const moviePlot = document.createElement("p");
    moviePlot.classList.add("movie-plot");
    moviePlot.textContent = movie.overview;

    slide.appendChild(moviePoster);
    slide.appendChild(movieTitle);
    slide.appendChild(movieRating);
    slide.appendChild(moviePlot);

    movieSlides.appendChild(slide);
  });

  let slideIndex = 0;
  showSlides();

  function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
  }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FB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VSxJQUFJO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHVCQUF1QjtBQUM3RDtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsT0FBTztBQUNQO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2luZXBsYXkvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9jaW5lcGxheS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2luZXBsYXkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jaW5lcGxheS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vY2luZXBsYXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2luZXBsYXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NpbmVwbGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NpbmVwbGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NpbmVwbGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2luZXBsYXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jaW5lcGxheS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaW5lcGxheS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jaW5lcGxheS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2luZXBsYXkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaW5lcGxheS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NpbmVwbGF5L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jaW5lcGxheS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uYmFja2dyb3VuZC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDAzMDYwLCAjMDQ0NTc2LCAjMGU2N2EyLCAjMTM3MWFmKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc2VhcmNoLWJhciB7XHJcbiAgICBtYXgtd2lkdGg6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiBtYXgtd2lkdGggMC41cyBlYXNlLWluLW91dDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5zZWFyY2gtYmFyLm9wZW4ge1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHRyYW5zaXRpb246IG1heC13aWR0aCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jbW92aWUtbmFtZSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSwgXCJUcmVidWNoZXQgTVNcIixcclxuICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMwMDMwNjA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNtb3ZpZS1uYW1lOmZvY3VzIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwZTY3YTI7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgOTYsIDE5MiwgMC4yKTtcclxufVxyXG5cclxuI2NsZWFySW5wdXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHJpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4jY2xlYXJJbnB1dDpob3ZlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmY2MzQ3O1xyXG59XHJcblxyXG4jbW92aWUtc2xpZGVzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnNsaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XHJcbn1cclxuXHJcbi5zbGlkZSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uc2xpZGUgaDMsXHJcbi5zbGlkZSBwIHtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBmb250LXNpemU6IDIuNXZ3O1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNsaWRlIGgzIHtcclxuICAgIGJvdHRvbTogMTJ2aDtcclxufVxyXG5cclxuLnNsaWRlIHAge1xyXG4gICAgYm90dG9tOiA2dmg7XHJcbn1cclxuXHJcbi5tb3ZpZS1wbG90IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5tb3ZpZS1kZXRhaWxzIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDMwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5yZXN1bHRzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCByZ2JhKDY1LCAxNDgsIDI1MCwgMC40KTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGNvbG9yOiBkYXJrb2xpdmVncmVlbjtcclxufVxyXG5cclxuLnJlc3VsdHMgaW1nIHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG59XHJcblxyXG4uaWNvbnMge1xyXG4gICAgd2lkdGg6IDEwdnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmljb25zIGkge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5pY29ucyBpOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZjYzAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNzBweCkge1xyXG4gICAgLm1vdmllLWRldGFpbHMge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gICAgfVxyXG4gICAgLm1vdmllLW92ZXJ2aWV3IHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnZ3O1xyXG4gICAgfVxyXG4gICAgI21vdmllLW5hbWUge1xyXG4gICAgICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgICAgIGhlaWdodDogM3Z3O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDMwcHgpIHtcclxuICAgIC5tb3ZpZS1kZXRhaWxzIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICAgIH1cclxuICAgICNtb3ZpZS1uYW1lIHtcclxuICAgICAgICB3aWR0aDogNDV2dztcclxuICAgICAgICBoZWlnaHQ6IDMuNXZ3O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgLm1vdmllLWRldGFpbHMge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG4gICAgI21vdmllLW5hbWUge1xyXG4gICAgICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgICAgIGhlaWdodDogNC41dnc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzJweCkge1xyXG4gICAgI21vdmllLW5hbWUge1xyXG4gICAgICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgICAgIGhlaWdodDogNXZ3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHlFQUF5RTtJQUN6RSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQjtrQkFDYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdEQUFnRDtJQUNoRCxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7SUFDZixnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksMkRBQTJEO0lBQy9EO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxXQUFXO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksMkRBQTJEO0lBQy9EO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2IsZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsV0FBVztRQUNYLGVBQWU7SUFDbkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4uYmFja2dyb3VuZC1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDMwNjAsICMwNDQ1NzYsICMwZTY3YTIsICMxMzcxYWYpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJhciB7XFxyXFxuICAgIG1heC13aWR0aDogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdHJhbnNpdGlvbjogbWF4LXdpZHRoIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFyLm9wZW4ge1xcclxcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBtYXgtd2lkdGggMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuI21vdmllLW5hbWUge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJHaWxsIFNhbnNcXFwiLCBcXFwiR2lsbCBTYW5zIE1UXFxcIiwgQ2FsaWJyaSwgXFxcIlRyZWJ1Y2hldCBNU1xcXCIsXFxyXFxuICAgICAgICBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGNvbG9yOiAjMDAzMDYwO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuI21vdmllLW5hbWU6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMGU2N2EyO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgOTYsIDE5MiwgMC4yKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFySW5wdXQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHJpZ2h0OiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXJJbnB1dDpob3ZlciB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjb2xvcjogI2ZmNjM0NztcXHJcXG59XFxyXFxuXFxyXFxuI21vdmllLXNsaWRlcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZTtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGUgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGUgaDMsXFxyXFxuLnNsaWRlIHAge1xcclxcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgICBmb250LXNpemU6IDIuNXZ3O1xcclxcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlIGgzIHtcXHJcXG4gICAgYm90dG9tOiAxMnZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGUgcCB7XFxyXFxuICAgIGJvdHRvbTogNnZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtcGxvdCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1kZXRhaWxzIHtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBtYXJnaW46IDIwcHggYXV0bztcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogNTBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0cyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggcmdiYSg2NSwgMTQ4LCAyNTAsIDAuNCk7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiBkYXJrb2xpdmVncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdHMgaW1nIHtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbnMge1xcclxcbiAgICB3aWR0aDogMTB2dztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbnMgaSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgY29sb3I6ICNmNWY1ZjU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbnMgaTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjZmZjYzAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZSB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMC40O1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM3MHB4KSB7XFxyXFxuICAgIC5tb3ZpZS1kZXRhaWxzIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcclxcbiAgICB9XFxyXFxuICAgIC5tb3ZpZS1vdmVydmlldyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMnZ3O1xcclxcbiAgICB9XFxyXFxuICAgICNtb3ZpZS1uYW1lIHtcXHJcXG4gICAgICAgIHdpZHRoOiA0MHZ3O1xcclxcbiAgICAgICAgaGVpZ2h0OiAzdnc7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAzMHB4KSB7XFxyXFxuICAgIC5tb3ZpZS1kZXRhaWxzIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcclxcbiAgICB9XFxyXFxuICAgICNtb3ZpZS1uYW1lIHtcXHJcXG4gICAgICAgIHdpZHRoOiA0NXZ3O1xcclxcbiAgICAgICAgaGVpZ2h0OiAzLjV2dztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xcclxcbiAgICAubW92aWUtZGV0YWlscyB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgfVxcclxcbiAgICAjbW92aWUtbmFtZSB7XFxyXFxuICAgICAgICB3aWR0aDogNTB2dztcXHJcXG4gICAgICAgIGhlaWdodDogNC41dnc7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcycHgpIHtcXHJcXG4gICAgI21vdmllLW5hbWUge1xcclxcbiAgICAgICAgd2lkdGg6IDYwdnc7XFxyXFxuICAgICAgICBoZWlnaHQ6IDV2dztcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcblxyXG5jb25zdCBrZXkgPSBcImFiMGU5YjNlXCI7XHJcbmNvbnN0IG1vdmllU2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb3ZpZS1zbGlkZXNcIik7XHJcbmNvbnN0IG1vdmllTmFtZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vdmllLW5hbWVcIik7XHJcbmNvbnN0IG1vdmllRGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW92aWUtZGV0YWlsc1wiKTtcclxuXHJcbmNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhLXNlYXJjaFwiKTtcclxuY29uc3QgaG9tZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhLWhvbWVcIik7XHJcblxyXG5jb25zdCBub1Jlc3VsdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xyXG5cclxuY29uc3Qgbm9SZXN1bHRzTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxubm9SZXN1bHRzTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiTm8gbW92aWVzIGZvdW5kLi4uXCI7XHJcbm5vUmVzdWx0c01lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG5ub1Jlc3VsdHMuY2xhc3NMaXN0LmFkZChcIm5vLXJlc3VsdHNcIik7XHJcbmNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbmNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XHJcbm5vUmVzdWx0cy5hcHBlbmRDaGlsZChub1Jlc3VsdHNNZXNzYWdlKTtcclxubm9SZXN1bHRzLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcclxuY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZChcImNsb3NlLWJ1dHRvblwiKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub1Jlc3VsdHMpO1xyXG5cclxuc2VhcmNoSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWJhclwiKTtcclxuICBzZWFyY2hCYXIuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgbW92aWVOYW1lRWxlbWVudC5mb2N1cygpO1xyXG59KTtcclxuXHJcbmhvbWVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgbW92aWVEZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBtb3ZpZVNsaWRlcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIG1vdmllTmFtZUVsZW1lbnQudmFsdWUgPSBcIlwiO1xyXG59KTtcclxuXHJcbmRvY3VtZW50XHJcbiAgLmdldEVsZW1lbnRCeUlkKFwiY2xlYXJJbnB1dFwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gKG1vdmllTmFtZUVsZW1lbnQudmFsdWUgPSBcIlwiKSk7XHJcbm1vdmllTmFtZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbW92aWVTbGlkZXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbW92aWVEZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcclxuICAgIG1vdmllRGV0YWlscy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29uc3QgbW92aWVOYW1lID0gbW92aWVOYW1lRWxlbWVudC52YWx1ZTtcclxuICAgIGNvbnN0IGFwaVVybCA9IGBodHRwczovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PSR7a2V5fSZzPSR7bW92aWVOYW1lfWA7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCk7XHJcbiAgICBjb25zdCBtb3ZpZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhtb3ZpZURhdGEpO1xyXG5cclxuICAgIGlmIChtb3ZpZURhdGEuUmVzcG9uc2UgPT09IFwiRmFsc2VcIikge1xyXG4gICAgICBub1Jlc3VsdHMuc2hvd01vZGFsKCk7XHJcbiAgICAgIG5vUmVzdWx0cy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbm9SZXN1bHRzLmNsb3NlKCk7XHJcbiAgICAgICAgbm9SZXN1bHRzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtb3ZpZURhdGEuU2VhcmNoLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb25zdCBwb3N0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlTW92aWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgY29uc3QgcmF0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgY29uc3QgbW92aWVPdmVydmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICAgICAgICByZXN1bHRzLmFwcGVuZENoaWxkKHBvc3Rlcik7XHJcbiAgICAgICAgcmVzdWx0cy5hcHBlbmRDaGlsZCh0aXRsZU1vdmllKTtcclxuICAgICAgICByZXN1bHRzLmFwcGVuZENoaWxkKHJhdGluZyk7XHJcbiAgICAgICAgcmVzdWx0cy5hcHBlbmRDaGlsZChtb3ZpZU92ZXJ2aWV3KTtcclxuICAgICAgICBtb3ZpZURldGFpbHMuYXBwZW5kQ2hpbGQocmVzdWx0cyk7XHJcblxyXG4gICAgICAgIHJlc3VsdHMuY2xhc3NMaXN0LmFkZChcInJlc3VsdHNcIik7XHJcbiAgICAgICAgcG9zdGVyLmNsYXNzTGlzdC5hZGQoXCJwb3N0ZXJcIik7XHJcbiAgICAgICAgdGl0bGVNb3ZpZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgICAgICAgcmF0aW5nLmNsYXNzTGlzdC5hZGQoXCJyYXRpbmdcIik7XHJcbiAgICAgICAgbW92aWVPdmVydmlldy5jbGFzc0xpc3QuYWRkKFwibW92aWUtb3ZlcnZpZXdcIik7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50LlBvc3Rlcikge1xyXG4gICAgICAgICAgcG9zdGVyLnNyYyA9IGVsZW1lbnQuUG9zdGVyO1xyXG4gICAgICAgICAgcG9zdGVyLmFsdCA9IGAke2VsZW1lbnQuVGl0bGV9IHBvc3RlcmA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHBvc3Rlci5hbHQgPSBcIk5vIHBvc3RlciBhdmFpbGFibGVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGl0bGVNb3ZpZS50ZXh0Q29udGVudCA9IGVsZW1lbnQuVGl0bGU7XHJcbiAgICAgICAgY29uc3QgbW92aWVJZCA9IGVsZW1lbnQuaW1kYklEO1xyXG4gICAgICAgIGZldGNoKGBodHRwczovL3d3dy5vbWRiYXBpLmNvbS8/aT0ke21vdmllSWR9JmFwaWtleT0ke2tleX1gKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5SZXNwb25zZSA9PT0gXCJUcnVlXCIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICByYXRpbmcudGV4dENvbnRlbnQgPSBgJHtkYXRhLlJhdGluZ3NbMF0/LlZhbHVlfeKtkGA7XHJcbiAgICAgICAgICAgICAgbW92aWVPdmVydmlldy50ZXh0Q29udGVudCA9IGRhdGEuUGxvdDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1vdmllIG5vdCBmb3VuZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICAgICBcIlRoZXJlIHdhcyBhIHByb2JsZW0gd2l0aCB0aGUgZmV0Y2ggb3BlcmF0aW9uOlwiLFxyXG4gICAgICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwieC1yYXBpZGFwaS1rZXlcIjogXCJkZTBjNGRjMDljbXNoYTIzNTc4ODgwYTEzY2JjcDEwMjAzZGpzbmQzMzM0ODJiMTE4MFwiLFxyXG4gICAgICAgIFwieC1yYXBpZGFwaS1ob3N0XCI6IFwiaW1kYjE4OC5wLnJhcGlkYXBpLmNvbVwiLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIFwiaHR0cHM6Ly9pbWRiMTg4LnAucmFwaWRhcGkuY29tL2FwaS92MS9nZXRXZWVrVG9wMTBcIixcclxuICAgICAgb3B0aW9uc1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcclxuICAgIGNvbnN0IGhpZ2hSYXRlZE1vdmllcyA9IHJlc3VsdC5kYXRhO1xyXG4gICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcclxuICAgIGNyZWF0ZVNsaWRlcyhoaWdoUmF0ZWRNb3ZpZXMpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xyXG4gIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTbGlkZXMobW92aWVzKSB7XHJcbiAgaWYgKCFtb3ZpZVNsaWRlcykge1xyXG4gICAgY29uc29sZS5lcnJvcihcIk5vIG1vdmllU2xpZGVzIGVsZW1lbnQgZm91bmQhXCIpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbW92aWVzPy5mb3JFYWNoKChtb3ZpZSkgPT4ge1xyXG4gICAgY29uc3Qgc2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2xpZGUuY2xhc3NMaXN0LmFkZChcInNsaWRlXCIpO1xyXG5cclxuICAgIGNvbnN0IG1vdmllUG9zdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIG1vdmllUG9zdGVyLnNyYyA9IG1vdmllLnByaW1hcnlJbWFnZS5pbWFnZVVybDtcclxuICAgIG1vdmllUG9zdGVyLmFsdCA9IG1vdmllLnRpdGxlVGV4dC50ZXh0O1xyXG5cclxuICAgIGNvbnN0IG1vdmllVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBtb3ZpZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtb3ZpZS10aXRsZVwiKTtcclxuICAgIG1vdmllVGl0bGUudGV4dENvbnRlbnQgPSBtb3ZpZS50aXRsZVRleHQudGV4dDtcclxuXHJcbiAgICBjb25zdCBtb3ZpZVJhdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbW92aWVSYXRpbmcuY2xhc3NMaXN0LmFkZChcIm1vdmllLXJhdGluZ1wiKTtcclxuICAgIG1vdmllUmF0aW5nLmlubmVySFRNTCA9IG1vdmllLnJhdGluZ3NTdW1tYXJ5LmFnZ3JlZ2F0ZVJhdGluZyArIFwi4q2QXCI7XHJcblxyXG4gICAgY29uc3QgbW92aWVQbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBtb3ZpZVBsb3QuY2xhc3NMaXN0LmFkZChcIm1vdmllLXBsb3RcIik7XHJcbiAgICBtb3ZpZVBsb3QudGV4dENvbnRlbnQgPSBtb3ZpZS5vdmVydmlldztcclxuXHJcbiAgICBzbGlkZS5hcHBlbmRDaGlsZChtb3ZpZVBvc3Rlcik7XHJcbiAgICBzbGlkZS5hcHBlbmRDaGlsZChtb3ZpZVRpdGxlKTtcclxuICAgIHNsaWRlLmFwcGVuZENoaWxkKG1vdmllUmF0aW5nKTtcclxuICAgIHNsaWRlLmFwcGVuZENoaWxkKG1vdmllUGxvdCk7XHJcblxyXG4gICAgbW92aWVTbGlkZXMuYXBwZW5kQ2hpbGQoc2xpZGUpO1xyXG4gIH0pO1xyXG5cclxuICBsZXQgc2xpZGVJbmRleCA9IDA7XHJcbiAgc2hvd1NsaWRlcygpO1xyXG5cclxuICBmdW5jdGlvbiBzaG93U2xpZGVzKCkge1xyXG4gICAgY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNsaWRlXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuICAgIHNsaWRlSW5kZXgrKztcclxuICAgIGlmIChzbGlkZUluZGV4ID4gc2xpZGVzLmxlbmd0aCkge1xyXG4gICAgICBzbGlkZUluZGV4ID0gMTtcclxuICAgIH1cclxuICAgIHNsaWRlc1tzbGlkZUluZGV4IC0gMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIHNldFRpbWVvdXQoc2hvd1NsaWRlcywgMzAwMCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==