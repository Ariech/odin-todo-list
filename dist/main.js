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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --light-gray: #b9b9b9;
  --neon-pink: #e6007e;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  background-color: black;
  font-family: "Roboto", sans-serif;
  color: white;
}

.container {
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 0 2rem;
}

/* Common styles */

.project-form,
.task-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.task-form input,
.task-form select,
.project-form input,
.task-desc-ta,
.submit-button {
  background-color: rgb(2, 2, 2);
  color: white;
  border: 1px solid var(--light-gray);
  padding: 7px;
  border-radius: 3px;
  min-height: 46px;
}

.submit-button {
  margin: 1rem 0 2rem;
  border: 3px solid var(--neon-pink);
  color: var(--neon-pink);
  font-size: 1.15rem;
  font-weight: bold;
}

::placeholder {
  color: var(--light-gray);
}

.project-edit,
.project-remove,
.task-edit,
.task-remove {
  padding: 5px;
}

.task-list,
.project-list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

/* Calendar date picker icon */
::-webkit-calendar-picker-indicator {
  filter: invert(100%);
}

/* Header section */

.header {
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Main section */

.main {
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* Project section */

.project-container {
  margin-bottom: 1rem;
}

.project-element {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  background-color: #274e48;
  overflow: hidden;
  padding: 0.33rem 0.15rem;
  border-radius: 5px;
}

.project-button-container {
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
}

/* Task section */

.todo-title {
  text-align: center;
  padding: 1rem;
  font-size: 2.5rem;
}

.task-element {
  display: grid;
  grid-template-columns: 1.75fr 2.5fr 1fr 1fr 1fr;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: #274e48;
  border-radius: 5px;
  overflow: hidden;
  min-height: 40px;
  padding: 0 7px;
}

.task-button-container {
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
}

.task-desc {
  overflow: hidden;
  text-overflow: ellipsis;
}

.task-desc-ta::placeholder {
  line-height: 32px;
}

input[type="date"],
select[name="colors"] {
  color: var(--light-gray);
}

.task-desc-ta::-webkit-scrollbar {
  display: none;
}
/* Footer section */

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  gap: 0.5rem;
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
  background-color: rgba(0, 0, 0, 0.8);
  margin: 0 auto;
  padding: 0 2rem;
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
  width: 35rem;
  background-color: gray;
}

/* Modal edit project */

.modal-edit-project,
.modal-edit-task {
  background-color: rgb(10, 10, 10);
  border-radius: 10px;
  padding: 3rem 3rem;
  flex-direction: column;
  gap: 1rem;
}

.modal-edit-content-container,
.modal-edit-title-container {
  display: flex;
  flex-direction: column;
}

.modal-edit-button-container {
  display: flex;
}

.modal-edit-title-container,
.modal-edit-button-container {
  justify-content: center;
  align-items: start;
}

.modal-edit-button-container {
  gap: 10px;
  justify-content: space-between;
}

.modal-edit-content-container-task {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.modal-edit-title {
  font-size: 3rem;
}

.modal-edit-label {
  font-size: 1.15rem;
}

.modal-edit-input,
.modal-edit-content-container-task > input,
.modal-edit-content-container-task > textarea,
.modal-edit-content-container-task > select {
  background-color: rgb(2, 2, 2);
  color: white;
  border: 1px solid var(--light-gray);
  padding: 7px;
  border-radius: 3px;
  min-height: 46px;
}

.modal-edit-cbutton,
.modal-edit-ebutton,
.modal-edit-ebutton-task {
  flex: 1;
  border: 1px solid var(--neon-pink);
  border-radius: 5px;
  background-color: black;
  color: var(--neon-pink);
  padding: 1rem 3rem;
  font-weight: bold;
}

/* Media queries */

@media only screen and (min-width: 1030px) {
  .main {
    flex-direction: row;
    gap: 2rem;
  }

  .project-container,
  .task-container {
    width: 100%;
  }

  .task-form,
  .project-form {
    flex-direction: row;
    margin-bottom: 1rem;
  }

  .submit-button {
    margin: 0;
    border: 1px solid var(--neon-pink);
    color: var(--neon-pink);
    font-size: 1rem;
    font-weight: bold;
  }

  .task-form input,
  .task-form select,
  .project-form .submit-button {
    flex: 1;
  }

  .task-form .submit-button,
  .project-form input,
  input[type="date"]:nth-child(3) {
    flex: 2;
  }

  .modal-edit-project,
  .modal-edit-task {
    width: 25rem;
  }

  .overlay {
    padding: 0;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap\");\n\n:root {\n  --light-gray: #b9b9b9;\n  --neon-pink: #e6007e;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n  background-color: black;\n  font-family: \"Roboto\", sans-serif;\n  color: white;\n}\n\n.container {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  padding: 0 2rem;\n}\n\n/* Common styles */\n\n.project-form,\n.task-form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.task-form input,\n.task-form select,\n.project-form input,\n.task-desc-ta,\n.submit-button {\n  background-color: rgb(2, 2, 2);\n  color: white;\n  border: 1px solid var(--light-gray);\n  padding: 7px;\n  border-radius: 3px;\n  min-height: 46px;\n}\n\n.submit-button {\n  margin: 1rem 0 2rem;\n  border: 3px solid var(--neon-pink);\n  color: var(--neon-pink);\n  font-size: 1.15rem;\n  font-weight: bold;\n}\n\n::placeholder {\n  color: var(--light-gray);\n}\n\n.project-edit,\n.project-remove,\n.task-edit,\n.task-remove {\n  padding: 5px;\n}\n\n.task-list,\n.project-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n\n/* Calendar date picker icon */\n::-webkit-calendar-picker-indicator {\n  filter: invert(100%);\n}\n\n/* Header section */\n\n.header {\n  min-height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Main section */\n\n.main {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n/* Project section */\n\n.project-container {\n  margin-bottom: 1rem;\n}\n\n.project-element {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  background-color: #274e48;\n  overflow: hidden;\n  padding: 0.33rem 0.15rem;\n  border-radius: 5px;\n}\n\n.project-button-container {\n  display: flex;\n  gap: 1rem;\n  padding: 0 1rem;\n}\n\n/* Task section */\n\n.todo-title {\n  text-align: center;\n  padding: 1rem;\n  font-size: 2.5rem;\n}\n\n.task-element {\n  display: grid;\n  grid-template-columns: 1.75fr 2.5fr 1fr 1fr 1fr;\n  gap: 1rem;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #274e48;\n  border-radius: 5px;\n  overflow: hidden;\n  min-height: 40px;\n  padding: 0 7px;\n}\n\n.task-button-container {\n  display: flex;\n  gap: 1rem;\n  padding: 0 1rem;\n}\n\n.task-desc {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.task-desc-ta::placeholder {\n  line-height: 32px;\n}\n\ninput[type=\"date\"],\nselect[name=\"colors\"] {\n  color: var(--light-gray);\n}\n\n.task-desc-ta::-webkit-scrollbar {\n  display: none;\n}\n/* Footer section */\n\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100px;\n  gap: 0.5rem;\n}\n\n.fa-github::before {\n  content: \"\\f09b\";\n  color: #fff;\n}\n\n/* Overlay */\n\n.overlay {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n\n.overlay.hidden {\n  display: none;\n}\n\n/* Modals */\n\n.modal-edit-project,\n.modal-edit-task {\n  display: none;\n  z-index: 1;\n  position: relative;\n  margin: 0 auto;\n  width: 35rem;\n  background-color: gray;\n}\n\n/* Modal edit project */\n\n.modal-edit-project,\n.modal-edit-task {\n  background-color: rgb(10, 10, 10);\n  border-radius: 10px;\n  padding: 3rem 3rem;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.modal-edit-content-container,\n.modal-edit-title-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.modal-edit-button-container {\n  display: flex;\n}\n\n.modal-edit-title-container,\n.modal-edit-button-container {\n  justify-content: center;\n  align-items: start;\n}\n\n.modal-edit-button-container {\n  gap: 10px;\n  justify-content: space-between;\n}\n\n.modal-edit-content-container-task {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.modal-edit-title {\n  font-size: 3rem;\n}\n\n.modal-edit-label {\n  font-size: 1.15rem;\n}\n\n.modal-edit-input,\n.modal-edit-content-container-task > input,\n.modal-edit-content-container-task > textarea,\n.modal-edit-content-container-task > select {\n  background-color: rgb(2, 2, 2);\n  color: white;\n  border: 1px solid var(--light-gray);\n  padding: 7px;\n  border-radius: 3px;\n  min-height: 46px;\n}\n\n.modal-edit-cbutton,\n.modal-edit-ebutton,\n.modal-edit-ebutton-task {\n  flex: 1;\n  border: 1px solid var(--neon-pink);\n  border-radius: 5px;\n  background-color: black;\n  color: var(--neon-pink);\n  padding: 1rem 3rem;\n  font-weight: bold;\n}\n\n/* Media queries */\n\n@media only screen and (min-width: 1030px) {\n  .main {\n    flex-direction: row;\n    gap: 2rem;\n  }\n\n  .project-container,\n  .task-container {\n    width: 100%;\n  }\n\n  .task-form,\n  .project-form {\n    flex-direction: row;\n    margin-bottom: 1rem;\n  }\n\n  .submit-button {\n    margin: 0;\n    border: 1px solid var(--neon-pink);\n    color: var(--neon-pink);\n    font-size: 1rem;\n    font-weight: bold;\n  }\n\n  .task-form input,\n  .task-form select,\n  .project-form .submit-button {\n    flex: 1;\n  }\n\n  .task-form .submit-button,\n  .project-form input,\n  input[type=\"date\"]:nth-child(3) {\n    flex: 2;\n  }\n\n  .modal-edit-project,\n  .modal-edit-task {\n    width: 25rem;\n  }\n\n  .overlay {\n    padding: 0;\n  }\n}\n"],"sourceRoot":""}]);
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
  const descriptionInput = (0,_views_view__WEBPACK_IMPORTED_MODULE_3__.getElement)(".task-desc-ta");
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
  projectModal.style.display = "flex";

  selectProjectIdOnClick(e);
};

