/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/ConsoleLogIt.js":
/*!********************************!*\
  !*** ./src/js/ConsoleLogIt.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConsoleLogIt)
/* harmony export */ });
function ConsoleLogIt(message) {
  console.log(message);
}

/***/ }),

/***/ "./src/js/TestJs.js":
/*!**************************!*\
  !*** ./src/js/TestJs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestJS)
/* harmony export */ });
function TestJS() {
  console.log('Loaded');
}

/***/ }),

/***/ "./src/js/getJSON.js":
/*!***************************!*\
  !*** ./src/js/getJSON.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getJSON)
/* harmony export */ });
function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function test() {
    var status = xhr.status;

    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };

  xhr.send();
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TestJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestJs */ "./src/js/TestJs.js");
/* harmony import */ var _ConsoleLogIt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleLogIt */ "./src/js/ConsoleLogIt.js");
/* harmony import */ var _getJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getJSON */ "./src/js/getJSON.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





function generateTableHead(table, data) {
  var thead = table.createTHead();
  var row = thead.insertRow();

  var _iterator = _createForOfIteratorHelper(data),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      var th = document.createElement('th');
      var text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function generateTable(table, data) {
  var _iterator2 = _createForOfIteratorHelper(data),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var element = _step2.value;
      var row = table.insertRow();
      console.log(element);
      var key = void 0;

      for (key in element) {
        var cell = row.insertCell();
        var text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

(0,_TestJs__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('', function (data) {
  console.log(data);
});
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('http://localhost:8000/api/v1/cities', function (err, records) {
  if (err !== null) {
    alert("Something went wrong: ".concat(err));
  } else {
    var table = document.querySelector('table');
    var data = Object.keys(records.data[0]);
    var dataRecords = records.data;
    generateTableHead(table, data);
    generateTable(table, dataRecords);
    /*
          let data = Object.keys(records.data[0]);
          generateTable(table, records.data); // generate the table first
          generateTableHead(table, data); // then the head
           */
  }
});
(0,_ConsoleLogIt__WEBPACK_IMPORTED_MODULE_1__.default)('this worked in the bundle');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL0NvbnNvbGVMb2dJdC5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL1Rlc3RKcy5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL2dldEpTT04uanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VudGl0bGVkMTMvLi9zcmMvanMvaW5kZXguanMiXSwibmFtZXMiOlsiQ29uc29sZUxvZ0l0IiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJUZXN0SlMiLCJnZXRKU09OIiwidXJsIiwiY2FsbGJhY2siLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJvbmxvYWQiLCJ0ZXN0Iiwic3RhdHVzIiwicmVzcG9uc2UiLCJzZW5kIiwiZ2VuZXJhdGVUYWJsZUhlYWQiLCJ0YWJsZSIsImRhdGEiLCJ0aGVhZCIsImNyZWF0ZVRIZWFkIiwicm93IiwiaW5zZXJ0Um93Iiwia2V5IiwidGgiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImdlbmVyYXRlVGFibGUiLCJlbGVtZW50IiwiY2VsbCIsImluc2VydENlbGwiLCJlcnIiLCJyZWNvcmRzIiwiYWxlcnQiLCJxdWVyeVNlbGVjdG9yIiwiT2JqZWN0Iiwia2V5cyIsImRhdGFSZWNvcmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFl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LEVBQVU7QUFDcEJqQixTQUFPLENBQUNDLEdBQVIsQ0FBWWdCLElBQVo7QUFDRCxDQUZNLENBQVA7QUFJQWQsaURBQU8sQ0FBQyxxQ0FBRCxFQUNMLFVBQUM4QixHQUFELEVBQU1DLE9BQU4sRUFBa0I7QUFDaEIsTUFBSUQsR0FBRyxLQUFLLElBQVosRUFBa0I7QUFDaEJFLFNBQUssaUNBQTBCRixHQUExQixFQUFMO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBTWpCLEtBQUssR0FBR1EsUUFBUSxDQUFDWSxhQUFULENBQXVCLE9BQXZCLENBQWQ7QUFDQSxRQUFNbkIsSUFBSSxHQUFHb0IsTUFBTSxDQUFDQyxJQUFQLENBQWFKLE9BQU8sQ0FBQ2pCLElBQVIsQ0FBYSxDQUFiLENBQWIsQ0FBYjtBQUNBLFFBQU1zQixXQUFXLEdBQUdMLE9BQU8sQ0FBQ2pCLElBQTVCO0FBRUFGLHFCQUFpQixDQUFDQyxLQUFELEVBQVFDLElBQVIsQ0FBakI7QUFDQVksaUJBQWEsQ0FBQ2IsS0FBRCxFQUFRdUIsV0FBUixDQUFiO0FBQ0E7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNLO0FBQ0YsQ0FqQkksQ0FBUDtBQWtCQXpDLHNEQUFZLENBQUMsMkJBQUQsQ0FBWixDIiwiZmlsZSI6ImpzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnNvbGVMb2dJdChtZXNzYWdlKSB7XG4gIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdEpTKCkge1xuICBjb25zb2xlLmxvZygnTG9hZGVkJyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRKU09OKHVybCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICB4aHIub25sb2FkID0gZnVuY3Rpb24gdGVzdCgpIHtcbiAgICBjb25zdCB7IHN0YXR1cyB9ID0geGhyO1xuICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xuICAgICAgY2FsbGJhY2sobnVsbCwgeGhyLnJlc3BvbnNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soc3RhdHVzLCB4aHIucmVzcG9uc2UpO1xuICAgIH1cbiAgfTtcbiAgeGhyLnNlbmQoKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRlc3RKUyBmcm9tICcuL1Rlc3RKcyc7XG5pbXBvcnQgQ29uc29sZUxvZ0l0IGZyb20gJy4vQ29uc29sZUxvZ0l0JztcbmltcG9ydCBnZXRKU09OIGZyb20gJy4vZ2V0SlNPTic7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKSB7XG4gIGNvbnN0IHRoZWFkID0gdGFibGUuY3JlYXRlVEhlYWQoKTtcbiAgY29uc3Qgcm93ID0gdGhlYWQuaW5zZXJ0Um93KCk7XG4gIGZvciAoY29uc3Qga2V5IG9mIGRhdGEpIHtcbiAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGtleSk7XG4gICAgdGguYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgcm93LmFwcGVuZENoaWxkKHRoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRhYmxlKHRhYmxlLCBkYXRhKSB7XG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBkYXRhKSB7XG4gICAgY29uc3Qgcm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XG4gICAgY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgbGV0IGtleTtcbiAgICBmb3IgKGtleSBpbiBlbGVtZW50KSB7XG4gICAgICBjb25zdCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcbiAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlbGVtZW50W2tleV0pO1xuICAgICAgY2VsbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxuVGVzdEpTKCk7XG5nZXRKU09OKCcnLCAoZGF0YSkgPT4ge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbn0pO1xuXG5nZXRKU09OKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3YxL2NpdGllcycsXG4gIChlcnIsIHJlY29yZHMpID0+IHtcbiAgICBpZiAoZXJyICE9PSBudWxsKSB7XG4gICAgICBhbGVydChgU29tZXRoaW5nIHdlbnQgd3Jvbmc6ICR7ZXJyfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XG4gICAgICBjb25zdCBkYXRhID0gT2JqZWN0LmtleXMoKHJlY29yZHMuZGF0YVswXSkpO1xuICAgICAgY29uc3QgZGF0YVJlY29yZHMgPSByZWNvcmRzLmRhdGE7XG5cbiAgICAgIGdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKTtcbiAgICAgIGdlbmVyYXRlVGFibGUodGFibGUsIGRhdGFSZWNvcmRzKTtcbiAgICAgIC8qXG4gICAgICAgICAgICBsZXQgZGF0YSA9IE9iamVjdC5rZXlzKHJlY29yZHMuZGF0YVswXSk7XG4gICAgICAgICAgICBnZW5lcmF0ZVRhYmxlKHRhYmxlLCByZWNvcmRzLmRhdGEpOyAvLyBnZW5lcmF0ZSB0aGUgdGFibGUgZmlyc3RcbiAgICAgICAgICAgIGdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKTsgLy8gdGhlbiB0aGUgaGVhZFxuICAgICAgICAgICAgICovXG4gICAgfVxuICB9KTtcbkNvbnNvbGVMb2dJdCgndGhpcyB3b3JrZWQgaW4gdGhlIGJ1bmRsZScpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==