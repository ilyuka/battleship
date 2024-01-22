/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.scss ***!
  \***********************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*\n    2. Remove default margin\n  */\n* {\n  margin: 0;\n}\n\n/*\n    Typographic tweaks!\n    3. Add accessible line-height\n    4. Improve text rendering\n  */\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\n/*\n    5. Improve media defaults\n  */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/*\n    6. Remove built-in form typography styles\n  */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/*\n    7. Avoid text overflows\n  */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: #8ecae6;\n  display: flex;\n  justify-content: center;\n}\n\n#content {\n  padding: 1rem;\n}\n\n#title {\n  text-align: center;\n  letter-spacing: 1.2px;\n  margin-bottom: 3rem;\n}\n\n#board_placement {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n}\n#board_placement #playerName {\n  border-radius: 5px;\n  border: 1px solid #023047;\n}\n#board_placement #playerName:focus-within {\n  border: 1px solid #023047;\n  outline: 1px solid #023047;\n}\n\nbutton {\n  min-width: 100px;\n  border-radius: 10px;\n  background-color: #023047;\n  color: #fb8500;\n  font-weight: 700;\n  padding: 0.25rem 1rem 0.25rem 1rem;\n  border: none;\n  outline: 1px solid #fb8500;\n}\nbutton:hover, button:focus-within {\n  cursor: pointer;\n  border: none;\n  opacity: 0.9;\n}\nbutton:active {\n  transform: scale(0.95);\n}\n\n#place-menu {\n  display: flex;\n}\n\n.letters_col {\n  display: grid;\n  grid-template-rows: repeat(11, 25px);\n  gap: 5px;\n  margin-right: 0.5rem;\n  font-weight: 700;\n  font-size: 1.125rem;\n  color: #023047;\n}\n.letters_col > :first-child {\n  transform: translateY(5px);\n}\n.letters_col > *:not(:first-child) {\n  display: grid;\n  place-content: center;\n}\n\n.letters_col > * {\n  text-align: center;\n  padding-top: 3px;\n  width: 20px;\n  height: 20px;\n}\n\n.num_top {\n  font-size: 1.125rem;\n  color: #023047;\n  border: none !important;\n  display: grid;\n  place-content: center;\n  font-weight: 700;\n}\n\n#gbplace {\n  display: grid;\n  grid-template-columns: repeat(10, 25px);\n  gap: 5px;\n}\n#gbplace > * {\n  width: 25px;\n  height: 25px;\n  border: 1px solid #023047;\n  border-radius: 15%;\n}\n#gbplace > .nothit {\n  animation: blink 2s infinite;\n}\n#gbplace > .nothit:hover {\n  cursor: pointer;\n}\n\n@keyframes blink {\n  0% {\n    border: 1px solid #023047;\n  }\n  50% {\n    border: 1px solid #fb8500;\n  }\n  100% {\n    border: 1px solid #023047;\n  }\n}\n#gb1,\n#gb2 {\n  display: grid;\n  grid-template-columns: repeat(10, 25px);\n  gap: 5px;\n}\n#gb1 > *,\n#gb2 > * {\n  width: 25px;\n  height: 25px;\n  border: 1px solid #023047;\n  border-radius: 15%;\n}\n#gb1 > *:hover,\n#gb2 > *:hover {\n  cursor: pointer;\n}\n\n#board__message {\n  border: 1px solid #023047;\n  border-radius: 5px;\n  height: 1.5rem;\n  min-width: 35ch;\n  text-align: center;\n  padding-inline: 1rem;\n  background-color: #edede9;\n}\n\n#board_game {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3rem;\n}\n#board_game > #boards {\n  display: flex;\n  gap: 10rem;\n}\n#board_game > #boards > * {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n#board_game > #boards .board-cont {\n  display: flex;\n}\n\n.U {\n  background-color: aliceblue;\n}\n\n.M {\n  background-color: lightcoral;\n}\n\n.hit {\n  background-color: mediumaquamarine;\n}\n\n.nothit {\n  opacity: 1;\n  background-color: lightslategray;\n}\n\n.nothit.selected {\n  opacity: 0.35;\n}\n\n#gbplace > .available {\n  border: 3px solid lime !important;\n}\n#gbplace > .available:hover {\n  cursor: pointer;\n}\n\n#gbplace > .unavailable {\n  border: 3px solid red !important;\n}", "",{"version":3,"sources":["webpack://./src/scss/_reset.scss","webpack://./src/index.scss","webpack://./src/scss/_root.scss","webpack://./src/scss/_colors.scss","webpack://./src/scss/_button.scss","webpack://./src/scss/_board.scss"],"names":[],"mappings":"AAAA;;CAAA;AAGA;;;EAGI,sBAAA;ACCJ;;ADCA;;GAAA;AAGA;EACI,SAAA;ACEJ;;ADAA;;;;GAAA;AAKA;EACI,gBAAA;EACA,mCAAA;ACGJ;;ADDA;;GAAA;AAGA;;;;;EAKI,cAAA;EACA,eAAA;ACIJ;;ADFA;;GAAA;AAGA;;;;EAII,aAAA;ACKJ;;ADHA;;GAAA;AAGA;;;;;;;EAOI,yBAAA;ACMJ;;ACzDA;EACI,iBAAA;EACA,yBCJM;EDKN,aAAA;EACA,uBAAA;AD4DJ;;ACzDA;EACI,aAAA;AD4DJ;;ACzDA;EACI,kBAAA;EACA,qBAAA;EACA,mBAAA;AD4DJ;;ACzDA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AD4DJ;AC1DI;EACI,kBAAA;EACA,yBAAA;AD4DR;AC1DQ;EACI,yBAAA;EACA,0BAAA;AD4DZ;;AGzFA;EACI,gBAAA;EACA,mBAAA;EACA,yBDJU;ECKV,cDJK;ECKL,gBAAA;EACA,kCAAA;EACA,YAAA;EACA,0BAAA;AH4FJ;AG1FI;EAEI,eAAA;EACA,YAAA;EACA,YAAA;AH2FR;AGzFI;EACI,sBAAA;AH2FR;;AIxGA;EACI,aAAA;AJ2GJ;;AIxGA;EACI,aAAA;EACA,oCAAA;EACA,QATE;EAUF,oBAAA;EACA,gBAAA;EACA,mBAAA;EACA,cFhBU;AF2Hd;AIzGI;EACI,0BAAA;AJ2GR;AIzGI;EACI,aAAA;EACA,qBAAA;AJ2GR;;AIvGA;EACI,kBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;AJ0GJ;;AIvGA;EACI,mBAAA;EACA,cFpCU;EEqCV,uBAAA;EACA,aAAA;EACA,qBAAA;EACA,gBAAA;AJ0GJ;;AIvGA;EACI,aAAA;EACA,uCAAA;EACA,QA3CE;AJqJN;AIxGI;EACI,WA/CG;EAgDH,YAhDG;EAiDH,yBAAA;EACA,kBAAA;AJ0GR;AIvGI;EACI,4BAAA;AJyGR;AIvGI;EACI,eAAA;AJyGR;;AIrGA;EACI;IACI,yBAAA;EJwGN;EItGE;IACI,yBAAA;EJwGN;EItGE;IACI,yBAAA;EJwGN;AACF;AIrGA;;EAEI,aAAA;EACA,uCAAA;EACA,QA5EE;AJmLN;AIrGI;;EACI,WAhFG;EAiFH,YAjFG;EAkFH,yBAAA;EACA,kBAAA;AJwGR;AItGI;;EACI,eAAA;AJyGR;;AIrGA;EACI,yBAAA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;EACA,kBAAA;EACA,oBAAA;EACA,yBFjGQ;AFyMZ;;AIrGA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AJwGJ;AItGI;EACI,aAAA;EACA,UAAA;AJwGR;AItGQ;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AJwGZ;AItGQ;EACI,aAAA;AJwGZ;;AInGA;EACI,2BAAA;AJsGJ;;AIpGA;EACI,4BAAA;AJuGJ;;AIrGA;EACI,kCAAA;AJwGJ;;AItGA;EACI,UAAA;EACA,gCAAA;AJyGJ;;AIvGA;EACI,aAAA;AJ0GJ;;AIxGA;EACI,iCAAA;AJ2GJ;AI1GI;EACI,eAAA;AJ4GR;;AIzGA;EACI,gCAAA;AJ4GJ","sourcesContent":["/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n/*\n    2. Remove default margin\n  */\n* {\n    margin: 0;\n}\n/*\n    Typographic tweaks!\n    3. Add accessible line-height\n    4. Improve text rendering\n  */\nbody {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n}\n/*\n    5. Improve media defaults\n  */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n    display: block;\n    max-width: 100%;\n}\n/*\n    6. Remove built-in form typography styles\n  */\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n/*\n    7. Avoid text overflows\n  */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    overflow-wrap: break-word;\n}\n","/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*\n    2. Remove default margin\n  */\n* {\n  margin: 0;\n}\n\n/*\n    Typographic tweaks!\n    3. Add accessible line-height\n    4. Improve text rendering\n  */\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\n/*\n    5. Improve media defaults\n  */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/*\n    6. Remove built-in form typography styles\n  */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/*\n    7. Avoid text overflows\n  */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: #8ecae6;\n  display: flex;\n  justify-content: center;\n}\n\n#content {\n  padding: 1rem;\n}\n\n#title {\n  text-align: center;\n  letter-spacing: 1.2px;\n  margin-bottom: 3rem;\n}\n\n#board_placement {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n}\n#board_placement #playerName {\n  border-radius: 5px;\n  border: 1px solid #023047;\n}\n#board_placement #playerName:focus-within {\n  border: 1px solid #023047;\n  outline: 1px solid #023047;\n}\n\nbutton {\n  min-width: 100px;\n  border-radius: 10px;\n  background-color: #023047;\n  color: #fb8500;\n  font-weight: 700;\n  padding: 0.25rem 1rem 0.25rem 1rem;\n  border: none;\n  outline: 1px solid #fb8500;\n}\nbutton:hover, button:focus-within {\n  cursor: pointer;\n  border: none;\n  opacity: 0.9;\n}\nbutton:active {\n  transform: scale(0.95);\n}\n\n#place-menu {\n  display: flex;\n}\n\n.letters_col {\n  display: grid;\n  grid-template-rows: repeat(11, 25px);\n  gap: 5px;\n  margin-right: 0.5rem;\n  font-weight: 700;\n  font-size: 1.125rem;\n  color: #023047;\n}\n.letters_col > :first-child {\n  transform: translateY(5px);\n}\n.letters_col > *:not(:first-child) {\n  display: grid;\n  place-content: center;\n}\n\n.letters_col > * {\n  text-align: center;\n  padding-top: 3px;\n  width: 20px;\n  height: 20px;\n}\n\n.num_top {\n  font-size: 1.125rem;\n  color: #023047;\n  border: none !important;\n  display: grid;\n  place-content: center;\n  font-weight: 700;\n}\n\n#gbplace {\n  display: grid;\n  grid-template-columns: repeat(10, 25px);\n  gap: 5px;\n}\n#gbplace > * {\n  width: 25px;\n  height: 25px;\n  border: 1px solid #023047;\n  border-radius: 15%;\n}\n#gbplace > .nothit {\n  animation: blink 2s infinite;\n}\n#gbplace > .nothit:hover {\n  cursor: pointer;\n}\n\n@keyframes blink {\n  0% {\n    border: 1px solid #023047;\n  }\n  50% {\n    border: 1px solid #fb8500;\n  }\n  100% {\n    border: 1px solid #023047;\n  }\n}\n#gb1,\n#gb2 {\n  display: grid;\n  grid-template-columns: repeat(10, 25px);\n  gap: 5px;\n}\n#gb1 > *,\n#gb2 > * {\n  width: 25px;\n  height: 25px;\n  border: 1px solid #023047;\n  border-radius: 15%;\n}\n#gb1 > *:hover,\n#gb2 > *:hover {\n  cursor: pointer;\n}\n\n#board__message {\n  border: 1px solid #023047;\n  border-radius: 5px;\n  height: 1.5rem;\n  min-width: 35ch;\n  text-align: center;\n  padding-inline: 1rem;\n  background-color: #edede9;\n}\n\n#board_game {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3rem;\n}\n#board_game > #boards {\n  display: flex;\n  gap: 10rem;\n}\n#board_game > #boards > * {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n#board_game > #boards .board-cont {\n  display: flex;\n}\n\n.U {\n  background-color: aliceblue;\n}\n\n.M {\n  background-color: lightcoral;\n}\n\n.hit {\n  background-color: mediumaquamarine;\n}\n\n.nothit {\n  opacity: 1;\n  background-color: lightslategray;\n}\n\n.nothit.selected {\n  opacity: 0.35;\n}\n\n#gbplace > .available {\n  border: 3px solid lime !important;\n}\n#gbplace > .available:hover {\n  cursor: pointer;\n}\n\n#gbplace > .unavailable {\n  border: 3px solid red !important;\n}","@use \"./colors\" as clrs;\n\nbody {\n    min-height: 100vh;\n    background-color: clrs.$skyblue;\n    display: flex;\n    justify-content: center;\n}\n\n#content {\n    padding: 1rem;\n}\n\n#title {\n    text-align: center;\n    letter-spacing: 1.2px;\n    margin-bottom: 3rem;\n}\n\n#board_placement {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n\n    #playerName {\n        border-radius: 5px;\n        border: 1px solid clrs.$darkseablue;\n\n        &:focus-within {\n            border: 1px solid clrs.$darkseablue;\n            outline: 1px solid clrs.$darkseablue;\n        }\n    }\n}\n","$skyblue: #8ecae6;\n$darkseablue: #023047;\n$orange: #fb8500;\n$lightpink: #edede9;\n","@use \"./colors\" as clrs;\n\nbutton {\n    min-width: 100px;\n    border-radius: 10px;\n    background-color: clrs.$darkseablue;\n    color: clrs.$orange;\n    font-weight: 700;\n    padding: 0.25rem 1rem 0.25rem 1rem;\n    border: none;\n    outline: 1px solid clrs.$orange;\n\n    &:hover,\n    &:focus-within {\n        cursor: pointer;\n        border: none;\n        opacity: 0.9;\n    }\n    &:active {\n        transform: scale(0.95);\n    }\n}\n","@use \"./colors\" as clrs;\n@use \"sass:math\";\n\n$cellsize: 25px;\n$gap: 5px;\n\n#place-menu {\n    display: flex;\n}\n\n.letters_col {\n    display: grid;\n    grid-template-rows: repeat(11, $cellsize);\n    gap: $gap;\n    margin-right: 0.5rem;\n    font-weight: 700;\n    font-size: 1.125rem;\n    color: clrs.$darkseablue;\n\n    & > :first-child {\n        transform: translateY($gap);\n    }\n    & > *:not(:first-child) {\n        display: grid;\n        place-content: center;\n    }\n}\n\n.letters_col > * {\n    text-align: center;\n    padding-top: 3px;\n    width: 20px;\n    height: 20px;\n}\n\n.num_top {\n    font-size: 1.125rem;\n    color: clrs.$darkseablue;\n    border: none !important;\n    display: grid;\n    place-content: center;\n    font-weight: 700;\n}\n\n#gbplace {\n    display: grid;\n    grid-template-columns: repeat(10, $cellsize);\n    gap: $gap;\n\n    & > * {\n        width: $cellsize;\n        height: $cellsize;\n        border: 1px solid clrs.$darkseablue;\n        border-radius: 15%;\n    }\n\n    & > .nothit {\n        animation: blink 2s infinite;\n    }\n    & > .nothit:hover {\n        cursor: pointer;\n    }\n}\n\n@keyframes blink {\n    0% {\n        border: 1px solid clrs.$darkseablue;\n    }\n    50% {\n        border: 1px solid clrs.$orange;\n    }\n    100% {\n        border: 1px solid clrs.$darkseablue;\n    }\n}\n\n#gb1,\n#gb2 {\n    display: grid;\n    grid-template-columns: repeat(10, $cellsize);\n    gap: $gap;\n\n    & > * {\n        width: $cellsize;\n        height: $cellsize;\n        border: 1px solid clrs.$darkseablue;\n        border-radius: 15%;\n    }\n    & > *:hover {\n        cursor: pointer;\n    }\n}\n\n#board__message {\n    border: 1px solid clrs.$darkseablue;\n    border-radius: 5px;\n    height: 1.5rem;\n    min-width: 35ch;\n    text-align: center;\n    padding-inline: 1rem;\n    background-color: clrs.$lightpink;\n}\n\n#board_game {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 3rem;\n\n    & > #boards {\n        display: flex;\n        gap: 10rem;\n\n        & > * {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            gap: 1rem;\n        }\n        & .board-cont {\n            display: flex;\n        }\n    }\n}\n\n.U {\n    background-color: aliceblue;\n}\n.M {\n    background-color: lightcoral;\n}\n.hit {\n    background-color: mediumaquamarine;\n}\n.nothit {\n    opacity: 1;\n    background-color: lightslategray;\n}\n.nothit.selected {\n    opacity: 0.35;\n}\n#gbplace > .available {\n    border: 3px solid lime !important;\n    &:hover {\n        cursor: pointer;\n    }\n}\n#gbplace > .unavailable {\n    border: 3px solid red !important;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {



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
/***/ (function(module) {



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

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {



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
/***/ (function(module) {



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
/***/ (function(module) {



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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



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
/***/ (function(module) {



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
/***/ (function(module) {



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

/***/ "./src/Flow.js":
/*!*********************!*\
  !*** ./src/Flow.js ***!
  \*********************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlaceMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlaceMenu.js */ "./src/PlaceMenu.js");
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game.js */ "./src/Game.js");
/* harmony import */ var _GameUI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameUI.js */ "./src/GameUI.js");



class Flow {
  constructor() {
    this.pm = new _PlaceMenu_js__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    this.pm.mount();
    this.game = new _Game_js__WEBPACK_IMPORTED_MODULE_1__["default"](this, this.pm.defaultCoords, "def1", "Computer");
    _GameUI_js__WEBPACK_IMPORTED_MODULE_2__.hideGameSection();
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Flow);

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard.js */ "./src/Gameboard.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player.js */ "./src/Player.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");
/* harmony import */ var _GameUI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameUI.js */ "./src/GameUI.js");




class Game {
  constructor(flowInstance, shipsCoords, name1, name2) {
    this.flowInstance = flowInstance;
    this.shipsCoords = shipsCoords;
    this.computerCoords = {
      "3_1": 4,
      "7_3": 3,
      "0_4": 2
    };
    this.player1 = new _Player_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.gb1, this.gb2, name1);
    this.player2 = new _Player_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.gb2, this.gb1, name2);
  }
  mount(updatedCoords, name) {
    this.shipsCoords = updatedCoords;
    this.player1.board = new _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.shipsCoords);
    this.player1.name = name === "" ? this.player1.name : name;
    this.player2.board = new _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.computerCoords);
    this.player1.enemyBoard = this.player2.board;
    this.player2.enemyBoard = this.player1.board;
    this.currPlayerName = this.player1.name;
    _ui_js__WEBPACK_IMPORTED_MODULE_2__.drawBoard(this.player1.board.board, "#gb1", false);
    _ui_js__WEBPACK_IMPORTED_MODULE_2__.drawBoard(this.player2.board.board, "#gb2", true);
    _GameUI_js__WEBPACK_IMPORTED_MODULE_3__.showGameSection();
    _GameUI_js__WEBPACK_IMPORTED_MODULE_3__.updateMessage("");
    _GameUI_js__WEBPACK_IMPORTED_MODULE_3__.hideRestartButton();
    _GameUI_js__WEBPACK_IMPORTED_MODULE_3__.addBoard2Listener(this.handleBoardClick.bind(this));
    _GameUI_js__WEBPACK_IMPORTED_MODULE_3__.addRestartButtonListener(this.remount.bind(this));
    _GameUI_js__WEBPACK_IMPORTED_MODULE_3__.addGiveUpListener(this.unmount.bind(this));
    _GameUI_js__WEBPACK_IMPORTED_MODULE_3__.updatePlayersInfo(this.player1.name, this.player1.wins, this.player2.name, this.player2.wins);
  }
  remount() {
    this.gb1 = new _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.shipsCoords);
    this.gb2 = new _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.computerCoords);
    this.player1.board = this.gb1;
    this.player1.enemyBoard = this.gb2;
    this.player2.board = this.gb2;
    this.player2.enemyBoard = this.gb1;
    _ui_js__WEBPACK_IMPORTED_MODULE_2__.drawBoard(this.gb1.board, "#gb1", false);
    _ui_js__WEBPACK_IMPORTED_MODULE_2__.drawBoard(this.gb2.board, "#gb2", true);
    _GameUI_js__WEBPACK_IMPORTED_MODULE_3__.updateMessage("");
    _GameUI_js__WEBPACK_IMPORTED_MODULE_3__.hideRestartButton();
    _GameUI_js__WEBPACK_IMPORTED_MODULE_3__.addBoard2Listener(this.handleBoardClick.bind(this));
  }
  unmount() {
    _GameUI_js__WEBPACK_IMPORTED_MODULE_3__.hideGameSection();
    _GameUI_js__WEBPACK_IMPORTED_MODULE_3__.removeAllListeners();
    this.flowInstance.pm.mount();
  }
  handleBoardClick(e) {
    this.makeTurn(e.target);
  }
  makeTurn(eTarget) {
    if (this.currPlayerName !== this.player1.name) {
      return;
    }
    const [row, col] = _ui_js__WEBPACK_IMPORTED_MODULE_2__.readClick(eTarget);
    let res = this.player1.takeTurn(row, col);
    if (!_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"].validAnswers.includes(res)) {
      return;
    }
    if (res === "same twice") {
      _GameUI_js__WEBPACK_IMPORTED_MODULE_3__.updateMessage("can't hit the same cell twice");
      return;
    }
    _ui_js__WEBPACK_IMPORTED_MODULE_2__.redrawCell("#gb2", eTarget.id, res);
    if (res === "won") {
      _GameUI_js__WEBPACK_IMPORTED_MODULE_3__.handleWin(this.player1.name, this.player1.name, this.player1.wins, this.player2.name, this.player2.wins);
      return;
    }
    this.currPlayer = "p2";
    setTimeout(() => {
      let [res, row, col] = this.player2.takeRandomTurn();
      _ui_js__WEBPACK_IMPORTED_MODULE_2__.redrawCell("#gb1", `${row}_${col}`, res);
      this.currPlayer = "p1";
      if (res === "won") {
        _GameUI_js__WEBPACK_IMPORTED_MODULE_3__.handleWin(this.player2.name, this.player1.name, this.player1.wins, this.player2.name, this.player2.wins);
        return;
      }
    }, 250);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/GameUI.js":
/*!***********************!*\
  !*** ./src/GameUI.js ***!
  \***********************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addBoard2Listener: function() { return /* binding */ addBoard2Listener; },
/* harmony export */   addGiveUpListener: function() { return /* binding */ addGiveUpListener; },
/* harmony export */   addRestartButtonListener: function() { return /* binding */ addRestartButtonListener; },
/* harmony export */   handleWin: function() { return /* binding */ handleWin; },
/* harmony export */   hideGameSection: function() { return /* binding */ hideGameSection; },
/* harmony export */   hideRestartButton: function() { return /* binding */ hideRestartButton; },
/* harmony export */   removeAllListeners: function() { return /* binding */ removeAllListeners; },
/* harmony export */   removeBoard2Listener: function() { return /* binding */ removeBoard2Listener; },
/* harmony export */   removeRestartButtonListener: function() { return /* binding */ removeRestartButtonListener; },
/* harmony export */   showGameSection: function() { return /* binding */ showGameSection; },
/* harmony export */   showRestartButton: function() { return /* binding */ showRestartButton; },
/* harmony export */   updateMessage: function() { return /* binding */ updateMessage; },
/* harmony export */   updatePlayersInfo: function() { return /* binding */ updatePlayersInfo; }
/* harmony export */ });
const ID = "#board_game";
const INPUT_MSG_ID = "#board__message";
const ID_GB1 = "#gb1";
const ID_GB2 = "#gb2";
const RESTART_ID = "#restart";
const GIVEUP_ID = "#giveup";
function showGameSection() {
  $(ID).show();
}
function hideGameSection() {
  $(ID).hide();
}
function addBoard2Listener(fn) {
  $(ID_GB2).on("click", fn);
}
function removeBoard2Listener() {
  $(ID_GB2).off("click");
}
function addRestartButtonListener(fn) {
  $(RESTART_ID).on("click", fn);
}
function removeRestartButtonListener() {
  $(RESTART_ID).off();
}
function showRestartButton() {
  $(RESTART_ID).show();
}
function hideRestartButton() {
  $(RESTART_ID).hide();
}
function addGiveUpListener(fn) {
  $(GIVEUP_ID).on("click", fn);
}
function removeGiveUpListener() {
  $(GIVEUP_ID).off();
}
function removeAllListeners() {
  removeBoard2Listener();
  removeRestartButtonListener();
  removeGiveUpListener();
}
function updateMessage(text) {
  $(INPUT_MSG_ID).text(`${text}`);
}
function updatePlayersInfo(p1name, p1wins, p2name, p2wins) {
  $(`#p1__name`).text(p1name);
  $(`#p1__wins`).text(p1wins);
  $(`#p2__name`).text(p2name);
  $(`#p2__wins`).text(p2wins);
}
function handleWin(winnerName, p1name, p1wins, p2name, p2wins) {
  this.updateMessage(`${winnerName} has won!`);
  this.showRestartButton();
  this.removeBoard2Listener();
  this.updatePlayersInfo(p1name, p1wins, p2name, p2wins);
}


/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ "./src/Ship.js");

