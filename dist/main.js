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
    key: "frame",
    value: function frame() {
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
      var notStored = ['all', 'clear', 'spell', 'snake', 'test'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9rZXl3b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FtcGxldGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc25ha2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwZWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiXSwibmFtZXMiOlsiR3JpZCIsInJvb3QiLCJpbnB1dCIsIkNFTExTSVpFIiwiY3Vyc29yUG9zIiwiaGVpZ2h0IiwiTWF0aCIsImNlaWwiLCJvZmZzZXRIZWlnaHQiLCJ3aWR0aCIsImZsb29yIiwib2Zmc2V0V2lkdGgiLCJzcGVsbHMiLCJjdXJyZW50U3BlbGwiLCJTcGVsbCIsImZyYW1lcmF0ZSIsInR5cGV0ZXN0IiwiZ3JpZCIsInBvcHVsYXRlIiwicGxheSIsImtleXdvcmRzTGlzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsb2dvIiwiY2FzdE5ld1NwZWxsIiwib25jbGljayIsIm5leHRTcGVsbCIsInB1c2giLCJnZW5lcmF0ZVJhbmRvbVNwZWxsIiwiT2JqZWN0Iiwia2V5cyIsImtleXdvcmRzIiwiZm9yRWFjaCIsImt3IiwibGkiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwicmVjZWl2ZSIsImFwcGVuZENoaWxkIiwicmVzaXplR3JpZCIsImJpbmQiLCJyZWNlaXZlSW5wdXQiLCJyZWNlaXZlQ2xpY2siLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInBvcyIsInRhcmdldCIsImRhdGFzZXQiLCJ3aW5kb3ciLCJvbnJlc2l6ZSIsImkiLCJyb3dBcnIiLCJyb3ciLCJjbGFzc05hbWUiLCJqIiwiY2VsbCIsImZpcnN0Q2hpbGQiLCJyZW1vdmUiLCJjbGVhckdyaWRFbGVtZW50cyIsInNuYWtlTW9kZSIsImNsZWFyUHJldmlvdXNSZW5kZXIiLCJzdG9yZWRUZXh0IiwiYWN0aXZlVGV4dCIsInByZXZTcGVsbCIsInJlbmRlciIsImNvb3JkaW5hdGVzIiwieCIsInkiLCJTbmFrZSIsImxhc3RTcGVsbCIsImNlbnRlclBvcyIsImluc3QiLCJjYXN0IiwiY3VycmVudFBvcyIsIlR5cGVUZXN0IiwicG9zQXJyIiwic3BsaXQiLCJtYXAiLCJwYXJzZUludCIsImtleWNvZGUiLCJkZWx0YSIsIlV0aWwiLCJyYW5kb20iLCJrZXlDb2RlIiwia2V5IiwiZGVsZXRlQ2hhcmFjdGVyIiwidXBkYXRlQ3VycmVudFBvc2l0aW9uIiwic3BlbGwiLCJtb3ZlIiwicmF0ZSIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZnJhbWUiLCJhbmltYXRlIiwic2FtcGxlVGV4dCIsImFsbCIsInR5cGUiLCJjbGVhciIsInNuYWtlIiwidGVzdCIsImNpcmNsZSIsImZhc3QiLCJhY3Rpb24iLCJzbG93IiwiYmlnIiwibGl0dGxlIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiY29taWMiLCJzYW5zIiwiZnVuIiwibW9ubyIsInNlcmlmIiwiYmx1ZSIsImdyZWVuIiwieWVsbG93IiwicHVycGxlIiwib3JhbmdlIiwicGluayIsImJsYWNrIiwicmVkIiwiZW1vamkiLCJoZWxsbyIsIm1hZGVieSIsImZvbyIsInRvcDEwMDAiLCJ3aGl0ZXNwYWNlIiwid29yZHMiLCJ2YWxpZHdvcmRzIiwiZmlsdGVyIiwid29yZCIsImxlbmd0aCIsInJhbmdlIiwic2xpY2UiLCJwb3NpdGlvbiIsIm1vdmVzIiwicG9zaXRpb25zIiwicmVuZGVyZWRFbGVtZW50cyIsImhlYWQiLCJib2R5IiwicmVzIiwiZ2V0RWxlbWVudCIsImxvc2VyU3BlbGwiLCJzY29yZSIsInBvaW50cyIsImVsZSIsIm5leHRQb3NpdGlvbiIsImFkZENvb3JkaW5hdGVzIiwiaW5jbHVkZXNDb29yZGluYXRlcyIsIm91dE9mQm91bmRzIiwiaGFuZGxlTG9zcyIsImlzRW1wdHkiLCJ1bnNoaWZ0IiwiZWF0IiwicG9wIiwiY29tYmluZWREaXJzIiwib3Bwb3NpdGVEaXIiLCJzbmFjayIsInV0aWxTcGVsbCIsImVsZW1lbnQiLCJjaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsInJlcGxhY2VDaGlsZHJlbiIsInBlckZyYW1lS2V5d29yZHMiLCJhcHBsaWVkS2V5d29yZHMiLCJyYW5kb21Qb3NpdGlvbiIsImtleXdvcmRJbmRleCIsInJvdGF0ZSIsImNsYXNzQXJyIiwiY29sb3JzIiwiZm9udCIsInNpemUiLCJ0b0xvd2VyQ2FzZSIsImV4dHJhY3RLZXl3b3JkcyIsIkFycmF5Iiwibm90U3RvcmVkIiwiYXBwbHlLZXl3b3JkIiwiaW5jbHVkZXMiLCJwbGF5U25ha2UiLCJuZXdmcHMiLCJuZXdzaXplIiwicGxheVR5cGV0ZXN0IiwiY29udGFpbnNLZXl3b3JkIiwic3Vic3RyIiwic3RyIiwia3dzIiwic2hpZnQiLCJyYW5kSWR4IiwidGV4dCIsInNpZ24iLCJsZXR0ZXIiLCJzcGFuIiwidGV4dENvbnRlbnQiLCJ0b1VwcGVyQ2FzZSIsInN0eWxlIiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzaHVmZmxlQ29sb3JzIiwiY29sb3IiLCJjYWxjdWxhdGVQb3MiLCJ1c2VyV29yZHMiLCJjdXJyZW50V29yZCIsImJhZGtleXN0cm9rZXMiLCJyZW5kZXJlZFdvcmRCZWdpbiIsInJlbmRlcmVkV29yZEVuZCIsIm51bVJvd3MiLCJjdXJyZW50VGltZSIsInRvcFdvcmRzIiwiZW5zdXJlVXNlcldvcmRzIiwiY2FsY3VsYXRlV1BNIiwiZXhpdFR5cGV0ZXN0IiwiY29ycmVjdEtleXN0cm9rZXMiLCJtaXN0eXBlZCIsIm5vdyIsIkRhdGUiLCJ0aW1lTGVmdCIsImdldFRpbWUiLCJ0aW1lc1VwIiwib3ZlciIsInJlbmRlclBhZGRpbmciLCJyZW5kZXJXb3JkRGlzcGxheSIsInJlbmRlcklucHV0IiwidG9wIiwiZWwiLCJpbnB1dHdpZHRoIiwidGltZVN0YXJ0IiwidGltZSIsImNhbGN1bGF0ZVRpbWUiLCJ3b3Jkc1JlbmRlcmVkIiwiZmlyc3RDb2xMZW5ndGgiLCJjb2wiLCJ3b3JkSWR4IiwicmVuZGVyZWRXb3JkIiwicmVuZGVyQ29vcmQiLCJyZW5kZXJXb3JkIiwibWluIiwic2VjIiwidG9TdHJpbmciLCJmb3JtYXR0ZWRUaW1lIiwiaWR4IiwidHlwZVN0YXJ0Iiwid29yZEJlZ2luIiwic3RhdHVzIiwibWF0Y2hlcyIsImVsZUNvb3JkIiwiaW5uZXJIVE1MIiwiaW5wdXRSRSIsIlJlZ0V4cCIsInJhbmRXb3JkIiwibmV4dFdvcmQiLCJ2YWxpZGF0ZUN1cnJlbnRXb3JkIiwiYTEiLCJhMiIsImFkZEJvdW5kZWRDb29yZGluYXRlcyIsInBhcmVudCIsInJlbW92ZUNoaWxkIiwiZXF1YWxDb29yZGluYXRlcyIsImNvb3JkTGlzdCIsImNvb3JkIiwieHkiLCJ0b0Vtb2ppIiwiRU1PSklTIiwiY29kZSIsImNoYXJDb2RlQXQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FB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QyxDQUFELENBQUYsS0FBVUMsRUFBRSxDQUFDLENBQUQsQ0FBdEM7QUFDSDtBQUVNLFNBQVN6RyxtQkFBVCxDQUE2QjhHLFNBQTdCLEVBQXdDQyxLQUF4QyxFQUErQztBQUNsRCxNQUFJdkgsR0FBRyxHQUFHLEtBQVY7QUFFQXNILFdBQVMsQ0FBQ3BPLE9BQVYsQ0FBa0IsVUFBQXNPLEVBQUUsRUFBSTtBQUNwQixRQUFJSCxnQkFBZ0IsQ0FBQ0csRUFBRCxFQUFLRCxLQUFMLENBQXBCLEVBQWlDO0FBQzdCdkgsU0FBRyxHQUFHLElBQU47QUFDSDtBQUNKLEdBSkQ7QUFNQSxTQUFPQSxHQUFQO0FBQ0g7QUFFTSxTQUFTeUgsT0FBVCxDQUFpQjVFLEdBQWpCLEVBQXNCO0FBQ3pCQSxLQUFHLEdBQUdBLEdBQUcsQ0FBQ1osV0FBSixFQUFOO0FBRUEsTUFBSXlGLE1BQU0sR0FBRyxDQUNYLElBRFcsRUFFWCxJQUZXLEVBR1gsVUFIVyxFQUlYLElBSlcsRUFLWCxJQUxXLEVBTVgsSUFOVyxFQU9YLElBUFcsRUFRWCxJQVJXLEVBU1gsSUFUVyxFQVVYLElBVlcsRUFXWCxJQVhXLEVBWVgsSUFaVyxFQWFYLFVBYlcsRUFjWCxJQWRXLEVBZVgsSUFmVyxFQWdCWCxJQWhCVyxFQWlCWCxJQWpCVyxFQWtCWCxJQWxCVyxFQW1CWCxJQW5CVyxFQW9CWCxJQXBCVyxFQXFCWCxNQXJCVyxFQXNCWCxJQXRCVyxFQXVCWCxJQXZCVyxFQXdCWCxHQXhCVyxFQXlCWCxJQXpCVyxFQTBCWCxJQTFCVyxDQUFiO0FBOEJBLE1BQUlDLElBQUksR0FBRzlFLEdBQUcsQ0FBQytFLFVBQUosQ0FBZSxDQUFmLElBQW9CLEVBQS9CO0FBQ0EsU0FBT0YsTUFBTSxDQUFDQyxJQUFELENBQWI7QUFDSCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBTcGVsbCBmcm9tICcuL3NwZWxsJztcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IHsgU25ha2UgfSBmcm9tICcuL3NuYWtlJztcbmltcG9ydCBrZXl3b3JkcyBmcm9tIFwiLi9rZXl3b3Jkc1wiO1xuaW1wb3J0IHsgVHlwZVRlc3QgfSBmcm9tICcuL3R5cGV0ZXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XG4gICAgY29uc3RydWN0b3Iocm9vdCwgaW5wdXQpIHtcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5DRUxMU0laRSA9IDI1O1xuICAgICAgICB0aGlzLmN1cnNvclBvcyA9IFswLDBdO1xuICAgICAgICB0aGlzLmhlaWdodCA9IE1hdGguY2VpbChyb290Lm9mZnNldEhlaWdodCAvIHRoaXMuQ0VMTFNJWkUpIC0gMjtcbiAgICAgICAgdGhpcy53aWR0aCA9IE1hdGguZmxvb3Iocm9vdC5vZmZzZXRXaWR0aCAvIHRoaXMuQ0VMTFNJWkUpO1xuICAgICAgICB0aGlzLnNwZWxscyA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbCA9IG5ldyBTcGVsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5mcmFtZXJhdGUgPSAyMDA7XG5cbiAgICAgICAgdGhpcy50eXBldGVzdCA9IG51bGw7XG4gICAgICAgIHRoaXMuZ3JpZCA9IHRoaXMucG9wdWxhdGUoKTtcbiAgICAgICAgdGhpcy5wbGF5ID0gdHJ1ZTtcblxuICAgICAgICBsZXQga2V5d29yZHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrZXl3b3Jkcy1saXN0XCIpO1xuICAgICAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvJyk7XG4gICAgICAgIGxldCBjYXN0TmV3U3BlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FzdC1uZXctc3BlbGwnKTtcbiAgICAgICAgY2FzdE5ld1NwZWxsLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm5leHRTcGVsbCgpO1xuXG4gICAgICAgIGxvZ28ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5wdXNoKHRoaXMuY3VycmVudFNwZWxsLmdlbmVyYXRlUmFuZG9tU3BlbGwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMoa2V5d29yZHMpLmZvckVhY2goa3cgPT4ge1xuICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICBsaS5pbm5lclRleHQgPSBrdztcbiAgICAgICAgICBsaS5vbmNsaWNrID0gKCkgPT4gdGhpcy5jdXJyZW50U3BlbGwucmVjZWl2ZShrdyk7XG4gICAgICAgICAga2V5d29yZHNMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZXNpemVHcmlkID0gdGhpcy5yZXNpemVHcmlkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVjZWl2ZUlucHV0ID0gdGhpcy5yZWNlaXZlSW5wdXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWNlaXZlQ2xpY2sgPSB0aGlzLnJlY2VpdmVDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMucmVjZWl2ZUlucHV0KTtcblxuICAgICAgICB0aGlzLnJvb3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgeyBwb3MgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgICAgICBpZiAocG9zKSB0aGlzLnJlY2VpdmVDbGljayhwb3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cub25yZXNpemUgPSB0aGlzLnJlc2l6ZUdyaWQ7XG4gICAgfVxuIFxuICAgIHBvcHVsYXRlKCkge1xuICAgICAgICBsZXQgZ3JpZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3dBcnIgPSBbXTtcbiAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgcm93LmNsYXNzTmFtZSA9ICdyb3cnO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLndpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnY2VsbCc7XG4gICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnBvcyA9IFtpLCBqXVxuICAgICAgICAgICAgICAgIHJvd0Fyci5wdXNoKGNlbGwpO1xuXG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHRoaXMucm9vdC5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgZ3JpZC5wdXNoKHJvd0Fycik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ3JpZDtcbiAgICB9XG5cblxuICAgIGNsZWFyR3JpZEVsZW1lbnRzKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5yb290LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzaXplR3JpZCgpIHtcbiAgICAgICAgbGV0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuICAgICAgICB0aGlzLmNsZWFyR3JpZEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5mbG9vcihyb290Lm9mZnNldEhlaWdodCAvIHRoaXMuQ0VMTFNJWkUpIC0gMTtcbiAgICAgICAgdGhpcy53aWR0aCA9IE1hdGguZmxvb3Iocm9vdC5vZmZzZXRXaWR0aCAvIHRoaXMuQ0VMTFNJWkUpO1xuICAgICAgICB0aGlzLmdyaWQgPSB0aGlzLnBvcHVsYXRlKCk7XG4gICAgfVxuXG4gICAgbmV4dFNwZWxsKCkge1xuICAgICAgICBpZiAodGhpcy5zbmFrZU1vZGUoKSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwuY2xlYXJQcmV2aW91c1JlbmRlcigpXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbCA9IG5ldyBTcGVsbChncmlkKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRTcGVsbC5zdG9yZWRUZXh0IHx8IHRoaXMuY3VycmVudFNwZWxsLmFjdGl2ZVRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuc3BlbGxzLnB1c2godGhpcy5jdXJyZW50U3BlbGwpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwgPSBuZXcgU3BlbGwoZ3JpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcHJldlNwZWxsID0gdGhpcy5jdXJyZW50U3BlbGw7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbCA9IG5ldyBTcGVsbChncmlkKTtcbiAgICAgICAgICAgIHByZXZTcGVsbC5yZW5kZXIoKVxuICAgICAgICB9ICBcbiAgICB9XG5cbiAgICBnZXRFbGVtZW50KGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGxldCB4ID0gY29vcmRpbmF0ZXNbMF0gJSB0aGlzLmhlaWdodDtcbiAgICAgICAgbGV0IHkgPSBjb29yZGluYXRlc1sxXSAlIHRoaXMud2lkdGg7XG4gICAgICAgIGlmICh4IDwgMCkgeCArPSB0aGlzLmhlaWdodDtcbiAgICAgICAgaWYgKHkgPCAwKSB5ICs9IHRoaXMud2lkdGg7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRbeF1beV07XG4gICAgfVxuXG5cbiAgICBzbmFrZU1vZGUoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5jdXJyZW50U3BlbGwgaW5zdGFuY2VvZiBTbmFrZSlcbiAgICB9XG5cbiAgICBwbGF5U25ha2UoKSB7XG4gICAgICAgIGxldCBsYXN0U3BlbGwgPSB0aGlzLmN1cnJlbnRTcGVsbDtcbiAgICAgICAgdGhpcy5zcGVsbHMucHVzaChsYXN0U3BlbGwpO1xuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IodGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKHRoaXMud2lkdGggLyAyKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBjZW50ZXJQb3MgPSBbeCwgeV07XG5cbiAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwgPSBuZXcgU25ha2UodGhpcywgY2VudGVyUG9zKVxuICAgIH1cblxuICAgIHBsYXlUeXBldGVzdCgpIHtcbiAgICAgICAgLy8gY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgIHRoaXMuc3BlbGxzLnB1c2godGhpcy5jdXJyZW50U3BlbGwpO1xuICAgICAgICBsZXQgaW5zdCA9IG5ldyBTcGVsbCh0aGlzKTtcbiAgICAgICAgaW5zdC5jYXN0KFtcInJpZ2h0XCIsIFwiZ3JlZW5cIl0pO1xuICAgICAgICBpbnN0LnN0b3JlZFRleHQgPSBcInByZXNzIGVzYyB0byBleGl0XCI7XG4gICAgICAgIGluc3QuY3VycmVudFBvcyA9IFsxLCAxXTtcbiAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwgPSBpbnN0O1xuICAgICAgICBpZiAodGhpcy50eXBldGVzdCkgdGhpcy50eXBldGVzdC5jbGVhclByZXZpb3VzUmVuZGVyKCk7XG4gICAgICAgIHRoaXMudHlwZXRlc3QgPSBuZXcgVHlwZVRlc3QodGhpcyk7XG4gICAgICAgIHRoaXMudHlwZXRlc3QucmVuZGVyKCk7XG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRTcGVsbCA9IG51bGw7XG4gICAgfVxuXG4gICAgZXhpdFR5cGV0ZXN0KCkge1xuICAgICAgICBpZiAodGhpcy50eXBldGVzdCkgdGhpcy50eXBldGVzdC5jbGVhclByZXZpb3VzUmVuZGVyKCk7XG5cbiAgICAgICAgdGhpcy50eXBldGVzdCA9IG51bGw7XG4gICAgICAgIHRoaXMuY3VycmVudFNwZWxsLmNsZWFyUHJldmlvdXNSZW5kZXIoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwgPSBuZXcgU3BlbGwodGhpcyk7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUNsaWNrKHBvcykge1xuICAgICAgICBpZiAodGhpcy5zbmFrZU1vZGUoKSkgcmV0dXJuO1xuICAgICAgICBsZXQgcG9zQXJyID0gcG9zLnNwbGl0KFwiLFwiKS5tYXAoaSA9PiBwYXJzZUludChpKSk7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTcGVsbCkgdGhpcy5jdXJyZW50U3BlbGwuY3VycmVudFBvcyA9IHBvc0FycjtcbiAgICB9XG5cbiAgICB1cGRhdGVDdXJyZW50UG9zaXRpb24oa2V5Y29kZSkge1xuICAgICAgICBcbiAgICAgICAgbGV0IGRlbHRhOyBcblxuICAgICAgICBzd2l0Y2ggKGtleWNvZGUpIHtcbiAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgZGVsdGEgPSBbMCwgLTFdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgIGRlbHRhID0gWy0xLCAwXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICBkZWx0YSA9IFswLCAxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICBkZWx0YSA9IFsxLCAwXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIGlmICh0aGlzLnNuYWtlTW9kZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbC5yZWNlaXZlSW5wdXQoZGVsdGEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHsgY3VycmVudFBvcyB9ID0gdGhpcy5jdXJyZW50U3BlbGw7XG4gICAgICAgIHRoaXMuY3VycmVudFNwZWxsLmN1cnJlbnRQb3MgPSBVdGlsLmFkZENvb3JkaW5hdGVzKGRlbHRhLCBjdXJyZW50UG9zKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgcmFuZG9tUG9zaXRpb24oKSB7XG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5oZWlnaHQpO1xuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMud2lkdGgpO1xuXG4gICAgICAgIHJldHVybiBbeCx5XTtcbiAgICB9XG5cbiAgICByZWNlaXZlSW5wdXQoZSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNwZWxsKSB0aGlzLmN1cnJlbnRTcGVsbC5jbGVhclByZXZpb3VzUmVuZGVyKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbCA9IG5ldyBTcGVsbCh0aGlzKTsgXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50eXBldGVzdCkge1xuICAgICAgICAgIHRoaXMudHlwZXRlc3QucmVjZWl2ZShlKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDEzIHx8IGUua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgICB0aGlzLm5leHRTcGVsbCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA+PSA2NSAmJiBlLmtleUNvZGUgPCA5MSkge1xuICAgICAgICAgIGlmICh0aGlzLnNuYWtlTW9kZSgpKSByZXR1cm47XG4gICAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwucmVjZWl2ZShlLmtleSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA4ICYmIHRoaXMuY3VycmVudFNwZWxsKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc25ha2VNb2RlKCkpIHJldHVybjtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbC5kZWxldGVDaGFyYWN0ZXIoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPD0gNDAgJiYgZS5rZXlDb2RlID49IDM3KSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50UG9zaXRpb24oZS5rZXlDb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgIH0gXG5cbiAgICBmcmFtZSgpIHtcbiAgICAgICAgdGhpcy5zcGVsbHMuZm9yRWFjaChzcGVsbCA9PiBzcGVsbC5tb3ZlKCkpO1xuICAgIFxuICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbC5tb3ZlKCk7XG4gICAgICAgIGlmICh0aGlzLnR5cGV0ZXN0KSB7XG4gICAgICAgICAgICB0aGlzLnR5cGV0ZXN0LnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGFuaW1hdGUocmF0ZSkge1xuICAgICAgICAvLyBpZiAodGhpcy50eXBldGVzdCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuZnJhbWVyYXRlID0gcmF0ZSB8fCB0aGlzLmZyYW1lcmF0ZTtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lKCk7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICAgICAgfSwgdGhpcy5mcmFtZXJhdGUpO1xuICAgIH1cblxuXG59IiwiaW1wb3J0IEdyaWQgZnJvbSAnLi9ncmlkJztcbmltcG9ydCBTcGVsbCBmcm9tICcuL3NwZWxsJztcbmltcG9ydCB7IHNhbXBsZVRleHQgfSBmcm9tIFwiLi9zYW1wbGV0ZXh0XCI7XG5cbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCB7IFR5cGVUZXN0IH0gZnJvbSAnLi90eXBldGVzdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKTtcbiAgICB3aW5kb3cuU3BlbGwgPSBTcGVsbDtcbiAgICBjb25zdCBncmlkID0gbmV3IEdyaWQocm9vdCwgaW5wdXQpO1xuXG4gICAgZ3JpZC5hbmltYXRlKCk7XG4gICAgd2luZG93LmdyaWQgPSBncmlkO1xuICAgIHdpbmRvdy5zYW1wbGVUZXh0ID0gc2FtcGxlVGV4dDtcbiAgICB3aW5kb3cudHlwZXRlc3QgPSBuZXcgVHlwZVRlc3QoZ3JpZCk7XG5cbn0pIiwiY29uc3Qga2V5d29yZHMgPSB7XG4gIGFsbDogeyB0eXBlOiBcImFsbFwiIH0sXG4gIGNsZWFyOiB7IHR5cGU6IFwiY2xlYXJcIiB9LFxuICBzcGVsbDogeyB0eXBlOiBcInNwZWxsXCIgfSxcbiAgc25ha2U6IHsgdHlwZTogXCJzbmFrZVwiIH0sXG4gIHR5cGU6IHsgdHlwZTogXCJ0eXBldGVzdFwiIH0sXG4gIHRlc3Q6IHsgdHlwZTogXCJ0eXBldGVzdFwiIH0sXG4gIGNpcmNsZTogeyB0eXBlOiBcImNpcmNsZVwiIH0sXG4gIGZhc3Q6IHsgdHlwZTogXCJzcGVlZFwiLCBhY3Rpb246IDAuOCB9LFxuICBzbG93OiB7IHR5cGU6IFwic3BlZWRcIiwgYWN0aW9uOiAxLjI1IH0sXG4gIGJpZzogeyB0eXBlOiBcImZvbnRzaXplXCIsIGFjdGlvbjogMS4yNSB9LFxuICBsaXR0bGU6IHsgdHlwZTogXCJmb250c2l6ZVwiLCBhY3Rpb246IDAuOCB9LFxuICB1cDogeyB0eXBlOiBcIm1vdmVcIiwgYWN0aW9uOiBbLTEsIDBdIH0sXG4gIGRvd246IHsgdHlwZTogXCJtb3ZlXCIsIGFjdGlvbjogWzEsIDBdIH0sXG4gIGxlZnQ6IHsgdHlwZTogXCJtb3ZlXCIsIGFjdGlvbjogWzAsIC0xXSB9LFxuICByaWdodDogeyB0eXBlOiBcIm1vdmVcIiwgYWN0aW9uOiBbMCwgMV0gfSxcbiAgY29taWM6IHsgdHlwZTogXCJmb250XCIsIGFjdGlvbjogXCJjb21pY1wiIH0sXG4gIHNhbnM6IHsgdHlwZTogXCJmb250XCIsIGFjdGlvbjogXCJzYW5zXCIgfSxcbiAgZnVuOiB7IHR5cGU6IFwiZm9udFwiLCBhY3Rpb246IFwiZnVuXCIgfSxcbiAgbW9ubzogeyB0eXBlOiBcImZvbnRcIiwgYWN0aW9uOiBcIm1vbm9cIiB9LFxuICBzZXJpZjogeyB0eXBlOiBcImZvbnRcIiwgYWN0aW9uOiBcInNlcmlmXCIgfSxcbiAgYmx1ZTogeyB0eXBlOiBcImNvbG9yXCIsIGFjdGlvbjogXCIjNTc5OGFkXCIgfSxcbiAgZ3JlZW46IHsgdHlwZTogXCJjb2xvclwiLCBhY3Rpb246IFwiIzU3YWQ2ZVwiIH0sXG4gIHllbGxvdzogeyB0eXBlOiBcImNvbG9yXCIsIGFjdGlvbjogXCIjZGJjMDM1XCIgfSxcbiAgcHVycGxlOiB7IHR5cGU6IFwiY29sb3JcIiwgYWN0aW9uOiBcIiM5ZDY0ZTNcIiB9LFxuICBvcmFuZ2U6IHsgdHlwZTogXCJjb2xvclwiLCBhY3Rpb246IFwiI2U2N2UzOVwiIH0sXG4gIHBpbms6IHsgdHlwZTogXCJjb2xvclwiLCBhY3Rpb246IFwiI2YyMGFlZVwiIH0sXG4gIGJsYWNrOiB7IHR5cGU6IFwiY29sb3JcIiwgYWN0aW9uOiBcIiMyMjJlMmNcIiB9LFxuICByZWQ6IHsgdHlwZTogXCJjb2xvclwiLCBhY3Rpb246IFwiI2RlNDgxYlwiIH0sXG4gIGVtb2ppOiB7IHR5cGU6IFwiZW1vamlcIiB9LFxuICBoZWxsbzogeyB0eXBlOiBcInRleHRcIiwgYWN0aW9uOiBcIndvcmxkXCIgfSxcbiAgbWFkZWJ5OiB7IHR5cGU6IFwidGV4dFwiLCBhY3Rpb246IFwiIHNpbW9uIGRlYmV2b2lzZVwiIH0sXG4gIGZvbzogeyB0eXBlOiBcInRleHRcIiwgYWN0aW9uOiBcImJhclwiIH0sXG4gIC8vIGhlbHA6IHsgdHlwZTogXCJ0ZXh0XCIsIGFjdGlvbjogXCIgSSBjYW4ndFwiIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGtleXdvcmRzO1xuXG4vLyBUT0RPOiBcbi8vIHJvdGF0ZSwgc25ha2UsIHR5cGV0ZXN0LCBhYm91dCwgaW5kZXgsICAiLCJsZXQgdG9wMTAwMCA9IGB0aGVcbm9mXG50b1xuYW5kXG5hXG5pblxuaXNcbml0XG55b3VcbnRoYXRcbmhlXG53YXNcbmZvclxub25cbmFyZVxud2l0aFxuYXNcbklcbmhpc1xudGhleVxuYmVcbmF0XG5vbmVcbmhhdmVcbnRoaXNcbmZyb21cbm9yXG5oYWRcbmJ5XG5ub3RcbndvcmRcbmJ1dFxud2hhdFxuc29tZVxud2VcbmNhblxub3V0XG5vdGhlclxud2VyZVxuYWxsXG50aGVyZVxud2hlblxudXBcbnVzZVxueW91clxuaG93XG5zYWlkXG5hblxuZWFjaFxuc2hlXG53aGljaFxuZG9cbnRoZWlyXG50aW1lXG5pZlxud2lsbFxud2F5XG5hYm91dFxubWFueVxudGhlblxudGhlbVxud3JpdGVcbndvdWxkXG5saWtlXG5zb1xudGhlc2VcbmhlclxubG9uZ1xubWFrZVxudGhpbmdcbnNlZVxuaGltXG50d29cbmhhc1xubG9va1xubW9yZVxuZGF5XG5jb3VsZFxuZ29cbmNvbWVcbmRpZFxubnVtYmVyXG5zb3VuZFxubm9cbm1vc3RcbnBlb3BsZVxubXlcbm92ZXJcbmtub3dcbndhdGVyXG50aGFuXG5jYWxsXG5maXJzdFxud2hvXG5tYXlcbmRvd25cbnNpZGVcbmJlZW5cbm5vd1xuZmluZFxuYW55XG5uZXdcbndvcmtcbnBhcnRcbnRha2VcbmdldFxucGxhY2Vcbm1hZGVcbmxpdmVcbndoZXJlXG5hZnRlclxuYmFja1xubGl0dGxlXG5vbmx5XG5yb3VuZFxubWFuXG55ZWFyXG5jYW1lXG5zaG93XG5ldmVyeVxuZ29vZFxubWVcbmdpdmVcbm91clxudW5kZXJcbm5hbWVcbnZlcnlcbnRocm91Z2hcbmp1c3RcbmZvcm1cbnNlbnRlbmNlXG5ncmVhdFxudGhpbmtcbnNheVxuaGVscFxubG93XG5saW5lXG5kaWZmZXJcbnR1cm5cbmNhdXNlXG5tdWNoXG5tZWFuXG5iZWZvcmVcbm1vdmVcbnJpZ2h0XG5ib3lcbm9sZFxudG9vXG5zYW1lXG50ZWxsXG5kb2VzXG5zZXRcbnRocmVlXG53YW50XG5haXJcbndlbGxcbmFsc29cbnBsYXlcbnNtYWxsXG5lbmRcbnB1dFxuaG9tZVxucmVhZFxuaGFuZFxucG9ydFxubGFyZ2VcbnNwZWxsXG5hZGRcbmV2ZW5cbmxhbmRcbmhlcmVcbm11c3RcbmJpZ1xuaGlnaFxuc3VjaFxuZm9sbG93XG5hY3RcbndoeVxuYXNrXG5tZW5cbmNoYW5nZVxud2VudFxubGlnaHRcbmtpbmRcbm9mZlxubmVlZFxuaG91c2VcbnBpY3R1cmVcbnRyeVxudXNcbmFnYWluXG5hbmltYWxcbnBvaW50XG5tb3RoZXJcbndvcmxkXG5uZWFyXG5idWlsZFxuc2VsZlxuZWFydGhcbmZhdGhlclxuaGVhZFxuc3RhbmRcbm93blxucGFnZVxuc2hvdWxkXG5jb3VudHJ5XG5mb3VuZFxuYW5zd2VyXG5zY2hvb2xcbmdyb3dcbnN0dWR5XG5zdGlsbFxubGVhcm5cbnBsYW50XG5jb3ZlclxuZm9vZFxuc3VuXG5mb3VyXG5iZXR3ZWVuXG5zdGF0ZVxua2VlcFxuZXllXG5uZXZlclxubGFzdFxubGV0XG50aG91Z2h0XG5jaXR5XG50cmVlXG5jcm9zc1xuZmFybVxuaGFyZFxuc3RhcnRcbm1pZ2h0XG5zdG9yeVxuc2F3XG5mYXJcbnNlYVxuZHJhd1xubGVmdFxubGF0ZVxucnVuXG5kb24ndFxud2hpbGVcbnByZXNzXG5jbG9zZVxubmlnaHRcbnJlYWxcbmxpZmVcbmZld1xubm9ydGhcbm9wZW5cbnNlZW1cbnRvZ2V0aGVyXG5uZXh0XG53aGl0ZVxuY2hpbGRyZW5cbmJlZ2luXG5nb3RcbndhbGtcbmV4YW1wbGVcbmVhc2VcbnBhcGVyXG5ncm91cFxuYWx3YXlzXG5tdXNpY1xudGhvc2VcbmJvdGhcbm1hcmtcbm9mdGVuXG5sZXR0ZXJcbnVudGlsXG5taWxlXG5yaXZlclxuY2FyXG5mZWV0XG5jYXJlXG5zZWNvbmRcbmJvb2tcbmNhcnJ5XG50b29rXG5zY2llbmNlXG5lYXRcbnJvb21cbmZyaWVuZFxuYmVnYW5cbmlkZWFcbmZpc2hcbm1vdW50YWluXG5zdG9wXG5vbmNlXG5iYXNlXG5oZWFyXG5ob3JzZVxuY3V0XG5zdXJlXG53YXRjaFxuY29sb3JcbmZhY2Vcbndvb2Rcbm1haW5cbmVub3VnaFxucGxhaW5cbmdpcmxcbnVzdWFsXG55b3VuZ1xucmVhZHlcbmFib3ZlXG5ldmVyXG5yZWRcbmxpc3RcbnRob3VnaFxuZmVlbFxudGFsa1xuYmlyZFxuc29vblxuYm9keVxuZG9nXG5mYW1pbHlcbmRpcmVjdFxucG9zZVxubGVhdmVcbnNvbmdcbm1lYXN1cmVcbmRvb3JcbnByb2R1Y3RcbmJsYWNrXG5zaG9ydFxubnVtZXJhbFxuY2xhc3NcbndpbmRcbnF1ZXN0aW9uXG5oYXBwZW5cbmNvbXBsZXRlXG5zaGlwXG5hcmVhXG5oYWxmXG5yb2NrXG5vcmRlclxuZmlyZVxuc291dGhcbnByb2JsZW1cbnBpZWNlXG50b2xkXG5rbmV3XG5wYXNzXG5zaW5jZVxudG9wXG53aG9sZVxua2luZ1xuc3BhY2VcbmhlYXJkXG5iZXN0XG5ob3VyXG5iZXR0ZXJcbnRydWVcbmR1cmluZ1xuaHVuZHJlZFxuZml2ZVxucmVtZW1iZXJcbnN0ZXBcbmVhcmx5XG5ob2xkXG53ZXN0XG5ncm91bmRcbmludGVyZXN0XG5yZWFjaFxuZmFzdFxudmVyYlxuc2luZ1xubGlzdGVuXG5zaXhcbnRhYmxlXG50cmF2ZWxcbmxlc3Ncbm1vcm5pbmdcbnRlblxuc2ltcGxlXG5zZXZlcmFsXG52b3dlbFxudG93YXJkXG53YXJcbmxheVxuYWdhaW5zdFxucGF0dGVyblxuc2xvd1xuY2VudGVyXG5sb3ZlXG5wZXJzb25cbm1vbmV5XG5zZXJ2ZVxuYXBwZWFyXG5yb2FkXG5tYXBcbnJhaW5cbnJ1bGVcbmdvdmVyblxucHVsbFxuY29sZFxubm90aWNlXG52b2ljZVxudW5pdFxucG93ZXJcbnRvd25cbmZpbmVcbmNlcnRhaW5cbmZseVxuZmFsbFxubGVhZFxuY3J5XG5kYXJrXG5tYWNoaW5lXG5ub3RlXG53YWl0XG5wbGFuXG5maWd1cmVcbnN0YXJcbmJveFxubm91blxuZmllbGRcbnJlc3RcbmNvcnJlY3RcbmFibGVcbnBvdW5kXG5kb25lXG5iZWF1dHlcbmRyaXZlXG5zdG9vZFxuY29udGFpblxuZnJvbnRcbnRlYWNoXG53ZWVrXG5maW5hbFxuZ2F2ZVxuZ3JlZW5cbm9oXG5xdWlja1xuZGV2ZWxvcFxub2NlYW5cbndhcm1cbmZyZWVcbm1pbnV0ZVxuc3Ryb25nXG5zcGVjaWFsXG5taW5kXG5iZWhpbmRcbmNsZWFyXG50YWlsXG5wcm9kdWNlXG5mYWN0XG5zdHJlZXRcbmluY2hcbm11bHRpcGx5XG5ub3RoaW5nXG5jb3Vyc2VcbnN0YXlcbndoZWVsXG5mdWxsXG5mb3JjZVxuYmx1ZVxub2JqZWN0XG5kZWNpZGVcbnN1cmZhY2VcbmRlZXBcbm1vb25cbmlzbGFuZFxuZm9vdFxuc3lzdGVtXG5idXN5XG50ZXN0XG5yZWNvcmRcbmJvYXRcbmNvbW1vblxuZ29sZFxucG9zc2libGVcbnBsYW5lXG5zdGVhZFxuZHJ5XG53b25kZXJcbmxhdWdoXG50aG91c2FuZFxuYWdvXG5yYW5cbmNoZWNrXG5nYW1lXG5zaGFwZVxuZXF1YXRlXG5ob3Rcbm1pc3NcbmJyb3VnaHRcbmhlYXRcbnNub3dcbnRpcmVcbmJyaW5nXG55ZXNcbmRpc3RhbnRcbmZpbGxcbmVhc3RcbnBhaW50XG5sYW5ndWFnZVxuYW1vbmdcbmdyYW5kXG5iYWxsXG55ZXRcbndhdmVcbmRyb3BcbmhlYXJ0XG5hbVxucHJlc2VudFxuaGVhdnlcbmRhbmNlXG5lbmdpbmVcbnBvc2l0aW9uXG5hcm1cbndpZGVcbnNhaWxcbm1hdGVyaWFsXG5zaXplXG52YXJ5XG5zZXR0bGVcbnNwZWFrXG53ZWlnaHRcbmdlbmVyYWxcbmljZVxubWF0dGVyXG5jaXJjbGVcbnBhaXJcbmluY2x1ZGVcbmRpdmlkZVxuc3lsbGFibGVcbmZlbHRcbnBlcmhhcHNcbnBpY2tcbnN1ZGRlblxuY291bnRcbnNxdWFyZVxucmVhc29uXG5sZW5ndGhcbnJlcHJlc2VudFxuYXJ0XG5zdWJqZWN0XG5yZWdpb25cbmVuZXJneVxuaHVudFxucHJvYmFibGVcbmJlZFxuYnJvdGhlclxuZWdnXG5yaWRlXG5jZWxsXG5iZWxpZXZlXG5mcmFjdGlvblxuZm9yZXN0XG5zaXRcbnJhY2VcbndpbmRvd1xuc3RvcmVcbnN1bW1lclxudHJhaW5cbnNsZWVwXG5wcm92ZVxubG9uZVxubGVnXG5leGVyY2lzZVxud2FsbFxuY2F0Y2hcbm1vdW50XG53aXNoXG5za3lcbmJvYXJkXG5qb3lcbndpbnRlclxuc2F0XG53cml0dGVuXG53aWxkXG5pbnN0cnVtZW50XG5rZXB0XG5nbGFzc1xuZ3Jhc3NcbmNvd1xuam9iXG5lZGdlXG5zaWduXG52aXNpdFxucGFzdFxuc29mdFxuZnVuXG5icmlnaHRcbmdhc1xud2VhdGhlclxubW9udGhcbm1pbGxpb25cbmJlYXJcbmZpbmlzaFxuaGFwcHlcbmhvcGVcbmZsb3dlclxuY2xvdGhlXG5zdHJhbmdlXG5nb25lXG5qdW1wXG5iYWJ5XG5laWdodFxudmlsbGFnZVxubWVldFxucm9vdFxuYnV5XG5yYWlzZVxuc29sdmVcbm1ldGFsXG53aGV0aGVyXG5wdXNoXG5zZXZlblxucGFyYWdyYXBoXG50aGlyZFxuc2hhbGxcbmhlbGRcbmhhaXJcbmRlc2NyaWJlXG5jb29rXG5mbG9vclxuZWl0aGVyXG5yZXN1bHRcbmJ1cm5cbmhpbGxcbnNhZmVcbmNhdFxuY2VudHVyeVxuY29uc2lkZXJcbnR5cGVcbmxhd1xuYml0XG5jb2FzdFxuY29weVxucGhyYXNlXG5zaWxlbnRcbnRhbGxcbnNhbmRcbnNvaWxcbnJvbGxcbnRlbXBlcmF0dXJlXG5maW5nZXJcbmluZHVzdHJ5XG52YWx1ZVxuZmlnaHRcbmxpZVxuYmVhdFxuZXhjaXRlXG5uYXR1cmFsXG52aWV3XG5zZW5zZVxuZWFyXG5lbHNlXG5xdWl0ZVxuYnJva2VcbmNhc2Vcbm1pZGRsZVxua2lsbFxuc29uXG5sYWtlXG5tb21lbnRcbnNjYWxlXG5sb3VkXG5zcHJpbmdcbm9ic2VydmVcbmNoaWxkXG5zdHJhaWdodFxuY29uc29uYW50XG5uYXRpb25cbmRpY3Rpb25hcnlcbm1pbGtcbnNwZWVkXG5tZXRob2Rcbm9yZ2FuXG5wYXlcbmFnZVxuc2VjdGlvblxuZHJlc3NcbmNsb3VkXG5zdXJwcmlzZVxucXVpZXRcbnN0b25lXG50aW55XG5jbGltYlxuY29vbFxuZGVzaWduXG5wb29yXG5sb3RcbmV4cGVyaW1lbnRcbmJvdHRvbVxua2V5XG5pcm9uXG5zaW5nbGVcbnN0aWNrXG5mbGF0XG50d2VudHlcbnNraW5cbnNtaWxlXG5jcmVhc2VcbmhvbGVcbnRyYWRlXG5tZWxvZHlcbnRyaXBcbm9mZmljZVxucmVjZWl2ZVxucm93XG5tb3V0aFxuZXhhY3RcbnN5bWJvbFxuZGllXG5sZWFzdFxudHJvdWJsZVxuc2hvdXRcbmV4Y2VwdFxud3JvdGVcbnNlZWRcbnRvbmVcbmpvaW5cbnN1Z2dlc3RcbmNsZWFuXG5icmVha1xubGFkeVxueWFyZFxucmlzZVxuYmFkXG5ibG93XG5vaWxcbmJsb29kXG50b3VjaFxuZ3Jld1xuY2VudFxubWl4XG50ZWFtXG53aXJlXG5jb3N0XG5sb3N0XG5icm93blxud2VhclxuZ2FyZGVuXG5lcXVhbFxuc2VudFxuY2hvb3NlXG5mZWxsXG5maXRcbmZsb3dcbmZhaXJcbmJhbmtcbmNvbGxlY3RcbnNhdmVcbmNvbnRyb2xcbmRlY2ltYWxcbmdlbnRsZVxud29tYW5cbmNhcHRhaW5cbnByYWN0aWNlXG5zZXBhcmF0ZVxuZGlmZmljdWx0XG5kb2N0b3JcbnBsZWFzZVxucHJvdGVjdFxubm9vblxud2hvc2VcbmxvY2F0ZVxucmluZ1xuY2hhcmFjdGVyXG5pbnNlY3RcbmNhdWdodFxucGVyaW9kXG5pbmRpY2F0ZVxucmFkaW9cbnNwb2tlXG5hdG9tXG5odW1hblxuaGlzdG9yeVxuZWZmZWN0XG5lbGVjdHJpY1xuZXhwZWN0XG5jcm9wXG5tb2Rlcm5cbmVsZW1lbnRcbmhpdFxuc3R1ZGVudFxuY29ybmVyXG5wYXJ0eVxuc3VwcGx5XG5ib25lXG5yYWlsXG5pbWFnaW5lXG5wcm92aWRlXG5hZ3JlZVxudGh1c1xuY2FwaXRhbFxud29uJ3RcbmNoYWlyXG5kYW5nZXJcbmZydWl0XG5yaWNoXG50aGlja1xuc29sZGllclxucHJvY2Vzc1xub3BlcmF0ZVxuZ3Vlc3Ncbm5lY2Vzc2FyeVxuc2hhcnBcbndpbmdcbmNyZWF0ZVxubmVpZ2hib3Jcbndhc2hcbmJhdFxucmF0aGVyXG5jcm93ZFxuY29yblxuY29tcGFyZVxucG9lbVxuc3RyaW5nXG5iZWxsXG5kZXBlbmRcbm1lYXRcbnJ1YlxudHViZVxuZmFtb3VzXG5kb2xsYXJcbnN0cmVhbVxuZmVhclxuc2lnaHRcbnRoaW5cbnRyaWFuZ2xlXG5wbGFuZXRcbmh1cnJ5XG5jaGllZlxuY29sb255XG5jbG9ja1xubWluZVxudGllXG5lbnRlclxubWFqb3JcbmZyZXNoXG5zZWFyY2hcbnNlbmRcbnllbGxvd1xuZ3VuXG5hbGxvd1xucHJpbnRcbmRlYWRcbnNwb3RcbmRlc2VydFxuc3VpdFxuY3VycmVudFxubGlmdFxucm9zZVxuY29udGludWVcbmJsb2NrXG5jaGFydFxuaGF0XG5zZWxsXG5zdWNjZXNzXG5jb21wYW55XG5zdWJ0cmFjdFxuZXZlbnRcbnBhcnRpY3VsYXJcbmRlYWxcbnN3aW1cbnRlcm1cbm9wcG9zaXRlXG53aWZlXG5zaG9lXG5zaG91bGRlclxuc3ByZWFkXG5hcnJhbmdlXG5jYW1wXG5pbnZlbnRcbmNvdHRvblxuYm9yblxuZGV0ZXJtaW5lXG5xdWFydFxubmluZVxudHJ1Y2tcbm5vaXNlXG5sZXZlbFxuY2hhbmNlXG5nYXRoZXJcbnNob3BcbnN0cmV0Y2hcbnRocm93XG5zaGluZVxucHJvcGVydHlcbmNvbHVtblxubW9sZWN1bGVcbnNlbGVjdFxud3JvbmdcbmdyYXlcbnJlcGVhdFxucmVxdWlyZVxuYnJvYWRcbnByZXBhcmVcbnNhbHRcbm5vc2VcbnBsdXJhbFxuYW5nZXJcbmNsYWltXG5jb250aW5lbnRcbm94eWdlblxuc3VnYXJcbmRlYXRoXG5wcmV0dHlcbnNraWxsXG53b21lblxuc2Vhc29uXG5zb2x1dGlvblxubWFnbmV0XG5zaWx2ZXJcbnRoYW5rXG5icmFuY2hcbm1hdGNoXG5zdWZmaXhcbmVzcGVjaWFsbHlcbmZpZ1xuYWZyYWlkXG5odWdlXG5zaXN0ZXJcbnN0ZWVsXG5kaXNjdXNzXG5mb3J3YXJkXG5zaW1pbGFyXG5ndWlkZVxuZXhwZXJpZW5jZVxuc2NvcmVcbmFwcGxlXG5ib3VnaHRcbmxlZFxucGl0Y2hcbmNvYXRcbm1hc3NcbmNhcmRcbmJhbmRcbnJvcGVcbnNsaXBcbndpblxuZHJlYW1cbmV2ZW5pbmdcbmNvbmRpdGlvblxuZmVlZFxudG9vbFxudG90YWxcbmJhc2ljXG5zbWVsbFxudmFsbGV5XG5ub3JcbmRvdWJsZVxuc2VhdFxuYXJyaXZlXG5tYXN0ZXJcbnRyYWNrXG5wYXJlbnRcbnNob3JlXG5kaXZpc2lvblxuc2hlZXRcbnN1YnN0YW5jZVxuZmF2b3JcbmNvbm5lY3RcbnBvc3RcbnNwZW5kXG5jaG9yZFxuZmF0XG5nbGFkXG5vcmlnaW5hbFxuc2hhcmVcbnN0YXRpb25cbmRhZFxuYnJlYWRcbmNoYXJnZVxucHJvcGVyXG5iYXJcbm9mZmVyXG5zZWdtZW50XG5zbGF2ZVxuZHVja1xuaW5zdGFudFxubWFya2V0XG5kZWdyZWVcbnBvcHVsYXRlXG5jaGlja1xuZGVhclxuZW5lbXlcbnJlcGx5XG5kcmlua1xub2NjdXJcbnN1cHBvcnRcbnNwZWVjaFxubmF0dXJlXG5yYW5nZVxuc3RlYW1cbm1vdGlvblxucGF0aFxubGlxdWlkXG5sb2dcbm1lYW50XG5xdW90aWVudFxudGVldGhcbnNoZWxsXG5uZWNrYDtcblxuXG5sZXQgd2hpdGVzcGFjZSA9IC9bXFxyXFxuXSsvO1xubGV0IHdvcmRzID0gdG9wMTAwMC5zcGxpdCh3aGl0ZXNwYWNlKTtcbmxldCB2YWxpZHdvcmRzID0gd29yZHMuZmlsdGVyKHdvcmQgPT4gd29yZC5sZW5ndGggPiAyKTtcblxuZXhwb3J0IGNvbnN0IHNhbXBsZVRleHQgPSAocmFuZ2UgPSB2YWxpZHdvcmRzLmxlbmd0aCkgPT4ge1xuICByZXR1cm4gdmFsaWR3b3Jkcy5zbGljZSgwLCByYW5nZSk7XG59OyIsImltcG9ydCB7IGFkZENvb3JkaW5hdGVzLCByZXBsYWNlQ2hpbGRyZW4sIGluY2x1ZGVzQ29vcmRpbmF0ZXMgfSBmcm9tIFwiLi91dGlsXCI7XG5pbXBvcnQgU3BlbGwgZnJvbSBcIi4vc3BlbGxcIjtcblxuZXhwb3J0IGNsYXNzIFNuYWtlIHtcbiAgICBjb25zdHJ1Y3RvcihncmlkLCBwb3NpdGlvbikge1xuICAgICAgICB0aGlzLm1vdmVzID0gWzAsMF07XG4gICAgICAgIHRoaXMucG9zaXRpb25zID0gW3Bvc2l0aW9uXTtcbiAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuZ3JpZCA9IGdyaWQ7XG5cbiAgICAgICAgbGV0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgaGVhZC5jbGFzc05hbWUgPSAnc25ha2VoZWFkJztcbiAgICAgICAgaGVhZC5pbm5lclRleHQgPSBcIvCfkI1cIjtcbiAgICAgICAgdGhpcy5ib2R5ID0gW2hlYWRdOyAvLyBbeyBlbGVtZW50OiA8c3Bhbj4sIHBvczogfV1cblxuICAgICAgICBsZXQgaW5zdCA9IG5ldyBTcGVsbCh0aGlzLmdyaWQpO1xuICAgICAgICBpbnN0LnN0b3JlZFRleHQgPSAnYXJyb3cga2V5cyB0byBtb3ZlJztcbiAgICAgICAgaW5zdC5tb3ZlcyA9IFswLCAxXTtcbiAgICAgICAgaW5zdC5jYXN0KFsnZ3JlZW4nLCAnYmx1ZSddKTtcbiAgICAgICAgdGhpcy5pbnN0ID0gaW5zdDtcbiAgICAgICAgdGhpcy5ncmlkLnNwZWxscy5wdXNoKGluc3QpO1xuICAgIH1cblxuICAgIGlzRW1wdHkocG9zKSB7XG4gICAgICAgIGxldCByZXMgPSAhdGhpcy5ncmlkLmdldEVsZW1lbnQocG9zKS5maXJzdENoaWxkO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGdldFBvaW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25zLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgaGFuZGxlTG9zcygpIHtcbiAgICAgICAgdGhpcy5jbGVhclByZXZpb3VzUmVuZGVyKCk7XG4gICAgICAgIGxldCBsb3NlclNwZWxsID0gdGhpcy5pbnN0O1xuICAgICAgICBcbiAgICAgICAgbG9zZXJTcGVsbC5jYXN0KFsnb3JhbmdlJywnZnVuJywnYmlnJywnYmlnJywnYmlnJ10pO1xuICAgICAgICBsZXQgc2NvcmUgPSB0aGlzLmJvZHkubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IHBvaW50cyA9IHNjb3JlID09PSAxID8gJyBwb2ludCcgOiAnIHBvaW50cyc7XG4gICAgICAgIGxvc2VyU3BlbGwuc3RvcmVkVGV4dCA9ICdHYW1lIG92ZXI6ICcgKyAodGhpcy5ib2R5Lmxlbmd0aCAtIDEpICsgcG9pbnRzO1xuICAgICAgICB0aGlzLmdyaWQuY3VycmVudFNwZWxsID0gbmV3IFNwZWxsKHRoaXMuZ3JpZCk7XG4gICAgfVxuXG4gICAgY2xlYXJQcmV2aW91c1JlbmRlcigpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzLmZvckVhY2goZWxlID0+IGVsZS5yZW1vdmUoKSk7XG4gICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cyA9IFtdO1xuICAgIH1cblxuICAgIG91dE9mQm91bmRzKHBvcykge1xuICAgICAgICByZXR1cm4gKHBvc1swXSA+PSB0aGlzLmdyaWQuaGVpZ2h0IHx8IFxuICAgICAgICAgICAgcG9zWzBdIDwgMCB8fCBcbiAgICAgICAgICAgIHBvc1sxXSA+PSB0aGlzLmdyaWQud2lkdGggfHwgXG4gICAgICAgICAgICBwb3NbMV0gPCAwKVxuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmICghdGhpcy5tb3Zlc1swXSAmJiAhdGhpcy5tb3Zlc1sxXSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBcblxuICAgICAgICBsZXQgbmV4dFBvc2l0aW9uID0gYWRkQ29vcmRpbmF0ZXModGhpcy5wb3NpdGlvbnNbMF0sIHRoaXMubW92ZXMsIHRoaXMuZ3JpZClcblxuICAgICAgICBpZiAoaW5jbHVkZXNDb29yZGluYXRlcyh0aGlzLnBvc2l0aW9ucywgbmV4dFBvc2l0aW9uKSB8fCBcbiAgICAgICAgICAgIHRoaXMub3V0T2ZCb3VuZHMobmV4dFBvc2l0aW9uKSkge1xuXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUxvc3MoKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzRW1wdHkobmV4dFBvc2l0aW9uKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnMudW5zaGlmdChuZXh0UG9zaXRpb24pO1xuICAgICAgICAgICAgdGhpcy5lYXQobmV4dFBvc2l0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnMudW5zaGlmdChuZXh0UG9zaXRpb24pO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICByZWNlaXZlSW5wdXQoZGVsdGEpIHtcbiAgICAgICAgbGV0IGNvbWJpbmVkRGlycyA9IGFkZENvb3JkaW5hdGVzKGRlbHRhLCB0aGlzLm1vdmVzKTtcbiAgICAgICAgbGV0IG9wcG9zaXRlRGlyID0gY29tYmluZWREaXJzWzBdID09PSAwICYmIGNvbWJpbmVkRGlyc1sxXSA9PT0gMDtcblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbnMubGVuZ3RoID09PSAxIHx8ICFvcHBvc2l0ZURpcikgeyBcbiAgICAgICAgICAgIHRoaXMubW92ZXMgPSBkZWx0YTtcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZWF0KHBvcykge1xuICAgICAgICBsZXQgc25hY2sgPSB0aGlzLmdyaWQuZ2V0RWxlbWVudChwb3MpLmZpcnN0Q2hpbGQ7XG4gICAgICAgIHRoaXMuYm9keS5wdXNoKHNuYWNrKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZVJhbmRvbVNwZWxsKCkge1xuICAgICAgICBsZXQgdXRpbFNwZWxsID0gbmV3IFNwZWxsKHRoaXMuZ3JpZCk7XG4gICAgICAgIHV0aWxTcGVsbC5nZW5lcmF0ZVJhbmRvbVNwZWxsKCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5jbGVhclByZXZpb3VzUmVuZGVyKCk7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbnMuZm9yRWFjaCgocG9zLCBpKSA9PiB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KHBvcyk7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmJvZHlbaV07XG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKCdzbmFrZScpXG4gICAgICAgICAgICByZXBsYWNlQ2hpbGRyZW4oZWxlbWVudCwgY2hpbGQpO1xuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMucHVzaChjaGlsZCk7XG4gICAgICAgIH0pXG4gICAgfVxufSIsImltcG9ydCBHcmlkIGZyb20gJy4vZ3JpZCc7XG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4vdXRpbCdcbmltcG9ydCBrZXl3b3JkSW5kZXggZnJvbSAnLi9rZXl3b3Jkcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwZWxsIHtcbiAgICBjb25zdHJ1Y3RvcihncmlkKSB7XG4gICAgICAgIHRoaXMucGVyRnJhbWVLZXl3b3JkcyA9IFtdO1xuICAgICAgICB0aGlzLmFwcGxpZWRLZXl3b3JkcyA9IFtdO1xuICAgICAgICB0aGlzLmdyaWQgPSBncmlkO1xuICAgICAgICB0aGlzLmN1cnJlbnRQb3MgPSB0aGlzLmdyaWQucmFuZG9tUG9zaXRpb24oKTtcblxuICAgICAgICB0aGlzLnN0b3JlZFRleHQgPSAnJztcbiAgICAgICAgdGhpcy5hY3RpdmVUZXh0ID0gJyc7XG5cbiAgICAgICAgdGhpcy5rZXl3b3JkSW5kZXggPSBrZXl3b3JkSW5kZXg7XG5cbiAgICAgICAgdGhpcy5yb3RhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLmNsYXNzQXJyID0gW107XG4gICAgICAgIHRoaXMubW92ZXMgPSBbMCwwXTtcbiAgICAgICAgdGhpcy5jb2xvcnMgPSBbXTtcbiAgICAgICAgdGhpcy5mb250ID0gJ21vbm8nO1xuICAgICAgICB0aGlzLnNpemUgPSAxNTtcblxuICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMgPSBbXTtcbiAgICB9XG5cbiAgICByZWNlaXZlKGlucHV0KSB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGV4dCArPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLmV4dHJhY3RLZXl3b3JkcygpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIGRlbGV0ZUNoYXJhY3RlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlVGV4dCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVUZXh0ID0gdGhpcy5hY3RpdmVUZXh0LnNsaWNlKDAsIHRoaXMuYWN0aXZlVGV4dC5sZW5ndGggLSAxKTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBjYXN0KGtleXdvcmRzKSB7XG4gICAgICAgIGlmICghKGtleXdvcmRzIGluc3RhbmNlb2YgQXJyYXkpKSBrZXl3b3JkcyA9IFtrZXl3b3Jkc107XG4gICAgICAgIGNvbnN0IG5vdFN0b3JlZCA9IFsnYWxsJywgJ2NsZWFyJywgJ3NwZWxsJywgJ3NuYWtlJywgJ3Rlc3QnXTtcblxuICAgICAgICBrZXl3b3Jkcy5mb3JFYWNoKGt3ID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwbHlLZXl3b3JkKGt3KTtcbiAgICAgICAgICAgIGlmICghbm90U3RvcmVkLmluY2x1ZGVzKGt3KSkgdGhpcy5hcHBsaWVkS2V5d29yZHMucHVzaChrdyk7IFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhcHBseUtleXdvcmQoa3cpIHtcbiAgICAgICAgbGV0IHsgYWN0aW9uLCB0eXBlIH0gPSB0aGlzLmtleXdvcmRJbmRleFtrd107XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ21vdmUnOlxuICAgICAgICAgICAgICAgIHRoaXMubW92ZXMgPSBVdGlsLmFkZENvb3JkaW5hdGVzKHRoaXMubW92ZXMsIGFjdGlvbilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbG9yJzogXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvcnMucHVzaChhY3Rpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncm90YXRlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZSA9IHRoaXMucm90YXRlID8gbnVsbCA6ICdyb3RhdGUnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZm9udCc6XG4gICAgICAgICAgICAgICAgdGhpcy5lbW9qaSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9udCA9IGFjdGlvbjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NuYWtlJzpcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQuZnJhbWVyYXRlID0gMTUwO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5wbGF5U25ha2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NwZWVkJzpcbiAgICAgICAgICAgICAgICBsZXQgbmV3ZnBzID0gTWF0aC5mbG9vcih0aGlzLmdyaWQuZnJhbWVyYXRlICogYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3ZnBzID4gNDAwMCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkLmZyYW1lcmF0ZSA9IDQwMDAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3ZnBzIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmdyaWQuZnJhbWVyYXRlID0gMTAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmdyaWQuZnJhbWVyYXRlID0gbmV3ZnBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVkVGV4dCArPSBhY3Rpb247XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdmb250c2l6ZSc6XG4gICAgICAgICAgICAgICAgbGV0IG5ld3NpemUgPSBNYXRoLmZsb29yKHRoaXMuc2l6ZSAqIGFjdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKG5ld3NpemUgPiA0MCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSA0MDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld3NpemUgPCA2KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSA9IDY7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplID0gbmV3c2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjaXJjbGUnOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NBcnIucHVzaCgnY2lyY2xlJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjbGVhcic6XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnNwZWxscy5mb3JFYWNoKHNwZWxsID0+IHNwZWxsLmNsZWFyUHJldmlvdXNSZW5kZXIoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnNwZWxscyA9IFtdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZW1vamknOlxuICAgICAgICAgICAgICAgIHRoaXMuZW1vamkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3BlbGwnOlxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVSYW5kb21TcGVsbCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWxsJzpcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQuc3BlbGxzLmZvckVhY2goc3BlbGwgPT4gc3BlbGwuY2FzdCh0aGlzLmFwcGxpZWRLZXl3b3JkcykpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndHlwZXRlc3QnOlxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5wbGF5VHlwZXRlc3QoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBleHRyYWN0S2V5d29yZHMoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluc0tleXdvcmQodGhpcy5hY3RpdmVUZXh0KSkgcmV0dXJuO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHRoaXMuYWN0aXZlVGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHN1YnN0ciA9IHRoaXMuYWN0aXZlVGV4dC5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIGxldCBrdyA9IHRoaXMuY29udGFpbnNLZXl3b3JkKHN1YnN0cik7XG5cbiAgICAgICAgICAgIGlmIChrdykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVkVGV4dCArPSBzdWJzdHI7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXN0KGt3KTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVRleHQgPSB0aGlzLmFjdGl2ZVRleHQuc2xpY2UoaSk7XG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0S2V5d29yZHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBjb250YWluc0tleXdvcmQoc3RyKSB7XG4gICAgICAgIGxldCBrd3MgPSBPYmplY3Qua2V5cyh0aGlzLmtleXdvcmRJbmRleCk7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBrdyBvZiBrd3MpIHsgXG4gICAgICAgICAgICBpZiAoc3RyLmluY2x1ZGVzKGt3KSkgcmV0dXJuIGt3O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjbGVhclByZXZpb3VzUmVuZGVyKCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMuZm9yRWFjaChlbGUgPT4gZWxlLnJlbW92ZSgpKTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQb3MgPSBVdGlsLmFkZENvb3JkaW5hdGVzKHRoaXMuY3VycmVudFBvcywgdGhpcy5tb3Zlcyk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgc2h1ZmZsZUNvbG9ycygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29sb3JzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICdub25lJztcbiAgICAgICAgaWYgKHRoaXMuY29sb3JzLmxlbmd0aCA9PT0gMSApIHJldHVybiB0aGlzLmNvbG9yc1swXVxuICAgICAgICB0aGlzLmNvbG9ycy5wdXNoKHRoaXMuY29sb3JzLnNoaWZ0KCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xvcnNbMF07XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVSYW5kb21TcGVsbCgpIHtcbiAgICAgICAgbGV0IGtleXdvcmRzID0gT2JqZWN0LmtleXModGhpcy5rZXl3b3JkSW5kZXgpO1xuICAgICAgICBsZXQgYXBwbGllZEtleXdvcmRzID0gJyc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGxldCByYW5kSWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGtleXdvcmRzLmxlbmd0aCAtIDYpKSArIDY7IFxuICAgICAgICAgICAgYXBwbGllZEtleXdvcmRzICs9IGtleXdvcmRzW3JhbmRJZHhdO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzcGVsbCA9IG5ldyBTcGVsbCh0aGlzLmdyaWQpO1xuICAgICAgICBzcGVsbC5yZWNlaXZlKGFwcGxpZWRLZXl3b3Jkcyk7XG4gICAgICAgIHRoaXMuZ3JpZC5zcGVsbHMucHVzaChzcGVsbCk7XG4gICAgICAgIHJldHVybiBzcGVsbDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQcmV2aW91c1JlbmRlcigpO1xuXG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy5zdG9yZWRUZXh0ICsgdGhpcy5hY3RpdmVUZXh0O1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5jdXJyZW50UG9zO1xuICAgICAgICBsZXQgZGVsdGE7XG4gICAgICAgIGlmICh0aGlzLm1vdmVzWzBdID09PSAwICYmIHRoaXMubW92ZXNbMV0gPT09IDApIHtcbiAgICAgICAgICAgIGRlbHRhID0gWzAsMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgeCA9IE1hdGguc2lnbih0aGlzLm1vdmVzWzBdKTtcbiAgICAgICAgICAgIGxldCB5ID0gTWF0aC5zaWduKHRoaXMubW92ZXNbMV0pO1xuICAgICAgICAgICAgZGVsdGEgPSBbeCx5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGV0dGVyID0gdGhpcy5lbW9qaSA/IFV0aWwudG9FbW9qaSh0ZXh0W2ldKSA6IHRleHRbaV07XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQodGhpcy5mb250LCB0aGlzLnJvdGF0ZSwgJ2FjdGl2ZScsIC4uLnRoaXMuY2xhc3NBcnIpO1xuICAgICAgICAgICAgc3Bhbi5zdHlsZS5mb250U2l6ZSA9IHRoaXMuc2l6ZSArICdweCc7XG4gICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuc2h1ZmZsZUNvbG9ycygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29sb3JzLmxlbmd0aCA+IDApIHNwYW4uc3R5bGUuY29sb3IgPSAnd2hpdGUnOyBcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmdyaWQuZ2V0RWxlbWVudChwb3MpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBVdGlsLnJlcGxhY2VDaGlsZHJlbihlbGVtZW50LCBzcGFuKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKHNwYW4pO1xuICAgICAgICAgICAgcG9zID0gVXRpbC5hZGRDb29yZGluYXRlcyhwb3MsIGRlbHRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdyaWQuY3VycmVudFNwZWxsID09PSB0aGlzKSB7XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTmFtZSA9ICdjdXJzb3InO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KHBvcyk7XG4gICAgICAgICAgICBVdGlsLnJlcGxhY2VDaGlsZHJlbihlbGVtZW50LCBzcGFuKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKHNwYW4pO1xuICAgICAgICB9O1xuICAgIH1cblxufVxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBzYW1wbGVUZXh0IH0gZnJvbSBcIi4vc2FtcGxldGV4dFwiO1xuaW1wb3J0IHsgcmVwbGFjZUNoaWxkcmVuLCBhZGRDb29yZGluYXRlcyB9IGZyb20gXCIuL3V0aWxcIjtcblxuZXhwb3J0IGNsYXNzIFR5cGVUZXN0IHtcbiAgICBjb25zdHJ1Y3RvcihncmlkKSB7XG4gICAgICAgIHRoaXMuZ3JpZCA9IGdyaWQ7XG4gICAgICAgIHRoaXMud2lkdGggPSBNYXRoLmZsb29yKHRoaXMuZ3JpZC53aWR0aCAqIDAuNyk7XG4gICAgICAgIC8vIHRoaXMuaGVpZ2h0ID0gTWF0aC5mbG9vcih0aGlzLmdyaWQuaGVpZ2h0ICogMC44KTsgXG4gICAgICAgIHRoaXMucG9zID0gdGhpcy5jYWxjdWxhdGVQb3MoKTtcbiAgICAgICAgdGhpcy51c2VyV29yZHMgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50V29yZCA9IDA7XG4gICAgICAgIHRoaXMuYmFka2V5c3Ryb2tlcyA9IDA7XG4gICAgICAgIHRoaXMucmVuZGVyZWRXb3JkQmVnaW4gPSAwO1xuICAgICAgICB0aGlzLnJlbmRlcmVkV29yZEVuZCA9IDA7XG4gICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cz0gW107XG4gICAgICAgIHRoaXMubnVtUm93cyA9IDM7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lO1xuICAgICAgICB0aGlzLmlucHV0ID0gXCJcIjtcblxuICAgICAgICB0aGlzLnRvcFdvcmRzID0gc2FtcGxlVGV4dCgpO1xuICAgICAgICB0aGlzLmVuc3VyZVVzZXJXb3JkcygpO1xuICAgIH1cblxuICAgIG92ZXIoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNsZWFyUHJldmlvdXNSZW5kZXIoKTtcbiAgICAgICAgbGV0IGxvc2VyU3BlbGwgPSBuZXcgU3BlbGwodGhpcy5ncmlkKTtcblxuICAgICAgICBsb3NlclNwZWxsLmNhc3QoW1wiYmlnXCIsIFwicmVkXCIsIFwieWVsbG93XCIsIFwibW9ub1wiLCBcInJpZ2h0XCIsICdkb3duJywgXCJiaWdcIl0pO1xuICAgICAgICBsb3NlclNwZWxsLnN0b3JlZFRleHQgPVxuICAgICAgICAgKHRoaXMuY2FsY3VsYXRlV1BNKCkgKyAnIFdQTScpO1xuICAgICAgICB0aGlzLmdyaWQuc3BlbGxzLnB1c2gobG9zZXJTcGVsbCk7XG5cbiAgICAgICAgdGhpcy5ncmlkLmV4aXRUeXBldGVzdCgpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVdQTSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRUaW1lKSByZXR1cm4gMDtcbiAgICAgICAgbGV0IGNvcnJlY3RLZXlzdHJva2VzID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3VycmVudFdvcmQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHdvcmQgPSB0aGlzLnVzZXJXb3Jkc1tpXTtcblxuICAgICAgICAgICAgaWYgKCF3b3JkLm1pc3R5cGVkKSB7XG4gICAgICAgICAgICAgICAgY29ycmVjdEtleXN0cm9rZXMgKz0gKHdvcmQud29yZC5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGNvcnJlY3RLZXlzdHJva2VzIC8gNSk7XG4gICAgfVxuXG4gICAgY2xlYXJQcmV2aW91c1JlbmRlcigpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzLmZvckVhY2goZWxlID0+IGVsZS5yZW1vdmUoKSk7XG4gICAgfVxuXG4gICAgdGltZXNVcCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRUaW1lKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCB0aW1lTGVmdCA9XG4gICAgICAgICAgNjAgLSBNYXRoLmZsb29yKChub3cuZ2V0VGltZSgpIC0gdGhpcy5jdXJyZW50VGltZS5nZXRUaW1lKCkpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiAodGltZUxlZnQgPCAwKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmNsZWFyUHJldmlvdXNSZW5kZXIoKTtcbiAgICAgICAgaWYgKHRoaXMudGltZXNVcCgpKSB7XG4gICAgICAgICAgICB0aGlzLm92ZXIoKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlbmRlclBhZGRpbmcoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJXb3JkRGlzcGxheSgpXG4gICAgICAgIHRoaXMucmVuZGVySW5wdXQoKTtcblxuICAgIH0gIFxuICAgIFxuICAgIHJlbmRlclBhZGRpbmcoKSB7XG4gICAgICAgIGxldCBudW1Sb3dzID0gdGhpcy5udW1Sb3dzICsgNzsgXG4gICAgICAgIGxldCB0b3AgPSB0aGlzLnBvc1swXSAtIDI7XG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5wb3NbMV0gLSAyO1xuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLndpZHRoICsgNDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvd3M7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIGxldCBlbCA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KFtpICsgdG9wLCBqICsgbGVmdF0pO1xuICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTmFtZSA9ICd0ZXN0LXBhZGRpbmcnO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICByZXBsYWNlQ2hpbGRyZW4oZWwsIGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcklucHV0KCkge1xuICAgICAgICBsZXQgdG9wID0gdGhpcy5udW1Sb3dzICsgdGhpcy5wb3NbMF0gKyAyO1xuICAgICAgICBsZXQgbGVmdCA9IHRoaXMucG9zWzFdO1xuICAgICAgICBsZXQgaW5wdXR3aWR0aCA9IHRoaXMud2lkdGggLSA2O1xuICAgICAgICBsZXQgdGltZVN0YXJ0ID0gdGhpcy53aWR0aDtcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLmNhbGN1bGF0ZVRpbWUoKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXR3aWR0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIGxldCBlbCA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KFt0b3AsIGkgKyBsZWZ0XSk7XG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKFwidGVzdC1pbnB1dFwiLCAndHlwZXRlc3QnKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKGNoaWxkKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRbaV0pIGNoaWxkLmlubmVyVGV4dCA9IHRoaXMuaW5wdXRbaV07XG4gICAgICAgICAgICBpZiAoaSA9PT0gdGhpcy5pbnB1dC5sZW5ndGgpIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICAgICAgICAgIHJlcGxhY2VDaGlsZHJlbihlbCwgY2hpbGQpO1xuICAgICAgICAgICAgdGltZVN0YXJ0ID0gaSArIGxlZnQgKyAzO1xuICAgICAgICB9XG5cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgbGV0IGVsID0gdGhpcy5ncmlkLmdldEVsZW1lbnQoW3RvcCwgaSArIHRpbWVTdGFydF0pO1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZChcInRlc3QtdGltZVwiLCBcInR5cGV0ZXN0XCIpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgY2hpbGQuaW5uZXJUZXh0ID0gdGltZVtpXTtcbiAgICAgICAgICAgIHJlcGxhY2VDaGlsZHJlbihlbCwgY2hpbGQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICByZW5kZXJXb3JkRGlzcGxheSgpIHtcbiAgICAgICAgbGV0IHdvcmRzUmVuZGVyZWQgPSAwO1xuICAgICAgICBsZXQgZmlyc3RDb2xMZW5ndGggPSAwO1xuXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMubnVtUm93cyA7IHJvdyArPSAyKSB7XG5cbiAgICAgICAgICAgIGxldCBjb2wgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGNvbCA8PSB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHdvcmRJZHggPSB0aGlzLnJlbmRlcmVkV29yZEJlZ2luICsgd29yZHNSZW5kZXJlZDtcbiAgICAgICAgICAgICAgICBsZXQgcmVuZGVyZWRXb3JkID0gdGhpcy51c2VyV29yZHNbd29yZElkeF07XG4gICAgICAgICAgICAgICAgaWYgKGNvbCArIHJlbmRlcmVkV29yZC53b3JkLmxlbmd0aCA+IHRoaXMud2lkdGgpIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgbGV0IHJlbmRlckNvb3JkID0gW3JvdywgY29sXTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcldvcmQod29yZElkeCwgcmVuZGVyQ29vcmQpO1xuICAgICAgICAgICAgICAgIHdvcmRzUmVuZGVyZWQgKz0gMTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29sICs9IHJlbmRlcmVkV29yZC53b3JkLmxlbmd0aCArIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyb3cgPT09IDApIGZpcnN0Q29sTGVuZ3RoID0gd29yZHNSZW5kZXJlZDtcblxuICAgICAgICB9XG4gXG4gICAgICAgIHRoaXMucmVuZGVyZWRXb3JkRW5kID0gdGhpcy5yZW5kZXJlZFdvcmRCZWdpbiArIGZpcnN0Q29sTGVuZ3RoO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRXb3JkID49IHRoaXMucmVuZGVyZWRXb3JkRW5kKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkV29yZEJlZ2luID0gdGhpcy5jdXJyZW50V29yZDtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVUaW1lKCkge1xuICAgICAgICBcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRUaW1lKSByZXR1cm4gJzE6MDAnO1xuXG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgdGltZUxlZnQgPSA2MCAtIE1hdGguZmxvb3IoKG5vdy5nZXRUaW1lKCkgLSB0aGlzLmN1cnJlbnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwKTtcblxuICAgICAgICBpZiAodGltZUxlZnQgPCAwKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiAnMDowMCc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWluID0gTWF0aC5mbG9vcih0aW1lTGVmdCAvIDYwKTtcbiAgICAgICAgbGV0IHNlYyA9IHRpbWVMZWZ0ICUgNjA7XG4gICAgICAgIHNlYyA9IChzZWMgPCAxMCkgPyAnMCcgKyBzZWMgOiBzZWMudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IGZvcm1hdHRlZFRpbWUgPSBtaW4gKyAnOicgKyBzZWM7XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWRUaW1lO1xuICAgIH1cblxuICAgIHJlbmRlcldvcmQoaWR4LCBwb3MpIHtcbiAgICAgICAgbGV0IHR5cGVTdGFydCA9IGFkZENvb3JkaW5hdGVzKHRoaXMucG9zLCBbMCwwXSlcbiAgICAgICAgbGV0IHdvcmRCZWdpbiA9IGFkZENvb3JkaW5hdGVzKHR5cGVTdGFydCwgcG9zKTtcbiAgICAgICAgbGV0IHdvcmQgPSB0aGlzLnVzZXJXb3Jkc1tpZHhdO1xuXG4gICAgICAgIGxldCBzdGF0dXMgPSAnbm9uZSc7XG5cbiAgICAgICAgaWYgKHdvcmQubWlzdHlwZWQpIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdyZWQnO1xuICAgICAgICB9IGVsc2UgaWYgKGlkeCA8IHRoaXMuY3VycmVudFdvcmQpIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdzdWNjZXNzJztcbiAgICAgICAgfSBlbHNlIGlmIChpZHggPT09IHRoaXMuY3VycmVudFdvcmQpIHtcbiAgICAgICAgICAgIGxldCBtYXRjaGVzID0gdGhpcy51c2VyV29yZHNbdGhpcy5jdXJyZW50V29yZF0ud29yZCA9PT0gdGhpcy5pbnB1dDtcbiAgICAgICAgICAgIHN0YXR1cyA9IG1hdGNoZXMgPyAnc3VjY2VzcycgOiAnY3VycmVudCc7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkLndvcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBlbGVDb29yZCA9IGFkZENvb3JkaW5hdGVzKHdvcmRCZWdpbiwgWzAsIGldKVxuICAgICAgICAgICAgbGV0IGVsZSA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KGVsZUNvb3JkKTtcblxuICAgICAgICAgICAgbGV0IGxldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgbGV0dGVyLmlubmVySFRNTCA9IHdvcmQud29yZFtpXTtcbiAgICAgICAgICAgIGxldHRlci5jbGFzc0xpc3QuYWRkKFwidHlwZXRlc3RcIiwgc3RhdHVzKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKGxldHRlcik7XG4gICAgICAgICAgICByZXBsYWNlQ2hpbGRyZW4oZWxlLCBsZXR0ZXIpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBuZXh0V29yZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIHRoaXMuZW5zdXJlVXNlcldvcmRzKCk7XG4gICAgICAgIGxldCBjdXJyZW50V29yZCA9IHRoaXMudXNlcldvcmRzW3RoaXMuY3VycmVudFdvcmRdO1xuICAgICAgICBjdXJyZW50V29yZC5taXN0eXBlZCA9IHRoaXMuaW5wdXQgIT09IGN1cnJlbnRXb3JkLndvcmQ7XG4gICAgICAgIHRoaXMuaW5wdXQgPSAnJztcbiAgICAgICAgdGhpcy5jdXJyZW50V29yZCsrO1xuICAgIH1cblxuICAgIHZhbGlkYXRlQ3VycmVudFdvcmQoKSB7XG4gICAgICAgIGxldCBjdXJyZW50V29yZCA9IHRoaXMudXNlcldvcmRzW3RoaXMuY3VycmVudFdvcmRdO1xuICAgICAgICBsZXQgaW5wdXRSRSA9IG5ldyBSZWdFeHAoJ14nICsgdGhpcy5pbnB1dClcbiAgICAgICAgY3VycmVudFdvcmQubWlzdHlwZWQgPSAhaW5wdXRSRS50ZXN0KGN1cnJlbnRXb3JkLndvcmQpO1xuICAgIH1cblxuXG4gICAgZW5zdXJlVXNlcldvcmRzKCkge1xuICAgICAgICBpZiAodGhpcy51c2VyV29yZHMubGVuZ3RoIDwgNTAgKyB0aGlzLmN1cnJlbnRXb3JkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA1MDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRvcFdvcmRzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRXb3JkID0gdGhpcy50b3BXb3Jkc1tyYW5kSWR4XTtcbiAgICAgICAgICAgICAgICBsZXQgd29yZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgd29yZDogcmFuZFdvcmQsXG4gICAgICAgICAgICAgICAgICAgIG1pc3R5cGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJXb3Jkcy5wdXNoKHdvcmQpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY2FsY3VsYXRlUG9zKCkge1xuICAgICAgICBsZXQgeCA9IDU7XG4gICAgICAgIGxldCB5ID0gTWF0aC5jZWlsKCgwLjMgKiB0aGlzLmdyaWQud2lkdGgpIC8gMik7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfVxuXG4gICAgcmVjZWl2ZShlKSB7XG4gICAgICAgIC8vZGV0ZXJtaW5lcyBcblxuICAgICAgICBpZiAoWzEzLCAzMl0uaW5jbHVkZXMoZS5rZXlDb2RlKSkge1xuICAgICAgICAgICAgdGhpcy5uZXh0V29yZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKChlLmtleUNvZGUgPj0gNjUgJiYgZS5rZXlDb2RlIDwgOTEpIHx8IGUua2V5Q29kZSA9PT0gMjIyKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFRpbWUpIHRoaXMuY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dCArPSBlLmtleTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVDdXJyZW50V29yZCgpXG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgdGhpcy5ncmlkLmV4aXRUeXBldGVzdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gOCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXQpIHRoaXMuaW5wdXQgPSB0aGlzLmlucHV0LnNsaWNlKDAsIHRoaXMuaW5wdXQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlQ3VycmVudFdvcmQoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbn0gIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZENvb3JkaW5hdGVzKGExLCBhMikge1xuICAgIHJldHVybiBbYTFbMF0gKyBhMlswXSwgYTFbMV0gKyBhMlsxXV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCb3VuZGVkQ29vcmRpbmF0ZXMoYTEsIGEyLCBncmlkKSB7XG4gICAgbGV0IHggPSBhMVswXSArIGEyWzBdXG4gICAgbGV0IHkgPSBhMVsxXSArIGEyWzFdO1xuICAgIHggPSB4ICUgZ3JpZC5oZWlnaHQ7XG4gICAgeSA9IHkgJSBncmlkLndpZHRoO1xuICAgIGlmICh4IDwgMCkgeCArPSBncmlkLmhlaWdodDtcbiAgICBpZiAoeSA8IDApIHkgKz0gZ3JpZC53aWR0aDtcbiAgICByZXR1cm4gW3gseV1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VDaGlsZHJlbihwYXJlbnQsIGNoaWxkKSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsQ29vcmRpbmF0ZXMoYTEsIGEyKSB7XG4gICAgcmV0dXJuIGExWzBdID09PSBhMlswXSAmJiBhMVsxXSA9PT0gYTJbMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlc0Nvb3JkaW5hdGVzKGNvb3JkTGlzdCwgY29vcmQpIHtcbiAgICBsZXQgcmVzID0gZmFsc2U7XG5cbiAgICBjb29yZExpc3QuZm9yRWFjaCh4eSA9PiB7XG4gICAgICAgIGlmIChlcXVhbENvb3JkaW5hdGVzKHh5LCBjb29yZCkpIHtcbiAgICAgICAgICAgIHJlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0Vtb2ppKHN0cikge1xuICAgIHN0ciA9IHN0ci50b0xvd2VyQ2FzZSgpO1xuXG4gICAgbGV0IEVNT0pJUyA9IFtcbiAgICAgIFwi8J+YoFwiLFxuICAgICAgXCLwn5izXCIsXG4gICAgICBcIvCfkajigI3wn5Go4oCN8J+RplwiLFxuICAgICAgXCLwn42GXCIsXG4gICAgICBcIvCfkLVcIixcbiAgICAgIFwi8J+QsVwiLFxuICAgICAgXCLwn5KpXCIsXG4gICAgICBcIvCfjJ5cIixcbiAgICAgIFwi8J+MiFwiLFxuICAgICAgXCLwn4yKXCIsXG4gICAgICBcIvCfl71cIixcbiAgICAgIFwi8J+buFwiLFxuICAgICAgXCLwn5Go4oCN8J+RqOKAjfCfkaZcIixcbiAgICAgIFwi8J+lk1wiLFxuICAgICAgXCLwn5GMXCIsXG4gICAgICBcIvCfj55cIixcbiAgICAgIFwi8J+OolwiLFxuICAgICAgXCLwn5qWXCIsXG4gICAgICBcIvCfjalcIixcbiAgICAgIFwi8J+NlFwiLFxuICAgICAgXCLwn4eu8J+Ht1wiLFxuICAgICAgXCLwn6SlXCIsXG4gICAgICBcIvCfkYJcIixcbiAgICAgIFwi4piiXCIsXG4gICAgICBcIvCfiLVcIixcbiAgICAgIFwi8J+ko1wiXG4gICAgXTtcblxuXG4gICAgbGV0IGNvZGUgPSBzdHIuY2hhckNvZGVBdCgwKSAtIDk3O1xuICAgIHJldHVybiBFTU9KSVNbY29kZV07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==