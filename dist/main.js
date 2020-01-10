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
      console.log(inst);
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
  }
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
      console.log(keywords);
      var appliedKeywords = '';

      for (var i = 0; i < 4; i++) {
        var randIdx = Math.floor(Math.random() * (keywords.length - 6)) + 6;
        console.log(randIdx);
        appliedKeywords += keywords[randIdx];
      }

      console.log(appliedKeywords);
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
      console.log(this.input);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9rZXl3b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FtcGxldGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc25ha2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwZWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiXSwibmFtZXMiOlsiR3JpZCIsInJvb3QiLCJpbnB1dCIsIkNFTExTSVpFIiwiY3Vyc29yUG9zIiwiaGVpZ2h0IiwiTWF0aCIsImNlaWwiLCJvZmZzZXRIZWlnaHQiLCJ3aWR0aCIsImZsb29yIiwib2Zmc2V0V2lkdGgiLCJzcGVsbHMiLCJjdXJyZW50U3BlbGwiLCJTcGVsbCIsImZyYW1lcmF0ZSIsInR5cGV0ZXN0IiwiZ3JpZCIsInBvcHVsYXRlIiwicGxheSIsImtleXdvcmRzTGlzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsb2dvIiwiY2FzdE5ld1NwZWxsIiwib25jbGljayIsIm5leHRTcGVsbCIsInB1c2giLCJnZW5lcmF0ZVJhbmRvbVNwZWxsIiwiT2JqZWN0Iiwia2V5cyIsImtleXdvcmRzIiwiZm9yRWFjaCIsImt3IiwibGkiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwicmVjZWl2ZSIsImFwcGVuZENoaWxkIiwicmVzaXplR3JpZCIsImJpbmQiLCJyZWNlaXZlSW5wdXQiLCJyZWNlaXZlQ2xpY2siLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInBvcyIsInRhcmdldCIsImRhdGFzZXQiLCJ3aW5kb3ciLCJvbnJlc2l6ZSIsImkiLCJyb3dBcnIiLCJyb3ciLCJjbGFzc05hbWUiLCJqIiwiY2VsbCIsImZpcnN0Q2hpbGQiLCJyZW1vdmUiLCJjbGVhckdyaWRFbGVtZW50cyIsInNuYWtlTW9kZSIsImNsZWFyUHJldmlvdXNSZW5kZXIiLCJzdG9yZWRUZXh0IiwiYWN0aXZlVGV4dCIsInByZXZTcGVsbCIsInJlbmRlciIsImNvb3JkaW5hdGVzIiwieCIsInkiLCJTbmFrZSIsImxhc3RTcGVsbCIsImNlbnRlclBvcyIsImluc3QiLCJjYXN0IiwiY3VycmVudFBvcyIsImNvbnNvbGUiLCJsb2ciLCJUeXBlVGVzdCIsInBvc0FyciIsInNwbGl0IiwibWFwIiwicGFyc2VJbnQiLCJrZXljb2RlIiwiZGVsdGEiLCJVdGlsIiwicmFuZG9tIiwia2V5Q29kZSIsImtleSIsImRlbGV0ZUNoYXJhY3RlciIsInVwZGF0ZUN1cnJlbnRQb3NpdGlvbiIsInNwZWxsIiwibW92ZSIsInJhdGUiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImZyYW1lIiwiYW5pbWF0ZSIsInNhbXBsZVRleHQiLCJhbGwiLCJ0eXBlIiwiY2xlYXIiLCJzbmFrZSIsInRlc3QiLCJjaXJjbGUiLCJmYXN0IiwiYWN0aW9uIiwic2xvdyIsImJpZyIsImxpdHRsZSIsImhlbHAiLCJ1cCIsImRvd24iLCJsZWZ0IiwicmlnaHQiLCJjb21pYyIsInNhbnMiLCJmdW4iLCJtb25vIiwic2VyaWYiLCJibHVlIiwiZ3JlZW4iLCJ5ZWxsb3ciLCJwdXJwbGUiLCJvcmFuZ2UiLCJwaW5rIiwiYmxhY2siLCJyZWQiLCJlbW9qaSIsImhlbGxvIiwibWFkZWJ5IiwiZm9vIiwidG9wMTAwMCIsIndoaXRlc3BhY2UiLCJ3b3JkcyIsInZhbGlkd29yZHMiLCJmaWx0ZXIiLCJ3b3JkIiwibGVuZ3RoIiwicmFuZ2UiLCJzbGljZSIsInBvc2l0aW9uIiwibW92ZXMiLCJwb3NpdGlvbnMiLCJyZW5kZXJlZEVsZW1lbnRzIiwiaGVhZCIsImJvZHkiLCJyZXMiLCJnZXRFbGVtZW50IiwibG9zZXJTcGVsbCIsInNjb3JlIiwicG9pbnRzIiwiZWxlIiwibmV4dFBvc2l0aW9uIiwiYWRkQ29vcmRpbmF0ZXMiLCJpbmNsdWRlc0Nvb3JkaW5hdGVzIiwib3V0T2ZCb3VuZHMiLCJoYW5kbGVMb3NzIiwiaXNFbXB0eSIsInVuc2hpZnQiLCJlYXQiLCJwb3AiLCJjb21iaW5lZERpcnMiLCJvcHBvc2l0ZURpciIsInNuYWNrIiwiZWxlbWVudCIsImNoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVwbGFjZUNoaWxkcmVuIiwicGVyRnJhbWVLZXl3b3JkcyIsImFwcGxpZWRLZXl3b3JkcyIsInJhbmRvbVBvc2l0aW9uIiwia2V5d29yZEluZGV4Iiwicm90YXRlIiwiY2xhc3NBcnIiLCJjb2xvcnMiLCJmb250Iiwic2l6ZSIsInRvTG93ZXJDYXNlIiwiZXh0cmFjdEtleXdvcmRzIiwiQXJyYXkiLCJub3RTdG9yZWQiLCJhcHBseUtleXdvcmQiLCJpbmNsdWRlcyIsInBsYXlTbmFrZSIsIm5ld2ZwcyIsIm5ld3NpemUiLCJwbGF5VHlwZXRlc3QiLCJjb250YWluc0tleXdvcmQiLCJzdWJzdHIiLCJzdHIiLCJrd3MiLCJzaGlmdCIsInJhbmRJZHgiLCJ0ZXh0Iiwic2lnbiIsImxldHRlciIsInNwYW4iLCJ0ZXh0Q29udGVudCIsInRvVXBwZXJDYXNlIiwic3R5bGUiLCJmb250U2l6ZSIsImJhY2tncm91bmRDb2xvciIsInNodWZmbGVDb2xvcnMiLCJjb2xvciIsImNhbGN1bGF0ZVBvcyIsInVzZXJXb3JkcyIsImN1cnJlbnRXb3JkIiwiYmFka2V5c3Ryb2tlcyIsInJlbmRlcmVkV29yZEJlZ2luIiwicmVuZGVyZWRXb3JkRW5kIiwibnVtUm93cyIsImN1cnJlbnRUaW1lIiwidG9wV29yZHMiLCJlbnN1cmVVc2VyV29yZHMiLCJjYWxjdWxhdGVXUE0iLCJleGl0VHlwZXRlc3QiLCJjb3JyZWN0S2V5c3Ryb2tlcyIsIm1pc3R5cGVkIiwibm93IiwiRGF0ZSIsInRpbWVMZWZ0IiwiZ2V0VGltZSIsInRpbWVzVXAiLCJvdmVyIiwicmVuZGVyUGFkZGluZyIsInJlbmRlcldvcmREaXNwbGF5IiwicmVuZGVySW5wdXQiLCJ0b3AiLCJlbCIsImlucHV0d2lkdGgiLCJ0aW1lU3RhcnQiLCJ0aW1lIiwiY2FsY3VsYXRlVGltZSIsIndvcmRzUmVuZGVyZWQiLCJmaXJzdENvbExlbmd0aCIsImNvbCIsIndvcmRJZHgiLCJyZW5kZXJlZFdvcmQiLCJyZW5kZXJDb29yZCIsInJlbmRlcldvcmQiLCJtaW4iLCJzZWMiLCJ0b1N0cmluZyIsImZvcm1hdHRlZFRpbWUiLCJpZHgiLCJ0eXBlU3RhcnQiLCJ3b3JkQmVnaW4iLCJzdGF0dXMiLCJtYXRjaGVzIiwiZWxlQ29vcmQiLCJpbm5lckhUTUwiLCJpbnB1dFJFIiwiUmVnRXhwIiwicmFuZFdvcmQiLCJuZXh0V29yZCIsInZhbGlkYXRlQ3VycmVudFdvcmQiLCJhMSIsImEyIiwiYWRkQm91bmRlZENvb3JkaW5hdGVzIiwicGFyZW50IiwicmVtb3ZlQ2hpbGQiLCJlcXVhbENvb3JkaW5hdGVzIiwiY29vcmRMaXN0IiwiY29vcmQiLCJ4eSIsInRvRW1vamkiLCJFTU9KSVMiLCJjb2RlIiwiY2hhckNvZGVBdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVB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QUFFSCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBTcGVsbCBmcm9tICcuL3NwZWxsJztcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IHsgU25ha2UgfSBmcm9tICcuL3NuYWtlJztcbmltcG9ydCBrZXl3b3JkcyBmcm9tIFwiLi9rZXl3b3Jkc1wiO1xuaW1wb3J0IHsgVHlwZVRlc3QgfSBmcm9tICcuL3R5cGV0ZXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XG4gICAgY29uc3RydWN0b3Iocm9vdCwgaW5wdXQpIHtcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5DRUxMU0laRSA9IDI1O1xuICAgICAgICB0aGlzLmN1cnNvclBvcyA9IFswLDBdO1xuICAgICAgICB0aGlzLmhlaWdodCA9IE1hdGguY2VpbChyb290Lm9mZnNldEhlaWdodCAvIHRoaXMuQ0VMTFNJWkUpIC0gMjtcbiAgICAgICAgdGhpcy53aWR0aCA9IE1hdGguZmxvb3Iocm9vdC5vZmZzZXRXaWR0aCAvIHRoaXMuQ0VMTFNJWkUpO1xuICAgICAgICB0aGlzLnNwZWxscyA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbCA9IG5ldyBTcGVsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5mcmFtZXJhdGUgPSAyMDA7XG5cbiAgICAgICAgdGhpcy50eXBldGVzdCA9IG51bGw7XG4gICAgICAgIHRoaXMuZ3JpZCA9IHRoaXMucG9wdWxhdGUoKTtcbiAgICAgICAgdGhpcy5wbGF5ID0gdHJ1ZTtcblxuICAgICAgICBsZXQga2V5d29yZHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrZXl3b3Jkcy1saXN0XCIpO1xuICAgICAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvJyk7XG4gICAgICAgIGxldCBjYXN0TmV3U3BlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FzdC1uZXctc3BlbGwnKTtcbiAgICAgICAgY2FzdE5ld1NwZWxsLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm5leHRTcGVsbCgpO1xuXG4gICAgICAgIGxvZ28ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5wdXNoKHRoaXMuY3VycmVudFNwZWxsLmdlbmVyYXRlUmFuZG9tU3BlbGwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMoa2V5d29yZHMpLmZvckVhY2goa3cgPT4ge1xuICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICBsaS5pbm5lclRleHQgPSBrdztcbiAgICAgICAgICBsaS5vbmNsaWNrID0gKCkgPT4gdGhpcy5jdXJyZW50U3BlbGwucmVjZWl2ZShrdyk7XG4gICAgICAgICAga2V5d29yZHNMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZXNpemVHcmlkID0gdGhpcy5yZXNpemVHcmlkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVjZWl2ZUlucHV0ID0gdGhpcy5yZWNlaXZlSW5wdXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWNlaXZlQ2xpY2sgPSB0aGlzLnJlY2VpdmVDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMucmVjZWl2ZUlucHV0KTtcblxuICAgICAgICB0aGlzLnJvb3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgeyBwb3MgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgICAgICBpZiAocG9zKSB0aGlzLnJlY2VpdmVDbGljayhwb3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cub25yZXNpemUgPSB0aGlzLnJlc2l6ZUdyaWQ7XG4gICAgfVxuIFxuICAgIHBvcHVsYXRlKCkge1xuICAgICAgICBsZXQgZ3JpZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3dBcnIgPSBbXTtcbiAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgcm93LmNsYXNzTmFtZSA9ICdyb3cnO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLndpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnY2VsbCc7XG4gICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnBvcyA9IFtpLCBqXVxuICAgICAgICAgICAgICAgIHJvd0Fyci5wdXNoKGNlbGwpO1xuXG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHRoaXMucm9vdC5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgZ3JpZC5wdXNoKHJvd0Fycik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ3JpZDtcbiAgICB9XG5cblxuICAgIGNsZWFyR3JpZEVsZW1lbnRzKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5yb290LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzaXplR3JpZCgpIHtcbiAgICAgICAgbGV0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuICAgICAgICB0aGlzLmNsZWFyR3JpZEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5mbG9vcihyb290Lm9mZnNldEhlaWdodCAvIHRoaXMuQ0VMTFNJWkUpIC0gMTtcbiAgICAgICAgdGhpcy53aWR0aCA9IE1hdGguZmxvb3Iocm9vdC5vZmZzZXRXaWR0aCAvIHRoaXMuQ0VMTFNJWkUpO1xuICAgICAgICB0aGlzLmdyaWQgPSB0aGlzLnBvcHVsYXRlKCk7XG4gICAgfVxuXG4gICAgbmV4dFNwZWxsKCkge1xuICAgICAgICBpZiAodGhpcy5zbmFrZU1vZGUoKSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwuY2xlYXJQcmV2aW91c1JlbmRlcigpXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbCA9IG5ldyBTcGVsbChncmlkKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRTcGVsbC5zdG9yZWRUZXh0IHx8IHRoaXMuY3VycmVudFNwZWxsLmFjdGl2ZVRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuc3BlbGxzLnB1c2godGhpcy5jdXJyZW50U3BlbGwpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwgPSBuZXcgU3BlbGwoZ3JpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcHJldlNwZWxsID0gdGhpcy5jdXJyZW50U3BlbGw7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbCA9IG5ldyBTcGVsbChncmlkKTtcbiAgICAgICAgICAgIHByZXZTcGVsbC5yZW5kZXIoKVxuICAgICAgICB9ICBcbiAgICB9XG5cbiAgICBnZXRFbGVtZW50KGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGxldCB4ID0gY29vcmRpbmF0ZXNbMF0gJSB0aGlzLmhlaWdodDtcbiAgICAgICAgbGV0IHkgPSBjb29yZGluYXRlc1sxXSAlIHRoaXMud2lkdGg7XG4gICAgICAgIGlmICh4IDwgMCkgeCArPSB0aGlzLmhlaWdodDtcbiAgICAgICAgaWYgKHkgPCAwKSB5ICs9IHRoaXMud2lkdGg7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRbeF1beV07XG4gICAgfVxuXG5cbiAgICBzbmFrZU1vZGUoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5jdXJyZW50U3BlbGwgaW5zdGFuY2VvZiBTbmFrZSlcbiAgICB9XG5cbiAgICBwbGF5U25ha2UoKSB7XG4gICAgICAgIGxldCBsYXN0U3BlbGwgPSB0aGlzLmN1cnJlbnRTcGVsbDtcbiAgICAgICAgdGhpcy5zcGVsbHMucHVzaChsYXN0U3BlbGwpO1xuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IodGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKHRoaXMud2lkdGggLyAyKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBjZW50ZXJQb3MgPSBbeCwgeV07XG5cbiAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwgPSBuZXcgU25ha2UodGhpcywgY2VudGVyUG9zKVxuICAgIH1cblxuICAgIHBsYXlUeXBldGVzdCgpIHtcbiAgICAgICAgLy8gY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgIHRoaXMuc3BlbGxzLnB1c2godGhpcy5jdXJyZW50U3BlbGwpO1xuICAgICAgICBsZXQgaW5zdCA9IG5ldyBTcGVsbCh0aGlzKTtcbiAgICAgICAgaW5zdC5jYXN0KFtcInJpZ2h0XCIsIFwiZ3JlZW5cIl0pO1xuICAgICAgICBpbnN0LnN0b3JlZFRleHQgPSBcInByZXNzIGVzYyB0byBleGl0XCI7XG4gICAgICAgIGluc3QuY3VycmVudFBvcyA9IFsxLCAxXTtcbiAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwgPSBpbnN0O1xuICAgICAgICBjb25zb2xlLmxvZyhpbnN0KVxuXG4gICAgICAgIGlmICh0aGlzLnR5cGV0ZXN0KSB0aGlzLnR5cGV0ZXN0LmNsZWFyUHJldmlvdXNSZW5kZXIoKTtcbiAgICAgICAgdGhpcy50eXBldGVzdCA9IG5ldyBUeXBlVGVzdCh0aGlzKTtcbiAgICAgICAgdGhpcy50eXBldGVzdC5yZW5kZXIoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHRoaXMuY3VycmVudFNwZWxsID0gbnVsbDtcbiAgICB9XG5cbiAgICBleGl0VHlwZXRlc3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnR5cGV0ZXN0KSB0aGlzLnR5cGV0ZXN0LmNsZWFyUHJldmlvdXNSZW5kZXIoKTtcblxuICAgICAgICB0aGlzLnR5cGV0ZXN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwuY2xlYXJQcmV2aW91c1JlbmRlcigpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbCA9IG5ldyBTcGVsbCh0aGlzKTtcbiAgICB9XG5cbiAgICByZWNlaXZlQ2xpY2socG9zKSB7XG4gICAgICAgIGlmICh0aGlzLnNuYWtlTW9kZSgpKSByZXR1cm47XG4gICAgICAgIGxldCBwb3NBcnIgPSBwb3Muc3BsaXQoXCIsXCIpLm1hcChpID0+IHBhcnNlSW50KGkpKTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFNwZWxsKSB0aGlzLmN1cnJlbnRTcGVsbC5jdXJyZW50UG9zID0gcG9zQXJyO1xuICAgIH1cblxuICAgIHVwZGF0ZUN1cnJlbnRQb3NpdGlvbihrZXljb2RlKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgZGVsdGE7IFxuXG4gICAgICAgIHN3aXRjaCAoa2V5Y29kZSkge1xuICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICBkZWx0YSA9IFswLCAtMV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgZGVsdGEgPSBbLTEsIDBdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgIGRlbHRhID0gWzAsIDFdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgIGRlbHRhID0gWzEsIDBdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgaWYgKHRoaXMuc25ha2VNb2RlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWxsLnJlY2VpdmVJbnB1dChkZWx0YSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgeyBjdXJyZW50UG9zIH0gPSB0aGlzLmN1cnJlbnRTcGVsbDtcbiAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwuY3VycmVudFBvcyA9IFV0aWwuYWRkQ29vcmRpbmF0ZXMoZGVsdGEsIGN1cnJlbnRQb3MpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbC5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICByYW5kb21Qb3NpdGlvbigpIHtcbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmhlaWdodCk7XG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy53aWR0aCk7XG5cbiAgICAgICAgcmV0dXJuIFt4LHldO1xuICAgIH1cblxuICAgIHJlY2VpdmVJbnB1dChlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U3BlbGwpIHRoaXMuY3VycmVudFNwZWxsLmNsZWFyUHJldmlvdXNSZW5kZXIoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWxsID0gbmV3IFNwZWxsKHRoaXMpOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnR5cGV0ZXN0KSB7XG4gICAgICAgICAgdGhpcy50eXBldGVzdC5yZWNlaXZlKGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAzMikge1xuICAgICAgICAgIHRoaXMubmV4dFNwZWxsKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID49IDY1ICYmIGUua2V5Q29kZSA8IDkxKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc25ha2VNb2RlKCkpIHJldHVybjtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbC5yZWNlaXZlKGUua2V5KTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDggJiYgdGhpcy5jdXJyZW50U3BlbGwpIHtcbiAgICAgICAgICBpZiAodGhpcy5zbmFrZU1vZGUoKSkgcmV0dXJuO1xuICAgICAgICAgIHRoaXMuY3VycmVudFNwZWxsLmRlbGV0ZUNoYXJhY3RlcigpO1xuICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA8PSA0MCAmJiBlLmtleUNvZGUgPj0gMzcpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRQb3NpdGlvbihlLmtleUNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfSBcblxuICAgIGZyYW1lKCkge1xuICAgICAgICB0aGlzLnNwZWxscy5mb3JFYWNoKHNwZWxsID0+IHNwZWxsLm1vdmUoKSk7XG4gICAgXG4gICAgICAgIHRoaXMuY3VycmVudFNwZWxsLm1vdmUoKTtcbiAgICAgICAgaWYgKHRoaXMudHlwZXRlc3QpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZXRlc3QucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgYW5pbWF0ZShyYXRlKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnR5cGV0ZXN0KSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5mcmFtZXJhdGUgPSByYXRlIHx8IHRoaXMuZnJhbWVyYXRlO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWUoKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgICAgICB9LCB0aGlzLmZyYW1lcmF0ZSk7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgR3JpZCBmcm9tICcuL2dyaWQnO1xuaW1wb3J0IFNwZWxsIGZyb20gJy4vc3BlbGwnO1xuaW1wb3J0IHsgc2FtcGxlVGV4dCB9IGZyb20gXCIuL3NhbXBsZXRleHRcIjtcblxuaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHsgVHlwZVRlc3QgfSBmcm9tICcuL3R5cGV0ZXN0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpO1xuICAgIHdpbmRvdy5TcGVsbCA9IFNwZWxsO1xuICAgIGNvbnN0IGdyaWQgPSBuZXcgR3JpZChyb290LCBpbnB1dCk7XG5cbiAgICBncmlkLmFuaW1hdGUoKTtcbiAgICB3aW5kb3cuZ3JpZCA9IGdyaWQ7XG4gICAgd2luZG93LnNhbXBsZVRleHQgPSBzYW1wbGVUZXh0O1xuICAgIHdpbmRvdy50eXBldGVzdCA9IG5ldyBUeXBlVGVzdChncmlkKTtcblxufSkiLCJjb25zdCBrZXl3b3JkcyA9IHtcbiAgYWxsOiB7IHR5cGU6IFwiYWxsXCIgfSxcbiAgY2xlYXI6IHsgdHlwZTogXCJjbGVhclwiIH0sXG4gIHNwZWxsOiB7IHR5cGU6IFwic3BlbGxcIiB9LFxuICBzbmFrZTogeyB0eXBlOiBcInNuYWtlXCIgfSxcbiAgdHlwZTogeyB0eXBlOiBcInR5cGV0ZXN0XCIgfSxcbiAgdGVzdDogeyB0eXBlOiBcInR5cGV0ZXN0XCIgfSxcbiAgY2lyY2xlOiB7IHR5cGU6IFwiY2lyY2xlXCIgfSxcbiAgZmFzdDogeyB0eXBlOiBcInNwZWVkXCIsIGFjdGlvbjogMC44IH0sXG4gIHNsb3c6IHsgdHlwZTogXCJzcGVlZFwiLCBhY3Rpb246IDEuMjUgfSxcbiAgYmlnOiB7IHR5cGU6IFwiZm9udHNpemVcIiwgYWN0aW9uOiAxLjI1IH0sXG4gIGxpdHRsZTogeyB0eXBlOiBcImZvbnRzaXplXCIsIGFjdGlvbjogMC44IH0sXG4gIGhlbHA6IHsgdHlwZTogXCJpbmZvXCIsIGFjdGlvbjogXCJoZWxwXCIgfSxcbiAgdXA6IHsgdHlwZTogXCJtb3ZlXCIsIGFjdGlvbjogWy0xLCAwXSB9LFxuICBkb3duOiB7IHR5cGU6IFwibW92ZVwiLCBhY3Rpb246IFsxLCAwXSB9LFxuICBsZWZ0OiB7IHR5cGU6IFwibW92ZVwiLCBhY3Rpb246IFswLCAtMV0gfSxcbiAgcmlnaHQ6IHsgdHlwZTogXCJtb3ZlXCIsIGFjdGlvbjogWzAsIDFdIH0sXG4gIGNvbWljOiB7IHR5cGU6IFwiZm9udFwiLCBhY3Rpb246IFwiY29taWNcIiB9LFxuICBzYW5zOiB7IHR5cGU6IFwiZm9udFwiLCBhY3Rpb246IFwic2Fuc1wiIH0sXG4gIGZ1bjogeyB0eXBlOiBcImZvbnRcIiwgYWN0aW9uOiBcImZ1blwiIH0sXG4gIG1vbm86IHsgdHlwZTogXCJmb250XCIsIGFjdGlvbjogXCJtb25vXCIgfSxcbiAgc2VyaWY6IHsgdHlwZTogXCJmb250XCIsIGFjdGlvbjogXCJzZXJpZlwiIH0sXG4gIGJsdWU6IHsgdHlwZTogXCJjb2xvclwiLCBhY3Rpb246IFwiIzU3OThhZFwiIH0sXG4gIGdyZWVuOiB7IHR5cGU6IFwiY29sb3JcIiwgYWN0aW9uOiBcIiM1N2FkNmVcIiB9LFxuICB5ZWxsb3c6IHsgdHlwZTogXCJjb2xvclwiLCBhY3Rpb246IFwiI2RiYzAzNVwiIH0sXG4gIHB1cnBsZTogeyB0eXBlOiBcImNvbG9yXCIsIGFjdGlvbjogXCIjOWQ2NGUzXCIgfSxcbiAgb3JhbmdlOiB7IHR5cGU6IFwiY29sb3JcIiwgYWN0aW9uOiBcIiNlNjdlMzlcIiB9LFxuICBwaW5rOiB7IHR5cGU6IFwiY29sb3JcIiwgYWN0aW9uOiBcIiNmMjBhZWVcIiB9LFxuICBibGFjazogeyB0eXBlOiBcImNvbG9yXCIsIGFjdGlvbjogXCIjMjIyZTJjXCIgfSxcbiAgcmVkOiB7IHR5cGU6IFwiY29sb3JcIiwgYWN0aW9uOiBcIiNkZTQ4MWJcIiB9LFxuICBlbW9qaTogeyB0eXBlOiBcImVtb2ppXCIgfSxcbiAgaGVsbG86IHsgdHlwZTogXCJ0ZXh0XCIsIGFjdGlvbjogXCJ3b3JsZFwiIH0sXG4gIG1hZGVieTogeyB0eXBlOiBcInRleHRcIiwgYWN0aW9uOiBcIiBzaW1vbiBkZWJldm9pc2VcIiB9LFxuICBmb286IHsgdHlwZTogXCJ0ZXh0XCIsIGFjdGlvbjogXCJiYXJcIiB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBrZXl3b3JkcztcblxuLy8gVE9ETzogXG4vLyByb3RhdGUsIHNuYWtlLCB0eXBldGVzdCwgYWJvdXQsIGluZGV4LCAgIiwibGV0IHRvcDEwMDAgPSBgdGhlXG5vZlxudG9cbmFuZFxuYVxuaW5cbmlzXG5pdFxueW91XG50aGF0XG5oZVxud2FzXG5mb3Jcbm9uXG5hcmVcbndpdGhcbmFzXG5JXG5oaXNcbnRoZXlcbmJlXG5hdFxub25lXG5oYXZlXG50aGlzXG5mcm9tXG5vclxuaGFkXG5ieVxubm90XG53b3JkXG5idXRcbndoYXRcbnNvbWVcbndlXG5jYW5cbm91dFxub3RoZXJcbndlcmVcbmFsbFxudGhlcmVcbndoZW5cbnVwXG51c2VcbnlvdXJcbmhvd1xuc2FpZFxuYW5cbmVhY2hcbnNoZVxud2hpY2hcbmRvXG50aGVpclxudGltZVxuaWZcbndpbGxcbndheVxuYWJvdXRcbm1hbnlcbnRoZW5cbnRoZW1cbndyaXRlXG53b3VsZFxubGlrZVxuc29cbnRoZXNlXG5oZXJcbmxvbmdcbm1ha2VcbnRoaW5nXG5zZWVcbmhpbVxudHdvXG5oYXNcbmxvb2tcbm1vcmVcbmRheVxuY291bGRcbmdvXG5jb21lXG5kaWRcbm51bWJlclxuc291bmRcbm5vXG5tb3N0XG5wZW9wbGVcbm15XG5vdmVyXG5rbm93XG53YXRlclxudGhhblxuY2FsbFxuZmlyc3Rcbndob1xubWF5XG5kb3duXG5zaWRlXG5iZWVuXG5ub3dcbmZpbmRcbmFueVxubmV3XG53b3JrXG5wYXJ0XG50YWtlXG5nZXRcbnBsYWNlXG5tYWRlXG5saXZlXG53aGVyZVxuYWZ0ZXJcbmJhY2tcbmxpdHRsZVxub25seVxucm91bmRcbm1hblxueWVhclxuY2FtZVxuc2hvd1xuZXZlcnlcbmdvb2Rcbm1lXG5naXZlXG5vdXJcbnVuZGVyXG5uYW1lXG52ZXJ5XG50aHJvdWdoXG5qdXN0XG5mb3JtXG5zZW50ZW5jZVxuZ3JlYXRcbnRoaW5rXG5zYXlcbmhlbHBcbmxvd1xubGluZVxuZGlmZmVyXG50dXJuXG5jYXVzZVxubXVjaFxubWVhblxuYmVmb3JlXG5tb3ZlXG5yaWdodFxuYm95XG5vbGRcbnRvb1xuc2FtZVxudGVsbFxuZG9lc1xuc2V0XG50aHJlZVxud2FudFxuYWlyXG53ZWxsXG5hbHNvXG5wbGF5XG5zbWFsbFxuZW5kXG5wdXRcbmhvbWVcbnJlYWRcbmhhbmRcbnBvcnRcbmxhcmdlXG5zcGVsbFxuYWRkXG5ldmVuXG5sYW5kXG5oZXJlXG5tdXN0XG5iaWdcbmhpZ2hcbnN1Y2hcbmZvbGxvd1xuYWN0XG53aHlcbmFza1xubWVuXG5jaGFuZ2VcbndlbnRcbmxpZ2h0XG5raW5kXG5vZmZcbm5lZWRcbmhvdXNlXG5waWN0dXJlXG50cnlcbnVzXG5hZ2FpblxuYW5pbWFsXG5wb2ludFxubW90aGVyXG53b3JsZFxubmVhclxuYnVpbGRcbnNlbGZcbmVhcnRoXG5mYXRoZXJcbmhlYWRcbnN0YW5kXG5vd25cbnBhZ2VcbnNob3VsZFxuY291bnRyeVxuZm91bmRcbmFuc3dlclxuc2Nob29sXG5ncm93XG5zdHVkeVxuc3RpbGxcbmxlYXJuXG5wbGFudFxuY292ZXJcbmZvb2RcbnN1blxuZm91clxuYmV0d2Vlblxuc3RhdGVcbmtlZXBcbmV5ZVxubmV2ZXJcbmxhc3RcbmxldFxudGhvdWdodFxuY2l0eVxudHJlZVxuY3Jvc3NcbmZhcm1cbmhhcmRcbnN0YXJ0XG5taWdodFxuc3RvcnlcbnNhd1xuZmFyXG5zZWFcbmRyYXdcbmxlZnRcbmxhdGVcbnJ1blxuZG9uJ3RcbndoaWxlXG5wcmVzc1xuY2xvc2Vcbm5pZ2h0XG5yZWFsXG5saWZlXG5mZXdcbm5vcnRoXG5vcGVuXG5zZWVtXG50b2dldGhlclxubmV4dFxud2hpdGVcbmNoaWxkcmVuXG5iZWdpblxuZ290XG53YWxrXG5leGFtcGxlXG5lYXNlXG5wYXBlclxuZ3JvdXBcbmFsd2F5c1xubXVzaWNcbnRob3NlXG5ib3RoXG5tYXJrXG5vZnRlblxubGV0dGVyXG51bnRpbFxubWlsZVxucml2ZXJcbmNhclxuZmVldFxuY2FyZVxuc2Vjb25kXG5ib29rXG5jYXJyeVxudG9va1xuc2NpZW5jZVxuZWF0XG5yb29tXG5mcmllbmRcbmJlZ2FuXG5pZGVhXG5maXNoXG5tb3VudGFpblxuc3RvcFxub25jZVxuYmFzZVxuaGVhclxuaG9yc2VcbmN1dFxuc3VyZVxud2F0Y2hcbmNvbG9yXG5mYWNlXG53b29kXG5tYWluXG5lbm91Z2hcbnBsYWluXG5naXJsXG51c3VhbFxueW91bmdcbnJlYWR5XG5hYm92ZVxuZXZlclxucmVkXG5saXN0XG50aG91Z2hcbmZlZWxcbnRhbGtcbmJpcmRcbnNvb25cbmJvZHlcbmRvZ1xuZmFtaWx5XG5kaXJlY3RcbnBvc2VcbmxlYXZlXG5zb25nXG5tZWFzdXJlXG5kb29yXG5wcm9kdWN0XG5ibGFja1xuc2hvcnRcbm51bWVyYWxcbmNsYXNzXG53aW5kXG5xdWVzdGlvblxuaGFwcGVuXG5jb21wbGV0ZVxuc2hpcFxuYXJlYVxuaGFsZlxucm9ja1xub3JkZXJcbmZpcmVcbnNvdXRoXG5wcm9ibGVtXG5waWVjZVxudG9sZFxua25ld1xucGFzc1xuc2luY2VcbnRvcFxud2hvbGVcbmtpbmdcbnNwYWNlXG5oZWFyZFxuYmVzdFxuaG91clxuYmV0dGVyXG50cnVlXG5kdXJpbmdcbmh1bmRyZWRcbmZpdmVcbnJlbWVtYmVyXG5zdGVwXG5lYXJseVxuaG9sZFxud2VzdFxuZ3JvdW5kXG5pbnRlcmVzdFxucmVhY2hcbmZhc3RcbnZlcmJcbnNpbmdcbmxpc3Rlblxuc2l4XG50YWJsZVxudHJhdmVsXG5sZXNzXG5tb3JuaW5nXG50ZW5cbnNpbXBsZVxuc2V2ZXJhbFxudm93ZWxcbnRvd2FyZFxud2FyXG5sYXlcbmFnYWluc3RcbnBhdHRlcm5cbnNsb3dcbmNlbnRlclxubG92ZVxucGVyc29uXG5tb25leVxuc2VydmVcbmFwcGVhclxucm9hZFxubWFwXG5yYWluXG5ydWxlXG5nb3Zlcm5cbnB1bGxcbmNvbGRcbm5vdGljZVxudm9pY2VcbnVuaXRcbnBvd2VyXG50b3duXG5maW5lXG5jZXJ0YWluXG5mbHlcbmZhbGxcbmxlYWRcbmNyeVxuZGFya1xubWFjaGluZVxubm90ZVxud2FpdFxucGxhblxuZmlndXJlXG5zdGFyXG5ib3hcbm5vdW5cbmZpZWxkXG5yZXN0XG5jb3JyZWN0XG5hYmxlXG5wb3VuZFxuZG9uZVxuYmVhdXR5XG5kcml2ZVxuc3Rvb2RcbmNvbnRhaW5cbmZyb250XG50ZWFjaFxud2Vla1xuZmluYWxcbmdhdmVcbmdyZWVuXG5vaFxucXVpY2tcbmRldmVsb3Bcbm9jZWFuXG53YXJtXG5mcmVlXG5taW51dGVcbnN0cm9uZ1xuc3BlY2lhbFxubWluZFxuYmVoaW5kXG5jbGVhclxudGFpbFxucHJvZHVjZVxuZmFjdFxuc3RyZWV0XG5pbmNoXG5tdWx0aXBseVxubm90aGluZ1xuY291cnNlXG5zdGF5XG53aGVlbFxuZnVsbFxuZm9yY2VcbmJsdWVcbm9iamVjdFxuZGVjaWRlXG5zdXJmYWNlXG5kZWVwXG5tb29uXG5pc2xhbmRcbmZvb3RcbnN5c3RlbVxuYnVzeVxudGVzdFxucmVjb3JkXG5ib2F0XG5jb21tb25cbmdvbGRcbnBvc3NpYmxlXG5wbGFuZVxuc3RlYWRcbmRyeVxud29uZGVyXG5sYXVnaFxudGhvdXNhbmRcbmFnb1xucmFuXG5jaGVja1xuZ2FtZVxuc2hhcGVcbmVxdWF0ZVxuaG90XG5taXNzXG5icm91Z2h0XG5oZWF0XG5zbm93XG50aXJlXG5icmluZ1xueWVzXG5kaXN0YW50XG5maWxsXG5lYXN0XG5wYWludFxubGFuZ3VhZ2VcbmFtb25nXG5ncmFuZFxuYmFsbFxueWV0XG53YXZlXG5kcm9wXG5oZWFydFxuYW1cbnByZXNlbnRcbmhlYXZ5XG5kYW5jZVxuZW5naW5lXG5wb3NpdGlvblxuYXJtXG53aWRlXG5zYWlsXG5tYXRlcmlhbFxuc2l6ZVxudmFyeVxuc2V0dGxlXG5zcGVha1xud2VpZ2h0XG5nZW5lcmFsXG5pY2Vcbm1hdHRlclxuY2lyY2xlXG5wYWlyXG5pbmNsdWRlXG5kaXZpZGVcbnN5bGxhYmxlXG5mZWx0XG5wZXJoYXBzXG5waWNrXG5zdWRkZW5cbmNvdW50XG5zcXVhcmVcbnJlYXNvblxubGVuZ3RoXG5yZXByZXNlbnRcbmFydFxuc3ViamVjdFxucmVnaW9uXG5lbmVyZ3lcbmh1bnRcbnByb2JhYmxlXG5iZWRcbmJyb3RoZXJcbmVnZ1xucmlkZVxuY2VsbFxuYmVsaWV2ZVxuZnJhY3Rpb25cbmZvcmVzdFxuc2l0XG5yYWNlXG53aW5kb3dcbnN0b3JlXG5zdW1tZXJcbnRyYWluXG5zbGVlcFxucHJvdmVcbmxvbmVcbmxlZ1xuZXhlcmNpc2VcbndhbGxcbmNhdGNoXG5tb3VudFxud2lzaFxuc2t5XG5ib2FyZFxuam95XG53aW50ZXJcbnNhdFxud3JpdHRlblxud2lsZFxuaW5zdHJ1bWVudFxua2VwdFxuZ2xhc3NcbmdyYXNzXG5jb3dcbmpvYlxuZWRnZVxuc2lnblxudmlzaXRcbnBhc3RcbnNvZnRcbmZ1blxuYnJpZ2h0XG5nYXNcbndlYXRoZXJcbm1vbnRoXG5taWxsaW9uXG5iZWFyXG5maW5pc2hcbmhhcHB5XG5ob3BlXG5mbG93ZXJcbmNsb3RoZVxuc3RyYW5nZVxuZ29uZVxuanVtcFxuYmFieVxuZWlnaHRcbnZpbGxhZ2Vcbm1lZXRcbnJvb3RcbmJ1eVxucmFpc2VcbnNvbHZlXG5tZXRhbFxud2hldGhlclxucHVzaFxuc2V2ZW5cbnBhcmFncmFwaFxudGhpcmRcbnNoYWxsXG5oZWxkXG5oYWlyXG5kZXNjcmliZVxuY29va1xuZmxvb3JcbmVpdGhlclxucmVzdWx0XG5idXJuXG5oaWxsXG5zYWZlXG5jYXRcbmNlbnR1cnlcbmNvbnNpZGVyXG50eXBlXG5sYXdcbmJpdFxuY29hc3RcbmNvcHlcbnBocmFzZVxuc2lsZW50XG50YWxsXG5zYW5kXG5zb2lsXG5yb2xsXG50ZW1wZXJhdHVyZVxuZmluZ2VyXG5pbmR1c3RyeVxudmFsdWVcbmZpZ2h0XG5saWVcbmJlYXRcbmV4Y2l0ZVxubmF0dXJhbFxudmlld1xuc2Vuc2VcbmVhclxuZWxzZVxucXVpdGVcbmJyb2tlXG5jYXNlXG5taWRkbGVcbmtpbGxcbnNvblxubGFrZVxubW9tZW50XG5zY2FsZVxubG91ZFxuc3ByaW5nXG5vYnNlcnZlXG5jaGlsZFxuc3RyYWlnaHRcbmNvbnNvbmFudFxubmF0aW9uXG5kaWN0aW9uYXJ5XG5taWxrXG5zcGVlZFxubWV0aG9kXG5vcmdhblxucGF5XG5hZ2VcbnNlY3Rpb25cbmRyZXNzXG5jbG91ZFxuc3VycHJpc2VcbnF1aWV0XG5zdG9uZVxudGlueVxuY2xpbWJcbmNvb2xcbmRlc2lnblxucG9vclxubG90XG5leHBlcmltZW50XG5ib3R0b21cbmtleVxuaXJvblxuc2luZ2xlXG5zdGlja1xuZmxhdFxudHdlbnR5XG5za2luXG5zbWlsZVxuY3JlYXNlXG5ob2xlXG50cmFkZVxubWVsb2R5XG50cmlwXG5vZmZpY2VcbnJlY2VpdmVcbnJvd1xubW91dGhcbmV4YWN0XG5zeW1ib2xcbmRpZVxubGVhc3RcbnRyb3VibGVcbnNob3V0XG5leGNlcHRcbndyb3RlXG5zZWVkXG50b25lXG5qb2luXG5zdWdnZXN0XG5jbGVhblxuYnJlYWtcbmxhZHlcbnlhcmRcbnJpc2VcbmJhZFxuYmxvd1xub2lsXG5ibG9vZFxudG91Y2hcbmdyZXdcbmNlbnRcbm1peFxudGVhbVxud2lyZVxuY29zdFxubG9zdFxuYnJvd25cbndlYXJcbmdhcmRlblxuZXF1YWxcbnNlbnRcbmNob29zZVxuZmVsbFxuZml0XG5mbG93XG5mYWlyXG5iYW5rXG5jb2xsZWN0XG5zYXZlXG5jb250cm9sXG5kZWNpbWFsXG5nZW50bGVcbndvbWFuXG5jYXB0YWluXG5wcmFjdGljZVxuc2VwYXJhdGVcbmRpZmZpY3VsdFxuZG9jdG9yXG5wbGVhc2VcbnByb3RlY3Rcbm5vb25cbndob3NlXG5sb2NhdGVcbnJpbmdcbmNoYXJhY3RlclxuaW5zZWN0XG5jYXVnaHRcbnBlcmlvZFxuaW5kaWNhdGVcbnJhZGlvXG5zcG9rZVxuYXRvbVxuaHVtYW5cbmhpc3RvcnlcbmVmZmVjdFxuZWxlY3RyaWNcbmV4cGVjdFxuY3JvcFxubW9kZXJuXG5lbGVtZW50XG5oaXRcbnN0dWRlbnRcbmNvcm5lclxucGFydHlcbnN1cHBseVxuYm9uZVxucmFpbFxuaW1hZ2luZVxucHJvdmlkZVxuYWdyZWVcbnRodXNcbmNhcGl0YWxcbndvbid0XG5jaGFpclxuZGFuZ2VyXG5mcnVpdFxucmljaFxudGhpY2tcbnNvbGRpZXJcbnByb2Nlc3Ncbm9wZXJhdGVcbmd1ZXNzXG5uZWNlc3NhcnlcbnNoYXJwXG53aW5nXG5jcmVhdGVcbm5laWdoYm9yXG53YXNoXG5iYXRcbnJhdGhlclxuY3Jvd2RcbmNvcm5cbmNvbXBhcmVcbnBvZW1cbnN0cmluZ1xuYmVsbFxuZGVwZW5kXG5tZWF0XG5ydWJcbnR1YmVcbmZhbW91c1xuZG9sbGFyXG5zdHJlYW1cbmZlYXJcbnNpZ2h0XG50aGluXG50cmlhbmdsZVxucGxhbmV0XG5odXJyeVxuY2hpZWZcbmNvbG9ueVxuY2xvY2tcbm1pbmVcbnRpZVxuZW50ZXJcbm1ham9yXG5mcmVzaFxuc2VhcmNoXG5zZW5kXG55ZWxsb3dcbmd1blxuYWxsb3dcbnByaW50XG5kZWFkXG5zcG90XG5kZXNlcnRcbnN1aXRcbmN1cnJlbnRcbmxpZnRcbnJvc2VcbmNvbnRpbnVlXG5ibG9ja1xuY2hhcnRcbmhhdFxuc2VsbFxuc3VjY2Vzc1xuY29tcGFueVxuc3VidHJhY3RcbmV2ZW50XG5wYXJ0aWN1bGFyXG5kZWFsXG5zd2ltXG50ZXJtXG5vcHBvc2l0ZVxud2lmZVxuc2hvZVxuc2hvdWxkZXJcbnNwcmVhZFxuYXJyYW5nZVxuY2FtcFxuaW52ZW50XG5jb3R0b25cbmJvcm5cbmRldGVybWluZVxucXVhcnRcbm5pbmVcbnRydWNrXG5ub2lzZVxubGV2ZWxcbmNoYW5jZVxuZ2F0aGVyXG5zaG9wXG5zdHJldGNoXG50aHJvd1xuc2hpbmVcbnByb3BlcnR5XG5jb2x1bW5cbm1vbGVjdWxlXG5zZWxlY3Rcbndyb25nXG5ncmF5XG5yZXBlYXRcbnJlcXVpcmVcbmJyb2FkXG5wcmVwYXJlXG5zYWx0XG5ub3NlXG5wbHVyYWxcbmFuZ2VyXG5jbGFpbVxuY29udGluZW50XG5veHlnZW5cbnN1Z2FyXG5kZWF0aFxucHJldHR5XG5za2lsbFxud29tZW5cbnNlYXNvblxuc29sdXRpb25cbm1hZ25ldFxuc2lsdmVyXG50aGFua1xuYnJhbmNoXG5tYXRjaFxuc3VmZml4XG5lc3BlY2lhbGx5XG5maWdcbmFmcmFpZFxuaHVnZVxuc2lzdGVyXG5zdGVlbFxuZGlzY3Vzc1xuZm9yd2FyZFxuc2ltaWxhclxuZ3VpZGVcbmV4cGVyaWVuY2VcbnNjb3JlXG5hcHBsZVxuYm91Z2h0XG5sZWRcbnBpdGNoXG5jb2F0XG5tYXNzXG5jYXJkXG5iYW5kXG5yb3BlXG5zbGlwXG53aW5cbmRyZWFtXG5ldmVuaW5nXG5jb25kaXRpb25cbmZlZWRcbnRvb2xcbnRvdGFsXG5iYXNpY1xuc21lbGxcbnZhbGxleVxubm9yXG5kb3VibGVcbnNlYXRcbmFycml2ZVxubWFzdGVyXG50cmFja1xucGFyZW50XG5zaG9yZVxuZGl2aXNpb25cbnNoZWV0XG5zdWJzdGFuY2VcbmZhdm9yXG5jb25uZWN0XG5wb3N0XG5zcGVuZFxuY2hvcmRcbmZhdFxuZ2xhZFxub3JpZ2luYWxcbnNoYXJlXG5zdGF0aW9uXG5kYWRcbmJyZWFkXG5jaGFyZ2VcbnByb3BlclxuYmFyXG5vZmZlclxuc2VnbWVudFxuc2xhdmVcbmR1Y2tcbmluc3RhbnRcbm1hcmtldFxuZGVncmVlXG5wb3B1bGF0ZVxuY2hpY2tcbmRlYXJcbmVuZW15XG5yZXBseVxuZHJpbmtcbm9jY3VyXG5zdXBwb3J0XG5zcGVlY2hcbm5hdHVyZVxucmFuZ2VcbnN0ZWFtXG5tb3Rpb25cbnBhdGhcbmxpcXVpZFxubG9nXG5tZWFudFxucXVvdGllbnRcbnRlZXRoXG5zaGVsbFxubmVja2A7XG5cblxubGV0IHdoaXRlc3BhY2UgPSAvW1xcclxcbl0rLztcbmxldCB3b3JkcyA9IHRvcDEwMDAuc3BsaXQod2hpdGVzcGFjZSk7XG5sZXQgdmFsaWR3b3JkcyA9IHdvcmRzLmZpbHRlcih3b3JkID0+IHdvcmQubGVuZ3RoID4gMik7XG5cbmV4cG9ydCBjb25zdCBzYW1wbGVUZXh0ID0gKHJhbmdlID0gdmFsaWR3b3Jkcy5sZW5ndGgpID0+IHtcbiAgcmV0dXJuIHZhbGlkd29yZHMuc2xpY2UoMCwgcmFuZ2UpO1xufTsiLCJpbXBvcnQgeyBhZGRDb29yZGluYXRlcywgcmVwbGFjZUNoaWxkcmVuLCBpbmNsdWRlc0Nvb3JkaW5hdGVzIH0gZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IFNwZWxsIGZyb20gXCIuL3NwZWxsXCI7XG5cbmV4cG9ydCBjbGFzcyBTbmFrZSB7XG4gICAgY29uc3RydWN0b3IoZ3JpZCwgcG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5tb3ZlcyA9IFswLDBdO1xuICAgICAgICB0aGlzLnBvc2l0aW9ucyA9IFtwb3NpdGlvbl07XG4gICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmdyaWQgPSBncmlkO1xuXG4gICAgICAgIGxldCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGhlYWQuY2xhc3NOYW1lID0gJ3NuYWtlaGVhZCc7XG4gICAgICAgIGhlYWQuaW5uZXJUZXh0ID0gXCLwn5CNXCI7XG4gICAgICAgIHRoaXMuYm9keSA9IFtoZWFkXTsgLy8gW3sgZWxlbWVudDogPHNwYW4+LCBwb3M6IH1dXG5cbiAgICAgICAgbGV0IGluc3QgPSBuZXcgU3BlbGwodGhpcy5ncmlkKTtcbiAgICAgICAgaW5zdC5zdG9yZWRUZXh0ID0gJ2Fycm93IGtleXMgdG8gbW92ZSc7XG4gICAgICAgIGluc3QubW92ZXMgPSBbMCwgMV07XG4gICAgICAgIGluc3QuY2FzdChbJ2dyZWVuJywgJ2JsdWUnXSk7XG4gICAgICAgIHRoaXMuaW5zdCA9IGluc3Q7XG4gICAgICAgIHRoaXMuZ3JpZC5zcGVsbHMucHVzaChpbnN0KTtcbiAgICB9XG5cbiAgICBpc0VtcHR5KHBvcykge1xuICAgICAgICBsZXQgcmVzID0gIXRoaXMuZ3JpZC5nZXRFbGVtZW50KHBvcykuZmlyc3RDaGlsZDtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBnZXRQb2ludHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9ucy5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIGhhbmRsZUxvc3MoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQcmV2aW91c1JlbmRlcigpO1xuICAgICAgICBsZXQgbG9zZXJTcGVsbCA9IHRoaXMuaW5zdDtcbiAgICAgICAgXG4gICAgICAgIGxvc2VyU3BlbGwuY2FzdChbJ29yYW5nZScsJ2Z1bicsJ2JpZycsJ2JpZycsJ2JpZyddKTtcbiAgICAgICAgbGV0IHNjb3JlID0gdGhpcy5ib2R5Lmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBwb2ludHMgPSBzY29yZSA9PT0gMSA/ICcgcG9pbnQnIDogJyBwb2ludHMnO1xuICAgICAgICBsb3NlclNwZWxsLnN0b3JlZFRleHQgPSAnR2FtZSBvdmVyOiAnICsgKHRoaXMuYm9keS5sZW5ndGggLSAxKSArIHBvaW50cztcbiAgICAgICAgdGhpcy5ncmlkLmN1cnJlbnRTcGVsbCA9IG5ldyBTcGVsbCh0aGlzLmdyaWQpO1xuICAgIH1cblxuICAgIGNsZWFyUHJldmlvdXNSZW5kZXIoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5mb3JFYWNoKGVsZSA9PiBlbGUucmVtb3ZlKCkpO1xuICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMgPSBbXTtcbiAgICB9XG5cbiAgICBvdXRPZkJvdW5kcyhwb3MpIHtcbiAgICAgICAgcmV0dXJuIChwb3NbMF0gPj0gdGhpcy5ncmlkLmhlaWdodCB8fCBcbiAgICAgICAgICAgIHBvc1swXSA8IDAgfHwgXG4gICAgICAgICAgICBwb3NbMV0gPj0gdGhpcy5ncmlkLndpZHRoIHx8IFxuICAgICAgICAgICAgcG9zWzFdIDwgMClcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICBpZiAoIXRoaXMubW92ZXNbMF0gJiYgIXRoaXMubW92ZXNbMV0pIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gXG5cbiAgICAgICAgbGV0IG5leHRQb3NpdGlvbiA9IGFkZENvb3JkaW5hdGVzKHRoaXMucG9zaXRpb25zWzBdLCB0aGlzLm1vdmVzLCB0aGlzLmdyaWQpXG5cbiAgICAgICAgaWYgKGluY2x1ZGVzQ29vcmRpbmF0ZXModGhpcy5wb3NpdGlvbnMsIG5leHRQb3NpdGlvbikgfHwgXG4gICAgICAgICAgICB0aGlzLm91dE9mQm91bmRzKG5leHRQb3NpdGlvbikpIHtcblxuICAgICAgICAgICAgdGhpcy5oYW5kbGVMb3NzKClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5pc0VtcHR5KG5leHRQb3NpdGlvbikpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25zLnVuc2hpZnQobmV4dFBvc2l0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuZWF0KG5leHRQb3NpdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25zLnVuc2hpZnQobmV4dFBvc2l0aW9uKTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25zLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUlucHV0KGRlbHRhKSB7XG4gICAgICAgIGxldCBjb21iaW5lZERpcnMgPSBhZGRDb29yZGluYXRlcyhkZWx0YSwgdGhpcy5tb3Zlcyk7XG4gICAgICAgIGxldCBvcHBvc2l0ZURpciA9IGNvbWJpbmVkRGlyc1swXSA9PT0gMCAmJiBjb21iaW5lZERpcnNbMV0gPT09IDA7XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25zLmxlbmd0aCA9PT0gMSB8fCAhb3Bwb3NpdGVEaXIpIHsgXG4gICAgICAgICAgICB0aGlzLm1vdmVzID0gZGVsdGE7XG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgIH1cblxuICAgIGVhdChwb3MpIHtcbiAgICAgICAgbGV0IHNuYWNrID0gdGhpcy5ncmlkLmdldEVsZW1lbnQocG9zKS5maXJzdENoaWxkO1xuXG4gICAgICAgIHRoaXMuYm9keS5wdXNoKHNuYWNrKTtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5jbGVhclByZXZpb3VzUmVuZGVyKCk7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbnMuZm9yRWFjaCgocG9zLCBpKSA9PiB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KHBvcyk7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmJvZHlbaV07XG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKCdzbmFrZScpXG4gICAgICAgICAgICByZXBsYWNlQ2hpbGRyZW4oZWxlbWVudCwgY2hpbGQpO1xuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMucHVzaChjaGlsZCk7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cblxuXG59IiwiaW1wb3J0IEdyaWQgZnJvbSAnLi9ncmlkJztcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IGtleXdvcmRJbmRleCBmcm9tICcuL2tleXdvcmRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BlbGwge1xuICAgIGNvbnN0cnVjdG9yKGdyaWQpIHtcbiAgICAgICAgdGhpcy5wZXJGcmFtZUtleXdvcmRzID0gW107XG4gICAgICAgIHRoaXMuYXBwbGllZEtleXdvcmRzID0gW107XG4gICAgICAgIHRoaXMuZ3JpZCA9IGdyaWQ7XG4gICAgICAgIHRoaXMuY3VycmVudFBvcyA9IHRoaXMuZ3JpZC5yYW5kb21Qb3NpdGlvbigpO1xuXG4gICAgICAgIHRoaXMuc3RvcmVkVGV4dCA9ICcnO1xuICAgICAgICB0aGlzLmFjdGl2ZVRleHQgPSAnJztcbiAgICAgICAgXG4gICAgICAgIHRoaXMua2V5d29yZEluZGV4ID0ga2V5d29yZEluZGV4O1xuXG4gICAgICAgIHRoaXMucm90YXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5jbGFzc0FyciA9IFtdO1xuICAgICAgICB0aGlzLm1vdmVzID0gWzAsMF07XG4gICAgICAgIHRoaXMuY29sb3JzID0gW107XG4gICAgICAgIHRoaXMuZm9udCA9ICdtb25vJztcbiAgICAgICAgdGhpcy5zaXplID0gMTU7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzID0gW107XG4gICAgfVxuXG4gICAgcmVjZWl2ZShpbnB1dCkge1xuICAgICAgICB0aGlzLmFjdGl2ZVRleHQgKz0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy5leHRyYWN0S2V5d29yZHMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBkZWxldGVDaGFyYWN0ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVGV4dCA9IHRoaXMuYWN0aXZlVGV4dC5zbGljZSgwLCB0aGlzLmFjdGl2ZVRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgY2FzdChrZXl3b3Jkcykge1xuICAgICAgICBpZiAoIShrZXl3b3JkcyBpbnN0YW5jZW9mIEFycmF5KSkga2V5d29yZHMgPSBba2V5d29yZHNdO1xuICAgICAgICBjb25zdCBub3RTdG9yZWQgPSBbJ2FsbCcsICdjbGVhcicsICdzcGVsbCcsICdzbmFrZScsICd0ZXN0J107XG5cbiAgICAgICAga2V5d29yZHMuZm9yRWFjaChrdyA9PiB7XG4gICAgICAgICAgICB0aGlzLmFwcGx5S2V5d29yZChrdyk7XG4gICAgICAgICAgICBpZiAoIW5vdFN0b3JlZC5pbmNsdWRlcyhrdykpIHRoaXMuYXBwbGllZEtleXdvcmRzLnB1c2goa3cpOyBcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIGFwcGx5S2V5d29yZChrdykge1xuICAgICAgICBsZXQgeyBhY3Rpb24sIHR5cGUgfSA9IHRoaXMua2V5d29yZEluZGV4W2t3XTtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnbW92ZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlcyA9IFV0aWwuYWRkQ29vcmRpbmF0ZXModGhpcy5tb3ZlcywgYWN0aW9uKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29sb3InOiBcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9ycy5wdXNoKGFjdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyb3RhdGUnOlxuICAgICAgICAgICAgICAgIHRoaXMucm90YXRlID0gdGhpcy5yb3RhdGUgPyBudWxsIDogJ3JvdGF0ZSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdmb250JzpcbiAgICAgICAgICAgICAgICB0aGlzLmVtb2ppID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5mb250ID0gYWN0aW9uO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc25ha2UnOlxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5mcmFtZXJhdGUgPSAxNTA7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnBsYXlTbmFrZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3BlZWQnOlxuICAgICAgICAgICAgICAgIGxldCBuZXdmcHMgPSBNYXRoLmZsb29yKHRoaXMuZ3JpZC5mcmFtZXJhdGUgKiBhY3Rpb24pO1xuICAgICAgICAgICAgICAgIGlmIChuZXdmcHMgPiA0MDAwKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmdyaWQuZnJhbWVyYXRlID0gNDAwMDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdmcHMgPCAxMDApIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5mcmFtZXJhdGUgPSAxMDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5mcmFtZXJhdGUgPSBuZXdmcHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZWRUZXh0ICs9IGFjdGlvbjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZvbnRzaXplJzpcbiAgICAgICAgICAgICAgICBsZXQgbmV3c2l6ZSA9IE1hdGguZmxvb3IodGhpcy5zaXplICogYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3c2l6ZSA+IDQwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSA9IDQwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3c2l6ZSA8IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplID0gNjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSBuZXdzaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0Fyci5wdXNoKCdjaXJjbGUnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NsZWFyJzpcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQuc3BlbGxzLmZvckVhY2goc3BlbGwgPT4gc3BlbGwuY2xlYXJQcmV2aW91c1JlbmRlcigpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQuc3BlbGxzID0gW107XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbW9qaSc6XG4gICAgICAgICAgICAgICAgdGhpcy5lbW9qaSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzcGVsbCc6XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVJhbmRvbVNwZWxsKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhbGwnOlxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5zcGVsbHMuZm9yRWFjaChzcGVsbCA9PiBzcGVsbC5jYXN0KHRoaXMuYXBwbGllZEtleXdvcmRzKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0eXBldGVzdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnBsYXlUeXBldGVzdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIGV4dHJhY3RLZXl3b3JkcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zS2V5d29yZCh0aGlzLmFjdGl2ZVRleHQpKSByZXR1cm47XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gdGhpcy5hY3RpdmVUZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3Vic3RyID0gdGhpcy5hY3RpdmVUZXh0LnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgbGV0IGt3ID0gdGhpcy5jb250YWluc0tleXdvcmQoc3Vic3RyKTtcblxuICAgICAgICAgICAgaWYgKGt3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZWRUZXh0ICs9IHN1YnN0cjtcbiAgICAgICAgICAgICAgICB0aGlzLmNhc3Qoa3cpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlVGV4dCA9IHRoaXMuYWN0aXZlVGV4dC5zbGljZShpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3RLZXl3b3JkcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIGNvbnRhaW5zS2V5d29yZChzdHIpIHtcbiAgICAgICAgbGV0IGt3cyA9IE9iamVjdC5rZXlzKHRoaXMua2V5d29yZEluZGV4KTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGt3IG9mIGt3cykgeyBcbiAgICAgICAgICAgIGlmIChzdHIuaW5jbHVkZXMoa3cpKSByZXR1cm4ga3c7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNsZWFyUHJldmlvdXNSZW5kZXIoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5mb3JFYWNoKGVsZSA9PiBlbGUucmVtb3ZlKCkpO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBvcyA9IFV0aWwuYWRkQ29vcmRpbmF0ZXModGhpcy5jdXJyZW50UG9zLCB0aGlzLm1vdmVzKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBzaHVmZmxlQ29sb3JzKCkge1xuICAgICAgICBpZiAodGhpcy5jb2xvcnMubGVuZ3RoID09PSAwKSByZXR1cm4gJ25vbmUnO1xuICAgICAgICBpZiAodGhpcy5jb2xvcnMubGVuZ3RoID09PSAxICkgcmV0dXJuIHRoaXMuY29sb3JzWzBdXG4gICAgICAgIHRoaXMuY29sb3JzLnB1c2godGhpcy5jb2xvcnMuc2hpZnQoKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yc1swXTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZVJhbmRvbVNwZWxsKCkge1xuICAgICAgICBsZXQga2V5d29yZHMgPSBPYmplY3Qua2V5cyh0aGlzLmtleXdvcmRJbmRleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGtleXdvcmRzKTtcbiAgICAgICAgbGV0IGFwcGxpZWRLZXl3b3JkcyA9ICcnO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmFuZElkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChrZXl3b3Jkcy5sZW5ndGggLSA2KSkgKyA2OyBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJhbmRJZHgpO1xuICAgICAgICAgICAgYXBwbGllZEtleXdvcmRzICs9IGtleXdvcmRzW3JhbmRJZHhdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGFwcGxpZWRLZXl3b3Jkcyk7XG4gICAgICAgIGxldCBzcGVsbCA9IG5ldyBTcGVsbCh0aGlzLmdyaWQpO1xuICAgICAgICBzcGVsbC5yZWNlaXZlKGFwcGxpZWRLZXl3b3Jkcyk7XG4gICAgICAgIHRoaXMuZ3JpZC5zcGVsbHMucHVzaChzcGVsbCk7XG4gICAgICAgIHJldHVybiBzcGVsbDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQcmV2aW91c1JlbmRlcigpO1xuXG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy5zdG9yZWRUZXh0ICsgdGhpcy5hY3RpdmVUZXh0O1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5jdXJyZW50UG9zO1xuICAgICAgICBsZXQgZGVsdGE7XG4gICAgICAgIGlmICh0aGlzLm1vdmVzWzBdID09PSAwICYmIHRoaXMubW92ZXNbMV0gPT09IDApIHtcbiAgICAgICAgICAgIGRlbHRhID0gWzAsMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgeCA9IE1hdGguc2lnbih0aGlzLm1vdmVzWzBdKTtcbiAgICAgICAgICAgIGxldCB5ID0gTWF0aC5zaWduKHRoaXMubW92ZXNbMV0pO1xuICAgICAgICAgICAgZGVsdGEgPSBbeCx5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGV0dGVyID0gdGhpcy5lbW9qaSA/IFV0aWwudG9FbW9qaSh0ZXh0W2ldKSA6IHRleHRbaV07XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQodGhpcy5mb250LCB0aGlzLnJvdGF0ZSwgJ2FjdGl2ZScsIC4uLnRoaXMuY2xhc3NBcnIpO1xuICAgICAgICAgICAgc3Bhbi5zdHlsZS5mb250U2l6ZSA9IHRoaXMuc2l6ZSArICdweCc7XG4gICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuc2h1ZmZsZUNvbG9ycygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29sb3JzLmxlbmd0aCA+IDApIHNwYW4uc3R5bGUuY29sb3IgPSAnd2hpdGUnOyBcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmdyaWQuZ2V0RWxlbWVudChwb3MpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBVdGlsLnJlcGxhY2VDaGlsZHJlbihlbGVtZW50LCBzcGFuKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKHNwYW4pO1xuICAgICAgICAgICAgcG9zID0gVXRpbC5hZGRDb29yZGluYXRlcyhwb3MsIGRlbHRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdyaWQuY3VycmVudFNwZWxsID09PSB0aGlzKSB7XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTmFtZSA9ICdjdXJzb3InO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KHBvcyk7XG4gICAgICAgICAgICBVdGlsLnJlcGxhY2VDaGlsZHJlbihlbGVtZW50LCBzcGFuKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKHNwYW4pO1xuICAgICAgICB9O1xuICAgIH1cblxufVxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBzYW1wbGVUZXh0IH0gZnJvbSBcIi4vc2FtcGxldGV4dFwiO1xuaW1wb3J0IHsgcmVwbGFjZUNoaWxkcmVuLCBhZGRDb29yZGluYXRlcyB9IGZyb20gXCIuL3V0aWxcIjtcblxuZXhwb3J0IGNsYXNzIFR5cGVUZXN0IHtcbiAgICBjb25zdHJ1Y3RvcihncmlkKSB7XG4gICAgICAgIHRoaXMuZ3JpZCA9IGdyaWQ7XG4gICAgICAgIHRoaXMud2lkdGggPSBNYXRoLmZsb29yKHRoaXMuZ3JpZC53aWR0aCAqIDAuNyk7XG4gICAgICAgIC8vIHRoaXMuaGVpZ2h0ID0gTWF0aC5mbG9vcih0aGlzLmdyaWQuaGVpZ2h0ICogMC44KTsgXG4gICAgICAgIHRoaXMucG9zID0gdGhpcy5jYWxjdWxhdGVQb3MoKTtcbiAgICAgICAgdGhpcy51c2VyV29yZHMgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50V29yZCA9IDA7XG4gICAgICAgIHRoaXMuYmFka2V5c3Ryb2tlcyA9IDA7XG4gICAgICAgIHRoaXMucmVuZGVyZWRXb3JkQmVnaW4gPSAwO1xuICAgICAgICB0aGlzLnJlbmRlcmVkV29yZEVuZCA9IDA7XG4gICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cz0gW107XG4gICAgICAgIHRoaXMubnVtUm93cyA9IDM7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lO1xuICAgICAgICB0aGlzLmlucHV0ID0gXCJcIjtcblxuICAgICAgICB0aGlzLnRvcFdvcmRzID0gc2FtcGxlVGV4dCgpO1xuICAgICAgICB0aGlzLmVuc3VyZVVzZXJXb3JkcygpO1xuICAgIH1cblxuICAgIG92ZXIoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNsZWFyUHJldmlvdXNSZW5kZXIoKTtcbiAgICAgICAgbGV0IGxvc2VyU3BlbGwgPSBuZXcgU3BlbGwodGhpcy5ncmlkKTtcblxuICAgICAgICBsb3NlclNwZWxsLmNhc3QoW1wiYmlnXCIsIFwicmVkXCIsIFwieWVsbG93XCIsIFwibW9ub1wiLCBcInJpZ2h0XCIsICdkb3duJywgXCJiaWdcIl0pO1xuICAgICAgICBsb3NlclNwZWxsLnN0b3JlZFRleHQgPVxuICAgICAgICAgKHRoaXMuY2FsY3VsYXRlV1BNKCkgKyAnIFdQTScpO1xuICAgICAgICB0aGlzLmdyaWQuc3BlbGxzLnB1c2gobG9zZXJTcGVsbCk7XG5cbiAgICAgICAgdGhpcy5ncmlkLmV4aXRUeXBldGVzdCgpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVdQTSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRUaW1lKSByZXR1cm4gMDtcbiAgICAgICAgbGV0IGNvcnJlY3RLZXlzdHJva2VzID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3VycmVudFdvcmQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHdvcmQgPSB0aGlzLnVzZXJXb3Jkc1tpXTtcblxuICAgICAgICAgICAgaWYgKCF3b3JkLm1pc3R5cGVkKSB7XG4gICAgICAgICAgICAgICAgY29ycmVjdEtleXN0cm9rZXMgKz0gKHdvcmQud29yZC5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGNvcnJlY3RLZXlzdHJva2VzIC8gNSk7XG4gICAgfVxuXG4gICAgY2xlYXJQcmV2aW91c1JlbmRlcigpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzLmZvckVhY2goZWxlID0+IGVsZS5yZW1vdmUoKSk7XG4gICAgfVxuXG4gICAgdGltZXNVcCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRUaW1lKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCB0aW1lTGVmdCA9XG4gICAgICAgICAgNjAgLSBNYXRoLmZsb29yKChub3cuZ2V0VGltZSgpIC0gdGhpcy5jdXJyZW50VGltZS5nZXRUaW1lKCkpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiAodGltZUxlZnQgPCAwKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmNsZWFyUHJldmlvdXNSZW5kZXIoKTtcbiAgICAgICAgaWYgKHRoaXMudGltZXNVcCgpKSB7XG4gICAgICAgICAgICB0aGlzLm92ZXIoKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlbmRlclBhZGRpbmcoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJXb3JkRGlzcGxheSgpXG4gICAgICAgIHRoaXMucmVuZGVySW5wdXQoKTtcblxuICAgIH0gIFxuICAgIFxuICAgIHJlbmRlclBhZGRpbmcoKSB7XG4gICAgICAgIGxldCBudW1Sb3dzID0gdGhpcy5udW1Sb3dzICsgNzsgXG4gICAgICAgIGxldCB0b3AgPSB0aGlzLnBvc1swXSAtIDI7XG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5wb3NbMV0gLSAyO1xuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLndpZHRoICsgNDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvd3M7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIGxldCBlbCA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KFtpICsgdG9wLCBqICsgbGVmdF0pO1xuICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTmFtZSA9ICd0ZXN0LXBhZGRpbmcnO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICByZXBsYWNlQ2hpbGRyZW4oZWwsIGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcklucHV0KCkge1xuICAgICAgICBsZXQgdG9wID0gdGhpcy5udW1Sb3dzICsgdGhpcy5wb3NbMF0gKyAyO1xuICAgICAgICBsZXQgbGVmdCA9IHRoaXMucG9zWzFdO1xuICAgICAgICBsZXQgaW5wdXR3aWR0aCA9IHRoaXMud2lkdGggLSA2O1xuICAgICAgICBsZXQgdGltZVN0YXJ0ID0gdGhpcy53aWR0aDtcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLmNhbGN1bGF0ZVRpbWUoKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXR3aWR0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIGxldCBlbCA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KFt0b3AsIGkgKyBsZWZ0XSk7XG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKFwidGVzdC1pbnB1dFwiLCAndHlwZXRlc3QnKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKGNoaWxkKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRbaV0pIGNoaWxkLmlubmVyVGV4dCA9IHRoaXMuaW5wdXRbaV07XG4gICAgICAgICAgICBpZiAoaSA9PT0gdGhpcy5pbnB1dC5sZW5ndGgpIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICAgICAgICAgIHJlcGxhY2VDaGlsZHJlbihlbCwgY2hpbGQpO1xuICAgICAgICAgICAgdGltZVN0YXJ0ID0gaSArIGxlZnQgKyAzO1xuICAgICAgICB9XG5cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgbGV0IGVsID0gdGhpcy5ncmlkLmdldEVsZW1lbnQoW3RvcCwgaSArIHRpbWVTdGFydF0pO1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZChcInRlc3QtdGltZVwiLCBcInR5cGV0ZXN0XCIpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgY2hpbGQuaW5uZXJUZXh0ID0gdGltZVtpXTtcbiAgICAgICAgICAgIHJlcGxhY2VDaGlsZHJlbihlbCwgY2hpbGQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICByZW5kZXJXb3JkRGlzcGxheSgpIHtcbiAgICAgICAgbGV0IHdvcmRzUmVuZGVyZWQgPSAwO1xuICAgICAgICBsZXQgZmlyc3RDb2xMZW5ndGggPSAwO1xuXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMubnVtUm93cyA7IHJvdyArPSAyKSB7XG5cbiAgICAgICAgICAgIGxldCBjb2wgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGNvbCA8PSB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHdvcmRJZHggPSB0aGlzLnJlbmRlcmVkV29yZEJlZ2luICsgd29yZHNSZW5kZXJlZDtcbiAgICAgICAgICAgICAgICBsZXQgcmVuZGVyZWRXb3JkID0gdGhpcy51c2VyV29yZHNbd29yZElkeF07XG4gICAgICAgICAgICAgICAgaWYgKGNvbCArIHJlbmRlcmVkV29yZC53b3JkLmxlbmd0aCA+IHRoaXMud2lkdGgpIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgbGV0IHJlbmRlckNvb3JkID0gW3JvdywgY29sXTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcldvcmQod29yZElkeCwgcmVuZGVyQ29vcmQpO1xuICAgICAgICAgICAgICAgIHdvcmRzUmVuZGVyZWQgKz0gMTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29sICs9IHJlbmRlcmVkV29yZC53b3JkLmxlbmd0aCArIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyb3cgPT09IDApIGZpcnN0Q29sTGVuZ3RoID0gd29yZHNSZW5kZXJlZDtcblxuICAgICAgICB9XG4gXG4gICAgICAgIHRoaXMucmVuZGVyZWRXb3JkRW5kID0gdGhpcy5yZW5kZXJlZFdvcmRCZWdpbiArIGZpcnN0Q29sTGVuZ3RoO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRXb3JkID49IHRoaXMucmVuZGVyZWRXb3JkRW5kKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkV29yZEJlZ2luID0gdGhpcy5jdXJyZW50V29yZDtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVUaW1lKCkge1xuICAgICAgICBcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRUaW1lKSByZXR1cm4gJzE6MDAnO1xuXG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgdGltZUxlZnQgPSA2MCAtIE1hdGguZmxvb3IoKG5vdy5nZXRUaW1lKCkgLSB0aGlzLmN1cnJlbnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwKTtcblxuICAgICAgICBpZiAodGltZUxlZnQgPCAwKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiAnMDowMCc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWluID0gTWF0aC5mbG9vcih0aW1lTGVmdCAvIDYwKTtcbiAgICAgICAgbGV0IHNlYyA9IHRpbWVMZWZ0ICUgNjA7XG4gICAgICAgIHNlYyA9IChzZWMgPCAxMCkgPyAnMCcgKyBzZWMgOiBzZWMudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IGZvcm1hdHRlZFRpbWUgPSBtaW4gKyAnOicgKyBzZWM7XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWRUaW1lO1xuICAgIH1cblxuICAgIHJlbmRlcldvcmQoaWR4LCBwb3MpIHtcbiAgICAgICAgbGV0IHR5cGVTdGFydCA9IGFkZENvb3JkaW5hdGVzKHRoaXMucG9zLCBbMCwwXSlcbiAgICAgICAgbGV0IHdvcmRCZWdpbiA9IGFkZENvb3JkaW5hdGVzKHR5cGVTdGFydCwgcG9zKTtcbiAgICAgICAgbGV0IHdvcmQgPSB0aGlzLnVzZXJXb3Jkc1tpZHhdO1xuXG4gICAgICAgIGxldCBzdGF0dXMgPSAnbm9uZSc7XG5cbiAgICAgICAgaWYgKHdvcmQubWlzdHlwZWQpIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdyZWQnO1xuICAgICAgICB9IGVsc2UgaWYgKGlkeCA8IHRoaXMuY3VycmVudFdvcmQpIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdzdWNjZXNzJztcbiAgICAgICAgfSBlbHNlIGlmIChpZHggPT09IHRoaXMuY3VycmVudFdvcmQpIHtcbiAgICAgICAgICAgIGxldCBtYXRjaGVzID0gdGhpcy51c2VyV29yZHNbdGhpcy5jdXJyZW50V29yZF0ud29yZCA9PT0gdGhpcy5pbnB1dDtcbiAgICAgICAgICAgIHN0YXR1cyA9IG1hdGNoZXMgPyAnc3VjY2VzcycgOiAnY3VycmVudCc7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkLndvcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBlbGVDb29yZCA9IGFkZENvb3JkaW5hdGVzKHdvcmRCZWdpbiwgWzAsIGldKVxuICAgICAgICAgICAgbGV0IGVsZSA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KGVsZUNvb3JkKTtcblxuICAgICAgICAgICAgbGV0IGxldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgbGV0dGVyLmlubmVySFRNTCA9IHdvcmQud29yZFtpXTtcbiAgICAgICAgICAgIGxldHRlci5jbGFzc0xpc3QuYWRkKFwidHlwZXRlc3RcIiwgc3RhdHVzKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKGxldHRlcik7XG4gICAgICAgICAgICByZXBsYWNlQ2hpbGRyZW4oZWxlLCBsZXR0ZXIpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBuZXh0V29yZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIHRoaXMuZW5zdXJlVXNlcldvcmRzKCk7XG4gICAgICAgIGxldCBjdXJyZW50V29yZCA9IHRoaXMudXNlcldvcmRzW3RoaXMuY3VycmVudFdvcmRdO1xuICAgICAgICBjdXJyZW50V29yZC5taXN0eXBlZCA9IHRoaXMuaW5wdXQgIT09IGN1cnJlbnRXb3JkLndvcmQ7XG4gICAgICAgIHRoaXMuaW5wdXQgPSAnJztcbiAgICAgICAgdGhpcy5jdXJyZW50V29yZCsrO1xuICAgIH1cblxuICAgIHZhbGlkYXRlQ3VycmVudFdvcmQoKSB7XG4gICAgICAgIGxldCBjdXJyZW50V29yZCA9IHRoaXMudXNlcldvcmRzW3RoaXMuY3VycmVudFdvcmRdO1xuICAgICAgICBsZXQgaW5wdXRSRSA9IG5ldyBSZWdFeHAoJ14nICsgdGhpcy5pbnB1dClcbiAgICAgICAgY3VycmVudFdvcmQubWlzdHlwZWQgPSAhaW5wdXRSRS50ZXN0KGN1cnJlbnRXb3JkLndvcmQpO1xuICAgIH1cblxuXG4gICAgZW5zdXJlVXNlcldvcmRzKCkge1xuICAgICAgICBpZiAodGhpcy51c2VyV29yZHMubGVuZ3RoIDwgNTAgKyB0aGlzLmN1cnJlbnRXb3JkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA1MDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRvcFdvcmRzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRXb3JkID0gdGhpcy50b3BXb3Jkc1tyYW5kSWR4XTtcbiAgICAgICAgICAgICAgICBsZXQgd29yZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgd29yZDogcmFuZFdvcmQsXG4gICAgICAgICAgICAgICAgICAgIG1pc3R5cGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJXb3Jkcy5wdXNoKHdvcmQpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY2FsY3VsYXRlUG9zKCkge1xuICAgICAgICBsZXQgeCA9IDU7XG4gICAgICAgIGxldCB5ID0gTWF0aC5jZWlsKCgwLjMgKiB0aGlzLmdyaWQud2lkdGgpIC8gMik7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfVxuXG4gICAgcmVjZWl2ZShlKSB7XG4gICAgICAgIC8vZGV0ZXJtaW5lcyBcblxuICAgICAgICBpZiAoWzEzLCAzMl0uaW5jbHVkZXMoZS5rZXlDb2RlKSkge1xuICAgICAgICAgICAgdGhpcy5uZXh0V29yZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKChlLmtleUNvZGUgPj0gNjUgJiYgZS5rZXlDb2RlIDwgOTEpIHx8IGUua2V5Q29kZSA9PT0gMjIyKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFRpbWUpIHRoaXMuY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dCArPSBlLmtleTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVDdXJyZW50V29yZCgpXG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgdGhpcy5ncmlkLmV4aXRUeXBldGVzdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gOCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXQpIHRoaXMuaW5wdXQgPSB0aGlzLmlucHV0LnNsaWNlKDAsIHRoaXMuaW5wdXQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlQ3VycmVudFdvcmQoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pbnB1dCk7XG4gICAgfVxuXG59ICIsImV4cG9ydCBmdW5jdGlvbiBhZGRDb29yZGluYXRlcyhhMSwgYTIpIHtcbiAgICByZXR1cm4gW2ExWzBdICsgYTJbMF0sIGExWzFdICsgYTJbMV1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQm91bmRlZENvb3JkaW5hdGVzKGExLCBhMiwgZ3JpZCkge1xuICAgIGxldCB4ID0gYTFbMF0gKyBhMlswXVxuICAgIGxldCB5ID0gYTFbMV0gKyBhMlsxXTtcbiAgICB4ID0geCAlIGdyaWQuaGVpZ2h0O1xuICAgIHkgPSB5ICUgZ3JpZC53aWR0aDtcbiAgICBpZiAoeCA8IDApIHggKz0gZ3JpZC5oZWlnaHQ7XG4gICAgaWYgKHkgPCAwKSB5ICs9IGdyaWQud2lkdGg7XG4gICAgcmV0dXJuIFt4LHldXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlQ2hpbGRyZW4ocGFyZW50LCBjaGlsZCkge1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxDb29yZGluYXRlcyhhMSwgYTIpIHtcbiAgICByZXR1cm4gYTFbMF0gPT09IGEyWzBdICYmIGExWzFdID09PSBhMlsxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluY2x1ZGVzQ29vcmRpbmF0ZXMoY29vcmRMaXN0LCBjb29yZCkge1xuICAgIGxldCByZXMgPSBmYWxzZTtcblxuICAgIGNvb3JkTGlzdC5mb3JFYWNoKHh5ID0+IHtcbiAgICAgICAgaWYgKGVxdWFsQ29vcmRpbmF0ZXMoeHksIGNvb3JkKSkge1xuICAgICAgICAgICAgcmVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRW1vamkoc3RyKSB7XG4gICAgc3RyID0gc3RyLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBsZXQgRU1PSklTID0gW1xuICAgICAgXCLwn5igXCIsXG4gICAgICBcIvCfmLNcIixcbiAgICAgIFwi8J+RqOKAjfCfkajigI3wn5GmXCIsXG4gICAgICBcIvCfjYZcIixcbiAgICAgIFwi8J+QtVwiLFxuICAgICAgXCLwn5CxXCIsXG4gICAgICBcIvCfkqlcIixcbiAgICAgIFwi8J+MnlwiLFxuICAgICAgXCLwn4yIXCIsXG4gICAgICBcIvCfjIpcIixcbiAgICAgIFwi8J+XvVwiLFxuICAgICAgXCLwn5u4XCIsXG4gICAgICBcIvCfkajigI3wn5Go4oCN8J+RplwiLFxuICAgICAgXCLwn6WTXCIsXG4gICAgICBcIvCfkYxcIixcbiAgICAgIFwi8J+PnlwiLFxuICAgICAgXCLwn46iXCIsXG4gICAgICBcIvCfmpZcIixcbiAgICAgIFwi8J+NqVwiLFxuICAgICAgXCLwn42UXCIsXG4gICAgICBcIvCfh67wn4e3XCIsXG4gICAgICBcIvCfpKVcIixcbiAgICAgIFwi8J+RglwiLFxuICAgICAgXCLimKJcIixcbiAgICAgIFwi8J+ItVwiLFxuICAgICAgXCLwn6SjXCJcbiAgICBdO1xuXG5cbiAgICBsZXQgY29kZSA9IHN0ci5jaGFyQ29kZUF0KDApIC0gOTc7XG4gICAgcmV0dXJuIEVNT0pJU1tjb2RlXTtcblxufSJdLCJzb3VyY2VSb290IjoiIn0=