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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  background-color: #423e3e;
  font-family: "Roboto", sans-serif;
}

/* Header section */

.header {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Main section */

.main {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 150px);
}

.project-element {
  display: flex;
  gap: 1rem;
  background-color: red;
}

.task-element {
  display: flex;
  gap: 1rem;
  background-color: blue;
}

/* Footer section */

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}

.fa-github::before {
  content: "\\f09b";
  color: #fff;
}

/* Overlay */

.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  margin: 0 auto;
}

.overlay.hidden {
  display: none;
}

/* Modals */

.modal-edit-project,
.modal-edit-task {
  display: none;
  z-index: 1;
  position: relative;
  margin: 0 auto;
  max-width: 400px;
  background-color: gray;
}

.modal-edit-content-container-task {
  display: flex;
  flex-direction: column;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,YAAY;EACZ,yBAAyB;EACzB,iCAAiC;AACnC;;AAEA,mBAAmB;;AAEnB;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,iBAAiB;;AAEjB;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,SAAS;EACT,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,sBAAsB;AACxB;;AAEA,mBAAmB;;AAEnB;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA,YAAY;;AAEZ;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,0CAA0C;EAC1C,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA,WAAW;;AAEX;;EAEE,aAAa;EACb,UAAU;EACV,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n  background-color: #423e3e;\n  font-family: \"Roboto\", sans-serif;\n}\n\n/* Header section */\n\n.header {\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Main section */\n\n.main {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 150px);\n}\n\n.project-element {\n  display: flex;\n  gap: 1rem;\n  background-color: red;\n}\n\n.task-element {\n  display: flex;\n  gap: 1rem;\n  background-color: blue;\n}\n\n/* Footer section */\n\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n}\n\n.fa-github::before {\n  content: \"\\f09b\";\n  color: #fff;\n}\n\n/* Overlay */\n\n.overlay {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.8);\n  margin: 0 auto;\n}\n\n.overlay.hidden {\n  display: none;\n}\n\n/* Modals */\n\n.modal-edit-project,\n.modal-edit-task {\n  display: none;\n  z-index: 1;\n  position: relative;\n  margin: 0 auto;\n  max-width: 400px;\n  background-color: gray;\n}\n\n.modal-edit-content-container-task {\n  display: flex;\n  flex-direction: column;\n}\n"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./src/controllers/controller.js":
/*!***************************************!*\
  !*** ./src/controllers/controller.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDefaultProject: () => (/* binding */ addDefaultProject),
/* harmony export */   addListeners: () => (/* binding */ addListeners),
/* harmony export */   createProject: () => (/* reexport safe */ _modules_projectFactory__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   createProjectElement: () => (/* reexport safe */ _views_view__WEBPACK_IMPORTED_MODULE_3__.createProjectElement),
/* harmony export */   createTask: () => (/* reexport safe */ _modules_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _modules_taskFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/taskFactory */ "./src/modules/taskFactory.js");
/* harmony import */ var _modules_projectFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/projectFactory */ "./src/modules/projectFactory.js");
/* harmony import */ var _models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/model */ "./src/models/model.js");
/* harmony import */ var _views_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/view */ "./src/views/view.js");





const addTodo = () => {
  const form = (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.getElement)(".task-form");
  const titleInput = (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.getElement)('[name="task"]');
  const descriptionInput = (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.getElement)('[name="description"]');
  const dateInput = (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.getElement)('[name="date"]');
  const colorInput = (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.getElement)('[name="colors"]');

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const project = (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)();

    const task = (0,_modules_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(
      titleInput.value,
      descriptionInput.value,
      dateInput.value,
      colorInput.value,
      project
    );

    (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.addTaskToProjectTasks)(project, task);
    (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.renderTasksFromCurrentProject)();

    (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)();
    form.reset();
  });
};

const addProject = () => {
  const form = (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.getElement)(".project-form");
  const titleInput = (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.getElement)('[name="project-title"]');

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (titleInput.value === "Default") {
      alert("Use other name!");
      form.reset();
      return;
    }

    const project = (0,_modules_projectFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(titleInput.value);
    (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.addProjectToProjectList)(project);
    (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.createProjectElement)(project);

    (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)();

    form.reset();
  });
};

const addDefaultProject = () => {
  const projectListData = JSON.parse(localStorage.getItem("projectList"));
  if (Array.isArray(projectListData)) {
    const defaultProjectExists = projectListData.some(
      (projectData) => projectData.title === "Default"
    );

    if (defaultProjectExists) {
      return;
    }
  }

  const temp = (0,_modules_projectFactory__WEBPACK_IMPORTED_MODULE_1__["default"])("Default");
  (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.addProjectToProjectList)(temp);
  (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.createDefaultProjectElement)(temp);
  (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.setCurrentProject)(temp.getId());
};

const selectProjectIdOnClick = (e) => {
  const projectId = e.target.dataset.projectId;
  (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.setCurrentProject)(projectId);
  (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.renderTasksFromCurrentProject)();
};

const selectTaskIdOnClick = (e) => {
  const taskId = e.target.dataset.taskId;
  (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.setCurrentTaskId)(taskId);
};

const removeProjectOnClick = (e) => {
  const projectId = e.target.dataset.projectId;
  (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.removeProjectFromProjectList)(projectId);
  (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.setCurrentProject)(_models_model__WEBPACK_IMPORTED_MODULE_2__.projectList[0].getId());
  (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.renderProjectsFromProjectList)();
  (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.renderTasksFromCurrentProject)();
  (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)();
};

const removeTaskOnClick = (e) => {
  const projectId = (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.getCurrentProjectId)();
  const taskId = e.target.dataset.taskId;

  (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.removeTaskFromProjectTasks)(projectId, taskId);
  (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.renderTasksFromCurrentProject)();
  (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)();
};

const changeOverlayState = () => {
  const overlay = document.querySelector(".overlay");
  overlay.classList.toggle("hidden");
};

const showProjectModal = (e) => {
  const projectModal = document.querySelector(".modal-edit-project");

  changeOverlayState();
  projectModal.style.display = "block";

  selectProjectIdOnClick(e);
};

const showTaskModal = (e) => {
  const taskModal = document.querySelector(".modal-edit-task");

  changeOverlayState();
  taskModal.style.display = "block";
  selectTaskIdOnClick(e);
};

const closeModals = (e) => {
  const projectModal = document.querySelector(".modal-edit-project");
  const taskModal = document.querySelector(".modal-edit-task");
  const overlay = document.querySelector(".overlay");

  if (
    e.target === overlay ||
    e.target.classList.contains("modal-edit-cbutton")
  ) {
    changeOverlayState();
    projectModal.style.display = "none";
    taskModal.style.display = "none";
  }
};

const clearTaskEditInputs = () => {
  const overlay = document.querySelector(".overlay");
  const taskModal = document.querySelector(".modal-edit-task");
  const editTitleInput = (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.getElement)(".modal-title-input-task");
  const editDescInput = (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.getElement)(".modal-desc-input-task");
  const editDateInput = (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.getElement)('[name="date-edit"]');

  editTitleInput.value = "";
  editDescInput.value = "";
  editDateInput.value = "";
  taskModal.style.display = "none";
  overlay.classList.add("hidden");
};

const editProjectTitle = (e) => {
  const projectModal = document.querySelector(".modal-edit-project");
  const editInput = document.querySelector(".modal-edit-input");

  if (editInput.value === "Default") {
    alert("Use other name!");
    editInput.value = "";
    return;
  }

  (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)().setTitle(editInput.value);
  (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.renderProjectsFromProjectList)();

  if (editInput.value !== "") {
    changeOverlayState();
    editInput.value = "";
    projectModal.style.display = "none";
  }

  (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)();
};

const editTaskDetails = (e) => {
  const editTitleInput = (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.getElement)(".modal-title-input-task");
  const editDescInput = (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.getElement)(".modal-desc-input-task");
  const editDateInput = (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.getElement)('[name="date-edit"]');
  const editColorInput = (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.getElement)('[name="colors-edit"]');

  const taskId = (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.getCurrentTaskId)();

  const task = (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.getTaskById)((0,_models_model__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)(), taskId);

  task.setTitle(editTitleInput.value);
  task.setDescription(editDescInput.value);
  task.setDueDate(editDateInput.value);
  task.setPriority(editColorInput.value);

  (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.renderTasksFromCurrentProject)();

  clearTaskEditInputs();
  (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)();
};

const handleClicks = (e) => {
  if (e.target.classList.contains("project-element")) {
    selectProjectIdOnClick(e);
  } else if (e.target.classList.contains("project-remove")) {
    removeProjectOnClick(e);
  } else if (e.target.classList.contains("project-edit")) {
    showProjectModal(e);
  } else if (e.target.classList.contains("task-remove")) {
    removeTaskOnClick(e);
  } else if (e.target.classList.contains("task-edit")) {
    showTaskModal(e);
  } else if (e.target.classList.contains("modal-edit-ebutton")) {
    editProjectTitle(e);
  } else if (e.target.classList.contains("modal-edit-ebutton-task")) {
    editTaskDetails(e);
  } else if (e.currentTarget.classList.contains("overlay")) {
    closeModals(e);
  }
};

const addTaskListeners = () => {
  const taskList = document.querySelector(".task-list");
  taskList.addEventListener("click", handleClicks);
};

const addProjectListeners = () => {
  const projects = document.querySelector(".project-list");
  projects.addEventListener("click", handleClicks);
};

const addOverlayListeners = () => {
  const overlay = document.querySelector(".overlay");
  overlay.addEventListener("click", handleClicks);
};