class Gameboard {
  static validAnswers = ["hit", "missed", "same twice", "won"];
  constructor(shipsCoords) {
    this.boardSize = 10;
    this.board = new Array(this.boardSize);
    for (let i = 0; i < this.boardSize; i += 1) {
      this.board[i] = new Array(this.boardSize).fill("U"); // U - untouched
    }
    this.shipCounter = 0;
    this.ships = {};
    this.fillShips(shipsCoords);
  }
  fillShips(shipsCoords) {
    if (!shipsCoords) {
      return;
    }
    for (const key in shipsCoords) {
      const coords = key.split("_");
      const length = shipsCoords[key];
      this.placeShip(Number(length), Number(coords[0]), Number(coords[1]));
    }
  }
  placeShip(shipLength, row, col) {
    if (row < 0 || row >= this.boardSize || col < 0 || col >= this.boardSize) {
      throw new Error("incorrect coords");
    }
    const ship = new _Ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](row, col, shipLength);
    this.ships[++this.shipCounter] = ship;
    if (this.boardSize - col >= shipLength) {
      for (let i = col; i < col + shipLength; i += 1) {
        this.board[row][i] = {
          id: this.shipCounter,
          cellHit: false
        };
      }
    } else {
      throw new Error("ship out of bound");
    }
  }
  validateAttack(row, col) {
    if (row !== 0 && !row || col !== 0 && !col) {
      return "incorrect coords type";
    }
    if (row < 0 || row >= this.boardSize || col < 0 || col >= this.boardSize) {
      return "coords out of bound";
    }
    if (typeof this.board[row][col] === "object") {
      if (this.board[row][col].cellHit === undefined) {
        return "cell constructed wrong";
      }
    } else if (this.board[row][col] !== "M" && this.board[row][col] !== "U") {
      return "wrong cell data";
    }
    return "ok";
  }
  receiveAttack(row, col) {
    const valid = this.validateAttack(row, col);
    if (valid !== "ok") return valid;
    if (typeof this.board[row][col] === "object") {
      if (this.board[row][col].cellHit === false) {
        this.board[row][col].cellHit = true;
        this.ships[this.board[row][col].id].hit();
        return "hit";
      }
      return "same twice";
    }
    if (typeof this.board[row][col] === "string") {
      if (this.board[row][col] === "M") {
        // M - missed
        return "same twice";
      }
      if (this.board[row][col] === "U") {
        // U - untouched
        this.board[row][col] = "M";
        return "missed";
      }
    } else {
      return "cell is broken";
    }
  }
  doesBoardHaveShipsLeft() {
    for (const key of Object.keys(this.ships)) {
      if (Object.prototype.hasOwnProperty.call(this.ships, key)) {
        if (this.ships[key].isSunk() === false) {
          return true;
        }
      }
    }
    return false;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Gameboard);

