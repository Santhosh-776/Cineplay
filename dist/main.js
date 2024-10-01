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
    padding: 5px;
    display: flex;
    flex-direction: column;
}

.search-bar {
    display: flex;
    align-items: center;
    max-width: 0;
    overflow: hidden;
    background-color: #fff;
    border-radius: 50px;
    transition: max-width 0.4s ease-in-out;
    gap: 10px;
}

.open {
    max-width: 700px;
}

#movie-name {
    flex-grow: 1;
    border: none;
    font-size: 18px;
    color: #003060;
    background-color: transparent;
    padding: 10px;
    outline: none;
    border-radius: 50px;
    width: 100%;
    transition: width 0.5s ease-in-out;
}

#movie-name:focus {
    box-shadow: 0 0 10px rgba(19, 113, 175, 0.2);
    outline: none;
}

.search-bar button {
    background: none;
    border: none;
    cursor: pointer;
    color: #003060;
    font-size: 1.5rem;
    transition: color 0.3s ease;
}

.search-bar button:hover {
    color: #ff6347;
}

#clearInput {
    position: relative;
    font-size: 32px;
    cursor: pointer;
    margin-left: 10px;
    right: 2px;
}

#clearInput:hover {
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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA;IACI,yEAAyE;IACzE,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,sBAAsB;IACtB,mBAAmB;IACnB,sCAAsC;IACtC,SAAS;AACb;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,cAAc;IACd,6BAA6B;IAC7B,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,kCAAkC;AACtC;;AAEA;IACI,4CAA4C;IAC5C,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,cAAc;IACd,iBAAiB;IACjB,2BAA2B;AAC/B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,WAAW;IACX,iBAAiB;IACjB,YAAY;AAChB;;AAEA;;IAEI,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,aAAa;IACb,aAAa;IACb,2DAA2D;IAC3D,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,gDAAgD;IAChD,oBAAoB;IACpB,sBAAsB;IACtB,SAAS;IACT,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,WAAW;AACf;;AAEA;IACI,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,eAAe;IACf,gDAAgD;AACpD;;AAEA;IACI,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI;QACI,YAAY;IAChB;IACA;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,2DAA2D;IAC/D;IACA;QACI,gBAAgB;IACpB;IACA;QACI,WAAW;QACX,WAAW;IACf;AACJ;;AAEA;IACI;QACI,2DAA2D;IAC/D;IACA;QACI,WAAW;QACX,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,0BAA0B;IAC9B;IACA;QACI,WAAW;QACX,aAAa;QACb,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,WAAW;QACX,WAAW;QACX,eAAe;IACnB;AACJ","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n.background-container {\r\n    background: linear-gradient(to right, #003060, #044576, #0e67a2, #1371af);\r\n    padding: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.search-bar {\r\n    display: flex;\r\n    align-items: center;\r\n    max-width: 0;\r\n    overflow: hidden;\r\n    background-color: #fff;\r\n    border-radius: 50px;\r\n    transition: max-width 0.4s ease-in-out;\r\n    gap: 10px;\r\n}\r\n\r\n.open {\r\n    max-width: 700px;\r\n}\r\n\r\n#movie-name {\r\n    flex-grow: 1;\r\n    border: none;\r\n    font-size: 18px;\r\n    color: #003060;\r\n    background-color: transparent;\r\n    padding: 10px;\r\n    outline: none;\r\n    border-radius: 50px;\r\n    width: 100%;\r\n    transition: width 0.5s ease-in-out;\r\n}\r\n\r\n#movie-name:focus {\r\n    box-shadow: 0 0 10px rgba(19, 113, 175, 0.2);\r\n    outline: none;\r\n}\r\n\r\n.search-bar button {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    color: #003060;\r\n    font-size: 1.5rem;\r\n    transition: color 0.3s ease;\r\n}\r\n\r\n.search-bar button:hover {\r\n    color: #ff6347;\r\n}\r\n\r\n#clearInput {\r\n    position: relative;\r\n    font-size: 32px;\r\n    cursor: pointer;\r\n    margin-left: 10px;\r\n    right: 2px;\r\n}\r\n\r\n#clearInput:hover {\r\n    color: #ff6347;\r\n}\r\n\r\n#movie-slides {\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n.slide {\r\n    width: 100%;\r\n    height: 90vh;\r\n    animation-name: fade;\r\n    animation-duration: 1.5s;\r\n}\r\n\r\n.slide img {\r\n    width: 100%;\r\n    height: 90%;\r\n    object-fit: cover;\r\n    opacity: 0.8;\r\n}\r\n\r\n.slide h3,\r\n.slide p {\r\n    color: aliceblue;\r\n    font-size: 2.5vw;\r\n    padding: 8px 12px;\r\n    position: absolute;\r\n    width: 100%;\r\n}\r\n\r\n.slide h3 {\r\n    bottom: 12vh;\r\n}\r\n\r\n.slide p {\r\n    bottom: 6vh;\r\n}\r\n\r\n.movie-plot {\r\n    display: none;\r\n}\r\n\r\n.movie-details {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    margin: 20px auto;\r\n    display: none;\r\n    padding: 50px;\r\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n    gap: 30px;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.results {\r\n    background-color: #fff;\r\n    padding: 20px;\r\n    width: 100%;\r\n    height: 500px;\r\n    border-radius: 10px;\r\n    box-shadow: 3px 3px 12px rgba(65, 148, 250, 0.4);\r\n    display: inline-flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    color: darkolivegreen;\r\n}\r\n\r\n.results img {\r\n    object-fit: cover;\r\n    width: 70%;\r\n    height: 50%;\r\n}\r\n\r\n.icons {\r\n    width: 10vw;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    margin: 20px;\r\n    padding: 10px;\r\n}\r\n\r\n.icons i {\r\n    font-size: 24px;\r\n    color: #f5f5f5;\r\n    cursor: pointer;\r\n    transition: color 0.3s ease, transform 0.3s ease;\r\n}\r\n\r\n.icons i:hover {\r\n    color: #ffcc00;\r\n    transform: scale(1.1);\r\n}\r\n\r\n@keyframes fade {\r\n    from {\r\n        opacity: 0.4;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1370px) {\r\n    .movie-details {\r\n        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n    }\r\n    .movie-overview {\r\n        font-size: 1.2vw;\r\n    }\r\n    #movie-name {\r\n        width: 40vw;\r\n        height: 3vw;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1030px) {\r\n    .movie-details {\r\n        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n    }\r\n    #movie-name {\r\n        width: 45vw;\r\n        height: 3.5vw;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 720px) {\r\n    .movie-details {\r\n        grid-template-columns: 1fr;\r\n    }\r\n    #movie-name {\r\n        width: 50vw;\r\n        height: 4.5vw;\r\n        font-size: 12px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 372px) {\r\n    #movie-name {\r\n        width: 60vw;\r\n        height: 5vw;\r\n        font-size: 10px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixlQUFlO0FBQ3pDLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRLFVBQVUsSUFBSTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx1QkFBdUI7QUFDN0Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLE9BQU87QUFDUDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NpbmVwbGF5Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vY2luZXBsYXkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NpbmVwbGF5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2luZXBsYXkvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2NpbmVwbGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NpbmVwbGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jaW5lcGxheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jaW5lcGxheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jaW5lcGxheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NpbmVwbGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2luZXBsYXkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2luZXBsYXkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2luZXBsYXkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NpbmVwbGF5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2luZXBsYXkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaW5lcGxheS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vY2luZXBsYXkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmJhY2tncm91bmQtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwMzA2MCwgIzA0NDU3NiwgIzBlNjdhMiwgIzEzNzFhZik7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnNlYXJjaC1iYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXgtd2lkdGggMC40cyBlYXNlLWluLW91dDtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5cclxuLm9wZW4ge1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxufVxyXG5cclxuI21vdmllLW5hbWUge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMwMDMwNjA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI21vdmllLW5hbWU6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgxOSwgMTEzLCAxNzUsIDAuMik7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uc2VhcmNoLWJhciBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjMDAzMDYwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5zZWFyY2gtYmFyIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmNjM0NztcclxufVxyXG5cclxuI2NsZWFySW5wdXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICByaWdodDogMnB4O1xyXG59XHJcblxyXG4jY2xlYXJJbnB1dDpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmNjM0NztcclxufVxyXG5cclxuI21vdmllLXNsaWRlcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5zbGlkZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xyXG59XHJcblxyXG4uc2xpZGUgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLnNsaWRlIGgzLFxyXG4uc2xpZGUgcCB7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgZm9udC1zaXplOiAyLjV2dztcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zbGlkZSBoMyB7XHJcbiAgICBib3R0b206IDEydmg7XHJcbn1cclxuXHJcbi5zbGlkZSBwIHtcclxuICAgIGJvdHRvbTogNnZoO1xyXG59XHJcblxyXG4ubW92aWUtcGxvdCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubW92aWUtZGV0YWlscyB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4ucmVzdWx0cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggcmdiYSg2NSwgMTQ4LCAyNTAsIDAuNCk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBjb2xvcjogZGFya29saXZlZ3JlZW47XHJcbn1cclxuXHJcbi5yZXN1bHRzIGltZyB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxufVxyXG5cclxuLmljb25zIHtcclxuICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMjBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5pY29ucyBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjZjVmNWY1O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uaWNvbnMgaTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmY2MwMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzcwcHgpIHtcclxuICAgIC5tb3ZpZS1kZXRhaWxzIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICAgIH1cclxuICAgIC5tb3ZpZS1vdmVydmlldyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJ2dztcclxuICAgIH1cclxuICAgICNtb3ZpZS1uYW1lIHtcclxuICAgICAgICB3aWR0aDogNDB2dztcclxuICAgICAgICBoZWlnaHQ6IDN2dztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAzMHB4KSB7XHJcbiAgICAubW92aWUtZGV0YWlscyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcbiAgICB9XHJcbiAgICAjbW92aWUtbmFtZSB7XHJcbiAgICAgICAgd2lkdGg6IDQ1dnc7XHJcbiAgICAgICAgaGVpZ2h0OiAzLjV2dztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgIC5tb3ZpZS1kZXRhaWxzIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxuICAgICNtb3ZpZS1uYW1lIHtcclxuICAgICAgICB3aWR0aDogNTB2dztcclxuICAgICAgICBoZWlnaHQ6IDQuNXZ3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcycHgpIHtcclxuICAgICNtb3ZpZS1uYW1lIHtcclxuICAgICAgICB3aWR0aDogNjB2dztcclxuICAgICAgICBoZWlnaHQ6IDV2dztcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx5RUFBeUU7SUFDekUsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixzQ0FBc0M7SUFDdEMsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnREFBZ0Q7SUFDaEQsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDJEQUEyRDtJQUMvRDtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDJEQUEyRDtJQUMvRDtJQUNBO1FBQ0ksV0FBVztRQUNYLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFdBQVc7UUFDWCxlQUFlO0lBQ25CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLmJhY2tncm91bmQtY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDAzMDYwLCAjMDQ0NTc2LCAjMGU2N2EyLCAjMTM3MWFmKTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1heC13aWR0aDogMDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogbWF4LXdpZHRoIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9wZW4ge1xcclxcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbW92aWUtbmFtZSB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGNvbG9yOiAjMDAzMDYwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbiNtb3ZpZS1uYW1lOmZvY3VzIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgxOSwgMTEzLCAxNzUsIDAuMik7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFyIGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogIzAwMzA2MDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXIgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICNmZjYzNDc7XFxyXFxufVxcclxcblxcclxcbiNjbGVhcklucHV0IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBmb250LXNpemU6IDMycHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHJpZ2h0OiAycHg7XFxyXFxufVxcclxcblxcclxcbiNjbGVhcklucHV0OmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICNmZjYzNDc7XFxyXFxufVxcclxcblxcclxcbiNtb3ZpZS1zbGlkZXMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogOTB2aDtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlIGgzLFxcclxcbi5zbGlkZSBwIHtcXHJcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjV2dztcXHJcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZSBoMyB7XFxyXFxuICAgIGJvdHRvbTogMTJ2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlIHAge1xcclxcbiAgICBib3R0b206IDZ2aDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXBsb3Qge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtZGV0YWlscyB7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDUwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdHMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IHJnYmEoNjUsIDE0OCwgMjUwLCAwLjQpO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBjb2xvcjogZGFya29saXZlZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5yZXN1bHRzIGltZyB7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb25zIHtcXHJcXG4gICAgd2lkdGg6IDEwdnc7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb25zIGkge1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGNvbG9yOiAjZjVmNWY1O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb25zIGk6aG92ZXIge1xcclxcbiAgICBjb2xvcjogI2ZmY2MwMDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGUge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDAuNDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNzBweCkge1xcclxcbiAgICAubW92aWUtZGV0YWlscyB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXHJcXG4gICAgfVxcclxcbiAgICAubW92aWUtb3ZlcnZpZXcge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjJ2dztcXHJcXG4gICAgfVxcclxcbiAgICAjbW92aWUtbmFtZSB7XFxyXFxuICAgICAgICB3aWR0aDogNDB2dztcXHJcXG4gICAgICAgIGhlaWdodDogM3Z3O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMzBweCkge1xcclxcbiAgICAubW92aWUtZGV0YWlscyB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXHJcXG4gICAgfVxcclxcbiAgICAjbW92aWUtbmFtZSB7XFxyXFxuICAgICAgICB3aWR0aDogNDV2dztcXHJcXG4gICAgICAgIGhlaWdodDogMy41dnc7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcXHJcXG4gICAgLm1vdmllLWRldGFpbHMge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIH1cXHJcXG4gICAgI21vdmllLW5hbWUge1xcclxcbiAgICAgICAgd2lkdGg6IDUwdnc7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQuNXZ3O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MnB4KSB7XFxyXFxuICAgICNtb3ZpZS1uYW1lIHtcXHJcXG4gICAgICAgIHdpZHRoOiA2MHZ3O1xcclxcbiAgICAgICAgaGVpZ2h0OiA1dnc7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5cclxuY29uc3Qga2V5ID0gXCJhYjBlOWIzZVwiO1xyXG5jb25zdCBtb3ZpZVNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW92aWUtc2xpZGVzXCIpO1xyXG5jb25zdCBtb3ZpZU5hbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3ZpZS1uYW1lXCIpO1xyXG5jb25zdCBtb3ZpZURldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vdmllLWRldGFpbHNcIik7XHJcblxyXG5jb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYS1zZWFyY2hcIik7XHJcbmNvbnN0IGhvbWVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYS1ob21lXCIpO1xyXG5cclxuY29uc3Qgbm9SZXN1bHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcclxuXHJcbmNvbnN0IG5vUmVzdWx0c01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbm5vUmVzdWx0c01lc3NhZ2UudGV4dENvbnRlbnQgPSBcIk5vIG1vdmllcyBmb3VuZC4uLlwiO1xyXG5ub1Jlc3VsdHNNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxubm9SZXN1bHRzLmNsYXNzTGlzdC5hZGQoXCJuby1yZXN1bHRzXCIpO1xyXG5jb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5jbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xyXG5ub1Jlc3VsdHMuYXBwZW5kQ2hpbGQobm9SZXN1bHRzTWVzc2FnZSk7XHJcbm5vUmVzdWx0cy5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcbmNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1idXR0b25cIik7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9SZXN1bHRzKTtcclxuXHJcbnNlYXJjaEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1iYXJcIik7XHJcbiAgc2VhcmNoQmFyLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gIG1vdmllTmFtZUVsZW1lbnQuZm9jdXMoKTtcclxufSk7XHJcblxyXG5ob21lSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIG1vdmllRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgbW92aWVTbGlkZXMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICBtb3ZpZU5hbWVFbGVtZW50LnZhbHVlID0gXCJcIjtcclxufSk7XHJcblxyXG5kb2N1bWVudFxyXG4gIC5nZXRFbGVtZW50QnlJZChcImNsZWFySW5wdXRcIilcclxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IChtb3ZpZU5hbWVFbGVtZW50LnZhbHVlID0gXCJcIikpO1xyXG5tb3ZpZU5hbWVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGFzeW5jIChldmVudCkgPT4ge1xyXG4gIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIG1vdmllU2xpZGVzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIG1vdmllRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcbiAgICBtb3ZpZURldGFpbHMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnN0IG1vdmllTmFtZSA9IG1vdmllTmFtZUVsZW1lbnQudmFsdWU7XHJcbiAgICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT0ke2tleX0mcz0ke21vdmllTmFtZX1gO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwpO1xyXG4gICAgY29uc3QgbW92aWVEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2cobW92aWVEYXRhKTtcclxuXHJcbiAgICBpZiAobW92aWVEYXRhLlJlc3BvbnNlID09PSBcIkZhbHNlXCIpIHtcclxuICAgICAgbm9SZXN1bHRzLnNob3dNb2RhbCgpO1xyXG4gICAgICBub1Jlc3VsdHMuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIG5vUmVzdWx0cy5jbG9zZSgpO1xyXG4gICAgICAgIG5vUmVzdWx0cy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbW92aWVEYXRhLlNlYXJjaC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3QgcG9zdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBjb25zdCB0aXRsZU1vdmllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgIGNvbnN0IHJhdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNvbnN0IG1vdmllT3ZlcnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgICAgICAgcmVzdWx0cy5hcHBlbmRDaGlsZChwb3N0ZXIpO1xyXG4gICAgICAgIHJlc3VsdHMuYXBwZW5kQ2hpbGQodGl0bGVNb3ZpZSk7XHJcbiAgICAgICAgcmVzdWx0cy5hcHBlbmRDaGlsZChyYXRpbmcpO1xyXG4gICAgICAgIHJlc3VsdHMuYXBwZW5kQ2hpbGQobW92aWVPdmVydmlldyk7XHJcbiAgICAgICAgbW92aWVEZXRhaWxzLmFwcGVuZENoaWxkKHJlc3VsdHMpO1xyXG5cclxuICAgICAgICByZXN1bHRzLmNsYXNzTGlzdC5hZGQoXCJyZXN1bHRzXCIpO1xyXG4gICAgICAgIHBvc3Rlci5jbGFzc0xpc3QuYWRkKFwicG9zdGVyXCIpO1xyXG4gICAgICAgIHRpdGxlTW92aWUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgICAgIHJhdGluZy5jbGFzc0xpc3QuYWRkKFwicmF0aW5nXCIpO1xyXG4gICAgICAgIG1vdmllT3ZlcnZpZXcuY2xhc3NMaXN0LmFkZChcIm1vdmllLW92ZXJ2aWV3XCIpO1xyXG5cclxuICAgICAgICBpZiAoZWxlbWVudC5Qb3N0ZXIpIHtcclxuICAgICAgICAgIHBvc3Rlci5zcmMgPSBlbGVtZW50LlBvc3RlcjtcclxuICAgICAgICAgIHBvc3Rlci5hbHQgPSBgJHtlbGVtZW50LlRpdGxlfSBwb3N0ZXJgO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwb3N0ZXIuYWx0ID0gXCJObyBwb3N0ZXIgYXZhaWxhYmxlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRpdGxlTW92aWUudGV4dENvbnRlbnQgPSBlbGVtZW50LlRpdGxlO1xyXG4gICAgICAgIGNvbnN0IG1vdmllSWQgPSBlbGVtZW50LmltZGJJRDtcclxuICAgICAgICBmZXRjaChgaHR0cHM6Ly93d3cub21kYmFwaS5jb20vP2k9JHttb3ZpZUlkfSZhcGlrZXk9JHtrZXl9YClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuUmVzcG9uc2UgPT09IFwiVHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgcmF0aW5nLnRleHRDb250ZW50ID0gYCR7ZGF0YS5SYXRpbmdzWzBdPy5WYWx1ZX3irZBgO1xyXG4gICAgICAgICAgICAgIG1vdmllT3ZlcnZpZXcudGV4dENvbnRlbnQgPSBkYXRhLlBsb3Q7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNb3ZpZSBub3QgZm91bmRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICAgICAgXCJUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggdGhlIGZldGNoIG9wZXJhdGlvbjpcIixcclxuICAgICAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIngtcmFwaWRhcGkta2V5XCI6IFwiZGUwYzRkYzA5Y21zaGEyMzU3ODg4MGExM2NiY3AxMDIwM2Rqc25kMzMzNDgyYjExODBcIixcclxuICAgICAgICBcIngtcmFwaWRhcGktaG9zdFwiOiBcImltZGIxODgucC5yYXBpZGFwaS5jb21cIixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBcImh0dHBzOi8vaW1kYjE4OC5wLnJhcGlkYXBpLmNvbS9hcGkvdjEvZ2V0V2Vla1RvcDEwXCIsXHJcbiAgICAgIG9wdGlvbnNcclxuICAgICk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XHJcbiAgICBjb25zdCBoaWdoUmF0ZWRNb3ZpZXMgPSByZXN1bHQuZGF0YTtcclxuICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XHJcbiAgICBjcmVhdGVTbGlkZXMoaGlnaFJhdGVkTW92aWVzKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlU2xpZGVzKG1vdmllcykge1xyXG4gIGlmICghbW92aWVTbGlkZXMpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJObyBtb3ZpZVNsaWRlcyBlbGVtZW50IGZvdW5kIVwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIG1vdmllcz8uZm9yRWFjaCgobW92aWUpID0+IHtcclxuICAgIGNvbnN0IHNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNsaWRlLmNsYXNzTGlzdC5hZGQoXCJzbGlkZVwiKTtcclxuXHJcbiAgICBjb25zdCBtb3ZpZVBvc3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBtb3ZpZVBvc3Rlci5zcmMgPSBtb3ZpZS5wcmltYXJ5SW1hZ2UuaW1hZ2VVcmw7XHJcbiAgICBtb3ZpZVBvc3Rlci5hbHQgPSBtb3ZpZS50aXRsZVRleHQudGV4dDtcclxuXHJcbiAgICBjb25zdCBtb3ZpZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgbW92aWVUaXRsZS5jbGFzc0xpc3QuYWRkKFwibW92aWUtdGl0bGVcIik7XHJcbiAgICBtb3ZpZVRpdGxlLnRleHRDb250ZW50ID0gbW92aWUudGl0bGVUZXh0LnRleHQ7XHJcblxyXG4gICAgY29uc3QgbW92aWVSYXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIG1vdmllUmF0aW5nLmNsYXNzTGlzdC5hZGQoXCJtb3ZpZS1yYXRpbmdcIik7XHJcbiAgICBtb3ZpZVJhdGluZy5pbm5lckhUTUwgPSBtb3ZpZS5yYXRpbmdzU3VtbWFyeS5hZ2dyZWdhdGVSYXRpbmcgKyBcIuKtkFwiO1xyXG5cclxuICAgIGNvbnN0IG1vdmllUGxvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbW92aWVQbG90LmNsYXNzTGlzdC5hZGQoXCJtb3ZpZS1wbG90XCIpO1xyXG4gICAgbW92aWVQbG90LnRleHRDb250ZW50ID0gbW92aWUub3ZlcnZpZXc7XHJcblxyXG4gICAgc2xpZGUuYXBwZW5kQ2hpbGQobW92aWVQb3N0ZXIpO1xyXG4gICAgc2xpZGUuYXBwZW5kQ2hpbGQobW92aWVUaXRsZSk7XHJcbiAgICBzbGlkZS5hcHBlbmRDaGlsZChtb3ZpZVJhdGluZyk7XHJcbiAgICBzbGlkZS5hcHBlbmRDaGlsZChtb3ZpZVBsb3QpO1xyXG5cclxuICAgIG1vdmllU2xpZGVzLmFwcGVuZENoaWxkKHNsaWRlKTtcclxuICB9KTtcclxuXHJcbiAgbGV0IHNsaWRlSW5kZXggPSAwO1xyXG4gIHNob3dTbGlkZXMoKTtcclxuXHJcbiAgZnVuY3Rpb24gc2hvd1NsaWRlcygpIHtcclxuICAgIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzbGlkZVwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgICBzbGlkZUluZGV4Kys7XHJcbiAgICBpZiAoc2xpZGVJbmRleCA+IHNsaWRlcy5sZW5ndGgpIHtcclxuICAgICAgc2xpZGVJbmRleCA9IDE7XHJcbiAgICB9XHJcbiAgICBzbGlkZXNbc2xpZGVJbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBzZXRUaW1lb3V0KHNob3dTbGlkZXMsIDMwMDApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=