const addEditProjectModalListeners = () => {
  const editModal = document.querySelector(".modal-edit-project");
  editModal.addEventListener("click", handleClicks);
};

const addEditTaskModalListeners = () => {
  const editModal = document.querySelector(".modal-edit-ebutton-task");
  editModal.addEventListener("click", handleClicks);
};

const addListeners = () => {
  addTodo();
  addProject();
  addProjectListeners();
  addTaskListeners();
  addOverlayListeners();
  addEditProjectModalListeners();
  addEditTaskModalListeners();
};




/***/ }),

/***/ "./src/models/model.js":
/*!*****************************!*\
  !*** ./src/models/model.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectToProjectList: () => (/* binding */ addProjectToProjectList),
/* harmony export */   addTaskToProjectTasks: () => (/* binding */ addTaskToProjectTasks),
/* harmony export */   getCurrentProject: () => (/* binding */ getCurrentProject),
/* harmony export */   getCurrentProjectId: () => (/* binding */ getCurrentProjectId),
/* harmony export */   getCurrentTaskId: () => (/* binding */ getCurrentTaskId),
/* harmony export */   getTaskById: () => (/* binding */ getTaskById),
/* harmony export */   initLocalStorage: () => (/* binding */ initLocalStorage),
/* harmony export */   projectList: () => (/* binding */ projectList),
/* harmony export */   removeProjectFromProjectList: () => (/* binding */ removeProjectFromProjectList),
/* harmony export */   removeTaskFromProjectTasks: () => (/* binding */ removeTaskFromProjectTasks),
/* harmony export */   setCurrentProject: () => (/* binding */ setCurrentProject),
/* harmony export */   setCurrentTaskId: () => (/* binding */ setCurrentTaskId),
/* harmony export */   updateLocalStorage: () => (/* binding */ updateLocalStorage)
/* harmony export */ });
/* harmony import */ var _views_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/view */ "./src/views/view.js");
/* harmony import */ var _controllers_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/controller */ "./src/controllers/controller.js");


const projectList = [];
let currentProject = "";
let currentTaskId = "";

const addTaskToProjectTasks = (project, task) => {
  project.tasks.push(task);
};

const removeTaskFromProjectTasks = (projectId, taskId) => {
  const project = getProjectById(projectId);
  const task = getTaskById(project, taskId);

  project.tasks.splice(task, 1);

  project.tasks.forEach((task) => {
    console.log(task.getInfo());
  });
};

const addProjectToProjectList = (project) => {
  projectList.push(project);
};

const removeProjectFromProjectList = (projectId) => {
  const projectToRemove = getProjectById(projectId);

  const projectIndex = projectList.indexOf(projectToRemove);
  projectList.splice(projectIndex, 1);

  (0,_views_view__WEBPACK_IMPORTED_MODULE_0__.printProjectsFromProjectList)();
};

const setCurrentProject = (id) => {
  currentProject = getProjectById(id);
  return currentProject;
};

const getCurrentProject = () => {
  return currentProject;
};

const getCurrentProjectId = () => {
  return currentProject.getId();
};

const getProjectById = (projectId) => {
  return projectList.find((project) => project.getId() === projectId);
};

const setCurrentTaskId = (taskId) => {
  currentTaskId = taskId;
};

const getCurrentTaskId = () => {
  return currentTaskId;
};

const getTaskById = (project, taskId) => {
  return project.tasks.find((task) => task.getId() === taskId);
};

const updateLocalStorage = () => {
  const projectListData = projectList.map((project) => ({
    id: project.getId(),
    tasks: serializeProjectTasks(project),
    title: project.getTitle(),
  }));

  localStorage.setItem("projectList", JSON.stringify(projectListData));
};

const serializeTask = (task) => {
  return {
    id: task.getId(),
    title: task.getTitle(),
    description: task.getDescription(),
    dueDate: task.getDueDate(),
    priority: task.getPriority(),
  };
};

const deserializeTask = (taskData, project) => {
  const task = (0,_controllers_controller__WEBPACK_IMPORTED_MODULE_1__.createTask)(
    taskData.title,
    taskData.description,
    taskData.dueDate,
    taskData.priority,
    project
  );
  task.setId(taskData.id);

  return task;
};

const serializeProjectTasks = (project) => {
  return project.tasks.map((task) => serializeTask(task));
};

const initLocalStorage = () => {
  const projectListData = JSON.parse(localStorage.getItem("projectList"));

  if (Array.isArray(projectListData)) {
    projectListData.forEach((projectData) => {
      const project = (0,_controllers_controller__WEBPACK_IMPORTED_MODULE_1__.createProject)(projectData.title);
      project.setId(projectData.id);

      const tasks = projectData.tasks.map((taskData) =>
        deserializeTask(taskData, project)
      );

      tasks.forEach((task) => addTaskToProjectTasks(project, task));
      addProjectToProjectList(project);
      (0,_controllers_controller__WEBPACK_IMPORTED_MODULE_1__.createProjectElement)(project);
    });
  }
};




/***/ }),

/***/ "./src/modules/projectFactory.js":
/*!***************************************!*\
  !*** ./src/modules/projectFactory.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createProject = (title) => {
  const tasks = [];
  let id = new Date().getTime().toString();

  const setId = (value) => {
    if (value) {
      id = value;
    }
  };

  const getId = () => id;

  const getTitle = () => title;

  const setTitle = (value) => {
    if (value) {
      title = value;
    }
  };

  const getInfo = () => {
    return `Id: ${getId()}, title: ${title}`;
  };

  return {
    tasks,
    getId,
    getTitle,
    getInfo,
    setTitle,
    setId,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);


/***/ }),

/***/ "./src/modules/taskFactory.js":
/*!************************************!*\
  !*** ./src/modules/taskFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createTask = (title, description, dueDate, priority, project) => {
  let id = new Date().getTime().toString();
  const getId = () => id;

  const getProjectId = () => project.getId();

  const getTitle = () => title;

  const getDescription = () => description;

  const getDueDate = () => dueDate;

  const getPriority = () => priority;

  const setTitle = (value) => {
    if (value) {
      title = value;
    }
  };

  const setDescription = (value) => {
    if (value) {
      description = value;
    }
  };

  const setDueDate = (value) => {
    if (value) {
      dueDate = value;
    }
  };

  const setPriority = (value) => {
    if (value) {
      priority = value;
    }
  };

  const setId = (value) => {
    if (value) {
      id = value;
    }
  };

  const getInfo = () => {
    return `Id: ${getId()}, title: ${title}, description: ${description}, dueDate: ${dueDate}, priority: ${priority}`;
  };

  return {
    getId,
    getProjectId,
    getInfo,
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    setId,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);


/***/ }),

/***/ "./src/views/view.js":
/*!***************************!*\
  !*** ./src/views/view.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDefaultProjectElement: () => (/* binding */ createDefaultProjectElement),
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createProjectElement: () => (/* binding */ createProjectElement),
/* harmony export */   createTaskElement: () => (/* binding */ createTaskElement),
/* harmony export */   getElement: () => (/* binding */ getElement),
/* harmony export */   getInitPage: () => (/* binding */ getInitPage),
/* harmony export */   printProjectsFromProjectList: () => (/* binding */ printProjectsFromProjectList),
/* harmony export */   printTasksFromProject: () => (/* binding */ printTasksFromProject),
/* harmony export */   renderProjectsFromProjectList: () => (/* binding */ renderProjectsFromProjectList),
/* harmony export */   renderTasksFromCurrentProject: () => (/* binding */ renderTasksFromCurrentProject)
/* harmony export */ });
/* harmony import */ var _controllers_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/controller */ "./src/controllers/controller.js");
/* harmony import */ var _models_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/model */ "./src/models/model.js");



const printTasksFromProject = (project) => {
  project.tasks.forEach((ele) => console.log(ele.getInfo()));
};

const printProjectsFromProjectList = () => {
  for (const project of _models_model__WEBPACK_IMPORTED_MODULE_1__.projectList) {
    console.log(project.getInfo());
  }
};

const createElement = (tag, className) => {
  const element = document.createElement(tag);

  if (className) {
    element.classList.add(className);
  }

  return element;
};

const getElement = (selector) => {
  return document.querySelector(selector);
};

const createTaskForm = () => {
  const form = createElement("form");
  form.className = "task-form";

  const title = createElement("input");
  title.type = "text";
  title.placeholder = "Add task";
  title.name = "task";

  const description = createElement("input");
  description.type = "text";
  description.placeholder = "Description";
  description.name = "description";

  const date = createElement("input");
  date.type = "date";
  date.name = "date";

  const colors = createElement("select");
  colors.name = "colors";

  const red = createElement("option");
  red.value = "red";
  red.textContent = "red";
  const yellow = createElement("option");
  yellow.value = "yellow";
  yellow.textContent = "yellow";
  const green = createElement("option");
  green.value = "green";
  green.textContent = "green";

  colors.append(red, yellow, green);

  const submitButton = createElement("button", "submit-button");
  submitButton.textContent = "Add task";

  form.append(title, description, date, colors, submitButton);

  return form;
};

const createProjectForm = () => {
  const form = createElement("form");
  form.className = "project-form";

  const title = createElement("input");
  title.type = "text";
  title.placeholder = "Project name";
  title.name = "project-title";

  const submitButton = createElement("button", "submit-button");
  submitButton.textContent = "Submit";

  form.append(title, submitButton);

  return form;
};

const createTaskList = () => {
  const taskList = createElement("div", "task-list");
  return taskList;
};

const createProjectList = () => {
  const projectList = createElement("div", "project-list");
  return projectList;
};