/***/ }),

/***/ "./src/PlaceMenu.js":
/*!**************************!*\
  !*** ./src/PlaceMenu.js ***!
  \**************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PlaceMenu; }
/* harmony export */ });
/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard.js */ "./src/Gameboard.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");
/* harmony import */ var _PlaceMenuUI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlaceMenuUI.js */ "./src/PlaceMenuUI.js");



class PlaceMenu {
  constructor(flowInstance) {
    this.isMoving = false;
    this.returnUpdatedShipData = this.returnUpdatedShipData.bind(this);
    this.defaultCoords = {
      "1_2": 3,
      "3_5": 2,
      "7_8": 2
    };
    this.flowInstance = flowInstance;
    this.gb = new _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.defaultCoords);
  }
  returnUpdatedShipData() {
    const shipsCoords = {};
    for (let i = 0; i < this.gb.board.length; i += 1) {
      for (let j = 0; j < this.gb.board[i].length; j += 1) {
        if (typeof this.gb.board[i][j] === "object") {
          const id = this.gb.board[i][j].id;
          const ship = this.gb.ships[id];
          shipsCoords[`${ship.row}_${ship.col}`] = ship.length;
        }
      }
    }
    return shipsCoords;
  }
  mount() {
    _ui_js__WEBPACK_IMPORTED_MODULE_1__.drawBoard(this.gb.board, "#gbplace", false);
    this.addDraggabilityForShips();
    _PlaceMenuUI_js__WEBPACK_IMPORTED_MODULE_2__.showPlacementSection();
    _PlaceMenuUI_js__WEBPACK_IMPORTED_MODULE_2__.addListenerForStartButton(this.startNewGame.bind(this));
  }
  unmount() {
    this.removeAllListeners();
    _PlaceMenuUI_js__WEBPACK_IMPORTED_MODULE_2__.hidePlacementSection();
  }
  startNewGame() {
    const playerName = _PlaceMenuUI_js__WEBPACK_IMPORTED_MODULE_2__.readNameInput() || "Segismundo";
    const updatedCoords = this.returnUpdatedShipData();
    this.flowInstance.game.mount(updatedCoords, playerName);
    this.unmount();
  }
  addDraggabilityForShips() {
    const ships = $("#gbplace").children().filter(function () {
      return $(this).hasClass("nothit");
    });
    ships.on("click", e => {
      if (!this.isMoving) {
        const initId = e.target.id.split("_");
        const row = Number(initId[0]);
        const col = Number(initId[1]);
        const shipId = this.gb.board[row][col].id;
        const ship = this.gb.ships[shipId];
        const initialCellsIds = [];
        for (let i = ship.col; i < ship.col + ship.length; i += 1) {
          const cell_id = `${row}_${i}`;
          initialCellsIds.push(cell_id);
          $(`#${cell_id}`).addClass("selected");
        }
        // const direction = ...
        this.isMoving = true;
        this.addMouseEnter(shipId, ship, initialCellsIds);
      }
    });
  }
  addMouseEnter(shipId, ship, initialCellsIds) {
    $("#gbplace").children().map((index, child) => {
      $(child).on("mouseenter", ev => {
        const newId = ev.target.id.split("_");
        const newRow = Number(newId[0]);
        const newCol = Number(newId[1]);
        const canPlace = this.canPlace(newRow, newCol, ship.length, shipId);
        if (canPlace) {
          _PlaceMenuUI_js__WEBPACK_IMPORTED_MODULE_2__.paintAvailability(newRow, newCol, ship.length, "available");
          $(child).on("mouseout", ev => {
            _PlaceMenuUI_js__WEBPACK_IMPORTED_MODULE_2__.removeAvailability(newRow, newCol, ship.length, "available");
          });
          $(child).on("click", ev => {
            _PlaceMenuUI_js__WEBPACK_IMPORTED_MODULE_2__.removePaintAsAvailable(newRow, newCol, ship.length);
            this.cleanPreviousCells(initialCellsIds);
            this.fillNewCells(newRow, newCol, ship.length, shipId);
            _ui_js__WEBPACK_IMPORTED_MODULE_1__.drawBoard(this.gb.board, "#gbplace", false);
            this.removeMouseEnter();
            this.isMoving = false;
          });
        } else {
          _PlaceMenuUI_js__WEBPACK_IMPORTED_MODULE_2__.paintAvailability(newRow, newCol, ship.length, "unavailable");
          $(child).on("mouseout", ev => {
            _PlaceMenuUI_js__WEBPACK_IMPORTED_MODULE_2__.removeAvailability(newRow, newCol, ship.length, "unavailable");
          });
          $(child).on("click", ev => {
            _ui_js__WEBPACK_IMPORTED_MODULE_1__.drawBoard(this.gb.board, "#gbplace", false);
            this.removeMouseEnter();
            this.isMoving = false;
          });
        }
      });
    });
  }
  removeMouseEnter() {
    $("#gbplace").children().map((index, child) => {
      $(child).off("mouseenter");
      $(child).off("over");
      $(child).off("click");
    });
    this.addDraggabilityForShips();
  }
  removeAllListeners() {
    _PlaceMenuUI_js__WEBPACK_IMPORTED_MODULE_2__.removeAllListenersFromStartButton();
    $("#gbplace").off();
    $("#gbplace").children().map((index, child) => {
      $(child).off();
    });
  }
  canPlace(row, col, length, shipId) {
    if (col + length > this.gb.boardSize) {
      return false;
    }
    for (let i = col - 1; i < col + length + 1; i += 1) {
      if (this.gb.board[row - 1] && typeof this.gb.board[row - 1][i] === "object" && this.gb.board[row - 1][i].id !== shipId) {
        return false;
      }
      if (typeof this.gb.board[row][i] === "object" && this.gb.board[row][i].id !== shipId) {
        return false;
      }
      if (this.gb.board[row + 1] && typeof this.gb.board[row + 1][i] === "object" && this.gb.board[row + 1][i].id !== shipId) {
        return false;
      }
    }
    return true;
  }
  cleanPreviousCells(initialCellsIds) {
    initialCellsIds.forEach(id => {
      const coords = id.split("_");
      const row = Number(coords[0]);
      const col = Number(coords[1]);
      this.gb.board[row][col] = "U";
    });
  }
  fillNewCells(row, col, length, shipId) {
    for (let i = col; i < col + length; i += 1) {
      this.gb.board[row][i] = {
        id: shipId,
        cellHit: false
      };
    }
    this.gb.ships[shipId].row = row;
    this.gb.ships[shipId].col = col;
  }
}

/***/ }),

/***/ "./src/PlaceMenuUI.js":
/*!****************************!*\
  !*** ./src/PlaceMenuUI.js ***!
  \****************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addListenerForStartButton: function() { return /* binding */ addListenerForStartButton; },
/* harmony export */   hidePlacementSection: function() { return /* binding */ hidePlacementSection; },
/* harmony export */   paintAsAvailable: function() { return /* binding */ paintAsAvailable; },
/* harmony export */   paintAvailability: function() { return /* binding */ paintAvailability; },
/* harmony export */   readNameInput: function() { return /* binding */ readNameInput; },
/* harmony export */   removeAllListenersFromStartButton: function() { return /* binding */ removeAllListenersFromStartButton; },
/* harmony export */   removeAvailability: function() { return /* binding */ removeAvailability; },
/* harmony export */   removePaintAsAvailable: function() { return /* binding */ removePaintAsAvailable; },
/* harmony export */   showPlacementSection: function() { return /* binding */ showPlacementSection; }
/* harmony export */ });
const ID = "#board_placement";
const NAME_INPUT_ID = "#playerName";
const START_BUTTON_ID = "#startgame";
function showPlacementSection() {
  $(ID).show();
}
function hidePlacementSection() {
  $(ID).hide();
}
function readNameInput() {
  return $(NAME_INPUT_ID).val();
}
function addListenerForStartButton(fn) {
  $(START_BUTTON_ID).on("click", fn);
}
function removeAllListenersFromStartButton() {
  $(START_BUTTON_ID).off();
}
function paintAvailability(newRow, newCol, shipLength, className) {
  if (className === "available") {
    for (let i = 0; i < shipLength; i += 1) {
      const id = `#${newRow}_${newCol + i}`;
      $(id).addClass("available");
    }
  } else if (className === "unavailable") {
    for (let i = 0; i < shipLength && i < 10; i += 1) {
      const id = `#${newRow}_${newCol + i}`;
      $(id).addClass("unavailable");
    }
  }
}
function removeAvailability(newRow, newCol, shipLength, className) {
  if (className === "available") {
    for (let i = 0; i < shipLength; i += 1) {
      const id = `#${newRow}_${newCol + i}`;
      $(id).removeClass("available");
    }
  } else if (className === "unavailable") {
    for (let i = 0; i < shipLength && i < 10; i += 1) {
      const id = `#${newRow}_${newCol + i}`;
      $(id).removeClass("unavailable");
    }
  }
}
function paintAsAvailable(newRow, newCol, shipLength) {
  for (let i = 0; i < shipLength; i += 1) {
    const id = `#${newRow}_${newCol + i}`;
    $(id).addClass("available");
  }
}
function removePaintAsAvailable(newRow, newCol, shipLength) {
  for (let i = 0; i < shipLength; i += 1) {
    const id = `#${newRow}_${newCol + i}`;
    $(id).removeClass("available");
  }
}


/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
class Player {
  constructor(gameboard, enemyBoard) {
    let name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Segismundo";
    this.name = name;
    this.wins = 0;
    this.board = gameboard;
    this.enemyBoard = enemyBoard;
  }
  takeTurn(row, col) {
    let res = this.enemyBoard.receiveAttack(row, col);
    if (this.enemyBoard.doesBoardHaveShipsLeft() === false) {
      this.wins += 1;
      return "won";
    } else {
      return res;
    }
  }
  takeRandomTurn() {
    let res;
    let randomRow;
    let randomCol;
    while (res !== "missed" && res !== "hit") {
      randomRow = Math.floor(Math.random() * 10);
      randomCol = Math.floor(Math.random() * 10);
      res = this.enemyBoard.receiveAttack(randomRow, randomCol);
    }
    if (this.enemyBoard.doesBoardHaveShipsLeft() === false) {
      this.wins += 1;
      return ["won", randomRow, randomCol];
    } else {
      return [res, randomRow, randomCol];
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
class Ship {
  constructor(row, col, length) {
    if (!length || length <= 0) {
      throw new Error("incorrect length");
    } else {
      this.length = length;
    }
    this.row = row;
    this.col = col;
    this.hitTimes = 0;
  }
  hit() {
    this.hitTimes += 1;
  }
  isSunk() {
    return this.hitTimes >= this.length;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Ship);

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawBoard: function() { return /* binding */ drawBoard; },
/* harmony export */   readClick: function() { return /* binding */ readClick; },
/* harmony export */   redrawCell: function() { return /* binding */ redrawCell; }
/* harmony export */ });
function drawBoard(array, divId, hidden) {
  $(divId).empty();
  for (let i = 0; i < array.length; i += 1) {
    const num_cell = $(`<div>`).addClass("num_top").addClass("num_cell");
    num_cell.append($(`<p>`).text(`${i}`));
    $(divId).append(num_cell);
  }
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array[i].length; j += 1) {
      let cell = $(`<div>`).attr("id", `${i}_${j}`);
      if (array[i][j] === "U" || hidden) {
        cell.addClass("U");
      } else if (array[i][j] === "M") {
        cell.addClass("M");
      } else if (array[i][j]?.cellHit === true) {
        cell.addClass("hit");
      } else if (array[i][j]?.cellHit === false && !hidden) {
        cell.addClass("nothit");
      } else {
        cell.addClass("test");
      }
      $(divId).append(cell);
    }
  }
}
function redrawCell(boardId, cellId, cellStatus) {
  const cell = $(boardId).find(`#${cellId}`);
  if (cellStatus === "won" || cellStatus === "hit") {
    cell.removeClass("nothit");
    cell.addClass("hit");
    return;
  }
  if (cellStatus === "missed") {
    cell.removeClass("U");
    cell.addClass("M");
    return;
  }
}
function readClick(eTarget) {
  let eltId = eTarget.id.split("_");
  const x = Number(eltId[0]);
  const y = Number(eltId[1]);
  if (Number.isNaN(x) || Number.isNaN(y)) {
    return [undefined, undefined];
  } else {
    return [x, y];
  }
}


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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Flow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Flow.js */ "./src/Flow.js");
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game.js */ "./src/Game.js");
/* harmony import */ var _PlaceMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlaceMenu.js */ "./src/PlaceMenu.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");




