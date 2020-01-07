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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");
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
    this.CELLSIZE = 25;
    this.cursorPos = [0, 0];
    this.height = Math.floor(root.offsetHeight / this.CELLSIZE) - 1;
    this.width = Math.floor(root.offsetWidth / this.CELLSIZE);
    this.spells = [];
    this.currentSpell = new _spell__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    this.framerate = 200;
    this.grid = this.populate();
    this.play = true;
    this.resizeGrid = this.resizeGrid.bind(this);
    this.receiveInput = this.receiveInput.bind(this);
    document.addEventListener("keydown", this.receiveInput);
    window.onresize = this.resizeGrid;
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
    key: "clearGridElements",
    value: function clearGridElements() {
      while (this.root.firstChild) {
        this.root.firstChild.remove();
      }
    }
  }, {
    key: "resizeGrid",
    value: function resizeGrid() {
      var root = document.getElementById('root');
      this.clearGridElements();
      this.height = Math.floor(root.offsetHeight / this.CELLSIZE) - 1;
      this.width = Math.floor(root.offsetWidth / this.CELLSIZE);
      this.grid = this.populate();
    }
  }, {
    key: "nextSpell",
    value: function nextSpell() {
      if (this.currentSpell.storedText || this.currentSpell.activeText) {
        this.spells.push(this.currentSpell);
        this.currentSpell = new _spell__WEBPACK_IMPORTED_MODULE_0__["default"](grid);
      } else {
        var prevSpell = this.currentSpell;
        this.currentSpell = new _spell__WEBPACK_IMPORTED_MODULE_0__["default"](grid);
        prevSpell.render();
      }
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
    key: "updateCurrentPosition",
    value: function updateCurrentPosition(keycode) {
      var currentPos = this.currentSpell.currentPos;
      var delta;

      switch (keycode) {
        case 37:
          delta = [0, -1];
          break;

        case 38:
          delta = [-1, 0];
          break;

        case 39:
          delta = [0, 1];
          break;

        case 40:
          delta = [1, 0];
          break;
      }

      this.currentSpell.currentPos = _util__WEBPACK_IMPORTED_MODULE_1__["addCoordinates"](delta, currentPos);
      this.currentSpell.render();
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
      } else if (e.keyCode === 8 && this.currentSpell) {
        this.currentSpell.deleteCharacter();
      } else if (e.keyCode <= 40 && e.keyCode >= 37) {
        this.updateCurrentPosition(e.keyCode);
      }
    }
  }, {
    key: "frame",
    value: function frame() {
      this.spells.forEach(function (spell) {
        return spell.move();
      });
      this.currentSpell.move();
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
  all: {
    type: "all"
  },
  clear: {
    type: "clear"
  },
  spell: {
    type: "spell"
  },
  fast: {
    type: "speed",
    action: 0.8
  },
  slow: {
    type: "speed",
    action: 1.25
  },
  big: {
    type: "fontsize",
    action: 1.25
  },
  little: {
    type: "fontsize",
    action: 0.8
  },
  help: {
    type: "info",
    action: "help"
  },
  up: {
    type: "move",
    action: [-1, 0]
  },
  down: {
    type: "move",
    action: [1, 0]
  },
  left: {
    type: "move",
    action: [0, -1]
  },
  right: {
    type: "move",
    action: [0, 1]
  },
  comic: {
    type: "font",
    action: "comic"
  },
  sans: {
    type: "font",
    action: "sans"
  },
  fun: {
    type: "font",
    action: "fun"
  },
  mono: {
    type: "font",
    action: "mono"
  },
  serif: {
    type: "font",
    action: "serif"
  },
  blue: {
    type: "color",
    action: "#5798ad"
  },
  green: {
    type: "color",
    action: "#57ad6e"
  },
  yellow: {
    type: "color",
    action: "#dbc035"
  },
  red: {
    type: "color",
    action: "#de481b"
  },
  emoji: {
    type: "emoji"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (keywords); // TODO: 
// rotate, snake, typetest, about, index,

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
    this.colors = [];
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
    key: "deleteCharacter",
    value: function deleteCharacter() {
      if (this.activeText) {
        this.activeText = this.activeText.slice(0, this.activeText.length - 1);
      }
    }
  }, {
    key: "cast",
    value: function cast(keywords) {
      var _this = this;

      if (!(keywords instanceof Array)) keywords = [keywords];
      var notStored = ['all', 'clear', 'spell', 'fast', 'slow'];
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
          this.colors.push(action);
          break;

        case 'font':
          this.emoji = false;
          this.font = action;
          break;

        case 'speed':
          var newfps = Math.floor(this.grid.framerate * action);

          if (newfps > 4000) {
            this.grid.framerate = 40000;
          } else if (newfps < 100) {
            this.grid.framerate = 100;
          } else {
            this.grid.framerate = newfps;
          }

          break;

        case 'fontsize':
          var newsize = Math.floor(this.size * action);

          if (newsize > 40) {
            this.size = 40;
          } else if (newsize < 6) {
            this.size = 6;
          } else {
            this.size = newsize;
          }

          console.log(this.size);
          break;

        case 'clear':
          this.grid.spells.forEach(function (spell) {
            return spell.clearPreviousRender();
          });
          this.grid.spells = [];
          break;

        case 'emoji':
          this.emoji = true;
          break;

        case 'spell':
          this.generateRandomSpell();
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
          this.storedText += substr;
          this.cast(kw);
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
    key: "shuffleColors",
    value: function shuffleColors() {
      if (this.colors.length === 0) return 'none';
      if (this.colors.length === 1) return this.colors[0];
      this.colors.push(this.colors.shift());
      return this.colors[1];
    }
  }, {
    key: "generateRandomSpell",
    value: function generateRandomSpell() {
      var keywords = Object.keys(this.keywordIndex);
      console.log(keywords);
      var appliedKeywords = '';

      for (var i = 0; i < 5; i++) {
        var randIdx = Math.floor(Math.random() * (keywords.length - 3)) + 3;
        console.log(randIdx);
        appliedKeywords += keywords[randIdx];
      }

      console.log(appliedKeywords);
      var spell = new Spell(this.grid);
      spell.receive(appliedKeywords);
      this.grid.spells.push(spell);
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
        var letter = this.emoji ? _util__WEBPACK_IMPORTED_MODULE_1__["toEmoji"](text[i]) : text[i];
        var span = document.createElement('span');
        span.textContent = letter.toUpperCase();
        span.classList.add(this.font, 'active');
        span.style.fontSize = this.size + 'px';
        span.style.backgroundColor = this.shuffleColors();
        if (this.colors.length > 0) span.style.color = 'white';
        var element = this.grid.getElement(pos);
        _util__WEBPACK_IMPORTED_MODULE_1__["replaceChildren"](element, span);
        this.renderedElements.push(span);
        pos = _util__WEBPACK_IMPORTED_MODULE_1__["addCoordinates"](pos, delta);
      }

      if (this.grid.currentSpell === this) {
        var _span = document.createElement("span");

        _span.className = 'cursor';

        var _element = this.grid.getElement(pos);

        _util__WEBPACK_IMPORTED_MODULE_1__["replaceChildren"](_element, _span);
        this.renderedElements.push(_span);
      }

      ;
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
/*! exports provided: addCoordinates, replaceChildren, toEmoji */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCoordinates", function() { return addCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceChildren", function() { return replaceChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toEmoji", function() { return toEmoji; });
function addCoordinates(a1, a2) {
  return [a1[0] + a2[0], a1[1] + a2[1]];
}
function replaceChildren(parent, child) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  parent.appendChild(child);
}
function toEmoji(str) {
  str = str.toLowerCase();
  var EMOJIS = ["😠", "😳", "👨‍👨‍👦", "🍆", "🐵", "🐱", "💩", "🌞", "🌈", "🌊", "🗽", "🛸", "👨‍👨‍👦", "🥓", "👌", "🏞", "🎢", "🚖", "🍩", "🍔", "🇮🇷", "🤥", "👂", "☢", "🈵", "🤣"];
  var code = str.charCodeAt(0) - 97;
  return EMOJIS[code];
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9rZXl3b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3BlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbIkdyaWQiLCJyb290IiwiaW5wdXQiLCJDRUxMU0laRSIsImN1cnNvclBvcyIsImhlaWdodCIsIk1hdGgiLCJmbG9vciIsIm9mZnNldEhlaWdodCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJzcGVsbHMiLCJjdXJyZW50U3BlbGwiLCJTcGVsbCIsImZyYW1lcmF0ZSIsImdyaWQiLCJwb3B1bGF0ZSIsInBsYXkiLCJyZXNpemVHcmlkIiwiYmluZCIsInJlY2VpdmVJbnB1dCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsIm9ucmVzaXplIiwiaSIsInJvd0FyciIsInJvdyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJqIiwiY2VsbCIsInB1c2giLCJhcHBlbmRDaGlsZCIsImZpcnN0Q2hpbGQiLCJyZW1vdmUiLCJnZXRFbGVtZW50QnlJZCIsImNsZWFyR3JpZEVsZW1lbnRzIiwic3RvcmVkVGV4dCIsImFjdGl2ZVRleHQiLCJwcmV2U3BlbGwiLCJyZW5kZXIiLCJjb29yZGluYXRlcyIsIngiLCJ5Iiwia2V5Y29kZSIsImN1cnJlbnRQb3MiLCJkZWx0YSIsIlV0aWwiLCJyYW5kb20iLCJlIiwia2V5Q29kZSIsIm5leHRTcGVsbCIsInJlY2VpdmUiLCJrZXkiLCJkZWxldGVDaGFyYWN0ZXIiLCJ1cGRhdGVDdXJyZW50UG9zaXRpb24iLCJmb3JFYWNoIiwic3BlbGwiLCJtb3ZlIiwicmF0ZSIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZnJhbWUiLCJhbmltYXRlIiwia2V5d29yZHMiLCJhbGwiLCJ0eXBlIiwiY2xlYXIiLCJmYXN0IiwiYWN0aW9uIiwic2xvdyIsImJpZyIsImxpdHRsZSIsImhlbHAiLCJ1cCIsImRvd24iLCJsZWZ0IiwicmlnaHQiLCJjb21pYyIsInNhbnMiLCJmdW4iLCJtb25vIiwic2VyaWYiLCJibHVlIiwiZ3JlZW4iLCJ5ZWxsb3ciLCJyZWQiLCJlbW9qaSIsInBlckZyYW1lS2V5d29yZHMiLCJhcHBsaWVkS2V5d29yZHMiLCJyYW5kb21Qb3NpdGlvbiIsImtleXdvcmRJbmRleCIsIm1vdmVzIiwiY29sb3JzIiwiZm9udCIsInNpemUiLCJyZW5kZXJlZEVsZW1lbnRzIiwidG9Mb3dlckNhc2UiLCJleHRyYWN0S2V5d29yZHMiLCJzbGljZSIsImxlbmd0aCIsIkFycmF5Iiwibm90U3RvcmVkIiwia3ciLCJhcHBseUtleXdvcmQiLCJpbmNsdWRlcyIsIm5ld2ZwcyIsIm5ld3NpemUiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJQcmV2aW91c1JlbmRlciIsImdlbmVyYXRlUmFuZG9tU3BlbGwiLCJjYXN0IiwiY29udGFpbnNLZXl3b3JkIiwic3Vic3RyIiwic3RyIiwia3dzIiwiT2JqZWN0Iiwia2V5cyIsImVsZSIsInNoaWZ0IiwicmFuZElkeCIsInRleHQiLCJwb3MiLCJzaWduIiwibGV0dGVyIiwic3BhbiIsInRleHRDb250ZW50IiwidG9VcHBlckNhc2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwic2h1ZmZsZUNvbG9ycyIsImNvbG9yIiwiZWxlbWVudCIsImdldEVsZW1lbnQiLCJhZGRDb29yZGluYXRlcyIsImExIiwiYTIiLCJyZXBsYWNlQ2hpbGRyZW4iLCJwYXJlbnQiLCJjaGlsZCIsInJlbW92ZUNoaWxkIiwidG9FbW9qaSIsIkVNT0pJUyIsImNvZGUiLCJjaGFyQ29kZUF0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FB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QW5CO0FBQ0g7QUFFTSxTQUFTRSxPQUFULENBQWlCOUIsR0FBakIsRUFBc0I7QUFDekJBLEtBQUcsR0FBR0EsR0FBRyxDQUFDbEIsV0FBSixFQUFOO0FBRUEsTUFBSWlELE1BQU0sR0FBRyxDQUNYLElBRFcsRUFFWCxJQUZXLEVBR1gsVUFIVyxFQUlYLElBSlcsRUFLWCxJQUxXLEVBTVgsSUFOVyxFQU9YLElBUFcsRUFRWCxJQVJXLEVBU1gsSUFUVyxFQVVYLElBVlcsRUFXWCxJQVhXLEVBWVgsSUFaVyxFQWFYLFVBYlcsRUFjWCxJQWRXLEVBZVgsSUFmVyxFQWdCWCxJQWhCVyxFQWlCWCxJQWpCVyxFQWtCWCxJQWxCVyxFQW1CWCxJQW5CVyxFQW9CWCxJQXBCVyxFQXFCWCxNQXJCVyxFQXNCWCxJQXRCVyxFQXVCWCxJQXZCVyxFQXdCWCxHQXhCVyxFQXlCWCxJQXpCVyxFQTBCWCxJQTFCVyxDQUFiO0FBOEJBLE1BQUlDLElBQUksR0FBR2hDLEdBQUcsQ0FBQ2lDLFVBQUosQ0FBZSxDQUFmLElBQW9CLEVBQS9CO0FBQ0EsU0FBT0YsTUFBTSxDQUFDQyxJQUFELENBQWI7QUFFSCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBTcGVsbCBmcm9tICcuL3NwZWxsJztcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIHtcbiAgICBjb25zdHJ1Y3Rvcihyb290LCBpbnB1dCkge1xuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xuICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgICAgIFxuICAgICAgICB0aGlzLkNFTExTSVpFID0gMjU7XG4gICAgICAgIHRoaXMuY3Vyc29yUG9zID0gWzAsMF07XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5mbG9vcihyb290Lm9mZnNldEhlaWdodCAvIHRoaXMuQ0VMTFNJWkUpIC0gMTtcbiAgICAgICAgdGhpcy53aWR0aCA9IE1hdGguZmxvb3Iocm9vdC5vZmZzZXRXaWR0aCAvIHRoaXMuQ0VMTFNJWkUpO1xuICAgICAgICB0aGlzLnNwZWxscyA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbCA9IG5ldyBTcGVsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5mcmFtZXJhdGUgPSAyMDA7XG4gICAgICAgIHRoaXMuZ3JpZCA9IHRoaXMucG9wdWxhdGUoKTtcbiAgICAgICAgdGhpcy5wbGF5ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnJlc2l6ZUdyaWQgPSB0aGlzLnJlc2l6ZUdyaWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWNlaXZlSW5wdXQgPSB0aGlzLnJlY2VpdmVJbnB1dC5iaW5kKHRoaXMpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLnJlY2VpdmVJbnB1dCk7XG4gICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHRoaXMucmVzaXplR3JpZDtcbiAgICB9XG4gXG4gICAgcG9wdWxhdGUoKSB7XG4gICAgICAgIGxldCBncmlkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5oZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvd0FyciA9IFtdO1xuICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICByb3cuY2xhc3NOYW1lID0gJ3Jvdyc7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMud2lkdGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICdjZWxsJztcbiAgICAgICAgICAgICAgICByb3dBcnIucHVzaChjZWxsKTtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgdGhpcy5yb290LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICBncmlkLnB1c2gocm93QXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBncmlkO1xuICAgIH1cblxuICAgIGNsZWFyR3JpZEVsZW1lbnRzKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5yb290LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzaXplR3JpZCgpIHtcbiAgICAgICAgbGV0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuICAgICAgICB0aGlzLmNsZWFyR3JpZEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5mbG9vcihyb290Lm9mZnNldEhlaWdodCAvIHRoaXMuQ0VMTFNJWkUpIC0gMTtcbiAgICAgICAgdGhpcy53aWR0aCA9IE1hdGguZmxvb3Iocm9vdC5vZmZzZXRXaWR0aCAvIHRoaXMuQ0VMTFNJWkUpO1xuICAgICAgICB0aGlzLmdyaWQgPSB0aGlzLnBvcHVsYXRlKCk7XG4gICAgfVxuXG4gICAgbmV4dFNwZWxsKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50U3BlbGwuc3RvcmVkVGV4dCB8fCB0aGlzLmN1cnJlbnRTcGVsbC5hY3RpdmVUZXh0KSB7XG4gICAgICAgICAgICB0aGlzLnNwZWxscy5wdXNoKHRoaXMuY3VycmVudFNwZWxsKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWxsID0gbmV3IFNwZWxsKGdyaWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHByZXZTcGVsbCA9IHRoaXMuY3VycmVudFNwZWxsO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwgPSBuZXcgU3BlbGwoZ3JpZCk7XG4gICAgICAgICAgICBwcmV2U3BlbGwucmVuZGVyKClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBnZXRFbGVtZW50KGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGxldCB4ID0gY29vcmRpbmF0ZXNbMF0gJSB0aGlzLmhlaWdodDtcbiAgICAgICAgbGV0IHkgPSBjb29yZGluYXRlc1sxXSAlIHRoaXMud2lkdGg7XG4gICAgICAgIGlmICh4IDwgMCkgeCArPSB0aGlzLmhlaWdodDtcbiAgICAgICAgaWYgKHkgPCAwKSB5ICs9IHRoaXMud2lkdGg7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRbeF1beV07XG4gICAgfVxuXG4gICAgdXBkYXRlQ3VycmVudFBvc2l0aW9uKGtleWNvZGUpIHtcbiAgICAgICAgbGV0IHsgY3VycmVudFBvcyB9ID0gdGhpcy5jdXJyZW50U3BlbGw7XG4gICAgICAgIGxldCBkZWx0YTsgXG5cbiAgICAgICAgc3dpdGNoIChrZXljb2RlKSB7XG4gICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgIGRlbHRhID0gWzAsIC0xXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICBkZWx0YSA9IFstMSwgMF07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgZGVsdGEgPSBbMCwgMV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgZGVsdGEgPSBbMSwgMF07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudFNwZWxsLmN1cnJlbnRQb3MgPSBVdGlsLmFkZENvb3JkaW5hdGVzKGRlbHRhLCBjdXJyZW50UG9zKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgcmFuZG9tUG9zaXRpb24oKSB7XG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5oZWlnaHQpO1xuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMud2lkdGgpO1xuXG4gICAgICAgIHJldHVybiBbeCx5XTtcbiAgICB9XG5cbiAgICByZWNlaXZlSW5wdXQoZSkge1xuICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAzMikge1xuICAgICAgICAgICAgdGhpcy5uZXh0U3BlbGwoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPj0gNjUgJiYgZS5rZXlDb2RlIDwgOTEpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWxsLnJlY2VpdmUoZS5rZXkpO1xuICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gOCAmJiB0aGlzLmN1cnJlbnRTcGVsbCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwuZGVsZXRlQ2hhcmFjdGVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlIDw9IDQwICYmIGUua2V5Q29kZSA+PSAzNykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50UG9zaXRpb24oZS5rZXlDb2RlKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBmcmFtZSgpIHtcbiAgICAgICAgdGhpcy5zcGVsbHMuZm9yRWFjaChzcGVsbCA9PiBzcGVsbC5tb3ZlKCkpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbC5tb3ZlKCk7XG4gICAgfVxuXG5cblxuICAgIGFuaW1hdGUocmF0ZSkge1xuICAgICAgICB0aGlzLmZyYW1lcmF0ZSA9IHJhdGUgfHwgdGhpcy5mcmFtZXJhdGU7XG4gICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mcmFtZSgpO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgICAgIH0sIHRoaXMuZnJhbWVyYXRlKTtcbiAgICB9XG59IiwiaW1wb3J0IEdyaWQgZnJvbSAnLi9ncmlkJztcbmltcG9ydCBTcGVsbCBmcm9tICcuL3NwZWxsJ1xuaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0Jyk7XG4gICAgd2luZG93LlNwZWxsID0gU3BlbGw7XG4gICAgY29uc3QgZ3JpZCA9IG5ldyBHcmlkKHJvb3QsIGlucHV0KTtcbiAgICBncmlkLmFuaW1hdGUoKTtcbiAgICB3aW5kb3cuZ3JpZCA9IGdyaWQ7XG59KSIsImNvbnN0IGtleXdvcmRzID0ge1xuICBhbGw6IHsgdHlwZTogXCJhbGxcIiB9LFxuICBjbGVhcjogeyB0eXBlOiBcImNsZWFyXCIgfSxcbiAgc3BlbGw6IHsgdHlwZTogXCJzcGVsbFwiIH0sXG4gIGZhc3Q6IHsgdHlwZTogXCJzcGVlZFwiLCBhY3Rpb246IDAuOCB9LFxuICBzbG93OiB7IHR5cGU6IFwic3BlZWRcIiwgYWN0aW9uOiAxLjI1IH0sXG4gIGJpZzogeyB0eXBlOiBcImZvbnRzaXplXCIsIGFjdGlvbjogMS4yNSB9LFxuICBsaXR0bGU6IHsgdHlwZTogXCJmb250c2l6ZVwiLCBhY3Rpb246IDAuOCB9LFxuICBoZWxwOiB7IHR5cGU6IFwiaW5mb1wiLCBhY3Rpb246IFwiaGVscFwiIH0sXG4gIHVwOiB7IHR5cGU6IFwibW92ZVwiLCBhY3Rpb246IFstMSwgMF0gfSxcbiAgZG93bjogeyB0eXBlOiBcIm1vdmVcIiwgYWN0aW9uOiBbMSwgMF0gfSxcbiAgbGVmdDogeyB0eXBlOiBcIm1vdmVcIiwgYWN0aW9uOiBbMCwgLTFdIH0sXG4gIHJpZ2h0OiB7IHR5cGU6IFwibW92ZVwiLCBhY3Rpb246IFswLCAxXSB9LFxuICBjb21pYzogeyB0eXBlOiBcImZvbnRcIiwgYWN0aW9uOiBcImNvbWljXCIgfSxcbiAgc2FuczogeyB0eXBlOiBcImZvbnRcIiwgYWN0aW9uOiBcInNhbnNcIiB9LFxuICBmdW46IHsgdHlwZTogXCJmb250XCIsIGFjdGlvbjogXCJmdW5cIiB9LFxuICBtb25vOiB7IHR5cGU6IFwiZm9udFwiLCBhY3Rpb246IFwibW9ub1wiIH0sXG4gIHNlcmlmOiB7IHR5cGU6IFwiZm9udFwiLCBhY3Rpb246IFwic2VyaWZcIiB9LFxuICBibHVlOiB7IHR5cGU6IFwiY29sb3JcIiwgYWN0aW9uOiBcIiM1Nzk4YWRcIiB9LFxuICBncmVlbjogeyB0eXBlOiBcImNvbG9yXCIsIGFjdGlvbjogXCIjNTdhZDZlXCIgfSxcbiAgeWVsbG93OiB7IHR5cGU6IFwiY29sb3JcIiwgYWN0aW9uOiBcIiNkYmMwMzVcIiB9LFxuICByZWQ6IHsgdHlwZTogXCJjb2xvclwiLCBhY3Rpb246IFwiI2RlNDgxYlwiIH0sXG4gIGVtb2ppOiB7IHR5cGU6IFwiZW1vamlcIiB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBrZXl3b3JkcztcblxuLy8gVE9ETzogXG4vLyByb3RhdGUsIHNuYWtlLCB0eXBldGVzdCwgYWJvdXQsIGluZGV4LCAgIiwiaW1wb3J0IEdyaWQgZnJvbSAnLi9ncmlkJztcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IGtleXdvcmRJbmRleCBmcm9tICcuL2tleXdvcmRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BlbGwge1xuICAgIGNvbnN0cnVjdG9yKGdyaWQpIHtcbiAgICAgICAgdGhpcy5wZXJGcmFtZUtleXdvcmRzID0gW107XG4gICAgICAgIHRoaXMuYXBwbGllZEtleXdvcmRzID0gW107XG4gICAgICAgIHRoaXMuZ3JpZCA9IGdyaWQ7XG5cblxuICAgICAgICB0aGlzLmN1cnJlbnRQb3MgPSB0aGlzLmdyaWQucmFuZG9tUG9zaXRpb24oKTtcblxuICAgICAgICB0aGlzLnN0b3JlZFRleHQgPSAnJztcbiAgICAgICAgdGhpcy5hY3RpdmVUZXh0ID0gJyc7XG4gICAgICAgIHRoaXMua2V5d29yZEluZGV4ID0ga2V5d29yZEluZGV4O1xuXG4gICAgICAgIHRoaXMubW92ZXMgPSBbMCwwXTtcbiAgICAgICAgdGhpcy5jb2xvcnMgPSBbXTtcbiAgICAgICAgdGhpcy5mb250ID0gJ21vbm8nO1xuICAgICAgICB0aGlzLnNpemUgPSAxNTtcblxuICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMgPSBbXTtcbiAgICB9XG5cbiAgICByZWNlaXZlKGlucHV0KSB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGV4dCArPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLmV4dHJhY3RLZXl3b3JkcygpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIGRlbGV0ZUNoYXJhY3RlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlVGV4dCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVUZXh0ID0gdGhpcy5hY3RpdmVUZXh0LnNsaWNlKDAsIHRoaXMuYWN0aXZlVGV4dC5sZW5ndGggLSAxKTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBjYXN0KGtleXdvcmRzKSB7XG4gICAgICAgIGlmICghKGtleXdvcmRzIGluc3RhbmNlb2YgQXJyYXkpKSBrZXl3b3JkcyA9IFtrZXl3b3Jkc107XG4gICAgICAgIGNvbnN0IG5vdFN0b3JlZCA9IFsnYWxsJywgJ2NsZWFyJywgJ3NwZWxsJywgJ2Zhc3QnLCAnc2xvdyddO1xuXG4gICAgICAgIGtleXdvcmRzLmZvckVhY2goa3cgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcHBseUtleXdvcmQoa3cpO1xuICAgICAgICAgICAgaWYgKCFub3RTdG9yZWQuaW5jbHVkZXMoa3cpKSB0aGlzLmFwcGxpZWRLZXl3b3Jkcy5wdXNoKGt3KTsgXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICBhcHBseUtleXdvcmQoa3cpIHtcbiAgICAgICAgbGV0IHsgYWN0aW9uLCB0eXBlIH0gPSB0aGlzLmtleXdvcmRJbmRleFtrd107XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ21vdmUnOlxuICAgICAgICAgICAgICAgIHRoaXMubW92ZXMgPSBVdGlsLmFkZENvb3JkaW5hdGVzKHRoaXMubW92ZXMsIGFjdGlvbilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbG9yJzogXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvcnMucHVzaChhY3Rpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZm9udCc6XG4gICAgICAgICAgICAgICAgdGhpcy5lbW9qaSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9udCA9IGFjdGlvbjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NwZWVkJzpcbiAgICAgICAgICAgICAgICBsZXQgbmV3ZnBzID0gTWF0aC5mbG9vcih0aGlzLmdyaWQuZnJhbWVyYXRlICogYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3ZnBzID4gNDAwMCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkLmZyYW1lcmF0ZSA9IDQwMDAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3ZnBzIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmdyaWQuZnJhbWVyYXRlID0gMTAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmdyaWQuZnJhbWVyYXRlID0gbmV3ZnBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZvbnRzaXplJzpcbiAgICAgICAgICAgICAgICBsZXQgbmV3c2l6ZSA9IE1hdGguZmxvb3IodGhpcy5zaXplICogYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3c2l6ZSA+IDQwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSA9IDQwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3c2l6ZSA8IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplID0gNjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSBuZXdzaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNpemUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2xlYXInOlxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5zcGVsbHMuZm9yRWFjaChzcGVsbCA9PiBzcGVsbC5jbGVhclByZXZpb3VzUmVuZGVyKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5zcGVsbHMgPSBbXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Vtb2ppJzpcbiAgICAgICAgICAgICAgICB0aGlzLmVtb2ppID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NwZWxsJzpcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlUmFuZG9tU3BlbGwoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FsbCc6XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnNwZWxscy5mb3JFYWNoKHNwZWxsID0+IHNwZWxsLmNhc3QodGhpcy5hcHBsaWVkS2V5d29yZHMpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBleHRyYWN0S2V5d29yZHMoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluc0tleXdvcmQodGhpcy5hY3RpdmVUZXh0KSkgcmV0dXJuO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHRoaXMuYWN0aXZlVGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHN1YnN0ciA9IHRoaXMuYWN0aXZlVGV4dC5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIGxldCBrdyA9IHRoaXMuY29udGFpbnNLZXl3b3JkKHN1YnN0cik7XG5cbiAgICAgICAgICAgIGlmIChrdykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVkVGV4dCArPSBzdWJzdHI7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXN0KGt3KTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVRleHQgPSB0aGlzLmFjdGl2ZVRleHQuc2xpY2UoaSk7XG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0S2V5d29yZHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBjb250YWluc0tleXdvcmQoc3RyKSB7XG4gICAgICAgIGxldCBrd3MgPSBPYmplY3Qua2V5cyh0aGlzLmtleXdvcmRJbmRleCk7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBrdyBvZiBrd3MpIHsgXG4gICAgICAgICAgICBpZiAoc3RyLmluY2x1ZGVzKGt3KSkgcmV0dXJuIGt3O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjbGVhclByZXZpb3VzUmVuZGVyKCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMuZm9yRWFjaChlbGUgPT4gZWxlLnJlbW92ZSgpKTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQb3MgPSBVdGlsLmFkZENvb3JkaW5hdGVzKHRoaXMuY3VycmVudFBvcywgdGhpcy5tb3Zlcyk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgc2h1ZmZsZUNvbG9ycygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29sb3JzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICdub25lJztcbiAgICAgICAgaWYgKHRoaXMuY29sb3JzLmxlbmd0aCA9PT0gMSApIHJldHVybiB0aGlzLmNvbG9yc1swXVxuICAgICAgICB0aGlzLmNvbG9ycy5wdXNoKHRoaXMuY29sb3JzLnNoaWZ0KCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xvcnNbMV07XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVSYW5kb21TcGVsbCgpIHtcbiAgICAgICAgbGV0IGtleXdvcmRzID0gT2JqZWN0LmtleXModGhpcy5rZXl3b3JkSW5kZXgpO1xuICAgICAgICBjb25zb2xlLmxvZyhrZXl3b3Jkcyk7XG4gICAgICAgIGxldCBhcHBsaWVkS2V5d29yZHMgPSAnJztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJhbmRJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoa2V5d29yZHMubGVuZ3RoIC0gMykpICsgMzsgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyYW5kSWR4KTtcbiAgICAgICAgICAgIGFwcGxpZWRLZXl3b3JkcyArPSBrZXl3b3Jkc1tyYW5kSWR4XTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhhcHBsaWVkS2V5d29yZHMpO1xuICAgICAgICBsZXQgc3BlbGwgPSBuZXcgU3BlbGwodGhpcy5ncmlkKTtcbiAgICAgICAgc3BlbGwucmVjZWl2ZShhcHBsaWVkS2V5d29yZHMpO1xuICAgICAgICB0aGlzLmdyaWQuc3BlbGxzLnB1c2goc3BlbGwpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5jbGVhclByZXZpb3VzUmVuZGVyKCk7XG5cbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLnN0b3JlZFRleHQgKyB0aGlzLmFjdGl2ZVRleHQ7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmN1cnJlbnRQb3M7XG4gICAgICAgIGxldCBkZWx0YTtcbiAgICAgICAgaWYgKHRoaXMubW92ZXNbMF0gPT09IDAgJiYgdGhpcy5tb3Zlc1sxXSA9PT0gMCkge1xuICAgICAgICAgICAgZGVsdGEgPSBbMCwxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB4ID0gTWF0aC5zaWduKHRoaXMubW92ZXNbMF0pO1xuICAgICAgICAgICAgbGV0IHkgPSBNYXRoLnNpZ24odGhpcy5tb3Zlc1sxXSk7XG4gICAgICAgICAgICBkZWx0YSA9IFt4LHldO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsZXR0ZXIgPSB0aGlzLmVtb2ppID8gVXRpbC50b0Vtb2ppKHRleHRbaV0pIDogdGV4dFtpXTtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCh0aGlzLmZvbnQsICdhY3RpdmUnKTtcbiAgICAgICAgICAgIHNwYW4uc3R5bGUuZm9udFNpemUgPSB0aGlzLnNpemUgKyAncHgnO1xuICAgICAgICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLnNodWZmbGVDb2xvcnMoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbG9ycy5sZW5ndGggPiAwKSBzcGFuLnN0eWxlLmNvbG9yID0gJ3doaXRlJzsgXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5ncmlkLmdldEVsZW1lbnQocG9zKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgVXRpbC5yZXBsYWNlQ2hpbGRyZW4oZWxlbWVudCwgc3Bhbik7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMucHVzaChzcGFuKTtcbiAgICAgICAgICAgIHBvcyA9IFV0aWwuYWRkQ29vcmRpbmF0ZXMocG9zLCBkZWx0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ncmlkLmN1cnJlbnRTcGVsbCA9PT0gdGhpcykge1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgc3Bhbi5jbGFzc05hbWUgPSAnY3Vyc29yJztcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmdyaWQuZ2V0RWxlbWVudChwb3MpO1xuICAgICAgICAgICAgVXRpbC5yZXBsYWNlQ2hpbGRyZW4oZWxlbWVudCwgc3Bhbik7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMucHVzaChzcGFuKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbn1cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZENvb3JkaW5hdGVzKGExLCBhMikge1xuICAgIHJldHVybiBbYTFbMF0gKyBhMlswXSwgYTFbMV0gKyBhMlsxXV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlQ2hpbGRyZW4ocGFyZW50LCBjaGlsZCkge1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0Vtb2ppKHN0cikge1xuICAgIHN0ciA9IHN0ci50b0xvd2VyQ2FzZSgpO1xuXG4gICAgbGV0IEVNT0pJUyA9IFtcbiAgICAgIFwi8J+YoFwiLFxuICAgICAgXCLwn5izXCIsXG4gICAgICBcIvCfkajigI3wn5Go4oCN8J+RplwiLFxuICAgICAgXCLwn42GXCIsXG4gICAgICBcIvCfkLVcIixcbiAgICAgIFwi8J+QsVwiLFxuICAgICAgXCLwn5KpXCIsXG4gICAgICBcIvCfjJ5cIixcbiAgICAgIFwi8J+MiFwiLFxuICAgICAgXCLwn4yKXCIsXG4gICAgICBcIvCfl71cIixcbiAgICAgIFwi8J+buFwiLFxuICAgICAgXCLwn5Go4oCN8J+RqOKAjfCfkaZcIixcbiAgICAgIFwi8J+lk1wiLFxuICAgICAgXCLwn5GMXCIsXG4gICAgICBcIvCfj55cIixcbiAgICAgIFwi8J+OolwiLFxuICAgICAgXCLwn5qWXCIsXG4gICAgICBcIvCfjalcIixcbiAgICAgIFwi8J+NlFwiLFxuICAgICAgXCLwn4eu8J+Ht1wiLFxuICAgICAgXCLwn6SlXCIsXG4gICAgICBcIvCfkYJcIixcbiAgICAgIFwi4piiXCIsXG4gICAgICBcIvCfiLVcIixcbiAgICAgIFwi8J+ko1wiXG4gICAgXTtcblxuXG4gICAgbGV0IGNvZGUgPSBzdHIuY2hhckNvZGVBdCgwKSAtIDk3O1xuICAgIHJldHVybiBFTU9KSVNbY29kZV07XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9