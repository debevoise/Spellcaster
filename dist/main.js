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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9rZXl3b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FtcGxldGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc25ha2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwZWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9kYzJhIiwid2VicGFjazovLy8uL3NyYy90eXBldGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJHcmlkIiwicm9vdCIsImlucHV0IiwiQ0VMTFNJWkUiLCJjdXJzb3JQb3MiLCJoZWlnaHQiLCJNYXRoIiwiY2VpbCIsIm9mZnNldEhlaWdodCIsIndpZHRoIiwiZmxvb3IiLCJvZmZzZXRXaWR0aCIsInNwZWxscyIsImN1cnJlbnRTcGVsbCIsIlNwZWxsIiwiZnJhbWVyYXRlIiwidHlwZXRlc3QiLCJncmlkIiwicG9wdWxhdGUiLCJwbGF5Iiwia2V5d29yZHNMaXN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxvZ28iLCJjYXN0TmV3U3BlbGwiLCJvbmNsaWNrIiwibmV4dFNwZWxsIiwicHVzaCIsImdlbmVyYXRlUmFuZG9tU3BlbGwiLCJPYmplY3QiLCJrZXlzIiwia2V5d29yZHMiLCJmb3JFYWNoIiwia3ciLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJyZWNlaXZlIiwiYXBwZW5kQ2hpbGQiLCJyZXNpemVHcmlkIiwiYmluZCIsInJlY2VpdmVJbnB1dCIsInJlY2VpdmVDbGljayIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicG9zIiwidGFyZ2V0IiwiZGF0YXNldCIsIndpbmRvdyIsIm9ucmVzaXplIiwiaSIsInJvd0FyciIsInJvdyIsImNsYXNzTmFtZSIsImoiLCJjZWxsIiwiZmlyc3RDaGlsZCIsInJlbW92ZSIsImNsZWFyR3JpZEVsZW1lbnRzIiwic25ha2VNb2RlIiwiY2xlYXJQcmV2aW91c1JlbmRlciIsInN0b3JlZFRleHQiLCJhY3RpdmVUZXh0IiwicHJldlNwZWxsIiwicmVuZGVyIiwiY29vcmRpbmF0ZXMiLCJ4IiwieSIsIlNuYWtlIiwibGFzdFNwZWxsIiwiY2VudGVyUG9zIiwiaW5zdCIsImNhc3QiLCJjdXJyZW50UG9zIiwiVHlwZVRlc3QiLCJwb3NBcnIiLCJzcGxpdCIsIm1hcCIsInBhcnNlSW50Iiwia2V5Y29kZSIsImRlbHRhIiwiVXRpbCIsInJhbmRvbSIsImtleUNvZGUiLCJrZXkiLCJkZWxldGVDaGFyYWN0ZXIiLCJ1cGRhdGVDdXJyZW50UG9zaXRpb24iLCJsZW5ndGgiLCJkaWZmIiwic2xpY2UiLCJ0cmltU3BlbGxzIiwic3BlbGwiLCJtb3ZlIiwicmF0ZSIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZnJhbWUiLCJhbmltYXRlIiwic2FtcGxlVGV4dCIsImFsbCIsInR5cGUiLCJjbGVhciIsInNuYWtlIiwidGVzdCIsImNpcmNsZSIsImZhc3QiLCJhY3Rpb24iLCJzbG93IiwiYmlnIiwibGl0dGxlIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiY29taWMiLCJzYW5zIiwiZnVuIiwibW9ubyIsInNlcmlmIiwiYmx1ZSIsImdyZWVuIiwieWVsbG93IiwicHVycGxlIiwib3JhbmdlIiwicGluayIsImJsYWNrIiwicmVkIiwiZW1vamkiLCJoZWxsbyIsIm1hZGVieSIsImZvbyIsImV4cGxvZGUiLCJ0b3AxMDAwIiwid2hpdGVzcGFjZSIsIndvcmRzIiwidmFsaWR3b3JkcyIsImZpbHRlciIsIndvcmQiLCJyYW5nZSIsInBvc2l0aW9uIiwibW92ZXMiLCJwb3NpdGlvbnMiLCJyZW5kZXJlZEVsZW1lbnRzIiwiaGVhZCIsImJvZHkiLCJyZXMiLCJnZXRFbGVtZW50IiwibG9zZXJTcGVsbCIsInNjb3JlIiwicG9pbnRzIiwiZWxlIiwibmV4dFBvc2l0aW9uIiwiYWRkQ29vcmRpbmF0ZXMiLCJpbmNsdWRlc0Nvb3JkaW5hdGVzIiwib3V0T2ZCb3VuZHMiLCJoYW5kbGVMb3NzIiwiaXNFbXB0eSIsInVuc2hpZnQiLCJlYXQiLCJwb3AiLCJjb21iaW5lZERpcnMiLCJvcHBvc2l0ZURpciIsInNuYWNrIiwidXRpbFNwZWxsIiwiZWxlbWVudCIsImNoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVwbGFjZUNoaWxkcmVuIiwicGVyRnJhbWVLZXl3b3JkcyIsImFwcGxpZWRLZXl3b3JkcyIsInJhbmRvbVBvc2l0aW9uIiwia2V5d29yZEluZGV4Iiwicm90YXRlIiwiY2xhc3NBcnIiLCJjb2xvcnMiLCJmb250Iiwic2l6ZSIsInRvTG93ZXJDYXNlIiwiZXh0cmFjdEtleXdvcmRzIiwiQXJyYXkiLCJub3RTdG9yZWQiLCJhcHBseUtleXdvcmQiLCJpbmNsdWRlcyIsInBsYXlTbmFrZSIsIm5ld2ZwcyIsIm5ld3NpemUiLCJwbGF5VHlwZXRlc3QiLCJjaGFyIiwiZXhwbG9kZWQiLCJkaXJzIiwiYXBwbGllZERpcnMiLCJmaXJzdERpcklkeCIsImNvbnRhaW5zS2V5d29yZCIsInN1YnN0ciIsInN0ciIsImt3cyIsInNoaWZ0IiwicmFuZElkeCIsInRleHQiLCJzaWduIiwibGV0dGVyIiwic3BhbiIsInRleHRDb250ZW50IiwidG9VcHBlckNhc2UiLCJzdHlsZSIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwic2h1ZmZsZUNvbG9ycyIsImNvbG9yIiwiY2FsY3VsYXRlUG9zIiwidXNlcldvcmRzIiwiY3VycmVudFdvcmQiLCJiYWRrZXlzdHJva2VzIiwicmVuZGVyZWRXb3JkQmVnaW4iLCJyZW5kZXJlZFdvcmRFbmQiLCJudW1Sb3dzIiwiY3VycmVudFRpbWUiLCJ0b3BXb3JkcyIsImVuc3VyZVVzZXJXb3JkcyIsImNhbGN1bGF0ZVdQTSIsImV4aXRUeXBldGVzdCIsImNvcnJlY3RLZXlzdHJva2VzIiwibWlzdHlwZWQiLCJub3ciLCJEYXRlIiwidGltZUxlZnQiLCJnZXRUaW1lIiwidGltZXNVcCIsIm92ZXIiLCJyZW5kZXJQYWRkaW5nIiwicmVuZGVyV29yZERpc3BsYXkiLCJyZW5kZXJJbnB1dCIsInRvcCIsImVsIiwiaW5wdXR3aWR0aCIsInRpbWVTdGFydCIsInRpbWUiLCJjYWxjdWxhdGVUaW1lIiwid29yZHNSZW5kZXJlZCIsImZpcnN0Q29sTGVuZ3RoIiwiY29sIiwid29yZElkeCIsInJlbmRlcmVkV29yZCIsInJlbmRlckNvb3JkIiwicmVuZGVyV29yZCIsIm1pbiIsInNlYyIsInRvU3RyaW5nIiwiZm9ybWF0dGVkVGltZSIsImlkeCIsInR5cGVTdGFydCIsIndvcmRCZWdpbiIsInN0YXR1cyIsIm1hdGNoZXMiLCJlbGVDb29yZCIsImlubmVySFRNTCIsImlucHV0UkUiLCJSZWdFeHAiLCJyYW5kV29yZCIsIm5leHRXb3JkIiwidmFsaWRhdGVDdXJyZW50V29yZCIsImExIiwiYTIiLCJhZGRCb3VuZGVkQ29vcmRpbmF0ZXMiLCJwYXJlbnQiLCJyZW1vdmVDaGlsZCIsImVxdWFsQ29vcmRpbmF0ZXMiLCJjb29yZExpc3QiLCJjb29yZCIsInh5IiwidG9FbW9qaSIsIkVNT0pJUyIsImNvZGUiLCJjaGFyQ29kZUF0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxt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QUQsQ0FBRixLQUFVQyxFQUFFLENBQUMsQ0FBRCxDQUF0QztBQUNIO0FBRU0sU0FBUzlHLG1CQUFULENBQTZCbUgsU0FBN0IsRUFBd0NDLEtBQXhDLEVBQStDO0FBQ2xELE1BQUk1SCxHQUFHLEdBQUcsS0FBVjtBQUVBMkgsV0FBUyxDQUFDNU8sT0FBVixDQUFrQixVQUFBOE8sRUFBRSxFQUFJO0FBQ3BCLFFBQUlILGdCQUFnQixDQUFDRyxFQUFELEVBQUtELEtBQUwsQ0FBcEIsRUFBaUM7QUFDN0I1SCxTQUFHLEdBQUcsSUFBTjtBQUNIO0FBQ0osR0FKRDtBQU1BLFNBQU9BLEdBQVA7QUFDSDtBQUVNLFNBQVM4SCxPQUFULENBQWlCNUUsR0FBakIsRUFBc0I7QUFDekJBLEtBQUcsR0FBR0EsR0FBRyxDQUFDakIsV0FBSixFQUFOO0FBRUEsTUFBSThGLE1BQU0sR0FBRyxDQUNYLElBRFcsRUFFWCxJQUZXLEVBR1gsVUFIVyxFQUlYLElBSlcsRUFLWCxJQUxXLEVBTVgsSUFOVyxFQU9YLElBUFcsRUFRWCxJQVJXLEVBU1gsSUFUVyxFQVVYLElBVlcsRUFXWCxJQVhXLEVBWVgsSUFaVyxFQWFYLFVBYlcsRUFjWCxJQWRXLEVBZVgsSUFmVyxFQWdCWCxJQWhCVyxFQWlCWCxJQWpCVyxFQWtCWCxJQWxCVyxFQW1CWCxJQW5CVyxFQW9CWCxJQXBCVyxFQXFCWCxNQXJCVyxFQXNCWCxJQXRCVyxFQXVCWCxJQXZCVyxFQXdCWCxHQXhCVyxFQXlCWCxJQXpCVyxFQTBCWCxJQTFCVyxDQUFiO0FBOEJBLE1BQUlDLElBQUksR0FBRzlFLEdBQUcsQ0FBQytFLFVBQUosQ0FBZSxDQUFmLElBQW9CLEVBQS9CO0FBQ0EsU0FBT0YsTUFBTSxDQUFDQyxJQUFELENBQWI7QUFDSCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBTcGVsbCBmcm9tICcuL3NwZWxsJztcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IHsgU25ha2UgfSBmcm9tICcuL3NuYWtlJztcbmltcG9ydCBrZXl3b3JkcyBmcm9tIFwiLi9rZXl3b3Jkc1wiO1xuaW1wb3J0IHsgVHlwZVRlc3QgfSBmcm9tICcuL3R5cGV0ZXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XG4gICAgY29uc3RydWN0b3Iocm9vdCwgaW5wdXQpIHtcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5DRUxMU0laRSA9IDI1O1xuICAgICAgICB0aGlzLmN1cnNvclBvcyA9IFswLDBdO1xuICAgICAgICB0aGlzLmhlaWdodCA9IE1hdGguY2VpbChyb290Lm9mZnNldEhlaWdodCAvIHRoaXMuQ0VMTFNJWkUpIC0gMjtcbiAgICAgICAgdGhpcy53aWR0aCA9IE1hdGguZmxvb3Iocm9vdC5vZmZzZXRXaWR0aCAvIHRoaXMuQ0VMTFNJWkUpO1xuICAgICAgICB0aGlzLnNwZWxscyA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbCA9IG5ldyBTcGVsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5mcmFtZXJhdGUgPSAyMDA7XG5cbiAgICAgICAgdGhpcy50eXBldGVzdCA9IG51bGw7XG4gICAgICAgIHRoaXMuZ3JpZCA9IHRoaXMucG9wdWxhdGUoKTtcbiAgICAgICAgdGhpcy5wbGF5ID0gdHJ1ZTtcblxuICAgICAgICBsZXQga2V5d29yZHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrZXl3b3Jkcy1saXN0XCIpO1xuICAgICAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvJyk7XG4gICAgICAgIGxldCBjYXN0TmV3U3BlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FzdC1uZXctc3BlbGwnKTtcbiAgICAgICAgY2FzdE5ld1NwZWxsLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm5leHRTcGVsbCgpO1xuXG4gICAgICAgIGxvZ28ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5wdXNoKHRoaXMuY3VycmVudFNwZWxsLmdlbmVyYXRlUmFuZG9tU3BlbGwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMoa2V5d29yZHMpLmZvckVhY2goa3cgPT4ge1xuICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICBsaS5pbm5lclRleHQgPSBrdztcbiAgICAgICAgICBsaS5vbmNsaWNrID0gKCkgPT4gdGhpcy5jdXJyZW50U3BlbGwucmVjZWl2ZShrdyk7XG4gICAgICAgICAga2V5d29yZHNMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZXNpemVHcmlkID0gdGhpcy5yZXNpemVHcmlkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVjZWl2ZUlucHV0ID0gdGhpcy5yZWNlaXZlSW5wdXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWNlaXZlQ2xpY2sgPSB0aGlzLnJlY2VpdmVDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMucmVjZWl2ZUlucHV0KTtcblxuICAgICAgICB0aGlzLnJvb3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgeyBwb3MgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgICAgICBpZiAocG9zKSB0aGlzLnJlY2VpdmVDbGljayhwb3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cub25yZXNpemUgPSB0aGlzLnJlc2l6ZUdyaWQ7XG4gICAgfVxuIFxuICAgIHBvcHVsYXRlKCkge1xuICAgICAgICBsZXQgZ3JpZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3dBcnIgPSBbXTtcbiAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgcm93LmNsYXNzTmFtZSA9ICdyb3cnO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLndpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnY2VsbCc7XG4gICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnBvcyA9IFtpLCBqXVxuICAgICAgICAgICAgICAgIHJvd0Fyci5wdXNoKGNlbGwpO1xuXG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHRoaXMucm9vdC5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgZ3JpZC5wdXNoKHJvd0Fycik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ3JpZDtcbiAgICB9XG5cblxuICAgIGNsZWFyR3JpZEVsZW1lbnRzKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5yb290LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzaXplR3JpZCgpIHtcbiAgICAgICAgbGV0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuICAgICAgICB0aGlzLmNsZWFyR3JpZEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5mbG9vcihyb290Lm9mZnNldEhlaWdodCAvIHRoaXMuQ0VMTFNJWkUpIC0gMTtcbiAgICAgICAgdGhpcy53aWR0aCA9IE1hdGguZmxvb3Iocm9vdC5vZmZzZXRXaWR0aCAvIHRoaXMuQ0VMTFNJWkUpO1xuICAgICAgICB0aGlzLmdyaWQgPSB0aGlzLnBvcHVsYXRlKCk7XG4gICAgfVxuXG4gICAgbmV4dFNwZWxsKCkge1xuICAgICAgICBpZiAodGhpcy5zbmFrZU1vZGUoKSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwuY2xlYXJQcmV2aW91c1JlbmRlcigpXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbCA9IG5ldyBTcGVsbChncmlkKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRTcGVsbC5zdG9yZWRUZXh0IHx8IHRoaXMuY3VycmVudFNwZWxsLmFjdGl2ZVRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuc3BlbGxzLnB1c2godGhpcy5jdXJyZW50U3BlbGwpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwgPSBuZXcgU3BlbGwoZ3JpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcHJldlNwZWxsID0gdGhpcy5jdXJyZW50U3BlbGw7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbCA9IG5ldyBTcGVsbChncmlkKTtcbiAgICAgICAgICAgIHByZXZTcGVsbC5yZW5kZXIoKVxuICAgICAgICB9ICBcbiAgICB9XG5cbiAgICBnZXRFbGVtZW50KGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGxldCB4ID0gY29vcmRpbmF0ZXNbMF0gJSB0aGlzLmhlaWdodDtcbiAgICAgICAgbGV0IHkgPSBjb29yZGluYXRlc1sxXSAlIHRoaXMud2lkdGg7XG4gICAgICAgIGlmICh4IDwgMCkgeCArPSB0aGlzLmhlaWdodDtcbiAgICAgICAgaWYgKHkgPCAwKSB5ICs9IHRoaXMud2lkdGg7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRbeF1beV07XG4gICAgfVxuXG5cbiAgICBzbmFrZU1vZGUoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5jdXJyZW50U3BlbGwgaW5zdGFuY2VvZiBTbmFrZSlcbiAgICB9XG5cbiAgICBwbGF5U25ha2UoKSB7XG4gICAgICAgIGxldCBsYXN0U3BlbGwgPSB0aGlzLmN1cnJlbnRTcGVsbDtcbiAgICAgICAgdGhpcy5zcGVsbHMucHVzaChsYXN0U3BlbGwpO1xuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IodGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKHRoaXMud2lkdGggLyAyKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBjZW50ZXJQb3MgPSBbeCwgeV07XG5cbiAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwgPSBuZXcgU25ha2UodGhpcywgY2VudGVyUG9zKVxuICAgIH1cblxuICAgIHBsYXlUeXBldGVzdCgpIHtcbiAgICAgICAgLy8gY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgIHRoaXMuc3BlbGxzLnB1c2godGhpcy5jdXJyZW50U3BlbGwpO1xuICAgICAgICBsZXQgaW5zdCA9IG5ldyBTcGVsbCh0aGlzKTtcbiAgICAgICAgaW5zdC5jYXN0KFtcInJpZ2h0XCIsIFwiZ3JlZW5cIl0pO1xuICAgICAgICBpbnN0LnN0b3JlZFRleHQgPSBcInByZXNzIGVzYyB0byBleGl0XCI7XG4gICAgICAgIGluc3QuY3VycmVudFBvcyA9IFsxLCAxXTtcbiAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwgPSBpbnN0O1xuICAgICAgICBpZiAodGhpcy50eXBldGVzdCkgdGhpcy50eXBldGVzdC5jbGVhclByZXZpb3VzUmVuZGVyKCk7XG4gICAgICAgIHRoaXMudHlwZXRlc3QgPSBuZXcgVHlwZVRlc3QodGhpcyk7XG4gICAgICAgIHRoaXMudHlwZXRlc3QucmVuZGVyKCk7XG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRTcGVsbCA9IG51bGw7XG4gICAgfVxuXG4gICAgZXhpdFR5cGV0ZXN0KCkge1xuICAgICAgICBpZiAodGhpcy50eXBldGVzdCkgdGhpcy50eXBldGVzdC5jbGVhclByZXZpb3VzUmVuZGVyKCk7XG5cbiAgICAgICAgdGhpcy50eXBldGVzdCA9IG51bGw7XG4gICAgICAgIHRoaXMuY3VycmVudFNwZWxsLmNsZWFyUHJldmlvdXNSZW5kZXIoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwgPSBuZXcgU3BlbGwodGhpcyk7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUNsaWNrKHBvcykge1xuICAgICAgICBpZiAodGhpcy5zbmFrZU1vZGUoKSkgcmV0dXJuO1xuICAgICAgICBsZXQgcG9zQXJyID0gcG9zLnNwbGl0KFwiLFwiKS5tYXAoaSA9PiBwYXJzZUludChpKSk7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTcGVsbCkgdGhpcy5jdXJyZW50U3BlbGwuY3VycmVudFBvcyA9IHBvc0FycjtcbiAgICB9XG5cbiAgICB1cGRhdGVDdXJyZW50UG9zaXRpb24oa2V5Y29kZSkge1xuICAgICAgICBcbiAgICAgICAgbGV0IGRlbHRhOyBcblxuICAgICAgICBzd2l0Y2ggKGtleWNvZGUpIHtcbiAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgZGVsdGEgPSBbMCwgLTFdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgIGRlbHRhID0gWy0xLCAwXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICBkZWx0YSA9IFswLCAxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICBkZWx0YSA9IFsxLCAwXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIGlmICh0aGlzLnNuYWtlTW9kZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbC5yZWNlaXZlSW5wdXQoZGVsdGEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHsgY3VycmVudFBvcyB9ID0gdGhpcy5jdXJyZW50U3BlbGw7XG4gICAgICAgIHRoaXMuY3VycmVudFNwZWxsLmN1cnJlbnRQb3MgPSBVdGlsLmFkZENvb3JkaW5hdGVzKGRlbHRhLCBjdXJyZW50UG9zKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgcmFuZG9tUG9zaXRpb24oKSB7XG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5oZWlnaHQpO1xuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMud2lkdGgpO1xuXG4gICAgICAgIHJldHVybiBbeCx5XTtcbiAgICB9XG5cbiAgICByZWNlaXZlSW5wdXQoZSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNwZWxsKSB0aGlzLmN1cnJlbnRTcGVsbC5jbGVhclByZXZpb3VzUmVuZGVyKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbCA9IG5ldyBTcGVsbCh0aGlzKTsgXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50eXBldGVzdCkge1xuICAgICAgICAgIHRoaXMudHlwZXRlc3QucmVjZWl2ZShlKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDEzIHx8IGUua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgICB0aGlzLm5leHRTcGVsbCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA+PSA2NSAmJiBlLmtleUNvZGUgPCA5MSkge1xuICAgICAgICAgIGlmICh0aGlzLnNuYWtlTW9kZSgpKSByZXR1cm47XG4gICAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwucmVjZWl2ZShlLmtleSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA4ICYmIHRoaXMuY3VycmVudFNwZWxsKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc25ha2VNb2RlKCkpIHJldHVybjtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbC5kZWxldGVDaGFyYWN0ZXIoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPD0gNDAgJiYgZS5rZXlDb2RlID49IDM3KSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50UG9zaXRpb24oZS5rZXlDb2RlKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIFxuICAgIHRyaW1TcGVsbHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnNwZWxscy5sZW5ndGggPCAxMDApIHJldHVybjtcbiAgICAgICAgbGV0IGRpZmYgPSB0aGlzLnNwZWxscy5sZW5ndGggLSAxMDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZjsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWxsc1tpXS5jbGVhclByZXZpb3VzUmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zcGVsbHMgPSB0aGlzLnNwZWxscy5zbGljZShkaWZmKTtcbiAgICB9XG5cbiAgICBmcmFtZSgpIHtcbiAgICAgICAgdGhpcy50cmltU3BlbGxzKCk7XG4gICAgICAgIHRoaXMuc3BlbGxzLmZvckVhY2goc3BlbGwgPT4gc3BlbGwubW92ZSgpKTtcbiAgICBcbiAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwubW92ZSgpO1xuICAgICAgICBpZiAodGhpcy50eXBldGVzdCkge1xuICAgICAgICAgICAgdGhpcy50eXBldGVzdC5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBhbmltYXRlKHJhdGUpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMudHlwZXRlc3QpIHJldHVybjtcblxuICAgICAgICB0aGlzLmZyYW1lcmF0ZSA9IHJhdGUgfHwgdGhpcy5mcmFtZXJhdGU7XG4gICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mcmFtZSgpO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgICAgIH0sIHRoaXMuZnJhbWVyYXRlKTtcbiAgICB9XG5cblxufSIsImltcG9ydCBHcmlkIGZyb20gJy4vZ3JpZCc7XG5pbXBvcnQgU3BlbGwgZnJvbSAnLi9zcGVsbCc7XG5pbXBvcnQgeyBzYW1wbGVUZXh0IH0gZnJvbSBcIi4vc2FtcGxldGV4dFwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgeyBUeXBlVGVzdCB9IGZyb20gJy4vdHlwZXRlc3QnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0Jyk7XG4gICAgd2luZG93LlNwZWxsID0gU3BlbGw7XG4gICAgY29uc3QgZ3JpZCA9IG5ldyBHcmlkKHJvb3QsIGlucHV0KTtcblxuICAgIGdyaWQuYW5pbWF0ZSgpO1xuICAgIHdpbmRvdy5ncmlkID0gZ3JpZDtcbiAgICB3aW5kb3cuc2FtcGxlVGV4dCA9IHNhbXBsZVRleHQ7XG4gICAgd2luZG93LnR5cGV0ZXN0ID0gbmV3IFR5cGVUZXN0KGdyaWQpO1xuXG59KSIsImNvbnN0IGtleXdvcmRzID0ge1xuICBhbGw6IHsgdHlwZTogXCJhbGxcIiB9LFxuICBjbGVhcjogeyB0eXBlOiBcImNsZWFyXCIgfSxcbiAgc3BlbGw6IHsgdHlwZTogXCJzcGVsbFwiIH0sXG4gIHNuYWtlOiB7IHR5cGU6IFwic25ha2VcIiB9LFxuICB0eXBlOiB7IHR5cGU6IFwidHlwZXRlc3RcIiB9LFxuICB0ZXN0OiB7IHR5cGU6IFwidHlwZXRlc3RcIiB9LFxuICBjaXJjbGU6IHsgdHlwZTogXCJjaXJjbGVcIiB9LFxuICBmYXN0OiB7IHR5cGU6IFwic3BlZWRcIiwgYWN0aW9uOiAwLjggfSxcbiAgc2xvdzogeyB0eXBlOiBcInNwZWVkXCIsIGFjdGlvbjogMS4yNSB9LFxuICBiaWc6IHsgdHlwZTogXCJmb250c2l6ZVwiLCBhY3Rpb246IDEuMjUgfSxcbiAgbGl0dGxlOiB7IHR5cGU6IFwiZm9udHNpemVcIiwgYWN0aW9uOiAwLjggfSxcbiAgdXA6IHsgdHlwZTogXCJtb3ZlXCIsIGFjdGlvbjogWy0xLCAwXSB9LFxuICBkb3duOiB7IHR5cGU6IFwibW92ZVwiLCBhY3Rpb246IFsxLCAwXSB9LFxuICBsZWZ0OiB7IHR5cGU6IFwibW92ZVwiLCBhY3Rpb246IFswLCAtMV0gfSxcbiAgcmlnaHQ6IHsgdHlwZTogXCJtb3ZlXCIsIGFjdGlvbjogWzAsIDFdIH0sXG4gIGNvbWljOiB7IHR5cGU6IFwiZm9udFwiLCBhY3Rpb246IFwiY29taWNcIiB9LFxuICBzYW5zOiB7IHR5cGU6IFwiZm9udFwiLCBhY3Rpb246IFwic2Fuc1wiIH0sXG4gIGZ1bjogeyB0eXBlOiBcImZvbnRcIiwgYWN0aW9uOiBcImZ1blwiIH0sXG4gIG1vbm86IHsgdHlwZTogXCJmb250XCIsIGFjdGlvbjogXCJtb25vXCIgfSxcbiAgc2VyaWY6IHsgdHlwZTogXCJmb250XCIsIGFjdGlvbjogXCJzZXJpZlwiIH0sXG4gIGJsdWU6IHsgdHlwZTogXCJjb2xvclwiLCBhY3Rpb246IFwiIzU3OThhZFwiIH0sXG4gIGdyZWVuOiB7IHR5cGU6IFwiY29sb3JcIiwgYWN0aW9uOiBcIiM1N2FkNmVcIiB9LFxuICB5ZWxsb3c6IHsgdHlwZTogXCJjb2xvclwiLCBhY3Rpb246IFwiI2RiYzAzNVwiIH0sXG4gIHB1cnBsZTogeyB0eXBlOiBcImNvbG9yXCIsIGFjdGlvbjogXCIjOWQ2NGUzXCIgfSxcbiAgb3JhbmdlOiB7IHR5cGU6IFwiY29sb3JcIiwgYWN0aW9uOiBcIiNlNjdlMzlcIiB9LFxuICBwaW5rOiB7IHR5cGU6IFwiY29sb3JcIiwgYWN0aW9uOiBcIiNmMjBhZWVcIiB9LFxuICBibGFjazogeyB0eXBlOiBcImNvbG9yXCIsIGFjdGlvbjogXCIjMjIyZTJjXCIgfSxcbiAgcmVkOiB7IHR5cGU6IFwiY29sb3JcIiwgYWN0aW9uOiBcIiNkZTQ4MWJcIiB9LFxuICBlbW9qaTogeyB0eXBlOiBcImVtb2ppXCIgfSxcbiAgaGVsbG86IHsgdHlwZTogXCJ0ZXh0XCIsIGFjdGlvbjogXCJ3b3JsZFwiIH0sXG4gIG1hZGVieTogeyB0eXBlOiBcInRleHRcIiwgYWN0aW9uOiBcIiBzaW1vbiBkZWJldm9pc2VcIiB9LFxuICBmb286IHsgdHlwZTogXCJ0ZXh0XCIsIGFjdGlvbjogXCJiYXJcIiB9LFxuICBleHBsb2RlOiB7IHR5cGU6IFwiZXhwbG9kZVwiIH1cbiAgLy8gaGVscDogeyB0eXBlOiBcInRleHRcIiwgYWN0aW9uOiBcIiBJIGNhbid0XCIgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQga2V5d29yZHM7XG5cbi8vIFRPRE86IFxuLy8gcm90YXRlLCBzbmFrZSwgdHlwZXRlc3QsIGFib3V0LCBpbmRleCwgICIsImxldCB0b3AxMDAwID0gYHRoZVxub2ZcbnRvXG5hbmRcbmFcbmluXG5pc1xuaXRcbnlvdVxudGhhdFxuaGVcbndhc1xuZm9yXG5vblxuYXJlXG53aXRoXG5hc1xuSVxuaGlzXG50aGV5XG5iZVxuYXRcbm9uZVxuaGF2ZVxudGhpc1xuZnJvbVxub3JcbmhhZFxuYnlcbm5vdFxud29yZFxuYnV0XG53aGF0XG5zb21lXG53ZVxuY2FuXG5vdXRcbm90aGVyXG53ZXJlXG5hbGxcbnRoZXJlXG53aGVuXG51cFxudXNlXG55b3VyXG5ob3dcbnNhaWRcbmFuXG5lYWNoXG5zaGVcbndoaWNoXG5kb1xudGhlaXJcbnRpbWVcbmlmXG53aWxsXG53YXlcbmFib3V0XG5tYW55XG50aGVuXG50aGVtXG53cml0ZVxud291bGRcbmxpa2VcbnNvXG50aGVzZVxuaGVyXG5sb25nXG5tYWtlXG50aGluZ1xuc2VlXG5oaW1cbnR3b1xuaGFzXG5sb29rXG5tb3JlXG5kYXlcbmNvdWxkXG5nb1xuY29tZVxuZGlkXG5udW1iZXJcbnNvdW5kXG5ub1xubW9zdFxucGVvcGxlXG5teVxub3Zlclxua25vd1xud2F0ZXJcbnRoYW5cbmNhbGxcbmZpcnN0XG53aG9cbm1heVxuZG93blxuc2lkZVxuYmVlblxubm93XG5maW5kXG5hbnlcbm5ld1xud29ya1xucGFydFxudGFrZVxuZ2V0XG5wbGFjZVxubWFkZVxubGl2ZVxud2hlcmVcbmFmdGVyXG5iYWNrXG5saXR0bGVcbm9ubHlcbnJvdW5kXG5tYW5cbnllYXJcbmNhbWVcbnNob3dcbmV2ZXJ5XG5nb29kXG5tZVxuZ2l2ZVxub3VyXG51bmRlclxubmFtZVxudmVyeVxudGhyb3VnaFxuanVzdFxuZm9ybVxuc2VudGVuY2VcbmdyZWF0XG50aGlua1xuc2F5XG5oZWxwXG5sb3dcbmxpbmVcbmRpZmZlclxudHVyblxuY2F1c2Vcbm11Y2hcbm1lYW5cbmJlZm9yZVxubW92ZVxucmlnaHRcbmJveVxub2xkXG50b29cbnNhbWVcbnRlbGxcbmRvZXNcbnNldFxudGhyZWVcbndhbnRcbmFpclxud2VsbFxuYWxzb1xucGxheVxuc21hbGxcbmVuZFxucHV0XG5ob21lXG5yZWFkXG5oYW5kXG5wb3J0XG5sYXJnZVxuc3BlbGxcbmFkZFxuZXZlblxubGFuZFxuaGVyZVxubXVzdFxuYmlnXG5oaWdoXG5zdWNoXG5mb2xsb3dcbmFjdFxud2h5XG5hc2tcbm1lblxuY2hhbmdlXG53ZW50XG5saWdodFxua2luZFxub2ZmXG5uZWVkXG5ob3VzZVxucGljdHVyZVxudHJ5XG51c1xuYWdhaW5cbmFuaW1hbFxucG9pbnRcbm1vdGhlclxud29ybGRcbm5lYXJcbmJ1aWxkXG5zZWxmXG5lYXJ0aFxuZmF0aGVyXG5oZWFkXG5zdGFuZFxub3duXG5wYWdlXG5zaG91bGRcbmNvdW50cnlcbmZvdW5kXG5hbnN3ZXJcbnNjaG9vbFxuZ3Jvd1xuc3R1ZHlcbnN0aWxsXG5sZWFyblxucGxhbnRcbmNvdmVyXG5mb29kXG5zdW5cbmZvdXJcbmJldHdlZW5cbnN0YXRlXG5rZWVwXG5leWVcbm5ldmVyXG5sYXN0XG5sZXRcbnRob3VnaHRcbmNpdHlcbnRyZWVcbmNyb3NzXG5mYXJtXG5oYXJkXG5zdGFydFxubWlnaHRcbnN0b3J5XG5zYXdcbmZhclxuc2VhXG5kcmF3XG5sZWZ0XG5sYXRlXG5ydW5cbmRvbid0XG53aGlsZVxucHJlc3NcbmNsb3NlXG5uaWdodFxucmVhbFxubGlmZVxuZmV3XG5ub3J0aFxub3Blblxuc2VlbVxudG9nZXRoZXJcbm5leHRcbndoaXRlXG5jaGlsZHJlblxuYmVnaW5cbmdvdFxud2Fsa1xuZXhhbXBsZVxuZWFzZVxucGFwZXJcbmdyb3VwXG5hbHdheXNcbm11c2ljXG50aG9zZVxuYm90aFxubWFya1xub2Z0ZW5cbmxldHRlclxudW50aWxcbm1pbGVcbnJpdmVyXG5jYXJcbmZlZXRcbmNhcmVcbnNlY29uZFxuYm9va1xuY2FycnlcbnRvb2tcbnNjaWVuY2VcbmVhdFxucm9vbVxuZnJpZW5kXG5iZWdhblxuaWRlYVxuZmlzaFxubW91bnRhaW5cbnN0b3Bcbm9uY2VcbmJhc2VcbmhlYXJcbmhvcnNlXG5jdXRcbnN1cmVcbndhdGNoXG5jb2xvclxuZmFjZVxud29vZFxubWFpblxuZW5vdWdoXG5wbGFpblxuZ2lybFxudXN1YWxcbnlvdW5nXG5yZWFkeVxuYWJvdmVcbmV2ZXJcbnJlZFxubGlzdFxudGhvdWdoXG5mZWVsXG50YWxrXG5iaXJkXG5zb29uXG5ib2R5XG5kb2dcbmZhbWlseVxuZGlyZWN0XG5wb3NlXG5sZWF2ZVxuc29uZ1xubWVhc3VyZVxuZG9vclxucHJvZHVjdFxuYmxhY2tcbnNob3J0XG5udW1lcmFsXG5jbGFzc1xud2luZFxucXVlc3Rpb25cbmhhcHBlblxuY29tcGxldGVcbnNoaXBcbmFyZWFcbmhhbGZcbnJvY2tcbm9yZGVyXG5maXJlXG5zb3V0aFxucHJvYmxlbVxucGllY2VcbnRvbGRcbmtuZXdcbnBhc3NcbnNpbmNlXG50b3Bcbndob2xlXG5raW5nXG5zcGFjZVxuaGVhcmRcbmJlc3RcbmhvdXJcbmJldHRlclxudHJ1ZVxuZHVyaW5nXG5odW5kcmVkXG5maXZlXG5yZW1lbWJlclxuc3RlcFxuZWFybHlcbmhvbGRcbndlc3Rcbmdyb3VuZFxuaW50ZXJlc3RcbnJlYWNoXG5mYXN0XG52ZXJiXG5zaW5nXG5saXN0ZW5cbnNpeFxudGFibGVcbnRyYXZlbFxubGVzc1xubW9ybmluZ1xudGVuXG5zaW1wbGVcbnNldmVyYWxcbnZvd2VsXG50b3dhcmRcbndhclxubGF5XG5hZ2FpbnN0XG5wYXR0ZXJuXG5zbG93XG5jZW50ZXJcbmxvdmVcbnBlcnNvblxubW9uZXlcbnNlcnZlXG5hcHBlYXJcbnJvYWRcbm1hcFxucmFpblxucnVsZVxuZ292ZXJuXG5wdWxsXG5jb2xkXG5ub3RpY2VcbnZvaWNlXG51bml0XG5wb3dlclxudG93blxuZmluZVxuY2VydGFpblxuZmx5XG5mYWxsXG5sZWFkXG5jcnlcbmRhcmtcbm1hY2hpbmVcbm5vdGVcbndhaXRcbnBsYW5cbmZpZ3VyZVxuc3RhclxuYm94XG5ub3VuXG5maWVsZFxucmVzdFxuY29ycmVjdFxuYWJsZVxucG91bmRcbmRvbmVcbmJlYXV0eVxuZHJpdmVcbnN0b29kXG5jb250YWluXG5mcm9udFxudGVhY2hcbndlZWtcbmZpbmFsXG5nYXZlXG5ncmVlblxub2hcbnF1aWNrXG5kZXZlbG9wXG5vY2Vhblxud2FybVxuZnJlZVxubWludXRlXG5zdHJvbmdcbnNwZWNpYWxcbm1pbmRcbmJlaGluZFxuY2xlYXJcbnRhaWxcbnByb2R1Y2VcbmZhY3RcbnN0cmVldFxuaW5jaFxubXVsdGlwbHlcbm5vdGhpbmdcbmNvdXJzZVxuc3RheVxud2hlZWxcbmZ1bGxcbmZvcmNlXG5ibHVlXG5vYmplY3RcbmRlY2lkZVxuc3VyZmFjZVxuZGVlcFxubW9vblxuaXNsYW5kXG5mb290XG5zeXN0ZW1cbmJ1c3lcbnRlc3RcbnJlY29yZFxuYm9hdFxuY29tbW9uXG5nb2xkXG5wb3NzaWJsZVxucGxhbmVcbnN0ZWFkXG5kcnlcbndvbmRlclxubGF1Z2hcbnRob3VzYW5kXG5hZ29cbnJhblxuY2hlY2tcbmdhbWVcbnNoYXBlXG5lcXVhdGVcbmhvdFxubWlzc1xuYnJvdWdodFxuaGVhdFxuc25vd1xudGlyZVxuYnJpbmdcbnllc1xuZGlzdGFudFxuZmlsbFxuZWFzdFxucGFpbnRcbmxhbmd1YWdlXG5hbW9uZ1xuZ3JhbmRcbmJhbGxcbnlldFxud2F2ZVxuZHJvcFxuaGVhcnRcbmFtXG5wcmVzZW50XG5oZWF2eVxuZGFuY2VcbmVuZ2luZVxucG9zaXRpb25cbmFybVxud2lkZVxuc2FpbFxubWF0ZXJpYWxcbnNpemVcbnZhcnlcbnNldHRsZVxuc3BlYWtcbndlaWdodFxuZ2VuZXJhbFxuaWNlXG5tYXR0ZXJcbmNpcmNsZVxucGFpclxuaW5jbHVkZVxuZGl2aWRlXG5zeWxsYWJsZVxuZmVsdFxucGVyaGFwc1xucGlja1xuc3VkZGVuXG5jb3VudFxuc3F1YXJlXG5yZWFzb25cbmxlbmd0aFxucmVwcmVzZW50XG5hcnRcbnN1YmplY3RcbnJlZ2lvblxuZW5lcmd5XG5odW50XG5wcm9iYWJsZVxuYmVkXG5icm90aGVyXG5lZ2dcbnJpZGVcbmNlbGxcbmJlbGlldmVcbmZyYWN0aW9uXG5mb3Jlc3RcbnNpdFxucmFjZVxud2luZG93XG5zdG9yZVxuc3VtbWVyXG50cmFpblxuc2xlZXBcbnByb3ZlXG5sb25lXG5sZWdcbmV4ZXJjaXNlXG53YWxsXG5jYXRjaFxubW91bnRcbndpc2hcbnNreVxuYm9hcmRcbmpveVxud2ludGVyXG5zYXRcbndyaXR0ZW5cbndpbGRcbmluc3RydW1lbnRcbmtlcHRcbmdsYXNzXG5ncmFzc1xuY293XG5qb2JcbmVkZ2VcbnNpZ25cbnZpc2l0XG5wYXN0XG5zb2Z0XG5mdW5cbmJyaWdodFxuZ2FzXG53ZWF0aGVyXG5tb250aFxubWlsbGlvblxuYmVhclxuZmluaXNoXG5oYXBweVxuaG9wZVxuZmxvd2VyXG5jbG90aGVcbnN0cmFuZ2VcbmdvbmVcbmp1bXBcbmJhYnlcbmVpZ2h0XG52aWxsYWdlXG5tZWV0XG5yb290XG5idXlcbnJhaXNlXG5zb2x2ZVxubWV0YWxcbndoZXRoZXJcbnB1c2hcbnNldmVuXG5wYXJhZ3JhcGhcbnRoaXJkXG5zaGFsbFxuaGVsZFxuaGFpclxuZGVzY3JpYmVcbmNvb2tcbmZsb29yXG5laXRoZXJcbnJlc3VsdFxuYnVyblxuaGlsbFxuc2FmZVxuY2F0XG5jZW50dXJ5XG5jb25zaWRlclxudHlwZVxubGF3XG5iaXRcbmNvYXN0XG5jb3B5XG5waHJhc2VcbnNpbGVudFxudGFsbFxuc2FuZFxuc29pbFxucm9sbFxudGVtcGVyYXR1cmVcbmZpbmdlclxuaW5kdXN0cnlcbnZhbHVlXG5maWdodFxubGllXG5iZWF0XG5leGNpdGVcbm5hdHVyYWxcbnZpZXdcbnNlbnNlXG5lYXJcbmVsc2VcbnF1aXRlXG5icm9rZVxuY2FzZVxubWlkZGxlXG5raWxsXG5zb25cbmxha2Vcbm1vbWVudFxuc2NhbGVcbmxvdWRcbnNwcmluZ1xub2JzZXJ2ZVxuY2hpbGRcbnN0cmFpZ2h0XG5jb25zb25hbnRcbm5hdGlvblxuZGljdGlvbmFyeVxubWlsa1xuc3BlZWRcbm1ldGhvZFxub3JnYW5cbnBheVxuYWdlXG5zZWN0aW9uXG5kcmVzc1xuY2xvdWRcbnN1cnByaXNlXG5xdWlldFxuc3RvbmVcbnRpbnlcbmNsaW1iXG5jb29sXG5kZXNpZ25cbnBvb3JcbmxvdFxuZXhwZXJpbWVudFxuYm90dG9tXG5rZXlcbmlyb25cbnNpbmdsZVxuc3RpY2tcbmZsYXRcbnR3ZW50eVxuc2tpblxuc21pbGVcbmNyZWFzZVxuaG9sZVxudHJhZGVcbm1lbG9keVxudHJpcFxub2ZmaWNlXG5yZWNlaXZlXG5yb3dcbm1vdXRoXG5leGFjdFxuc3ltYm9sXG5kaWVcbmxlYXN0XG50cm91YmxlXG5zaG91dFxuZXhjZXB0XG53cm90ZVxuc2VlZFxudG9uZVxuam9pblxuc3VnZ2VzdFxuY2xlYW5cbmJyZWFrXG5sYWR5XG55YXJkXG5yaXNlXG5iYWRcbmJsb3dcbm9pbFxuYmxvb2RcbnRvdWNoXG5ncmV3XG5jZW50XG5taXhcbnRlYW1cbndpcmVcbmNvc3Rcbmxvc3RcbmJyb3duXG53ZWFyXG5nYXJkZW5cbmVxdWFsXG5zZW50XG5jaG9vc2VcbmZlbGxcbmZpdFxuZmxvd1xuZmFpclxuYmFua1xuY29sbGVjdFxuc2F2ZVxuY29udHJvbFxuZGVjaW1hbFxuZ2VudGxlXG53b21hblxuY2FwdGFpblxucHJhY3RpY2VcbnNlcGFyYXRlXG5kaWZmaWN1bHRcbmRvY3RvclxucGxlYXNlXG5wcm90ZWN0XG5ub29uXG53aG9zZVxubG9jYXRlXG5yaW5nXG5jaGFyYWN0ZXJcbmluc2VjdFxuY2F1Z2h0XG5wZXJpb2RcbmluZGljYXRlXG5yYWRpb1xuc3Bva2VcbmF0b21cbmh1bWFuXG5oaXN0b3J5XG5lZmZlY3RcbmVsZWN0cmljXG5leHBlY3RcbmNyb3Bcbm1vZGVyblxuZWxlbWVudFxuaGl0XG5zdHVkZW50XG5jb3JuZXJcbnBhcnR5XG5zdXBwbHlcbmJvbmVcbnJhaWxcbmltYWdpbmVcbnByb3ZpZGVcbmFncmVlXG50aHVzXG5jYXBpdGFsXG53b24ndFxuY2hhaXJcbmRhbmdlclxuZnJ1aXRcbnJpY2hcbnRoaWNrXG5zb2xkaWVyXG5wcm9jZXNzXG5vcGVyYXRlXG5ndWVzc1xubmVjZXNzYXJ5XG5zaGFycFxud2luZ1xuY3JlYXRlXG5uZWlnaGJvclxud2FzaFxuYmF0XG5yYXRoZXJcbmNyb3dkXG5jb3JuXG5jb21wYXJlXG5wb2VtXG5zdHJpbmdcbmJlbGxcbmRlcGVuZFxubWVhdFxucnViXG50dWJlXG5mYW1vdXNcbmRvbGxhclxuc3RyZWFtXG5mZWFyXG5zaWdodFxudGhpblxudHJpYW5nbGVcbnBsYW5ldFxuaHVycnlcbmNoaWVmXG5jb2xvbnlcbmNsb2NrXG5taW5lXG50aWVcbmVudGVyXG5tYWpvclxuZnJlc2hcbnNlYXJjaFxuc2VuZFxueWVsbG93XG5ndW5cbmFsbG93XG5wcmludFxuZGVhZFxuc3BvdFxuZGVzZXJ0XG5zdWl0XG5jdXJyZW50XG5saWZ0XG5yb3NlXG5jb250aW51ZVxuYmxvY2tcbmNoYXJ0XG5oYXRcbnNlbGxcbnN1Y2Nlc3NcbmNvbXBhbnlcbnN1YnRyYWN0XG5ldmVudFxucGFydGljdWxhclxuZGVhbFxuc3dpbVxudGVybVxub3Bwb3NpdGVcbndpZmVcbnNob2VcbnNob3VsZGVyXG5zcHJlYWRcbmFycmFuZ2VcbmNhbXBcbmludmVudFxuY290dG9uXG5ib3JuXG5kZXRlcm1pbmVcbnF1YXJ0XG5uaW5lXG50cnVja1xubm9pc2VcbmxldmVsXG5jaGFuY2VcbmdhdGhlclxuc2hvcFxuc3RyZXRjaFxudGhyb3dcbnNoaW5lXG5wcm9wZXJ0eVxuY29sdW1uXG5tb2xlY3VsZVxuc2VsZWN0XG53cm9uZ1xuZ3JheVxucmVwZWF0XG5yZXF1aXJlXG5icm9hZFxucHJlcGFyZVxuc2FsdFxubm9zZVxucGx1cmFsXG5hbmdlclxuY2xhaW1cbmNvbnRpbmVudFxub3h5Z2VuXG5zdWdhclxuZGVhdGhcbnByZXR0eVxuc2tpbGxcbndvbWVuXG5zZWFzb25cbnNvbHV0aW9uXG5tYWduZXRcbnNpbHZlclxudGhhbmtcbmJyYW5jaFxubWF0Y2hcbnN1ZmZpeFxuZXNwZWNpYWxseVxuZmlnXG5hZnJhaWRcbmh1Z2VcbnNpc3Rlclxuc3RlZWxcbmRpc2N1c3NcbmZvcndhcmRcbnNpbWlsYXJcbmd1aWRlXG5leHBlcmllbmNlXG5zY29yZVxuYXBwbGVcbmJvdWdodFxubGVkXG5waXRjaFxuY29hdFxubWFzc1xuY2FyZFxuYmFuZFxucm9wZVxuc2xpcFxud2luXG5kcmVhbVxuZXZlbmluZ1xuY29uZGl0aW9uXG5mZWVkXG50b29sXG50b3RhbFxuYmFzaWNcbnNtZWxsXG52YWxsZXlcbm5vclxuZG91YmxlXG5zZWF0XG5hcnJpdmVcbm1hc3RlclxudHJhY2tcbnBhcmVudFxuc2hvcmVcbmRpdmlzaW9uXG5zaGVldFxuc3Vic3RhbmNlXG5mYXZvclxuY29ubmVjdFxucG9zdFxuc3BlbmRcbmNob3JkXG5mYXRcbmdsYWRcbm9yaWdpbmFsXG5zaGFyZVxuc3RhdGlvblxuZGFkXG5icmVhZFxuY2hhcmdlXG5wcm9wZXJcbmJhclxub2ZmZXJcbnNlZ21lbnRcbnNsYXZlXG5kdWNrXG5pbnN0YW50XG5tYXJrZXRcbmRlZ3JlZVxucG9wdWxhdGVcbmNoaWNrXG5kZWFyXG5lbmVteVxucmVwbHlcbmRyaW5rXG5vY2N1clxuc3VwcG9ydFxuc3BlZWNoXG5uYXR1cmVcbnJhbmdlXG5zdGVhbVxubW90aW9uXG5wYXRoXG5saXF1aWRcbmxvZ1xubWVhbnRcbnF1b3RpZW50XG50ZWV0aFxuc2hlbGxcbm5lY2tgO1xuXG5cbmxldCB3aGl0ZXNwYWNlID0gL1tcXHJcXG5dKy87XG5sZXQgd29yZHMgPSB0b3AxMDAwLnNwbGl0KHdoaXRlc3BhY2UpO1xubGV0IHZhbGlkd29yZHMgPSB3b3Jkcy5maWx0ZXIod29yZCA9PiB3b3JkLmxlbmd0aCA+IDIpO1xuXG5leHBvcnQgY29uc3Qgc2FtcGxlVGV4dCA9IChyYW5nZSA9IHZhbGlkd29yZHMubGVuZ3RoKSA9PiB7XG4gIHJldHVybiB2YWxpZHdvcmRzLnNsaWNlKDAsIHJhbmdlKTtcbn07IiwiaW1wb3J0IHsgYWRkQ29vcmRpbmF0ZXMsIHJlcGxhY2VDaGlsZHJlbiwgaW5jbHVkZXNDb29yZGluYXRlcyB9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCBTcGVsbCBmcm9tIFwiLi9zcGVsbFwiO1xuXG5leHBvcnQgY2xhc3MgU25ha2Uge1xuICAgIGNvbnN0cnVjdG9yKGdyaWQsIHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMubW92ZXMgPSBbMCwwXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbnMgPSBbcG9zaXRpb25dO1xuICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5ncmlkID0gZ3JpZDtcblxuICAgICAgICBsZXQgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBoZWFkLmNsYXNzTmFtZSA9ICdzbmFrZWhlYWQnO1xuICAgICAgICBoZWFkLmlubmVyVGV4dCA9IFwi8J+QjVwiO1xuICAgICAgICB0aGlzLmJvZHkgPSBbaGVhZF07IC8vIFt7IGVsZW1lbnQ6IDxzcGFuPiwgcG9zOiB9XVxuXG4gICAgICAgIGxldCBpbnN0ID0gbmV3IFNwZWxsKHRoaXMuZ3JpZCk7XG4gICAgICAgIGluc3Quc3RvcmVkVGV4dCA9ICdhcnJvdyBrZXlzIHRvIG1vdmUnO1xuICAgICAgICBpbnN0Lm1vdmVzID0gWzAsIDFdO1xuICAgICAgICBpbnN0LmNhc3QoWydncmVlbicsICdibHVlJ10pO1xuICAgICAgICB0aGlzLmluc3QgPSBpbnN0O1xuICAgICAgICB0aGlzLmdyaWQuc3BlbGxzLnB1c2goaW5zdCk7XG4gICAgfVxuXG4gICAgaXNFbXB0eShwb3MpIHtcbiAgICAgICAgbGV0IHJlcyA9ICF0aGlzLmdyaWQuZ2V0RWxlbWVudChwb3MpLmZpcnN0Q2hpbGQ7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgZ2V0UG9pbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbnMubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICBoYW5kbGVMb3NzKCkge1xuICAgICAgICB0aGlzLmNsZWFyUHJldmlvdXNSZW5kZXIoKTtcbiAgICAgICAgbGV0IGxvc2VyU3BlbGwgPSB0aGlzLmluc3Q7XG4gICAgICAgIFxuICAgICAgICBsb3NlclNwZWxsLmNhc3QoWydvcmFuZ2UnLCdmdW4nLCdiaWcnLCdiaWcnLCdiaWcnXSk7XG4gICAgICAgIGxldCBzY29yZSA9IHRoaXMuYm9keS5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgcG9pbnRzID0gc2NvcmUgPT09IDEgPyAnIHBvaW50JyA6ICcgcG9pbnRzJztcbiAgICAgICAgbG9zZXJTcGVsbC5zdG9yZWRUZXh0ID0gJ0dhbWUgb3ZlcjogJyArICh0aGlzLmJvZHkubGVuZ3RoIC0gMSkgKyBwb2ludHM7XG4gICAgICAgIHRoaXMuZ3JpZC5jdXJyZW50U3BlbGwgPSBuZXcgU3BlbGwodGhpcy5ncmlkKTtcbiAgICB9XG5cbiAgICBjbGVhclByZXZpb3VzUmVuZGVyKCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMuZm9yRWFjaChlbGUgPT4gZWxlLnJlbW92ZSgpKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzID0gW107XG4gICAgfVxuXG4gICAgb3V0T2ZCb3VuZHMocG9zKSB7XG4gICAgICAgIHJldHVybiAocG9zWzBdID49IHRoaXMuZ3JpZC5oZWlnaHQgfHwgXG4gICAgICAgICAgICBwb3NbMF0gPCAwIHx8IFxuICAgICAgICAgICAgcG9zWzFdID49IHRoaXMuZ3JpZC53aWR0aCB8fCBcbiAgICAgICAgICAgIHBvc1sxXSA8IDApXG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1vdmVzWzBdICYmICF0aGlzLm1vdmVzWzFdKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IFxuXG4gICAgICAgIGxldCBuZXh0UG9zaXRpb24gPSBhZGRDb29yZGluYXRlcyh0aGlzLnBvc2l0aW9uc1swXSwgdGhpcy5tb3ZlcywgdGhpcy5ncmlkKVxuXG4gICAgICAgIGlmIChpbmNsdWRlc0Nvb3JkaW5hdGVzKHRoaXMucG9zaXRpb25zLCBuZXh0UG9zaXRpb24pIHx8IFxuICAgICAgICAgICAgdGhpcy5vdXRPZkJvdW5kcyhuZXh0UG9zaXRpb24pKSB7XG5cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTG9zcygpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNFbXB0eShuZXh0UG9zaXRpb24pKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9ucy51bnNoaWZ0KG5leHRQb3NpdGlvbik7XG4gICAgICAgICAgICB0aGlzLmVhdChuZXh0UG9zaXRpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9ucy51bnNoaWZ0KG5leHRQb3NpdGlvbik7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9ucy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHJlY2VpdmVJbnB1dChkZWx0YSkge1xuICAgICAgICBsZXQgY29tYmluZWREaXJzID0gYWRkQ29vcmRpbmF0ZXMoZGVsdGEsIHRoaXMubW92ZXMpO1xuICAgICAgICBsZXQgb3Bwb3NpdGVEaXIgPSBjb21iaW5lZERpcnNbMF0gPT09IDAgJiYgY29tYmluZWREaXJzWzFdID09PSAwO1xuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9ucy5sZW5ndGggPT09IDEgfHwgIW9wcG9zaXRlRGlyKSB7IFxuICAgICAgICAgICAgdGhpcy5tb3ZlcyA9IGRlbHRhO1xuICAgICAgICB9IFxuICAgICAgICBcbiAgICB9XG5cbiAgICBlYXQocG9zKSB7XG4gICAgICAgIGxldCBzbmFjayA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KHBvcykuZmlyc3RDaGlsZDtcbiAgICAgICAgdGhpcy5ib2R5LnB1c2goc25hY2spO1xuICAgIH1cblxuICAgIGdlbmVyYXRlUmFuZG9tU3BlbGwoKSB7XG4gICAgICAgIGxldCB1dGlsU3BlbGwgPSBuZXcgU3BlbGwodGhpcy5ncmlkKTtcbiAgICAgICAgdXRpbFNwZWxsLmdlbmVyYXRlUmFuZG9tU3BlbGwoKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmNsZWFyUHJldmlvdXNSZW5kZXIoKTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9ucy5mb3JFYWNoKChwb3MsIGkpID0+IHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5ncmlkLmdldEVsZW1lbnQocG9zKTtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuYm9keVtpXTtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ3NuYWtlJylcbiAgICAgICAgICAgIHJlcGxhY2VDaGlsZHJlbihlbGVtZW50LCBjaGlsZCk7XG5cbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKGNoaWxkKTtcbiAgICAgICAgfSlcbiAgICB9XG59IiwiaW1wb3J0IEdyaWQgZnJvbSAnLi9ncmlkJztcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IGtleXdvcmRJbmRleCBmcm9tICcuL2tleXdvcmRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BlbGwge1xuICAgIGNvbnN0cnVjdG9yKGdyaWQpIHtcbiAgICAgICAgdGhpcy5wZXJGcmFtZUtleXdvcmRzID0gW107XG4gICAgICAgIHRoaXMuYXBwbGllZEtleXdvcmRzID0gW107XG4gICAgICAgIHRoaXMuZ3JpZCA9IGdyaWQ7XG4gICAgICAgIHRoaXMuY3VycmVudFBvcyA9IHRoaXMuZ3JpZC5yYW5kb21Qb3NpdGlvbigpO1xuXG4gICAgICAgIHRoaXMuc3RvcmVkVGV4dCA9ICcnO1xuICAgICAgICB0aGlzLmFjdGl2ZVRleHQgPSAnJztcblxuICAgICAgICB0aGlzLmtleXdvcmRJbmRleCA9IGtleXdvcmRJbmRleDtcblxuICAgICAgICB0aGlzLnJvdGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY2xhc3NBcnIgPSBbXTtcbiAgICAgICAgdGhpcy5tb3ZlcyA9IFswLDBdO1xuICAgICAgICB0aGlzLmNvbG9ycyA9IFtdO1xuICAgICAgICB0aGlzLmZvbnQgPSAnbW9ubyc7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDE1O1xuXG4gICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cyA9IFtdO1xuICAgIH1cblxuICAgIHJlY2VpdmUoaW5wdXQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVUZXh0ICs9IGlucHV0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuZXh0cmFjdEtleXdvcmRzKCk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZGVsZXRlQ2hhcmFjdGVyKCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVUZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVRleHQgPSB0aGlzLmFjdGl2ZVRleHQuc2xpY2UoMCwgdGhpcy5hY3RpdmVUZXh0Lmxlbmd0aCAtIDEpO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGNhc3Qoa2V5d29yZHMpIHtcbiAgICAgICAgaWYgKCEoa2V5d29yZHMgaW5zdGFuY2VvZiBBcnJheSkpIGtleXdvcmRzID0gW2tleXdvcmRzXTtcbiAgICAgICAgY29uc3Qgbm90U3RvcmVkID0gWydhbGwnLCAnY2xlYXInLCAnc3BlbGwnLCAnc25ha2UnLCAndGVzdCcsICdleHBsb2RlJ107XG5cbiAgICAgICAga2V5d29yZHMuZm9yRWFjaChrdyA9PiB7XG4gICAgICAgICAgICB0aGlzLmFwcGx5S2V5d29yZChrdyk7XG4gICAgICAgICAgICBpZiAoIW5vdFN0b3JlZC5pbmNsdWRlcyhrdykpIHRoaXMuYXBwbGllZEtleXdvcmRzLnB1c2goa3cpOyBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXBwbHlLZXl3b3JkKGt3KSB7XG4gICAgICAgIGlmICghdGhpcy5rZXl3b3JkSW5kZXhba3ddKSByZXR1cm47XG4gICAgICAgIGxldCB7IGFjdGlvbiwgdHlwZSB9ID0gdGhpcy5rZXl3b3JkSW5kZXhba3ddO1xuICAgICAgICBcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdtb3ZlJzpcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVzID0gVXRpbC5hZGRDb29yZGluYXRlcyh0aGlzLm1vdmVzLCBhY3Rpb24pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb2xvcic6IFxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JzLnB1c2goYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JvdGF0ZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGUgPSB0aGlzLnJvdGF0ZSA/IG51bGwgOiAncm90YXRlJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZvbnQnOlxuICAgICAgICAgICAgICAgIHRoaXMuZW1vamkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvbnQgPSBhY3Rpb247XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzbmFrZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLmZyYW1lcmF0ZSA9IDE1MDtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQucGxheVNuYWtlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzcGVlZCc6XG4gICAgICAgICAgICAgICAgbGV0IG5ld2ZwcyA9IE1hdGguZmxvb3IodGhpcy5ncmlkLmZyYW1lcmF0ZSAqIGFjdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKG5ld2ZwcyA+IDQwMDApIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5mcmFtZXJhdGUgPSA0MDAwMDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld2ZwcyA8IDEwMCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkLmZyYW1lcmF0ZSA9IDEwMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkLmZyYW1lcmF0ZSA9IG5ld2ZwcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlZFRleHQgKz0gYWN0aW9uO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZm9udHNpemUnOlxuICAgICAgICAgICAgICAgIGxldCBuZXdzaXplID0gTWF0aC5mbG9vcih0aGlzLnNpemUgKiBhY3Rpb24pO1xuICAgICAgICAgICAgICAgIGlmIChuZXdzaXplID4gNDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplID0gNDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdzaXplIDwgNikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSA2O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSA9IG5ld3NpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2lyY2xlJzpcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzQXJyLnB1c2goJ2NpcmNsZScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2xlYXInOlxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5zcGVsbHMuZm9yRWFjaChzcGVsbCA9PiBzcGVsbC5jbGVhclByZXZpb3VzUmVuZGVyKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5zcGVsbHMgPSBbXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Vtb2ppJzpcbiAgICAgICAgICAgICAgICB0aGlzLmVtb2ppID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NwZWxsJzpcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlUmFuZG9tU3BlbGwoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FsbCc6XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnNwZWxscy5mb3JFYWNoKHNwZWxsID0+IHNwZWxsLmNhc3QodGhpcy5hcHBsaWVkS2V5d29yZHMpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3R5cGV0ZXN0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQucGxheVR5cGV0ZXN0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdleHBsb2RlJzpcbiAgICAgICAgICAgICAgICBsZXQgZGVsdGE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW92ZXNbMF0gPT09IDAgJiYgdGhpcy5tb3Zlc1sxXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkZWx0YSA9IFswLCAxXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWx0YSA9IHRoaXMubW92ZXNcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5jdXJyZW50UG9zO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0b3JlZFRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXIgPSB0aGlzLnN0b3JlZFRleHRbaV07XG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGVsbCA9IG5ldyBTcGVsbCh0aGlzLmdyaWQpO1xuICAgICAgICAgICAgICAgICAgICBzcGVsbC5jYXN0KHRoaXMuYXBwbGllZEtleXdvcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgc3BlbGwuY3VycmVudFBvcyA9IHBvcztcbiAgICAgICAgICAgICAgICAgICAgc3BlbGwuZXhwbG9kZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGlycyA9IFsgJ2xlZnQnLCAndXAnLCAncmlnaHQnLCAnZG93bicgXVxuICAgICAgICAgICAgICAgICAgICBsZXQgYXBwbGllZERpcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpcnN0RGlySWR4ID0gTWF0aC5mbG9vcigoaSAlIDgpIC8gMik7XG4gICAgICAgICAgICAgICAgICAgIGFwcGxpZWREaXJzLnB1c2goZGlyc1tmaXJzdERpcklkeF0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSAlIDIgPT09IDEpIGFwcGxpZWREaXJzLnB1c2goZGlyc1soZmlyc3REaXJJZHggKyAxKSAlIDRdKVxuXG4gICAgICAgICAgICAgICAgICAgIHNwZWxsLmNhc3QoYXBwbGllZERpcnMpO1xuICAgICAgICAgICAgICAgICAgICBzcGVsbC5zdG9yZWRUZXh0ID0gY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5zcGVsbHMucHVzaChzcGVsbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcG9zID0gVXRpbC5hZGRDb29yZGluYXRlcyhwb3MsIGRlbHRhKTtcbiAgICAgICAgICAgICAgICB9ICAgXG5cbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlZFRleHQgPSBcIlwiO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZXh0cmFjdEtleXdvcmRzKCkge1xuICAgICAgICBpZiAoIXRoaXMuY29udGFpbnNLZXl3b3JkKHRoaXMuYWN0aXZlVGV4dCkpIHJldHVybjtcblxuICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSB0aGlzLmFjdGl2ZVRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdWJzdHIgPSB0aGlzLmFjdGl2ZVRleHQuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICBsZXQga3cgPSB0aGlzLmNvbnRhaW5zS2V5d29yZChzdWJzdHIpO1xuXG4gICAgICAgICAgICBpZiAoa3cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlZFRleHQgKz0gc3Vic3RyO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FzdChrdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVUZXh0ID0gdGhpcy5hY3RpdmVUZXh0LnNsaWNlKGkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdEtleXdvcmRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgY29udGFpbnNLZXl3b3JkKHN0cikge1xuICAgICAgICBsZXQga3dzID0gT2JqZWN0LmtleXModGhpcy5rZXl3b3JkSW5kZXgpO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQga3cgb2Yga3dzKSB7IFxuICAgICAgICAgICAgaWYgKHN0ci5pbmNsdWRlcyhrdykpIHJldHVybiBrdztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY2xlYXJQcmV2aW91c1JlbmRlcigpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzLmZvckVhY2goZWxlID0+IGVsZS5yZW1vdmUoKSk7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UG9zID0gVXRpbC5hZGRDb29yZGluYXRlcyh0aGlzLmN1cnJlbnRQb3MsIHRoaXMubW92ZXMpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHNodWZmbGVDb2xvcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbG9ycy5sZW5ndGggPT09IDApIHJldHVybiAnbm9uZSc7XG4gICAgICAgIGlmICh0aGlzLmNvbG9ycy5sZW5ndGggPT09IDEgKSByZXR1cm4gdGhpcy5jb2xvcnNbMF1cbiAgICAgICAgdGhpcy5jb2xvcnMucHVzaCh0aGlzLmNvbG9ycy5zaGlmdCgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzWzBdO1xuICAgIH1cblxuICAgIGdlbmVyYXRlUmFuZG9tU3BlbGwoKSB7XG4gICAgICAgIGxldCBrZXl3b3JkcyA9IE9iamVjdC5rZXlzKHRoaXMua2V5d29yZEluZGV4KTtcbiAgICAgICAgbGV0IGFwcGxpZWRLZXl3b3JkcyA9ICcnO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmFuZElkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChrZXl3b3Jkcy5sZW5ndGggLSA2KSkgKyA2OyBcbiAgICAgICAgICAgIGFwcGxpZWRLZXl3b3JkcyArPSBrZXl3b3Jkc1tyYW5kSWR4XTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3BlbGwgPSBuZXcgU3BlbGwodGhpcy5ncmlkKTtcbiAgICAgICAgc3BlbGwucmVjZWl2ZShhcHBsaWVkS2V5d29yZHMpO1xuICAgICAgICB0aGlzLmdyaWQuc3BlbGxzLnB1c2goc3BlbGwpO1xuICAgICAgICByZXR1cm4gc3BlbGw7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQcmV2aW91c1JlbmRlcigpO1xuXG5cbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLnN0b3JlZFRleHQgKyB0aGlzLmFjdGl2ZVRleHQ7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmN1cnJlbnRQb3M7XG4gICAgICAgIGxldCBkZWx0YTtcbiAgICAgICAgaWYgKHRoaXMubW92ZXNbMF0gPT09IDAgJiYgdGhpcy5tb3Zlc1sxXSA9PT0gMCkge1xuICAgICAgICAgICAgZGVsdGEgPSBbMCwxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB4ID0gTWF0aC5zaWduKHRoaXMubW92ZXNbMF0pO1xuICAgICAgICAgICAgbGV0IHkgPSBNYXRoLnNpZ24odGhpcy5tb3Zlc1sxXSk7XG4gICAgICAgICAgICBkZWx0YSA9IFt4LHldO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsZXR0ZXIgPSB0aGlzLmVtb2ppID8gVXRpbC50b0Vtb2ppKHRleHRbaV0pIDogdGV4dFtpXTtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCh0aGlzLmZvbnQsIHRoaXMucm90YXRlLCAnYWN0aXZlJywgLi4udGhpcy5jbGFzc0Fycik7XG4gICAgICAgICAgICBzcGFuLnN0eWxlLmZvbnRTaXplID0gdGhpcy5zaXplICsgJ3B4JztcbiAgICAgICAgICAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5zaHVmZmxlQ29sb3JzKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7IFxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmV4cGxvZGVkKSBzcGFuLnN0eWxlLmNvbG9yID0gXCIjZGU0ODFiXCI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmdyaWQuZ2V0RWxlbWVudChwb3MpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBVdGlsLnJlcGxhY2VDaGlsZHJlbihlbGVtZW50LCBzcGFuKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKHNwYW4pO1xuICAgICAgICAgICAgcG9zID0gVXRpbC5hZGRDb29yZGluYXRlcyhwb3MsIGRlbHRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdyaWQuY3VycmVudFNwZWxsID09PSB0aGlzKSB7XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTmFtZSA9ICdjdXJzb3InO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KHBvcyk7XG4gICAgICAgICAgICBVdGlsLnJlcGxhY2VDaGlsZHJlbihlbGVtZW50LCBzcGFuKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKHNwYW4pO1xuICAgICAgICB9O1xuICAgIH1cblxufVxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBzYW1wbGVUZXh0IH0gZnJvbSBcIi4vc2FtcGxldGV4dFwiO1xuaW1wb3J0IHsgcmVwbGFjZUNoaWxkcmVuLCBhZGRDb29yZGluYXRlcyB9IGZyb20gXCIuL3V0aWxcIjtcblxuZXhwb3J0IGNsYXNzIFR5cGVUZXN0IHtcbiAgICBjb25zdHJ1Y3RvcihncmlkKSB7XG4gICAgICAgIHRoaXMuZ3JpZCA9IGdyaWQ7XG4gICAgICAgIHRoaXMud2lkdGggPSBNYXRoLmZsb29yKHRoaXMuZ3JpZC53aWR0aCAqIDAuNyk7XG4gICAgICAgIC8vIHRoaXMuaGVpZ2h0ID0gTWF0aC5mbG9vcih0aGlzLmdyaWQuaGVpZ2h0ICogMC44KTsgXG4gICAgICAgIHRoaXMucG9zID0gdGhpcy5jYWxjdWxhdGVQb3MoKTtcbiAgICAgICAgdGhpcy51c2VyV29yZHMgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50V29yZCA9IDA7XG4gICAgICAgIHRoaXMuYmFka2V5c3Ryb2tlcyA9IDA7XG4gICAgICAgIHRoaXMucmVuZGVyZWRXb3JkQmVnaW4gPSAwO1xuICAgICAgICB0aGlzLnJlbmRlcmVkV29yZEVuZCA9IDA7XG4gICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cz0gW107XG4gICAgICAgIHRoaXMubnVtUm93cyA9IDM7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lO1xuICAgICAgICB0aGlzLmlucHV0ID0gXCJcIjtcblxuICAgICAgICB0aGlzLnRvcFdvcmRzID0gc2FtcGxlVGV4dCgpO1xuICAgICAgICB0aGlzLmVuc3VyZVVzZXJXb3JkcygpO1xuICAgIH1cblxuICAgIG92ZXIoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNsZWFyUHJldmlvdXNSZW5kZXIoKTtcbiAgICAgICAgbGV0IGxvc2VyU3BlbGwgPSBuZXcgU3BlbGwodGhpcy5ncmlkKTtcblxuICAgICAgICBsb3NlclNwZWxsLmNhc3QoW1wiYmlnXCIsIFwicmVkXCIsIFwieWVsbG93XCIsIFwibW9ub1wiLCBcInJpZ2h0XCIsICdkb3duJywgXCJiaWdcIl0pO1xuICAgICAgICBsb3NlclNwZWxsLnN0b3JlZFRleHQgPVxuICAgICAgICAgKHRoaXMuY2FsY3VsYXRlV1BNKCkgKyAnIFdQTScpO1xuICAgICAgICB0aGlzLmdyaWQuc3BlbGxzLnB1c2gobG9zZXJTcGVsbCk7XG5cbiAgICAgICAgdGhpcy5ncmlkLmV4aXRUeXBldGVzdCgpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVdQTSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRUaW1lKSByZXR1cm4gMDtcbiAgICAgICAgbGV0IGNvcnJlY3RLZXlzdHJva2VzID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3VycmVudFdvcmQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHdvcmQgPSB0aGlzLnVzZXJXb3Jkc1tpXTtcblxuICAgICAgICAgICAgaWYgKCF3b3JkLm1pc3R5cGVkKSB7XG4gICAgICAgICAgICAgICAgY29ycmVjdEtleXN0cm9rZXMgKz0gKHdvcmQud29yZC5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGNvcnJlY3RLZXlzdHJva2VzIC8gNSk7XG4gICAgfVxuXG4gICAgY2xlYXJQcmV2aW91c1JlbmRlcigpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzLmZvckVhY2goZWxlID0+IGVsZS5yZW1vdmUoKSk7XG4gICAgfVxuXG4gICAgdGltZXNVcCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRUaW1lKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCB0aW1lTGVmdCA9XG4gICAgICAgICAgNjAgLSBNYXRoLmZsb29yKChub3cuZ2V0VGltZSgpIC0gdGhpcy5jdXJyZW50VGltZS5nZXRUaW1lKCkpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiAodGltZUxlZnQgPCAwKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmNsZWFyUHJldmlvdXNSZW5kZXIoKTtcbiAgICAgICAgaWYgKHRoaXMudGltZXNVcCgpKSB7XG4gICAgICAgICAgICB0aGlzLm92ZXIoKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlbmRlclBhZGRpbmcoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJXb3JkRGlzcGxheSgpXG4gICAgICAgIHRoaXMucmVuZGVySW5wdXQoKTtcblxuICAgIH0gIFxuICAgIFxuICAgIHJlbmRlclBhZGRpbmcoKSB7XG4gICAgICAgIGxldCBudW1Sb3dzID0gdGhpcy5udW1Sb3dzICsgNzsgXG4gICAgICAgIGxldCB0b3AgPSB0aGlzLnBvc1swXSAtIDI7XG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5wb3NbMV0gLSAyO1xuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLndpZHRoICsgNDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvd3M7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIGxldCBlbCA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KFtpICsgdG9wLCBqICsgbGVmdF0pO1xuICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTmFtZSA9ICd0ZXN0LXBhZGRpbmcnO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICByZXBsYWNlQ2hpbGRyZW4oZWwsIGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcklucHV0KCkge1xuICAgICAgICBsZXQgdG9wID0gdGhpcy5udW1Sb3dzICsgdGhpcy5wb3NbMF0gKyAyO1xuICAgICAgICBsZXQgbGVmdCA9IHRoaXMucG9zWzFdO1xuICAgICAgICBsZXQgaW5wdXR3aWR0aCA9IHRoaXMud2lkdGggLSA2O1xuICAgICAgICBsZXQgdGltZVN0YXJ0ID0gdGhpcy53aWR0aDtcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLmNhbGN1bGF0ZVRpbWUoKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXR3aWR0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIGxldCBlbCA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KFt0b3AsIGkgKyBsZWZ0XSk7XG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKFwidGVzdC1pbnB1dFwiLCAndHlwZXRlc3QnKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKGNoaWxkKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRbaV0pIGNoaWxkLmlubmVyVGV4dCA9IHRoaXMuaW5wdXRbaV07XG4gICAgICAgICAgICBpZiAoaSA9PT0gdGhpcy5pbnB1dC5sZW5ndGgpIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICAgICAgICAgIHJlcGxhY2VDaGlsZHJlbihlbCwgY2hpbGQpO1xuICAgICAgICAgICAgdGltZVN0YXJ0ID0gaSArIGxlZnQgKyAzO1xuICAgICAgICB9XG5cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgbGV0IGVsID0gdGhpcy5ncmlkLmdldEVsZW1lbnQoW3RvcCwgaSArIHRpbWVTdGFydF0pO1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZChcInRlc3QtdGltZVwiLCBcInR5cGV0ZXN0XCIpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgY2hpbGQuaW5uZXJUZXh0ID0gdGltZVtpXTtcbiAgICAgICAgICAgIHJlcGxhY2VDaGlsZHJlbihlbCwgY2hpbGQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICByZW5kZXJXb3JkRGlzcGxheSgpIHtcbiAgICAgICAgbGV0IHdvcmRzUmVuZGVyZWQgPSAwO1xuICAgICAgICBsZXQgZmlyc3RDb2xMZW5ndGggPSAwO1xuXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMubnVtUm93cyA7IHJvdyArPSAyKSB7XG5cbiAgICAgICAgICAgIGxldCBjb2wgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGNvbCA8PSB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHdvcmRJZHggPSB0aGlzLnJlbmRlcmVkV29yZEJlZ2luICsgd29yZHNSZW5kZXJlZDtcbiAgICAgICAgICAgICAgICBsZXQgcmVuZGVyZWRXb3JkID0gdGhpcy51c2VyV29yZHNbd29yZElkeF07XG4gICAgICAgICAgICAgICAgaWYgKGNvbCArIHJlbmRlcmVkV29yZC53b3JkLmxlbmd0aCA+IHRoaXMud2lkdGgpIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgbGV0IHJlbmRlckNvb3JkID0gW3JvdywgY29sXTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcldvcmQod29yZElkeCwgcmVuZGVyQ29vcmQpO1xuICAgICAgICAgICAgICAgIHdvcmRzUmVuZGVyZWQgKz0gMTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29sICs9IHJlbmRlcmVkV29yZC53b3JkLmxlbmd0aCArIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyb3cgPT09IDApIGZpcnN0Q29sTGVuZ3RoID0gd29yZHNSZW5kZXJlZDtcblxuICAgICAgICB9XG4gXG4gICAgICAgIHRoaXMucmVuZGVyZWRXb3JkRW5kID0gdGhpcy5yZW5kZXJlZFdvcmRCZWdpbiArIGZpcnN0Q29sTGVuZ3RoO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRXb3JkID49IHRoaXMucmVuZGVyZWRXb3JkRW5kKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkV29yZEJlZ2luID0gdGhpcy5jdXJyZW50V29yZDtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVUaW1lKCkge1xuICAgICAgICBcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRUaW1lKSByZXR1cm4gJzE6MDAnO1xuXG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgdGltZUxlZnQgPSA2MCAtIE1hdGguZmxvb3IoKG5vdy5nZXRUaW1lKCkgLSB0aGlzLmN1cnJlbnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwKTtcblxuICAgICAgICBpZiAodGltZUxlZnQgPCAwKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiAnMDowMCc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWluID0gTWF0aC5mbG9vcih0aW1lTGVmdCAvIDYwKTtcbiAgICAgICAgbGV0IHNlYyA9IHRpbWVMZWZ0ICUgNjA7XG4gICAgICAgIHNlYyA9IChzZWMgPCAxMCkgPyAnMCcgKyBzZWMgOiBzZWMudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IGZvcm1hdHRlZFRpbWUgPSBtaW4gKyAnOicgKyBzZWM7XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWRUaW1lO1xuICAgIH1cblxuICAgIHJlbmRlcldvcmQoaWR4LCBwb3MpIHtcbiAgICAgICAgbGV0IHR5cGVTdGFydCA9IGFkZENvb3JkaW5hdGVzKHRoaXMucG9zLCBbMCwwXSlcbiAgICAgICAgbGV0IHdvcmRCZWdpbiA9IGFkZENvb3JkaW5hdGVzKHR5cGVTdGFydCwgcG9zKTtcbiAgICAgICAgbGV0IHdvcmQgPSB0aGlzLnVzZXJXb3Jkc1tpZHhdO1xuXG4gICAgICAgIGxldCBzdGF0dXMgPSAnbm9uZSc7XG5cbiAgICAgICAgaWYgKHdvcmQubWlzdHlwZWQpIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdyZWQnO1xuICAgICAgICB9IGVsc2UgaWYgKGlkeCA8IHRoaXMuY3VycmVudFdvcmQpIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdzdWNjZXNzJztcbiAgICAgICAgfSBlbHNlIGlmIChpZHggPT09IHRoaXMuY3VycmVudFdvcmQpIHtcbiAgICAgICAgICAgIGxldCBtYXRjaGVzID0gdGhpcy51c2VyV29yZHNbdGhpcy5jdXJyZW50V29yZF0ud29yZCA9PT0gdGhpcy5pbnB1dDtcbiAgICAgICAgICAgIHN0YXR1cyA9IG1hdGNoZXMgPyAnc3VjY2VzcycgOiAnY3VycmVudCc7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkLndvcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBlbGVDb29yZCA9IGFkZENvb3JkaW5hdGVzKHdvcmRCZWdpbiwgWzAsIGldKVxuICAgICAgICAgICAgbGV0IGVsZSA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KGVsZUNvb3JkKTtcblxuICAgICAgICAgICAgbGV0IGxldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgbGV0dGVyLmlubmVySFRNTCA9IHdvcmQud29yZFtpXTtcbiAgICAgICAgICAgIGxldHRlci5jbGFzc0xpc3QuYWRkKFwidHlwZXRlc3RcIiwgc3RhdHVzKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKGxldHRlcik7XG4gICAgICAgICAgICByZXBsYWNlQ2hpbGRyZW4oZWxlLCBsZXR0ZXIpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBuZXh0V29yZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIHRoaXMuZW5zdXJlVXNlcldvcmRzKCk7XG4gICAgICAgIGxldCBjdXJyZW50V29yZCA9IHRoaXMudXNlcldvcmRzW3RoaXMuY3VycmVudFdvcmRdO1xuICAgICAgICBjdXJyZW50V29yZC5taXN0eXBlZCA9IHRoaXMuaW5wdXQgIT09IGN1cnJlbnRXb3JkLndvcmQ7XG4gICAgICAgIHRoaXMuaW5wdXQgPSAnJztcbiAgICAgICAgdGhpcy5jdXJyZW50V29yZCsrO1xuICAgIH1cblxuICAgIHZhbGlkYXRlQ3VycmVudFdvcmQoKSB7XG4gICAgICAgIGxldCBjdXJyZW50V29yZCA9IHRoaXMudXNlcldvcmRzW3RoaXMuY3VycmVudFdvcmRdO1xuICAgICAgICBsZXQgaW5wdXRSRSA9IG5ldyBSZWdFeHAoJ14nICsgdGhpcy5pbnB1dClcbiAgICAgICAgY3VycmVudFdvcmQubWlzdHlwZWQgPSAhaW5wdXRSRS50ZXN0KGN1cnJlbnRXb3JkLndvcmQpO1xuICAgIH1cblxuXG4gICAgZW5zdXJlVXNlcldvcmRzKCkge1xuICAgICAgICBpZiAodGhpcy51c2VyV29yZHMubGVuZ3RoIDwgNTAgKyB0aGlzLmN1cnJlbnRXb3JkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA1MDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRvcFdvcmRzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRXb3JkID0gdGhpcy50b3BXb3Jkc1tyYW5kSWR4XTtcbiAgICAgICAgICAgICAgICBsZXQgd29yZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgd29yZDogcmFuZFdvcmQsXG4gICAgICAgICAgICAgICAgICAgIG1pc3R5cGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJXb3Jkcy5wdXNoKHdvcmQpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY2FsY3VsYXRlUG9zKCkge1xuICAgICAgICBsZXQgeCA9IDU7XG4gICAgICAgIGxldCB5ID0gTWF0aC5jZWlsKCgwLjMgKiB0aGlzLmdyaWQud2lkdGgpIC8gMik7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfVxuXG4gICAgcmVjZWl2ZShlKSB7XG4gICAgICAgIC8vZGV0ZXJtaW5lcyBcblxuICAgICAgICBpZiAoWzEzLCAzMl0uaW5jbHVkZXMoZS5rZXlDb2RlKSkge1xuICAgICAgICAgICAgdGhpcy5uZXh0V29yZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKChlLmtleUNvZGUgPj0gNjUgJiYgZS5rZXlDb2RlIDwgOTEpIHx8IGUua2V5Q29kZSA9PT0gMjIyKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFRpbWUpIHRoaXMuY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dCArPSBlLmtleTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVDdXJyZW50V29yZCgpXG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgdGhpcy5ncmlkLmV4aXRUeXBldGVzdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gOCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXQpIHRoaXMuaW5wdXQgPSB0aGlzLmlucHV0LnNsaWNlKDAsIHRoaXMuaW5wdXQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlQ3VycmVudFdvcmQoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbn0gIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZENvb3JkaW5hdGVzKGExLCBhMikge1xuICAgIHJldHVybiBbYTFbMF0gKyBhMlswXSwgYTFbMV0gKyBhMlsxXV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCb3VuZGVkQ29vcmRpbmF0ZXMoYTEsIGEyLCBncmlkKSB7XG4gICAgbGV0IHggPSBhMVswXSArIGEyWzBdXG4gICAgbGV0IHkgPSBhMVsxXSArIGEyWzFdO1xuICAgIHggPSB4ICUgZ3JpZC5oZWlnaHQ7XG4gICAgeSA9IHkgJSBncmlkLndpZHRoO1xuICAgIGlmICh4IDwgMCkgeCArPSBncmlkLmhlaWdodDtcbiAgICBpZiAoeSA8IDApIHkgKz0gZ3JpZC53aWR0aDtcbiAgICByZXR1cm4gW3gseV1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VDaGlsZHJlbihwYXJlbnQsIGNoaWxkKSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsQ29vcmRpbmF0ZXMoYTEsIGEyKSB7XG4gICAgcmV0dXJuIGExWzBdID09PSBhMlswXSAmJiBhMVsxXSA9PT0gYTJbMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlc0Nvb3JkaW5hdGVzKGNvb3JkTGlzdCwgY29vcmQpIHtcbiAgICBsZXQgcmVzID0gZmFsc2U7XG5cbiAgICBjb29yZExpc3QuZm9yRWFjaCh4eSA9PiB7XG4gICAgICAgIGlmIChlcXVhbENvb3JkaW5hdGVzKHh5LCBjb29yZCkpIHtcbiAgICAgICAgICAgIHJlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0Vtb2ppKHN0cikge1xuICAgIHN0ciA9IHN0ci50b0xvd2VyQ2FzZSgpO1xuXG4gICAgbGV0IEVNT0pJUyA9IFtcbiAgICAgIFwi8J+YoFwiLFxuICAgICAgXCLwn5izXCIsXG4gICAgICBcIvCfkajigI3wn5Go4oCN8J+RplwiLFxuICAgICAgXCLwn42GXCIsXG4gICAgICBcIvCfkLVcIixcbiAgICAgIFwi8J+QsVwiLFxuICAgICAgXCLwn5KpXCIsXG4gICAgICBcIvCfjJ5cIixcbiAgICAgIFwi8J+MiFwiLFxuICAgICAgXCLwn4yKXCIsXG4gICAgICBcIvCfl71cIixcbiAgICAgIFwi8J+buFwiLFxuICAgICAgXCLwn5Go4oCN8J+RqOKAjfCfkaZcIixcbiAgICAgIFwi8J+lk1wiLFxuICAgICAgXCLwn5GMXCIsXG4gICAgICBcIvCfj55cIixcbiAgICAgIFwi8J+OolwiLFxuICAgICAgXCLwn5qWXCIsXG4gICAgICBcIvCfjalcIixcbiAgICAgIFwi8J+NlFwiLFxuICAgICAgXCLwn4eu8J+Ht1wiLFxuICAgICAgXCLwn6SlXCIsXG4gICAgICBcIvCfkYJcIixcbiAgICAgIFwi4piiXCIsXG4gICAgICBcIvCfiLVcIixcbiAgICAgIFwi8J+ko1wiXG4gICAgXTtcblxuXG4gICAgbGV0IGNvZGUgPSBzdHIuY2hhckNvZGVBdCgwKSAtIDk3O1xuICAgIHJldHVybiBFTU9KSVNbY29kZV07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==