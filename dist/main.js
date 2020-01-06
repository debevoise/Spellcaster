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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/grid.js":
/*!*********************!*\
  !*** ./src/grid.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Grid; });
/* harmony import */ var _spell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spell */ "./src/spell.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Grid =
/*#__PURE__*/
function () {
  function Grid(root, input) {
    _classCallCheck(this, Grid);

    this.root = root;
    this.input = input;
    this.CELLSIZE = 30;
    this.cursorPos = [0, 0];
    this.height = Math.floor(root.offsetHeight / this.CELLSIZE);
    this.width = Math.floor(root.offsetWidth / this.CELLSIZE);
    this.spells = [];
    this.currentSpell = new _spell__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    this.framerate = 200;
    this.grid = this.populate();
    this.receiveInput = this.receiveInput.bind(this);
    document.addEventListener("keydown", this.receiveInput);
  }

  _createClass(Grid, [{
    key: "populate",
    value: function populate() {
      var grid = [];

      for (var i = 0; i < this.height; i++) {
        var rowArr = [];
        var row = document.createElement('ul');
        row.className = 'row';

        for (var j = 0; j < this.width; j++) {
          var cell = document.createElement('div');
          cell.className = 'cell';
          rowArr.push(cell);
          row.appendChild(cell);
        }

        this.root.appendChild(row);
        grid.push(rowArr);
      }

      return grid;
    }
  }, {
    key: "nextSpell",
    value: function nextSpell() {
      // if (this.currentSpell.appliedKeywords.length > 0) {
      this.spells.push(this.currentSpell); // }

      this.currentSpell = new _spell__WEBPACK_IMPORTED_MODULE_0__["default"](grid);
    }
  }, {
    key: "getElement",
    value: function getElement(coordinates) {
      var x = coordinates[0] % this.height;
      var y = coordinates[1] % this.width;
      if (x < 0) x += this.height;
      if (y < 0) y += this.width;
      return this.grid[x][y];
    }
  }, {
    key: "randomPosition",
    value: function randomPosition() {
      var x = Math.floor(Math.random() * this.height);
      var y = Math.floor(Math.random() * this.width);
      return [x, y];
    }
  }, {
    key: "receiveInput",
    value: function receiveInput(e) {
      // e.preventDefault();
      if (e.keyCode === 13 || e.keyCode === 32) {
        this.nextSpell();
      } else if (e.keyCode >= 65 && e.keyCode < 91) {
        this.currentSpell.receive(e.key);
        console.log(this.currentSpell.storedText, this.currentSpell.activeText);
      }
    }
  }, {
    key: "frame",
    value: function frame() {
      this.currentSpell.move();
      this.spells.forEach(function (spell) {
        return spell.move();
      });
    }
  }, {
    key: "animate",
    value: function animate(rate) {
      var _this = this;

      this.framerate = rate || this.framerate;
      this.timeout = setTimeout(function () {
        _this.frame();

        _this.animate();
      }, this.framerate);
    }
  }]);

  return Grid;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "./src/grid.js");
/* harmony import */ var _spell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spell */ "./src/spell.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_2__);



document.addEventListener('DOMContentLoaded', function () {
  var root = document.getElementById('root');
  var input = document.getElementById('input');
  window.Spell = _spell__WEBPACK_IMPORTED_MODULE_1__["default"];
  var grid = new _grid__WEBPACK_IMPORTED_MODULE_0__["default"](root, input);
  grid.animate();
  window.grid = grid;
});

/***/ }),

/***/ "./src/keywords.js":
/*!*************************!*\
  !*** ./src/keywords.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var keywords = {
  up: {
    type: 'move',
    action: [-1, 0]
  },
  down: {
    type: 'move',
    action: [1, 0]
  },
  left: {
    type: 'move',
    action: [0, -1]
  },
  right: {
    type: 'move',
    action: [0, 1]
  },
  all: {
    type: 'all'
  },
  clear: {
    type: 'clear'
  },
  comic: {
    type: 'font',
    action: 'comic'
  },
  sans: {
    type: 'font',
    action: 'sans'
  },
  fun: {
    type: 'font',
    action: 'fun'
  },
  mono: {
    type: 'font',
    action: 'mono'
  },
  serif: {
    type: 'font',
    action: 'serif'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (keywords);

/***/ }),

