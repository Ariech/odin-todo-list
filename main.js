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
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  margin: 0 auto;
}

/* Modals */

.modal-edit {
  position: relative;
  margin: 0 auto;
  max-width: 400px;
  background-color: gray;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,YAAY;EACZ,yBAAyB;EACzB,iCAAiC;AACnC;;AAEA,mBAAmB;;AAEnB;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,iBAAiB;;AAEjB;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,SAAS;EACT,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,sBAAsB;AACxB;;AAEA,mBAAmB;;AAEnB;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA,YAAY;;AAEZ;EACE,aAAa;EACb,eAAe;EACf,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,0CAA0C;EAC1C,cAAc;AAChB;;AAEA,WAAW;;AAEX;EACE,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,sBAAsB;AACxB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n  background-color: #423e3e;\n  font-family: \"Roboto\", sans-serif;\n}\n\n/* Header section */\n\n.header {\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Main section */\n\n.main {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 150px);\n}\n\n.project-element {\n  display: flex;\n  gap: 1rem;\n  background-color: red;\n}\n\n.task-element {\n  display: flex;\n  gap: 1rem;\n  background-color: blue;\n}\n\n/* Footer section */\n\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n}\n\n.fa-github::before {\n  content: \"\\f09b\";\n  color: #fff;\n}\n\n/* Overlay */\n\n.overlay {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.8);\n  margin: 0 auto;\n}\n\n/* Modals */\n\n.modal-edit {\n  position: relative;\n  margin: 0 auto;\n  max-width: 400px;\n  background-color: gray;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   addListeners: () => (/* binding */ addListeners)
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

    // printTasksFromProject(project);

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

    form.reset();
  });
};