const createProjectElement = (project) => {
  const projectList = getElement(".project-list");

  const projectElement = createElement("div");
  projectElement.classList.add("project-element");
  projectElement.dataset.projectId = project.getId();

  const projectTitle = createElement("p");
  projectTitle.classList.add("project-title");
  projectTitle.classList.add("project-element");
  projectTitle.textContent = project.getTitle();
  projectTitle.dataset.projectId = project.getId();

  projectElement.append(projectTitle);

  if (project.getTitle() !== "Default") {
    const projectEdit = createElement("button");
    projectEdit.classList.add("project-edit");
    projectEdit.textContent = "Edit";
    projectEdit.dataset.projectId = project.getId();

    const projectRemove = createElement("button");
    projectRemove.classList.add("project-remove");
    projectRemove.textContent = "Remove";
    projectRemove.dataset.projectId = project.getId();

    projectElement.append(projectEdit, projectRemove);
  }

  projectList.append(projectElement);
};

const createDefaultProjectElement = (project) => {
  const projectList = getElement(".project-list");

  const projectElement = createElement("div");
  projectElement.classList.add("project-element");
  projectElement.dataset.projectId = project.getId();

  const projectTitle = createElement("p");
  projectTitle.classList.add("project-title");
  projectTitle.classList.add("project-element");
  projectTitle.textContent = project.getTitle();
  projectTitle.dataset.projectId = project.getId();

  projectElement.append(projectTitle);
  projectList.append(projectElement);
};

const editProjectModal = () => {
  const projectModal = createElement("div", "modal-edit-project");

  const titleContainer = createElement("div", "modal-edit-title-container");

  const h1 = createElement("h1", "modal-edit-title");
  h1.textContent = "Edit project";

  const contentContainer = createElement("div", "modal-edit-content-container");

  const label = createElement("label", "modal-edit-label");
  label.setAttribute("for", "modal-title");
  label.textContent = "Title";

  const input = createElement("input", "modal-edit-input");
  input.setAttribute("name", "modal-title");
  input.setAttribute("id", "modal-title");

  const buttonContainer = createElement("div", "modal-edit-button-container");

  const cancelButton = createElement("button", "modal-edit-cbutton");
  cancelButton.textContent = "Cancel";

  const editButton = createElement("button", "modal-edit-ebutton");
  editButton.textContent = "Edit";

  titleContainer.append(h1);
  contentContainer.append(label, input);
  buttonContainer.append(cancelButton, editButton);
  projectModal.append(titleContainer, contentContainer, buttonContainer);

  return projectModal;
};

const editTaskModal = () => {
  const taskModal = createElement("div", "modal-edit-task");

  const titleContainer = createElement(
    "div",
    "modal-edit-title-container-task"
  );

  const h1 = createElement("h1", "modal-edit-title-task");
  h1.textContent = "Edit task";

  const contentContainer = createElement(
    "div",
    "modal-edit-content-container-task"
  );

  const labelTitle = createElement("label", "modal-edit-label-task");
  labelTitle.setAttribute("for", "modal-title-task");
  labelTitle.textContent = "Title";

  const inputTitle = createElement("input", "modal-title-input-task");
  inputTitle.setAttribute("name", "modal-title-task");
  inputTitle.setAttribute("id", "modal-title-task");

  const labelDescription = createElement("label", "modal-edit-label-task");
  labelDescription.setAttribute("for", "modal-description-task");
  labelDescription.textContent = "Description";

  const inputDescription = createElement("input", "modal-desc-input-task");
  inputDescription.setAttribute("name", "modal-description-task");
  inputDescription.setAttribute("id", "modal-description-task");

  const date = createElement("input");
  date.type = "date";
  date.name = "date-edit";

  const colors = createElement("select");
  colors.name = "colors-edit";

  const red = createElement("option");
  red.value = "red";
  red.textContent = "red";
  const yellow = createElement("option");
  yellow.value = "yellow";
  yellow.textContent = "yellow";
  const green = createElement("option");
  green.value = "green";
  green.textContent = "green";

  colors.append(red, yellow, green);

  const buttonContainer = createElement("div", "modal-edit-button-container");

  const cancelButton = createElement("button", "modal-edit-cbutton");
  cancelButton.textContent = "Cancel";

  const editButton = createElement("button", "modal-edit-ebutton-task");
  editButton.textContent = "Edit";

  titleContainer.append(h1);
  contentContainer.append(
    labelTitle,
    inputTitle,
    labelDescription,
    inputDescription,
    date,
    colors
  );
  buttonContainer.append(cancelButton, editButton);
  taskModal.append(titleContainer, contentContainer, buttonContainer);

  return taskModal;
};

const createTaskElement = (task) => {
  const taskList = getElement(".task-list");

  const taskElement = createElement("div");
  taskElement.classList.add("task-element");
  taskElement.dataset.taskId = task.getId();

  const taskTitle = createElement("p");
  taskTitle.classList.add("task-title");
  taskTitle.textContent = task.getTitle();
  taskTitle.dataset.taskId = task.getId();

  const taskDesc = createElement("p");
  taskDesc.classList.add("task-desc");
  taskDesc.textContent = task.getDescription();
  taskDesc.dataset.taskId = task.getId();

  const taskDate = createElement("p");
  taskDate.classList.add("task-date");
  taskDate.textContent = task.getDueDate();
  taskDate.dataset.taskId = task.getId();

  const taskPriority = createElement("p");
  taskPriority.classList.add("task-priority");
  taskPriority.textContent = task.getPriority();
  taskPriority.dataset.taskId = task.getId();

  const currentProjectId = task.getProjectId();
  taskElement.dataset.projectId = currentProjectId;

  const taskEdit = createElement("button");
  taskEdit.classList.add("task-edit");
  taskEdit.textContent = "Edit";
  taskEdit.dataset.taskId = task.getId();

  const taskRemove = createElement("button");
  taskRemove.classList.add("task-remove");
  taskRemove.textContent = "Remove";
  taskRemove.dataset.taskId = task.getId();

  taskElement.append(
    taskTitle,
    taskDesc,
    taskDate,
    taskPriority,
    taskEdit,
    taskRemove
  );
  taskList.append(taskElement);
};

const renderTasksFromCurrentProject = () => {
  const currentProject = (0,_models_model__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)();
  let taskListHtml = getElement(".task-list");
  taskListHtml.innerHTML = "";

  currentProject.tasks.forEach((task) => {
    createTaskElement(task);
  });
};

const renderProjectsFromProjectList = () => {
  const projectListDOM = getElement(".project-list");
  projectListDOM.innerHTML = "";

  _models_model__WEBPACK_IMPORTED_MODULE_1__.projectList.forEach((project) => {
    if (project.getTitle() === "Default") {
      createDefaultProjectElement(project);
    } else {
      createProjectElement(project);
    }
  });
};

const createHeader = () => {
  const header = createElement("header", "header");

  const h1 = createElement("h1", "title");
  h1.textContent = "To-Do List";

  header.appendChild(h1);
  return header;
};

const createMain = () => {
  const main = createElement("main", "main");

  const h1 = createElement("h1");
  h1.textContent = "Todos";

  main.append(
    createProjectForm(),
    createProjectList(),
    h1,
    createTaskForm(),
    createTaskList()
  );
  return main;
};

const createFooter = () => {
  const footer = createElement("footer", "footer");

  const p = createElement("p", "author");
  p.textContent = "Coded by Ariech";

  const githubLink = createElement("a", "github-link");
  githubLink.href = "https://github.com/Ariech";
  githubLink.setAttribute("target", "_blank");

  const githubIcon = createElement("i", "github-icon");
  githubIcon.classList.add("fa-brands");
  githubIcon.classList.add("fa-github");

  githubLink.appendChild(githubIcon);
  footer.append(p, githubLink);
  return footer;
};

const createModalOverlay = () => {
  const overlay = createElement("div", "overlay");
  overlay.classList.add("hidden");

  overlay.append(editProjectModal());
  overlay.append(editTaskModal());

  return overlay;
};

const getInitPage = () => {
  const body = getElement("body");

  const container = createElement("div", "container");
  body.appendChild(container);

  container.appendChild(createHeader());
  container.appendChild(createMain());
  container.appendChild(createFooter());
  container.appendChild(createModalOverlay());

  (0,_controllers_controller__WEBPACK_IMPORTED_MODULE_0__.addListeners)();
  (0,_controllers_controller__WEBPACK_IMPORTED_MODULE_0__.addDefaultProject)();
  editProjectModal();
  (0,_models_model__WEBPACK_IMPORTED_MODULE_1__.initLocalStorage)();
};




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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _views_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/view */ "./src/views/view.js");



