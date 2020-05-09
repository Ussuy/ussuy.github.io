/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY3NzL3N0eWxlcy5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2Nzcz9jNzkyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/css/styles.scss\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var css_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css/styles.scss */ \"./src/css/styles.scss\");\n/* harmony import */ var css_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_canvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js/canvas.js */ \"./src/js/canvas.js\");\n/* harmony import */ var js_listeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js/listeners.js */ \"./src/js/listeners.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  Object(js_canvas_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(js_listeners_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Nzcy9zdHlsZXMuc2NzcydcclxuaW1wb3J0IGNhbnZhcyBmcm9tICdqcy9jYW52YXMuanMnXHJcbmltcG9ydCBsaXN0ZW5lcnMgZnJvbSAnanMvbGlzdGVuZXJzLmpzJ1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBjYW52YXMoKVxyXG4gIGxpc3RlbmVycygpXHJcbn0pIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar canvas = function canvas() {\n  (function () {\n    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {\n      window.setTimeout(callback, 1000 / 60);\n    };\n\n    window.requestAnimationFrame = requestAnimationFrame;\n  })(); // Terrain stuff.\n\n\n  var background = document.getElementById(\"bgCanvas\"),\n      bgCtx = background.getContext(\"2d\"),\n      width = window.innerWidth,\n      height = document.body.offsetHeight;\n  height < 400 ? height = 400 : height;\n  background.width = width;\n  background.height = height;\n\n  function Terrain(options) {\n    options = options || {};\n    this.terrain = document.createElement(\"canvas\");\n    this.terCtx = this.terrain.getContext(\"2d\");\n    this.scrollDelay = options.scrollDelay || 90;\n    this.lastScroll = new Date().getTime();\n    this.terrain.width = width;\n    this.terrain.height = height;\n    this.fillStyle = options.fillStyle || \"#191D4C\";\n    this.mHeight = options.mHeight || height; // generate\n\n    this.points = [];\n    var displacement = options.displacement || 140,\n        power = Math.pow(2, Math.ceil(Math.log(width) / Math.log(2))); // set the start height and end height for the terrain\n\n    this.points[0] = this.mHeight; //(this.mHeight - (Math.random() * this.mHeight / 2)) - displacement;\n\n    this.points[power] = this.points[0]; // create the rest of the points\n\n    for (var i = 1; i < power; i *= 2) {\n      for (var j = power / i / 2; j < power; j += power / i) {\n        this.points[j] = (this.points[j - power / i / 2] + this.points[j + power / i / 2]) / 2 + Math.floor(Math.random() * -displacement + displacement);\n      }\n\n      displacement *= 0.6;\n    }\n\n    document.body.appendChild(this.terrain);\n  }\n\n  Terrain.prototype.update = function () {\n    // draw the terrain\n    this.terCtx.clearRect(0, 0, width, height);\n    this.terCtx.fillStyle = this.fillStyle;\n\n    if (new Date().getTime() > this.lastScroll + this.scrollDelay) {\n      this.lastScroll = new Date().getTime();\n      this.points.push(this.points.shift());\n    }\n\n    this.terCtx.beginPath();\n\n    for (var i = 0; i <= width; i++) {\n      if (i === 0) {\n        this.terCtx.moveTo(0, this.points[0]);\n      } else if (this.points[i] !== undefined) {\n        this.terCtx.lineTo(i, this.points[i]);\n      }\n    }\n\n    this.terCtx.lineTo(width, this.terrain.height);\n    this.terCtx.lineTo(0, this.terrain.height);\n    this.terCtx.lineTo(0, this.points[0]);\n    this.terCtx.fill();\n  }; // Second canvas used for the stars\n\n\n  bgCtx.fillStyle = '#05004c';\n  bgCtx.fillRect(0, 0, width, height); // stars\n\n  function Star(options) {\n    this.size = Math.random() * 2;\n    this.speed = Math.random() * .05;\n    this.x = options.x;\n    this.y = options.y;\n  }\n\n  Star.prototype.reset = function () {\n    this.size = Math.random() * 2;\n    this.speed = Math.random() * .05;\n    this.x = width;\n    this.y = Math.random() * height;\n  };\n\n  Star.prototype.update = function () {\n    this.x -= this.speed;\n\n    if (this.x < 0) {\n      this.reset();\n    } else {\n      bgCtx.fillRect(this.x, this.y, this.size, this.size);\n    }\n  };\n\n  function ShootingStar() {\n    this.reset();\n  }\n\n  ShootingStar.prototype.reset = function () {\n    this.x = Math.random() * width;\n    this.y = 0;\n    this.len = Math.random() * 80 + 10;\n    this.speed = Math.random() * 10 + 6;\n    this.size = Math.random() * 1 + 0.1; // this is used so the shooting stars arent constant\n\n    this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;\n    this.active = false;\n  };\n\n  ShootingStar.prototype.update = function () {\n    if (this.active) {\n      this.x -= this.speed;\n      this.y += this.speed;\n\n      if (this.x < 0 || this.y >= height) {\n        this.reset();\n      } else {\n        bgCtx.lineWidth = this.size;\n        bgCtx.beginPath();\n        bgCtx.moveTo(this.x, this.y);\n        bgCtx.lineTo(this.x + this.len, this.y - this.len);\n        bgCtx.stroke();\n      }\n    } else {\n      if (this.waitTime < new Date().getTime()) {\n        this.active = true;\n      }\n    }\n  };\n\n  var entities = []; // init the stars\n\n  for (var i = 0; i < height; i++) {\n    entities.push(new Star({\n      x: Math.random() * width,\n      y: Math.random() * height\n    }));\n  } // Add 2 shooting stars that just cycle.\n\n\n  entities.push(new ShootingStar());\n  entities.push(new ShootingStar());\n  entities.push(new Terrain({\n    mHeight: height / 2 - 120\n  }));\n  entities.push(new Terrain({\n    displacement: 120,\n    scrollDelay: 50,\n    fillStyle: \"rgb(17,20,40)\",\n    mHeight: height / 2 - 60\n  }));\n  entities.push(new Terrain({\n    displacement: 100,\n    scrollDelay: 20,\n    fillStyle: \"rgb(10,10,5)\",\n    mHeight: height / 2\n  })); //animate background\n\n  function animate() {\n    bgCtx.fillStyle = '#110E19';\n    bgCtx.fillRect(0, 0, width, height);\n    bgCtx.fillStyle = '#ffffff';\n    bgCtx.strokeStyle = '#ffffff';\n    var entLen = entities.length;\n\n    while (entLen--) {\n      entities[entLen].update();\n    }\n\n    requestAnimationFrame(animate);\n  }\n\n  animate();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (canvas);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY2FudmFzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NhbnZhcy5qcz8xNzYwIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBjYW52YXMgPSAoKSA9PiB7XHJcblxyXG4gIChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcclxuICAgICAgICB9O1xyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuICB9KSgpO1xyXG5cclxuICAvLyBUZXJyYWluIHN0dWZmLlxyXG4gIHZhciBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZ0NhbnZhc1wiKSxcclxuICBiZ0N0eCA9IGJhY2tncm91bmQuZ2V0Q29udGV4dChcIjJkXCIpLFxyXG4gIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGgsXHJcbiAgaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gIChoZWlnaHQgPCA0MDApID8gaGVpZ2h0ID0gNDAwIDogaGVpZ2h0O1xyXG5cclxuICBiYWNrZ3JvdW5kLndpZHRoID0gd2lkdGg7XHJcbiAgYmFja2dyb3VuZC5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gIGZ1bmN0aW9uIFRlcnJhaW4ob3B0aW9ucykge1xyXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gIHRoaXMudGVycmFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgdGhpcy50ZXJDdHggPSB0aGlzLnRlcnJhaW4uZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gIHRoaXMuc2Nyb2xsRGVsYXkgPSBvcHRpb25zLnNjcm9sbERlbGF5IHx8IDkwO1xyXG4gIHRoaXMubGFzdFNjcm9sbCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICB0aGlzLnRlcnJhaW4ud2lkdGggPSB3aWR0aDtcclxuICB0aGlzLnRlcnJhaW4uaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gIHRoaXMuZmlsbFN0eWxlID0gb3B0aW9ucy5maWxsU3R5bGUgfHwgXCIjMTkxRDRDXCI7XHJcbiAgdGhpcy5tSGVpZ2h0ID0gb3B0aW9ucy5tSGVpZ2h0IHx8IGhlaWdodDtcclxuXHJcbiAgLy8gZ2VuZXJhdGVcclxuICB0aGlzLnBvaW50cyA9IFtdO1xyXG5cclxuICB2YXIgZGlzcGxhY2VtZW50ID0gb3B0aW9ucy5kaXNwbGFjZW1lbnQgfHwgMTQwLFxyXG4gICAgICBwb3dlciA9IE1hdGgucG93KDIsIE1hdGguY2VpbChNYXRoLmxvZyh3aWR0aCkgLyAoTWF0aC5sb2coMikpKSk7XHJcblxyXG4gIC8vIHNldCB0aGUgc3RhcnQgaGVpZ2h0IGFuZCBlbmQgaGVpZ2h0IGZvciB0aGUgdGVycmFpblxyXG4gIHRoaXMucG9pbnRzWzBdID0gdGhpcy5tSGVpZ2h0Oy8vKHRoaXMubUhlaWdodCAtIChNYXRoLnJhbmRvbSgpICogdGhpcy5tSGVpZ2h0IC8gMikpIC0gZGlzcGxhY2VtZW50O1xyXG4gIHRoaXMucG9pbnRzW3Bvd2VyXSA9IHRoaXMucG9pbnRzWzBdO1xyXG5cclxuICAvLyBjcmVhdGUgdGhlIHJlc3Qgb2YgdGhlIHBvaW50c1xyXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgcG93ZXI7IGkgKj0gMikge1xyXG4gICAgICBmb3IgKHZhciBqID0gKHBvd2VyIC8gaSkgLyAyOyBqIDwgcG93ZXI7IGogKz0gcG93ZXIgLyBpKSB7XHJcbiAgICAgICAgICB0aGlzLnBvaW50c1tqXSA9ICgodGhpcy5wb2ludHNbaiAtIChwb3dlciAvIGkpIC8gMl0gKyB0aGlzLnBvaW50c1tqICsgKHBvd2VyIC8gaSkgLyAyXSkgLyAyKSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIC1kaXNwbGFjZW1lbnQgKyBkaXNwbGFjZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGRpc3BsYWNlbWVudCAqPSAwLjY7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMudGVycmFpbik7XHJcbiAgfVxyXG5cclxuICBUZXJyYWluLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gZHJhdyB0aGUgdGVycmFpblxyXG4gIHRoaXMudGVyQ3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICB0aGlzLnRlckN0eC5maWxsU3R5bGUgPSB0aGlzLmZpbGxTdHlsZTtcclxuXHJcbiAgaWYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpID4gdGhpcy5sYXN0U2Nyb2xsICsgdGhpcy5zY3JvbGxEZWxheSkge1xyXG4gICAgICB0aGlzLmxhc3RTY3JvbGwgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgdGhpcy5wb2ludHMucHVzaCh0aGlzLnBvaW50cy5zaGlmdCgpKTtcclxuICB9XHJcblxyXG4gIHRoaXMudGVyQ3R4LmJlZ2luUGF0aCgpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDw9IHdpZHRoOyBpKyspIHtcclxuICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgIHRoaXMudGVyQ3R4Lm1vdmVUbygwLCB0aGlzLnBvaW50c1swXSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wb2ludHNbaV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdGhpcy50ZXJDdHgubGluZVRvKGksIHRoaXMucG9pbnRzW2ldKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgdGhpcy50ZXJDdHgubGluZVRvKHdpZHRoLCB0aGlzLnRlcnJhaW4uaGVpZ2h0KTtcclxuICB0aGlzLnRlckN0eC5saW5lVG8oMCwgdGhpcy50ZXJyYWluLmhlaWdodCk7XHJcbiAgdGhpcy50ZXJDdHgubGluZVRvKDAsIHRoaXMucG9pbnRzWzBdKTtcclxuICB0aGlzLnRlckN0eC5maWxsKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gU2Vjb25kIGNhbnZhcyB1c2VkIGZvciB0aGUgc3RhcnNcclxuICBiZ0N0eC5maWxsU3R5bGUgPSAnIzA1MDA0Yyc7XHJcbiAgYmdDdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gIC8vIHN0YXJzXHJcbiAgZnVuY3Rpb24gU3RhcihvcHRpb25zKSB7XHJcbiAgdGhpcy5zaXplID0gTWF0aC5yYW5kb20oKSAqIDI7XHJcbiAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAuMDU7XHJcbiAgdGhpcy54ID0gb3B0aW9ucy54O1xyXG4gIHRoaXMueSA9IG9wdGlvbnMueTtcclxuICB9XHJcblxyXG4gIFN0YXIucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHRoaXMuc2l6ZSA9IE1hdGgucmFuZG9tKCkgKiAyO1xyXG4gIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogLjA1O1xyXG4gIHRoaXMueCA9IHdpZHRoO1xyXG4gIHRoaXMueSA9IE1hdGgucmFuZG9tKCkgKiBoZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBTdGFyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdGhpcy54IC09IHRoaXMuc3BlZWQ7XHJcbiAgaWYgKHRoaXMueCA8IDApIHtcclxuICAgICAgdGhpcy5yZXNldCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAgIGJnQ3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLnNpemUsIHRoaXMuc2l6ZSk7XHJcbiAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gU2hvb3RpbmdTdGFyKCkge1xyXG4gIHRoaXMucmVzZXQoKTtcclxuICB9XHJcblxyXG4gIFNob290aW5nU3Rhci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIHdpZHRoO1xyXG4gIHRoaXMueSA9IDA7XHJcbiAgdGhpcy5sZW4gPSAoTWF0aC5yYW5kb20oKSAqIDgwKSArIDEwO1xyXG4gIHRoaXMuc3BlZWQgPSAoTWF0aC5yYW5kb20oKSAqIDEwKSArIDY7XHJcbiAgdGhpcy5zaXplID0gKE1hdGgucmFuZG9tKCkgKiAxKSArIDAuMTtcclxuICAvLyB0aGlzIGlzIHVzZWQgc28gdGhlIHNob290aW5nIHN0YXJzIGFyZW50IGNvbnN0YW50XHJcbiAgdGhpcy53YWl0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKE1hdGgucmFuZG9tKCkgKiAzMDAwKSArIDUwMDtcclxuICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgU2hvb3RpbmdTdGFyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkO1xyXG4gICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZDtcclxuICAgICAgaWYgKHRoaXMueCA8IDAgfHwgdGhpcy55ID49IGhlaWdodCkge1xyXG4gICAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYmdDdHgubGluZVdpZHRoID0gdGhpcy5zaXplO1xyXG4gICAgICAgICAgYmdDdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICBiZ0N0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xyXG4gICAgICAgICAgYmdDdHgubGluZVRvKHRoaXMueCArIHRoaXMubGVuLCB0aGlzLnkgLSB0aGlzLmxlbik7XHJcbiAgICAgICAgICBiZ0N0eC5zdHJva2UoKTtcclxuICAgICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLndhaXRUaW1lIDwgbmV3IERhdGUoKS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gIH1cclxuICB9XHJcblxyXG4gIHZhciBlbnRpdGllcyA9IFtdO1xyXG5cclxuICAvLyBpbml0IHRoZSBzdGFyc1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHtcclxuICBlbnRpdGllcy5wdXNoKG5ldyBTdGFyKHtcclxuICAgICAgeDogTWF0aC5yYW5kb20oKSAqIHdpZHRoLFxyXG4gICAgICB5OiBNYXRoLnJhbmRvbSgpICogaGVpZ2h0XHJcbiAgfSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gQWRkIDIgc2hvb3Rpbmcgc3RhcnMgdGhhdCBqdXN0IGN5Y2xlLlxyXG4gIGVudGl0aWVzLnB1c2gobmV3IFNob290aW5nU3RhcigpKTtcclxuICBlbnRpdGllcy5wdXNoKG5ldyBTaG9vdGluZ1N0YXIoKSk7XHJcbiAgZW50aXRpZXMucHVzaChuZXcgVGVycmFpbih7bUhlaWdodCA6IChoZWlnaHQvMiktMTIwfSkpO1xyXG4gIGVudGl0aWVzLnB1c2gobmV3IFRlcnJhaW4oe2Rpc3BsYWNlbWVudCA6IDEyMCwgc2Nyb2xsRGVsYXkgOiA1MCwgZmlsbFN0eWxlIDogXCJyZ2IoMTcsMjAsNDApXCIsIG1IZWlnaHQgOiAoaGVpZ2h0LzIpLTYwfSkpO1xyXG4gIGVudGl0aWVzLnB1c2gobmV3IFRlcnJhaW4oe2Rpc3BsYWNlbWVudCA6IDEwMCwgc2Nyb2xsRGVsYXkgOiAyMCwgZmlsbFN0eWxlIDogXCJyZ2IoMTAsMTAsNSlcIiwgbUhlaWdodCA6IGhlaWdodC8yfSkpO1xyXG5cclxuICAvL2FuaW1hdGUgYmFja2dyb3VuZFxyXG4gIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XHJcbiAgYmdDdHguZmlsbFN0eWxlID0gJyMxMTBFMTknO1xyXG4gIGJnQ3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gIGJnQ3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJztcclxuICBiZ0N0eC5zdHJva2VTdHlsZSA9ICcjZmZmZmZmJztcclxuXHJcbiAgdmFyIGVudExlbiA9IGVudGl0aWVzLmxlbmd0aDtcclxuXHJcbiAgd2hpbGUgKGVudExlbi0tKSB7XHJcbiAgICAgIGVudGl0aWVzW2VudExlbl0udXBkYXRlKCk7XHJcbiAgfVxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICB9XHJcbiAgYW5pbWF0ZSgpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FudmFzXHJcblxyXG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/canvas.js\n");

