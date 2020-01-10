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
/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snake */ "./src/snake.js");
/* harmony import */ var _keywords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keywords */ "./src/keywords.js");
/* harmony import */ var _typetest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typetest */ "./src/typetest.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Grid =
/*#__PURE__*/
function () {
  function Grid(root, input) {
    var _this = this;

    _classCallCheck(this, Grid);

    this.root = root;
    this.input = input;
    this.CELLSIZE = 25;
    this.cursorPos = [0, 0];
    this.height = Math.ceil(root.offsetHeight / this.CELLSIZE) - 2;
    this.width = Math.floor(root.offsetWidth / this.CELLSIZE);
    this.spells = [];
    this.currentSpell = new _spell__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    this.framerate = 200;
    this.typetest = null;
    this.grid = this.populate();
    this.play = true;
    var keywordsList = document.getElementById("keywords-list");
    var logo = document.getElementById('logo');
    var castNewSpell = document.getElementById('cast-new-spell');

    castNewSpell.onclick = function () {
      return _this.nextSpell();
    };

    logo.onclick = function () {
      _this.grid.push(_this.currentSpell.generateRandomSpell());
    };

    Object.keys(_keywords__WEBPACK_IMPORTED_MODULE_3__["default"]).forEach(function (kw) {
      var li = document.createElement("li");
      li.innerText = kw;

      li.onclick = function () {
        return _this.currentSpell.receive(kw);
      };

      keywordsList.appendChild(li);
    });
    this.resizeGrid = this.resizeGrid.bind(this);
    this.receiveInput = this.receiveInput.bind(this);
    this.receiveClick = this.receiveClick.bind(this);
    document.addEventListener("keydown", this.receiveInput);
    this.root.addEventListener("click", function (e) {
      var pos = e.target.dataset.pos;
      if (pos) _this.receiveClick(pos);
    });
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
          cell.dataset.pos = [i, j];
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
      if (this.snakeMode()) {
        this.currentSpell.clearPreviousRender();
        this.currentSpell = new _spell__WEBPACK_IMPORTED_MODULE_0__["default"](grid);
      } else if (this.currentSpell.storedText || this.currentSpell.activeText) {
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
    key: "snakeMode",
    value: function snakeMode() {
      return this.currentSpell instanceof _snake__WEBPACK_IMPORTED_MODULE_2__["Snake"];
    }
  }, {
    key: "playSnake",
    value: function playSnake() {
      var lastSpell = this.currentSpell;
      this.spells.push(lastSpell);
      var x = Math.floor(this.height / 2);
      var y = Math.floor(this.width / 2);
      var centerPos = [x, y];
      this.currentSpell = new _snake__WEBPACK_IMPORTED_MODULE_2__["Snake"](this, centerPos);
    }
  }, {
    key: "playTypetest",
    value: function playTypetest() {
      // clearTimeout(this.timeout);
      this.spells.push(this.currentSpell);
      var inst = new _spell__WEBPACK_IMPORTED_MODULE_0__["default"](this);
      inst.cast(["right", "green"]);
      inst.storedText = "press esc to exit";
      inst.currentPos = [1, 1];
      this.currentSpell = inst;
      if (this.typetest) this.typetest.clearPreviousRender();
      this.typetest = new _typetest__WEBPACK_IMPORTED_MODULE_4__["TypeTest"](this);
      this.typetest.render(); // this.currentSpell = null;
    }
  }, {
    key: "exitTypetest",
    value: function exitTypetest() {
      if (this.typetest) this.typetest.clearPreviousRender();
      this.typetest = null;
      this.currentSpell.clearPreviousRender();
      this.currentSpell = new _spell__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    }
  }, {
    key: "receiveClick",
    value: function receiveClick(pos) {
      if (this.snakeMode()) return;
      var posArr = pos.split(",").map(function (i) {
        return parseInt(i);
      });
      if (this.currentSpell) this.currentSpell.currentPos = posArr;
    }
  }, {
    key: "updateCurrentPosition",
    value: function updateCurrentPosition(keycode) {
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

      if (this.snakeMode()) {
        this.currentSpell.receiveInput(delta);
        return;
      }

      var currentPos = this.currentSpell.currentPos;
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
      if (e.keyCode === 27) {
        if (this.currentSpell) this.currentSpell.clearPreviousRender();
        this.currentSpell = new _spell__WEBPACK_IMPORTED_MODULE_0__["default"](this);
      }

      if (this.typetest) {
        this.typetest.receive(e);
      } else if (e.keyCode === 13 || e.keyCode === 32) {
        this.nextSpell();
      } else if (e.keyCode >= 65 && e.keyCode < 91) {
        if (this.snakeMode()) return;
        this.currentSpell.receive(e.key);
      } else if (e.keyCode === 8 && this.currentSpell) {
        if (this.snakeMode()) return;
        this.currentSpell.deleteCharacter();
      } else if (e.keyCode <= 40 && e.keyCode >= 37) {
        this.updateCurrentPosition(e.keyCode);
      }
    }
  }, {
    key: "trimSpells",
    value: function trimSpells() {
      if (this.spells.length < 100) return;
      var diff = this.spells.length - 100;

      for (var i = 0; i < diff; i++) {
        this.spells[i].clearPreviousRender();
      }

      this.spells = this.spells.slice(diff);
    }
  }, {
    key: "frame",
    value: function frame() {
      this.trimSpells();
      this.spells.forEach(function (spell) {
        return spell.move();
      });
      this.currentSpell.move();

      if (this.typetest) {
        this.typetest.render();
      }
    }
  }, {
    key: "animate",
    value: function animate(rate) {
      var _this2 = this;

      // if (this.typetest) return;
      this.framerate = rate || this.framerate;
      this.timeout = setTimeout(function () {
        _this2.frame();

        _this2.animate();
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
/* harmony import */ var _sampletext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sampletext */ "./src/sampletext.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _typetest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typetest */ "./src/typetest.js");





document.addEventListener('DOMContentLoaded', function () {
  var root = document.getElementById('root');
  var input = document.getElementById('input');
  window.Spell = _spell__WEBPACK_IMPORTED_MODULE_1__["default"];
  var grid = new _grid__WEBPACK_IMPORTED_MODULE_0__["default"](root, input);
  grid.animate();
  window.grid = grid;
  window.sampleText = _sampletext__WEBPACK_IMPORTED_MODULE_2__["sampleText"];
  window.typetest = new _typetest__WEBPACK_IMPORTED_MODULE_4__["TypeTest"](grid);
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
  snake: {
    type: "snake"
  },
  type: {
    type: "typetest"
  },
  test: {
    type: "typetest"
  },
  circle: {
    type: "circle"
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
  purple: {
    type: "color",
    action: "#9d64e3"
  },
  orange: {
    type: "color",
    action: "#e67e39"
  },
  pink: {
    type: "color",
    action: "#f20aee"
  },
  black: {
    type: "color",
    action: "#222e2c"
  },
  red: {
    type: "color",
    action: "#de481b"
  },
  emoji: {
    type: "emoji"
  },
  hello: {
    type: "text",
    action: "world"
  },
  madeby: {
    type: "text",
    action: " simon debevoise"
  },
  foo: {
    type: "text",
    action: "bar"
  },
  explode: {
    type: "explode"
  } // help: { type: "text", action: " I can't" }

};
/* harmony default export */ __webpack_exports__["default"] = (keywords); // TODO: 
// rotate, snake, typetest, about, index,

/***/ }),

/***/ "./src/sampletext.js":
/*!***************************!*\
  !*** ./src/sampletext.js ***!
  \***************************/
/*! exports provided: sampleText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sampleText", function() { return sampleText; });
var top1000 = "the\nof\nto\nand\na\nin\nis\nit\nyou\nthat\nhe\nwas\nfor\non\nare\nwith\nas\nI\nhis\nthey\nbe\nat\none\nhave\nthis\nfrom\nor\nhad\nby\nnot\nword\nbut\nwhat\nsome\nwe\ncan\nout\nother\nwere\nall\nthere\nwhen\nup\nuse\nyour\nhow\nsaid\nan\neach\nshe\nwhich\ndo\ntheir\ntime\nif\nwill\nway\nabout\nmany\nthen\nthem\nwrite\nwould\nlike\nso\nthese\nher\nlong\nmake\nthing\nsee\nhim\ntwo\nhas\nlook\nmore\nday\ncould\ngo\ncome\ndid\nnumber\nsound\nno\nmost\npeople\nmy\nover\nknow\nwater\nthan\ncall\nfirst\nwho\nmay\ndown\nside\nbeen\nnow\nfind\nany\nnew\nwork\npart\ntake\nget\nplace\nmade\nlive\nwhere\nafter\nback\nlittle\nonly\nround\nman\nyear\ncame\nshow\nevery\ngood\nme\ngive\nour\nunder\nname\nvery\nthrough\njust\nform\nsentence\ngreat\nthink\nsay\nhelp\nlow\nline\ndiffer\nturn\ncause\nmuch\nmean\nbefore\nmove\nright\nboy\nold\ntoo\nsame\ntell\ndoes\nset\nthree\nwant\nair\nwell\nalso\nplay\nsmall\nend\nput\nhome\nread\nhand\nport\nlarge\nspell\nadd\neven\nland\nhere\nmust\nbig\nhigh\nsuch\nfollow\nact\nwhy\nask\nmen\nchange\nwent\nlight\nkind\noff\nneed\nhouse\npicture\ntry\nus\nagain\nanimal\npoint\nmother\nworld\nnear\nbuild\nself\nearth\nfather\nhead\nstand\nown\npage\nshould\ncountry\nfound\nanswer\nschool\ngrow\nstudy\nstill\nlearn\nplant\ncover\nfood\nsun\nfour\nbetween\nstate\nkeep\neye\nnever\nlast\nlet\nthought\ncity\ntree\ncross\nfarm\nhard\nstart\nmight\nstory\nsaw\nfar\nsea\ndraw\nleft\nlate\nrun\ndon't\nwhile\npress\nclose\nnight\nreal\nlife\nfew\nnorth\nopen\nseem\ntogether\nnext\nwhite\nchildren\nbegin\ngot\nwalk\nexample\nease\npaper\ngroup\nalways\nmusic\nthose\nboth\nmark\noften\nletter\nuntil\nmile\nriver\ncar\nfeet\ncare\nsecond\nbook\ncarry\ntook\nscience\neat\nroom\nfriend\nbegan\nidea\nfish\nmountain\nstop\nonce\nbase\nhear\nhorse\ncut\nsure\nwatch\ncolor\nface\nwood\nmain\nenough\nplain\ngirl\nusual\nyoung\nready\nabove\never\nred\nlist\nthough\nfeel\ntalk\nbird\nsoon\nbody\ndog\nfamily\ndirect\npose\nleave\nsong\nmeasure\ndoor\nproduct\nblack\nshort\nnumeral\nclass\nwind\nquestion\nhappen\ncomplete\nship\narea\nhalf\nrock\norder\nfire\nsouth\nproblem\npiece\ntold\nknew\npass\nsince\ntop\nwhole\nking\nspace\nheard\nbest\nhour\nbetter\ntrue\nduring\nhundred\nfive\nremember\nstep\nearly\nhold\nwest\nground\ninterest\nreach\nfast\nverb\nsing\nlisten\nsix\ntable\ntravel\nless\nmorning\nten\nsimple\nseveral\nvowel\ntoward\nwar\nlay\nagainst\npattern\nslow\ncenter\nlove\nperson\nmoney\nserve\nappear\nroad\nmap\nrain\nrule\ngovern\npull\ncold\nnotice\nvoice\nunit\npower\ntown\nfine\ncertain\nfly\nfall\nlead\ncry\ndark\nmachine\nnote\nwait\nplan\nfigure\nstar\nbox\nnoun\nfield\nrest\ncorrect\nable\npound\ndone\nbeauty\ndrive\nstood\ncontain\nfront\nteach\nweek\nfinal\ngave\ngreen\noh\nquick\ndevelop\nocean\nwarm\nfree\nminute\nstrong\nspecial\nmind\nbehind\nclear\ntail\nproduce\nfact\nstreet\ninch\nmultiply\nnothing\ncourse\nstay\nwheel\nfull\nforce\nblue\nobject\ndecide\nsurface\ndeep\nmoon\nisland\nfoot\nsystem\nbusy\ntest\nrecord\nboat\ncommon\ngold\npossible\nplane\nstead\ndry\nwonder\nlaugh\nthousand\nago\nran\ncheck\ngame\nshape\nequate\nhot\nmiss\nbrought\nheat\nsnow\ntire\nbring\nyes\ndistant\nfill\neast\npaint\nlanguage\namong\ngrand\nball\nyet\nwave\ndrop\nheart\nam\npresent\nheavy\ndance\nengine\nposition\narm\nwide\nsail\nmaterial\nsize\nvary\nsettle\nspeak\nweight\ngeneral\nice\nmatter\ncircle\npair\ninclude\ndivide\nsyllable\nfelt\nperhaps\npick\nsudden\ncount\nsquare\nreason\nlength\nrepresent\nart\nsubject\nregion\nenergy\nhunt\nprobable\nbed\nbrother\negg\nride\ncell\nbelieve\nfraction\nforest\nsit\nrace\nwindow\nstore\nsummer\ntrain\nsleep\nprove\nlone\nleg\nexercise\nwall\ncatch\nmount\nwish\nsky\nboard\njoy\nwinter\nsat\nwritten\nwild\ninstrument\nkept\nglass\ngrass\ncow\njob\nedge\nsign\nvisit\npast\nsoft\nfun\nbright\ngas\nweather\nmonth\nmillion\nbear\nfinish\nhappy\nhope\nflower\nclothe\nstrange\ngone\njump\nbaby\neight\nvillage\nmeet\nroot\nbuy\nraise\nsolve\nmetal\nwhether\npush\nseven\nparagraph\nthird\nshall\nheld\nhair\ndescribe\ncook\nfloor\neither\nresult\nburn\nhill\nsafe\ncat\ncentury\nconsider\ntype\nlaw\nbit\ncoast\ncopy\nphrase\nsilent\ntall\nsand\nsoil\nroll\ntemperature\nfinger\nindustry\nvalue\nfight\nlie\nbeat\nexcite\nnatural\nview\nsense\near\nelse\nquite\nbroke\ncase\nmiddle\nkill\nson\nlake\nmoment\nscale\nloud\nspring\nobserve\nchild\nstraight\nconsonant\nnation\ndictionary\nmilk\nspeed\nmethod\norgan\npay\nage\nsection\ndress\ncloud\nsurprise\nquiet\nstone\ntiny\nclimb\ncool\ndesign\npoor\nlot\nexperiment\nbottom\nkey\niron\nsingle\nstick\nflat\ntwenty\nskin\nsmile\ncrease\nhole\ntrade\nmelody\ntrip\noffice\nreceive\nrow\nmouth\nexact\nsymbol\ndie\nleast\ntrouble\nshout\nexcept\nwrote\nseed\ntone\njoin\nsuggest\nclean\nbreak\nlady\nyard\nrise\nbad\nblow\noil\nblood\ntouch\ngrew\ncent\nmix\nteam\nwire\ncost\nlost\nbrown\nwear\ngarden\nequal\nsent\nchoose\nfell\nfit\nflow\nfair\nbank\ncollect\nsave\ncontrol\ndecimal\ngentle\nwoman\ncaptain\npractice\nseparate\ndifficult\ndoctor\nplease\nprotect\nnoon\nwhose\nlocate\nring\ncharacter\ninsect\ncaught\nperiod\nindicate\nradio\nspoke\natom\nhuman\nhistory\neffect\nelectric\nexpect\ncrop\nmodern\nelement\nhit\nstudent\ncorner\nparty\nsupply\nbone\nrail\nimagine\nprovide\nagree\nthus\ncapital\nwon't\nchair\ndanger\nfruit\nrich\nthick\nsoldier\nprocess\noperate\nguess\nnecessary\nsharp\nwing\ncreate\nneighbor\nwash\nbat\nrather\ncrowd\ncorn\ncompare\npoem\nstring\nbell\ndepend\nmeat\nrub\ntube\nfamous\ndollar\nstream\nfear\nsight\nthin\ntriangle\nplanet\nhurry\nchief\ncolony\nclock\nmine\ntie\nenter\nmajor\nfresh\nsearch\nsend\nyellow\ngun\nallow\nprint\ndead\nspot\ndesert\nsuit\ncurrent\nlift\nrose\ncontinue\nblock\nchart\nhat\nsell\nsuccess\ncompany\nsubtract\nevent\nparticular\ndeal\nswim\nterm\nopposite\nwife\nshoe\nshoulder\nspread\narrange\ncamp\ninvent\ncotton\nborn\ndetermine\nquart\nnine\ntruck\nnoise\nlevel\nchance\ngather\nshop\nstretch\nthrow\nshine\nproperty\ncolumn\nmolecule\nselect\nwrong\ngray\nrepeat\nrequire\nbroad\nprepare\nsalt\nnose\nplural\nanger\nclaim\ncontinent\noxygen\nsugar\ndeath\npretty\nskill\nwomen\nseason\nsolution\nmagnet\nsilver\nthank\nbranch\nmatch\nsuffix\nespecially\nfig\nafraid\nhuge\nsister\nsteel\ndiscuss\nforward\nsimilar\nguide\nexperience\nscore\napple\nbought\nled\npitch\ncoat\nmass\ncard\nband\nrope\nslip\nwin\ndream\nevening\ncondition\nfeed\ntool\ntotal\nbasic\nsmell\nvalley\nnor\ndouble\nseat\narrive\nmaster\ntrack\nparent\nshore\ndivision\nsheet\nsubstance\nfavor\nconnect\npost\nspend\nchord\nfat\nglad\noriginal\nshare\nstation\ndad\nbread\ncharge\nproper\nbar\noffer\nsegment\nslave\nduck\ninstant\nmarket\ndegree\npopulate\nchick\ndear\nenemy\nreply\ndrink\noccur\nsupport\nspeech\nnature\nrange\nsteam\nmotion\npath\nliquid\nlog\nmeant\nquotient\nteeth\nshell\nneck";
var whitespace = /[\r\n]+/;
var words = top1000.split(whitespace);
var validwords = words.filter(function (word) {
  return word.length > 2;
});
var sampleText = function sampleText() {
  var range = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : validwords.length;
  return validwords.slice(0, range);
};

/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/*! exports provided: Snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Snake", function() { return Snake; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _spell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spell */ "./src/spell.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Snake =
/*#__PURE__*/
function () {
  function Snake(grid, position) {
    _classCallCheck(this, Snake);

    this.moves = [0, 0];
    this.positions = [position];
    this.renderedElements = [];
    this.grid = grid;
    var head = document.createElement("span");
    head.className = 'snakehead';
    head.innerText = "🐍";
    this.body = [head]; // [{ element: <span>, pos: }]

    var inst = new _spell__WEBPACK_IMPORTED_MODULE_1__["default"](this.grid);
    inst.storedText = 'arrow keys to move';
    inst.moves = [0, 1];
    inst.cast(['green', 'blue']);
    this.inst = inst;
    this.grid.spells.push(inst);
  }

  _createClass(Snake, [{
    key: "isEmpty",
    value: function isEmpty(pos) {
      var res = !this.grid.getElement(pos).firstChild;
      return res;
    }
  }, {
    key: "getPoints",
    value: function getPoints() {
      return this.positions.length - 1;
    }
  }, {
    key: "handleLoss",
    value: function handleLoss() {
      this.clearPreviousRender();
      var loserSpell = this.inst;
      loserSpell.cast(['orange', 'fun', 'big', 'big', 'big']);
      var score = this.body.length - 1;
      var points = score === 1 ? ' point' : ' points';
      loserSpell.storedText = 'Game over: ' + (this.body.length - 1) + points;
      this.grid.currentSpell = new _spell__WEBPACK_IMPORTED_MODULE_1__["default"](this.grid);
    }
  }, {
    key: "clearPreviousRender",
    value: function clearPreviousRender() {
      this.renderedElements.forEach(function (ele) {
        return ele.remove();
      });
      this.renderedElements = [];
    }
  }, {
    key: "outOfBounds",
    value: function outOfBounds(pos) {
      return pos[0] >= this.grid.height || pos[0] < 0 || pos[1] >= this.grid.width || pos[1] < 0;
    }
  }, {
    key: "move",
    value: function move() {
      if (!this.moves[0] && !this.moves[1]) {
        this.render();
        return;
      }

      var nextPosition = Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCoordinates"])(this.positions[0], this.moves, this.grid);

      if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["includesCoordinates"])(this.positions, nextPosition) || this.outOfBounds(nextPosition)) {
        this.handleLoss();
        return;
      } else if (!this.isEmpty(nextPosition)) {
        this.positions.unshift(nextPosition);
        this.eat(nextPosition);
      } else {
        this.positions.unshift(nextPosition);
        this.positions.pop();
      }

      this.render();
    }
  }, {
    key: "receiveInput",
    value: function receiveInput(delta) {
      var combinedDirs = Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCoordinates"])(delta, this.moves);
      var oppositeDir = combinedDirs[0] === 0 && combinedDirs[1] === 0;

      if (this.positions.length === 1 || !oppositeDir) {
        this.moves = delta;
      }
    }
  }, {
    key: "eat",
    value: function eat(pos) {
      var snack = this.grid.getElement(pos).firstChild;
      this.body.push(snack);
    }
  }, {
    key: "generateRandomSpell",
    value: function generateRandomSpell() {
      var utilSpell = new _spell__WEBPACK_IMPORTED_MODULE_1__["default"](this.grid);
      utilSpell.generateRandomSpell();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      this.clearPreviousRender();
      this.positions.forEach(function (pos, i) {
        var element = _this.grid.getElement(pos);

        var child = _this.body[i];
        child.classList.add('snake');
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["replaceChildren"])(element, child);

        _this.renderedElements.push(child);
      });
    }
  }]);

  return Snake;
}();

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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
    this.rotate = null;
    this.classArr = [];
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
      var notStored = ['all', 'clear', 'spell', 'snake', 'test', 'explode'];
      keywords.forEach(function (kw) {
        _this.applyKeyword(kw);

        if (!notStored.includes(kw)) _this.appliedKeywords.push(kw);
      });
    }
  }, {
    key: "applyKeyword",
    value: function applyKeyword(kw) {
      var _this2 = this;

      if (!this.keywordIndex[kw]) return;
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

        case 'rotate':
          this.rotate = this.rotate ? null : 'rotate';
          break;

        case 'font':
          this.emoji = false;
          this.font = action;
          break;

        case 'snake':
          this.grid.framerate = 150;
          this.grid.playSnake();
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

        case 'text':
          this.storedText += action;
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

          break;

        case 'circle':
          this.classArr.push('circle');
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

        case 'typetest':
          this.grid.playTypetest();
          break;

        case 'explode':
          var delta;

          if (this.moves[0] === 0 && this.moves[1] === 0) {
            delta = [0, 1];
          } else {
            delta = this.moves;
          }

          var pos = this.currentPos;

          for (var i = 0; i < this.storedText.length; i++) {
            var char = this.storedText[i];
            var spell = new Spell(this.grid);
            spell.cast(this.appliedKeywords);
            spell.currentPos = pos;
            spell.exploded = true;
            var dirs = ['left', 'up', 'right', 'down'];
            var appliedDirs = [];
            var firstDirIdx = Math.floor(i % 8 / 2);
            appliedDirs.push(dirs[firstDirIdx]);
            if (i % 2 === 1) appliedDirs.push(dirs[(firstDirIdx + 1) % 4]);
            spell.cast(appliedDirs);
            spell.storedText = char;
            this.grid.spells.push(spell);
            pos = _util__WEBPACK_IMPORTED_MODULE_1__["addCoordinates"](pos, delta);
          }

          this.storedText = "";
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
      return this.colors[0];
    }
  }, {
    key: "generateRandomSpell",
    value: function generateRandomSpell() {
      var keywords = Object.keys(this.keywordIndex);
      var appliedKeywords = '';

      for (var i = 0; i < 4; i++) {
        var randIdx = Math.floor(Math.random() * (keywords.length - 6)) + 6;
        appliedKeywords += keywords[randIdx];
      }

      var spell = new Spell(this.grid);
      spell.receive(appliedKeywords);
      this.grid.spells.push(spell);
      return spell;
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
        var _span$classList;

        var letter = this.emoji ? _util__WEBPACK_IMPORTED_MODULE_1__["toEmoji"](text[i]) : text[i];
        var span = document.createElement('span');
        span.textContent = letter.toUpperCase();

        (_span$classList = span.classList).add.apply(_span$classList, [this.font, this.rotate, 'active'].concat(_toConsumableArray(this.classArr)));

        span.style.fontSize = this.size + 'px';
        span.style.backgroundColor = this.shuffleColors();

        if (this.colors.length > 0) {
          span.style.color = 'white';
        } else if (this.exploded) span.style.color = "#de481b";

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

/***/ "./src/typetest.js":
/*!*************************!*\
  !*** ./src/typetest.js ***!
  \*************************/
/*! exports provided: TypeTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeTest", function() { return TypeTest; });
/* harmony import */ var _sampletext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sampletext */ "./src/sampletext.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var TypeTest =
/*#__PURE__*/
function () {
  function TypeTest(grid) {
    _classCallCheck(this, TypeTest);

    this.grid = grid;
    this.width = Math.floor(this.grid.width * 0.7); // this.height = Math.floor(this.grid.height * 0.8); 

    this.pos = this.calculatePos();
    this.userWords = [];
    this.currentWord = 0;
    this.badkeystrokes = 0;
    this.renderedWordBegin = 0;
    this.renderedWordEnd = 0;
    this.renderedElements = [];
    this.numRows = 3;
    this.currentTime;
    this.input = "";
    this.topWords = Object(_sampletext__WEBPACK_IMPORTED_MODULE_0__["sampleText"])();
    this.ensureUserWords();
  }

  _createClass(TypeTest, [{
    key: "over",
    value: function over() {
      this.clearPreviousRender();
      var loserSpell = new Spell(this.grid);
      loserSpell.cast(["big", "red", "yellow", "mono", "right", 'down', "big"]);
      loserSpell.storedText = this.calculateWPM() + ' WPM';
      this.grid.spells.push(loserSpell);
      this.grid.exitTypetest();
    }
  }, {
    key: "calculateWPM",
    value: function calculateWPM() {
      if (!this.currentTime) return 0;
      var correctKeystrokes = 0;

      for (var i = 0; i < this.currentWord; i++) {
        var word = this.userWords[i];

        if (!word.mistyped) {
          correctKeystrokes += word.word.length + 1;
        }
      }

      return Math.floor(correctKeystrokes / 5);
    }
  }, {
    key: "clearPreviousRender",
    value: function clearPreviousRender() {
      this.renderedElements.forEach(function (ele) {
        return ele.remove();
      });
    }
  }, {
    key: "timesUp",
    value: function timesUp() {
      if (!this.currentTime) return false;
      var now = new Date();
      var timeLeft = 60 - Math.floor((now.getTime() - this.currentTime.getTime()) / 1000);
      return timeLeft < 0;
    }
  }, {
    key: "render",
    value: function render() {
      this.clearPreviousRender();

      if (this.timesUp()) {
        this.over();
        return;
      }

      this.renderPadding();
      this.renderWordDisplay();
      this.renderInput();
    }
  }, {
    key: "renderPadding",
    value: function renderPadding() {
      var numRows = this.numRows + 7;
      var top = this.pos[0] - 2;
      var left = this.pos[1] - 2;
      var width = this.width + 4;

      for (var i = 0; i < numRows; i++) {
        for (var j = 0; j < width; j++) {
          var child = document.createElement('span');
          var el = this.grid.getElement([i + top, j + left]);
          child.className = 'test-padding';
          this.renderedElements.push(child);
          Object(_util__WEBPACK_IMPORTED_MODULE_1__["replaceChildren"])(el, child);
        }
      }
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var top = this.numRows + this.pos[0] + 2;
      var left = this.pos[1];
      var inputwidth = this.width - 6;
      var timeStart = this.width;
      var time = this.calculateTime();

      for (var i = 0; i < inputwidth; i++) {
        var child = document.createElement("span");
        var el = this.grid.getElement([top, i + left]);
        child.classList.add("test-input", 'typetest');
        this.renderedElements.push(child);
        if (this.input[i]) child.innerText = this.input[i];
        if (i === this.input.length) child.classList.add('current');
        Object(_util__WEBPACK_IMPORTED_MODULE_1__["replaceChildren"])(el, child);
        timeStart = i + left + 3;
      }

      for (var _i = 0; _i < time.length; _i++) {
        var _child = document.createElement("span");

        var _el = this.grid.getElement([top, _i + timeStart]);

        _child.classList.add("test-time", "typetest");

        this.renderedElements.push(_child);
        _child.innerText = time[_i];
        Object(_util__WEBPACK_IMPORTED_MODULE_1__["replaceChildren"])(_el, _child);
      }
    }
  }, {
    key: "renderWordDisplay",
    value: function renderWordDisplay() {
      var wordsRendered = 0;
      var firstColLength = 0;

      for (var row = 0; row < this.numRows; row += 2) {
        var col = 0;

        while (col <= this.width) {
          var wordIdx = this.renderedWordBegin + wordsRendered;
          var renderedWord = this.userWords[wordIdx];
          if (col + renderedWord.word.length > this.width) break;
          var renderCoord = [row, col];
          this.renderWord(wordIdx, renderCoord);
          wordsRendered += 1;
          col += renderedWord.word.length + 1;
        }

        if (row === 0) firstColLength = wordsRendered;
      }

      this.renderedWordEnd = this.renderedWordBegin + firstColLength;

      if (this.currentWord >= this.renderedWordEnd) {
        this.renderedWordBegin = this.currentWord;
      }
    }
  }, {
    key: "calculateTime",
    value: function calculateTime() {
      if (!this.currentTime) return '1:00';
      var now = new Date();
      var timeLeft = 60 - Math.floor((now.getTime() - this.currentTime.getTime()) / 1000);

      if (timeLeft < 0) {
        return '0:00';
      }

      var min = Math.floor(timeLeft / 60);
      var sec = timeLeft % 60;
      sec = sec < 10 ? '0' + sec : sec.toString();
      var formattedTime = min + ':' + sec;
      return formattedTime;
    }
  }, {
    key: "renderWord",
    value: function renderWord(idx, pos) {
      var typeStart = Object(_util__WEBPACK_IMPORTED_MODULE_1__["addCoordinates"])(this.pos, [0, 0]);
      var wordBegin = Object(_util__WEBPACK_IMPORTED_MODULE_1__["addCoordinates"])(typeStart, pos);
      var word = this.userWords[idx];
      var status = 'none';

      if (word.mistyped) {
        status = 'red';
      } else if (idx < this.currentWord) {
        status = 'success';
      } else if (idx === this.currentWord) {
        var matches = this.userWords[this.currentWord].word === this.input;
        status = matches ? 'success' : 'current';
      }

      for (var i = 0; i < word.word.length; i++) {
        var eleCoord = Object(_util__WEBPACK_IMPORTED_MODULE_1__["addCoordinates"])(wordBegin, [0, i]);
        var ele = this.grid.getElement(eleCoord);
        var letter = document.createElement("span");
        letter.innerHTML = word.word[i];
        letter.classList.add("typetest", status);
        this.renderedElements.push(letter);
        Object(_util__WEBPACK_IMPORTED_MODULE_1__["replaceChildren"])(ele, letter);
      }
    }
  }, {
    key: "nextWord",
    value: function nextWord() {
      if (this.input.length === 0) return;
      this.ensureUserWords();
      var currentWord = this.userWords[this.currentWord];
      currentWord.mistyped = this.input !== currentWord.word;
      this.input = '';
      this.currentWord++;
    }
  }, {
    key: "validateCurrentWord",
    value: function validateCurrentWord() {
      var currentWord = this.userWords[this.currentWord];
      var inputRE = new RegExp('^' + this.input);
      currentWord.mistyped = !inputRE.test(currentWord.word);
    }
  }, {
    key: "ensureUserWords",
    value: function ensureUserWords() {
      if (this.userWords.length < 50 + this.currentWord) {
        for (var i = 0; i <= 50; i++) {
          var randIdx = Math.floor(Math.random() * this.topWords.length);
          var randWord = this.topWords[randIdx];
          var word = {
            word: randWord,
            mistyped: false
          };
          this.userWords.push(word);
        }
      }
    }
  }, {
    key: "calculatePos",
    value: function calculatePos() {
      var x = 5;
      var y = Math.ceil(0.3 * this.grid.width / 2);
      return [x, y];
    }
  }, {
    key: "receive",
    value: function receive(e) {
      //determines 
      if ([13, 32].includes(e.keyCode)) {
        this.nextWord();
      } else if (e.keyCode >= 65 && e.keyCode < 91 || e.keyCode === 222) {
        if (!this.currentTime) this.currentTime = new Date();
        this.input += e.key;
        this.validateCurrentWord();
      } else if (e.keyCode === 27) {
        this.grid.exitTypetest();
        return;
      } else if (e.keyCode === 8) {
        if (this.input) this.input = this.input.slice(0, this.input.length - 1);
        this.validateCurrentWord();
      }

      this.render();
    }
  }]);

  return TypeTest;
}();

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: addCoordinates, addBoundedCoordinates, replaceChildren, equalCoordinates, includesCoordinates, toEmoji */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCoordinates", function() { return addCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBoundedCoordinates", function() { return addBoundedCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceChildren", function() { return replaceChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalCoordinates", function() { return equalCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includesCoordinates", function() { return includesCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toEmoji", function() { return toEmoji; });
function addCoordinates(a1, a2) {
  return [a1[0] + a2[0], a1[1] + a2[1]];
}
function addBoundedCoordinates(a1, a2, grid) {
  var x = a1[0] + a2[0];
  var y = a1[1] + a2[1];
  x = x % grid.height;
  y = y % grid.width;
  if (x < 0) x += grid.height;
  if (y < 0) y += grid.width;
  return [x, y];
}
function replaceChildren(parent, child) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  parent.appendChild(child);
}
function equalCoordinates(a1, a2) {
  return a1[0] === a2[0] && a1[1] === a2[1];
}
function includesCoordinates(coordList, coord) {
  var res = false;
  coordList.forEach(function (xy) {
    if (equalCoordinates(xy, coord)) {
      res = true;
    }
  });
  return res;
}
function toEmoji(str) {
  str = str.toLowerCase();
  var EMOJIS = ["😠", "😳", "👨‍👨‍👦", "🍆", "🐵", "🐱", "💩", "🌞", "🌈", "🌊", "🗽", "🛸", "👨‍👨‍👦", "🥓", "👌", "🏞", "🎢", "🚖", "🍩", "🍔", "🇮🇷", "🤥", "👂", "☢", "🈵", "🤣"];
  var code = str.charCodeAt(0) - 97;
  return EMOJIS[code];
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9rZXl3b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FtcGxldGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc25ha2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwZWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiXSwibmFtZXMiOlsiR3JpZCIsInJvb3QiLCJpbnB1dCIsIkNFTExTSVpFIiwiY3Vyc29yUG9zIiwiaGVpZ2h0IiwiTWF0aCIsImNlaWwiLCJvZmZzZXRIZWlnaHQiLCJ3aWR0aCIsImZsb29yIiwib2Zmc2V0V2lkdGgiLCJzcGVsbHMiLCJjdXJyZW50U3BlbGwiLCJTcGVsbCIsImZyYW1lcmF0ZSIsInR5cGV0ZXN0IiwiZ3JpZCIsInBvcHVsYXRlIiwicGxheSIsImtleXdvcmRzTGlzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsb2dvIiwiY2FzdE5ld1NwZWxsIiwib25jbGljayIsIm5leHRTcGVsbCIsInB1c2giLCJnZW5lcmF0ZVJhbmRvbVNwZWxsIiwiT2JqZWN0Iiwia2V5cyIsImtleXdvcmRzIiwiZm9yRWFjaCIsImt3IiwibGkiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwicmVjZWl2ZSIsImFwcGVuZENoaWxkIiwicmVzaXplR3JpZCIsImJpbmQiLCJyZWNlaXZlSW5wdXQiLCJyZWNlaXZlQ2xpY2siLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInBvcyIsInRhcmdldCIsImRhdGFzZXQiLCJ3aW5kb3ciLCJvbnJlc2l6ZSIsImkiLCJyb3dBcnIiLCJyb3ciLCJjbGFzc05hbWUiLCJqIiwiY2VsbCIsImZpcnN0Q2hpbGQiLCJyZW1vdmUiLCJjbGVhckdyaWRFbGVtZW50cyIsInNuYWtlTW9kZSIsImNsZWFyUHJldmlvdXNSZW5kZXIiLCJzdG9yZWRUZXh0IiwiYWN0aXZlVGV4dCIsInByZXZTcGVsbCIsInJlbmRlciIsImNvb3JkaW5hdGVzIiwieCIsInkiLCJTbmFrZSIsImxhc3RTcGVsbCIsImNlbnRlclBvcyIsImluc3QiLCJjYXN0IiwiY3VycmVudFBvcyIsIlR5cGVUZXN0IiwicG9zQXJyIiwic3BsaXQiLCJtYXAiLCJwYXJzZUludCIsImtleWNvZGUiLCJkZWx0YSIsIlV0aWwiLCJyYW5kb20iLCJrZXlDb2RlIiwia2V5IiwiZGVsZXRlQ2hhcmFjdGVyIiwidXBkYXRlQ3VycmVudFBvc2l0aW9uIiwibGVuZ3RoIiwiZGlmZiIsInNsaWNlIiwidHJpbVNwZWxscyIsInNwZWxsIiwibW92ZSIsInJhdGUiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImZyYW1lIiwiYW5pbWF0ZSIsInNhbXBsZVRleHQiLCJhbGwiLCJ0eXBlIiwiY2xlYXIiLCJzbmFrZSIsInRlc3QiLCJjaXJjbGUiLCJmYXN0IiwiYWN0aW9uIiwic2xvdyIsImJpZyIsImxpdHRsZSIsInVwIiwiZG93biIsImxlZnQiLCJyaWdodCIsImNvbWljIiwic2FucyIsImZ1biIsIm1vbm8iLCJzZXJpZiIsImJsdWUiLCJncmVlbiIsInllbGxvdyIsInB1cnBsZSIsIm9yYW5nZSIsInBpbmsiLCJibGFjayIsInJlZCIsImVtb2ppIiwiaGVsbG8iLCJtYWRlYnkiLCJmb28iLCJleHBsb2RlIiwidG9wMTAwMCIsIndoaXRlc3BhY2UiLCJ3b3JkcyIsInZhbGlkd29yZHMiLCJmaWx0ZXIiLCJ3b3JkIiwicmFuZ2UiLCJwb3NpdGlvbiIsIm1vdmVzIiwicG9zaXRpb25zIiwicmVuZGVyZWRFbGVtZW50cyIsImhlYWQiLCJib2R5IiwicmVzIiwiZ2V0RWxlbWVudCIsImxvc2VyU3BlbGwiLCJzY29yZSIsInBvaW50cyIsImVsZSIsIm5leHRQb3NpdGlvbiIsImFkZENvb3JkaW5hdGVzIiwiaW5jbHVkZXNDb29yZGluYXRlcyIsIm91dE9mQm91bmRzIiwiaGFuZGxlTG9zcyIsImlzRW1wdHkiLCJ1bnNoaWZ0IiwiZWF0IiwicG9wIiwiY29tYmluZWREaXJzIiwib3Bwb3NpdGVEaXIiLCJzbmFjayIsInV0aWxTcGVsbCIsImVsZW1lbnQiLCJjaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsInJlcGxhY2VDaGlsZHJlbiIsInBlckZyYW1lS2V5d29yZHMiLCJhcHBsaWVkS2V5d29yZHMiLCJyYW5kb21Qb3NpdGlvbiIsImtleXdvcmRJbmRleCIsInJvdGF0ZSIsImNsYXNzQXJyIiwiY29sb3JzIiwiZm9udCIsInNpemUiLCJ0b0xvd2VyQ2FzZSIsImV4dHJhY3RLZXl3b3JkcyIsIkFycmF5Iiwibm90U3RvcmVkIiwiYXBwbHlLZXl3b3JkIiwiaW5jbHVkZXMiLCJwbGF5U25ha2UiLCJuZXdmcHMiLCJuZXdzaXplIiwicGxheVR5cGV0ZXN0IiwiY2hhciIsImV4cGxvZGVkIiwiZGlycyIsImFwcGxpZWREaXJzIiwiZmlyc3REaXJJZHgiLCJjb250YWluc0tleXdvcmQiLCJzdWJzdHIiLCJzdHIiLCJrd3MiLCJzaGlmdCIsInJhbmRJZHgiLCJ0ZXh0Iiwic2lnbiIsImxldHRlciIsInNwYW4iLCJ0ZXh0Q29udGVudCIsInRvVXBwZXJDYXNlIiwic3R5bGUiLCJmb250U2l6ZSIsImJhY2tncm91bmRDb2xvciIsInNodWZmbGVDb2xvcnMiLCJjb2xvciIsImNhbGN1bGF0ZVBvcyIsInVzZXJXb3JkcyIsImN1cnJlbnRXb3JkIiwiYmFka2V5c3Ryb2tlcyIsInJlbmRlcmVkV29yZEJlZ2luIiwicmVuZGVyZWRXb3JkRW5kIiwibnVtUm93cyIsImN1cnJlbnRUaW1lIiwidG9wV29yZHMiLCJlbnN1cmVVc2VyV29yZHMiLCJjYWxjdWxhdGVXUE0iLCJleGl0VHlwZXRlc3QiLCJjb3JyZWN0S2V5c3Ryb2tlcyIsIm1pc3R5cGVkIiwibm93IiwiRGF0ZSIsInRpbWVMZWZ0IiwiZ2V0VGltZSIsInRpbWVzVXAiLCJvdmVyIiwicmVuZGVyUGFkZGluZyIsInJlbmRlcldvcmREaXNwbGF5IiwicmVuZGVySW5wdXQiLCJ0b3AiLCJlbCIsImlucHV0d2lkdGgiLCJ0aW1lU3RhcnQiLCJ0aW1lIiwiY2FsY3VsYXRlVGltZSIsIndvcmRzUmVuZGVyZWQiLCJmaXJzdENvbExlbmd0aCIsImNvbCIsIndvcmRJZHgiLCJyZW5kZXJlZFdvcmQiLCJyZW5kZXJDb29yZCIsInJlbmRlcldvcmQiLCJtaW4iLCJzZWMiLCJ0b1N0cmluZyIsImZvcm1hdHRlZFRpbWUiLCJpZHgiLCJ0eXBlU3RhcnQiLCJ3b3JkQmVnaW4iLCJzdGF0dXMiLCJtYXRjaGVzIiwiZWxlQ29vcmQiLCJpbm5lckhUTUwiLCJpbnB1dFJFIiwiUmVnRXhwIiwicmFuZFdvcmQiLCJuZXh0V29yZCIsInZhbGlkYXRlQ3VycmVudFdvcmQiLCJhMSIsImEyIiwiYWRkQm91bmRlZENvb3JkaW5hdGVzIiwicGFyZW50IiwicmVtb3ZlQ2hpbGQiLCJlcXVhbENvb3JkaW5hdGVzIiwiY29vcmRMaXN0IiwiY29vcmQiLCJ4eSIsInRvRW1vamkiLCJFTU9KSVMiLCJjb2RlIiwiY2hhckNvZGVBdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1C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QUYsS0FBVUMsRUFBRSxDQUFDLENBQUQsQ0FBdEM7QUFDSDtBQUVNLFNBQVM5RyxtQkFBVCxDQUE2Qm1ILFNBQTdCLEVBQXdDQyxLQUF4QyxFQUErQztBQUNsRCxNQUFJNUgsR0FBRyxHQUFHLEtBQVY7QUFFQTJILFdBQVMsQ0FBQzVPLE9BQVYsQ0FBa0IsVUFBQThPLEVBQUUsRUFBSTtBQUNwQixRQUFJSCxnQkFBZ0IsQ0FBQ0csRUFBRCxFQUFLRCxLQUFMLENBQXBCLEVBQWlDO0FBQzdCNUgsU0FBRyxHQUFHLElBQU47QUFDSDtBQUNKLEdBSkQ7QUFNQSxTQUFPQSxHQUFQO0FBQ0g7QUFFTSxTQUFTOEgsT0FBVCxDQUFpQjVFLEdBQWpCLEVBQXNCO0FBQ3pCQSxLQUFHLEdBQUdBLEdBQUcsQ0FBQ2pCLFdBQUosRUFBTjtBQUVBLE1BQUk4RixNQUFNLEdBQUcsQ0FDWCxJQURXLEVBRVgsSUFGVyxFQUdYLFVBSFcsRUFJWCxJQUpXLEVBS1gsSUFMVyxFQU1YLElBTlcsRUFPWCxJQVBXLEVBUVgsSUFSVyxFQVNYLElBVFcsRUFVWCxJQVZXLEVBV1gsSUFYVyxFQVlYLElBWlcsRUFhWCxVQWJXLEVBY1gsSUFkVyxFQWVYLElBZlcsRUFnQlgsSUFoQlcsRUFpQlgsSUFqQlcsRUFrQlgsSUFsQlcsRUFtQlgsSUFuQlcsRUFvQlgsSUFwQlcsRUFxQlgsTUFyQlcsRUFzQlgsSUF0QlcsRUF1QlgsSUF2QlcsRUF3QlgsR0F4QlcsRUF5QlgsSUF6QlcsRUEwQlgsSUExQlcsQ0FBYjtBQThCQSxNQUFJQyxJQUFJLEdBQUc5RSxHQUFHLENBQUMrRSxVQUFKLENBQWUsQ0FBZixJQUFvQixFQUEvQjtBQUNBLFNBQU9GLE1BQU0sQ0FBQ0MsSUFBRCxDQUFiO0FBQ0gsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgU3BlbGwgZnJvbSAnLi9zcGVsbCc7XG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4vdXRpbCdcbmltcG9ydCB7IFNuYWtlIH0gZnJvbSAnLi9zbmFrZSc7XG5pbXBvcnQga2V5d29yZHMgZnJvbSBcIi4va2V5d29yZHNcIjtcbmltcG9ydCB7IFR5cGVUZXN0IH0gZnJvbSAnLi90eXBldGVzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWQge1xuICAgIGNvbnN0cnVjdG9yKHJvb3QsIGlucHV0KSB7XG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuQ0VMTFNJWkUgPSAyNTtcbiAgICAgICAgdGhpcy5jdXJzb3JQb3MgPSBbMCwwXTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLmNlaWwocm9vdC5vZmZzZXRIZWlnaHQgLyB0aGlzLkNFTExTSVpFKSAtIDI7XG4gICAgICAgIHRoaXMud2lkdGggPSBNYXRoLmZsb29yKHJvb3Qub2Zmc2V0V2lkdGggLyB0aGlzLkNFTExTSVpFKTtcbiAgICAgICAgdGhpcy5zcGVsbHMgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwgPSBuZXcgU3BlbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZnJhbWVyYXRlID0gMjAwO1xuXG4gICAgICAgIHRoaXMudHlwZXRlc3QgPSBudWxsO1xuICAgICAgICB0aGlzLmdyaWQgPSB0aGlzLnBvcHVsYXRlKCk7XG4gICAgICAgIHRoaXMucGxheSA9IHRydWU7XG5cbiAgICAgICAgbGV0IGtleXdvcmRzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia2V5d29yZHMtbGlzdFwiKTtcbiAgICAgICAgbGV0IGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nbycpO1xuICAgICAgICBsZXQgY2FzdE5ld1NwZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhc3QtbmV3LXNwZWxsJyk7XG4gICAgICAgIGNhc3ROZXdTcGVsbC5vbmNsaWNrID0gKCkgPT4gdGhpcy5uZXh0U3BlbGwoKTtcblxuICAgICAgICBsb2dvLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdyaWQucHVzaCh0aGlzLmN1cnJlbnRTcGVsbC5nZW5lcmF0ZVJhbmRvbVNwZWxsKCkpO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5rZXlzKGtleXdvcmRzKS5mb3JFYWNoKGt3ID0+IHtcbiAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgbGkuaW5uZXJUZXh0ID0ga3c7XG4gICAgICAgICAgbGkub25jbGljayA9ICgpID0+IHRoaXMuY3VycmVudFNwZWxsLnJlY2VpdmUoa3cpO1xuICAgICAgICAgIGtleXdvcmRzTGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVzaXplR3JpZCA9IHRoaXMucmVzaXplR3JpZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlY2VpdmVJbnB1dCA9IHRoaXMucmVjZWl2ZUlucHV0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVjZWl2ZUNsaWNrID0gdGhpcy5yZWNlaXZlQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLnJlY2VpdmVJbnB1dCk7XG5cbiAgICAgICAgdGhpcy5yb290LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcG9zIH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgICAgICAgICAgaWYgKHBvcykgdGhpcy5yZWNlaXZlQ2xpY2socG9zKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93Lm9ucmVzaXplID0gdGhpcy5yZXNpemVHcmlkO1xuICAgIH1cbiBcbiAgICBwb3B1bGF0ZSgpIHtcbiAgICAgICAgbGV0IGdyaWQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm93QXJyID0gW107XG4gICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICAgIHJvdy5jbGFzc05hbWUgPSAncm93JztcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy53aWR0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJ2NlbGwnO1xuICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5wb3MgPSBbaSwgal1cbiAgICAgICAgICAgICAgICByb3dBcnIucHVzaChjZWxsKTtcblxuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB0aGlzLnJvb3QuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgIGdyaWQucHVzaChyb3dBcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdyaWQ7XG4gICAgfVxuXG5cbiAgICBjbGVhckdyaWRFbGVtZW50cygpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMucm9vdC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2l6ZUdyaWQoKSB7XG4gICAgICAgIGxldCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcbiAgICAgICAgdGhpcy5jbGVhckdyaWRFbGVtZW50cygpO1xuICAgICAgICB0aGlzLmhlaWdodCA9IE1hdGguZmxvb3Iocm9vdC5vZmZzZXRIZWlnaHQgLyB0aGlzLkNFTExTSVpFKSAtIDE7XG4gICAgICAgIHRoaXMud2lkdGggPSBNYXRoLmZsb29yKHJvb3Qub2Zmc2V0V2lkdGggLyB0aGlzLkNFTExTSVpFKTtcbiAgICAgICAgdGhpcy5ncmlkID0gdGhpcy5wb3B1bGF0ZSgpO1xuICAgIH1cblxuICAgIG5leHRTcGVsbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc25ha2VNb2RlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWxsLmNsZWFyUHJldmlvdXNSZW5kZXIoKVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwgPSBuZXcgU3BlbGwoZ3JpZCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50U3BlbGwuc3RvcmVkVGV4dCB8fCB0aGlzLmN1cnJlbnRTcGVsbC5hY3RpdmVUZXh0KSB7XG4gICAgICAgICAgICB0aGlzLnNwZWxscy5wdXNoKHRoaXMuY3VycmVudFNwZWxsKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWxsID0gbmV3IFNwZWxsKGdyaWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHByZXZTcGVsbCA9IHRoaXMuY3VycmVudFNwZWxsO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwgPSBuZXcgU3BlbGwoZ3JpZCk7XG4gICAgICAgICAgICBwcmV2U3BlbGwucmVuZGVyKClcbiAgICAgICAgfSAgXG4gICAgfVxuXG4gICAgZ2V0RWxlbWVudChjb29yZGluYXRlcykge1xuICAgICAgICBsZXQgeCA9IGNvb3JkaW5hdGVzWzBdICUgdGhpcy5oZWlnaHQ7XG4gICAgICAgIGxldCB5ID0gY29vcmRpbmF0ZXNbMV0gJSB0aGlzLndpZHRoO1xuICAgICAgICBpZiAoeCA8IDApIHggKz0gdGhpcy5oZWlnaHQ7XG4gICAgICAgIGlmICh5IDwgMCkgeSArPSB0aGlzLndpZHRoO1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkW3hdW3ldO1xuICAgIH1cblxuXG4gICAgc25ha2VNb2RlKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuY3VycmVudFNwZWxsIGluc3RhbmNlb2YgU25ha2UpXG4gICAgfVxuXG4gICAgcGxheVNuYWtlKCkge1xuICAgICAgICBsZXQgbGFzdFNwZWxsID0gdGhpcy5jdXJyZW50U3BlbGw7XG4gICAgICAgIHRoaXMuc3BlbGxzLnB1c2gobGFzdFNwZWxsKTtcbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKHRoaXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcih0aGlzLndpZHRoIC8gMik7XG4gICAgICAgIFxuICAgICAgICBsZXQgY2VudGVyUG9zID0gW3gsIHldO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFNwZWxsID0gbmV3IFNuYWtlKHRoaXMsIGNlbnRlclBvcylcbiAgICB9XG5cbiAgICBwbGF5VHlwZXRlc3QoKSB7XG4gICAgICAgIC8vIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgICB0aGlzLnNwZWxscy5wdXNoKHRoaXMuY3VycmVudFNwZWxsKTtcbiAgICAgICAgbGV0IGluc3QgPSBuZXcgU3BlbGwodGhpcyk7XG4gICAgICAgIGluc3QuY2FzdChbXCJyaWdodFwiLCBcImdyZWVuXCJdKTtcbiAgICAgICAgaW5zdC5zdG9yZWRUZXh0ID0gXCJwcmVzcyBlc2MgdG8gZXhpdFwiO1xuICAgICAgICBpbnN0LmN1cnJlbnRQb3MgPSBbMSwgMV07XG4gICAgICAgIHRoaXMuY3VycmVudFNwZWxsID0gaW5zdDtcbiAgICAgICAgaWYgKHRoaXMudHlwZXRlc3QpIHRoaXMudHlwZXRlc3QuY2xlYXJQcmV2aW91c1JlbmRlcigpO1xuICAgICAgICB0aGlzLnR5cGV0ZXN0ID0gbmV3IFR5cGVUZXN0KHRoaXMpO1xuICAgICAgICB0aGlzLnR5cGV0ZXN0LnJlbmRlcigpO1xuICAgICAgICBcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50U3BlbGwgPSBudWxsO1xuICAgIH1cblxuICAgIGV4aXRUeXBldGVzdCgpIHtcbiAgICAgICAgaWYgKHRoaXMudHlwZXRlc3QpIHRoaXMudHlwZXRlc3QuY2xlYXJQcmV2aW91c1JlbmRlcigpO1xuXG4gICAgICAgIHRoaXMudHlwZXRlc3QgPSBudWxsO1xuICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbC5jbGVhclByZXZpb3VzUmVuZGVyKCk7XG4gICAgICAgIHRoaXMuY3VycmVudFNwZWxsID0gbmV3IFNwZWxsKHRoaXMpO1xuICAgIH1cblxuICAgIHJlY2VpdmVDbGljayhwb3MpIHtcbiAgICAgICAgaWYgKHRoaXMuc25ha2VNb2RlKCkpIHJldHVybjtcbiAgICAgICAgbGV0IHBvc0FyciA9IHBvcy5zcGxpdChcIixcIikubWFwKGkgPT4gcGFyc2VJbnQoaSkpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50U3BlbGwpIHRoaXMuY3VycmVudFNwZWxsLmN1cnJlbnRQb3MgPSBwb3NBcnI7XG4gICAgfVxuXG4gICAgdXBkYXRlQ3VycmVudFBvc2l0aW9uKGtleWNvZGUpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBkZWx0YTsgXG5cbiAgICAgICAgc3dpdGNoIChrZXljb2RlKSB7XG4gICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgIGRlbHRhID0gWzAsIC0xXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICBkZWx0YSA9IFstMSwgMF07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgZGVsdGEgPSBbMCwgMV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgZGVsdGEgPSBbMSwgMF07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICBpZiAodGhpcy5zbmFrZU1vZGUoKSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwucmVjZWl2ZUlucHV0KGRlbHRhKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB7IGN1cnJlbnRQb3MgfSA9IHRoaXMuY3VycmVudFNwZWxsO1xuICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbC5jdXJyZW50UG9zID0gVXRpbC5hZGRDb29yZGluYXRlcyhkZWx0YSwgY3VycmVudFBvcyk7XG4gICAgICAgIHRoaXMuY3VycmVudFNwZWxsLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHJhbmRvbVBvc2l0aW9uKCkge1xuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLndpZHRoKTtcblxuICAgICAgICByZXR1cm4gW3gseV07XG4gICAgfVxuXG4gICAgcmVjZWl2ZUlucHV0KGUpIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTcGVsbCkgdGhpcy5jdXJyZW50U3BlbGwuY2xlYXJQcmV2aW91c1JlbmRlcigpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwgPSBuZXcgU3BlbGwodGhpcyk7IFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZXRlc3QpIHtcbiAgICAgICAgICB0aGlzLnR5cGV0ZXN0LnJlY2VpdmUoZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAxMyB8fCBlLmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgICAgdGhpcy5uZXh0U3BlbGwoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPj0gNjUgJiYgZS5rZXlDb2RlIDwgOTEpIHtcbiAgICAgICAgICBpZiAodGhpcy5zbmFrZU1vZGUoKSkgcmV0dXJuO1xuICAgICAgICAgIHRoaXMuY3VycmVudFNwZWxsLnJlY2VpdmUoZS5rZXkpO1xuICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gOCAmJiB0aGlzLmN1cnJlbnRTcGVsbCkge1xuICAgICAgICAgIGlmICh0aGlzLnNuYWtlTW9kZSgpKSByZXR1cm47XG4gICAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwuZGVsZXRlQ2hhcmFjdGVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlIDw9IDQwICYmIGUua2V5Q29kZSA+PSAzNykge1xuICAgICAgICAgIHRoaXMudXBkYXRlQ3VycmVudFBvc2l0aW9uKGUua2V5Q29kZSk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBcbiAgICB0cmltU3BlbGxzKCkge1xuICAgICAgICBpZiAodGhpcy5zcGVsbHMubGVuZ3RoIDwgMTAwKSByZXR1cm47XG4gICAgICAgIGxldCBkaWZmID0gdGhpcy5zcGVsbHMubGVuZ3RoIC0gMTAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmY7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zcGVsbHNbaV0uY2xlYXJQcmV2aW91c1JlbmRlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3BlbGxzID0gdGhpcy5zcGVsbHMuc2xpY2UoZGlmZik7XG4gICAgfVxuXG4gICAgZnJhbWUoKSB7XG4gICAgICAgIHRoaXMudHJpbVNwZWxscygpO1xuICAgICAgICB0aGlzLnNwZWxscy5mb3JFYWNoKHNwZWxsID0+IHNwZWxsLm1vdmUoKSk7XG4gICAgXG4gICAgICAgIHRoaXMuY3VycmVudFNwZWxsLm1vdmUoKTtcbiAgICAgICAgaWYgKHRoaXMudHlwZXRlc3QpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZXRlc3QucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgYW5pbWF0ZShyYXRlKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnR5cGV0ZXN0KSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5mcmFtZXJhdGUgPSByYXRlIHx8IHRoaXMuZnJhbWVyYXRlO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWUoKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgICAgICB9LCB0aGlzLmZyYW1lcmF0ZSk7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgR3JpZCBmcm9tICcuL2dyaWQnO1xuaW1wb3J0IFNwZWxsIGZyb20gJy4vc3BlbGwnO1xuaW1wb3J0IHsgc2FtcGxlVGV4dCB9IGZyb20gXCIuL3NhbXBsZXRleHRcIjtcblxuaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHsgVHlwZVRlc3QgfSBmcm9tICcuL3R5cGV0ZXN0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpO1xuICAgIHdpbmRvdy5TcGVsbCA9IFNwZWxsO1xuICAgIGNvbnN0IGdyaWQgPSBuZXcgR3JpZChyb290LCBpbnB1dCk7XG5cbiAgICBncmlkLmFuaW1hdGUoKTtcbiAgICB3aW5kb3cuZ3JpZCA9IGdyaWQ7XG4gICAgd2luZG93LnNhbXBsZVRleHQgPSBzYW1wbGVUZXh0O1xuICAgIHdpbmRvdy50eXBldGVzdCA9IG5ldyBUeXBlVGVzdChncmlkKTtcblxufSkiLCJjb25zdCBrZXl3b3JkcyA9IHtcbiAgYWxsOiB7IHR5cGU6IFwiYWxsXCIgfSxcbiAgY2xlYXI6IHsgdHlwZTogXCJjbGVhclwiIH0sXG4gIHNwZWxsOiB7IHR5cGU6IFwic3BlbGxcIiB9LFxuICBzbmFrZTogeyB0eXBlOiBcInNuYWtlXCIgfSxcbiAgdHlwZTogeyB0eXBlOiBcInR5cGV0ZXN0XCIgfSxcbiAgdGVzdDogeyB0eXBlOiBcInR5cGV0ZXN0XCIgfSxcbiAgY2lyY2xlOiB7IHR5cGU6IFwiY2lyY2xlXCIgfSxcbiAgZmFzdDogeyB0eXBlOiBcInNwZWVkXCIsIGFjdGlvbjogMC44IH0sXG4gIHNsb3c6IHsgdHlwZTogXCJzcGVlZFwiLCBhY3Rpb246IDEuMjUgfSxcbiAgYmlnOiB7IHR5cGU6IFwiZm9udHNpemVcIiwgYWN0aW9uOiAxLjI1IH0sXG4gIGxpdHRsZTogeyB0eXBlOiBcImZvbnRzaXplXCIsIGFjdGlvbjogMC44IH0sXG4gIHVwOiB7IHR5cGU6IFwibW92ZVwiLCBhY3Rpb246IFstMSwgMF0gfSxcbiAgZG93bjogeyB0eXBlOiBcIm1vdmVcIiwgYWN0aW9uOiBbMSwgMF0gfSxcbiAgbGVmdDogeyB0eXBlOiBcIm1vdmVcIiwgYWN0aW9uOiBbMCwgLTFdIH0sXG4gIHJpZ2h0OiB7IHR5cGU6IFwibW92ZVwiLCBhY3Rpb246IFswLCAxXSB9LFxuICBjb21pYzogeyB0eXBlOiBcImZvbnRcIiwgYWN0aW9uOiBcImNvbWljXCIgfSxcbiAgc2FuczogeyB0eXBlOiBcImZvbnRcIiwgYWN0aW9uOiBcInNhbnNcIiB9LFxuICBmdW46IHsgdHlwZTogXCJmb250XCIsIGFjdGlvbjogXCJmdW5cIiB9LFxuICBtb25vOiB7IHR5cGU6IFwiZm9udFwiLCBhY3Rpb246IFwibW9ub1wiIH0sXG4gIHNlcmlmOiB7IHR5cGU6IFwiZm9udFwiLCBhY3Rpb246IFwic2VyaWZcIiB9LFxuICBibHVlOiB7IHR5cGU6IFwiY29sb3JcIiwgYWN0aW9uOiBcIiM1Nzk4YWRcIiB9LFxuICBncmVlbjogeyB0eXBlOiBcImNvbG9yXCIsIGFjdGlvbjogXCIjNTdhZDZlXCIgfSxcbiAgeWVsbG93OiB7IHR5cGU6IFwiY29sb3JcIiwgYWN0aW9uOiBcIiNkYmMwMzVcIiB9LFxuICBwdXJwbGU6IHsgdHlwZTogXCJjb2xvclwiLCBhY3Rpb246IFwiIzlkNjRlM1wiIH0sXG4gIG9yYW5nZTogeyB0eXBlOiBcImNvbG9yXCIsIGFjdGlvbjogXCIjZTY3ZTM5XCIgfSxcbiAgcGluazogeyB0eXBlOiBcImNvbG9yXCIsIGFjdGlvbjogXCIjZjIwYWVlXCIgfSxcbiAgYmxhY2s6IHsgdHlwZTogXCJjb2xvclwiLCBhY3Rpb246IFwiIzIyMmUyY1wiIH0sXG4gIHJlZDogeyB0eXBlOiBcImNvbG9yXCIsIGFjdGlvbjogXCIjZGU0ODFiXCIgfSxcbiAgZW1vamk6IHsgdHlwZTogXCJlbW9qaVwiIH0sXG4gIGhlbGxvOiB7IHR5cGU6IFwidGV4dFwiLCBhY3Rpb246IFwid29ybGRcIiB9LFxuICBtYWRlYnk6IHsgdHlwZTogXCJ0ZXh0XCIsIGFjdGlvbjogXCIgc2ltb24gZGViZXZvaXNlXCIgfSxcbiAgZm9vOiB7IHR5cGU6IFwidGV4dFwiLCBhY3Rpb246IFwiYmFyXCIgfSxcbiAgZXhwbG9kZTogeyB0eXBlOiBcImV4cGxvZGVcIiB9XG4gIC8vIGhlbHA6IHsgdHlwZTogXCJ0ZXh0XCIsIGFjdGlvbjogXCIgSSBjYW4ndFwiIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGtleXdvcmRzO1xuXG4vLyBUT0RPOiBcbi8vIHJvdGF0ZSwgc25ha2UsIHR5cGV0ZXN0LCBhYm91dCwgaW5kZXgsICAiLCJsZXQgdG9wMTAwMCA9IGB0aGVcbm9mXG50b1xuYW5kXG5hXG5pblxuaXNcbml0XG55b3VcbnRoYXRcbmhlXG53YXNcbmZvclxub25cbmFyZVxud2l0aFxuYXNcbklcbmhpc1xudGhleVxuYmVcbmF0XG5vbmVcbmhhdmVcbnRoaXNcbmZyb21cbm9yXG5oYWRcbmJ5XG5ub3RcbndvcmRcbmJ1dFxud2hhdFxuc29tZVxud2VcbmNhblxub3V0XG5vdGhlclxud2VyZVxuYWxsXG50aGVyZVxud2hlblxudXBcbnVzZVxueW91clxuaG93XG5zYWlkXG5hblxuZWFjaFxuc2hlXG53aGljaFxuZG9cbnRoZWlyXG50aW1lXG5pZlxud2lsbFxud2F5XG5hYm91dFxubWFueVxudGhlblxudGhlbVxud3JpdGVcbndvdWxkXG5saWtlXG5zb1xudGhlc2VcbmhlclxubG9uZ1xubWFrZVxudGhpbmdcbnNlZVxuaGltXG50d29cbmhhc1xubG9va1xubW9yZVxuZGF5XG5jb3VsZFxuZ29cbmNvbWVcbmRpZFxubnVtYmVyXG5zb3VuZFxubm9cbm1vc3RcbnBlb3BsZVxubXlcbm92ZXJcbmtub3dcbndhdGVyXG50aGFuXG5jYWxsXG5maXJzdFxud2hvXG5tYXlcbmRvd25cbnNpZGVcbmJlZW5cbm5vd1xuZmluZFxuYW55XG5uZXdcbndvcmtcbnBhcnRcbnRha2VcbmdldFxucGxhY2Vcbm1hZGVcbmxpdmVcbndoZXJlXG5hZnRlclxuYmFja1xubGl0dGxlXG5vbmx5XG5yb3VuZFxubWFuXG55ZWFyXG5jYW1lXG5zaG93XG5ldmVyeVxuZ29vZFxubWVcbmdpdmVcbm91clxudW5kZXJcbm5hbWVcbnZlcnlcbnRocm91Z2hcbmp1c3RcbmZvcm1cbnNlbnRlbmNlXG5ncmVhdFxudGhpbmtcbnNheVxuaGVscFxubG93XG5saW5lXG5kaWZmZXJcbnR1cm5cbmNhdXNlXG5tdWNoXG5tZWFuXG5iZWZvcmVcbm1vdmVcbnJpZ2h0XG5ib3lcbm9sZFxudG9vXG5zYW1lXG50ZWxsXG5kb2VzXG5zZXRcbnRocmVlXG53YW50XG5haXJcbndlbGxcbmFsc29cbnBsYXlcbnNtYWxsXG5lbmRcbnB1dFxuaG9tZVxucmVhZFxuaGFuZFxucG9ydFxubGFyZ2VcbnNwZWxsXG5hZGRcbmV2ZW5cbmxhbmRcbmhlcmVcbm11c3RcbmJpZ1xuaGlnaFxuc3VjaFxuZm9sbG93XG5hY3RcbndoeVxuYXNrXG5tZW5cbmNoYW5nZVxud2VudFxubGlnaHRcbmtpbmRcbm9mZlxubmVlZFxuaG91c2VcbnBpY3R1cmVcbnRyeVxudXNcbmFnYWluXG5hbmltYWxcbnBvaW50XG5tb3RoZXJcbndvcmxkXG5uZWFyXG5idWlsZFxuc2VsZlxuZWFydGhcbmZhdGhlclxuaGVhZFxuc3RhbmRcbm93blxucGFnZVxuc2hvdWxkXG5jb3VudHJ5XG5mb3VuZFxuYW5zd2VyXG5zY2hvb2xcbmdyb3dcbnN0dWR5XG5zdGlsbFxubGVhcm5cbnBsYW50XG5jb3ZlclxuZm9vZFxuc3VuXG5mb3VyXG5iZXR3ZWVuXG5zdGF0ZVxua2VlcFxuZXllXG5uZXZlclxubGFzdFxubGV0XG50aG91Z2h0XG5jaXR5XG50cmVlXG5jcm9zc1xuZmFybVxuaGFyZFxuc3RhcnRcbm1pZ2h0XG5zdG9yeVxuc2F3XG5mYXJcbnNlYVxuZHJhd1xubGVmdFxubGF0ZVxucnVuXG5kb24ndFxud2hpbGVcbnByZXNzXG5jbG9zZVxubmlnaHRcbnJlYWxcbmxpZmVcbmZld1xubm9ydGhcbm9wZW5cbnNlZW1cbnRvZ2V0aGVyXG5uZXh0XG53aGl0ZVxuY2hpbGRyZW5cbmJlZ2luXG5nb3RcbndhbGtcbmV4YW1wbGVcbmVhc2VcbnBhcGVyXG5ncm91cFxuYWx3YXlzXG5tdXNpY1xudGhvc2VcbmJvdGhcbm1hcmtcbm9mdGVuXG5sZXR0ZXJcbnVudGlsXG5taWxlXG5yaXZlclxuY2FyXG5mZWV0XG5jYXJlXG5zZWNvbmRcbmJvb2tcbmNhcnJ5XG50b29rXG5zY2llbmNlXG5lYXRcbnJvb21cbmZyaWVuZFxuYmVnYW5cbmlkZWFcbmZpc2hcbm1vdW50YWluXG5zdG9wXG5vbmNlXG5iYXNlXG5oZWFyXG5ob3JzZVxuY3V0XG5zdXJlXG53YXRjaFxuY29sb3JcbmZhY2Vcbndvb2Rcbm1haW5cbmVub3VnaFxucGxhaW5cbmdpcmxcbnVzdWFsXG55b3VuZ1xucmVhZHlcbmFib3ZlXG5ldmVyXG5yZWRcbmxpc3RcbnRob3VnaFxuZmVlbFxudGFsa1xuYmlyZFxuc29vblxuYm9keVxuZG9nXG5mYW1pbHlcbmRpcmVjdFxucG9zZVxubGVhdmVcbnNvbmdcbm1lYXN1cmVcbmRvb3JcbnByb2R1Y3RcbmJsYWNrXG5zaG9ydFxubnVtZXJhbFxuY2xhc3NcbndpbmRcbnF1ZXN0aW9uXG5oYXBwZW5cbmNvbXBsZXRlXG5zaGlwXG5hcmVhXG5oYWxmXG5yb2NrXG5vcmRlclxuZmlyZVxuc291dGhcbnByb2JsZW1cbnBpZWNlXG50b2xkXG5rbmV3XG5wYXNzXG5zaW5jZVxudG9wXG53aG9sZVxua2luZ1xuc3BhY2VcbmhlYXJkXG5iZXN0XG5ob3VyXG5iZXR0ZXJcbnRydWVcbmR1cmluZ1xuaHVuZHJlZFxuZml2ZVxucmVtZW1iZXJcbnN0ZXBcbmVhcmx5XG5ob2xkXG53ZXN0XG5ncm91bmRcbmludGVyZXN0XG5yZWFjaFxuZmFzdFxudmVyYlxuc2luZ1xubGlzdGVuXG5zaXhcbnRhYmxlXG50cmF2ZWxcbmxlc3Ncbm1vcm5pbmdcbnRlblxuc2ltcGxlXG5zZXZlcmFsXG52b3dlbFxudG93YXJkXG53YXJcbmxheVxuYWdhaW5zdFxucGF0dGVyblxuc2xvd1xuY2VudGVyXG5sb3ZlXG5wZXJzb25cbm1vbmV5XG5zZXJ2ZVxuYXBwZWFyXG5yb2FkXG5tYXBcbnJhaW5cbnJ1bGVcbmdvdmVyblxucHVsbFxuY29sZFxubm90aWNlXG52b2ljZVxudW5pdFxucG93ZXJcbnRvd25cbmZpbmVcbmNlcnRhaW5cbmZseVxuZmFsbFxubGVhZFxuY3J5XG5kYXJrXG5tYWNoaW5lXG5ub3RlXG53YWl0XG5wbGFuXG5maWd1cmVcbnN0YXJcbmJveFxubm91blxuZmllbGRcbnJlc3RcbmNvcnJlY3RcbmFibGVcbnBvdW5kXG5kb25lXG5iZWF1dHlcbmRyaXZlXG5zdG9vZFxuY29udGFpblxuZnJvbnRcbnRlYWNoXG53ZWVrXG5maW5hbFxuZ2F2ZVxuZ3JlZW5cbm9oXG5xdWlja1xuZGV2ZWxvcFxub2NlYW5cbndhcm1cbmZyZWVcbm1pbnV0ZVxuc3Ryb25nXG5zcGVjaWFsXG5taW5kXG5iZWhpbmRcbmNsZWFyXG50YWlsXG5wcm9kdWNlXG5mYWN0XG5zdHJlZXRcbmluY2hcbm11bHRpcGx5XG5ub3RoaW5nXG5jb3Vyc2VcbnN0YXlcbndoZWVsXG5mdWxsXG5mb3JjZVxuYmx1ZVxub2JqZWN0XG5kZWNpZGVcbnN1cmZhY2VcbmRlZXBcbm1vb25cbmlzbGFuZFxuZm9vdFxuc3lzdGVtXG5idXN5XG50ZXN0XG5yZWNvcmRcbmJvYXRcbmNvbW1vblxuZ29sZFxucG9zc2libGVcbnBsYW5lXG5zdGVhZFxuZHJ5XG53b25kZXJcbmxhdWdoXG50aG91c2FuZFxuYWdvXG5yYW5cbmNoZWNrXG5nYW1lXG5zaGFwZVxuZXF1YXRlXG5ob3Rcbm1pc3NcbmJyb3VnaHRcbmhlYXRcbnNub3dcbnRpcmVcbmJyaW5nXG55ZXNcbmRpc3RhbnRcbmZpbGxcbmVhc3RcbnBhaW50XG5sYW5ndWFnZVxuYW1vbmdcbmdyYW5kXG5iYWxsXG55ZXRcbndhdmVcbmRyb3BcbmhlYXJ0XG5hbVxucHJlc2VudFxuaGVhdnlcbmRhbmNlXG5lbmdpbmVcbnBvc2l0aW9uXG5hcm1cbndpZGVcbnNhaWxcbm1hdGVyaWFsXG5zaXplXG52YXJ5XG5zZXR0bGVcbnNwZWFrXG53ZWlnaHRcbmdlbmVyYWxcbmljZVxubWF0dGVyXG5jaXJjbGVcbnBhaXJcbmluY2x1ZGVcbmRpdmlkZVxuc3lsbGFibGVcbmZlbHRcbnBlcmhhcHNcbnBpY2tcbnN1ZGRlblxuY291bnRcbnNxdWFyZVxucmVhc29uXG5sZW5ndGhcbnJlcHJlc2VudFxuYXJ0XG5zdWJqZWN0XG5yZWdpb25cbmVuZXJneVxuaHVudFxucHJvYmFibGVcbmJlZFxuYnJvdGhlclxuZWdnXG5yaWRlXG5jZWxsXG5iZWxpZXZlXG5mcmFjdGlvblxuZm9yZXN0XG5zaXRcbnJhY2VcbndpbmRvd1xuc3RvcmVcbnN1bW1lclxudHJhaW5cbnNsZWVwXG5wcm92ZVxubG9uZVxubGVnXG5leGVyY2lzZVxud2FsbFxuY2F0Y2hcbm1vdW50XG53aXNoXG5za3lcbmJvYXJkXG5qb3lcbndpbnRlclxuc2F0XG53cml0dGVuXG53aWxkXG5pbnN0cnVtZW50XG5rZXB0XG5nbGFzc1xuZ3Jhc3NcbmNvd1xuam9iXG5lZGdlXG5zaWduXG52aXNpdFxucGFzdFxuc29mdFxuZnVuXG5icmlnaHRcbmdhc1xud2VhdGhlclxubW9udGhcbm1pbGxpb25cbmJlYXJcbmZpbmlzaFxuaGFwcHlcbmhvcGVcbmZsb3dlclxuY2xvdGhlXG5zdHJhbmdlXG5nb25lXG5qdW1wXG5iYWJ5XG5laWdodFxudmlsbGFnZVxubWVldFxucm9vdFxuYnV5XG5yYWlzZVxuc29sdmVcbm1ldGFsXG53aGV0aGVyXG5wdXNoXG5zZXZlblxucGFyYWdyYXBoXG50aGlyZFxuc2hhbGxcbmhlbGRcbmhhaXJcbmRlc2NyaWJlXG5jb29rXG5mbG9vclxuZWl0aGVyXG5yZXN1bHRcbmJ1cm5cbmhpbGxcbnNhZmVcbmNhdFxuY2VudHVyeVxuY29uc2lkZXJcbnR5cGVcbmxhd1xuYml0XG5jb2FzdFxuY29weVxucGhyYXNlXG5zaWxlbnRcbnRhbGxcbnNhbmRcbnNvaWxcbnJvbGxcbnRlbXBlcmF0dXJlXG5maW5nZXJcbmluZHVzdHJ5XG52YWx1ZVxuZmlnaHRcbmxpZVxuYmVhdFxuZXhjaXRlXG5uYXR1cmFsXG52aWV3XG5zZW5zZVxuZWFyXG5lbHNlXG5xdWl0ZVxuYnJva2VcbmNhc2Vcbm1pZGRsZVxua2lsbFxuc29uXG5sYWtlXG5tb21lbnRcbnNjYWxlXG5sb3VkXG5zcHJpbmdcbm9ic2VydmVcbmNoaWxkXG5zdHJhaWdodFxuY29uc29uYW50XG5uYXRpb25cbmRpY3Rpb25hcnlcbm1pbGtcbnNwZWVkXG5tZXRob2Rcbm9yZ2FuXG5wYXlcbmFnZVxuc2VjdGlvblxuZHJlc3NcbmNsb3VkXG5zdXJwcmlzZVxucXVpZXRcbnN0b25lXG50aW55XG5jbGltYlxuY29vbFxuZGVzaWduXG5wb29yXG5sb3RcbmV4cGVyaW1lbnRcbmJvdHRvbVxua2V5XG5pcm9uXG5zaW5nbGVcbnN0aWNrXG5mbGF0XG50d2VudHlcbnNraW5cbnNtaWxlXG5jcmVhc2VcbmhvbGVcbnRyYWRlXG5tZWxvZHlcbnRyaXBcbm9mZmljZVxucmVjZWl2ZVxucm93XG5tb3V0aFxuZXhhY3RcbnN5bWJvbFxuZGllXG5sZWFzdFxudHJvdWJsZVxuc2hvdXRcbmV4Y2VwdFxud3JvdGVcbnNlZWRcbnRvbmVcbmpvaW5cbnN1Z2dlc3RcbmNsZWFuXG5icmVha1xubGFkeVxueWFyZFxucmlzZVxuYmFkXG5ibG93XG5vaWxcbmJsb29kXG50b3VjaFxuZ3Jld1xuY2VudFxubWl4XG50ZWFtXG53aXJlXG5jb3N0XG5sb3N0XG5icm93blxud2VhclxuZ2FyZGVuXG5lcXVhbFxuc2VudFxuY2hvb3NlXG5mZWxsXG5maXRcbmZsb3dcbmZhaXJcbmJhbmtcbmNvbGxlY3RcbnNhdmVcbmNvbnRyb2xcbmRlY2ltYWxcbmdlbnRsZVxud29tYW5cbmNhcHRhaW5cbnByYWN0aWNlXG5zZXBhcmF0ZVxuZGlmZmljdWx0XG5kb2N0b3JcbnBsZWFzZVxucHJvdGVjdFxubm9vblxud2hvc2VcbmxvY2F0ZVxucmluZ1xuY2hhcmFjdGVyXG5pbnNlY3RcbmNhdWdodFxucGVyaW9kXG5pbmRpY2F0ZVxucmFkaW9cbnNwb2tlXG5hdG9tXG5odW1hblxuaGlzdG9yeVxuZWZmZWN0XG5lbGVjdHJpY1xuZXhwZWN0XG5jcm9wXG5tb2Rlcm5cbmVsZW1lbnRcbmhpdFxuc3R1ZGVudFxuY29ybmVyXG5wYXJ0eVxuc3VwcGx5XG5ib25lXG5yYWlsXG5pbWFnaW5lXG5wcm92aWRlXG5hZ3JlZVxudGh1c1xuY2FwaXRhbFxud29uJ3RcbmNoYWlyXG5kYW5nZXJcbmZydWl0XG5yaWNoXG50aGlja1xuc29sZGllclxucHJvY2Vzc1xub3BlcmF0ZVxuZ3Vlc3Ncbm5lY2Vzc2FyeVxuc2hhcnBcbndpbmdcbmNyZWF0ZVxubmVpZ2hib3Jcbndhc2hcbmJhdFxucmF0aGVyXG5jcm93ZFxuY29yblxuY29tcGFyZVxucG9lbVxuc3RyaW5nXG5iZWxsXG5kZXBlbmRcbm1lYXRcbnJ1YlxudHViZVxuZmFtb3VzXG5kb2xsYXJcbnN0cmVhbVxuZmVhclxuc2lnaHRcbnRoaW5cbnRyaWFuZ2xlXG5wbGFuZXRcbmh1cnJ5XG5jaGllZlxuY29sb255XG5jbG9ja1xubWluZVxudGllXG5lbnRlclxubWFqb3JcbmZyZXNoXG5zZWFyY2hcbnNlbmRcbnllbGxvd1xuZ3VuXG5hbGxvd1xucHJpbnRcbmRlYWRcbnNwb3RcbmRlc2VydFxuc3VpdFxuY3VycmVudFxubGlmdFxucm9zZVxuY29udGludWVcbmJsb2NrXG5jaGFydFxuaGF0XG5zZWxsXG5zdWNjZXNzXG5jb21wYW55XG5zdWJ0cmFjdFxuZXZlbnRcbnBhcnRpY3VsYXJcbmRlYWxcbnN3aW1cbnRlcm1cbm9wcG9zaXRlXG53aWZlXG5zaG9lXG5zaG91bGRlclxuc3ByZWFkXG5hcnJhbmdlXG5jYW1wXG5pbnZlbnRcbmNvdHRvblxuYm9yblxuZGV0ZXJtaW5lXG5xdWFydFxubmluZVxudHJ1Y2tcbm5vaXNlXG5sZXZlbFxuY2hhbmNlXG5nYXRoZXJcbnNob3BcbnN0cmV0Y2hcbnRocm93XG5zaGluZVxucHJvcGVydHlcbmNvbHVtblxubW9sZWN1bGVcbnNlbGVjdFxud3JvbmdcbmdyYXlcbnJlcGVhdFxucmVxdWlyZVxuYnJvYWRcbnByZXBhcmVcbnNhbHRcbm5vc2VcbnBsdXJhbFxuYW5nZXJcbmNsYWltXG5jb250aW5lbnRcbm94eWdlblxuc3VnYXJcbmRlYXRoXG5wcmV0dHlcbnNraWxsXG53b21lblxuc2Vhc29uXG5zb2x1dGlvblxubWFnbmV0XG5zaWx2ZXJcbnRoYW5rXG5icmFuY2hcbm1hdGNoXG5zdWZmaXhcbmVzcGVjaWFsbHlcbmZpZ1xuYWZyYWlkXG5odWdlXG5zaXN0ZXJcbnN0ZWVsXG5kaXNjdXNzXG5mb3J3YXJkXG5zaW1pbGFyXG5ndWlkZVxuZXhwZXJpZW5jZVxuc2NvcmVcbmFwcGxlXG5ib3VnaHRcbmxlZFxucGl0Y2hcbmNvYXRcbm1hc3NcbmNhcmRcbmJhbmRcbnJvcGVcbnNsaXBcbndpblxuZHJlYW1cbmV2ZW5pbmdcbmNvbmRpdGlvblxuZmVlZFxudG9vbFxudG90YWxcbmJhc2ljXG5zbWVsbFxudmFsbGV5XG5ub3JcbmRvdWJsZVxuc2VhdFxuYXJyaXZlXG5tYXN0ZXJcbnRyYWNrXG5wYXJlbnRcbnNob3JlXG5kaXZpc2lvblxuc2hlZXRcbnN1YnN0YW5jZVxuZmF2b3JcbmNvbm5lY3RcbnBvc3RcbnNwZW5kXG5jaG9yZFxuZmF0XG5nbGFkXG5vcmlnaW5hbFxuc2hhcmVcbnN0YXRpb25cbmRhZFxuYnJlYWRcbmNoYXJnZVxucHJvcGVyXG5iYXJcbm9mZmVyXG5zZWdtZW50XG5zbGF2ZVxuZHVja1xuaW5zdGFudFxubWFya2V0XG5kZWdyZWVcbnBvcHVsYXRlXG5jaGlja1xuZGVhclxuZW5lbXlcbnJlcGx5XG5kcmlua1xub2NjdXJcbnN1cHBvcnRcbnNwZWVjaFxubmF0dXJlXG5yYW5nZVxuc3RlYW1cbm1vdGlvblxucGF0aFxubGlxdWlkXG5sb2dcbm1lYW50XG5xdW90aWVudFxudGVldGhcbnNoZWxsXG5uZWNrYDtcblxuXG5sZXQgd2hpdGVzcGFjZSA9IC9bXFxyXFxuXSsvO1xubGV0IHdvcmRzID0gdG9wMTAwMC5zcGxpdCh3aGl0ZXNwYWNlKTtcbmxldCB2YWxpZHdvcmRzID0gd29yZHMuZmlsdGVyKHdvcmQgPT4gd29yZC5sZW5ndGggPiAyKTtcblxuZXhwb3J0IGNvbnN0IHNhbXBsZVRleHQgPSAocmFuZ2UgPSB2YWxpZHdvcmRzLmxlbmd0aCkgPT4ge1xuICByZXR1cm4gdmFsaWR3b3Jkcy5zbGljZSgwLCByYW5nZSk7XG59OyIsImltcG9ydCB7IGFkZENvb3JkaW5hdGVzLCByZXBsYWNlQ2hpbGRyZW4sIGluY2x1ZGVzQ29vcmRpbmF0ZXMgfSBmcm9tIFwiLi91dGlsXCI7XG5pbXBvcnQgU3BlbGwgZnJvbSBcIi4vc3BlbGxcIjtcblxuZXhwb3J0IGNsYXNzIFNuYWtlIHtcbiAgICBjb25zdHJ1Y3RvcihncmlkLCBwb3NpdGlvbikge1xuICAgICAgICB0aGlzLm1vdmVzID0gWzAsMF07XG4gICAgICAgIHRoaXMucG9zaXRpb25zID0gW3Bvc2l0aW9uXTtcbiAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuZ3JpZCA9IGdyaWQ7XG5cbiAgICAgICAgbGV0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgaGVhZC5jbGFzc05hbWUgPSAnc25ha2VoZWFkJztcbiAgICAgICAgaGVhZC5pbm5lclRleHQgPSBcIvCfkI1cIjtcbiAgICAgICAgdGhpcy5ib2R5ID0gW2hlYWRdOyAvLyBbeyBlbGVtZW50OiA8c3Bhbj4sIHBvczogfV1cblxuICAgICAgICBsZXQgaW5zdCA9IG5ldyBTcGVsbCh0aGlzLmdyaWQpO1xuICAgICAgICBpbnN0LnN0b3JlZFRleHQgPSAnYXJyb3cga2V5cyB0byBtb3ZlJztcbiAgICAgICAgaW5zdC5tb3ZlcyA9IFswLCAxXTtcbiAgICAgICAgaW5zdC5jYXN0KFsnZ3JlZW4nLCAnYmx1ZSddKTtcbiAgICAgICAgdGhpcy5pbnN0ID0gaW5zdDtcbiAgICAgICAgdGhpcy5ncmlkLnNwZWxscy5wdXNoKGluc3QpO1xuICAgIH1cblxuICAgIGlzRW1wdHkocG9zKSB7XG4gICAgICAgIGxldCByZXMgPSAhdGhpcy5ncmlkLmdldEVsZW1lbnQocG9zKS5maXJzdENoaWxkO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGdldFBvaW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25zLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgaGFuZGxlTG9zcygpIHtcbiAgICAgICAgdGhpcy5jbGVhclByZXZpb3VzUmVuZGVyKCk7XG4gICAgICAgIGxldCBsb3NlclNwZWxsID0gdGhpcy5pbnN0O1xuICAgICAgICBcbiAgICAgICAgbG9zZXJTcGVsbC5jYXN0KFsnb3JhbmdlJywnZnVuJywnYmlnJywnYmlnJywnYmlnJ10pO1xuICAgICAgICBsZXQgc2NvcmUgPSB0aGlzLmJvZHkubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IHBvaW50cyA9IHNjb3JlID09PSAxID8gJyBwb2ludCcgOiAnIHBvaW50cyc7XG4gICAgICAgIGxvc2VyU3BlbGwuc3RvcmVkVGV4dCA9ICdHYW1lIG92ZXI6ICcgKyAodGhpcy5ib2R5Lmxlbmd0aCAtIDEpICsgcG9pbnRzO1xuICAgICAgICB0aGlzLmdyaWQuY3VycmVudFNwZWxsID0gbmV3IFNwZWxsKHRoaXMuZ3JpZCk7XG4gICAgfVxuXG4gICAgY2xlYXJQcmV2aW91c1JlbmRlcigpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzLmZvckVhY2goZWxlID0+IGVsZS5yZW1vdmUoKSk7XG4gICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cyA9IFtdO1xuICAgIH1cblxuICAgIG91dE9mQm91bmRzKHBvcykge1xuICAgICAgICByZXR1cm4gKHBvc1swXSA+PSB0aGlzLmdyaWQuaGVpZ2h0IHx8IFxuICAgICAgICAgICAgcG9zWzBdIDwgMCB8fCBcbiAgICAgICAgICAgIHBvc1sxXSA+PSB0aGlzLmdyaWQud2lkdGggfHwgXG4gICAgICAgICAgICBwb3NbMV0gPCAwKVxuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmICghdGhpcy5tb3Zlc1swXSAmJiAhdGhpcy5tb3Zlc1sxXSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBcblxuICAgICAgICBsZXQgbmV4dFBvc2l0aW9uID0gYWRkQ29vcmRpbmF0ZXModGhpcy5wb3NpdGlvbnNbMF0sIHRoaXMubW92ZXMsIHRoaXMuZ3JpZClcblxuICAgICAgICBpZiAoaW5jbHVkZXNDb29yZGluYXRlcyh0aGlzLnBvc2l0aW9ucywgbmV4dFBvc2l0aW9uKSB8fCBcbiAgICAgICAgICAgIHRoaXMub3V0T2ZCb3VuZHMobmV4dFBvc2l0aW9uKSkge1xuXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUxvc3MoKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzRW1wdHkobmV4dFBvc2l0aW9uKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnMudW5zaGlmdChuZXh0UG9zaXRpb24pO1xuICAgICAgICAgICAgdGhpcy5lYXQobmV4dFBvc2l0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnMudW5zaGlmdChuZXh0UG9zaXRpb24pO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICByZWNlaXZlSW5wdXQoZGVsdGEpIHtcbiAgICAgICAgbGV0IGNvbWJpbmVkRGlycyA9IGFkZENvb3JkaW5hdGVzKGRlbHRhLCB0aGlzLm1vdmVzKTtcbiAgICAgICAgbGV0IG9wcG9zaXRlRGlyID0gY29tYmluZWREaXJzWzBdID09PSAwICYmIGNvbWJpbmVkRGlyc1sxXSA9PT0gMDtcblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbnMubGVuZ3RoID09PSAxIHx8ICFvcHBvc2l0ZURpcikgeyBcbiAgICAgICAgICAgIHRoaXMubW92ZXMgPSBkZWx0YTtcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZWF0KHBvcykge1xuICAgICAgICBsZXQgc25hY2sgPSB0aGlzLmdyaWQuZ2V0RWxlbWVudChwb3MpLmZpcnN0Q2hpbGQ7XG4gICAgICAgIHRoaXMuYm9keS5wdXNoKHNuYWNrKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZVJhbmRvbVNwZWxsKCkge1xuICAgICAgICBsZXQgdXRpbFNwZWxsID0gbmV3IFNwZWxsKHRoaXMuZ3JpZCk7XG4gICAgICAgIHV0aWxTcGVsbC5nZW5lcmF0ZVJhbmRvbVNwZWxsKCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5jbGVhclByZXZpb3VzUmVuZGVyKCk7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbnMuZm9yRWFjaCgocG9zLCBpKSA9PiB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KHBvcyk7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmJvZHlbaV07XG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKCdzbmFrZScpXG4gICAgICAgICAgICByZXBsYWNlQ2hpbGRyZW4oZWxlbWVudCwgY2hpbGQpO1xuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMucHVzaChjaGlsZCk7XG4gICAgICAgIH0pXG4gICAgfVxufSIsImltcG9ydCBHcmlkIGZyb20gJy4vZ3JpZCc7XG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4vdXRpbCdcbmltcG9ydCBrZXl3b3JkSW5kZXggZnJvbSAnLi9rZXl3b3Jkcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwZWxsIHtcbiAgICBjb25zdHJ1Y3RvcihncmlkKSB7XG4gICAgICAgIHRoaXMucGVyRnJhbWVLZXl3b3JkcyA9IFtdO1xuICAgICAgICB0aGlzLmFwcGxpZWRLZXl3b3JkcyA9IFtdO1xuICAgICAgICB0aGlzLmdyaWQgPSBncmlkO1xuICAgICAgICB0aGlzLmN1cnJlbnRQb3MgPSB0aGlzLmdyaWQucmFuZG9tUG9zaXRpb24oKTtcblxuICAgICAgICB0aGlzLnN0b3JlZFRleHQgPSAnJztcbiAgICAgICAgdGhpcy5hY3RpdmVUZXh0ID0gJyc7XG5cbiAgICAgICAgdGhpcy5rZXl3b3JkSW5kZXggPSBrZXl3b3JkSW5kZXg7XG5cbiAgICAgICAgdGhpcy5yb3RhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLmNsYXNzQXJyID0gW107XG4gICAgICAgIHRoaXMubW92ZXMgPSBbMCwwXTtcbiAgICAgICAgdGhpcy5jb2xvcnMgPSBbXTtcbiAgICAgICAgdGhpcy5mb250ID0gJ21vbm8nO1xuICAgICAgICB0aGlzLnNpemUgPSAxNTtcblxuICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMgPSBbXTtcbiAgICB9XG5cbiAgICByZWNlaXZlKGlucHV0KSB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGV4dCArPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLmV4dHJhY3RLZXl3b3JkcygpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIGRlbGV0ZUNoYXJhY3RlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlVGV4dCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVUZXh0ID0gdGhpcy5hY3RpdmVUZXh0LnNsaWNlKDAsIHRoaXMuYWN0aXZlVGV4dC5sZW5ndGggLSAxKTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBjYXN0KGtleXdvcmRzKSB7XG4gICAgICAgIGlmICghKGtleXdvcmRzIGluc3RhbmNlb2YgQXJyYXkpKSBrZXl3b3JkcyA9IFtrZXl3b3Jkc107XG4gICAgICAgIGNvbnN0IG5vdFN0b3JlZCA9IFsnYWxsJywgJ2NsZWFyJywgJ3NwZWxsJywgJ3NuYWtlJywgJ3Rlc3QnLCAnZXhwbG9kZSddO1xuXG4gICAgICAgIGtleXdvcmRzLmZvckVhY2goa3cgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcHBseUtleXdvcmQoa3cpO1xuICAgICAgICAgICAgaWYgKCFub3RTdG9yZWQuaW5jbHVkZXMoa3cpKSB0aGlzLmFwcGxpZWRLZXl3b3Jkcy5wdXNoKGt3KTsgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFwcGx5S2V5d29yZChrdykge1xuICAgICAgICBpZiAoIXRoaXMua2V5d29yZEluZGV4W2t3XSkgcmV0dXJuO1xuICAgICAgICBsZXQgeyBhY3Rpb24sIHR5cGUgfSA9IHRoaXMua2V5d29yZEluZGV4W2t3XTtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnbW92ZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlcyA9IFV0aWwuYWRkQ29vcmRpbmF0ZXModGhpcy5tb3ZlcywgYWN0aW9uKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29sb3InOiBcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9ycy5wdXNoKGFjdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyb3RhdGUnOlxuICAgICAgICAgICAgICAgIHRoaXMucm90YXRlID0gdGhpcy5yb3RhdGUgPyBudWxsIDogJ3JvdGF0ZSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdmb250JzpcbiAgICAgICAgICAgICAgICB0aGlzLmVtb2ppID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5mb250ID0gYWN0aW9uO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc25ha2UnOlxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5mcmFtZXJhdGUgPSAxNTA7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnBsYXlTbmFrZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3BlZWQnOlxuICAgICAgICAgICAgICAgIGxldCBuZXdmcHMgPSBNYXRoLmZsb29yKHRoaXMuZ3JpZC5mcmFtZXJhdGUgKiBhY3Rpb24pO1xuICAgICAgICAgICAgICAgIGlmIChuZXdmcHMgPiA0MDAwKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmdyaWQuZnJhbWVyYXRlID0gNDAwMDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdmcHMgPCAxMDApIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5mcmFtZXJhdGUgPSAxMDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5mcmFtZXJhdGUgPSBuZXdmcHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZWRUZXh0ICs9IGFjdGlvbjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZvbnRzaXplJzpcbiAgICAgICAgICAgICAgICBsZXQgbmV3c2l6ZSA9IE1hdGguZmxvb3IodGhpcy5zaXplICogYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3c2l6ZSA+IDQwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSA9IDQwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3c2l6ZSA8IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplID0gNjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSBuZXdzaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0Fyci5wdXNoKCdjaXJjbGUnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NsZWFyJzpcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQuc3BlbGxzLmZvckVhY2goc3BlbGwgPT4gc3BlbGwuY2xlYXJQcmV2aW91c1JlbmRlcigpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQuc3BlbGxzID0gW107XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbW9qaSc6XG4gICAgICAgICAgICAgICAgdGhpcy5lbW9qaSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzcGVsbCc6XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVJhbmRvbVNwZWxsKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhbGwnOlxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5zcGVsbHMuZm9yRWFjaChzcGVsbCA9PiBzcGVsbC5jYXN0KHRoaXMuYXBwbGllZEtleXdvcmRzKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0eXBldGVzdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnBsYXlUeXBldGVzdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZXhwbG9kZSc6XG4gICAgICAgICAgICAgICAgbGV0IGRlbHRhO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vdmVzWzBdID09PSAwICYmIHRoaXMubW92ZXNbMV0gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGEgPSBbMCwgMV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGEgPSB0aGlzLm1vdmVzXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuY3VycmVudFBvcztcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdG9yZWRUZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5zdG9yZWRUZXh0W2ldO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3BlbGwgPSBuZXcgU3BlbGwodGhpcy5ncmlkKTtcbiAgICAgICAgICAgICAgICAgICAgc3BlbGwuY2FzdCh0aGlzLmFwcGxpZWRLZXl3b3Jkcyk7XG4gICAgICAgICAgICAgICAgICAgIHNwZWxsLmN1cnJlbnRQb3MgPSBwb3M7XG4gICAgICAgICAgICAgICAgICAgIHNwZWxsLmV4cGxvZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpcnMgPSBbICdsZWZ0JywgJ3VwJywgJ3JpZ2h0JywgJ2Rvd24nIF1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGFwcGxpZWREaXJzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdERpcklkeCA9IE1hdGguZmxvb3IoKGkgJSA4KSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICBhcHBsaWVkRGlycy5wdXNoKGRpcnNbZmlyc3REaXJJZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgJSAyID09PSAxKSBhcHBsaWVkRGlycy5wdXNoKGRpcnNbKGZpcnN0RGlySWR4ICsgMSkgJSA0XSlcblxuICAgICAgICAgICAgICAgICAgICBzcGVsbC5jYXN0KGFwcGxpZWREaXJzKTtcbiAgICAgICAgICAgICAgICAgICAgc3BlbGwuc3RvcmVkVGV4dCA9IGNoYXI7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWQuc3BlbGxzLnB1c2goc3BlbGwpO1xuXG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IFV0aWwuYWRkQ29vcmRpbmF0ZXMocG9zLCBkZWx0YSk7XG4gICAgICAgICAgICAgICAgfSAgIFxuXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZWRUZXh0ID0gXCJcIjtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIGV4dHJhY3RLZXl3b3JkcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zS2V5d29yZCh0aGlzLmFjdGl2ZVRleHQpKSByZXR1cm47XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gdGhpcy5hY3RpdmVUZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3Vic3RyID0gdGhpcy5hY3RpdmVUZXh0LnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgbGV0IGt3ID0gdGhpcy5jb250YWluc0tleXdvcmQoc3Vic3RyKTtcblxuICAgICAgICAgICAgaWYgKGt3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZWRUZXh0ICs9IHN1YnN0cjtcbiAgICAgICAgICAgICAgICB0aGlzLmNhc3Qoa3cpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlVGV4dCA9IHRoaXMuYWN0aXZlVGV4dC5zbGljZShpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3RLZXl3b3JkcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIGNvbnRhaW5zS2V5d29yZChzdHIpIHtcbiAgICAgICAgbGV0IGt3cyA9IE9iamVjdC5rZXlzKHRoaXMua2V5d29yZEluZGV4KTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGt3IG9mIGt3cykgeyBcbiAgICAgICAgICAgIGlmIChzdHIuaW5jbHVkZXMoa3cpKSByZXR1cm4ga3c7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNsZWFyUHJldmlvdXNSZW5kZXIoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5mb3JFYWNoKGVsZSA9PiBlbGUucmVtb3ZlKCkpO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBvcyA9IFV0aWwuYWRkQ29vcmRpbmF0ZXModGhpcy5jdXJyZW50UG9zLCB0aGlzLm1vdmVzKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBzaHVmZmxlQ29sb3JzKCkge1xuICAgICAgICBpZiAodGhpcy5jb2xvcnMubGVuZ3RoID09PSAwKSByZXR1cm4gJ25vbmUnO1xuICAgICAgICBpZiAodGhpcy5jb2xvcnMubGVuZ3RoID09PSAxICkgcmV0dXJuIHRoaXMuY29sb3JzWzBdXG4gICAgICAgIHRoaXMuY29sb3JzLnB1c2godGhpcy5jb2xvcnMuc2hpZnQoKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yc1swXTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZVJhbmRvbVNwZWxsKCkge1xuICAgICAgICBsZXQga2V5d29yZHMgPSBPYmplY3Qua2V5cyh0aGlzLmtleXdvcmRJbmRleCk7XG4gICAgICAgIGxldCBhcHBsaWVkS2V5d29yZHMgPSAnJztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJhbmRJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoa2V5d29yZHMubGVuZ3RoIC0gNikpICsgNjsgXG4gICAgICAgICAgICBhcHBsaWVkS2V5d29yZHMgKz0ga2V5d29yZHNbcmFuZElkeF07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNwZWxsID0gbmV3IFNwZWxsKHRoaXMuZ3JpZCk7XG4gICAgICAgIHNwZWxsLnJlY2VpdmUoYXBwbGllZEtleXdvcmRzKTtcbiAgICAgICAgdGhpcy5ncmlkLnNwZWxscy5wdXNoKHNwZWxsKTtcbiAgICAgICAgcmV0dXJuIHNwZWxsO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmNsZWFyUHJldmlvdXNSZW5kZXIoKTtcblxuXG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy5zdG9yZWRUZXh0ICsgdGhpcy5hY3RpdmVUZXh0O1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5jdXJyZW50UG9zO1xuICAgICAgICBsZXQgZGVsdGE7XG4gICAgICAgIGlmICh0aGlzLm1vdmVzWzBdID09PSAwICYmIHRoaXMubW92ZXNbMV0gPT09IDApIHtcbiAgICAgICAgICAgIGRlbHRhID0gWzAsMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgeCA9IE1hdGguc2lnbih0aGlzLm1vdmVzWzBdKTtcbiAgICAgICAgICAgIGxldCB5ID0gTWF0aC5zaWduKHRoaXMubW92ZXNbMV0pO1xuICAgICAgICAgICAgZGVsdGEgPSBbeCx5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGV0dGVyID0gdGhpcy5lbW9qaSA/IFV0aWwudG9FbW9qaSh0ZXh0W2ldKSA6IHRleHRbaV07XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQodGhpcy5mb250LCB0aGlzLnJvdGF0ZSwgJ2FjdGl2ZScsIC4uLnRoaXMuY2xhc3NBcnIpO1xuICAgICAgICAgICAgc3Bhbi5zdHlsZS5mb250U2l6ZSA9IHRoaXMuc2l6ZSArICdweCc7XG4gICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuc2h1ZmZsZUNvbG9ycygpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jb2xvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUuY29sb3IgPSAnd2hpdGUnOyBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5leHBsb2RlZCkgc3Bhbi5zdHlsZS5jb2xvciA9IFwiI2RlNDgxYlwiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5ncmlkLmdldEVsZW1lbnQocG9zKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgVXRpbC5yZXBsYWNlQ2hpbGRyZW4oZWxlbWVudCwgc3Bhbik7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMucHVzaChzcGFuKTtcbiAgICAgICAgICAgIHBvcyA9IFV0aWwuYWRkQ29vcmRpbmF0ZXMocG9zLCBkZWx0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ncmlkLmN1cnJlbnRTcGVsbCA9PT0gdGhpcykge1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgc3Bhbi5jbGFzc05hbWUgPSAnY3Vyc29yJztcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmdyaWQuZ2V0RWxlbWVudChwb3MpO1xuICAgICAgICAgICAgVXRpbC5yZXBsYWNlQ2hpbGRyZW4oZWxlbWVudCwgc3Bhbik7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMucHVzaChzcGFuKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbn1cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgc2FtcGxlVGV4dCB9IGZyb20gXCIuL3NhbXBsZXRleHRcIjtcbmltcG9ydCB7IHJlcGxhY2VDaGlsZHJlbiwgYWRkQ29vcmRpbmF0ZXMgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmV4cG9ydCBjbGFzcyBUeXBlVGVzdCB7XG4gICAgY29uc3RydWN0b3IoZ3JpZCkge1xuICAgICAgICB0aGlzLmdyaWQgPSBncmlkO1xuICAgICAgICB0aGlzLndpZHRoID0gTWF0aC5mbG9vcih0aGlzLmdyaWQud2lkdGggKiAwLjcpO1xuICAgICAgICAvLyB0aGlzLmhlaWdodCA9IE1hdGguZmxvb3IodGhpcy5ncmlkLmhlaWdodCAqIDAuOCk7IFxuICAgICAgICB0aGlzLnBvcyA9IHRoaXMuY2FsY3VsYXRlUG9zKCk7XG4gICAgICAgIHRoaXMudXNlcldvcmRzID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudFdvcmQgPSAwO1xuICAgICAgICB0aGlzLmJhZGtleXN0cm9rZXMgPSAwO1xuICAgICAgICB0aGlzLnJlbmRlcmVkV29yZEJlZ2luID0gMDtcbiAgICAgICAgdGhpcy5yZW5kZXJlZFdvcmRFbmQgPSAwO1xuICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHM9IFtdO1xuICAgICAgICB0aGlzLm51bVJvd3MgPSAzO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZTtcbiAgICAgICAgdGhpcy5pbnB1dCA9IFwiXCI7XG5cbiAgICAgICAgdGhpcy50b3BXb3JkcyA9IHNhbXBsZVRleHQoKTtcbiAgICAgICAgdGhpcy5lbnN1cmVVc2VyV29yZHMoKTtcbiAgICB9XG5cbiAgICBvdmVyKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jbGVhclByZXZpb3VzUmVuZGVyKCk7XG4gICAgICAgIGxldCBsb3NlclNwZWxsID0gbmV3IFNwZWxsKHRoaXMuZ3JpZCk7XG5cbiAgICAgICAgbG9zZXJTcGVsbC5jYXN0KFtcImJpZ1wiLCBcInJlZFwiLCBcInllbGxvd1wiLCBcIm1vbm9cIiwgXCJyaWdodFwiLCAnZG93bicsIFwiYmlnXCJdKTtcbiAgICAgICAgbG9zZXJTcGVsbC5zdG9yZWRUZXh0ID1cbiAgICAgICAgICh0aGlzLmNhbGN1bGF0ZVdQTSgpICsgJyBXUE0nKTtcbiAgICAgICAgdGhpcy5ncmlkLnNwZWxscy5wdXNoKGxvc2VyU3BlbGwpO1xuXG4gICAgICAgIHRoaXMuZ3JpZC5leGl0VHlwZXRlc3QoKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVXUE0oKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50VGltZSkgcmV0dXJuIDA7XG4gICAgICAgIGxldCBjb3JyZWN0S2V5c3Ryb2tlcyA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRXb3JkOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB3b3JkID0gdGhpcy51c2VyV29yZHNbaV07XG5cbiAgICAgICAgICAgIGlmICghd29yZC5taXN0eXBlZCkge1xuICAgICAgICAgICAgICAgIGNvcnJlY3RLZXlzdHJva2VzICs9ICh3b3JkLndvcmQubGVuZ3RoICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihjb3JyZWN0S2V5c3Ryb2tlcyAvIDUpO1xuICAgIH1cblxuICAgIGNsZWFyUHJldmlvdXNSZW5kZXIoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5mb3JFYWNoKGVsZSA9PiBlbGUucmVtb3ZlKCkpO1xuICAgIH1cblxuICAgIHRpbWVzVXAoKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50VGltZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgdGltZUxlZnQgPVxuICAgICAgICAgIDYwIC0gTWF0aC5mbG9vcigobm93LmdldFRpbWUoKSAtIHRoaXMuY3VycmVudFRpbWUuZ2V0VGltZSgpKSAvIDEwMDApO1xuICAgICAgICByZXR1cm4gKHRpbWVMZWZ0IDwgMCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5jbGVhclByZXZpb3VzUmVuZGVyKCk7XG4gICAgICAgIGlmICh0aGlzLnRpbWVzVXAoKSkge1xuICAgICAgICAgICAgdGhpcy5vdmVyKClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5yZW5kZXJQYWRkaW5nKCk7XG4gICAgICAgIHRoaXMucmVuZGVyV29yZERpc3BsYXkoKVxuICAgICAgICB0aGlzLnJlbmRlcklucHV0KCk7XG5cbiAgICB9ICBcbiAgICBcbiAgICByZW5kZXJQYWRkaW5nKCkge1xuICAgICAgICBsZXQgbnVtUm93cyA9IHRoaXMubnVtUm93cyArIDc7IFxuICAgICAgICBsZXQgdG9wID0gdGhpcy5wb3NbMF0gLSAyO1xuICAgICAgICBsZXQgbGVmdCA9IHRoaXMucG9zWzFdIC0gMjtcbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy53aWR0aCArIDQ7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Sb3dzOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBsZXQgZWwgPSB0aGlzLmdyaWQuZ2V0RWxlbWVudChbaSArIHRvcCwgaiArIGxlZnRdKTtcbiAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc05hbWUgPSAndGVzdC1wYWRkaW5nJztcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMucHVzaChjaGlsZCk7XG4gICAgICAgICAgICAgICAgcmVwbGFjZUNoaWxkcmVuKGVsLCBjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJJbnB1dCgpIHtcbiAgICAgICAgbGV0IHRvcCA9IHRoaXMubnVtUm93cyArIHRoaXMucG9zWzBdICsgMjtcbiAgICAgICAgbGV0IGxlZnQgPSB0aGlzLnBvc1sxXTtcbiAgICAgICAgbGV0IGlucHV0d2lkdGggPSB0aGlzLndpZHRoIC0gNjtcbiAgICAgICAgbGV0IHRpbWVTdGFydCA9IHRoaXMud2lkdGg7XG4gICAgICAgIGxldCB0aW1lID0gdGhpcy5jYWxjdWxhdGVUaW1lKClcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0d2lkdGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBsZXQgZWwgPSB0aGlzLmdyaWQuZ2V0RWxlbWVudChbdG9wLCBpICsgbGVmdF0pO1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZChcInRlc3QtaW5wdXRcIiwgJ3R5cGV0ZXN0Jyk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMucHVzaChjaGlsZCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0W2ldKSBjaGlsZC5pbm5lclRleHQgPSB0aGlzLmlucHV0W2ldO1xuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXMuaW5wdXQubGVuZ3RoKSBjaGlsZC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgICAgICAgICByZXBsYWNlQ2hpbGRyZW4oZWwsIGNoaWxkKTtcbiAgICAgICAgICAgIHRpbWVTdGFydCA9IGkgKyBsZWZ0ICsgMztcbiAgICAgICAgfVxuXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIGxldCBlbCA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KFt0b3AsIGkgKyB0aW1lU3RhcnRdKTtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoXCJ0ZXN0LXRpbWVcIiwgXCJ0eXBldGVzdFwiKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIGNoaWxkLmlubmVyVGV4dCA9IHRpbWVbaV07XG4gICAgICAgICAgICByZXBsYWNlQ2hpbGRyZW4oZWwsIGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgcmVuZGVyV29yZERpc3BsYXkoKSB7XG4gICAgICAgIGxldCB3b3Jkc1JlbmRlcmVkID0gMDtcbiAgICAgICAgbGV0IGZpcnN0Q29sTGVuZ3RoID0gMDtcblxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLm51bVJvd3MgOyByb3cgKz0gMikge1xuXG4gICAgICAgICAgICBsZXQgY29sID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChjb2wgPD0gdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgICAgIGxldCB3b3JkSWR4ID0gdGhpcy5yZW5kZXJlZFdvcmRCZWdpbiArIHdvcmRzUmVuZGVyZWQ7XG4gICAgICAgICAgICAgICAgbGV0IHJlbmRlcmVkV29yZCA9IHRoaXMudXNlcldvcmRzW3dvcmRJZHhdO1xuICAgICAgICAgICAgICAgIGlmIChjb2wgKyByZW5kZXJlZFdvcmQud29yZC5sZW5ndGggPiB0aGlzLndpZHRoKSBicmVhaztcblxuICAgICAgICAgICAgICAgIGxldCByZW5kZXJDb29yZCA9IFtyb3csIGNvbF07XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJXb3JkKHdvcmRJZHgsIHJlbmRlckNvb3JkKTtcbiAgICAgICAgICAgICAgICB3b3Jkc1JlbmRlcmVkICs9IDE7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbCArPSByZW5kZXJlZFdvcmQud29yZC5sZW5ndGggKyAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocm93ID09PSAwKSBmaXJzdENvbExlbmd0aCA9IHdvcmRzUmVuZGVyZWQ7XG5cbiAgICAgICAgfVxuIFxuICAgICAgICB0aGlzLnJlbmRlcmVkV29yZEVuZCA9IHRoaXMucmVuZGVyZWRXb3JkQmVnaW4gKyBmaXJzdENvbExlbmd0aDtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50V29yZCA+PSB0aGlzLnJlbmRlcmVkV29yZEVuZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFdvcmRCZWdpbiA9IHRoaXMuY3VycmVudFdvcmQ7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgY2FsY3VsYXRlVGltZSgpIHtcbiAgICAgICAgXG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50VGltZSkgcmV0dXJuICcxOjAwJztcblxuICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IHRpbWVMZWZ0ID0gNjAgLSBNYXRoLmZsb29yKChub3cuZ2V0VGltZSgpIC0gdGhpcy5jdXJyZW50VGltZS5nZXRUaW1lKCkpIC8gMTAwMCk7XG5cbiAgICAgICAgaWYgKHRpbWVMZWZ0IDwgMCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gJzA6MDAnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1pbiA9IE1hdGguZmxvb3IodGltZUxlZnQgLyA2MCk7XG4gICAgICAgIGxldCBzZWMgPSB0aW1lTGVmdCAlIDYwO1xuICAgICAgICBzZWMgPSAoc2VjIDwgMTApID8gJzAnICsgc2VjIDogc2VjLnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCBmb3JtYXR0ZWRUaW1lID0gbWluICsgJzonICsgc2VjO1xuICAgICAgICByZXR1cm4gZm9ybWF0dGVkVGltZTtcbiAgICB9XG5cbiAgICByZW5kZXJXb3JkKGlkeCwgcG9zKSB7XG4gICAgICAgIGxldCB0eXBlU3RhcnQgPSBhZGRDb29yZGluYXRlcyh0aGlzLnBvcywgWzAsMF0pXG4gICAgICAgIGxldCB3b3JkQmVnaW4gPSBhZGRDb29yZGluYXRlcyh0eXBlU3RhcnQsIHBvcyk7XG4gICAgICAgIGxldCB3b3JkID0gdGhpcy51c2VyV29yZHNbaWR4XTtcblxuICAgICAgICBsZXQgc3RhdHVzID0gJ25vbmUnO1xuXG4gICAgICAgIGlmICh3b3JkLm1pc3R5cGVkKSB7XG4gICAgICAgICAgICBzdGF0dXMgPSAncmVkJztcbiAgICAgICAgfSBlbHNlIGlmIChpZHggPCB0aGlzLmN1cnJlbnRXb3JkKSB7XG4gICAgICAgICAgICBzdGF0dXMgPSAnc3VjY2Vzcyc7XG4gICAgICAgIH0gZWxzZSBpZiAoaWR4ID09PSB0aGlzLmN1cnJlbnRXb3JkKSB7XG4gICAgICAgICAgICBsZXQgbWF0Y2hlcyA9IHRoaXMudXNlcldvcmRzW3RoaXMuY3VycmVudFdvcmRdLndvcmQgPT09IHRoaXMuaW5wdXQ7XG4gICAgICAgICAgICBzdGF0dXMgPSBtYXRjaGVzID8gJ3N1Y2Nlc3MnIDogJ2N1cnJlbnQnO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZC53b3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZWxlQ29vcmQgPSBhZGRDb29yZGluYXRlcyh3b3JkQmVnaW4sIFswLCBpXSlcbiAgICAgICAgICAgIGxldCBlbGUgPSB0aGlzLmdyaWQuZ2V0RWxlbWVudChlbGVDb29yZCk7XG5cbiAgICAgICAgICAgIGxldCBsZXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIGxldHRlci5pbm5lckhUTUwgPSB3b3JkLndvcmRbaV07XG4gICAgICAgICAgICBsZXR0ZXIuY2xhc3NMaXN0LmFkZChcInR5cGV0ZXN0XCIsIHN0YXR1cyk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMucHVzaChsZXR0ZXIpO1xuICAgICAgICAgICAgcmVwbGFjZUNoaWxkcmVuKGVsZSwgbGV0dGVyKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbmV4dFdvcmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlucHV0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmVuc3VyZVVzZXJXb3JkcygpO1xuICAgICAgICBsZXQgY3VycmVudFdvcmQgPSB0aGlzLnVzZXJXb3Jkc1t0aGlzLmN1cnJlbnRXb3JkXTtcbiAgICAgICAgY3VycmVudFdvcmQubWlzdHlwZWQgPSB0aGlzLmlucHV0ICE9PSBjdXJyZW50V29yZC53b3JkO1xuICAgICAgICB0aGlzLmlucHV0ID0gJyc7XG4gICAgICAgIHRoaXMuY3VycmVudFdvcmQrKztcbiAgICB9XG5cbiAgICB2YWxpZGF0ZUN1cnJlbnRXb3JkKCkge1xuICAgICAgICBsZXQgY3VycmVudFdvcmQgPSB0aGlzLnVzZXJXb3Jkc1t0aGlzLmN1cnJlbnRXb3JkXTtcbiAgICAgICAgbGV0IGlucHV0UkUgPSBuZXcgUmVnRXhwKCdeJyArIHRoaXMuaW5wdXQpXG4gICAgICAgIGN1cnJlbnRXb3JkLm1pc3R5cGVkID0gIWlucHV0UkUudGVzdChjdXJyZW50V29yZC53b3JkKTtcbiAgICB9XG5cblxuICAgIGVuc3VyZVVzZXJXb3JkcygpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlcldvcmRzLmxlbmd0aCA8IDUwICsgdGhpcy5jdXJyZW50V29yZCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNTA7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCByYW5kSWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50b3BXb3Jkcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGxldCByYW5kV29yZCA9IHRoaXMudG9wV29yZHNbcmFuZElkeF07XG4gICAgICAgICAgICAgICAgbGV0IHdvcmQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHdvcmQ6IHJhbmRXb3JkLFxuICAgICAgICAgICAgICAgICAgICBtaXN0eXBlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyV29yZHMucHVzaCh3b3JkKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNhbGN1bGF0ZVBvcygpIHtcbiAgICAgICAgbGV0IHggPSA1O1xuICAgICAgICBsZXQgeSA9IE1hdGguY2VpbCgoMC4zICogdGhpcy5ncmlkLndpZHRoKSAvIDIpO1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH1cblxuICAgIHJlY2VpdmUoZSkge1xuICAgICAgICAvL2RldGVybWluZXMgXG5cbiAgICAgICAgaWYgKFsxMywgMzJdLmluY2x1ZGVzKGUua2V5Q29kZSkpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dFdvcmQoKTtcbiAgICAgICAgfSBlbHNlIGlmICgoZS5rZXlDb2RlID49IDY1ICYmIGUua2V5Q29kZSA8IDkxKSB8fCBlLmtleUNvZGUgPT09IDIyMikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRUaW1lKSB0aGlzLmN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQgKz0gZS5rZXk7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlQ3VycmVudFdvcmQoKVxuICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5leGl0VHlwZXRlc3QoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0KSB0aGlzLmlucHV0ID0gdGhpcy5pbnB1dC5zbGljZSgwLCB0aGlzLmlucHV0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUN1cnJlbnRXb3JkKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG59ICIsImV4cG9ydCBmdW5jdGlvbiBhZGRDb29yZGluYXRlcyhhMSwgYTIpIHtcbiAgICByZXR1cm4gW2ExWzBdICsgYTJbMF0sIGExWzFdICsgYTJbMV1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQm91bmRlZENvb3JkaW5hdGVzKGExLCBhMiwgZ3JpZCkge1xuICAgIGxldCB4ID0gYTFbMF0gKyBhMlswXVxuICAgIGxldCB5ID0gYTFbMV0gKyBhMlsxXTtcbiAgICB4ID0geCAlIGdyaWQuaGVpZ2h0O1xuICAgIHkgPSB5ICUgZ3JpZC53aWR0aDtcbiAgICBpZiAoeCA8IDApIHggKz0gZ3JpZC5oZWlnaHQ7XG4gICAgaWYgKHkgPCAwKSB5ICs9IGdyaWQud2lkdGg7XG4gICAgcmV0dXJuIFt4LHldXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlQ2hpbGRyZW4ocGFyZW50LCBjaGlsZCkge1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbENvb3JkaW5hdGVzKGExLCBhMikge1xuICAgIHJldHVybiBhMVswXSA9PT0gYTJbMF0gJiYgYTFbMV0gPT09IGEyWzFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5jbHVkZXNDb29yZGluYXRlcyhjb29yZExpc3QsIGNvb3JkKSB7XG4gICAgbGV0IHJlcyA9IGZhbHNlO1xuXG4gICAgY29vcmRMaXN0LmZvckVhY2goeHkgPT4ge1xuICAgICAgICBpZiAoZXF1YWxDb29yZGluYXRlcyh4eSwgY29vcmQpKSB7XG4gICAgICAgICAgICByZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9FbW9qaShzdHIpIHtcbiAgICBzdHIgPSBzdHIudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBFTU9KSVMgPSBbXG4gICAgICBcIvCfmKBcIixcbiAgICAgIFwi8J+Ys1wiLFxuICAgICAgXCLwn5Go4oCN8J+RqOKAjfCfkaZcIixcbiAgICAgIFwi8J+NhlwiLFxuICAgICAgXCLwn5C1XCIsXG4gICAgICBcIvCfkLFcIixcbiAgICAgIFwi8J+SqVwiLFxuICAgICAgXCLwn4yeXCIsXG4gICAgICBcIvCfjIhcIixcbiAgICAgIFwi8J+MilwiLFxuICAgICAgXCLwn5e9XCIsXG4gICAgICBcIvCfm7hcIixcbiAgICAgIFwi8J+RqOKAjfCfkajigI3wn5GmXCIsXG4gICAgICBcIvCfpZNcIixcbiAgICAgIFwi8J+RjFwiLFxuICAgICAgXCLwn4+eXCIsXG4gICAgICBcIvCfjqJcIixcbiAgICAgIFwi8J+allwiLFxuICAgICAgXCLwn42pXCIsXG4gICAgICBcIvCfjZRcIixcbiAgICAgIFwi8J+HrvCfh7dcIixcbiAgICAgIFwi8J+kpVwiLFxuICAgICAgXCLwn5GCXCIsXG4gICAgICBcIuKYolwiLFxuICAgICAgXCLwn4i1XCIsXG4gICAgICBcIvCfpKNcIlxuICAgIF07XG5cblxuICAgIGxldCBjb2RlID0gc3RyLmNoYXJDb2RlQXQoMCkgLSA5NztcbiAgICByZXR1cm4gRU1PSklTW2NvZGVdO1xufSJdLCJzb3VyY2VSb290IjoiIn0=