/***/ "./src/spell.js":
/*!**********************!*\
  !*** ./src/spell.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Spell; });
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "./src/grid.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _keywords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keywords */ "./src/keywords.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Spell =
/*#__PURE__*/
function () {
  function Spell(grid) {
    _classCallCheck(this, Spell);

    this.perFrameKeywords = [];
    this.appliedKeywords = [];
    this.grid = grid;
    this.currentPos = this.grid.randomPosition();
    this.storedText = '';
    this.activeText = '';
    this.keywordIndex = _keywords__WEBPACK_IMPORTED_MODULE_2__["default"];
    this.moves = [0, 0];
    this.color = 'red';
    this.font = 'mono';
    this.size = 15;
    this.renderedElements = [];
  }

  _createClass(Spell, [{
    key: "receive",
    value: function receive(input) {
      this.activeText += input.toLowerCase();
      this.extractKeywords();
      this.render();
    }
  }, {
    key: "cast",
    value: function cast(keywords) {
      var _this = this;

      if (!(keywords instanceof Array)) keywords = [keywords];
      var notStored = ['all', 'clear'];
      keywords.forEach(function (kw) {
        _this.applyKeyword(kw);

        if (!notStored.includes(kw)) _this.appliedKeywords.push(kw);
      });
    }
  }, {
    key: "applyKeyword",
    value: function applyKeyword(kw) {
      var _this2 = this;

      var _this$keywordIndex$kw = this.keywordIndex[kw],
          action = _this$keywordIndex$kw.action,
          type = _this$keywordIndex$kw.type;

      switch (type) {
        case 'move':
          this.moves = _util__WEBPACK_IMPORTED_MODULE_1__["addCoordinates"](this.moves, action);
          break;

        case 'color':
          this.color = action;
          break;

        case 'font':
          this.font = action;
          break;

        case 'all':
          this.grid.spells.forEach(function (spell) {
            return spell.cast(_this2.appliedKeywords);
          });
          break;

        default:
          break;
      }

      this.render();
    }
  }, {
    key: "extractKeywords",
    value: function extractKeywords() {
      if (!this.containsKeyword(this.activeText)) return;

      for (var i = 2; i <= this.activeText.length; i++) {
        var substr = this.activeText.slice(0, i);
        var kw = this.containsKeyword(substr);

        if (kw) {
          this.cast(kw);
          this.storedText += substr;
          this.activeText = this.activeText.slice(i);
          this.extractKeywords();
        }
      }
    }
  }, {
    key: "containsKeyword",
    value: function containsKeyword(str) {
      var kws = Object.keys(this.keywordIndex);

      for (var _i = 0, _kws = kws; _i < _kws.length; _i++) {
        var kw = _kws[_i];
        if (str.includes(kw)) return kw;
      }

      return false;
    }
  }, {
    key: "clearPreviousRender",
    value: function clearPreviousRender() {
      this.renderedElements.forEach(function (ele) {
        return ele.remove();
      });
    }
  }, {
    key: "move",
    value: function move() {
      this.currentPos = _util__WEBPACK_IMPORTED_MODULE_1__["addCoordinates"](this.currentPos, this.moves);
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.clearPreviousRender();
      var text = this.storedText + this.activeText;
      var pos = this.currentPos;
      var delta;

      if (this.moves[0] === 0 && this.moves[1] === 0) {
        delta = [0, 1];
      } else {
        var x = Math.sign(this.moves[0]);
        var y = Math.sign(this.moves[1]);
        delta = [x, y];
      }

      for (var i = 0; i < text.length; i++) {
        var letter = text[i];
        var span = document.createElement('span');
        span.textContent = letter;
        span.classList.add(this.size, this.color, this.font, 'active');
        var element = this.grid.getElement(pos);
        _util__WEBPACK_IMPORTED_MODULE_1__["replaceChildren"](element, span);
        this.renderedElements.push(span);
        pos = _util__WEBPACK_IMPORTED_MODULE_1__["addCoordinates"](pos, delta);
      }
    }
  }]);

  return Spell;
}();