const flow = new _Flow_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRCxDQUFDLENBQUMsRUFBRTtJQUNwQyxPQUFPLENBQUM3RSxTQUFTLEVBQUVBLFNBQVMsQ0FBQztFQUNqQyxDQUFDLE1BQU07SUFDSCxPQUFPLENBQUM0RSxDQUFDLEVBQUVDLENBQUMsQ0FBQztFQUNqQjtBQUNKOzs7Ozs7O1VDakRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDLGVBQWU7V0FDZixpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0E2QjtBQUNBO0FBQ1U7QUFDakI7QUFFdEIsTUFBTUUsSUFBSSxHQUFHLElBQUkvSyxnREFBSSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5zY3NzP2VmOTAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0Zsb3cuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9HYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZVVJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvUGxhY2VNZW51LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvUGxhY2VNZW51VUkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuICAxLiBVc2UgYSBtb3JlLWludHVpdGl2ZSBib3gtc2l6aW5nIG1vZGVsLlxcbiovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLypcXG4gICAgMi4gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luXFxuICAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKlxcbiAgICBUeXBvZ3JhcGhpYyB0d2Vha3MhXFxuICAgIDMuIEFkZCBhY2Nlc3NpYmxlIGxpbmUtaGVpZ2h0XFxuICAgIDQuIEltcHJvdmUgdGV4dCByZW5kZXJpbmdcXG4gICovXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcblxcbi8qXFxuICAgIDUuIEltcHJvdmUgbWVkaWEgZGVmYXVsdHNcXG4gICovXFxuaW1nLFxcbnBpY3R1cmUsXFxudmlkZW8sXFxuY2FudmFzLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLypcXG4gICAgNi4gUmVtb3ZlIGJ1aWx0LWluIGZvcm0gdHlwb2dyYXBoeSBzdHlsZXNcXG4gICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcbiAgICA3LiBBdm9pZCB0ZXh0IG92ZXJmbG93c1xcbiAgKi9cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGVjYWU2O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuI2JvYXJkX3BsYWNlbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxufVxcbiNib2FyZF9wbGFjZW1lbnQgI3BsYXllck5hbWUge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAyMzA0NztcXG59XFxuI2JvYXJkX3BsYWNlbWVudCAjcGxheWVyTmFtZTpmb2N1cy13aXRoaW4ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAyMzA0NztcXG4gIG91dGxpbmU6IDFweCBzb2xpZCAjMDIzMDQ3O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzMDQ3O1xcbiAgY29sb3I6ICNmYjg1MDA7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtIDAuMjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCAjZmI4NTAwO1xcbn1cXG5idXR0b246aG92ZXIsIGJ1dHRvbjpmb2N1cy13aXRoaW4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3BhY2l0eTogMC45O1xcbn1cXG5idXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbiNwbGFjZS1tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5sZXR0ZXJzX2NvbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDI1cHgpO1xcbiAgZ2FwOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgY29sb3I6ICMwMjMwNDc7XFxufVxcbi5sZXR0ZXJzX2NvbCA+IDpmaXJzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcXG59XFxuLmxldHRlcnNfY29sID4gKjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubGV0dGVyc19jb2wgPiAqIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAzcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLm51bV90b3Age1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGNvbG9yOiAjMDIzMDQ3O1xcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI2dicGxhY2Uge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyNXB4KTtcXG4gIGdhcDogNXB4O1xcbn1cXG4jZ2JwbGFjZSA+ICoge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDIzMDQ3O1xcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xcbn1cXG4jZ2JwbGFjZSA+IC5ub3RoaXQge1xcbiAgYW5pbWF0aW9uOiBibGluayAycyBpbmZpbml0ZTtcXG59XFxuI2dicGxhY2UgPiAubm90aGl0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQGtleWZyYW1lcyBibGluayB7XFxuICAwJSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMjMwNDc7XFxuICB9XFxuICA1MCUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmI4NTAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMjMwNDc7XFxuICB9XFxufVxcbiNnYjEsXFxuI2diMiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDI1cHgpO1xcbiAgZ2FwOiA1cHg7XFxufVxcbiNnYjEgPiAqLFxcbiNnYjIgPiAqIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAyMzA0NztcXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcXG59XFxuI2diMSA+ICo6aG92ZXIsXFxuI2diMiA+ICo6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYm9hcmRfX21lc3NhZ2Uge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAyMzA0NztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgbWluLXdpZHRoOiAzNWNoO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGU5O1xcbn1cXG5cXG4jYm9hcmRfZ2FtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxufVxcbiNib2FyZF9nYW1lID4gI2JvYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHJlbTtcXG59XFxuI2JvYXJkX2dhbWUgPiAjYm9hcmRzID4gKiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcbiNib2FyZF9nYW1lID4gI2JvYXJkcyAuYm9hcmQtY29udCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uVSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxufVxcblxcbi5NIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtYXF1YW1hcmluZTtcXG59XFxuXFxuLm5vdGhpdCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7XFxufVxcblxcbi5ub3RoaXQuc2VsZWN0ZWQge1xcbiAgb3BhY2l0eTogMC4zNTtcXG59XFxuXFxuI2dicGxhY2UgPiAuYXZhaWxhYmxlIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGxpbWUgIWltcG9ydGFudDtcXG59XFxuI2dicGxhY2UgPiAuYXZhaWxhYmxlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2dicGxhY2UgPiAudW5hdmFpbGFibGUge1xcbiAgYm9yZGVyOiAzcHggc29saWQgcmVkICFpbXBvcnRhbnQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX3Jvb3Quc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fYnV0dG9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19ib2FyZC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUFBO0FBR0E7OztFQUdJLHNCQUFBO0FDQ0o7O0FEQ0E7O0dBQUE7QUFHQTtFQUNJLFNBQUE7QUNFSjs7QURBQTs7OztHQUFBO0FBS0E7RUFDSSxnQkFBQTtFQUNBLG1DQUFBO0FDR0o7O0FEREE7O0dBQUE7QUFHQTs7Ozs7RUFLSSxjQUFBO0VBQ0EsZUFBQTtBQ0lKOztBREZBOztHQUFBO0FBR0E7Ozs7RUFJSSxhQUFBO0FDS0o7O0FESEE7O0dBQUE7QUFHQTs7Ozs7OztFQU9JLHlCQUFBO0FDTUo7O0FDekRBO0VBQ0ksaUJBQUE7RUFDQSx5QkNKTTtFREtOLGFBQUE7RUFDQSx1QkFBQTtBRDRESjs7QUN6REE7RUFDSSxhQUFBO0FENERKOztBQ3pEQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBRDRESjs7QUN6REE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUQ0REo7QUMxREk7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FENERSO0FDMURRO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtBRDREWjs7QUd6RkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJESlU7RUNLVixjREpLO0VDS0wsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBSDRGSjtBRzFGSTtFQUVJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBSDJGUjtBR3pGSTtFQUNJLHNCQUFBO0FIMkZSOztBSXhHQTtFQUNJLGFBQUE7QUoyR0o7O0FJeEdBO0VBQ0ksYUFBQTtFQUNBLG9DQUFBO0VBQ0EsUUFURTtFQVVGLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNGaEJVO0FGMkhkO0FJekdJO0VBQ0ksMEJBQUE7QUoyR1I7QUl6R0k7RUFDSSxhQUFBO0VBQ0EscUJBQUE7QUoyR1I7O0FJdkdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FKMEdKOztBSXZHQTtFQUNJLG1CQUFBO0VBQ0EsY0ZwQ1U7RUVxQ1YsdUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBSjBHSjs7QUl2R0E7RUFDSSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSxRQTNDRTtBSnFKTjtBSXhHSTtFQUNJLFdBL0NHO0VBZ0RILFlBaERHO0VBaURILHlCQUFBO0VBQ0Esa0JBQUE7QUowR1I7QUl2R0k7RUFDSSw0QkFBQTtBSnlHUjtBSXZHSTtFQUNJLGVBQUE7QUp5R1I7O0FJckdBO0VBQ0k7SUFDSSx5QkFBQTtFSndHTjtFSXRHRTtJQUNJLHlCQUFBO0VKd0dOO0VJdEdFO0lBQ0kseUJBQUE7RUp3R047QUFDRjtBSXJHQTs7RUFFSSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSxRQTVFRTtBSm1MTjtBSXJHSTs7RUFDSSxXQWhGRztFQWlGSCxZQWpGRztFQWtGSCx5QkFBQTtFQUNBLGtCQUFBO0FKd0dSO0FJdEdJOztFQUNJLGVBQUE7QUp5R1I7O0FJckdBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlCRmpHUTtBRnlNWjs7QUlyR0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUp3R0o7QUl0R0k7RUFDSSxhQUFBO0VBQ0EsVUFBQTtBSndHUjtBSXRHUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBSndHWjtBSXRHUTtFQUNJLGFBQUE7QUp3R1o7O0FJbkdBO0VBQ0ksMkJBQUE7QUpzR0o7O0FJcEdBO0VBQ0ksNEJBQUE7QUp1R0o7O0FJckdBO0VBQ0ksa0NBQUE7QUp3R0o7O0FJdEdBO0VBQ0ksVUFBQTtFQUNBLGdDQUFBO0FKeUdKOztBSXZHQTtFQUNJLGFBQUE7QUowR0o7O0FJeEdBO0VBQ0ksaUNBQUE7QUoyR0o7QUkxR0k7RUFDSSxlQUFBO0FKNEdSOztBSXpHQTtFQUNJLGdDQUFBO0FKNEdKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxuICAxLiBVc2UgYSBtb3JlLWludHVpdGl2ZSBib3gtc2l6aW5nIG1vZGVsLlxcbiovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4vKlxcbiAgICAyLiBSZW1vdmUgZGVmYXVsdCBtYXJnaW5cXG4gICovXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLypcXG4gICAgVHlwb2dyYXBoaWMgdHdlYWtzIVxcbiAgICAzLiBBZGQgYWNjZXNzaWJsZSBsaW5lLWhlaWdodFxcbiAgICA0LiBJbXByb3ZlIHRleHQgcmVuZGVyaW5nXFxuICAqL1xcbmJvZHkge1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuLypcXG4gICAgNS4gSW1wcm92ZSBtZWRpYSBkZWZhdWx0c1xcbiAgKi9cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuLypcXG4gICAgNi4gUmVtb3ZlIGJ1aWx0LWluIGZvcm0gdHlwb2dyYXBoeSBzdHlsZXNcXG4gICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxufVxcbi8qXFxuICAgIDcuIEF2b2lkIHRleHQgb3ZlcmZsb3dzXFxuICAqL1xcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cIixcIi8qXFxuICAxLiBVc2UgYSBtb3JlLWludHVpdGl2ZSBib3gtc2l6aW5nIG1vZGVsLlxcbiovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLypcXG4gICAgMi4gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luXFxuICAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKlxcbiAgICBUeXBvZ3JhcGhpYyB0d2Vha3MhXFxuICAgIDMuIEFkZCBhY2Nlc3NpYmxlIGxpbmUtaGVpZ2h0XFxuICAgIDQuIEltcHJvdmUgdGV4dCByZW5kZXJpbmdcXG4gICovXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcblxcbi8qXFxuICAgIDUuIEltcHJvdmUgbWVkaWEgZGVmYXVsdHNcXG4gICovXFxuaW1nLFxcbnBpY3R1cmUsXFxudmlkZW8sXFxuY2FudmFzLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLypcXG4gICAgNi4gUmVtb3ZlIGJ1aWx0LWluIGZvcm0gdHlwb2dyYXBoeSBzdHlsZXNcXG4gICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcbiAgICA3LiBBdm9pZCB0ZXh0IG92ZXJmbG93c1xcbiAgKi9cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGVjYWU2O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuI2JvYXJkX3BsYWNlbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxufVxcbiNib2FyZF9wbGFjZW1lbnQgI3BsYXllck5hbWUge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAyMzA0NztcXG59XFxuI2JvYXJkX3BsYWNlbWVudCAjcGxheWVyTmFtZTpmb2N1cy13aXRoaW4ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAyMzA0NztcXG4gIG91dGxpbmU6IDFweCBzb2xpZCAjMDIzMDQ3O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzMDQ3O1xcbiAgY29sb3I6ICNmYjg1MDA7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtIDAuMjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCAjZmI4NTAwO1xcbn1cXG5idXR0b246aG92ZXIsIGJ1dHRvbjpmb2N1cy13aXRoaW4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3BhY2l0eTogMC45O1xcbn1cXG5idXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbiNwbGFjZS1tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5sZXR0ZXJzX2NvbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDI1cHgpO1xcbiAgZ2FwOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgY29sb3I6ICMwMjMwNDc7XFxufVxcbi5sZXR0ZXJzX2NvbCA+IDpmaXJzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcXG59XFxuLmxldHRlcnNfY29sID4gKjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubGV0dGVyc19jb2wgPiAqIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAzcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLm51bV90b3Age1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGNvbG9yOiAjMDIzMDQ3O1xcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI2dicGxhY2Uge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyNXB4KTtcXG4gIGdhcDogNXB4O1xcbn1cXG4jZ2JwbGFjZSA+ICoge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDIzMDQ3O1xcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xcbn1cXG4jZ2JwbGFjZSA+IC5ub3RoaXQge1xcbiAgYW5pbWF0aW9uOiBibGluayAycyBpbmZpbml0ZTtcXG59XFxuI2dicGxhY2UgPiAubm90aGl0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQGtleWZyYW1lcyBibGluayB7XFxuICAwJSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMjMwNDc7XFxuICB9XFxuICA1MCUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmI4NTAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMjMwNDc7XFxuICB9XFxufVxcbiNnYjEsXFxuI2diMiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDI1cHgpO1xcbiAgZ2FwOiA1cHg7XFxufVxcbiNnYjEgPiAqLFxcbiNnYjIgPiAqIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAyMzA0NztcXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcXG59XFxuI2diMSA+ICo6aG92ZXIsXFxuI2diMiA+ICo6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYm9hcmRfX21lc3NhZ2Uge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAyMzA0NztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgbWluLXdpZHRoOiAzNWNoO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGU5O1xcbn1cXG5cXG4jYm9hcmRfZ2FtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxufVxcbiNib2FyZF9nYW1lID4gI2JvYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHJlbTtcXG59XFxuI2JvYXJkX2dhbWUgPiAjYm9hcmRzID4gKiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcbiNib2FyZF9nYW1lID4gI2JvYXJkcyAuYm9hcmQtY29udCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uVSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxufVxcblxcbi5NIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtYXF1YW1hcmluZTtcXG59XFxuXFxuLm5vdGhpdCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7XFxufVxcblxcbi5ub3RoaXQuc2VsZWN0ZWQge1xcbiAgb3BhY2l0eTogMC4zNTtcXG59XFxuXFxuI2dicGxhY2UgPiAuYXZhaWxhYmxlIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGxpbWUgIWltcG9ydGFudDtcXG59XFxuI2dicGxhY2UgPiAuYXZhaWxhYmxlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2dicGxhY2UgPiAudW5hdmFpbGFibGUge1xcbiAgYm9yZGVyOiAzcHggc29saWQgcmVkICFpbXBvcnRhbnQ7XFxufVwiLFwiQHVzZSBcXFwiLi9jb2xvcnNcXFwiIGFzIGNscnM7XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjbHJzLiRza3libHVlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuI2JvYXJkX3BsYWNlbWVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG5cXG4gICAgI3BsYXllck5hbWUge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgY2xycy4kZGFya3NlYWJsdWU7XFxuXFxuICAgICAgICAmOmZvY3VzLXdpdGhpbiB7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgY2xycy4kZGFya3NlYWJsdWU7XFxuICAgICAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkIGNscnMuJGRhcmtzZWFibHVlO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiJHNreWJsdWU6ICM4ZWNhZTY7XFxuJGRhcmtzZWFibHVlOiAjMDIzMDQ3O1xcbiRvcmFuZ2U6ICNmYjg1MDA7XFxuJGxpZ2h0cGluazogI2VkZWRlOTtcXG5cIixcIkB1c2UgXFxcIi4vY29sb3JzXFxcIiBhcyBjbHJzO1xcblxcbmJ1dHRvbiB7XFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNscnMuJGRhcmtzZWFibHVlO1xcbiAgICBjb2xvcjogY2xycy4kb3JhbmdlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDFyZW0gMC4yNXJlbSAxcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBjbHJzLiRvcmFuZ2U7XFxuXFxuICAgICY6aG92ZXIsXFxuICAgICY6Zm9jdXMtd2l0aGluIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgfVxcbiAgICAmOmFjdGl2ZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgICB9XFxufVxcblwiLFwiQHVzZSBcXFwiLi9jb2xvcnNcXFwiIGFzIGNscnM7XFxuQHVzZSBcXFwic2FzczptYXRoXFxcIjtcXG5cXG4kY2VsbHNpemU6IDI1cHg7XFxuJGdhcDogNXB4O1xcblxcbiNwbGFjZS1tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmxldHRlcnNfY29sIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsICRjZWxsc2l6ZSk7XFxuICAgIGdhcDogJGdhcDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICAgIGNvbG9yOiBjbHJzLiRkYXJrc2VhYmx1ZTtcXG5cXG4gICAgJiA+IDpmaXJzdC1jaGlsZCB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJGdhcCk7XFxuICAgIH1cXG4gICAgJiA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4ubGV0dGVyc19jb2wgPiAqIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ubnVtX3RvcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICAgIGNvbG9yOiBjbHJzLiRkYXJrc2VhYmx1ZTtcXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI2dicGxhY2Uge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgJGNlbGxzaXplKTtcXG4gICAgZ2FwOiAkZ2FwO1xcblxcbiAgICAmID4gKiB7XFxuICAgICAgICB3aWR0aDogJGNlbGxzaXplO1xcbiAgICAgICAgaGVpZ2h0OiAkY2VsbHNpemU7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBjbHJzLiRkYXJrc2VhYmx1ZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1JTtcXG4gICAgfVxcblxcbiAgICAmID4gLm5vdGhpdCB7XFxuICAgICAgICBhbmltYXRpb246IGJsaW5rIDJzIGluZmluaXRlO1xcbiAgICB9XFxuICAgICYgPiAubm90aGl0OmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXG4gICAgMCUge1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgY2xycy4kZGFya3NlYWJsdWU7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGNscnMuJG9yYW5nZTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGNscnMuJGRhcmtzZWFibHVlO1xcbiAgICB9XFxufVxcblxcbiNnYjEsXFxuI2diMiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAkY2VsbHNpemUpO1xcbiAgICBnYXA6ICRnYXA7XFxuXFxuICAgICYgPiAqIHtcXG4gICAgICAgIHdpZHRoOiAkY2VsbHNpemU7XFxuICAgICAgICBoZWlnaHQ6ICRjZWxsc2l6ZTtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGNscnMuJGRhcmtzZWFibHVlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTUlO1xcbiAgICB9XFxuICAgICYgPiAqOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4jYm9hcmRfX21lc3NhZ2Uge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjbHJzLiRkYXJrc2VhYmx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgbWluLXdpZHRoOiAzNWNoO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjbHJzLiRsaWdodHBpbms7XFxufVxcblxcbiNib2FyZF9nYW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcmVtO1xcblxcbiAgICAmID4gI2JvYXJkcyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiAxMHJlbTtcXG5cXG4gICAgICAgICYgPiAqIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICB9XFxuICAgICAgICAmIC5ib2FyZC1jb250IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5VIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbn1cXG4uTSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxufVxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtZWRpdW1hcXVhbWFyaW5lO1xcbn1cXG4ubm90aGl0IHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7XFxufVxcbi5ub3RoaXQuc2VsZWN0ZWQge1xcbiAgICBvcGFjaXR5OiAwLjM1O1xcbn1cXG4jZ2JwbGFjZSA+IC5hdmFpbGFibGUge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBsaW1lICFpbXBvcnRhbnQ7XFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxufVxcbiNnYnBsYWNlID4gLnVuYXZhaWxhYmxlIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmVkICFpbXBvcnRhbnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUGxhY2VNZW51IGZyb20gXCIuL1BsYWNlTWVudS5qc1wiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZS5qc1wiO1xuaW1wb3J0ICogYXMgR2FtZVVJIGZyb20gXCIuL0dhbWVVSS5qc1wiO1xuXG5jbGFzcyBGbG93IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wbSA9IG5ldyBQbGFjZU1lbnUodGhpcyk7XG4gICAgICAgIHRoaXMucG0ubW91bnQoKTtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUodGhpcywgdGhpcy5wbS5kZWZhdWx0Q29vcmRzLCBcImRlZjFcIiwgXCJDb21wdXRlclwiKTtcbiAgICAgICAgR2FtZVVJLmhpZGVHYW1lU2VjdGlvbigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxvdztcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkLmpzXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllci5qc1wiO1xuaW1wb3J0ICogYXMgdWkgZnJvbSBcIi4vdWkuanNcIjtcbmltcG9ydCAqIGFzIEdhbWVVSSBmcm9tIFwiLi9HYW1lVUkuanNcIjtcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoZmxvd0luc3RhbmNlLCBzaGlwc0Nvb3JkcywgbmFtZTEsIG5hbWUyKSB7XG4gICAgICAgIHRoaXMuZmxvd0luc3RhbmNlID0gZmxvd0luc3RhbmNlO1xuICAgICAgICB0aGlzLnNoaXBzQ29vcmRzID0gc2hpcHNDb29yZHM7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJDb29yZHMgPSB7XG4gICAgICAgICAgICBcIjNfMVwiOiA0LFxuICAgICAgICAgICAgXCI3XzNcIjogMyxcbiAgICAgICAgICAgIFwiMF80XCI6IDIsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucGxheWVyMSA9IG5ldyBQbGF5ZXIodGhpcy5nYjEsIHRoaXMuZ2IyLCBuYW1lMSk7XG4gICAgICAgIHRoaXMucGxheWVyMiA9IG5ldyBQbGF5ZXIodGhpcy5nYjIsIHRoaXMuZ2IxLCBuYW1lMik7XG4gICAgfVxuXG4gICAgbW91bnQodXBkYXRlZENvb3JkcywgbmFtZSkge1xuICAgICAgICB0aGlzLnNoaXBzQ29vcmRzID0gdXBkYXRlZENvb3JkcztcbiAgICAgICAgdGhpcy5wbGF5ZXIxLmJvYXJkID0gbmV3IEdhbWVib2FyZCh0aGlzLnNoaXBzQ29vcmRzKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIxLm5hbWUgPSBuYW1lID09PSBcIlwiID8gdGhpcy5wbGF5ZXIxLm5hbWUgOiBuYW1lO1xuICAgICAgICB0aGlzLnBsYXllcjIuYm9hcmQgPSBuZXcgR2FtZWJvYXJkKHRoaXMuY29tcHV0ZXJDb29yZHMpO1xuICAgICAgICB0aGlzLnBsYXllcjEuZW5lbXlCb2FyZCA9IHRoaXMucGxheWVyMi5ib2FyZDtcbiAgICAgICAgdGhpcy5wbGF5ZXIyLmVuZW15Qm9hcmQgPSB0aGlzLnBsYXllcjEuYm9hcmQ7XG5cbiAgICAgICAgdGhpcy5jdXJyUGxheWVyTmFtZSA9IHRoaXMucGxheWVyMS5uYW1lO1xuXG4gICAgICAgIHVpLmRyYXdCb2FyZCh0aGlzLnBsYXllcjEuYm9hcmQuYm9hcmQsIFwiI2diMVwiLCBmYWxzZSk7XG4gICAgICAgIHVpLmRyYXdCb2FyZCh0aGlzLnBsYXllcjIuYm9hcmQuYm9hcmQsIFwiI2diMlwiLCB0cnVlKTtcbiAgICAgICAgR2FtZVVJLnNob3dHYW1lU2VjdGlvbigpO1xuICAgICAgICBHYW1lVUkudXBkYXRlTWVzc2FnZShcIlwiKTtcbiAgICAgICAgR2FtZVVJLmhpZGVSZXN0YXJ0QnV0dG9uKCk7XG4gICAgICAgIEdhbWVVSS5hZGRCb2FyZDJMaXN0ZW5lcih0aGlzLmhhbmRsZUJvYXJkQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIEdhbWVVSS5hZGRSZXN0YXJ0QnV0dG9uTGlzdGVuZXIodGhpcy5yZW1vdW50LmJpbmQodGhpcykpO1xuICAgICAgICBHYW1lVUkuYWRkR2l2ZVVwTGlzdGVuZXIodGhpcy51bm1vdW50LmJpbmQodGhpcykpO1xuICAgICAgICBHYW1lVUkudXBkYXRlUGxheWVyc0luZm8oXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEubmFtZSxcbiAgICAgICAgICAgIHRoaXMucGxheWVyMS53aW5zLFxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIyLm5hbWUsXG4gICAgICAgICAgICB0aGlzLnBsYXllcjIud2luc1xuICAgICAgICApO1xuICAgIH1cbiAgICByZW1vdW50KCkge1xuICAgICAgICB0aGlzLmdiMSA9IG5ldyBHYW1lYm9hcmQodGhpcy5zaGlwc0Nvb3Jkcyk7XG4gICAgICAgIHRoaXMuZ2IyID0gbmV3IEdhbWVib2FyZCh0aGlzLmNvbXB1dGVyQ29vcmRzKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIxLmJvYXJkID0gdGhpcy5nYjE7XG4gICAgICAgIHRoaXMucGxheWVyMS5lbmVteUJvYXJkID0gdGhpcy5nYjI7XG4gICAgICAgIHRoaXMucGxheWVyMi5ib2FyZCA9IHRoaXMuZ2IyO1xuICAgICAgICB0aGlzLnBsYXllcjIuZW5lbXlCb2FyZCA9IHRoaXMuZ2IxO1xuXG4gICAgICAgIHVpLmRyYXdCb2FyZCh0aGlzLmdiMS5ib2FyZCwgXCIjZ2IxXCIsIGZhbHNlKTtcbiAgICAgICAgdWkuZHJhd0JvYXJkKHRoaXMuZ2IyLmJvYXJkLCBcIiNnYjJcIiwgdHJ1ZSk7XG4gICAgICAgIEdhbWVVSS51cGRhdGVNZXNzYWdlKFwiXCIpO1xuICAgICAgICBHYW1lVUkuaGlkZVJlc3RhcnRCdXR0b24oKTtcbiAgICAgICAgR2FtZVVJLmFkZEJvYXJkMkxpc3RlbmVyKHRoaXMuaGFuZGxlQm9hcmRDbGljay5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgdW5tb3VudCgpIHtcbiAgICAgICAgR2FtZVVJLmhpZGVHYW1lU2VjdGlvbigpO1xuICAgICAgICBHYW1lVUkucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuZmxvd0luc3RhbmNlLnBtLm1vdW50KCk7XG4gICAgfVxuXG4gICAgaGFuZGxlQm9hcmRDbGljayhlKSB7XG4gICAgICAgIHRoaXMubWFrZVR1cm4oZS50YXJnZXQpO1xuICAgIH1cblxuICAgIG1ha2VUdXJuKGVUYXJnZXQpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VyclBsYXllck5hbWUgIT09IHRoaXMucGxheWVyMS5uYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IHVpLnJlYWRDbGljayhlVGFyZ2V0KTtcbiAgICAgICAgbGV0IHJlcyA9IHRoaXMucGxheWVyMS50YWtlVHVybihyb3csIGNvbCk7XG4gICAgICAgIGlmICghR2FtZWJvYXJkLnZhbGlkQW5zd2Vycy5pbmNsdWRlcyhyZXMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcyA9PT0gXCJzYW1lIHR3aWNlXCIpIHtcbiAgICAgICAgICAgIEdhbWVVSS51cGRhdGVNZXNzYWdlKFwiY2FuJ3QgaGl0IHRoZSBzYW1lIGNlbGwgdHdpY2VcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdWkucmVkcmF3Q2VsbChcIiNnYjJcIiwgZVRhcmdldC5pZCwgcmVzKTtcbiAgICAgICAgaWYgKHJlcyA9PT0gXCJ3b25cIikge1xuICAgICAgICAgICAgR2FtZVVJLmhhbmRsZVdpbihcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjEubmFtZSxcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjEubmFtZSxcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjEud2lucyxcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjIubmFtZSxcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjIud2luc1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdXJyUGxheWVyID0gXCJwMlwiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxldCBbcmVzLCByb3csIGNvbF0gPSB0aGlzLnBsYXllcjIudGFrZVJhbmRvbVR1cm4oKTtcbiAgICAgICAgICAgIHVpLnJlZHJhd0NlbGwoXCIjZ2IxXCIsIGAke3Jvd31fJHtjb2x9YCwgcmVzKTtcbiAgICAgICAgICAgIHRoaXMuY3VyclBsYXllciA9IFwicDFcIjtcbiAgICAgICAgICAgIGlmIChyZXMgPT09IFwid29uXCIpIHtcbiAgICAgICAgICAgICAgICBHYW1lVUkuaGFuZGxlV2luKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMS53aW5zLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIyLndpbnNcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMjUwKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJjb25zdCBJRCA9IFwiI2JvYXJkX2dhbWVcIjtcbmNvbnN0IElOUFVUX01TR19JRCA9IFwiI2JvYXJkX19tZXNzYWdlXCI7XG5jb25zdCBJRF9HQjEgPSBcIiNnYjFcIjtcbmNvbnN0IElEX0dCMiA9IFwiI2diMlwiO1xuY29uc3QgUkVTVEFSVF9JRCA9IFwiI3Jlc3RhcnRcIjtcbmNvbnN0IEdJVkVVUF9JRCA9IFwiI2dpdmV1cFwiO1xuXG5mdW5jdGlvbiBzaG93R2FtZVNlY3Rpb24oKSB7XG4gICAgJChJRCkuc2hvdygpO1xufVxuZnVuY3Rpb24gaGlkZUdhbWVTZWN0aW9uKCkge1xuICAgICQoSUQpLmhpZGUoKTtcbn1cbmZ1bmN0aW9uIGFkZEJvYXJkMkxpc3RlbmVyKGZuKSB7XG4gICAgJChJRF9HQjIpLm9uKFwiY2xpY2tcIiwgZm4pO1xufVxuZnVuY3Rpb24gcmVtb3ZlQm9hcmQyTGlzdGVuZXIoKSB7XG4gICAgJChJRF9HQjIpLm9mZihcImNsaWNrXCIpO1xufVxuXG5mdW5jdGlvbiBhZGRSZXN0YXJ0QnV0dG9uTGlzdGVuZXIoZm4pIHtcbiAgICAkKFJFU1RBUlRfSUQpLm9uKFwiY2xpY2tcIiwgZm4pO1xufVxuZnVuY3Rpb24gcmVtb3ZlUmVzdGFydEJ1dHRvbkxpc3RlbmVyKCkge1xuICAgICQoUkVTVEFSVF9JRCkub2ZmKCk7XG59XG5mdW5jdGlvbiBzaG93UmVzdGFydEJ1dHRvbigpIHtcbiAgICAkKFJFU1RBUlRfSUQpLnNob3coKTtcbn1cbmZ1bmN0aW9uIGhpZGVSZXN0YXJ0QnV0dG9uKCkge1xuICAgICQoUkVTVEFSVF9JRCkuaGlkZSgpO1xufVxuXG5mdW5jdGlvbiBhZGRHaXZlVXBMaXN0ZW5lcihmbikge1xuICAgICQoR0lWRVVQX0lEKS5vbihcImNsaWNrXCIsIGZuKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUdpdmVVcExpc3RlbmVyKCkge1xuICAgICQoR0lWRVVQX0lEKS5vZmYoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKCkge1xuICAgIHJlbW92ZUJvYXJkMkxpc3RlbmVyKCk7XG4gICAgcmVtb3ZlUmVzdGFydEJ1dHRvbkxpc3RlbmVyKCk7XG4gICAgcmVtb3ZlR2l2ZVVwTGlzdGVuZXIoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTWVzc2FnZSh0ZXh0KSB7XG4gICAgJChJTlBVVF9NU0dfSUQpLnRleHQoYCR7dGV4dH1gKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUGxheWVyc0luZm8ocDFuYW1lLCBwMXdpbnMsIHAybmFtZSwgcDJ3aW5zKSB7XG4gICAgJChgI3AxX19uYW1lYCkudGV4dChwMW5hbWUpO1xuICAgICQoYCNwMV9fd2luc2ApLnRleHQocDF3aW5zKTtcbiAgICAkKGAjcDJfX25hbWVgKS50ZXh0KHAybmFtZSk7XG4gICAgJChgI3AyX193aW5zYCkudGV4dChwMndpbnMpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVXaW4od2lubmVyTmFtZSwgcDFuYW1lLCBwMXdpbnMsIHAybmFtZSwgcDJ3aW5zKSB7XG4gICAgdGhpcy51cGRhdGVNZXNzYWdlKGAke3dpbm5lck5hbWV9IGhhcyB3b24hYCk7XG4gICAgdGhpcy5zaG93UmVzdGFydEJ1dHRvbigpO1xuICAgIHRoaXMucmVtb3ZlQm9hcmQyTGlzdGVuZXIoKTtcbiAgICB0aGlzLnVwZGF0ZVBsYXllcnNJbmZvKHAxbmFtZSwgcDF3aW5zLCBwMm5hbWUsIHAyd2lucyk7XG59XG5cbmV4cG9ydCB7XG4gICAgc2hvd0dhbWVTZWN0aW9uLFxuICAgIGhpZGVHYW1lU2VjdGlvbixcbiAgICBhZGRCb2FyZDJMaXN0ZW5lcixcbiAgICByZW1vdmVCb2FyZDJMaXN0ZW5lcixcbiAgICBhZGRSZXN0YXJ0QnV0dG9uTGlzdGVuZXIsXG4gICAgcmVtb3ZlUmVzdGFydEJ1dHRvbkxpc3RlbmVyLFxuICAgIHNob3dSZXN0YXJ0QnV0dG9uLFxuICAgIGhpZGVSZXN0YXJ0QnV0dG9uLFxuICAgIHVwZGF0ZU1lc3NhZ2UsXG4gICAgYWRkR2l2ZVVwTGlzdGVuZXIsXG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzLFxuICAgIHVwZGF0ZVBsYXllcnNJbmZvLFxuICAgIGhhbmRsZVdpbixcbn07XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwLmpzXCI7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgc3RhdGljIHZhbGlkQW5zd2VycyA9IFtcImhpdFwiLCBcIm1pc3NlZFwiLCBcInNhbWUgdHdpY2VcIiwgXCJ3b25cIl07XG4gICAgY29uc3RydWN0b3Ioc2hpcHNDb29yZHMpIHtcbiAgICAgICAgdGhpcy5ib2FyZFNpemUgPSAxMDtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBBcnJheSh0aGlzLmJvYXJkU2l6ZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZFNpemU7IGkgKz0gMSkge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtpXSA9IG5ldyBBcnJheSh0aGlzLmJvYXJkU2l6ZSkuZmlsbChcIlVcIik7IC8vIFUgLSB1bnRvdWNoZWRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNoaXBDb3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5zaGlwcyA9IHt9O1xuICAgICAgICB0aGlzLmZpbGxTaGlwcyhzaGlwc0Nvb3Jkcyk7XG4gICAgfVxuXG4gICAgZmlsbFNoaXBzKHNoaXBzQ29vcmRzKSB7XG4gICAgICAgIGlmICghc2hpcHNDb29yZHMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzaGlwc0Nvb3Jkcykge1xuICAgICAgICAgICAgY29uc3QgY29vcmRzID0ga2V5LnNwbGl0KFwiX1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXBzQ29vcmRzW2tleV07XG4gICAgICAgICAgICB0aGlzLnBsYWNlU2hpcChcbiAgICAgICAgICAgICAgICBOdW1iZXIobGVuZ3RoKSxcbiAgICAgICAgICAgICAgICBOdW1iZXIoY29vcmRzWzBdKSxcbiAgICAgICAgICAgICAgICBOdW1iZXIoY29vcmRzWzFdKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYWNlU2hpcChzaGlwTGVuZ3RoLCByb3csIGNvbCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICByb3cgPCAwIHx8XG4gICAgICAgICAgICByb3cgPj0gdGhpcy5ib2FyZFNpemUgfHxcbiAgICAgICAgICAgIGNvbCA8IDAgfHxcbiAgICAgICAgICAgIGNvbCA+PSB0aGlzLmJvYXJkU2l6ZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImluY29ycmVjdCBjb29yZHNcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHJvdywgY29sLCBzaGlwTGVuZ3RoKTtcbiAgICAgICAgdGhpcy5zaGlwc1srK3RoaXMuc2hpcENvdW50ZXJdID0gc2hpcDtcblxuICAgICAgICBpZiAodGhpcy5ib2FyZFNpemUgLSBjb2wgPj0gc2hpcExlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA8IGNvbCArIHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtpXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuc2hpcENvdW50ZXIsXG4gICAgICAgICAgICAgICAgICAgIGNlbGxIaXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzaGlwIG91dCBvZiBib3VuZFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRlQXR0YWNrKHJvdywgY29sKSB7XG4gICAgICAgIGlmICgocm93ICE9PSAwICYmICFyb3cpIHx8IChjb2wgIT09IDAgJiYgIWNvbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBcImluY29ycmVjdCBjb29yZHMgdHlwZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHJvdyA8IDAgfHxcbiAgICAgICAgICAgIHJvdyA+PSB0aGlzLmJvYXJkU2l6ZSB8fFxuICAgICAgICAgICAgY29sIDwgMCB8fFxuICAgICAgICAgICAgY29sID49IHRoaXMuYm9hcmRTaXplXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIFwiY29vcmRzIG91dCBvZiBib3VuZFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXS5jZWxsSGl0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjZWxsIGNvbnN0cnVjdGVkIHdyb25nXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSAhPT0gXCJNXCIgJiZcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdICE9PSBcIlVcIlxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBcIndyb25nIGNlbGwgZGF0YVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIm9rXCI7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhyb3csIGNvbCkge1xuICAgICAgICBjb25zdCB2YWxpZCA9IHRoaXMudmFsaWRhdGVBdHRhY2socm93LCBjb2wpO1xuICAgICAgICBpZiAodmFsaWQgIT09IFwib2tcIikgcmV0dXJuIHZhbGlkO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXS5jZWxsSGl0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdLmNlbGxIaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNbdGhpcy5ib2FyZFtyb3ddW2NvbF0uaWRdLmhpdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBcImhpdFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFwic2FtZSB0d2ljZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXSA9PT0gXCJNXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBNIC0gbWlzc2VkXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwic2FtZSB0d2ljZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2xdID09PSBcIlVcIikge1xuICAgICAgICAgICAgICAgIC8vIFUgLSB1bnRvdWNoZWRcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9IFwiTVwiO1xuICAgICAgICAgICAgICAgIHJldHVybiBcIm1pc3NlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiY2VsbCBpcyBicm9rZW5cIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvZXNCb2FyZEhhdmVTaGlwc0xlZnQoKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuc2hpcHMpKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuc2hpcHMsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwc1trZXldLmlzU3VuaygpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9HYW1lYm9hcmQuanNcIjtcbmltcG9ydCAqIGFzIHVpIGZyb20gXCIuL3VpLmpzXCI7XG5pbXBvcnQgKiBhcyBQbGFjZU1lbnVVSSBmcm9tIFwiLi9QbGFjZU1lbnVVSS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFjZU1lbnUge1xuICAgIGNvbnN0cnVjdG9yKGZsb3dJbnN0YW5jZSkge1xuICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmV0dXJuVXBkYXRlZFNoaXBEYXRhID0gdGhpcy5yZXR1cm5VcGRhdGVkU2hpcERhdGEuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0Q29vcmRzID0ge1xuICAgICAgICAgICAgXCIxXzJcIjogMyxcbiAgICAgICAgICAgIFwiM181XCI6IDIsXG4gICAgICAgICAgICBcIjdfOFwiOiAyLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmZsb3dJbnN0YW5jZSA9IGZsb3dJbnN0YW5jZTtcbiAgICAgICAgdGhpcy5nYiA9IG5ldyBHYW1lYm9hcmQodGhpcy5kZWZhdWx0Q29vcmRzKTtcbiAgICB9XG5cbiAgICByZXR1cm5VcGRhdGVkU2hpcERhdGEoKSB7XG4gICAgICAgIGNvbnN0IHNoaXBzQ29vcmRzID0ge307XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYi5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdiLmJvYXJkW2ldLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdiLmJvYXJkW2ldW2pdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5nYi5ib2FyZFtpXVtqXS5pZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXMuZ2Iuc2hpcHNbaWRdO1xuICAgICAgICAgICAgICAgICAgICBzaGlwc0Nvb3Jkc1tgJHtzaGlwLnJvd31fJHtzaGlwLmNvbH1gXSA9IHNoaXAubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hpcHNDb29yZHM7XG4gICAgfVxuXG4gICAgbW91bnQoKSB7XG4gICAgICAgIHVpLmRyYXdCb2FyZCh0aGlzLmdiLmJvYXJkLCBcIiNnYnBsYWNlXCIsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5hZGREcmFnZ2FiaWxpdHlGb3JTaGlwcygpO1xuICAgICAgICBQbGFjZU1lbnVVSS5zaG93UGxhY2VtZW50U2VjdGlvbigpO1xuICAgICAgICBQbGFjZU1lbnVVSS5hZGRMaXN0ZW5lckZvclN0YXJ0QnV0dG9uKHRoaXMuc3RhcnROZXdHYW1lLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICB1bm1vdW50KCkge1xuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgICAgICBQbGFjZU1lbnVVSS5oaWRlUGxhY2VtZW50U2VjdGlvbigpO1xuICAgIH1cbiAgICBzdGFydE5ld0dhbWUoKSB7XG4gICAgICAgIGNvbnN0IHBsYXllck5hbWUgPSBQbGFjZU1lbnVVSS5yZWFkTmFtZUlucHV0KCkgfHwgXCJTZWdpc211bmRvXCI7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRDb29yZHMgPSB0aGlzLnJldHVyblVwZGF0ZWRTaGlwRGF0YSgpO1xuICAgICAgICB0aGlzLmZsb3dJbnN0YW5jZS5nYW1lLm1vdW50KHVwZGF0ZWRDb29yZHMsIHBsYXllck5hbWUpO1xuICAgICAgICB0aGlzLnVubW91bnQoKTtcbiAgICB9XG5cbiAgICBhZGREcmFnZ2FiaWxpdHlGb3JTaGlwcygpIHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSAkKFwiI2dicGxhY2VcIilcbiAgICAgICAgICAgIC5jaGlsZHJlbigpXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5oYXNDbGFzcyhcIm5vdGhpdFwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHNoaXBzLm9uKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc01vdmluZykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRJZCA9IGUudGFyZ2V0LmlkLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBOdW1iZXIoaW5pdElkWzBdKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSBOdW1iZXIoaW5pdElkWzFdKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwSWQgPSB0aGlzLmdiLmJvYXJkW3Jvd11bY29sXS5pZDtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwID0gdGhpcy5nYi5zaGlwc1tzaGlwSWRdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxDZWxsc0lkcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBzaGlwLmNvbDsgaSA8IHNoaXAuY29sICsgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsX2lkID0gYCR7cm93fV8ke2l9YDtcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbENlbGxzSWRzLnB1c2goY2VsbF9pZCk7XG4gICAgICAgICAgICAgICAgICAgICQoYCMke2NlbGxfaWR9YCkuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgZGlyZWN0aW9uID0gLi4uXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRNb3VzZUVudGVyKHNoaXBJZCwgc2hpcCwgaW5pdGlhbENlbGxzSWRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkTW91c2VFbnRlcihzaGlwSWQsIHNoaXAsIGluaXRpYWxDZWxsc0lkcykge1xuICAgICAgICAkKFwiI2dicGxhY2VcIilcbiAgICAgICAgICAgIC5jaGlsZHJlbigpXG4gICAgICAgICAgICAubWFwKChpbmRleCwgY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICAkKGNoaWxkKS5vbihcIm1vdXNlZW50ZXJcIiwgKGV2KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0lkID0gZXYudGFyZ2V0LmlkLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Um93ID0gTnVtYmVyKG5ld0lkWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Q29sID0gTnVtYmVyKG5ld0lkWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FuUGxhY2UgPSB0aGlzLmNhblBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um93LFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q29sLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwSWRcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhblBsYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBQbGFjZU1lbnVVSS5wYWludEF2YWlsYWJpbGl0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdSb3csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q29sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGNoaWxkKS5vbihcIm1vdXNlb3V0XCIsIChldikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYWNlTWVudVVJLnJlbW92ZUF2YWlsYWJpbGl0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDb2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChjaGlsZCkub24oXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGFjZU1lbnVVSS5yZW1vdmVQYWludEFzQXZhaWxhYmxlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdSb3csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYW5QcmV2aW91c0NlbGxzKGluaXRpYWxDZWxsc0lkcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsTmV3Q2VsbHMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1JvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q29sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcElkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aS5kcmF3Qm9hcmQodGhpcy5nYi5ib2FyZCwgXCIjZ2JwbGFjZVwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVNb3VzZUVudGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBQbGFjZU1lbnVVSS5wYWludEF2YWlsYWJpbGl0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdSb3csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q29sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidW5hdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoY2hpbGQpLm9uKFwibW91c2VvdXRcIiwgKGV2KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhY2VNZW51VUkucmVtb3ZlQXZhaWxhYmlsaXR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdSb3csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidW5hdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoY2hpbGQpLm9uKFwiY2xpY2tcIiwgKGV2KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWkuZHJhd0JvYXJkKHRoaXMuZ2IuYm9hcmQsIFwiI2dicGxhY2VcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTW91c2VFbnRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVtb3ZlTW91c2VFbnRlcigpIHtcbiAgICAgICAgJChcIiNnYnBsYWNlXCIpXG4gICAgICAgICAgICAuY2hpbGRyZW4oKVxuICAgICAgICAgICAgLm1hcCgoaW5kZXgsIGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgJChjaGlsZCkub2ZmKFwibW91c2VlbnRlclwiKTtcbiAgICAgICAgICAgICAgICAkKGNoaWxkKS5vZmYoXCJvdmVyXCIpO1xuICAgICAgICAgICAgICAgICQoY2hpbGQpLm9mZihcImNsaWNrXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRHJhZ2dhYmlsaXR5Rm9yU2hpcHMoKTtcbiAgICB9XG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzKCkge1xuICAgICAgICBQbGFjZU1lbnVVSS5yZW1vdmVBbGxMaXN0ZW5lcnNGcm9tU3RhcnRCdXR0b24oKTtcbiAgICAgICAgJChcIiNnYnBsYWNlXCIpLm9mZigpO1xuICAgICAgICAkKFwiI2dicGxhY2VcIilcbiAgICAgICAgICAgIC5jaGlsZHJlbigpXG4gICAgICAgICAgICAubWFwKChpbmRleCwgY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICAkKGNoaWxkKS5vZmYoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhblBsYWNlKHJvdywgY29sLCBsZW5ndGgsIHNoaXBJZCkge1xuICAgICAgICBpZiAoY29sICsgbGVuZ3RoID4gdGhpcy5nYi5ib2FyZFNpemUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gY29sIC0gMTsgaSA8IGNvbCArIGxlbmd0aCArIDE7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMuZ2IuYm9hcmRbcm93IC0gMV0gJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgdGhpcy5nYi5ib2FyZFtyb3cgLSAxXVtpXSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgICAgIHRoaXMuZ2IuYm9hcmRbcm93IC0gMV1baV0uaWQgIT09IHNoaXBJZFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHR5cGVvZiB0aGlzLmdiLmJvYXJkW3Jvd11baV0gPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmdiLmJvYXJkW3Jvd11baV0uaWQgIT09IHNoaXBJZFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMuZ2IuYm9hcmRbcm93ICsgMV0gJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgdGhpcy5nYi5ib2FyZFtyb3cgKyAxXVtpXSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgICAgIHRoaXMuZ2IuYm9hcmRbcm93ICsgMV1baV0uaWQgIT09IHNoaXBJZFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjbGVhblByZXZpb3VzQ2VsbHMoaW5pdGlhbENlbGxzSWRzKSB7XG4gICAgICAgIGluaXRpYWxDZWxsc0lkcy5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gaWQuc3BsaXQoXCJfXCIpO1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gTnVtYmVyKGNvb3Jkc1swXSk7XG4gICAgICAgICAgICBjb25zdCBjb2wgPSBOdW1iZXIoY29vcmRzWzFdKTtcbiAgICAgICAgICAgIHRoaXMuZ2IuYm9hcmRbcm93XVtjb2xdID0gXCJVXCI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmaWxsTmV3Q2VsbHMocm93LCBjb2wsIGxlbmd0aCwgc2hpcElkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBjb2w7IGkgPCBjb2wgKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdGhpcy5nYi5ib2FyZFtyb3ddW2ldID0ge1xuICAgICAgICAgICAgICAgIGlkOiBzaGlwSWQsXG4gICAgICAgICAgICAgICAgY2VsbEhpdDogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2Iuc2hpcHNbc2hpcElkXS5yb3cgPSByb3c7XG4gICAgICAgIHRoaXMuZ2Iuc2hpcHNbc2hpcElkXS5jb2wgPSBjb2w7XG4gICAgfVxufVxuIiwiY29uc3QgSUQgPSBcIiNib2FyZF9wbGFjZW1lbnRcIjtcbmNvbnN0IE5BTUVfSU5QVVRfSUQgPSBcIiNwbGF5ZXJOYW1lXCI7XG5jb25zdCBTVEFSVF9CVVRUT05fSUQgPSBcIiNzdGFydGdhbWVcIjtcblxuZnVuY3Rpb24gc2hvd1BsYWNlbWVudFNlY3Rpb24oKSB7XG4gICAgJChJRCkuc2hvdygpO1xufVxuXG5mdW5jdGlvbiBoaWRlUGxhY2VtZW50U2VjdGlvbigpIHtcbiAgICAkKElEKS5oaWRlKCk7XG59XG5cbmZ1bmN0aW9uIHJlYWROYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuICQoTkFNRV9JTlBVVF9JRCkudmFsKCk7XG59XG5cbmZ1bmN0aW9uIGFkZExpc3RlbmVyRm9yU3RhcnRCdXR0b24oZm4pIHtcbiAgICAkKFNUQVJUX0JVVFRPTl9JRCkub24oXCJjbGlja1wiLCBmbik7XG59XG5mdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnNGcm9tU3RhcnRCdXR0b24oKSB7XG4gICAgJChTVEFSVF9CVVRUT05fSUQpLm9mZigpO1xufVxuXG5mdW5jdGlvbiBwYWludEF2YWlsYWJpbGl0eShuZXdSb3csIG5ld0NvbCwgc2hpcExlbmd0aCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGNsYXNzTmFtZSA9PT0gXCJhdmFpbGFibGVcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBgIyR7bmV3Um93fV8ke25ld0NvbCArIGl9YDtcbiAgICAgICAgICAgICQoaWQpLmFkZENsYXNzKFwiYXZhaWxhYmxlXCIpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChjbGFzc05hbWUgPT09IFwidW5hdmFpbGFibGVcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGggJiYgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gYCMke25ld1Jvd31fJHtuZXdDb2wgKyBpfWA7XG4gICAgICAgICAgICAkKGlkKS5hZGRDbGFzcyhcInVuYXZhaWxhYmxlXCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcmVtb3ZlQXZhaWxhYmlsaXR5KG5ld1JvdywgbmV3Q29sLCBzaGlwTGVuZ3RoLCBjbGFzc05hbWUpIHtcbiAgICBpZiAoY2xhc3NOYW1lID09PSBcImF2YWlsYWJsZVwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGAjJHtuZXdSb3d9XyR7bmV3Q29sICsgaX1gO1xuICAgICAgICAgICAgJChpZCkucmVtb3ZlQ2xhc3MoXCJhdmFpbGFibGVcIik7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNsYXNzTmFtZSA9PT0gXCJ1bmF2YWlsYWJsZVwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aCAmJiBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBgIyR7bmV3Um93fV8ke25ld0NvbCArIGl9YDtcbiAgICAgICAgICAgICQoaWQpLnJlbW92ZUNsYXNzKFwidW5hdmFpbGFibGVcIik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBhaW50QXNBdmFpbGFibGUobmV3Um93LCBuZXdDb2wsIHNoaXBMZW5ndGgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBpZCA9IGAjJHtuZXdSb3d9XyR7bmV3Q29sICsgaX1gO1xuICAgICAgICAkKGlkKS5hZGRDbGFzcyhcImF2YWlsYWJsZVwiKTtcbiAgICB9XG59XG5mdW5jdGlvbiByZW1vdmVQYWludEFzQXZhaWxhYmxlKG5ld1JvdywgbmV3Q29sLCBzaGlwTGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgaWQgPSBgIyR7bmV3Um93fV8ke25ld0NvbCArIGl9YDtcbiAgICAgICAgJChpZCkucmVtb3ZlQ2xhc3MoXCJhdmFpbGFibGVcIik7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIHNob3dQbGFjZW1lbnRTZWN0aW9uLFxuICAgIGhpZGVQbGFjZW1lbnRTZWN0aW9uLFxuICAgIHJlYWROYW1lSW5wdXQsXG4gICAgYWRkTGlzdGVuZXJGb3JTdGFydEJ1dHRvbixcbiAgICByZW1vdmVBbGxMaXN0ZW5lcnNGcm9tU3RhcnRCdXR0b24sXG4gICAgcGFpbnRBc0F2YWlsYWJsZSxcbiAgICByZW1vdmVQYWludEFzQXZhaWxhYmxlLFxuICAgIHBhaW50QXZhaWxhYmlsaXR5LFxuICAgIHJlbW92ZUF2YWlsYWJpbGl0eSxcbn07XG4iLCJjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGdhbWVib2FyZCwgZW5lbXlCb2FyZCwgbmFtZSA9IFwiU2VnaXNtdW5kb1wiKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMud2lucyA9IDA7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBnYW1lYm9hcmQ7XG4gICAgICAgIHRoaXMuZW5lbXlCb2FyZCA9IGVuZW15Qm9hcmQ7XG4gICAgfVxuXG4gICAgdGFrZVR1cm4ocm93LCBjb2wpIHtcbiAgICAgICAgbGV0IHJlcyA9IHRoaXMuZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcbiAgICAgICAgaWYgKHRoaXMuZW5lbXlCb2FyZC5kb2VzQm9hcmRIYXZlU2hpcHNMZWZ0KCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLndpbnMgKz0gMTtcbiAgICAgICAgICAgIHJldHVybiBcIndvblwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRha2VSYW5kb21UdXJuKCkge1xuICAgICAgICBsZXQgcmVzO1xuICAgICAgICBsZXQgcmFuZG9tUm93O1xuICAgICAgICBsZXQgcmFuZG9tQ29sO1xuICAgICAgICB3aGlsZSAocmVzICE9PSBcIm1pc3NlZFwiICYmIHJlcyAhPT0gXCJoaXRcIikge1xuICAgICAgICAgICAgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgcmFuZG9tQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgcmVzID0gdGhpcy5lbmVteUJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tUm93LCByYW5kb21Db2wpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVuZW15Qm9hcmQuZG9lc0JvYXJkSGF2ZVNoaXBzTGVmdCgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy53aW5zICs9IDE7XG4gICAgICAgICAgICByZXR1cm4gW1wid29uXCIsIHJhbmRvbVJvdywgcmFuZG9tQ29sXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbcmVzLCByYW5kb21Sb3csIHJhbmRvbUNvbF07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKHJvdywgY29sLCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKCFsZW5ndGggfHwgbGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImluY29ycmVjdCBsZW5ndGhcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvdyA9IHJvdztcbiAgICAgICAgdGhpcy5jb2wgPSBjb2w7XG4gICAgICAgIHRoaXMuaGl0VGltZXMgPSAwO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXRUaW1lcyArPSAxO1xuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGl0VGltZXMgPj0gdGhpcy5sZW5ndGg7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiZnVuY3Rpb24gZHJhd0JvYXJkKGFycmF5LCBkaXZJZCwgaGlkZGVuKSB7XG4gICAgJChkaXZJZCkuZW1wdHkoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG51bV9jZWxsID0gJChgPGRpdj5gKS5hZGRDbGFzcyhcIm51bV90b3BcIikuYWRkQ2xhc3MoXCJudW1fY2VsbFwiKTtcbiAgICAgICAgbnVtX2NlbGwuYXBwZW5kKCQoYDxwPmApLnRleHQoYCR7aX1gKSk7XG4gICAgICAgICQoZGl2SWQpLmFwcGVuZChudW1fY2VsbCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJheVtpXS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgbGV0IGNlbGwgPSAkKGA8ZGl2PmApLmF0dHIoXCJpZFwiLCBgJHtpfV8ke2p9YCk7XG4gICAgICAgICAgICBpZiAoYXJyYXlbaV1bal0gPT09IFwiVVwiIHx8IGhpZGRlbikge1xuICAgICAgICAgICAgICAgIGNlbGwuYWRkQ2xhc3MoXCJVXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhcnJheVtpXVtqXSA9PT0gXCJNXCIpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmFkZENsYXNzKFwiTVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJyYXlbaV1bal0/LmNlbGxIaXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmFkZENsYXNzKFwiaGl0XCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhcnJheVtpXVtqXT8uY2VsbEhpdCA9PT0gZmFsc2UgJiYgIWhpZGRlbikge1xuICAgICAgICAgICAgICAgIGNlbGwuYWRkQ2xhc3MoXCJub3RoaXRcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNlbGwuYWRkQ2xhc3MoXCJ0ZXN0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJChkaXZJZCkuYXBwZW5kKGNlbGwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZWRyYXdDZWxsKGJvYXJkSWQsIGNlbGxJZCwgY2VsbFN0YXR1cykge1xuICAgIGNvbnN0IGNlbGwgPSAkKGJvYXJkSWQpLmZpbmQoYCMke2NlbGxJZH1gKTtcbiAgICBpZiAoY2VsbFN0YXR1cyA9PT0gXCJ3b25cIiB8fCBjZWxsU3RhdHVzID09PSBcImhpdFwiKSB7XG4gICAgICAgIGNlbGwucmVtb3ZlQ2xhc3MoXCJub3RoaXRcIik7XG4gICAgICAgIGNlbGwuYWRkQ2xhc3MoXCJoaXRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNlbGxTdGF0dXMgPT09IFwibWlzc2VkXCIpIHtcbiAgICAgICAgY2VsbC5yZW1vdmVDbGFzcyhcIlVcIik7XG4gICAgICAgIGNlbGwuYWRkQ2xhc3MoXCJNXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZWFkQ2xpY2soZVRhcmdldCkge1xuICAgIGxldCBlbHRJZCA9IGVUYXJnZXQuaWQuc3BsaXQoXCJfXCIpO1xuICAgIGNvbnN0IHggPSBOdW1iZXIoZWx0SWRbMF0pO1xuICAgIGNvbnN0IHkgPSBOdW1iZXIoZWx0SWRbMV0pO1xuICAgIGlmIChOdW1iZXIuaXNOYU4oeCkgfHwgTnVtYmVyLmlzTmFOKHkpKSB7XG4gICAgICAgIHJldHVybiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfVxufVxuXG5leHBvcnQgeyBkcmF3Qm9hcmQsIHJlYWRDbGljaywgcmVkcmF3Q2VsbCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEZsb3cgZnJvbSBcIi4vRmxvdy5qc1wiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZS5qc1wiO1xuaW1wb3J0IFBsYWNlTWVudSBmcm9tIFwiLi9QbGFjZU1lbnUuanNcIjtcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xuXG5jb25zdCBmbG93ID0gbmV3IEZsb3coKTtcbiJdLCJuYW1lcyI6WyJQbGFjZU1lbnUiLCJHYW1lIiwiR2FtZVVJIiwiRmxvdyIsImNvbnN0cnVjdG9yIiwicG0iLCJtb3VudCIsImdhbWUiLCJkZWZhdWx0Q29vcmRzIiwiaGlkZUdhbWVTZWN0aW9uIiwiR2FtZWJvYXJkIiwiUGxheWVyIiwidWkiLCJmbG93SW5zdGFuY2UiLCJzaGlwc0Nvb3JkcyIsIm5hbWUxIiwibmFtZTIiLCJjb21wdXRlckNvb3JkcyIsInBsYXllcjEiLCJnYjEiLCJnYjIiLCJwbGF5ZXIyIiwidXBkYXRlZENvb3JkcyIsIm5hbWUiLCJib2FyZCIsImVuZW15Qm9hcmQiLCJjdXJyUGxheWVyTmFtZSIsImRyYXdCb2FyZCIsInNob3dHYW1lU2VjdGlvbiIsInVwZGF0ZU1lc3NhZ2UiLCJoaWRlUmVzdGFydEJ1dHRvbiIsImFkZEJvYXJkMkxpc3RlbmVyIiwiaGFuZGxlQm9hcmRDbGljayIsImJpbmQiLCJhZGRSZXN0YXJ0QnV0dG9uTGlzdGVuZXIiLCJyZW1vdW50IiwiYWRkR2l2ZVVwTGlzdGVuZXIiLCJ1bm1vdW50IiwidXBkYXRlUGxheWVyc0luZm8iLCJ3aW5zIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZSIsIm1ha2VUdXJuIiwidGFyZ2V0IiwiZVRhcmdldCIsInJvdyIsImNvbCIsInJlYWRDbGljayIsInJlcyIsInRha2VUdXJuIiwidmFsaWRBbnN3ZXJzIiwiaW5jbHVkZXMiLCJyZWRyYXdDZWxsIiwiaWQiLCJoYW5kbGVXaW4iLCJjdXJyUGxheWVyIiwic2V0VGltZW91dCIsInRha2VSYW5kb21UdXJuIiwiSUQiLCJJTlBVVF9NU0dfSUQiLCJJRF9HQjEiLCJJRF9HQjIiLCJSRVNUQVJUX0lEIiwiR0lWRVVQX0lEIiwiJCIsInNob3ciLCJoaWRlIiwiZm4iLCJvbiIsInJlbW92ZUJvYXJkMkxpc3RlbmVyIiwib2ZmIiwicmVtb3ZlUmVzdGFydEJ1dHRvbkxpc3RlbmVyIiwic2hvd1Jlc3RhcnRCdXR0b24iLCJyZW1vdmVHaXZlVXBMaXN0ZW5lciIsInRleHQiLCJwMW5hbWUiLCJwMXdpbnMiLCJwMm5hbWUiLCJwMndpbnMiLCJ3aW5uZXJOYW1lIiwiU2hpcCIsImJvYXJkU2l6ZSIsIkFycmF5IiwiaSIsImZpbGwiLCJzaGlwQ291bnRlciIsInNoaXBzIiwiZmlsbFNoaXBzIiwia2V5IiwiY29vcmRzIiwic3BsaXQiLCJsZW5ndGgiLCJwbGFjZVNoaXAiLCJOdW1iZXIiLCJzaGlwTGVuZ3RoIiwiRXJyb3IiLCJzaGlwIiwiY2VsbEhpdCIsInZhbGlkYXRlQXR0YWNrIiwidW5kZWZpbmVkIiwicmVjZWl2ZUF0dGFjayIsInZhbGlkIiwiaGl0IiwiZG9lc0JvYXJkSGF2ZVNoaXBzTGVmdCIsIk9iamVjdCIsImtleXMiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpc1N1bmsiLCJQbGFjZU1lbnVVSSIsImlzTW92aW5nIiwicmV0dXJuVXBkYXRlZFNoaXBEYXRhIiwiZ2IiLCJqIiwiYWRkRHJhZ2dhYmlsaXR5Rm9yU2hpcHMiLCJzaG93UGxhY2VtZW50U2VjdGlvbiIsImFkZExpc3RlbmVyRm9yU3RhcnRCdXR0b24iLCJzdGFydE5ld0dhbWUiLCJoaWRlUGxhY2VtZW50U2VjdGlvbiIsInBsYXllck5hbWUiLCJyZWFkTmFtZUlucHV0IiwiY2hpbGRyZW4iLCJmaWx0ZXIiLCJoYXNDbGFzcyIsImluaXRJZCIsInNoaXBJZCIsImluaXRpYWxDZWxsc0lkcyIsImNlbGxfaWQiLCJwdXNoIiwiYWRkQ2xhc3MiLCJhZGRNb3VzZUVudGVyIiwibWFwIiwiaW5kZXgiLCJjaGlsZCIsImV2IiwibmV3SWQiLCJuZXdSb3ciLCJuZXdDb2wiLCJjYW5QbGFjZSIsInBhaW50QXZhaWxhYmlsaXR5IiwicmVtb3ZlQXZhaWxhYmlsaXR5IiwicmVtb3ZlUGFpbnRBc0F2YWlsYWJsZSIsImNsZWFuUHJldmlvdXNDZWxscyIsImZpbGxOZXdDZWxscyIsInJlbW92ZU1vdXNlRW50ZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnNGcm9tU3RhcnRCdXR0b24iLCJmb3JFYWNoIiwiTkFNRV9JTlBVVF9JRCIsIlNUQVJUX0JVVFRPTl9JRCIsInZhbCIsImNsYXNzTmFtZSIsInJlbW92ZUNsYXNzIiwicGFpbnRBc0F2YWlsYWJsZSIsImdhbWVib2FyZCIsImFyZ3VtZW50cyIsInJhbmRvbVJvdyIsInJhbmRvbUNvbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImhpdFRpbWVzIiwiYXJyYXkiLCJkaXZJZCIsImhpZGRlbiIsImVtcHR5IiwibnVtX2NlbGwiLCJhcHBlbmQiLCJjZWxsIiwiYXR0ciIsImJvYXJkSWQiLCJjZWxsSWQiLCJjZWxsU3RhdHVzIiwiZmluZCIsImVsdElkIiwieCIsInkiLCJpc05hTiIsImZsb3ciXSwic291cmNlUm9vdCI6IiJ9