const showTaskModal = (e) => {
  const taskModal = document.querySelector(".modal-edit-task");

  changeOverlayState();
  taskModal.style.display = "flex";
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
  const taskIndex = project.tasks.indexOf(task);
  project.tasks.splice(taskIndex, 1);
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

  const description = createElement("textarea", "task-desc-ta");
  description.placeholder = "Description";

  const date = createElement("input");
  date.type = "date";
  date.name = "date";

  const colors = createElement("select");
  colors.name = "colors";

  const high = createElement("option");
  high.value = "high";
  high.textContent = "high";
  const medium = createElement("option");
  medium.value = "medium";
  medium.textContent = "medium";
  const low = createElement("option");
  low.value = "low";
  low.textContent = "low";

  colors.append(high, medium, low);

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
    const buttonContainer = createElement("div", "project-button-container");
    const projectEdit = createElement("i");
    projectEdit.classList.add("fa-regular");
    projectEdit.classList.add("fa-pen-to-square");
    projectEdit.classList.add("project-edit");
    projectEdit.dataset.projectId = project.getId();

    const projectRemove = createElement("i");
    projectRemove.classList.add("fa-regular");
    projectRemove.classList.add("fa-trash-can");
    projectRemove.classList.add("project-remove");
    projectRemove.dataset.projectId = project.getId();

    buttonContainer.append(projectEdit, projectRemove);
    projectElement.append(buttonContainer);
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
  input.setAttribute("placeholder", "Project name");

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

  const h1 = createElement("h1", "modal-edit-title");
  h1.textContent = "Edit task";

  const contentContainer = createElement(
    "div",
    "modal-edit-content-container-task"
  );

  const labelTitle = createElement("label", "modal-edit-label");
  labelTitle.setAttribute("for", "modal-title-task");
  labelTitle.textContent = "Title";

  const inputTitle = createElement("input", "modal-title-input-task");
  inputTitle.setAttribute("name", "modal-title-task");
  inputTitle.setAttribute("id", "modal-title-task");

  const labelDescription = createElement("label", "modal-edit-label");
  labelDescription.setAttribute("for", "modal-description-task");
  labelDescription.textContent = "Description";

  const inputDescription = createElement("textarea", "modal-desc-input-task");
  inputDescription.setAttribute("name", "modal-description-task");
  inputDescription.setAttribute("id", "modal-description-task");
  inputDescription.rows = "3";
  inputDescription.cols = "7";

  const date = createElement("input");
  date.type = "date";
  date.name = "date-edit";

  const colors = createElement("select");
  colors.name = "colors-edit";

  const high = createElement("option");
  high.value = "high";
  high.textContent = "high";
  const medium = createElement("option");
  medium.value = "medium";
  medium.textContent = "medium";
  const low = createElement("option");
  low.value = "low";
  low.textContent = "low";

  colors.append(high, medium, low);

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

  const buttonContainer = createElement("div", "task-button-container");

  const taskEdit = createElement("i");
  taskEdit.classList.add("task-edit");
  taskEdit.classList.add("fa-regular");
  taskEdit.classList.add("fa-pen-to-square");
  taskEdit.dataset.taskId = task.getId();

  const taskRemove = createElement("i");
  taskRemove.classList.add("task-remove");
  taskRemove.classList.add("fa-regular");
  taskRemove.classList.add("fa-trash-can");

  taskRemove.dataset.taskId = task.getId();

  buttonContainer.append(taskEdit, taskRemove);

  taskElement.append(
    taskTitle,
    taskDesc,
    taskDate,
    taskPriority,
    buttonContainer
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
  const projectContainer = createElement("div", "project-container");
  const taskContainer = createElement("div", "task-container");

  projectContainer.append(createProjectForm(), createProjectList());
  taskContainer.append(createTaskForm(), createTaskList());
  main.append(projectContainer, taskContainer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxJQUFJLElBQUksa0JBQWtCO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLGFBQWEsT0FBTyxVQUFVLFlBQVksV0FBVyxNQUFNLFNBQVMsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFFBQVEsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLFdBQVcsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLGFBQWEsT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sUUFBUSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFh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O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLGdFQUFpQjtBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEVBQUUsc0RBQVc7QUFDYjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUscUVBQVk7QUFDZCxFQUFFLDBFQUFpQjtBQUNuQjtBQUNBLEVBQUUsK0RBQWdCO0FBQ2xCOztBQWFFOzs7Ozs7O1VDbmFGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ3FCOztBQUUzQyx3REFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY29udHJvbGxlcnMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2RlbHMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2tGYWN0b3J5LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tbGlnaHQtZ3JheTogI2I5YjliOTtcbiAgLS1uZW9uLXBpbms6ICNlNjAwN2U7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMCAycmVtO1xufVxuXG4vKiBDb21tb24gc3R5bGVzICovXG5cbi5wcm9qZWN0LWZvcm0sXG4udGFzay1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi50YXNrLWZvcm0gaW5wdXQsXG4udGFzay1mb3JtIHNlbGVjdCxcbi5wcm9qZWN0LWZvcm0gaW5wdXQsXG4udGFzay1kZXNjLXRhLFxuLnN1Ym1pdC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMiwgMik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JheSk7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtaW4taGVpZ2h0OiA0NnB4O1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gIG1hcmdpbjogMXJlbSAwIDJyZW07XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLW5lb24tcGluayk7XG4gIGNvbG9yOiB2YXIoLS1uZW9uLXBpbmspO1xuICBmb250LXNpemU6IDEuMTVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xufVxuXG4ucHJvamVjdC1lZGl0LFxuLnByb2plY3QtcmVtb3ZlLFxuLnRhc2stZWRpdCxcbi50YXNrLXJlbW92ZSB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLnRhc2stbGlzdCxcbi5wcm9qZWN0LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNHJlbTtcbn1cblxuLyogQ2FsZW5kYXIgZGF0ZSBwaWNrZXIgaWNvbiAqL1xuOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICBmaWx0ZXI6IGludmVydCgxMDAlKTtcbn1cblxuLyogSGVhZGVyIHNlY3Rpb24gKi9cblxuLmhlYWRlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogTWFpbiBzZWN0aW9uICovXG5cbi5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcbn1cblxuLyogUHJvamVjdCBzZWN0aW9uICovXG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5wcm9qZWN0LWVsZW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3NGU0ODtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMC4zM3JlbSAwLjE1cmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wcm9qZWN0LWJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDAgMXJlbTtcbn1cblxuLyogVGFzayBzZWN0aW9uICovXG5cbi50b2RvLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuLnRhc2stZWxlbWVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS43NWZyIDIuNWZyIDFmciAxZnIgMWZyO1xuICBnYXA6IDFyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3NGU0ODtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwIDdweDtcbn1cblxuLnRhc2stYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogMCAxcmVtO1xufVxuXG4udGFzay1kZXNjIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi50YXNrLWRlc2MtdGE6OnBsYWNlaG9sZGVyIHtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG5cbmlucHV0W3R5cGU9XCJkYXRlXCJdLFxuc2VsZWN0W25hbWU9XCJjb2xvcnNcIl0ge1xuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XG59XG5cbi50YXNrLWRlc2MtdGE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi8qIEZvb3RlciBzZWN0aW9uICovXG5cbi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uZmEtZ2l0aHViOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxmMDliXCI7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKiBPdmVybGF5ICovXG5cbi5vdmVybGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDJyZW07XG59XG5cbi5vdmVybGF5LmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIE1vZGFscyAqL1xuXG4ubW9kYWwtZWRpdC1wcm9qZWN0LFxuLm1vZGFsLWVkaXQtdGFzayB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAzNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cblxuLyogTW9kYWwgZWRpdCBwcm9qZWN0ICovXG5cbi5tb2RhbC1lZGl0LXByb2plY3QsXG4ubW9kYWwtZWRpdC10YXNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwLCAxMCwgMTApO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAzcmVtIDNyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuLm1vZGFsLWVkaXQtY29udGVudC1jb250YWluZXIsXG4ubW9kYWwtZWRpdC10aXRsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubW9kYWwtZWRpdC1idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1vZGFsLWVkaXQtdGl0bGUtY29udGFpbmVyLFxuLm1vZGFsLWVkaXQtYnV0dG9uLWNvbnRhaW5lciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi5tb2RhbC1lZGl0LWJ1dHRvbi1jb250YWluZXIge1xuICBnYXA6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1vZGFsLWVkaXQtY29udGVudC1jb250YWluZXItdGFzayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cblxuLm1vZGFsLWVkaXQtdGl0bGUge1xuICBmb250LXNpemU6IDNyZW07XG59XG5cbi5tb2RhbC1lZGl0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xufVxuXG4ubW9kYWwtZWRpdC1pbnB1dCxcbi5tb2RhbC1lZGl0LWNvbnRlbnQtY29udGFpbmVyLXRhc2sgPiBpbnB1dCxcbi5tb2RhbC1lZGl0LWNvbnRlbnQtY29udGFpbmVyLXRhc2sgPiB0ZXh0YXJlYSxcbi5tb2RhbC1lZGl0LWNvbnRlbnQtY29udGFpbmVyLXRhc2sgPiBzZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMiwgMik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JheSk7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtaW4taGVpZ2h0OiA0NnB4O1xufVxuXG4ubW9kYWwtZWRpdC1jYnV0dG9uLFxuLm1vZGFsLWVkaXQtZWJ1dHRvbixcbi5tb2RhbC1lZGl0LWVidXR0b24tdGFzayB7XG4gIGZsZXg6IDE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5lb24tcGluayk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB2YXIoLS1uZW9uLXBpbmspO1xuICBwYWRkaW5nOiAxcmVtIDNyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vKiBNZWRpYSBxdWVyaWVzICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAzMHB4KSB7XG4gIC5tYWluIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogMnJlbTtcbiAgfVxuXG4gIC5wcm9qZWN0LWNvbnRhaW5lcixcbiAgLnRhc2stY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC50YXNrLWZvcm0sXG4gIC5wcm9qZWN0LWZvcm0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5zdWJtaXQtYnV0dG9uIHtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmVvbi1waW5rKTtcbiAgICBjb2xvcjogdmFyKC0tbmVvbi1waW5rKTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAudGFzay1mb3JtIGlucHV0LFxuICAudGFzay1mb3JtIHNlbGVjdCxcbiAgLnByb2plY3QtZm9ybSAuc3VibWl0LWJ1dHRvbiB7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIC50YXNrLWZvcm0gLnN1Ym1pdC1idXR0b24sXG4gIC5wcm9qZWN0LWZvcm0gaW5wdXQsXG4gIGlucHV0W3R5cGU9XCJkYXRlXCJdOm50aC1jaGlsZCgzKSB7XG4gICAgZmxleDogMjtcbiAgfVxuXG4gIC5tb2RhbC1lZGl0LXByb2plY3QsXG4gIC5tb2RhbC1lZGl0LXRhc2sge1xuICAgIHdpZHRoOiAyNXJlbTtcbiAgfVxuXG4gIC5vdmVybGF5IHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsaUNBQWlDO0VBQ2pDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUEsa0JBQWtCOztBQUVsQjs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTs7Ozs7RUFLRSw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7Ozs7RUFJRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsT0FBTztBQUNUOztBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtDQUErQztFQUMvQyxTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0EsbUJBQW1COztBQUVuQjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBLFlBQVk7O0FBRVo7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxXQUFXOztBQUVYOztFQUVFLGFBQWE7RUFDYixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBLHVCQUF1Qjs7QUFFdkI7O0VBRUUsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOzs7O0VBSUUsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLE9BQU87RUFDUCxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsU0FBUztFQUNYOztFQUVBOztJQUVFLFdBQVc7RUFDYjs7RUFFQTs7SUFFRSxtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsU0FBUztJQUNULGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7RUFFQTs7O0lBR0UsT0FBTztFQUNUOztFQUVBOzs7SUFHRSxPQUFPO0VBQ1Q7O0VBRUE7O0lBRUUsWUFBWTtFQUNkOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG4gIC0tbGlnaHQtZ3JheTogI2I5YjliOTtcXG4gIC0tbmVvbi1waW5rOiAjZTYwMDdlO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwIDJyZW07XFxufVxcblxcbi8qIENvbW1vbiBzdHlsZXMgKi9cXG5cXG4ucHJvamVjdC1mb3JtLFxcbi50YXNrLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stZm9ybSBpbnB1dCxcXG4udGFzay1mb3JtIHNlbGVjdCxcXG4ucHJvamVjdC1mb3JtIGlucHV0LFxcbi50YXNrLWRlc2MtdGEsXFxuLnN1Ym1pdC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDIsIDIpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBwYWRkaW5nOiA3cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBtaW4taGVpZ2h0OiA0NnB4O1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbiB7XFxuICBtYXJnaW46IDFyZW0gMCAycmVtO1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tbmVvbi1waW5rKTtcXG4gIGNvbG9yOiB2YXIoLS1uZW9uLXBpbmspO1xcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbn1cXG5cXG4ucHJvamVjdC1lZGl0LFxcbi5wcm9qZWN0LXJlbW92ZSxcXG4udGFzay1lZGl0LFxcbi50YXNrLXJlbW92ZSB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi50YXNrLWxpc3QsXFxuLnByb2plY3QtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC40cmVtO1xcbn1cXG5cXG4vKiBDYWxlbmRhciBkYXRlIHBpY2tlciBpY29uICovXFxuOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxufVxcblxcbi8qIEhlYWRlciBzZWN0aW9uICovXFxuXFxuLmhlYWRlciB7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIE1haW4gc2VjdGlvbiAqL1xcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLyogUHJvamVjdCBzZWN0aW9uICovXFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWVsZW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzRlNDg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMC4zM3JlbSAwLjE1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbi8qIFRhc2sgc2VjdGlvbiAqL1xcblxcbi50b2RvLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLnRhc2stZWxlbWVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjc1ZnIgMi41ZnIgMWZyIDFmciAxZnI7XFxuICBnYXA6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3NGU0ODtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZzogMCA3cHg7XFxufVxcblxcbi50YXNrLWJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuLnRhc2stZGVzYyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi50YXNrLWRlc2MtdGE6OnBsYWNlaG9sZGVyIHtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0sXFxuc2VsZWN0W25hbWU9XFxcImNvbG9yc1xcXCJdIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG59XFxuXFxuLnRhc2stZGVzYy10YTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLyogRm9vdGVyIHNlY3Rpb24gKi9cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uZmEtZ2l0aHViOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDliXFxcIjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4vKiBPdmVybGF5ICovXFxuXFxuLm92ZXJsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAycmVtO1xcbn1cXG5cXG4ub3ZlcmxheS5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogTW9kYWxzICovXFxuXFxuLm1vZGFsLWVkaXQtcHJvamVjdCxcXG4ubW9kYWwtZWRpdC10YXNrIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogMzVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4vKiBNb2RhbCBlZGl0IHByb2plY3QgKi9cXG5cXG4ubW9kYWwtZWRpdC1wcm9qZWN0LFxcbi5tb2RhbC1lZGl0LXRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwLCAxMCwgMTApO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDNyZW0gM3JlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5tb2RhbC1lZGl0LWNvbnRlbnQtY29udGFpbmVyLFxcbi5tb2RhbC1lZGl0LXRpdGxlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1vZGFsLWVkaXQtYnV0dG9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9kYWwtZWRpdC10aXRsZS1jb250YWluZXIsXFxuLm1vZGFsLWVkaXQtYnV0dG9uLWNvbnRhaW5lciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuLm1vZGFsLWVkaXQtYnV0dG9uLWNvbnRhaW5lciB7XFxuICBnYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5tb2RhbC1lZGl0LWNvbnRlbnQtY29udGFpbmVyLXRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5tb2RhbC1lZGl0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLm1vZGFsLWVkaXQtbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcbn1cXG5cXG4ubW9kYWwtZWRpdC1pbnB1dCxcXG4ubW9kYWwtZWRpdC1jb250ZW50LWNvbnRhaW5lci10YXNrID4gaW5wdXQsXFxuLm1vZGFsLWVkaXQtY29udGVudC1jb250YWluZXItdGFzayA+IHRleHRhcmVhLFxcbi5tb2RhbC1lZGl0LWNvbnRlbnQtY29udGFpbmVyLXRhc2sgPiBzZWxlY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDIsIDIpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBwYWRkaW5nOiA3cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBtaW4taGVpZ2h0OiA0NnB4O1xcbn1cXG5cXG4ubW9kYWwtZWRpdC1jYnV0dG9uLFxcbi5tb2RhbC1lZGl0LWVidXR0b24sXFxuLm1vZGFsLWVkaXQtZWJ1dHRvbi10YXNrIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uZW9uLXBpbmspO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogdmFyKC0tbmVvbi1waW5rKTtcXG4gIHBhZGRpbmc6IDFyZW0gM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBNZWRpYSBxdWVyaWVzICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDMwcHgpIHtcXG4gIC5tYWluIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAycmVtO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY29udGFpbmVyLFxcbiAgLnRhc2stY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAudGFzay1mb3JtLFxcbiAgLnByb2plY3QtZm9ybSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICB9XFxuXFxuICAuc3VibWl0LWJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmVvbi1waW5rKTtcXG4gICAgY29sb3I6IHZhcigtLW5lb24tcGluayk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuXFxuICAudGFzay1mb3JtIGlucHV0LFxcbiAgLnRhc2stZm9ybSBzZWxlY3QsXFxuICAucHJvamVjdC1mb3JtIC5zdWJtaXQtYnV0dG9uIHtcXG4gICAgZmxleDogMTtcXG4gIH1cXG5cXG4gIC50YXNrLWZvcm0gLnN1Ym1pdC1idXR0b24sXFxuICAucHJvamVjdC1mb3JtIGlucHV0LFxcbiAgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdOm50aC1jaGlsZCgzKSB7XFxuICAgIGZsZXg6IDI7XFxuICB9XFxuXFxuICAubW9kYWwtZWRpdC1wcm9qZWN0LFxcbiAgLm1vZGFsLWVkaXQtdGFzayB7XFxuICAgIHdpZHRoOiAyNXJlbTtcXG4gIH1cXG5cXG4gIC5vdmVybGF5IHtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSBcIi4uL21vZHVsZXMvdGFza0ZhY3RvcnlcIjtcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuLi9tb2R1bGVzL3Byb2plY3RGYWN0b3J5XCI7XG5pbXBvcnQge1xuICBhZGRUYXNrVG9Qcm9qZWN0VGFza3MsXG4gIGFkZFByb2plY3RUb1Byb2plY3RMaXN0LFxuICBnZXRDdXJyZW50UHJvamVjdCxcbiAgc2V0Q3VycmVudFByb2plY3QsXG4gIHJlbW92ZVByb2plY3RGcm9tUHJvamVjdExpc3QsXG4gIHJlbW92ZVRhc2tGcm9tUHJvamVjdFRhc2tzLFxuICBwcm9qZWN0TGlzdCxcbiAgZ2V0Q3VycmVudFByb2plY3RJZCxcbiAgZ2V0VGFza0J5SWQsXG4gIHNldEN1cnJlbnRUYXNrSWQsXG4gIGdldEN1cnJlbnRUYXNrSWQsXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZSxcbn0gZnJvbSBcIi4uL21vZGVscy9tb2RlbFwiO1xuaW1wb3J0IHtcbiAgZ2V0RWxlbWVudCxcbiAgY3JlYXRlUHJvamVjdEVsZW1lbnQsXG4gIHJlbmRlclRhc2tzRnJvbUN1cnJlbnRQcm9qZWN0LFxuICByZW5kZXJQcm9qZWN0c0Zyb21Qcm9qZWN0TGlzdCxcbiAgY3JlYXRlRGVmYXVsdFByb2plY3RFbGVtZW50LFxufSBmcm9tIFwiLi4vdmlld3Mvdmlld1wiO1xuXG5jb25zdCBhZGRUb2RvID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZ2V0RWxlbWVudChcIi50YXNrLWZvcm1cIik7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBnZXRFbGVtZW50KCdbbmFtZT1cInRhc2tcIl0nKTtcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGdldEVsZW1lbnQoXCIudGFzay1kZXNjLXRhXCIpO1xuICBjb25zdCBkYXRlSW5wdXQgPSBnZXRFbGVtZW50KCdbbmFtZT1cImRhdGVcIl0nKTtcbiAgY29uc3QgY29sb3JJbnB1dCA9IGdldEVsZW1lbnQoJ1tuYW1lPVwiY29sb3JzXCJdJyk7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG5cbiAgICBjb25zdCB0YXNrID0gY3JlYXRlVGFzayhcbiAgICAgIHRpdGxlSW5wdXQudmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgZGF0ZUlucHV0LnZhbHVlLFxuICAgICAgY29sb3JJbnB1dC52YWx1ZSxcbiAgICAgIHByb2plY3RcbiAgICApO1xuXG4gICAgYWRkVGFza1RvUHJvamVjdFRhc2tzKHByb2plY3QsIHRhc2spO1xuICAgIHJlbmRlclRhc2tzRnJvbUN1cnJlbnRQcm9qZWN0KCk7XG5cbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gIH0pO1xufTtcblxuY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGdldEVsZW1lbnQoXCIucHJvamVjdC1mb3JtXCIpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZ2V0RWxlbWVudCgnW25hbWU9XCJwcm9qZWN0LXRpdGxlXCJdJyk7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHRpdGxlSW5wdXQudmFsdWUgPT09IFwiRGVmYXVsdFwiKSB7XG4gICAgICBhbGVydChcIlVzZSBvdGhlciBuYW1lIVwiKTtcbiAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdCh0aXRsZUlucHV0LnZhbHVlKTtcbiAgICBhZGRQcm9qZWN0VG9Qcm9qZWN0TGlzdChwcm9qZWN0KTtcbiAgICBjcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0KTtcblxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuXG4gICAgZm9ybS5yZXNldCgpO1xuICB9KTtcbn07XG5cbmNvbnN0IGFkZERlZmF1bHRQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIikpO1xuICBpZiAoQXJyYXkuaXNBcnJheShwcm9qZWN0TGlzdERhdGEpKSB7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3RFeGlzdHMgPSBwcm9qZWN0TGlzdERhdGEuc29tZShcbiAgICAgIChwcm9qZWN0RGF0YSkgPT4gcHJvamVjdERhdGEudGl0bGUgPT09IFwiRGVmYXVsdFwiXG4gICAgKTtcblxuICAgIGlmIChkZWZhdWx0UHJvamVjdEV4aXN0cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRlbXAgPSBjcmVhdGVQcm9qZWN0KFwiRGVmYXVsdFwiKTtcbiAgYWRkUHJvamVjdFRvUHJvamVjdExpc3QodGVtcCk7XG4gIGNyZWF0ZURlZmF1bHRQcm9qZWN0RWxlbWVudCh0ZW1wKTtcbiAgc2V0Q3VycmVudFByb2plY3QodGVtcC5nZXRJZCgpKTtcbn07XG5cbmNvbnN0IHNlbGVjdFByb2plY3RJZE9uQ2xpY2sgPSAoZSkgPT4ge1xuICBjb25zdCBwcm9qZWN0SWQgPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3RJZDtcbiAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdElkKTtcbiAgcmVuZGVyVGFza3NGcm9tQ3VycmVudFByb2plY3QoKTtcbn07XG5cbmNvbnN0IHNlbGVjdFRhc2tJZE9uQ2xpY2sgPSAoZSkgPT4ge1xuICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5kYXRhc2V0LnRhc2tJZDtcbiAgc2V0Q3VycmVudFRhc2tJZCh0YXNrSWQpO1xufTtcblxuY29uc3QgcmVtb3ZlUHJvamVjdE9uQ2xpY2sgPSAoZSkgPT4ge1xuICBjb25zdCBwcm9qZWN0SWQgPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3RJZDtcbiAgcmVtb3ZlUHJvamVjdEZyb21Qcm9qZWN0TGlzdChwcm9qZWN0SWQpO1xuICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0TGlzdFswXS5nZXRJZCgpKTtcbiAgcmVuZGVyUHJvamVjdHNGcm9tUHJvamVjdExpc3QoKTtcbiAgcmVuZGVyVGFza3NGcm9tQ3VycmVudFByb2plY3QoKTtcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG59O1xuXG5jb25zdCByZW1vdmVUYXNrT25DbGljayA9IChlKSA9PiB7XG4gIGNvbnN0IHByb2plY3RJZCA9IGdldEN1cnJlbnRQcm9qZWN0SWQoKTtcbiAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuZGF0YXNldC50YXNrSWQ7XG5cbiAgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0VGFza3MocHJvamVjdElkLCB0YXNrSWQpO1xuICByZW5kZXJUYXNrc0Zyb21DdXJyZW50UHJvamVjdCgpO1xuICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbn07XG5cbmNvbnN0IGNoYW5nZU92ZXJsYXlTdGF0ZSA9ICgpID0+IHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xufTtcblxuY29uc3Qgc2hvd1Byb2plY3RNb2RhbCA9IChlKSA9PiB7XG4gIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtZWRpdC1wcm9qZWN0XCIpO1xuXG4gIGNoYW5nZU92ZXJsYXlTdGF0ZSgpO1xuICBwcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG4gIHNlbGVjdFByb2plY3RJZE9uQ2xpY2soZSk7XG59O1xuXG5jb25zdCBzaG93VGFza01vZGFsID0gKGUpID0+IHtcbiAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1lZGl0LXRhc2tcIik7XG5cbiAgY2hhbmdlT3ZlcmxheVN0YXRlKCk7XG4gIHRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIHNlbGVjdFRhc2tJZE9uQ2xpY2soZSk7XG59O1xuXG5jb25zdCBjbG9zZU1vZGFscyA9IChlKSA9PiB7XG4gIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtZWRpdC1wcm9qZWN0XCIpO1xuICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWVkaXQtdGFza1wiKTtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcblxuICBpZiAoXG4gICAgZS50YXJnZXQgPT09IG92ZXJsYXkgfHxcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbC1lZGl0LWNidXR0b25cIilcbiAgKSB7XG4gICAgY2hhbmdlT3ZlcmxheVN0YXRlKCk7XG4gICAgcHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG59O1xuXG5jb25zdCBjbGVhclRhc2tFZGl0SW5wdXRzID0gKCkgPT4ge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWVkaXQtdGFza1wiKTtcbiAgY29uc3QgZWRpdFRpdGxlSW5wdXQgPSBnZXRFbGVtZW50KFwiLm1vZGFsLXRpdGxlLWlucHV0LXRhc2tcIik7XG4gIGNvbnN0IGVkaXREZXNjSW5wdXQgPSBnZXRFbGVtZW50KFwiLm1vZGFsLWRlc2MtaW5wdXQtdGFza1wiKTtcbiAgY29uc3QgZWRpdERhdGVJbnB1dCA9IGdldEVsZW1lbnQoJ1tuYW1lPVwiZGF0ZS1lZGl0XCJdJyk7XG5cbiAgZWRpdFRpdGxlSW5wdXQudmFsdWUgPSBcIlwiO1xuICBlZGl0RGVzY0lucHV0LnZhbHVlID0gXCJcIjtcbiAgZWRpdERhdGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIHRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn07XG5cbmNvbnN0IGVkaXRQcm9qZWN0VGl0bGUgPSAoZSkgPT4ge1xuICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWVkaXQtcHJvamVjdFwiKTtcbiAgY29uc3QgZWRpdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1lZGl0LWlucHV0XCIpO1xuXG4gIGlmIChlZGl0SW5wdXQudmFsdWUgPT09IFwiRGVmYXVsdFwiKSB7XG4gICAgYWxlcnQoXCJVc2Ugb3RoZXIgbmFtZSFcIik7XG4gICAgZWRpdElucHV0LnZhbHVlID0gXCJcIjtcbiAgICByZXR1cm47XG4gIH1cblxuICBnZXRDdXJyZW50UHJvamVjdCgpLnNldFRpdGxlKGVkaXRJbnB1dC52YWx1ZSk7XG4gIHJlbmRlclByb2plY3RzRnJvbVByb2plY3RMaXN0KCk7XG5cbiAgaWYgKGVkaXRJbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgIGNoYW5nZU92ZXJsYXlTdGF0ZSgpO1xuICAgIGVkaXRJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgcHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xufTtcblxuY29uc3QgZWRpdFRhc2tEZXRhaWxzID0gKGUpID0+IHtcbiAgY29uc3QgZWRpdFRpdGxlSW5wdXQgPSBnZXRFbGVtZW50KFwiLm1vZGFsLXRpdGxlLWlucHV0LXRhc2tcIik7XG4gIGNvbnN0IGVkaXREZXNjSW5wdXQgPSBnZXRFbGVtZW50KFwiLm1vZGFsLWRlc2MtaW5wdXQtdGFza1wiKTtcbiAgY29uc3QgZWRpdERhdGVJbnB1dCA9IGdldEVsZW1lbnQoJ1tuYW1lPVwiZGF0ZS1lZGl0XCJdJyk7XG4gIGNvbnN0IGVkaXRDb2xvcklucHV0ID0gZ2V0RWxlbWVudCgnW25hbWU9XCJjb2xvcnMtZWRpdFwiXScpO1xuXG4gIGNvbnN0IHRhc2tJZCA9IGdldEN1cnJlbnRUYXNrSWQoKTtcblxuICBjb25zdCB0YXNrID0gZ2V0VGFza0J5SWQoZ2V0Q3VycmVudFByb2plY3QoKSwgdGFza0lkKTtcblxuICB0YXNrLnNldFRpdGxlKGVkaXRUaXRsZUlucHV0LnZhbHVlKTtcbiAgdGFzay5zZXREZXNjcmlwdGlvbihlZGl0RGVzY0lucHV0LnZhbHVlKTtcbiAgdGFzay5zZXREdWVEYXRlKGVkaXREYXRlSW5wdXQudmFsdWUpO1xuICB0YXNrLnNldFByaW9yaXR5KGVkaXRDb2xvcklucHV0LnZhbHVlKTtcblxuICByZW5kZXJUYXNrc0Zyb21DdXJyZW50UHJvamVjdCgpO1xuXG4gIGNsZWFyVGFza0VkaXRJbnB1dHMoKTtcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG59O1xuXG5jb25zdCBoYW5kbGVDbGlja3MgPSAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdC1lbGVtZW50XCIpKSB7XG4gICAgc2VsZWN0UHJvamVjdElkT25DbGljayhlKTtcbiAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0LXJlbW92ZVwiKSkge1xuICAgIHJlbW92ZVByb2plY3RPbkNsaWNrKGUpO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3QtZWRpdFwiKSkge1xuICAgIHNob3dQcm9qZWN0TW9kYWwoZSk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFzay1yZW1vdmVcIikpIHtcbiAgICByZW1vdmVUYXNrT25DbGljayhlKTtcbiAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YXNrLWVkaXRcIikpIHtcbiAgICBzaG93VGFza01vZGFsKGUpO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsLWVkaXQtZWJ1dHRvblwiKSkge1xuICAgIGVkaXRQcm9qZWN0VGl0bGUoZSk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWwtZWRpdC1lYnV0dG9uLXRhc2tcIikpIHtcbiAgICBlZGl0VGFza0RldGFpbHMoZSk7XG4gIH0gZWxzZSBpZiAoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm92ZXJsYXlcIikpIHtcbiAgICBjbG9zZU1vZGFscyhlKTtcbiAgfVxufTtcblxuY29uc3QgYWRkVGFza0xpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbGlzdFwiKTtcbiAgdGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrcyk7XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0TGlzdGVuZXJzID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0XCIpO1xuICBwcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2tzKTtcbn07XG5cbmNvbnN0IGFkZE92ZXJsYXlMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrcyk7XG59O1xuXG5jb25zdCBhZGRFZGl0UHJvamVjdE1vZGFsTGlzdGVuZXJzID0gKCkgPT4ge1xuICBjb25zdCBlZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWVkaXQtcHJvamVjdFwiKTtcbiAgZWRpdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGlja3MpO1xufTtcblxuY29uc3QgYWRkRWRpdFRhc2tNb2RhbExpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3QgZWRpdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1lZGl0LWVidXR0b24tdGFza1wiKTtcbiAgZWRpdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGlja3MpO1xufTtcblxuY29uc3QgYWRkTGlzdGVuZXJzID0gKCkgPT4ge1xuICBhZGRUb2RvKCk7XG4gIGFkZFByb2plY3QoKTtcbiAgYWRkUHJvamVjdExpc3RlbmVycygpO1xuICBhZGRUYXNrTGlzdGVuZXJzKCk7XG4gIGFkZE92ZXJsYXlMaXN0ZW5lcnMoKTtcbiAgYWRkRWRpdFByb2plY3RNb2RhbExpc3RlbmVycygpO1xuICBhZGRFZGl0VGFza01vZGFsTGlzdGVuZXJzKCk7XG59O1xuXG5leHBvcnQge1xuICBhZGREZWZhdWx0UHJvamVjdCxcbiAgYWRkTGlzdGVuZXJzLFxuICBjcmVhdGVUYXNrLFxuICBjcmVhdGVQcm9qZWN0LFxuICBjcmVhdGVQcm9qZWN0RWxlbWVudCxcbn07XG4iLCJpbXBvcnQgeyBwcmludFByb2plY3RzRnJvbVByb2plY3RMaXN0IH0gZnJvbSBcIi4uL3ZpZXdzL3ZpZXdcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZVRhc2ssXG4gIGNyZWF0ZVByb2plY3QsXG4gIGNyZWF0ZVByb2plY3RFbGVtZW50LFxufSBmcm9tIFwiLi4vY29udHJvbGxlcnMvY29udHJvbGxlclwiO1xuY29uc3QgcHJvamVjdExpc3QgPSBbXTtcbmxldCBjdXJyZW50UHJvamVjdCA9IFwiXCI7XG5sZXQgY3VycmVudFRhc2tJZCA9IFwiXCI7XG5cbmNvbnN0IGFkZFRhc2tUb1Byb2plY3RUYXNrcyA9IChwcm9qZWN0LCB0YXNrKSA9PiB7XG4gIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbn07XG5cbmNvbnN0IHJlbW92ZVRhc2tGcm9tUHJvamVjdFRhc2tzID0gKHByb2plY3RJZCwgdGFza0lkKSA9PiB7XG4gIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpO1xuICBjb25zdCB0YXNrID0gZ2V0VGFza0J5SWQocHJvamVjdCwgdGFza0lkKTtcbiAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdC50YXNrcy5pbmRleE9mKHRhc2spO1xuICBwcm9qZWN0LnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xufTtcblxuY29uc3QgYWRkUHJvamVjdFRvUHJvamVjdExpc3QgPSAocHJvamVjdCkgPT4ge1xuICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xufTtcblxuY29uc3QgcmVtb3ZlUHJvamVjdEZyb21Qcm9qZWN0TGlzdCA9IChwcm9qZWN0SWQpID0+IHtcbiAgY29uc3QgcHJvamVjdFRvUmVtb3ZlID0gZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKTtcblxuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0TGlzdC5pbmRleE9mKHByb2plY3RUb1JlbW92ZSk7XG4gIHByb2plY3RMaXN0LnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuXG4gIHByaW50UHJvamVjdHNGcm9tUHJvamVjdExpc3QoKTtcbn07XG5cbmNvbnN0IHNldEN1cnJlbnRQcm9qZWN0ID0gKGlkKSA9PiB7XG4gIGN1cnJlbnRQcm9qZWN0ID0gZ2V0UHJvamVjdEJ5SWQoaWQpO1xuICByZXR1cm4gY3VycmVudFByb2plY3Q7XG59O1xuXG5jb25zdCBnZXRDdXJyZW50UHJvamVjdCA9ICgpID0+IHtcbiAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xufTtcblxuY29uc3QgZ2V0Q3VycmVudFByb2plY3RJZCA9ICgpID0+IHtcbiAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0LmdldElkKCk7XG59O1xuXG5jb25zdCBnZXRQcm9qZWN0QnlJZCA9IChwcm9qZWN0SWQpID0+IHtcbiAgcmV0dXJuIHByb2plY3RMaXN0LmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0SWQoKSA9PT0gcHJvamVjdElkKTtcbn07XG5cbmNvbnN0IHNldEN1cnJlbnRUYXNrSWQgPSAodGFza0lkKSA9PiB7XG4gIGN1cnJlbnRUYXNrSWQgPSB0YXNrSWQ7XG59O1xuXG5jb25zdCBnZXRDdXJyZW50VGFza0lkID0gKCkgPT4ge1xuICByZXR1cm4gY3VycmVudFRhc2tJZDtcbn07XG5cbmNvbnN0IGdldFRhc2tCeUlkID0gKHByb2plY3QsIHRhc2tJZCkgPT4ge1xuICByZXR1cm4gcHJvamVjdC50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldElkKCkgPT09IHRhc2tJZCk7XG59O1xuXG5jb25zdCB1cGRhdGVMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RMaXN0RGF0YSA9IHByb2plY3RMaXN0Lm1hcCgocHJvamVjdCkgPT4gKHtcbiAgICBpZDogcHJvamVjdC5nZXRJZCgpLFxuICAgIHRhc2tzOiBzZXJpYWxpemVQcm9qZWN0VGFza3MocHJvamVjdCksXG4gICAgdGl0bGU6IHByb2plY3QuZ2V0VGl0bGUoKSxcbiAgfSkpO1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdExpc3RcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3REYXRhKSk7XG59O1xuXG5jb25zdCBzZXJpYWxpemVUYXNrID0gKHRhc2spID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpZDogdGFzay5nZXRJZCgpLFxuICAgIHRpdGxlOiB0YXNrLmdldFRpdGxlKCksXG4gICAgZGVzY3JpcHRpb246IHRhc2suZ2V0RGVzY3JpcHRpb24oKSxcbiAgICBkdWVEYXRlOiB0YXNrLmdldER1ZURhdGUoKSxcbiAgICBwcmlvcml0eTogdGFzay5nZXRQcmlvcml0eSgpLFxuICB9O1xufTtcblxuY29uc3QgZGVzZXJpYWxpemVUYXNrID0gKHRhc2tEYXRhLCBwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKFxuICAgIHRhc2tEYXRhLnRpdGxlLFxuICAgIHRhc2tEYXRhLmRlc2NyaXB0aW9uLFxuICAgIHRhc2tEYXRhLmR1ZURhdGUsXG4gICAgdGFza0RhdGEucHJpb3JpdHksXG4gICAgcHJvamVjdFxuICApO1xuICB0YXNrLnNldElkKHRhc2tEYXRhLmlkKTtcblxuICByZXR1cm4gdGFzaztcbn07XG5cbmNvbnN0IHNlcmlhbGl6ZVByb2plY3RUYXNrcyA9IChwcm9qZWN0KSA9PiB7XG4gIHJldHVybiBwcm9qZWN0LnRhc2tzLm1hcCgodGFzaykgPT4gc2VyaWFsaXplVGFzayh0YXNrKSk7XG59O1xuXG5jb25zdCBpbml0TG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIikpO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHByb2plY3RMaXN0RGF0YSkpIHtcbiAgICBwcm9qZWN0TGlzdERhdGEuZm9yRWFjaCgocHJvamVjdERhdGEpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2plY3REYXRhLnRpdGxlKTtcbiAgICAgIHByb2plY3Quc2V0SWQocHJvamVjdERhdGEuaWQpO1xuXG4gICAgICBjb25zdCB0YXNrcyA9IHByb2plY3REYXRhLnRhc2tzLm1hcCgodGFza0RhdGEpID0+XG4gICAgICAgIGRlc2VyaWFsaXplVGFzayh0YXNrRGF0YSwgcHJvamVjdClcbiAgICAgICk7XG5cbiAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IGFkZFRhc2tUb1Byb2plY3RUYXNrcyhwcm9qZWN0LCB0YXNrKSk7XG4gICAgICBhZGRQcm9qZWN0VG9Qcm9qZWN0TGlzdChwcm9qZWN0KTtcbiAgICAgIGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3QpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQge1xuICBwcm9qZWN0TGlzdCxcbiAgYWRkVGFza1RvUHJvamVjdFRhc2tzLFxuICByZW1vdmVUYXNrRnJvbVByb2plY3RUYXNrcyxcbiAgYWRkUHJvamVjdFRvUHJvamVjdExpc3QsXG4gIHJlbW92ZVByb2plY3RGcm9tUHJvamVjdExpc3QsXG4gIHNldEN1cnJlbnRQcm9qZWN0LFxuICBnZXRDdXJyZW50UHJvamVjdCxcbiAgZ2V0Q3VycmVudFByb2plY3RJZCxcbiAgZ2V0VGFza0J5SWQsXG4gIHNldEN1cnJlbnRUYXNrSWQsXG4gIGdldEN1cnJlbnRUYXNrSWQsXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZSxcbiAgaW5pdExvY2FsU3RvcmFnZSxcbn07XG4iLCJjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gIGNvbnN0IHRhc2tzID0gW107XG4gIGxldCBpZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCk7XG5cbiAgY29uc3Qgc2V0SWQgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlkID0gdmFsdWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldElkID0gKCkgPT4gaWQ7XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcblxuICBjb25zdCBzZXRUaXRsZSA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0SW5mbyA9ICgpID0+IHtcbiAgICByZXR1cm4gYElkOiAke2dldElkKCl9LCB0aXRsZTogJHt0aXRsZX1gO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdGFza3MsXG4gICAgZ2V0SWQsXG4gICAgZ2V0VGl0bGUsXG4gICAgZ2V0SW5mbyxcbiAgICBzZXRUaXRsZSxcbiAgICBzZXRJZCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3Q7XG4iLCJjb25zdCBjcmVhdGVUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpID0+IHtcbiAgbGV0IGlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKTtcbiAgY29uc3QgZ2V0SWQgPSAoKSA9PiBpZDtcblxuICBjb25zdCBnZXRQcm9qZWN0SWQgPSAoKSA9PiBwcm9qZWN0LmdldElkKCk7XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcblxuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBkdWVEYXRlO1xuXG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG5cbiAgY29uc3Qgc2V0VGl0bGUgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRpdGxlID0gdmFsdWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBkZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXREdWVEYXRlID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBkdWVEYXRlID0gdmFsdWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldFByaW9yaXR5ID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBwcmlvcml0eSA9IHZhbHVlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXRJZCA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWQgPSB2YWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0SW5mbyA9ICgpID0+IHtcbiAgICByZXR1cm4gYElkOiAke2dldElkKCl9LCB0aXRsZTogJHt0aXRsZX0sIGRlc2NyaXB0aW9uOiAke2Rlc2NyaXB0aW9ufSwgZHVlRGF0ZTogJHtkdWVEYXRlfSwgcHJpb3JpdHk6ICR7cHJpb3JpdHl9YDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldElkLFxuICAgIGdldFByb2plY3RJZCxcbiAgICBnZXRJbmZvLFxuICAgIGdldFRpdGxlLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIGdldER1ZURhdGUsXG4gICAgZ2V0UHJpb3JpdHksXG4gICAgc2V0VGl0bGUsXG4gICAgc2V0RGVzY3JpcHRpb24sXG4gICAgc2V0RHVlRGF0ZSxcbiAgICBzZXRQcmlvcml0eSxcbiAgICBzZXRJZCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2s7XG4iLCJpbXBvcnQgeyBhZGREZWZhdWx0UHJvamVjdCwgYWRkTGlzdGVuZXJzIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJcIjtcbmltcG9ydCB7XG4gIHByb2plY3RMaXN0LFxuICBnZXRDdXJyZW50UHJvamVjdCxcbiAgaW5pdExvY2FsU3RvcmFnZSxcbn0gZnJvbSBcIi4uL21vZGVscy9tb2RlbFwiO1xuXG5jb25zdCBwcmludFRhc2tzRnJvbVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKGVsZSkgPT4gY29uc29sZS5sb2coZWxlLmdldEluZm8oKSkpO1xufTtcblxuY29uc3QgcHJpbnRQcm9qZWN0c0Zyb21Qcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RMaXN0KSB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdC5nZXRJbmZvKCkpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKHRhZywgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBnZXRFbGVtZW50ID0gKHNlbGVjdG9yKSA9PiB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRhc2tGb3JtID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uY2xhc3NOYW1lID0gXCJ0YXNrLWZvcm1cIjtcblxuICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGUudHlwZSA9IFwidGV4dFwiO1xuICB0aXRsZS5wbGFjZWhvbGRlciA9IFwiQWRkIHRhc2tcIjtcbiAgdGl0bGUubmFtZSA9IFwidGFza1wiO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIFwidGFzay1kZXNjLXRhXCIpO1xuICBkZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiRGVzY3JpcHRpb25cIjtcblxuICBjb25zdCBkYXRlID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgZGF0ZS5uYW1lID0gXCJkYXRlXCI7XG5cbiAgY29uc3QgY29sb3JzID0gY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29sb3JzLm5hbWUgPSBcImNvbG9yc1wiO1xuXG4gIGNvbnN0IGhpZ2ggPSBjcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBoaWdoLnZhbHVlID0gXCJoaWdoXCI7XG4gIGhpZ2gudGV4dENvbnRlbnQgPSBcImhpZ2hcIjtcbiAgY29uc3QgbWVkaXVtID0gY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgbWVkaXVtLnZhbHVlID0gXCJtZWRpdW1cIjtcbiAgbWVkaXVtLnRleHRDb250ZW50ID0gXCJtZWRpdW1cIjtcbiAgY29uc3QgbG93ID0gY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgbG93LnZhbHVlID0gXCJsb3dcIjtcbiAgbG93LnRleHRDb250ZW50ID0gXCJsb3dcIjtcblxuICBjb2xvcnMuYXBwZW5kKGhpZ2gsIG1lZGl1bSwgbG93KTtcblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwic3VibWl0LWJ1dHRvblwiKTtcbiAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgdGFza1wiO1xuXG4gIGZvcm0uYXBwZW5kKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgY29sb3JzLCBzdWJtaXRCdXR0b24pO1xuXG4gIHJldHVybiBmb3JtO1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBjcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5jbGFzc05hbWUgPSBcInByb2plY3QtZm9ybVwiO1xuXG4gIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZS50eXBlID0gXCJ0ZXh0XCI7XG4gIHRpdGxlLnBsYWNlaG9sZGVyID0gXCJQcm9qZWN0IG5hbWVcIjtcbiAgdGl0bGUubmFtZSA9IFwicHJvamVjdC10aXRsZVwiO1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJzdWJtaXQtYnV0dG9uXCIpO1xuICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuXG4gIGZvcm0uYXBwZW5kKHRpdGxlLCBzdWJtaXRCdXR0b24pO1xuXG4gIHJldHVybiBmb3JtO1xufTtcblxuY29uc3QgY3JlYXRlVGFza0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHRhc2tMaXN0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRhc2stbGlzdFwiKTtcbiAgcmV0dXJuIHRhc2tMaXN0O1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByb2plY3QtbGlzdFwiKTtcbiAgcmV0dXJuIHByb2plY3RMaXN0O1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEVsZW1lbnQgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGdldEVsZW1lbnQoXCIucHJvamVjdC1saXN0XCIpO1xuXG4gIGNvbnN0IHByb2plY3RFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZWxlbWVudFwiKTtcbiAgcHJvamVjdEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmdldElkKCk7XG5cbiAgY29uc3QgcHJvamVjdFRpdGxlID0gY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKTtcbiAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWVsZW1lbnRcIik7XG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcbiAgcHJvamVjdFRpdGxlLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5nZXRJZCgpO1xuXG4gIHByb2plY3RFbGVtZW50LmFwcGVuZChwcm9qZWN0VGl0bGUpO1xuXG4gIGlmIChwcm9qZWN0LmdldFRpdGxlKCkgIT09IFwiRGVmYXVsdFwiKSB7XG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByb2plY3QtYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwcm9qZWN0RWRpdCA9IGNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIHByb2plY3RFZGl0LmNsYXNzTGlzdC5hZGQoXCJmYS1yZWd1bGFyXCIpO1xuICAgIHByb2plY3RFZGl0LmNsYXNzTGlzdC5hZGQoXCJmYS1wZW4tdG8tc3F1YXJlXCIpO1xuICAgIHByb2plY3RFZGl0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWVkaXRcIik7XG4gICAgcHJvamVjdEVkaXQuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmdldElkKCk7XG5cbiAgICBjb25zdCBwcm9qZWN0UmVtb3ZlID0gY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgcHJvamVjdFJlbW92ZS5jbGFzc0xpc3QuYWRkKFwiZmEtcmVndWxhclwiKTtcbiAgICBwcm9qZWN0UmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJmYS10cmFzaC1jYW5cIik7XG4gICAgcHJvamVjdFJlbW92ZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1yZW1vdmVcIik7XG4gICAgcHJvamVjdFJlbW92ZS5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuZ2V0SWQoKTtcblxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQocHJvamVjdEVkaXQsIHByb2plY3RSZW1vdmUpO1xuICAgIHByb2plY3RFbGVtZW50LmFwcGVuZChidXR0b25Db250YWluZXIpO1xuICB9XG5cbiAgcHJvamVjdExpc3QuYXBwZW5kKHByb2plY3RFbGVtZW50KTtcbn07XG5cbmNvbnN0IGNyZWF0ZURlZmF1bHRQcm9qZWN0RWxlbWVudCA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZ2V0RWxlbWVudChcIi5wcm9qZWN0LWxpc3RcIik7XG5cbiAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1lbGVtZW50XCIpO1xuICBwcm9qZWN0RWxlbWVudC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuZ2V0SWQoKTtcblxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBjcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlXCIpO1xuICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZWxlbWVudFwiKTtcbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xuICBwcm9qZWN0VGl0bGUuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmdldElkKCk7XG5cbiAgcHJvamVjdEVsZW1lbnQuYXBwZW5kKHByb2plY3RUaXRsZSk7XG4gIHByb2plY3RMaXN0LmFwcGVuZChwcm9qZWN0RWxlbWVudCk7XG59O1xuXG5jb25zdCBlZGl0UHJvamVjdE1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TW9kYWwgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibW9kYWwtZWRpdC1wcm9qZWN0XCIpO1xuXG4gIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm1vZGFsLWVkaXQtdGl0bGUtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGgxID0gY3JlYXRlRWxlbWVudChcImgxXCIsIFwibW9kYWwtZWRpdC10aXRsZVwiKTtcbiAgaDEudGV4dENvbnRlbnQgPSBcIkVkaXQgcHJvamVjdFwiO1xuXG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibW9kYWwtZWRpdC1jb250ZW50LWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBcIm1vZGFsLWVkaXQtbGFiZWxcIik7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm1vZGFsLXRpdGxlXCIpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjtcblxuICBjb25zdCBpbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcIm1vZGFsLWVkaXQtaW5wdXRcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJtb2RhbC10aXRsZVwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb2RhbC10aXRsZVwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJQcm9qZWN0IG5hbWVcIik7XG5cbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm1vZGFsLWVkaXQtYnV0dG9uLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwibW9kYWwtZWRpdC1jYnV0dG9uXCIpO1xuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gIGNvbnN0IGVkaXRCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwibW9kYWwtZWRpdC1lYnV0dG9uXCIpO1xuICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG5cbiAgdGl0bGVDb250YWluZXIuYXBwZW5kKGgxKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmQobGFiZWwsIGlucHV0KTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChjYW5jZWxCdXR0b24sIGVkaXRCdXR0b24pO1xuICBwcm9qZWN0TW9kYWwuYXBwZW5kKHRpdGxlQ29udGFpbmVyLCBjb250ZW50Q29udGFpbmVyLCBidXR0b25Db250YWluZXIpO1xuXG4gIHJldHVybiBwcm9qZWN0TW9kYWw7XG59O1xuXG5jb25zdCBlZGl0VGFza01vZGFsID0gKCkgPT4ge1xuICBjb25zdCB0YXNrTW9kYWwgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibW9kYWwtZWRpdC10YXNrXCIpO1xuXG4gIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFwibW9kYWwtZWRpdC10aXRsZS1jb250YWluZXItdGFza1wiXG4gICk7XG5cbiAgY29uc3QgaDEgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJtb2RhbC1lZGl0LXRpdGxlXCIpO1xuICBoMS50ZXh0Q29udGVudCA9IFwiRWRpdCB0YXNrXCI7XG5cbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBcIm1vZGFsLWVkaXQtY29udGVudC1jb250YWluZXItdGFza1wiXG4gICk7XG5cbiAgY29uc3QgbGFiZWxUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBcIm1vZGFsLWVkaXQtbGFiZWxcIik7XG4gIGxhYmVsVGl0bGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibW9kYWwtdGl0bGUtdGFza1wiKTtcbiAgbGFiZWxUaXRsZS50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjtcblxuICBjb25zdCBpbnB1dFRpdGxlID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFwibW9kYWwtdGl0bGUtaW5wdXQtdGFza1wiKTtcbiAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibW9kYWwtdGl0bGUtdGFza1wiKTtcbiAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vZGFsLXRpdGxlLXRhc2tcIik7XG5cbiAgY29uc3QgbGFiZWxEZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBcIm1vZGFsLWVkaXQtbGFiZWxcIik7XG4gIGxhYmVsRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibW9kYWwtZGVzY3JpcHRpb24tdGFza1wiKTtcbiAgbGFiZWxEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcblxuICBjb25zdCBpbnB1dERlc2NyaXB0aW9uID0gY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIFwibW9kYWwtZGVzYy1pbnB1dC10YXNrXCIpO1xuICBpbnB1dERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJtb2RhbC1kZXNjcmlwdGlvbi10YXNrXCIpO1xuICBpbnB1dERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibW9kYWwtZGVzY3JpcHRpb24tdGFza1wiKTtcbiAgaW5wdXREZXNjcmlwdGlvbi5yb3dzID0gXCIzXCI7XG4gIGlucHV0RGVzY3JpcHRpb24uY29scyA9IFwiN1wiO1xuXG4gIGNvbnN0IGRhdGUgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICBkYXRlLm5hbWUgPSBcImRhdGUtZWRpdFwiO1xuXG4gIGNvbnN0IGNvbG9ycyA9IGNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGNvbG9ycy5uYW1lID0gXCJjb2xvcnMtZWRpdFwiO1xuXG4gIGNvbnN0IGhpZ2ggPSBjcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBoaWdoLnZhbHVlID0gXCJoaWdoXCI7XG4gIGhpZ2gudGV4dENvbnRlbnQgPSBcImhpZ2hcIjtcbiAgY29uc3QgbWVkaXVtID0gY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgbWVkaXVtLnZhbHVlID0gXCJtZWRpdW1cIjtcbiAgbWVkaXVtLnRleHRDb250ZW50ID0gXCJtZWRpdW1cIjtcbiAgY29uc3QgbG93ID0gY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgbG93LnZhbHVlID0gXCJsb3dcIjtcbiAgbG93LnRleHRDb250ZW50ID0gXCJsb3dcIjtcblxuICBjb2xvcnMuYXBwZW5kKGhpZ2gsIG1lZGl1bSwgbG93KTtcblxuICBjb25zdCBidXR0b25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibW9kYWwtZWRpdC1idXR0b24tY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJtb2RhbC1lZGl0LWNidXR0b25cIik7XG4gIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJtb2RhbC1lZGl0LWVidXR0b24tdGFza1wiKTtcbiAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuXG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZChoMSk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKFxuICAgIGxhYmVsVGl0bGUsXG4gICAgaW5wdXRUaXRsZSxcbiAgICBsYWJlbERlc2NyaXB0aW9uLFxuICAgIGlucHV0RGVzY3JpcHRpb24sXG4gICAgZGF0ZSxcbiAgICBjb2xvcnNcbiAgKTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChjYW5jZWxCdXR0b24sIGVkaXRCdXR0b24pO1xuICB0YXNrTW9kYWwuYXBwZW5kKHRpdGxlQ29udGFpbmVyLCBjb250ZW50Q29udGFpbmVyLCBidXR0b25Db250YWluZXIpO1xuXG4gIHJldHVybiB0YXNrTW9kYWw7XG59O1xuXG5jb25zdCBjcmVhdGVUYXNrRWxlbWVudCA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZ2V0RWxlbWVudChcIi50YXNrLWxpc3RcIik7XG5cbiAgY29uc3QgdGFza0VsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFzay1lbGVtZW50XCIpO1xuICB0YXNrRWxlbWVudC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suZ2V0SWQoKTtcblxuICBjb25zdCB0YXNrVGl0bGUgPSBjcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlXCIpO1xuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLmdldFRpdGxlKCk7XG4gIHRhc2tUaXRsZS5kYXRhc2V0LnRhc2tJZCA9IHRhc2suZ2V0SWQoKTtcblxuICBjb25zdCB0YXNrRGVzYyA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0YXNrRGVzYy5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXNjXCIpO1xuICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGVzY3JpcHRpb24oKTtcbiAgdGFza0Rlc2MuZGF0YXNldC50YXNrSWQgPSB0YXNrLmdldElkKCk7XG5cbiAgY29uc3QgdGFza0RhdGUgPSBjcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0RhdGUuY2xhc3NMaXN0LmFkZChcInRhc2stZGF0ZVwiKTtcbiAgdGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmdldER1ZURhdGUoKTtcbiAgdGFza0RhdGUuZGF0YXNldC50YXNrSWQgPSB0YXNrLmdldElkKCk7XG5cbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGFzay1wcmlvcml0eVwiKTtcbiAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5nZXRQcmlvcml0eSgpO1xuICB0YXNrUHJpb3JpdHkuZGF0YXNldC50YXNrSWQgPSB0YXNrLmdldElkKCk7XG5cbiAgY29uc3QgY3VycmVudFByb2plY3RJZCA9IHRhc2suZ2V0UHJvamVjdElkKCk7XG4gIHRhc2tFbGVtZW50LmRhdGFzZXQucHJvamVjdElkID0gY3VycmVudFByb2plY3RJZDtcblxuICBjb25zdCBidXR0b25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidGFzay1idXR0b24tY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHRhc2tFZGl0ID0gY3JlYXRlRWxlbWVudChcImlcIik7XG4gIHRhc2tFZGl0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWVkaXRcIik7XG4gIHRhc2tFZGl0LmNsYXNzTGlzdC5hZGQoXCJmYS1yZWd1bGFyXCIpO1xuICB0YXNrRWRpdC5jbGFzc0xpc3QuYWRkKFwiZmEtcGVuLXRvLXNxdWFyZVwiKTtcbiAgdGFza0VkaXQuZGF0YXNldC50YXNrSWQgPSB0YXNrLmdldElkKCk7XG5cbiAgY29uc3QgdGFza1JlbW92ZSA9IGNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICB0YXNrUmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXJlbW92ZVwiKTtcbiAgdGFza1JlbW92ZS5jbGFzc0xpc3QuYWRkKFwiZmEtcmVndWxhclwiKTtcbiAgdGFza1JlbW92ZS5jbGFzc0xpc3QuYWRkKFwiZmEtdHJhc2gtY2FuXCIpO1xuXG4gIHRhc2tSZW1vdmUuZGF0YXNldC50YXNrSWQgPSB0YXNrLmdldElkKCk7XG5cbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZCh0YXNrRWRpdCwgdGFza1JlbW92ZSk7XG5cbiAgdGFza0VsZW1lbnQuYXBwZW5kKFxuICAgIHRhc2tUaXRsZSxcbiAgICB0YXNrRGVzYyxcbiAgICB0YXNrRGF0ZSxcbiAgICB0YXNrUHJpb3JpdHksXG4gICAgYnV0dG9uQ29udGFpbmVyXG4gICk7XG4gIHRhc2tMaXN0LmFwcGVuZCh0YXNrRWxlbWVudCk7XG59O1xuXG5jb25zdCByZW5kZXJUYXNrc0Zyb21DdXJyZW50UHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xuICBsZXQgdGFza0xpc3RIdG1sID0gZ2V0RWxlbWVudChcIi50YXNrLWxpc3RcIik7XG4gIHRhc2tMaXN0SHRtbC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGN1cnJlbnRQcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjcmVhdGVUYXNrRWxlbWVudCh0YXNrKTtcbiAgfSk7XG59O1xuXG5jb25zdCByZW5kZXJQcm9qZWN0c0Zyb21Qcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdExpc3RET00gPSBnZXRFbGVtZW50KFwiLnByb2plY3QtbGlzdFwiKTtcbiAgcHJvamVjdExpc3RET00uaW5uZXJIVE1MID0gXCJcIjtcblxuICBwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgaWYgKHByb2plY3QuZ2V0VGl0bGUoKSA9PT0gXCJEZWZhdWx0XCIpIHtcbiAgICAgIGNyZWF0ZURlZmF1bHRQcm9qZWN0RWxlbWVudChwcm9qZWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudChcImhlYWRlclwiLCBcImhlYWRlclwiKTtcblxuICBjb25zdCBoMSA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcInRpdGxlXCIpO1xuICBoMS50ZXh0Q29udGVudCA9IFwiVG8tRG8gTGlzdFwiO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5jb25zdCBjcmVhdGVNYWluID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gY3JlYXRlRWxlbWVudChcIm1haW5cIiwgXCJtYWluXCIpO1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByb2plY3QtY29udGFpbmVyXCIpO1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRhc2stY29udGFpbmVyXCIpO1xuXG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kKGNyZWF0ZVByb2plY3RGb3JtKCksIGNyZWF0ZVByb2plY3RMaXN0KCkpO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZChjcmVhdGVUYXNrRm9ybSgpLCBjcmVhdGVUYXNrTGlzdCgpKTtcbiAgbWFpbi5hcHBlbmQocHJvamVjdENvbnRhaW5lciwgdGFza0NvbnRhaW5lcik7XG4gIHJldHVybiBtYWluO1xufTtcblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBjcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIsIFwiZm9vdGVyXCIpO1xuXG4gIGNvbnN0IHAgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImF1dGhvclwiKTtcbiAgcC50ZXh0Q29udGVudCA9IFwiQ29kZWQgYnkgQXJpZWNoXCI7XG5cbiAgY29uc3QgZ2l0aHViTGluayA9IGNyZWF0ZUVsZW1lbnQoXCJhXCIsIFwiZ2l0aHViLWxpbmtcIik7XG4gIGdpdGh1YkxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL0FyaWVjaFwiO1xuICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcblxuICBjb25zdCBnaXRodWJJY29uID0gY3JlYXRlRWxlbWVudChcImlcIiwgXCJnaXRodWItaWNvblwiKTtcbiAgZ2l0aHViSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtYnJhbmRzXCIpO1xuICBnaXRodWJJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1naXRodWJcIik7XG5cbiAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJY29uKTtcbiAgZm9vdGVyLmFwcGVuZChwLCBnaXRodWJMaW5rKTtcbiAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZU1vZGFsT3ZlcmxheSA9ICgpID0+IHtcbiAgY29uc3Qgb3ZlcmxheSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJvdmVybGF5XCIpO1xuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cbiAgb3ZlcmxheS5hcHBlbmQoZWRpdFByb2plY3RNb2RhbCgpKTtcbiAgb3ZlcmxheS5hcHBlbmQoZWRpdFRhc2tNb2RhbCgpKTtcblxuICByZXR1cm4gb3ZlcmxheTtcbn07XG5cbmNvbnN0IGdldEluaXRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBib2R5ID0gZ2V0RWxlbWVudChcImJvZHlcIik7XG5cbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImNvbnRhaW5lclwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTW9kYWxPdmVybGF5KCkpO1xuXG4gIGFkZExpc3RlbmVycygpO1xuICBhZGREZWZhdWx0UHJvamVjdCgpO1xuICBlZGl0UHJvamVjdE1vZGFsKCk7XG4gIGluaXRMb2NhbFN0b3JhZ2UoKTtcbn07XG5cbmV4cG9ydCB7XG4gIHByaW50VGFza3NGcm9tUHJvamVjdCxcbiAgcHJpbnRQcm9qZWN0c0Zyb21Qcm9qZWN0TGlzdCxcbiAgZ2V0SW5pdFBhZ2UsXG4gIGdldEVsZW1lbnQsXG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGNyZWF0ZVByb2plY3RFbGVtZW50LFxuICBjcmVhdGVEZWZhdWx0UHJvamVjdEVsZW1lbnQsXG4gIGNyZWF0ZVRhc2tFbGVtZW50LFxuICByZW5kZXJUYXNrc0Zyb21DdXJyZW50UHJvamVjdCxcbiAgcmVuZGVyUHJvamVjdHNGcm9tUHJvamVjdExpc3QsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBnZXRJbml0UGFnZSB9IGZyb20gXCIuL3ZpZXdzL3ZpZXdcIjtcblxuZ2V0SW5pdFBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==