/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: addCoordinates, replaceChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCoordinates", function() { return addCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceChildren", function() { return replaceChildren; });
function addCoordinates(a1, a2) {
  return [a1[0] + a2[0], a1[1] + a2[1]];
}
function replaceChildren(parent, child) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  parent.appendChild(child);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9rZXl3b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3BlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbIkdyaWQiLCJyb290IiwiaW5wdXQiLCJDRUxMU0laRSIsImN1cnNvclBvcyIsImhlaWdodCIsIk1hdGgiLCJmbG9vciIsIm9mZnNldEhlaWdodCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJzcGVsbHMiLCJjdXJyZW50U3BlbGwiLCJTcGVsbCIsImZyYW1lcmF0ZSIsImdyaWQiLCJwb3B1bGF0ZSIsInJlY2VpdmVJbnB1dCIsImJpbmQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpIiwicm93QXJyIiwicm93IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImoiLCJjZWxsIiwicHVzaCIsImFwcGVuZENoaWxkIiwiY29vcmRpbmF0ZXMiLCJ4IiwieSIsInJhbmRvbSIsImUiLCJrZXlDb2RlIiwibmV4dFNwZWxsIiwicmVjZWl2ZSIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZWRUZXh0IiwiYWN0aXZlVGV4dCIsIm1vdmUiLCJmb3JFYWNoIiwic3BlbGwiLCJyYXRlIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJmcmFtZSIsImFuaW1hdGUiLCJnZXRFbGVtZW50QnlJZCIsIndpbmRvdyIsImtleXdvcmRzIiwidXAiLCJ0eXBlIiwiYWN0aW9uIiwiZG93biIsImxlZnQiLCJyaWdodCIsImFsbCIsImNsZWFyIiwiY29taWMiLCJzYW5zIiwiZnVuIiwibW9ubyIsInNlcmlmIiwicGVyRnJhbWVLZXl3b3JkcyIsImFwcGxpZWRLZXl3b3JkcyIsImN1cnJlbnRQb3MiLCJyYW5kb21Qb3NpdGlvbiIsImtleXdvcmRJbmRleCIsIm1vdmVzIiwiY29sb3IiLCJmb250Iiwic2l6ZSIsInJlbmRlcmVkRWxlbWVudHMiLCJ0b0xvd2VyQ2FzZSIsImV4dHJhY3RLZXl3b3JkcyIsInJlbmRlciIsIkFycmF5Iiwibm90U3RvcmVkIiwia3ciLCJhcHBseUtleXdvcmQiLCJpbmNsdWRlcyIsIlV0aWwiLCJjYXN0IiwiY29udGFpbnNLZXl3b3JkIiwibGVuZ3RoIiwic3Vic3RyIiwic2xpY2UiLCJzdHIiLCJrd3MiLCJPYmplY3QiLCJrZXlzIiwiZWxlIiwicmVtb3ZlIiwiY2xlYXJQcmV2aW91c1JlbmRlciIsInRleHQiLCJwb3MiLCJkZWx0YSIsInNpZ24iLCJsZXR0ZXIiLCJzcGFuIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJlbGVtZW50IiwiZ2V0RWxlbWVudCIsImFkZENvb3JkaW5hdGVzIiwiYTEiLCJhMiIsInJlcGxhY2VDaGlsZHJlbiIsInBhcmVudCIsImNoaWxkIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFB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O0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0hMLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBTyxTQUFTUyxjQUFULENBQXdCQyxFQUF4QixFQUE0QkMsRUFBNUIsRUFBZ0M7QUFDbkMsU0FBTyxDQUFDRCxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFDLEVBQUUsQ0FBQyxDQUFELENBQVgsRUFBZ0JELEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUUMsRUFBRSxDQUFDLENBQUQsQ0FBMUIsQ0FBUDtBQUNIO0FBRU0sU0FBU0MsZUFBVCxDQUF5QkMsTUFBekIsRUFBaUNDLEtBQWpDLEVBQXdDO0FBQzNDLFNBQU9ELE1BQU0sQ0FBQ0UsVUFBZCxFQUEwQjtBQUN0QkYsVUFBTSxDQUFDRyxXQUFQLENBQW1CSCxNQUFNLENBQUNFLFVBQTFCO0FBQ0g7O0FBRURGLFFBQU0sQ0FBQ3BGLFdBQVAsQ0FBbUJxRixLQUFuQjtBQUNILEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFNwZWxsIGZyb20gJy4vc3BlbGwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIHtcbiAgICBjb25zdHJ1Y3Rvcihyb290LCBpbnB1dCkge1xuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xuICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgICAgIFxuICAgICAgICB0aGlzLkNFTExTSVpFID0gMzA7XG4gICAgICAgIHRoaXMuY3Vyc29yUG9zID0gWzAsMF07XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5mbG9vcihyb290Lm9mZnNldEhlaWdodCAvIHRoaXMuQ0VMTFNJWkUpO1xuICAgICAgICB0aGlzLndpZHRoID0gTWF0aC5mbG9vcihyb290Lm9mZnNldFdpZHRoIC8gdGhpcy5DRUxMU0laRSk7XG4gICAgICAgIHRoaXMuc3BlbGxzID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudFNwZWxsID0gbmV3IFNwZWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmZyYW1lcmF0ZSA9IDIwMDtcbiAgICAgICAgdGhpcy5ncmlkID0gdGhpcy5wb3B1bGF0ZSgpO1xuXG4gICAgICAgIHRoaXMucmVjZWl2ZUlucHV0ID0gdGhpcy5yZWNlaXZlSW5wdXQuYmluZCh0aGlzKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5yZWNlaXZlSW5wdXQpO1xuICAgIH1cbiBcbiAgICBwb3B1bGF0ZSgpIHtcbiAgICAgICAgbGV0IGdyaWQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm93QXJyID0gW107XG4gICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICAgIHJvdy5jbGFzc05hbWUgPSAncm93JztcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy53aWR0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJ2NlbGwnO1xuICAgICAgICAgICAgICAgIHJvd0Fyci5wdXNoKGNlbGwpO1xuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB0aGlzLnJvb3QuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgIGdyaWQucHVzaChyb3dBcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdyaWQ7XG4gICAgfVxuXG4gICAgbmV4dFNwZWxsKCkge1xuICAgICAgICAvLyBpZiAodGhpcy5jdXJyZW50U3BlbGwuYXBwbGllZEtleXdvcmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3BlbGxzLnB1c2godGhpcy5jdXJyZW50U3BlbGwpO1xuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMuY3VycmVudFNwZWxsID0gbmV3IFNwZWxsKGdyaWQpO1xuICAgIH1cblxuICAgIGdldEVsZW1lbnQoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgbGV0IHggPSBjb29yZGluYXRlc1swXSAlIHRoaXMuaGVpZ2h0O1xuICAgICAgICBsZXQgeSA9IGNvb3JkaW5hdGVzWzFdICUgdGhpcy53aWR0aDtcbiAgICAgICAgaWYgKHggPCAwKSB4ICs9IHRoaXMuaGVpZ2h0O1xuICAgICAgICBpZiAoeSA8IDApIHkgKz0gdGhpcy53aWR0aDtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZFt4XVt5XTtcbiAgICB9XG5cblxuICAgIHJhbmRvbVBvc2l0aW9uKCkge1xuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLndpZHRoKTtcblxuICAgICAgICByZXR1cm4gW3gseV07XG4gICAgfVxuXG4gICAgcmVjZWl2ZUlucHV0KGUpIHtcbiAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMyB8fCBlLmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRTcGVsbCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA+PSA2NSAmJiBlLmtleUNvZGUgPCA5MSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwucmVjZWl2ZShlLmtleSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRTcGVsbC5zdG9yZWRUZXh0LCB0aGlzLmN1cnJlbnRTcGVsbC5hY3RpdmVUZXh0KVxuICAgICAgICB9XG4gICAgfSBcblxuICAgIGZyYW1lKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbC5tb3ZlKCk7XG4gICAgICAgIHRoaXMuc3BlbGxzLmZvckVhY2goc3BlbGwgPT4gc3BlbGwubW92ZSgpKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKHJhdGUpIHtcbiAgICAgICAgdGhpcy5mcmFtZXJhdGUgPSByYXRlIHx8IHRoaXMuZnJhbWVyYXRlO1xuXG4gICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mcmFtZSgpO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgICAgIH0sIHRoaXMuZnJhbWVyYXRlKTtcbiAgICB9XG59IiwiaW1wb3J0IEdyaWQgZnJvbSAnLi9ncmlkJztcbmltcG9ydCBTcGVsbCBmcm9tICcuL3NwZWxsJ1xuaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0Jyk7XG4gICAgd2luZG93LlNwZWxsID0gU3BlbGw7XG4gICAgY29uc3QgZ3JpZCA9IG5ldyBHcmlkKHJvb3QsIGlucHV0KTtcbiAgICBncmlkLmFuaW1hdGUoKTtcbiAgICB3aW5kb3cuZ3JpZCA9IGdyaWQ7XG59KSIsImNvbnN0IGtleXdvcmRzID0ge1xuICAgIHVwOiB7IHR5cGU6ICdtb3ZlJywgYWN0aW9uOiBbLTEsIDBdIH0sXG4gICAgZG93bjogeyB0eXBlOiAnbW92ZScsIGFjdGlvbjogWzEsIDBdIH0sXG4gICAgbGVmdDogeyB0eXBlOiAnbW92ZScsIGFjdGlvbjogWzAsIC0xXSB9LFxuICAgIHJpZ2h0OiB7IHR5cGU6ICdtb3ZlJywgYWN0aW9uOiBbMCwgMV0gfSxcbiAgICBhbGw6IHsgdHlwZTogJ2FsbCcgfSxcbiAgICBjbGVhcjogeyB0eXBlOiAnY2xlYXInIH0sXG4gICAgY29taWM6IHsgdHlwZTogJ2ZvbnQnLCBhY3Rpb246ICdjb21pYycgfSxcbiAgICBzYW5zOiB7IHR5cGU6ICdmb250JywgYWN0aW9uOiAnc2FucycgfSxcbiAgICBmdW46IHsgdHlwZTogJ2ZvbnQnLCBhY3Rpb246ICdmdW4nIH0sXG4gICAgbW9ubzogeyB0eXBlOiAnZm9udCcsIGFjdGlvbjogJ21vbm8nIH0sXG4gICAgc2VyaWY6IHsgdHlwZTogJ2ZvbnQnLCBhY3Rpb246ICdzZXJpZicgfSxcblxufTtcblxuZXhwb3J0IGRlZmF1bHQga2V5d29yZHM7IiwiaW1wb3J0IEdyaWQgZnJvbSAnLi9ncmlkJztcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IGtleXdvcmRJbmRleCBmcm9tICcuL2tleXdvcmRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BlbGwge1xuICAgIGNvbnN0cnVjdG9yKGdyaWQpIHtcbiAgICAgICAgdGhpcy5wZXJGcmFtZUtleXdvcmRzID0gW107XG4gICAgICAgIHRoaXMuYXBwbGllZEtleXdvcmRzID0gW107XG4gICAgICAgIHRoaXMuZ3JpZCA9IGdyaWQ7XG5cblxuICAgICAgICB0aGlzLmN1cnJlbnRQb3MgPSB0aGlzLmdyaWQucmFuZG9tUG9zaXRpb24oKTtcblxuICAgICAgICB0aGlzLnN0b3JlZFRleHQgPSAnJztcbiAgICAgICAgdGhpcy5hY3RpdmVUZXh0ID0gJyc7XG4gICAgICAgIHRoaXMua2V5d29yZEluZGV4ID0ga2V5d29yZEluZGV4O1xuXG4gICAgICAgIHRoaXMubW92ZXMgPSBbMCwwXTtcbiAgICAgICAgdGhpcy5jb2xvciA9ICdyZWQnO1xuICAgICAgICB0aGlzLmZvbnQgPSAnbW9ubyc7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDE1O1xuXG4gICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cyA9IFtdO1xuICAgIH1cblxuICAgIHJlY2VpdmUoaW5wdXQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVUZXh0ICs9IGlucHV0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuZXh0cmFjdEtleXdvcmRzKCk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgY2FzdChrZXl3b3Jkcykge1xuICAgICAgICBpZiAoIShrZXl3b3JkcyBpbnN0YW5jZW9mIEFycmF5KSkga2V5d29yZHMgPSBba2V5d29yZHNdO1xuICAgICAgICBjb25zdCBub3RTdG9yZWQgPSBbJ2FsbCcsICdjbGVhciddO1xuXG4gICAgICAgIGtleXdvcmRzLmZvckVhY2goa3cgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcHBseUtleXdvcmQoa3cpO1xuICAgICAgICAgICAgaWYgKCFub3RTdG9yZWQuaW5jbHVkZXMoa3cpKSB0aGlzLmFwcGxpZWRLZXl3b3Jkcy5wdXNoKGt3KTsgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFwcGx5S2V5d29yZChrdykge1xuICAgICAgICBsZXQgeyBhY3Rpb24sIHR5cGUgfSA9IHRoaXMua2V5d29yZEluZGV4W2t3XTtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnbW92ZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlcyA9IFV0aWwuYWRkQ29vcmRpbmF0ZXModGhpcy5tb3ZlcywgYWN0aW9uKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29sb3InOiBcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID0gYWN0aW9uO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZm9udCc6XG4gICAgICAgICAgICAgICAgdGhpcy5mb250ID0gYWN0aW9uO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWxsJzpcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQuc3BlbGxzLmZvckVhY2goc3BlbGwgPT4gc3BlbGwuY2FzdCh0aGlzLmFwcGxpZWRLZXl3b3JkcykpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIGV4dHJhY3RLZXl3b3JkcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zS2V5d29yZCh0aGlzLmFjdGl2ZVRleHQpKSByZXR1cm47XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gdGhpcy5hY3RpdmVUZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3Vic3RyID0gdGhpcy5hY3RpdmVUZXh0LnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgbGV0IGt3ID0gdGhpcy5jb250YWluc0tleXdvcmQoc3Vic3RyKTtcblxuICAgICAgICAgICAgaWYgKGt3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXN0KGt3KTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlZFRleHQgKz0gc3Vic3RyO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlVGV4dCA9IHRoaXMuYWN0aXZlVGV4dC5zbGljZShpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3RLZXl3b3JkcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIGNvbnRhaW5zS2V5d29yZChzdHIpIHtcbiAgICAgICAgbGV0IGt3cyA9IE9iamVjdC5rZXlzKHRoaXMua2V5d29yZEluZGV4KTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGt3IG9mIGt3cykgeyBcbiAgICAgICAgICAgIGlmIChzdHIuaW5jbHVkZXMoa3cpKSByZXR1cm4ga3c7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNsZWFyUHJldmlvdXNSZW5kZXIoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5mb3JFYWNoKGVsZSA9PiBlbGUucmVtb3ZlKCkpO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBvcyA9IFV0aWwuYWRkQ29vcmRpbmF0ZXModGhpcy5jdXJyZW50UG9zLCB0aGlzLm1vdmVzKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQcmV2aW91c1JlbmRlcigpO1xuXG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy5zdG9yZWRUZXh0ICsgdGhpcy5hY3RpdmVUZXh0O1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5jdXJyZW50UG9zO1xuICAgICAgICBsZXQgZGVsdGE7XG4gICAgICAgIGlmICh0aGlzLm1vdmVzWzBdID09PSAwICYmIHRoaXMubW92ZXNbMV0gPT09IDApIHtcbiAgICAgICAgICAgIGRlbHRhID0gWzAsMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgeCA9IE1hdGguc2lnbih0aGlzLm1vdmVzWzBdKTtcbiAgICAgICAgICAgIGxldCB5ID0gTWF0aC5zaWduKHRoaXMubW92ZXNbMV0pO1xuICAgICAgICAgICAgZGVsdGEgPSBbeCx5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGV0dGVyID0gdGV4dFtpXTtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBsZXR0ZXI7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQodGhpcy5zaXplLCB0aGlzLmNvbG9yLCB0aGlzLmZvbnQsICdhY3RpdmUnKTtcblxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KHBvcyk7XG4gICAgICAgICAgICBVdGlsLnJlcGxhY2VDaGlsZHJlbihlbGVtZW50LCBzcGFuKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKHNwYW4pO1xuICAgICAgICAgICAgcG9zID0gVXRpbC5hZGRDb29yZGluYXRlcyhwb3MsIGRlbHRhKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgZnVuY3Rpb24gYWRkQ29vcmRpbmF0ZXMoYTEsIGEyKSB7XG4gICAgcmV0dXJuIFthMVswXSArIGEyWzBdLCBhMVsxXSArIGEyWzFdXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VDaGlsZHJlbihwYXJlbnQsIGNoaWxkKSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9