const addDefaultProject = () => {
  // Temp solution
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

const removeProjectOnClick = (e) => {
  const projectId = e.target.dataset.projectId;
  (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.removeProjectFromProjectList)(projectId);
  (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.setCurrentProject)(_models_model__WEBPACK_IMPORTED_MODULE_2__.projectList[0].getId());
  (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.renderProjectsFromProjectList)();
  (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.renderTasksFromCurrentProject)();
};

const removeTaskOnClick = (e) => {
  const projectId = (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.getCurrentProjectId)();
  const taskId = e.target.dataset.taskId;

  (0,_models_model__WEBPACK_IMPORTED_MODULE_2__.removeTaskFromProjectTasks)(projectId, taskId);
  (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.renderTasksFromCurrentProject)();
};

const showModal = () => {
  const overlay = document.querySelector(".overlay");
  overlay.style.display = "block";
};

const handleClicks = (e) => {
  if (e.target.classList.contains("project-element")) {
    selectProjectIdOnClick(e);
  } else if (e.target.classList.contains("project-remove")) {
    removeProjectOnClick(e);
  } else if (e.target.classList.contains("project-edit")) {
    showModal();
  } else if (e.target.classList.contains("task-remove")) {
    removeTaskOnClick(e);
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

const addListeners = () => {
  addTodo();
  addProject();
  addProjectListeners();
  addTaskListeners();
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
/* harmony export */   projectList: () => (/* binding */ projectList),
/* harmony export */   removeProjectFromProjectList: () => (/* binding */ removeProjectFromProjectList),
/* harmony export */   removeTaskFromProjectTasks: () => (/* binding */ removeTaskFromProjectTasks),
/* harmony export */   setCurrentProject: () => (/* binding */ setCurrentProject)
/* harmony export */ });
/* harmony import */ var _views_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/view */ "./src/views/view.js");

const projectList = [];
let currentProject = "";

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

const getTaskById = (project, taskId) => {
  return project.tasks.find((task) => task.getId() === taskId);
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
  const id = new Date().getTime().toString();
  const getId = () => id;

  const getTitle = () => title;

  const getInfo = () => {
    return `Id: ${getId()}, title: ${title}`;
  };

  return {
    tasks,
    getId,
    getTitle,
    getInfo,
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
  const id = new Date().getTime().toString();
  const getId = () => id;

  const getProjectId = () => project.getId();

  const getTitle = () => title;

  const getDescription = () => description;

  const getDueDate = () => dueDate;

  const getPriority = () => priority;

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

  const projectEdit = createElement("button");
  projectEdit.classList.add("project-edit");
  projectEdit.textContent = "Edit";
  projectEdit.dataset.projectId = project.getId();

  const projectRemove = createElement("button");
  projectRemove.classList.add("project-remove");
  projectRemove.textContent = "Remove";
  projectRemove.dataset.projectId = project.getId();

  projectElement.append(projectTitle, projectEdit, projectRemove);
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
  const projectModal = createElement("div", "modal-edit");

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
  editProjectModal(); // Temp solution
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsZ0VBQWlCO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxzREFBVztBQUNiO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUscUVBQVk7QUFDZCxFQUFFLDBFQUFpQjtBQUNuQixzQkFBc0I7QUFDdEI7O0FBYUU7Ozs7Ozs7VUN4VUY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDcUI7O0FBRTNDLHdEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9jb250cm9sbGVycy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZGVscy9tb2RlbC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RGYWN0b3J5LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFza0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdmlld3Mvdmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDIzZTNlO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLyogSGVhZGVyIHNlY3Rpb24gKi9cblxuLmhlYWRlciB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBNYWluIHNlY3Rpb24gKi9cblxuLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XG59XG5cbi5wcm9qZWN0LWVsZW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnRhc2stZWxlbWVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLyogRm9vdGVyIHNlY3Rpb24gKi9cblxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5mYS1naXRodWI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOWJcIjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qIE92ZXJsYXkgKi9cblxuLm92ZXJsYXkge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLyogTW9kYWxzICovXG5cbi5tb2RhbC1lZGl0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlDQUFpQztBQUNuQzs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLDBDQUEwQztFQUMxQyxjQUFjO0FBQ2hCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDIzZTNlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBIZWFkZXIgc2VjdGlvbiAqL1xcblxcbi5oZWFkZXIge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIE1haW4gc2VjdGlvbiAqL1xcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xcbn1cXG5cXG4ucHJvamVjdC1lbGVtZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi50YXNrLWVsZW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi8qIEZvb3RlciBzZWN0aW9uICovXFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uZmEtZ2l0aHViOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDliXFxcIjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4vKiBPdmVybGF5ICovXFxuXFxuLm92ZXJsYXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4vKiBNb2RhbHMgKi9cXG5cXG4ubW9kYWwtZWRpdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY3JlYXRlVGFzayBmcm9tIFwiLi4vbW9kdWxlcy90YXNrRmFjdG9yeVwiO1xuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4uL21vZHVsZXMvcHJvamVjdEZhY3RvcnlcIjtcbmltcG9ydCB7XG4gIGFkZFRhc2tUb1Byb2plY3RUYXNrcyxcbiAgYWRkUHJvamVjdFRvUHJvamVjdExpc3QsXG4gIGdldEN1cnJlbnRQcm9qZWN0LFxuICBzZXRDdXJyZW50UHJvamVjdCxcbiAgcmVtb3ZlUHJvamVjdEZyb21Qcm9qZWN0TGlzdCxcbiAgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0VGFza3MsXG4gIHByb2plY3RMaXN0LFxuICBnZXRDdXJyZW50UHJvamVjdElkLFxufSBmcm9tIFwiLi4vbW9kZWxzL21vZGVsXCI7XG5pbXBvcnQge1xuICBnZXRFbGVtZW50LFxuICBjcmVhdGVQcm9qZWN0RWxlbWVudCxcbiAgcmVuZGVyVGFza3NGcm9tQ3VycmVudFByb2plY3QsXG4gIHJlbmRlclByb2plY3RzRnJvbVByb2plY3RMaXN0LFxuICBjcmVhdGVEZWZhdWx0UHJvamVjdEVsZW1lbnQsXG59IGZyb20gXCIuLi92aWV3cy92aWV3XCI7XG5cbmNvbnN0IGFkZFRvZG8gPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBnZXRFbGVtZW50KFwiLnRhc2stZm9ybVwiKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGdldEVsZW1lbnQoJ1tuYW1lPVwidGFza1wiXScpO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZ2V0RWxlbWVudCgnW25hbWU9XCJkZXNjcmlwdGlvblwiXScpO1xuICBjb25zdCBkYXRlSW5wdXQgPSBnZXRFbGVtZW50KCdbbmFtZT1cImRhdGVcIl0nKTtcbiAgY29uc3QgY29sb3JJbnB1dCA9IGdldEVsZW1lbnQoJ1tuYW1lPVwiY29sb3JzXCJdJyk7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG5cbiAgICBjb25zdCB0YXNrID0gY3JlYXRlVGFzayhcbiAgICAgIHRpdGxlSW5wdXQudmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgZGF0ZUlucHV0LnZhbHVlLFxuICAgICAgY29sb3JJbnB1dC52YWx1ZSxcbiAgICAgIHByb2plY3RcbiAgICApO1xuXG4gICAgYWRkVGFza1RvUHJvamVjdFRhc2tzKHByb2plY3QsIHRhc2spO1xuICAgIHJlbmRlclRhc2tzRnJvbUN1cnJlbnRQcm9qZWN0KCk7XG5cbiAgICAvLyBwcmludFRhc2tzRnJvbVByb2plY3QocHJvamVjdCk7XG5cbiAgICBmb3JtLnJlc2V0KCk7XG4gIH0pO1xufTtcblxuY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGdldEVsZW1lbnQoXCIucHJvamVjdC1mb3JtXCIpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZ2V0RWxlbWVudCgnW25hbWU9XCJwcm9qZWN0LXRpdGxlXCJdJyk7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHRpdGxlSW5wdXQudmFsdWUgPT09IFwiRGVmYXVsdFwiKSB7XG4gICAgICBhbGVydChcIlVzZSBvdGhlciBuYW1lIVwiKTtcbiAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QodGl0bGVJbnB1dC52YWx1ZSk7XG4gICAgYWRkUHJvamVjdFRvUHJvamVjdExpc3QocHJvamVjdCk7XG4gICAgY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdCk7XG5cbiAgICBmb3JtLnJlc2V0KCk7XG4gIH0pO1xufTtcblxuY29uc3QgYWRkRGVmYXVsdFByb2plY3QgPSAoKSA9PiB7XG4gIC8vIFRlbXAgc29sdXRpb25cbiAgY29uc3QgdGVtcCA9IGNyZWF0ZVByb2plY3QoXCJEZWZhdWx0XCIpO1xuICBhZGRQcm9qZWN0VG9Qcm9qZWN0TGlzdCh0ZW1wKTtcbiAgY3JlYXRlRGVmYXVsdFByb2plY3RFbGVtZW50KHRlbXApO1xuICBzZXRDdXJyZW50UHJvamVjdCh0ZW1wLmdldElkKCkpO1xufTtcblxuY29uc3Qgc2VsZWN0UHJvamVjdElkT25DbGljayA9IChlKSA9PiB7XG4gIGNvbnN0IHByb2plY3RJZCA9IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdElkO1xuICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0SWQpO1xuICByZW5kZXJUYXNrc0Zyb21DdXJyZW50UHJvamVjdCgpO1xufTtcblxuY29uc3QgcmVtb3ZlUHJvamVjdE9uQ2xpY2sgPSAoZSkgPT4ge1xuICBjb25zdCBwcm9qZWN0SWQgPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3RJZDtcbiAgcmVtb3ZlUHJvamVjdEZyb21Qcm9qZWN0TGlzdChwcm9qZWN0SWQpO1xuICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0TGlzdFswXS5nZXRJZCgpKTtcbiAgcmVuZGVyUHJvamVjdHNGcm9tUHJvamVjdExpc3QoKTtcbiAgcmVuZGVyVGFza3NGcm9tQ3VycmVudFByb2plY3QoKTtcbn07XG5cbmNvbnN0IHJlbW92ZVRhc2tPbkNsaWNrID0gKGUpID0+IHtcbiAgY29uc3QgcHJvamVjdElkID0gZ2V0Q3VycmVudFByb2plY3RJZCgpO1xuICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5kYXRhc2V0LnRhc2tJZDtcblxuICByZW1vdmVUYXNrRnJvbVByb2plY3RUYXNrcyhwcm9qZWN0SWQsIHRhc2tJZCk7XG4gIHJlbmRlclRhc2tzRnJvbUN1cnJlbnRQcm9qZWN0KCk7XG59O1xuXG5jb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn07XG5cbmNvbnN0IGhhbmRsZUNsaWNrcyA9IChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0LWVsZW1lbnRcIikpIHtcbiAgICBzZWxlY3RQcm9qZWN0SWRPbkNsaWNrKGUpO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3QtcmVtb3ZlXCIpKSB7XG4gICAgcmVtb3ZlUHJvamVjdE9uQ2xpY2soZSk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdC1lZGl0XCIpKSB7XG4gICAgc2hvd01vZGFsKCk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFzay1yZW1vdmVcIikpIHtcbiAgICByZW1vdmVUYXNrT25DbGljayhlKTtcbiAgfVxufTtcblxuY29uc3QgYWRkVGFza0xpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbGlzdFwiKTtcbiAgdGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrcyk7XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0TGlzdGVuZXJzID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0XCIpO1xuICBwcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2tzKTtcbn07XG5cbmNvbnN0IGFkZExpc3RlbmVycyA9ICgpID0+IHtcbiAgYWRkVG9kbygpO1xuICBhZGRQcm9qZWN0KCk7XG4gIGFkZFByb2plY3RMaXN0ZW5lcnMoKTtcbiAgYWRkVGFza0xpc3RlbmVycygpO1xufTtcblxuZXhwb3J0IHsgYWRkRGVmYXVsdFByb2plY3QsIGFkZExpc3RlbmVycyB9O1xuIiwiaW1wb3J0IHsgcHJpbnRQcm9qZWN0c0Zyb21Qcm9qZWN0TGlzdCB9IGZyb20gXCIuLi92aWV3cy92aWV3XCI7XG5jb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xubGV0IGN1cnJlbnRQcm9qZWN0ID0gXCJcIjtcblxuY29uc3QgYWRkVGFza1RvUHJvamVjdFRhc2tzID0gKHByb2plY3QsIHRhc2spID0+IHtcbiAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xufTtcblxuY29uc3QgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0VGFza3MgPSAocHJvamVjdElkLCB0YXNrSWQpID0+IHtcbiAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3RCeUlkKHByb2plY3RJZCk7XG4gIGNvbnN0IHRhc2sgPSBnZXRUYXNrQnlJZChwcm9qZWN0LCB0YXNrSWQpO1xuXG4gIHByb2plY3QudGFza3Muc3BsaWNlKHRhc2ssIDEpO1xuXG4gIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRhc2suZ2V0SW5mbygpKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0VG9Qcm9qZWN0TGlzdCA9IChwcm9qZWN0KSA9PiB7XG4gIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG59O1xuXG5jb25zdCByZW1vdmVQcm9qZWN0RnJvbVByb2plY3RMaXN0ID0gKHByb2plY3RJZCkgPT4ge1xuICBjb25zdCBwcm9qZWN0VG9SZW1vdmUgPSBnZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpO1xuXG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RMaXN0LmluZGV4T2YocHJvamVjdFRvUmVtb3ZlKTtcbiAgcHJvamVjdExpc3Quc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG5cbiAgcHJpbnRQcm9qZWN0c0Zyb21Qcm9qZWN0TGlzdCgpO1xufTtcblxuY29uc3Qgc2V0Q3VycmVudFByb2plY3QgPSAoaWQpID0+IHtcbiAgY3VycmVudFByb2plY3QgPSBnZXRQcm9qZWN0QnlJZChpZCk7XG4gIHJldHVybiBjdXJyZW50UHJvamVjdDtcbn07XG5cbmNvbnN0IGdldEN1cnJlbnRQcm9qZWN0ID0gKCkgPT4ge1xuICByZXR1cm4gY3VycmVudFByb2plY3Q7XG59O1xuXG5jb25zdCBnZXRDdXJyZW50UHJvamVjdElkID0gKCkgPT4ge1xuICByZXR1cm4gY3VycmVudFByb2plY3QuZ2V0SWQoKTtcbn07XG5cbmNvbnN0IGdldFByb2plY3RCeUlkID0gKHByb2plY3RJZCkgPT4ge1xuICByZXR1cm4gcHJvamVjdExpc3QuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRJZCgpID09PSBwcm9qZWN0SWQpO1xufTtcblxuY29uc3QgZ2V0VGFza0J5SWQgPSAocHJvamVjdCwgdGFza0lkKSA9PiB7XG4gIHJldHVybiBwcm9qZWN0LnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0SWQoKSA9PT0gdGFza0lkKTtcbn07XG5cbmV4cG9ydCB7XG4gIHByb2plY3RMaXN0LFxuICBhZGRUYXNrVG9Qcm9qZWN0VGFza3MsXG4gIHJlbW92ZVRhc2tGcm9tUHJvamVjdFRhc2tzLFxuICBhZGRQcm9qZWN0VG9Qcm9qZWN0TGlzdCxcbiAgcmVtb3ZlUHJvamVjdEZyb21Qcm9qZWN0TGlzdCxcbiAgc2V0Q3VycmVudFByb2plY3QsXG4gIGdldEN1cnJlbnRQcm9qZWN0LFxuICBnZXRDdXJyZW50UHJvamVjdElkLFxufTtcbiIsImNvbnN0IGNyZWF0ZVByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgY29uc3QgdGFza3MgPSBbXTtcbiAgY29uc3QgaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpO1xuICBjb25zdCBnZXRJZCA9ICgpID0+IGlkO1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG5cbiAgY29uc3QgZ2V0SW5mbyA9ICgpID0+IHtcbiAgICByZXR1cm4gYElkOiAke2dldElkKCl9LCB0aXRsZTogJHt0aXRsZX1gO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdGFza3MsXG4gICAgZ2V0SWQsXG4gICAgZ2V0VGl0bGUsXG4gICAgZ2V0SW5mbyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3Q7XG4iLCJjb25zdCBjcmVhdGVUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpID0+IHtcbiAgY29uc3QgaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpO1xuICBjb25zdCBnZXRJZCA9ICgpID0+IGlkO1xuXG4gIGNvbnN0IGdldFByb2plY3RJZCA9ICgpID0+IHByb2plY3QuZ2V0SWQoKTtcblxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuXG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG5cbiAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IGR1ZURhdGU7XG5cbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcblxuICBjb25zdCBnZXRJbmZvID0gKCkgPT4ge1xuICAgIHJldHVybiBgSWQ6ICR7Z2V0SWQoKX0sIHRpdGxlOiAke3RpdGxlfSwgZGVzY3JpcHRpb246ICR7ZGVzY3JpcHRpb259LCBkdWVEYXRlOiAke2R1ZURhdGV9LCBwcmlvcml0eTogJHtwcmlvcml0eX1gO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0SWQsXG4gICAgZ2V0UHJvamVjdElkLFxuICAgIGdldEluZm8sXG4gICAgZ2V0VGl0bGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0RHVlRGF0ZSxcbiAgICBnZXRQcmlvcml0eSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2s7XG4iLCJpbXBvcnQgeyBhZGREZWZhdWx0UHJvamVjdCwgYWRkTGlzdGVuZXJzIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IHByb2plY3RMaXN0LCBnZXRDdXJyZW50UHJvamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvbW9kZWxcIjtcblxuY29uc3QgcHJpbnRUYXNrc0Zyb21Qcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgcHJvamVjdC50YXNrcy5mb3JFYWNoKChlbGUpID0+IGNvbnNvbGUubG9nKGVsZS5nZXRJbmZvKCkpKTtcbn07XG5cbmNvbnN0IHByaW50UHJvamVjdHNGcm9tUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0TGlzdCkge1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QuZ2V0SW5mbygpKTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWcsIGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgZ2V0RWxlbWVudCA9IChzZWxlY3RvcikgPT4ge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59O1xuXG5jb25zdCBjcmVhdGVUYXNrRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLmNsYXNzTmFtZSA9IFwidGFzay1mb3JtXCI7XG5cbiAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlLnR5cGUgPSBcInRleHRcIjtcbiAgdGl0bGUucGxhY2Vob2xkZXIgPSBcIkFkZCB0YXNrXCI7XG4gIHRpdGxlLm5hbWUgPSBcInRhc2tcIjtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVzY3JpcHRpb24udHlwZSA9IFwidGV4dFwiO1xuICBkZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiRGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb24ubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcblxuICBjb25zdCBkYXRlID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgZGF0ZS5uYW1lID0gXCJkYXRlXCI7XG5cbiAgY29uc3QgY29sb3JzID0gY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29sb3JzLm5hbWUgPSBcImNvbG9yc1wiO1xuXG4gIGNvbnN0IHJlZCA9IGNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHJlZC52YWx1ZSA9IFwicmVkXCI7XG4gIHJlZC50ZXh0Q29udGVudCA9IFwicmVkXCI7XG4gIGNvbnN0IHllbGxvdyA9IGNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHllbGxvdy52YWx1ZSA9IFwieWVsbG93XCI7XG4gIHllbGxvdy50ZXh0Q29udGVudCA9IFwieWVsbG93XCI7XG4gIGNvbnN0IGdyZWVuID0gY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgZ3JlZW4udmFsdWUgPSBcImdyZWVuXCI7XG4gIGdyZWVuLnRleHRDb250ZW50ID0gXCJncmVlblwiO1xuXG4gIGNvbG9ycy5hcHBlbmQocmVkLCB5ZWxsb3csIGdyZWVuKTtcblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwic3VibWl0LWJ1dHRvblwiKTtcbiAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgdGFza1wiO1xuXG4gIGZvcm0uYXBwZW5kKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgY29sb3JzLCBzdWJtaXRCdXR0b24pO1xuXG4gIHJldHVybiBmb3JtO1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBjcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5jbGFzc05hbWUgPSBcInByb2plY3QtZm9ybVwiO1xuXG4gIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZS50eXBlID0gXCJ0ZXh0XCI7XG4gIHRpdGxlLnBsYWNlaG9sZGVyID0gXCJQcm9qZWN0IG5hbWVcIjtcbiAgdGl0bGUubmFtZSA9IFwicHJvamVjdC10aXRsZVwiO1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJzdWJtaXQtYnV0dG9uXCIpO1xuICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuXG4gIGZvcm0uYXBwZW5kKHRpdGxlLCBzdWJtaXRCdXR0b24pO1xuXG4gIHJldHVybiBmb3JtO1xufTtcblxuY29uc3QgY3JlYXRlVGFza0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHRhc2tMaXN0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRhc2stbGlzdFwiKTtcbiAgcmV0dXJuIHRhc2tMaXN0O1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByb2plY3QtbGlzdFwiKTtcbiAgcmV0dXJuIHByb2plY3RMaXN0O1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEVsZW1lbnQgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGdldEVsZW1lbnQoXCIucHJvamVjdC1saXN0XCIpO1xuXG4gIGNvbnN0IHByb2plY3RFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZWxlbWVudFwiKTtcbiAgcHJvamVjdEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmdldElkKCk7XG5cbiAgY29uc3QgcHJvamVjdFRpdGxlID0gY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKTtcbiAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWVsZW1lbnRcIik7XG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcbiAgcHJvamVjdFRpdGxlLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5nZXRJZCgpO1xuXG4gIGNvbnN0IHByb2plY3RFZGl0ID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcHJvamVjdEVkaXQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZWRpdFwiKTtcbiAgcHJvamVjdEVkaXQudGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgcHJvamVjdEVkaXQuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmdldElkKCk7XG5cbiAgY29uc3QgcHJvamVjdFJlbW92ZSA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHByb2plY3RSZW1vdmUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtcmVtb3ZlXCIpO1xuICBwcm9qZWN0UmVtb3ZlLnRleHRDb250ZW50ID0gXCJSZW1vdmVcIjtcbiAgcHJvamVjdFJlbW92ZS5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuZ2V0SWQoKTtcblxuICBwcm9qZWN0RWxlbWVudC5hcHBlbmQocHJvamVjdFRpdGxlLCBwcm9qZWN0RWRpdCwgcHJvamVjdFJlbW92ZSk7XG4gIHByb2plY3RMaXN0LmFwcGVuZChwcm9qZWN0RWxlbWVudCk7XG59O1xuXG5jb25zdCBjcmVhdGVEZWZhdWx0UHJvamVjdEVsZW1lbnQgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGdldEVsZW1lbnQoXCIucHJvamVjdC1saXN0XCIpO1xuXG4gIGNvbnN0IHByb2plY3RFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZWxlbWVudFwiKTtcbiAgcHJvamVjdEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmdldElkKCk7XG5cbiAgY29uc3QgcHJvamVjdFRpdGxlID0gY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKTtcbiAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWVsZW1lbnRcIik7XG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcbiAgcHJvamVjdFRpdGxlLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5nZXRJZCgpO1xuXG4gIHByb2plY3RFbGVtZW50LmFwcGVuZChwcm9qZWN0VGl0bGUpO1xuICBwcm9qZWN0TGlzdC5hcHBlbmQocHJvamVjdEVsZW1lbnQpO1xufTtcblxuY29uc3QgZWRpdFByb2plY3RNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdE1vZGFsID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm1vZGFsLWVkaXRcIik7XG5cbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibW9kYWwtZWRpdC10aXRsZS1jb250YWluZXJcIik7XG5cbiAgY29uc3QgaDEgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJtb2RhbC1lZGl0LXRpdGxlXCIpO1xuICBoMS50ZXh0Q29udGVudCA9IFwiRWRpdCBwcm9qZWN0XCI7XG5cbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtb2RhbC1lZGl0LWNvbnRlbnQtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIFwibW9kYWwtZWRpdC1sYWJlbFwiKTtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibW9kYWwtdGl0bGVcIik7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiO1xuXG4gIGNvbnN0IGlucHV0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFwibW9kYWwtZWRpdC1pbnB1dFwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm1vZGFsLXRpdGxlXCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vZGFsLXRpdGxlXCIpO1xuXG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtb2RhbC1lZGl0LWJ1dHRvbi1jb250YWluZXJcIik7XG5cbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcIm1vZGFsLWVkaXQtY2J1dHRvblwiKTtcbiAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuICBjb25zdCBlZGl0QnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcIm1vZGFsLWVkaXQtZWJ1dHRvblwiKTtcbiAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuXG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZChoMSk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKGxhYmVsLCBpbnB1dCk7XG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoY2FuY2VsQnV0dG9uLCBlZGl0QnV0dG9uKTtcbiAgcHJvamVjdE1vZGFsLmFwcGVuZCh0aXRsZUNvbnRhaW5lciwgY29udGVudENvbnRhaW5lciwgYnV0dG9uQ29udGFpbmVyKTtcblxuICByZXR1cm4gcHJvamVjdE1vZGFsO1xufTtcblxuY29uc3QgY3JlYXRlVGFza0VsZW1lbnQgPSAodGFzaykgPT4ge1xuICBjb25zdCB0YXNrTGlzdCA9IGdldEVsZW1lbnQoXCIudGFzay1saXN0XCIpO1xuXG4gIGNvbnN0IHRhc2tFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2stZWxlbWVudFwiKTtcbiAgdGFza0VsZW1lbnQuZGF0YXNldC50YXNrSWQgPSB0YXNrLmdldElkKCk7XG5cbiAgY29uc3QgdGFza1RpdGxlID0gY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZVwiKTtcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay5nZXRUaXRsZSgpO1xuICB0YXNrVGl0bGUuZGF0YXNldC50YXNrSWQgPSB0YXNrLmdldElkKCk7XG5cbiAgY29uc3QgdGFza0Rlc2MgPSBjcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0Rlc2MuY2xhc3NMaXN0LmFkZChcInRhc2stZGVzY1wiKTtcbiAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSB0YXNrLmdldERlc2NyaXB0aW9uKCk7XG4gIHRhc2tEZXNjLmRhdGFzZXQudGFza0lkID0gdGFzay5nZXRJZCgpO1xuXG4gIGNvbnN0IHRhc2tEYXRlID0gY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRhdGVcIik7XG4gIHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFzay5nZXREdWVEYXRlKCk7XG4gIHRhc2tEYXRlLmRhdGFzZXQudGFza0lkID0gdGFzay5nZXRJZCgpO1xuXG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRhc2stcHJpb3JpdHlcIik7XG4gIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2suZ2V0UHJpb3JpdHkoKTtcbiAgdGFza1ByaW9yaXR5LmRhdGFzZXQudGFza0lkID0gdGFzay5nZXRJZCgpO1xuXG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0SWQgPSB0YXNrLmdldFByb2plY3RJZCgpO1xuICB0YXNrRWxlbWVudC5kYXRhc2V0LnByb2plY3RJZCA9IGN1cnJlbnRQcm9qZWN0SWQ7XG5cbiAgY29uc3QgdGFza0VkaXQgPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0YXNrRWRpdC5jbGFzc0xpc3QuYWRkKFwidGFzay1lZGl0XCIpO1xuICB0YXNrRWRpdC50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICB0YXNrRWRpdC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suZ2V0SWQoKTtcblxuICBjb25zdCB0YXNrUmVtb3ZlID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGFza1JlbW92ZS5jbGFzc0xpc3QuYWRkKFwidGFzay1yZW1vdmVcIik7XG4gIHRhc2tSZW1vdmUudGV4dENvbnRlbnQgPSBcIlJlbW92ZVwiO1xuICB0YXNrUmVtb3ZlLmRhdGFzZXQudGFza0lkID0gdGFzay5nZXRJZCgpO1xuXG4gIHRhc2tFbGVtZW50LmFwcGVuZChcbiAgICB0YXNrVGl0bGUsXG4gICAgdGFza0Rlc2MsXG4gICAgdGFza0RhdGUsXG4gICAgdGFza1ByaW9yaXR5LFxuICAgIHRhc2tFZGl0LFxuICAgIHRhc2tSZW1vdmVcbiAgKTtcbiAgdGFza0xpc3QuYXBwZW5kKHRhc2tFbGVtZW50KTtcbn07XG5cbmNvbnN0IHJlbmRlclRhc2tzRnJvbUN1cnJlbnRQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gIGxldCB0YXNrTGlzdEh0bWwgPSBnZXRFbGVtZW50KFwiLnRhc2stbGlzdFwiKTtcbiAgdGFza0xpc3RIdG1sLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgY3VycmVudFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNyZWF0ZVRhc2tFbGVtZW50KHRhc2spO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlbmRlclByb2plY3RzRnJvbVByb2plY3RMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdERPTSA9IGdldEVsZW1lbnQoXCIucHJvamVjdC1saXN0XCIpO1xuICBwcm9qZWN0TGlzdERPTS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBpZiAocHJvamVjdC5nZXRUaXRsZSgpID09PSBcIkRlZmF1bHRcIikge1xuICAgICAgY3JlYXRlRGVmYXVsdFByb2plY3RFbGVtZW50KHByb2plY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0KTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFwiaGVhZGVyXCIpO1xuXG4gIGNvbnN0IGgxID0gY3JlYXRlRWxlbWVudChcImgxXCIsIFwidGl0bGVcIik7XG4gIGgxLnRleHRDb250ZW50ID0gXCJUby1EbyBMaXN0XCI7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBjcmVhdGVFbGVtZW50KFwibWFpblwiLCBcIm1haW5cIik7XG5cbiAgY29uc3QgaDEgPSBjcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGgxLnRleHRDb250ZW50ID0gXCJUb2Rvc1wiO1xuXG4gIG1haW4uYXBwZW5kKFxuICAgIGNyZWF0ZVByb2plY3RGb3JtKCksXG4gICAgY3JlYXRlUHJvamVjdExpc3QoKSxcbiAgICBoMSxcbiAgICBjcmVhdGVUYXNrRm9ybSgpLFxuICAgIGNyZWF0ZVRhc2tMaXN0KClcbiAgKTtcbiAgcmV0dXJuIG1haW47XG59O1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIiwgXCJmb290ZXJcIik7XG5cbiAgY29uc3QgcCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiYXV0aG9yXCIpO1xuICBwLnRleHRDb250ZW50ID0gXCJDb2RlZCBieSBBcmllY2hcIjtcblxuICBjb25zdCBnaXRodWJMaW5rID0gY3JlYXRlRWxlbWVudChcImFcIiwgXCJnaXRodWItbGlua1wiKTtcbiAgZ2l0aHViTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vQXJpZWNoXCI7XG4gIGdpdGh1Ykxpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuXG4gIGNvbnN0IGdpdGh1Ykljb24gPSBjcmVhdGVFbGVtZW50KFwiaVwiLCBcImdpdGh1Yi1pY29uXCIpO1xuICBnaXRodWJJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1icmFuZHNcIik7XG4gIGdpdGh1Ykljb24uY2xhc3NMaXN0LmFkZChcImZhLWdpdGh1YlwiKTtcblxuICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1Ykljb24pO1xuICBmb290ZXIuYXBwZW5kKHAsIGdpdGh1YkxpbmspO1xuICByZXR1cm4gZm9vdGVyO1xufTtcblxuY29uc3QgY3JlYXRlTW9kYWxPdmVybGF5ID0gKCkgPT4ge1xuICBjb25zdCBvdmVybGF5ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm92ZXJsYXlcIik7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuICBvdmVybGF5LmFwcGVuZChlZGl0UHJvamVjdE1vZGFsKCkpO1xuXG4gIHJldHVybiBvdmVybGF5O1xufTtcblxuY29uc3QgZ2V0SW5pdFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBnZXRFbGVtZW50KFwiYm9keVwiKTtcblxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiY29udGFpbmVyXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNb2RhbE92ZXJsYXkoKSk7XG5cbiAgYWRkTGlzdGVuZXJzKCk7XG4gIGFkZERlZmF1bHRQcm9qZWN0KCk7XG4gIGVkaXRQcm9qZWN0TW9kYWwoKTsgLy8gVGVtcCBzb2x1dGlvblxufTtcblxuZXhwb3J0IHtcbiAgcHJpbnRUYXNrc0Zyb21Qcm9qZWN0LFxuICBwcmludFByb2plY3RzRnJvbVByb2plY3RMaXN0LFxuICBnZXRJbml0UGFnZSxcbiAgZ2V0RWxlbWVudCxcbiAgY3JlYXRlRWxlbWVudCxcbiAgY3JlYXRlUHJvamVjdEVsZW1lbnQsXG4gIGNyZWF0ZURlZmF1bHRQcm9qZWN0RWxlbWVudCxcbiAgY3JlYXRlVGFza0VsZW1lbnQsXG4gIHJlbmRlclRhc2tzRnJvbUN1cnJlbnRQcm9qZWN0LFxuICByZW5kZXJQcm9qZWN0c0Zyb21Qcm9qZWN0TGlzdCxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IGdldEluaXRQYWdlIH0gZnJvbSBcIi4vdmlld3Mvdmlld1wiO1xuXG5nZXRJbml0UGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9