/***/ }),

/***/ "./src/js/listeners.js":
/*!*****************************!*\
  !*** ./src/js/listeners.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  // quando a página for carregada, mostrar primeiro item do array\n  setTimeout(function () {\n    var HTMLElements = getHTMLElements();\n    turnFirstElementActive(HTMLElements);\n  }, 2000); // pegar elementos e colocar em um Array \n\n  function getHTMLElements() {\n    var getElements = function getElements(element) {\n      console.log('element: ', element);\n      return element.innerText !== undefined;\n    };\n\n    return Object.values(document.getElementById('main').childNodes).filter(getElements);\n  } // colocar classe active no primeiro element\n\n\n  function turnFirstElementActive(elements) {\n    var _elements = _slicedToArray(elements, 1),\n        firstHTMLElement = _elements[0];\n\n    return firstHTMLElement.className += ' active';\n  } // quando o usuario rolar a pagina chamar funcao\n\n\n  window.addEventListener('wheel', wheeling, false);\n\n  function wheeling() {} // tirar active do elemento atual\n\n\n  var counter = 0;\n\n  function removeActiveFromHTMLElement(elements) {\n    var activeElement = elements[counter];\n    var removedActiveClassName = activeElement.className.replace('active', '');\n    return activeElement.className = removedActiveClassName;\n  } // colocar active no proximo element\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbGlzdGVuZXJzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpc3RlbmVycy5qcz85MDgxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBcclxuXHJcbi8vIHF1YW5kbyBhIHDDoWdpbmEgZm9yIGNhcnJlZ2FkYSwgbW9zdHJhciBwcmltZWlybyBpdGVtIGRvIGFycmF5XHJcbnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gIGNvbnN0IEhUTUxFbGVtZW50cyA9IGdldEhUTUxFbGVtZW50cygpXHJcbiAgdHVybkZpcnN0RWxlbWVudEFjdGl2ZShIVE1MRWxlbWVudHMpXHJcbn0sIDIwMDApO1xyXG5cclxuLy8gcGVnYXIgZWxlbWVudG9zIGUgY29sb2NhciBlbSB1bSBBcnJheSBcclxuXHJcbiAgZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRzKCkge1xyXG5cclxuICAgIGNvbnN0IGdldEVsZW1lbnRzID0gKGVsZW1lbnQpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2VsZW1lbnQ6ICcsIGVsZW1lbnQpXHJcbiAgICAgIHJldHVybiBlbGVtZW50LmlubmVyVGV4dCAhPT0gdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKVxyXG4gICAgLmNoaWxkTm9kZXMpXHJcbiAgICAuZmlsdGVyKGdldEVsZW1lbnRzKVxyXG4gIH1cclxuXHJcbi8vIGNvbG9jYXIgY2xhc3NlIGFjdGl2ZSBubyBwcmltZWlybyBlbGVtZW50XHJcblxyXG4gIGZ1bmN0aW9uIHR1cm5GaXJzdEVsZW1lbnRBY3RpdmUoZWxlbWVudHMpIHtcclxuICAgIGNvbnN0IFsgZmlyc3RIVE1MRWxlbWVudCBdID0gZWxlbWVudHNcclxuICAgIHJldHVybiBmaXJzdEhUTUxFbGVtZW50LmNsYXNzTmFtZSArPSAnIGFjdGl2ZSdcclxuICB9XHJcblxyXG5cclxuLy8gcXVhbmRvIG8gdXN1YXJpbyByb2xhciBhIHBhZ2luYSBjaGFtYXIgZnVuY2FvXHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHdoZWVsaW5nLCBmYWxzZSlcclxuXHJcbiAgZnVuY3Rpb24gd2hlZWxpbmcoKSB7XHJcbiAgfVxyXG5cclxuLy8gdGlyYXIgYWN0aXZlIGRvIGVsZW1lbnRvIGF0dWFsXHJcbiAgXHJcbiAgbGV0IGNvdW50ZXIgPSAwXHJcbiAgZnVuY3Rpb24gcmVtb3ZlQWN0aXZlRnJvbUhUTUxFbGVtZW50KGVsZW1lbnRzKSB7XHJcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gZWxlbWVudHNbY291bnRlcl1cclxuICAgIGNvbnN0IHJlbW92ZWRBY3RpdmVDbGFzc05hbWUgPSBhY3RpdmVFbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKCdhY3RpdmUnLCAnJylcclxuICAgIHJldHVybiBhY3RpdmVFbGVtZW50LmNsYXNzTmFtZSA9IHJlbW92ZWRBY3RpdmVDbGFzc05hbWVcclxuICB9XHJcblxyXG4vLyBjb2xvY2FyIGFjdGl2ZSBubyBwcm94aW1vIGVsZW1lbnRcclxuXHJcblxyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/listeners.js\n");

/***/ })

/******/ });