(0,_views_view__WEBPACK_IMPORTED_MODULE_1__.getInitPage)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixnRUFBaUI7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLHNEQUFXO0FBQ2I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLHFFQUFZO0FBQ2QsRUFBRSwwRUFBaUI7QUFDbkI7QUFDQSxFQUFFLCtEQUFnQjtBQUNsQjs7QUFhRTs7Ozs7OztVQzdaRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNxQjs7QUFFM0Msd0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kZWxzL21vZGVsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy92aWV3cy92aWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjNlM2U7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4vKiBIZWFkZXIgc2VjdGlvbiAqL1xuXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIE1haW4gc2VjdGlvbiAqL1xuXG4ubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KTtcbn1cblxuLnByb2plY3QtZWxlbWVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4udGFzay1lbGVtZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4vKiBGb290ZXIgc2VjdGlvbiAqL1xuXG4uZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmZhLWdpdGh1Yjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZjA5YlwiO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogT3ZlcmxheSAqL1xuXG4ub3ZlcmxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm92ZXJsYXkuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogTW9kYWxzICovXG5cbi5tb2RhbC1lZGl0LXByb2plY3QsXG4ubW9kYWwtZWRpdC10YXNrIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cblxuLm1vZGFsLWVkaXQtY29udGVudC1jb250YWluZXItdGFzayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixpQ0FBaUM7QUFDbkM7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBLFlBQVk7O0FBRVo7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLDBDQUEwQztFQUMxQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLFdBQVc7O0FBRVg7O0VBRUUsYUFBYTtFQUNiLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyM2UzZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogSGVhZGVyIHNlY3Rpb24gKi9cXG5cXG4uaGVhZGVyIHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBNYWluIHNlY3Rpb24gKi9cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KTtcXG59XFxuXFxuLnByb2plY3QtZWxlbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4udGFzay1lbGVtZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4vKiBGb290ZXIgc2VjdGlvbiAqL1xcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLmZhLWdpdGh1Yjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5YlxcXCI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLyogT3ZlcmxheSAqL1xcblxcbi5vdmVybGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm92ZXJsYXkuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIE1vZGFscyAqL1xcblxcbi5tb2RhbC1lZGl0LXByb2plY3QsXFxuLm1vZGFsLWVkaXQtdGFzayB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5tb2RhbC1lZGl0LWNvbnRlbnQtY29udGFpbmVyLXRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjcmVhdGVUYXNrIGZyb20gXCIuLi9tb2R1bGVzL3Rhc2tGYWN0b3J5XCI7XG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi4vbW9kdWxlcy9wcm9qZWN0RmFjdG9yeVwiO1xuaW1wb3J0IHtcbiAgYWRkVGFza1RvUHJvamVjdFRhc2tzLFxuICBhZGRQcm9qZWN0VG9Qcm9qZWN0TGlzdCxcbiAgZ2V0Q3VycmVudFByb2plY3QsXG4gIHNldEN1cnJlbnRQcm9qZWN0LFxuICByZW1vdmVQcm9qZWN0RnJvbVByb2plY3RMaXN0LFxuICByZW1vdmVUYXNrRnJvbVByb2plY3RUYXNrcyxcbiAgcHJvamVjdExpc3QsXG4gIGdldEN1cnJlbnRQcm9qZWN0SWQsXG4gIGdldFRhc2tCeUlkLFxuICBzZXRDdXJyZW50VGFza0lkLFxuICBnZXRDdXJyZW50VGFza0lkLFxuICB1cGRhdGVMb2NhbFN0b3JhZ2UsXG59IGZyb20gXCIuLi9tb2RlbHMvbW9kZWxcIjtcbmltcG9ydCB7XG4gIGdldEVsZW1lbnQsXG4gIGNyZWF0ZVByb2plY3RFbGVtZW50LFxuICByZW5kZXJUYXNrc0Zyb21DdXJyZW50UHJvamVjdCxcbiAgcmVuZGVyUHJvamVjdHNGcm9tUHJvamVjdExpc3QsXG4gIGNyZWF0ZURlZmF1bHRQcm9qZWN0RWxlbWVudCxcbn0gZnJvbSBcIi4uL3ZpZXdzL3ZpZXdcIjtcblxuY29uc3QgYWRkVG9kbyA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGdldEVsZW1lbnQoXCIudGFzay1mb3JtXCIpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZ2V0RWxlbWVudCgnW25hbWU9XCJ0YXNrXCJdJyk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBnZXRFbGVtZW50KCdbbmFtZT1cImRlc2NyaXB0aW9uXCJdJyk7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGdldEVsZW1lbnQoJ1tuYW1lPVwiZGF0ZVwiXScpO1xuICBjb25zdCBjb2xvcklucHV0ID0gZ2V0RWxlbWVudCgnW25hbWU9XCJjb2xvcnNcIl0nKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0Q3VycmVudFByb2plY3QoKTtcblxuICAgIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKFxuICAgICAgdGl0bGVJbnB1dC52YWx1ZSxcbiAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsXG4gICAgICBkYXRlSW5wdXQudmFsdWUsXG4gICAgICBjb2xvcklucHV0LnZhbHVlLFxuICAgICAgcHJvamVjdFxuICAgICk7XG5cbiAgICBhZGRUYXNrVG9Qcm9qZWN0VGFza3MocHJvamVjdCwgdGFzayk7XG4gICAgcmVuZGVyVGFza3NGcm9tQ3VycmVudFByb2plY3QoKTtcblxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZ2V0RWxlbWVudChcIi5wcm9qZWN0LWZvcm1cIik7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBnZXRFbGVtZW50KCdbbmFtZT1cInByb2plY3QtdGl0bGVcIl0nKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSA9PT0gXCJEZWZhdWx0XCIpIHtcbiAgICAgIGFsZXJ0KFwiVXNlIG90aGVyIG5hbWUhXCIpO1xuICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KHRpdGxlSW5wdXQudmFsdWUpO1xuICAgIGFkZFByb2plY3RUb1Byb2plY3RMaXN0KHByb2plY3QpO1xuICAgIGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3QpO1xuXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG5cbiAgICBmb3JtLnJlc2V0KCk7XG4gIH0pO1xufTtcblxuY29uc3QgYWRkRGVmYXVsdFByb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RMaXN0RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0TGlzdFwiKSk7XG4gIGlmIChBcnJheS5pc0FycmF5KHByb2plY3RMaXN0RGF0YSkpIHtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdEV4aXN0cyA9IHByb2plY3RMaXN0RGF0YS5zb21lKFxuICAgICAgKHByb2plY3REYXRhKSA9PiBwcm9qZWN0RGF0YS50aXRsZSA9PT0gXCJEZWZhdWx0XCJcbiAgICApO1xuXG4gICAgaWYgKGRlZmF1bHRQcm9qZWN0RXhpc3RzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdGVtcCA9IGNyZWF0ZVByb2plY3QoXCJEZWZhdWx0XCIpO1xuICBhZGRQcm9qZWN0VG9Qcm9qZWN0TGlzdCh0ZW1wKTtcbiAgY3JlYXRlRGVmYXVsdFByb2plY3RFbGVtZW50KHRlbXApO1xuICBzZXRDdXJyZW50UHJvamVjdCh0ZW1wLmdldElkKCkpO1xufTtcblxuY29uc3Qgc2VsZWN0UHJvamVjdElkT25DbGljayA9IChlKSA9PiB7XG4gIGNvbnN0IHByb2plY3RJZCA9IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdElkO1xuICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0SWQpO1xuICByZW5kZXJUYXNrc0Zyb21DdXJyZW50UHJvamVjdCgpO1xufTtcblxuY29uc3Qgc2VsZWN0VGFza0lkT25DbGljayA9IChlKSA9PiB7XG4gIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LmRhdGFzZXQudGFza0lkO1xuICBzZXRDdXJyZW50VGFza0lkKHRhc2tJZCk7XG59O1xuXG5jb25zdCByZW1vdmVQcm9qZWN0T25DbGljayA9IChlKSA9PiB7XG4gIGNvbnN0IHByb2plY3RJZCA9IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdElkO1xuICByZW1vdmVQcm9qZWN0RnJvbVByb2plY3RMaXN0KHByb2plY3RJZCk7XG4gIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3RMaXN0WzBdLmdldElkKCkpO1xuICByZW5kZXJQcm9qZWN0c0Zyb21Qcm9qZWN0TGlzdCgpO1xuICByZW5kZXJUYXNrc0Zyb21DdXJyZW50UHJvamVjdCgpO1xuICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbn07XG5cbmNvbnN0IHJlbW92ZVRhc2tPbkNsaWNrID0gKGUpID0+IHtcbiAgY29uc3QgcHJvamVjdElkID0gZ2V0Q3VycmVudFByb2plY3RJZCgpO1xuICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5kYXRhc2V0LnRhc2tJZDtcblxuICByZW1vdmVUYXNrRnJvbVByb2plY3RUYXNrcyhwcm9qZWN0SWQsIHRhc2tJZCk7XG4gIHJlbmRlclRhc2tzRnJvbUN1cnJlbnRQcm9qZWN0KCk7XG4gIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xufTtcblxuY29uc3QgY2hhbmdlT3ZlcmxheVN0YXRlID0gKCkgPT4ge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59O1xuXG5jb25zdCBzaG93UHJvamVjdE1vZGFsID0gKGUpID0+IHtcbiAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1lZGl0LXByb2plY3RcIik7XG5cbiAgY2hhbmdlT3ZlcmxheVN0YXRlKCk7XG4gIHByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gIHNlbGVjdFByb2plY3RJZE9uQ2xpY2soZSk7XG59O1xuXG5jb25zdCBzaG93VGFza01vZGFsID0gKGUpID0+IHtcbiAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1lZGl0LXRhc2tcIik7XG5cbiAgY2hhbmdlT3ZlcmxheVN0YXRlKCk7XG4gIHRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBzZWxlY3RUYXNrSWRPbkNsaWNrKGUpO1xufTtcblxuY29uc3QgY2xvc2VNb2RhbHMgPSAoZSkgPT4ge1xuICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWVkaXQtcHJvamVjdFwiKTtcbiAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1lZGl0LXRhc2tcIik7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG5cbiAgaWYgKFxuICAgIGUudGFyZ2V0ID09PSBvdmVybGF5IHx8XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWwtZWRpdC1jYnV0dG9uXCIpXG4gICkge1xuICAgIGNoYW5nZU92ZXJsYXlTdGF0ZSgpO1xuICAgIHByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufTtcblxuY29uc3QgY2xlYXJUYXNrRWRpdElucHV0cyA9ICgpID0+IHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcbiAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1lZGl0LXRhc2tcIik7XG4gIGNvbnN0IGVkaXRUaXRsZUlucHV0ID0gZ2V0RWxlbWVudChcIi5tb2RhbC10aXRsZS1pbnB1dC10YXNrXCIpO1xuICBjb25zdCBlZGl0RGVzY0lucHV0ID0gZ2V0RWxlbWVudChcIi5tb2RhbC1kZXNjLWlucHV0LXRhc2tcIik7XG4gIGNvbnN0IGVkaXREYXRlSW5wdXQgPSBnZXRFbGVtZW50KCdbbmFtZT1cImRhdGUtZWRpdFwiXScpO1xuXG4gIGVkaXRUaXRsZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgZWRpdERlc2NJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIGVkaXREYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xuICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59O1xuXG5jb25zdCBlZGl0UHJvamVjdFRpdGxlID0gKGUpID0+IHtcbiAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1lZGl0LXByb2plY3RcIik7XG4gIGNvbnN0IGVkaXRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtZWRpdC1pbnB1dFwiKTtcblxuICBpZiAoZWRpdElucHV0LnZhbHVlID09PSBcIkRlZmF1bHRcIikge1xuICAgIGFsZXJ0KFwiVXNlIG90aGVyIG5hbWUhXCIpO1xuICAgIGVkaXRJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZ2V0Q3VycmVudFByb2plY3QoKS5zZXRUaXRsZShlZGl0SW5wdXQudmFsdWUpO1xuICByZW5kZXJQcm9qZWN0c0Zyb21Qcm9qZWN0TGlzdCgpO1xuXG4gIGlmIChlZGl0SW5wdXQudmFsdWUgIT09IFwiXCIpIHtcbiAgICBjaGFuZ2VPdmVybGF5U3RhdGUoKTtcbiAgICBlZGl0SW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIHByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbn07XG5cbmNvbnN0IGVkaXRUYXNrRGV0YWlscyA9IChlKSA9PiB7XG4gIGNvbnN0IGVkaXRUaXRsZUlucHV0ID0gZ2V0RWxlbWVudChcIi5tb2RhbC10aXRsZS1pbnB1dC10YXNrXCIpO1xuICBjb25zdCBlZGl0RGVzY0lucHV0ID0gZ2V0RWxlbWVudChcIi5tb2RhbC1kZXNjLWlucHV0LXRhc2tcIik7XG4gIGNvbnN0IGVkaXREYXRlSW5wdXQgPSBnZXRFbGVtZW50KCdbbmFtZT1cImRhdGUtZWRpdFwiXScpO1xuICBjb25zdCBlZGl0Q29sb3JJbnB1dCA9IGdldEVsZW1lbnQoJ1tuYW1lPVwiY29sb3JzLWVkaXRcIl0nKTtcblxuICBjb25zdCB0YXNrSWQgPSBnZXRDdXJyZW50VGFza0lkKCk7XG5cbiAgY29uc3QgdGFzayA9IGdldFRhc2tCeUlkKGdldEN1cnJlbnRQcm9qZWN0KCksIHRhc2tJZCk7XG5cbiAgdGFzay5zZXRUaXRsZShlZGl0VGl0bGVJbnB1dC52YWx1ZSk7XG4gIHRhc2suc2V0RGVzY3JpcHRpb24oZWRpdERlc2NJbnB1dC52YWx1ZSk7XG4gIHRhc2suc2V0RHVlRGF0ZShlZGl0RGF0ZUlucHV0LnZhbHVlKTtcbiAgdGFzay5zZXRQcmlvcml0eShlZGl0Q29sb3JJbnB1dC52YWx1ZSk7XG5cbiAgcmVuZGVyVGFza3NGcm9tQ3VycmVudFByb2plY3QoKTtcblxuICBjbGVhclRhc2tFZGl0SW5wdXRzKCk7XG4gIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xufTtcblxuY29uc3QgaGFuZGxlQ2xpY2tzID0gKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3QtZWxlbWVudFwiKSkge1xuICAgIHNlbGVjdFByb2plY3RJZE9uQ2xpY2soZSk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdC1yZW1vdmVcIikpIHtcbiAgICByZW1vdmVQcm9qZWN0T25DbGljayhlKTtcbiAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0LWVkaXRcIikpIHtcbiAgICBzaG93UHJvamVjdE1vZGFsKGUpO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRhc2stcmVtb3ZlXCIpKSB7XG4gICAgcmVtb3ZlVGFza09uQ2xpY2soZSk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFzay1lZGl0XCIpKSB7XG4gICAgc2hvd1Rhc2tNb2RhbChlKTtcbiAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbC1lZGl0LWVidXR0b25cIikpIHtcbiAgICBlZGl0UHJvamVjdFRpdGxlKGUpO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsLWVkaXQtZWJ1dHRvbi10YXNrXCIpKSB7XG4gICAgZWRpdFRhc2tEZXRhaWxzKGUpO1xuICB9IGVsc2UgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJvdmVybGF5XCIpKSB7XG4gICAgY2xvc2VNb2RhbHMoZSk7XG4gIH1cbn07XG5cbmNvbnN0IGFkZFRhc2tMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIik7XG4gIHRhc2tMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGlja3MpO1xufTtcblxuY29uc3QgYWRkUHJvamVjdExpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbGlzdFwiKTtcbiAgcHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrcyk7XG59O1xuXG5jb25zdCBhZGRPdmVybGF5TGlzdGVuZXJzID0gKCkgPT4ge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGlja3MpO1xufTtcblxuY29uc3QgYWRkRWRpdFByb2plY3RNb2RhbExpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3QgZWRpdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1lZGl0LXByb2plY3RcIik7XG4gIGVkaXRNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2tzKTtcbn07XG5cbmNvbnN0IGFkZEVkaXRUYXNrTW9kYWxMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGVkaXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtZWRpdC1lYnV0dG9uLXRhc2tcIik7XG4gIGVkaXRNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2tzKTtcbn07XG5cbmNvbnN0IGFkZExpc3RlbmVycyA9ICgpID0+IHtcbiAgYWRkVG9kbygpO1xuICBhZGRQcm9qZWN0KCk7XG4gIGFkZFByb2plY3RMaXN0ZW5lcnMoKTtcbiAgYWRkVGFza0xpc3RlbmVycygpO1xuICBhZGRPdmVybGF5TGlzdGVuZXJzKCk7XG4gIGFkZEVkaXRQcm9qZWN0TW9kYWxMaXN0ZW5lcnMoKTtcbiAgYWRkRWRpdFRhc2tNb2RhbExpc3RlbmVycygpO1xufTtcblxuZXhwb3J0IHtcbiAgYWRkRGVmYXVsdFByb2plY3QsXG4gIGFkZExpc3RlbmVycyxcbiAgY3JlYXRlVGFzayxcbiAgY3JlYXRlUHJvamVjdCxcbiAgY3JlYXRlUHJvamVjdEVsZW1lbnQsXG59O1xuIiwiaW1wb3J0IHsgcHJpbnRQcm9qZWN0c0Zyb21Qcm9qZWN0TGlzdCB9IGZyb20gXCIuLi92aWV3cy92aWV3XCI7XG5pbXBvcnQge1xuICBjcmVhdGVUYXNrLFxuICBjcmVhdGVQcm9qZWN0LFxuICBjcmVhdGVQcm9qZWN0RWxlbWVudCxcbn0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJcIjtcbmNvbnN0IHByb2plY3RMaXN0ID0gW107XG5sZXQgY3VycmVudFByb2plY3QgPSBcIlwiO1xubGV0IGN1cnJlbnRUYXNrSWQgPSBcIlwiO1xuXG5jb25zdCBhZGRUYXNrVG9Qcm9qZWN0VGFza3MgPSAocHJvamVjdCwgdGFzaykgPT4ge1xuICBwcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XG59O1xuXG5jb25zdCByZW1vdmVUYXNrRnJvbVByb2plY3RUYXNrcyA9IChwcm9qZWN0SWQsIHRhc2tJZCkgPT4ge1xuICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKTtcbiAgY29uc3QgdGFzayA9IGdldFRhc2tCeUlkKHByb2plY3QsIHRhc2tJZCk7XG5cbiAgcHJvamVjdC50YXNrcy5zcGxpY2UodGFzaywgMSk7XG5cbiAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc29sZS5sb2codGFzay5nZXRJbmZvKCkpO1xuICB9KTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3RUb1Byb2plY3RMaXN0ID0gKHByb2plY3QpID0+IHtcbiAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbn07XG5cbmNvbnN0IHJlbW92ZVByb2plY3RGcm9tUHJvamVjdExpc3QgPSAocHJvamVjdElkKSA9PiB7XG4gIGNvbnN0IHByb2plY3RUb1JlbW92ZSA9IGdldFByb2plY3RCeUlkKHByb2plY3RJZCk7XG5cbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdExpc3QuaW5kZXhPZihwcm9qZWN0VG9SZW1vdmUpO1xuICBwcm9qZWN0TGlzdC5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcblxuICBwcmludFByb2plY3RzRnJvbVByb2plY3RMaXN0KCk7XG59O1xuXG5jb25zdCBzZXRDdXJyZW50UHJvamVjdCA9IChpZCkgPT4ge1xuICBjdXJyZW50UHJvamVjdCA9IGdldFByb2plY3RCeUlkKGlkKTtcbiAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xufTtcblxuY29uc3QgZ2V0Q3VycmVudFByb2plY3QgPSAoKSA9PiB7XG4gIHJldHVybiBjdXJyZW50UHJvamVjdDtcbn07XG5cbmNvbnN0IGdldEN1cnJlbnRQcm9qZWN0SWQgPSAoKSA9PiB7XG4gIHJldHVybiBjdXJyZW50UHJvamVjdC5nZXRJZCgpO1xufTtcblxuY29uc3QgZ2V0UHJvamVjdEJ5SWQgPSAocHJvamVjdElkKSA9PiB7XG4gIHJldHVybiBwcm9qZWN0TGlzdC5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldElkKCkgPT09IHByb2plY3RJZCk7XG59O1xuXG5jb25zdCBzZXRDdXJyZW50VGFza0lkID0gKHRhc2tJZCkgPT4ge1xuICBjdXJyZW50VGFza0lkID0gdGFza0lkO1xufTtcblxuY29uc3QgZ2V0Q3VycmVudFRhc2tJZCA9ICgpID0+IHtcbiAgcmV0dXJuIGN1cnJlbnRUYXNrSWQ7XG59O1xuXG5jb25zdCBnZXRUYXNrQnlJZCA9IChwcm9qZWN0LCB0YXNrSWQpID0+IHtcbiAgcmV0dXJuIHByb2plY3QudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXRJZCgpID09PSB0YXNrSWQpO1xufTtcblxuY29uc3QgdXBkYXRlTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdERhdGEgPSBwcm9qZWN0TGlzdC5tYXAoKHByb2plY3QpID0+ICh7XG4gICAgaWQ6IHByb2plY3QuZ2V0SWQoKSxcbiAgICB0YXNrczogc2VyaWFsaXplUHJvamVjdFRhc2tzKHByb2plY3QpLFxuICAgIHRpdGxlOiBwcm9qZWN0LmdldFRpdGxlKCksXG4gIH0pKTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RMaXN0XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0RGF0YSkpO1xufTtcblxuY29uc3Qgc2VyaWFsaXplVGFzayA9ICh0YXNrKSA9PiB7XG4gIHJldHVybiB7XG4gICAgaWQ6IHRhc2suZ2V0SWQoKSxcbiAgICB0aXRsZTogdGFzay5nZXRUaXRsZSgpLFxuICAgIGRlc2NyaXB0aW9uOiB0YXNrLmdldERlc2NyaXB0aW9uKCksXG4gICAgZHVlRGF0ZTogdGFzay5nZXREdWVEYXRlKCksXG4gICAgcHJpb3JpdHk6IHRhc2suZ2V0UHJpb3JpdHkoKSxcbiAgfTtcbn07XG5cbmNvbnN0IGRlc2VyaWFsaXplVGFzayA9ICh0YXNrRGF0YSwgcHJvamVjdCkgPT4ge1xuICBjb25zdCB0YXNrID0gY3JlYXRlVGFzayhcbiAgICB0YXNrRGF0YS50aXRsZSxcbiAgICB0YXNrRGF0YS5kZXNjcmlwdGlvbixcbiAgICB0YXNrRGF0YS5kdWVEYXRlLFxuICAgIHRhc2tEYXRhLnByaW9yaXR5LFxuICAgIHByb2plY3RcbiAgKTtcbiAgdGFzay5zZXRJZCh0YXNrRGF0YS5pZCk7XG5cbiAgcmV0dXJuIHRhc2s7XG59O1xuXG5jb25zdCBzZXJpYWxpemVQcm9qZWN0VGFza3MgPSAocHJvamVjdCkgPT4ge1xuICByZXR1cm4gcHJvamVjdC50YXNrcy5tYXAoKHRhc2spID0+IHNlcmlhbGl6ZVRhc2sodGFzaykpO1xufTtcblxuY29uc3QgaW5pdExvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdExpc3REYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0XCIpKTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShwcm9qZWN0TGlzdERhdGEpKSB7XG4gICAgcHJvamVjdExpc3REYXRhLmZvckVhY2goKHByb2plY3REYXRhKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qZWN0RGF0YS50aXRsZSk7XG4gICAgICBwcm9qZWN0LnNldElkKHByb2plY3REYXRhLmlkKTtcblxuICAgICAgY29uc3QgdGFza3MgPSBwcm9qZWN0RGF0YS50YXNrcy5tYXAoKHRhc2tEYXRhKSA9PlxuICAgICAgICBkZXNlcmlhbGl6ZVRhc2sodGFza0RhdGEsIHByb2plY3QpXG4gICAgICApO1xuXG4gICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiBhZGRUYXNrVG9Qcm9qZWN0VGFza3MocHJvamVjdCwgdGFzaykpO1xuICAgICAgYWRkUHJvamVjdFRvUHJvamVjdExpc3QocHJvamVjdCk7XG4gICAgICBjcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0KTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgcHJvamVjdExpc3QsXG4gIGFkZFRhc2tUb1Byb2plY3RUYXNrcyxcbiAgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0VGFza3MsXG4gIGFkZFByb2plY3RUb1Byb2plY3RMaXN0LFxuICByZW1vdmVQcm9qZWN0RnJvbVByb2plY3RMaXN0LFxuICBzZXRDdXJyZW50UHJvamVjdCxcbiAgZ2V0Q3VycmVudFByb2plY3QsXG4gIGdldEN1cnJlbnRQcm9qZWN0SWQsXG4gIGdldFRhc2tCeUlkLFxuICBzZXRDdXJyZW50VGFza0lkLFxuICBnZXRDdXJyZW50VGFza0lkLFxuICB1cGRhdGVMb2NhbFN0b3JhZ2UsXG4gIGluaXRMb2NhbFN0b3JhZ2UsXG59O1xuIiwiY29uc3QgY3JlYXRlUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICBjb25zdCB0YXNrcyA9IFtdO1xuICBsZXQgaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpO1xuXG4gIGNvbnN0IHNldElkID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZCA9IHZhbHVlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRJZCA9ICgpID0+IGlkO1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG5cbiAgY29uc3Qgc2V0VGl0bGUgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRpdGxlID0gdmFsdWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldEluZm8gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBJZDogJHtnZXRJZCgpfSwgdGl0bGU6ICR7dGl0bGV9YDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHRhc2tzLFxuICAgIGdldElkLFxuICAgIGdldFRpdGxlLFxuICAgIGdldEluZm8sXG4gICAgc2V0VGl0bGUsXG4gICAgc2V0SWQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0O1xuIiwiY29uc3QgY3JlYXRlVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSA9PiB7XG4gIGxldCBpZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCk7XG4gIGNvbnN0IGdldElkID0gKCkgPT4gaWQ7XG5cbiAgY29uc3QgZ2V0UHJvamVjdElkID0gKCkgPT4gcHJvamVjdC5nZXRJZCgpO1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG5cbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcblxuICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gZHVlRGF0ZTtcblxuICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuXG4gIGNvbnN0IHNldFRpdGxlID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aXRsZSA9IHZhbHVlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0RHVlRGF0ZSA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgZHVlRGF0ZSA9IHZhbHVlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXRQcmlvcml0eSA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcHJpb3JpdHkgPSB2YWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0SWQgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlkID0gdmFsdWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldEluZm8gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBJZDogJHtnZXRJZCgpfSwgdGl0bGU6ICR7dGl0bGV9LCBkZXNjcmlwdGlvbjogJHtkZXNjcmlwdGlvbn0sIGR1ZURhdGU6ICR7ZHVlRGF0ZX0sIHByaW9yaXR5OiAke3ByaW9yaXR5fWA7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRJZCxcbiAgICBnZXRQcm9qZWN0SWQsXG4gICAgZ2V0SW5mbyxcbiAgICBnZXRUaXRsZSxcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBnZXREdWVEYXRlLFxuICAgIGdldFByaW9yaXR5LFxuICAgIHNldFRpdGxlLFxuICAgIHNldERlc2NyaXB0aW9uLFxuICAgIHNldER1ZURhdGUsXG4gICAgc2V0UHJpb3JpdHksXG4gICAgc2V0SWQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYXNrO1xuIiwiaW1wb3J0IHsgYWRkRGVmYXVsdFByb2plY3QsIGFkZExpc3RlbmVycyB9IGZyb20gXCIuLi9jb250cm9sbGVycy9jb250cm9sbGVyXCI7XG5pbXBvcnQge1xuICBwcm9qZWN0TGlzdCxcbiAgZ2V0Q3VycmVudFByb2plY3QsXG4gIGluaXRMb2NhbFN0b3JhZ2UsXG59IGZyb20gXCIuLi9tb2RlbHMvbW9kZWxcIjtcblxuY29uc3QgcHJpbnRUYXNrc0Zyb21Qcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgcHJvamVjdC50YXNrcy5mb3JFYWNoKChlbGUpID0+IGNvbnNvbGUubG9nKGVsZS5nZXRJbmZvKCkpKTtcbn07XG5cbmNvbnN0IHByaW50UHJvamVjdHNGcm9tUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0TGlzdCkge1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QuZ2V0SW5mbygpKTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWcsIGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgZ2V0RWxlbWVudCA9IChzZWxlY3RvcikgPT4ge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59O1xuXG5jb25zdCBjcmVhdGVUYXNrRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLmNsYXNzTmFtZSA9IFwidGFzay1mb3JtXCI7XG5cbiAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlLnR5cGUgPSBcInRleHRcIjtcbiAgdGl0bGUucGxhY2Vob2xkZXIgPSBcIkFkZCB0YXNrXCI7XG4gIHRpdGxlLm5hbWUgPSBcInRhc2tcIjtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVzY3JpcHRpb24udHlwZSA9IFwidGV4dFwiO1xuICBkZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiRGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb24ubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcblxuICBjb25zdCBkYXRlID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgZGF0ZS5uYW1lID0gXCJkYXRlXCI7XG5cbiAgY29uc3QgY29sb3JzID0gY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29sb3JzLm5hbWUgPSBcImNvbG9yc1wiO1xuXG4gIGNvbnN0IHJlZCA9IGNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHJlZC52YWx1ZSA9IFwicmVkXCI7XG4gIHJlZC50ZXh0Q29udGVudCA9IFwicmVkXCI7XG4gIGNvbnN0IHllbGxvdyA9IGNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHllbGxvdy52YWx1ZSA9IFwieWVsbG93XCI7XG4gIHllbGxvdy50ZXh0Q29udGVudCA9IFwieWVsbG93XCI7XG4gIGNvbnN0IGdyZWVuID0gY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgZ3JlZW4udmFsdWUgPSBcImdyZWVuXCI7XG4gIGdyZWVuLnRleHRDb250ZW50ID0gXCJncmVlblwiO1xuXG4gIGNvbG9ycy5hcHBlbmQocmVkLCB5ZWxsb3csIGdyZWVuKTtcblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwic3VibWl0LWJ1dHRvblwiKTtcbiAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgdGFza1wiO1xuXG4gIGZvcm0uYXBwZW5kKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgY29sb3JzLCBzdWJtaXRCdXR0b24pO1xuXG4gIHJldHVybiBmb3JtO1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBjcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5jbGFzc05hbWUgPSBcInByb2plY3QtZm9ybVwiO1xuXG4gIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZS50eXBlID0gXCJ0ZXh0XCI7XG4gIHRpdGxlLnBsYWNlaG9sZGVyID0gXCJQcm9qZWN0IG5hbWVcIjtcbiAgdGl0bGUubmFtZSA9IFwicHJvamVjdC10aXRsZVwiO1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJzdWJtaXQtYnV0dG9uXCIpO1xuICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuXG4gIGZvcm0uYXBwZW5kKHRpdGxlLCBzdWJtaXRCdXR0b24pO1xuXG4gIHJldHVybiBmb3JtO1xufTtcblxuY29uc3QgY3JlYXRlVGFza0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHRhc2tMaXN0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRhc2stbGlzdFwiKTtcbiAgcmV0dXJuIHRhc2tMaXN0O1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByb2plY3QtbGlzdFwiKTtcbiAgcmV0dXJuIHByb2plY3RMaXN0O1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEVsZW1lbnQgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGdldEVsZW1lbnQoXCIucHJvamVjdC1saXN0XCIpO1xuXG4gIGNvbnN0IHByb2plY3RFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZWxlbWVudFwiKTtcbiAgcHJvamVjdEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmdldElkKCk7XG5cbiAgY29uc3QgcHJvamVjdFRpdGxlID0gY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKTtcbiAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWVsZW1lbnRcIik7XG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcbiAgcHJvamVjdFRpdGxlLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5nZXRJZCgpO1xuXG4gIHByb2plY3RFbGVtZW50LmFwcGVuZChwcm9qZWN0VGl0bGUpO1xuXG4gIGlmIChwcm9qZWN0LmdldFRpdGxlKCkgIT09IFwiRGVmYXVsdFwiKSB7XG4gICAgY29uc3QgcHJvamVjdEVkaXQgPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHByb2plY3RFZGl0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWVkaXRcIik7XG4gICAgcHJvamVjdEVkaXQudGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICBwcm9qZWN0RWRpdC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuZ2V0SWQoKTtcblxuICAgIGNvbnN0IHByb2plY3RSZW1vdmUgPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHByb2plY3RSZW1vdmUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtcmVtb3ZlXCIpO1xuICAgIHByb2plY3RSZW1vdmUudGV4dENvbnRlbnQgPSBcIlJlbW92ZVwiO1xuICAgIHByb2plY3RSZW1vdmUuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmdldElkKCk7XG5cbiAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmQocHJvamVjdEVkaXQsIHByb2plY3RSZW1vdmUpO1xuICB9XG5cbiAgcHJvamVjdExpc3QuYXBwZW5kKHByb2plY3RFbGVtZW50KTtcbn07XG5cbmNvbnN0IGNyZWF0ZURlZmF1bHRQcm9qZWN0RWxlbWVudCA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZ2V0RWxlbWVudChcIi5wcm9qZWN0LWxpc3RcIik7XG5cbiAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1lbGVtZW50XCIpO1xuICBwcm9qZWN0RWxlbWVudC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuZ2V0SWQoKTtcblxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBjcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlXCIpO1xuICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZWxlbWVudFwiKTtcbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xuICBwcm9qZWN0VGl0bGUuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmdldElkKCk7XG5cbiAgcHJvamVjdEVsZW1lbnQuYXBwZW5kKHByb2plY3RUaXRsZSk7XG4gIHByb2plY3RMaXN0LmFwcGVuZChwcm9qZWN0RWxlbWVudCk7XG59O1xuXG5jb25zdCBlZGl0UHJvamVjdE1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TW9kYWwgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibW9kYWwtZWRpdC1wcm9qZWN0XCIpO1xuXG4gIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm1vZGFsLWVkaXQtdGl0bGUtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGgxID0gY3JlYXRlRWxlbWVudChcImgxXCIsIFwibW9kYWwtZWRpdC10aXRsZVwiKTtcbiAgaDEudGV4dENvbnRlbnQgPSBcIkVkaXQgcHJvamVjdFwiO1xuXG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibW9kYWwtZWRpdC1jb250ZW50LWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBcIm1vZGFsLWVkaXQtbGFiZWxcIik7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm1vZGFsLXRpdGxlXCIpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjtcblxuICBjb25zdCBpbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcIm1vZGFsLWVkaXQtaW5wdXRcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJtb2RhbC10aXRsZVwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb2RhbC10aXRsZVwiKTtcblxuICBjb25zdCBidXR0b25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibW9kYWwtZWRpdC1idXR0b24tY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJtb2RhbC1lZGl0LWNidXR0b25cIik7XG4gIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJtb2RhbC1lZGl0LWVidXR0b25cIik7XG4gIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcblxuICB0aXRsZUNvbnRhaW5lci5hcHBlbmQoaDEpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChsYWJlbCwgaW5wdXQpO1xuICBidXR0b25Db250YWluZXIuYXBwZW5kKGNhbmNlbEJ1dHRvbiwgZWRpdEJ1dHRvbik7XG4gIHByb2plY3RNb2RhbC5hcHBlbmQodGl0bGVDb250YWluZXIsIGNvbnRlbnRDb250YWluZXIsIGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIHByb2plY3RNb2RhbDtcbn07XG5cbmNvbnN0IGVkaXRUYXNrTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IHRhc2tNb2RhbCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtb2RhbC1lZGl0LXRhc2tcIik7XG5cbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgXCJtb2RhbC1lZGl0LXRpdGxlLWNvbnRhaW5lci10YXNrXCJcbiAgKTtcblxuICBjb25zdCBoMSA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcIm1vZGFsLWVkaXQtdGl0bGUtdGFza1wiKTtcbiAgaDEudGV4dENvbnRlbnQgPSBcIkVkaXQgdGFza1wiO1xuXG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgXCJtb2RhbC1lZGl0LWNvbnRlbnQtY29udGFpbmVyLXRhc2tcIlxuICApO1xuXG4gIGNvbnN0IGxhYmVsVGl0bGUgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgXCJtb2RhbC1lZGl0LWxhYmVsLXRhc2tcIik7XG4gIGxhYmVsVGl0bGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibW9kYWwtdGl0bGUtdGFza1wiKTtcbiAgbGFiZWxUaXRsZS50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjtcblxuICBjb25zdCBpbnB1dFRpdGxlID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFwibW9kYWwtdGl0bGUtaW5wdXQtdGFza1wiKTtcbiAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibW9kYWwtdGl0bGUtdGFza1wiKTtcbiAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vZGFsLXRpdGxlLXRhc2tcIik7XG5cbiAgY29uc3QgbGFiZWxEZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBcIm1vZGFsLWVkaXQtbGFiZWwtdGFza1wiKTtcbiAgbGFiZWxEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJtb2RhbC1kZXNjcmlwdGlvbi10YXNrXCIpO1xuICBsYWJlbERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuXG4gIGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJtb2RhbC1kZXNjLWlucHV0LXRhc2tcIik7XG4gIGlucHV0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm1vZGFsLWRlc2NyaXB0aW9uLXRhc2tcIik7XG4gIGlucHV0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb2RhbC1kZXNjcmlwdGlvbi10YXNrXCIpO1xuXG4gIGNvbnN0IGRhdGUgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICBkYXRlLm5hbWUgPSBcImRhdGUtZWRpdFwiO1xuXG4gIGNvbnN0IGNvbG9ycyA9IGNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGNvbG9ycy5uYW1lID0gXCJjb2xvcnMtZWRpdFwiO1xuXG4gIGNvbnN0IHJlZCA9IGNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHJlZC52YWx1ZSA9IFwicmVkXCI7XG4gIHJlZC50ZXh0Q29udGVudCA9IFwicmVkXCI7XG4gIGNvbnN0IHllbGxvdyA9IGNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHllbGxvdy52YWx1ZSA9IFwieWVsbG93XCI7XG4gIHllbGxvdy50ZXh0Q29udGVudCA9IFwieWVsbG93XCI7XG4gIGNvbnN0IGdyZWVuID0gY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgZ3JlZW4udmFsdWUgPSBcImdyZWVuXCI7XG4gIGdyZWVuLnRleHRDb250ZW50ID0gXCJncmVlblwiO1xuXG4gIGNvbG9ycy5hcHBlbmQocmVkLCB5ZWxsb3csIGdyZWVuKTtcblxuICBjb25zdCBidXR0b25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibW9kYWwtZWRpdC1idXR0b24tY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJtb2RhbC1lZGl0LWNidXR0b25cIik7XG4gIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJtb2RhbC1lZGl0LWVidXR0b24tdGFza1wiKTtcbiAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuXG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZChoMSk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKFxuICAgIGxhYmVsVGl0bGUsXG4gICAgaW5wdXRUaXRsZSxcbiAgICBsYWJlbERlc2NyaXB0aW9uLFxuICAgIGlucHV0RGVzY3JpcHRpb24sXG4gICAgZGF0ZSxcbiAgICBjb2xvcnNcbiAgKTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChjYW5jZWxCdXR0b24sIGVkaXRCdXR0b24pO1xuICB0YXNrTW9kYWwuYXBwZW5kKHRpdGxlQ29udGFpbmVyLCBjb250ZW50Q29udGFpbmVyLCBidXR0b25Db250YWluZXIpO1xuXG4gIHJldHVybiB0YXNrTW9kYWw7XG59O1xuXG5jb25zdCBjcmVhdGVUYXNrRWxlbWVudCA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZ2V0RWxlbWVudChcIi50YXNrLWxpc3RcIik7XG5cbiAgY29uc3QgdGFza0VsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFzay1lbGVtZW50XCIpO1xuICB0YXNrRWxlbWVudC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suZ2V0SWQoKTtcblxuICBjb25zdCB0YXNrVGl0bGUgPSBjcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlXCIpO1xuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLmdldFRpdGxlKCk7XG4gIHRhc2tUaXRsZS5kYXRhc2V0LnRhc2tJZCA9IHRhc2suZ2V0SWQoKTtcblxuICBjb25zdCB0YXNrRGVzYyA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0YXNrRGVzYy5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXNjXCIpO1xuICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGVzY3JpcHRpb24oKTtcbiAgdGFza0Rlc2MuZGF0YXNldC50YXNrSWQgPSB0YXNrLmdldElkKCk7XG5cbiAgY29uc3QgdGFza0RhdGUgPSBjcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0RhdGUuY2xhc3NMaXN0LmFkZChcInRhc2stZGF0ZVwiKTtcbiAgdGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmdldER1ZURhdGUoKTtcbiAgdGFza0RhdGUuZGF0YXNldC50YXNrSWQgPSB0YXNrLmdldElkKCk7XG5cbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGFzay1wcmlvcml0eVwiKTtcbiAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5nZXRQcmlvcml0eSgpO1xuICB0YXNrUHJpb3JpdHkuZGF0YXNldC50YXNrSWQgPSB0YXNrLmdldElkKCk7XG5cbiAgY29uc3QgY3VycmVudFByb2plY3RJZCA9IHRhc2suZ2V0UHJvamVjdElkKCk7XG4gIHRhc2tFbGVtZW50LmRhdGFzZXQucHJvamVjdElkID0gY3VycmVudFByb2plY3RJZDtcblxuICBjb25zdCB0YXNrRWRpdCA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRhc2tFZGl0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWVkaXRcIik7XG4gIHRhc2tFZGl0LnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gIHRhc2tFZGl0LmRhdGFzZXQudGFza0lkID0gdGFzay5nZXRJZCgpO1xuXG4gIGNvbnN0IHRhc2tSZW1vdmUgPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0YXNrUmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXJlbW92ZVwiKTtcbiAgdGFza1JlbW92ZS50ZXh0Q29udGVudCA9IFwiUmVtb3ZlXCI7XG4gIHRhc2tSZW1vdmUuZGF0YXNldC50YXNrSWQgPSB0YXNrLmdldElkKCk7XG5cbiAgdGFza0VsZW1lbnQuYXBwZW5kKFxuICAgIHRhc2tUaXRsZSxcbiAgICB0YXNrRGVzYyxcbiAgICB0YXNrRGF0ZSxcbiAgICB0YXNrUHJpb3JpdHksXG4gICAgdGFza0VkaXQsXG4gICAgdGFza1JlbW92ZVxuICApO1xuICB0YXNrTGlzdC5hcHBlbmQodGFza0VsZW1lbnQpO1xufTtcblxuY29uc3QgcmVuZGVyVGFza3NGcm9tQ3VycmVudFByb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgbGV0IHRhc2tMaXN0SHRtbCA9IGdldEVsZW1lbnQoXCIudGFzay1saXN0XCIpO1xuICB0YXNrTGlzdEh0bWwuaW5uZXJIVE1MID0gXCJcIjtcblxuICBjdXJyZW50UHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY3JlYXRlVGFza0VsZW1lbnQodGFzayk7XG4gIH0pO1xufTtcblxuY29uc3QgcmVuZGVyUHJvamVjdHNGcm9tUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RMaXN0RE9NID0gZ2V0RWxlbWVudChcIi5wcm9qZWN0LWxpc3RcIik7XG4gIHByb2plY3RMaXN0RE9NLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGlmIChwcm9qZWN0LmdldFRpdGxlKCkgPT09IFwiRGVmYXVsdFwiKSB7XG4gICAgICBjcmVhdGVEZWZhdWx0UHJvamVjdEVsZW1lbnQocHJvamVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3QpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIiwgXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgaDEgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJ0aXRsZVwiKTtcbiAgaDEudGV4dENvbnRlbnQgPSBcIlRvLURvIExpc3RcIjtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICByZXR1cm4gaGVhZGVyO1xufTtcblxuY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGNyZWF0ZUVsZW1lbnQoXCJtYWluXCIsIFwibWFpblwiKTtcblxuICBjb25zdCBoMSA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaDEudGV4dENvbnRlbnQgPSBcIlRvZG9zXCI7XG5cbiAgbWFpbi5hcHBlbmQoXG4gICAgY3JlYXRlUHJvamVjdEZvcm0oKSxcbiAgICBjcmVhdGVQcm9qZWN0TGlzdCgpLFxuICAgIGgxLFxuICAgIGNyZWF0ZVRhc2tGb3JtKCksXG4gICAgY3JlYXRlVGFza0xpc3QoKVxuICApO1xuICByZXR1cm4gbWFpbjtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gY3JlYXRlRWxlbWVudChcImZvb3RlclwiLCBcImZvb3RlclwiKTtcblxuICBjb25zdCBwID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJhdXRob3JcIik7XG4gIHAudGV4dENvbnRlbnQgPSBcIkNvZGVkIGJ5IEFyaWVjaFwiO1xuXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBjcmVhdGVFbGVtZW50KFwiYVwiLCBcImdpdGh1Yi1saW5rXCIpO1xuICBnaXRodWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9BcmllY2hcIjtcbiAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG5cbiAgY29uc3QgZ2l0aHViSWNvbiA9IGNyZWF0ZUVsZW1lbnQoXCJpXCIsIFwiZ2l0aHViLWljb25cIik7XG4gIGdpdGh1Ykljb24uY2xhc3NMaXN0LmFkZChcImZhLWJyYW5kc1wiKTtcbiAgZ2l0aHViSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtZ2l0aHViXCIpO1xuXG4gIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSWNvbik7XG4gIGZvb3Rlci5hcHBlbmQocCwgZ2l0aHViTGluayk7XG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5jb25zdCBjcmVhdGVNb2RhbE92ZXJsYXkgPSAoKSA9PiB7XG4gIGNvbnN0IG92ZXJsYXkgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwib3ZlcmxheVwiKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG4gIG92ZXJsYXkuYXBwZW5kKGVkaXRQcm9qZWN0TW9kYWwoKSk7XG4gIG92ZXJsYXkuYXBwZW5kKGVkaXRUYXNrTW9kYWwoKSk7XG5cbiAgcmV0dXJuIG92ZXJsYXk7XG59O1xuXG5jb25zdCBnZXRJbml0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGdldEVsZW1lbnQoXCJib2R5XCIpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJjb250YWluZXJcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1vZGFsT3ZlcmxheSgpKTtcblxuICBhZGRMaXN0ZW5lcnMoKTtcbiAgYWRkRGVmYXVsdFByb2plY3QoKTtcbiAgZWRpdFByb2plY3RNb2RhbCgpO1xuICBpbml0TG9jYWxTdG9yYWdlKCk7XG59O1xuXG5leHBvcnQge1xuICBwcmludFRhc2tzRnJvbVByb2plY3QsXG4gIHByaW50UHJvamVjdHNGcm9tUHJvamVjdExpc3QsXG4gIGdldEluaXRQYWdlLFxuICBnZXRFbGVtZW50LFxuICBjcmVhdGVFbGVtZW50LFxuICBjcmVhdGVQcm9qZWN0RWxlbWVudCxcbiAgY3JlYXRlRGVmYXVsdFByb2plY3RFbGVtZW50LFxuICBjcmVhdGVUYXNrRWxlbWVudCxcbiAgcmVuZGVyVGFza3NGcm9tQ3VycmVudFByb2plY3QsXG4gIHJlbmRlclByb2plY3RzRnJvbVByb2plY3RMaXN0LFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgZ2V0SW5pdFBhZ2UgfSBmcm9tIFwiLi92aWV3cy92aWV3XCI7XG5cbmdldEluaXRQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=