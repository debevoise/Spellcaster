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
        this.currentSpell.moves = delta;
        return;
      }

      var currentPos = this.currentSpell.currentPos;
      this.currentSpell.currentPos = _util__WEBPACK_IMPORTED_MODULE_1__["addCoordinates"](delta, currentPos);
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
  about: {
    type: 'text',
    action: "made by simon debevoise"
  },
  tobe: {
    type: 'text',
    action: '...or not to be'
  },
  foo: {
    type: 'text',
    action: 'bar'
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
  var range = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  console.log(words.length);
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
    var head = document.createElement("span");
    head.className = 'snakehead';
    head.innerText = "🐍";
    this.body = [head]; // [{ element: <span>, pos: }]

    this.grid = grid;
    var inst = new _spell__WEBPACK_IMPORTED_MODULE_1__["default"](this.grid);
    inst.storedText = 'arrow keys to move';
    inst.moves = [0, 1];
    inst.cast(['red', 'blue']);
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
      var loserSpell = new _spell__WEBPACK_IMPORTED_MODULE_1__["default"](this.grid);
      loserSpell.cast(['circle', 'blue', 'sans', 'right', 'big']);
      loserSpell.storedText = 'Game over: ' + (this.body.length - 1) + ' POINTS';
      this.grid.spells.push(loserSpell);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9rZXl3b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FtcGxldGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc25ha2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwZWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9kYzJhIiwid2VicGFjazovLy8uL3NyYy90eXBldGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJHcmlkIiwicm9vdCIsImlucHV0IiwiQ0VMTFNJWkUiLCJjdXJzb3JQb3MiLCJoZWlnaHQiLCJNYXRoIiwiY2VpbCIsIm9mZnNldEhlaWdodCIsIndpZHRoIiwiZmxvb3IiLCJvZmZzZXRXaWR0aCIsInNwZWxscyIsImN1cnJlbnRTcGVsbCIsIlNwZWxsIiwiZnJhbWVyYXRlIiwidHlwZXRlc3QiLCJncmlkIiwicG9wdWxhdGUiLCJwbGF5Iiwia2V5d29yZHNMaXN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxvZ28iLCJjYXN0TmV3U3BlbGwiLCJvbmNsaWNrIiwibmV4dFNwZWxsIiwicHVzaCIsImdlbmVyYXRlUmFuZG9tU3BlbGwiLCJPYmplY3QiLCJrZXlzIiwia2V5d29yZHMiLCJmb3JFYWNoIiwia3ciLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJyZWNlaXZlIiwiYXBwZW5kQ2hpbGQiLCJyZXNpemVHcmlkIiwiYmluZCIsInJlY2VpdmVJbnB1dCIsInJlY2VpdmVDbGljayIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicG9zIiwidGFyZ2V0IiwiZGF0YXNldCIsIndpbmRvdyIsIm9ucmVzaXplIiwiaSIsInJvd0FyciIsInJvdyIsImNsYXNzTmFtZSIsImoiLCJjZWxsIiwiZmlyc3RDaGlsZCIsInJlbW92ZSIsImNsZWFyR3JpZEVsZW1lbnRzIiwic25ha2VNb2RlIiwiY2xlYXJQcmV2aW91c1JlbmRlciIsInN0b3JlZFRleHQiLCJhY3RpdmVUZXh0IiwicHJldlNwZWxsIiwicmVuZGVyIiwiY29vcmRpbmF0ZXMiLCJ4IiwieSIsIlNuYWtlIiwibGFzdFNwZWxsIiwiY2VudGVyUG9zIiwiaW5zdCIsImNhc3QiLCJjdXJyZW50UG9zIiwiY29uc29sZSIsImxvZyIsIlR5cGVUZXN0IiwicG9zQXJyIiwic3BsaXQiLCJtYXAiLCJwYXJzZUludCIsImtleWNvZGUiLCJkZWx0YSIsIm1vdmVzIiwiVXRpbCIsInJhbmRvbSIsImtleUNvZGUiLCJrZXkiLCJkZWxldGVDaGFyYWN0ZXIiLCJ1cGRhdGVDdXJyZW50UG9zaXRpb24iLCJzcGVsbCIsIm1vdmUiLCJyYXRlIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJmcmFtZSIsImFuaW1hdGUiLCJzYW1wbGVUZXh0IiwiYWxsIiwidHlwZSIsImNsZWFyIiwic25ha2UiLCJ0ZXN0IiwiY2lyY2xlIiwiZmFzdCIsImFjdGlvbiIsInNsb3ciLCJiaWciLCJsaXR0bGUiLCJoZWxwIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiY29taWMiLCJzYW5zIiwiZnVuIiwibW9ubyIsInNlcmlmIiwiYmx1ZSIsImdyZWVuIiwieWVsbG93IiwicmVkIiwiZW1vamkiLCJoZWxsbyIsImFib3V0IiwidG9iZSIsImZvbyIsInRvcDEwMDAiLCJ3aGl0ZXNwYWNlIiwid29yZHMiLCJ2YWxpZHdvcmRzIiwiZmlsdGVyIiwid29yZCIsImxlbmd0aCIsInJhbmdlIiwic2xpY2UiLCJwb3NpdGlvbiIsInBvc2l0aW9ucyIsInJlbmRlcmVkRWxlbWVudHMiLCJoZWFkIiwiYm9keSIsInJlcyIsImdldEVsZW1lbnQiLCJsb3NlclNwZWxsIiwiZWxlIiwibmV4dFBvc2l0aW9uIiwiYWRkQ29vcmRpbmF0ZXMiLCJpbmNsdWRlc0Nvb3JkaW5hdGVzIiwib3V0T2ZCb3VuZHMiLCJoYW5kbGVMb3NzIiwiaXNFbXB0eSIsInVuc2hpZnQiLCJlYXQiLCJwb3AiLCJzbmFjayIsImVsZW1lbnQiLCJjaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsInJlcGxhY2VDaGlsZHJlbiIsInBlckZyYW1lS2V5d29yZHMiLCJhcHBsaWVkS2V5d29yZHMiLCJyYW5kb21Qb3NpdGlvbiIsImtleXdvcmRJbmRleCIsInJvdGF0ZSIsImNsYXNzQXJyIiwiY29sb3JzIiwiZm9udCIsInNpemUiLCJ0b0xvd2VyQ2FzZSIsImV4dHJhY3RLZXl3b3JkcyIsIkFycmF5Iiwibm90U3RvcmVkIiwiYXBwbHlLZXl3b3JkIiwiaW5jbHVkZXMiLCJwbGF5U25ha2UiLCJuZXdmcHMiLCJuZXdzaXplIiwicGxheVR5cGV0ZXN0IiwiY29udGFpbnNLZXl3b3JkIiwic3Vic3RyIiwic3RyIiwia3dzIiwic2hpZnQiLCJyYW5kSWR4IiwidGV4dCIsInNpZ24iLCJsZXR0ZXIiLCJzcGFuIiwidGV4dENvbnRlbnQiLCJ0b1VwcGVyQ2FzZSIsInN0eWxlIiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzaHVmZmxlQ29sb3JzIiwiY29sb3IiLCJjYWxjdWxhdGVQb3MiLCJ1c2VyV29yZHMiLCJjdXJyZW50V29yZCIsImJhZGtleXN0cm9rZXMiLCJyZW5kZXJlZFdvcmRCZWdpbiIsInJlbmRlcmVkV29yZEVuZCIsIm51bVJvd3MiLCJjdXJyZW50VGltZSIsInRvcFdvcmRzIiwiZW5zdXJlVXNlcldvcmRzIiwiY2FsY3VsYXRlV1BNIiwiZXhpdFR5cGV0ZXN0IiwiY29ycmVjdEtleXN0cm9rZXMiLCJtaXN0eXBlZCIsIm5vdyIsIkRhdGUiLCJ0aW1lTGVmdCIsImdldFRpbWUiLCJ0aW1lc1VwIiwib3ZlciIsInJlbmRlclBhZGRpbmciLCJyZW5kZXJXb3JkRGlzcGxheSIsInJlbmRlcklucHV0IiwidG9wIiwiZWwiLCJpbnB1dHdpZHRoIiwidGltZVN0YXJ0IiwidGltZSIsImNhbGN1bGF0ZVRpbWUiLCJ3b3Jkc1JlbmRlcmVkIiwiZmlyc3RDb2xMZW5ndGgiLCJjb2wiLCJ3b3JkSWR4IiwicmVuZGVyZWRXb3JkIiwicmVuZGVyQ29vcmQiLCJyZW5kZXJXb3JkIiwibWluIiwic2VjIiwidG9TdHJpbmciLCJmb3JtYXR0ZWRUaW1lIiwiaWR4IiwidHlwZVN0YXJ0Iiwid29yZEJlZ2luIiwic3RhdHVzIiwibWF0Y2hlcyIsImVsZUNvb3JkIiwiaW5uZXJIVE1MIiwiaW5wdXRSRSIsIlJlZ0V4cCIsInJhbmRXb3JkIiwibmV4dFdvcmQiLCJ2YWxpZGF0ZUN1cnJlbnRXb3JkIiwiYTEiLCJhMiIsImFkZEJvdW5kZWRDb29yZGluYXRlcyIsInBhcmVudCIsInJlbW92ZUNoaWxkIiwiZXF1YWxDb29yZGluYXRlcyIsImNvb3JkTGlzdCIsImNvb3JkIiwieHkiLCJ0b0Vtb2ppIiwiRU1PSklTIiwiY29kZSIsImNoYXJDb2RlQXQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7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RUFlWCxJQWZXLEVBZ0JYLElBaEJXLEVBaUJYLElBakJXLEVBa0JYLElBbEJXLEVBbUJYLElBbkJXLEVBb0JYLElBcEJXLEVBcUJYLE1BckJXLEVBc0JYLElBdEJXLEVBdUJYLElBdkJXLEVBd0JYLEdBeEJXLEVBeUJYLElBekJXLEVBMEJYLElBMUJXLENBQWI7QUE4QkEsTUFBSUMsSUFBSSxHQUFHOUUsR0FBRyxDQUFDK0UsVUFBSixDQUFlLENBQWYsSUFBb0IsRUFBL0I7QUFDQSxTQUFPRixNQUFNLENBQUNDLElBQUQsQ0FBYjtBQUVILEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFNwZWxsIGZyb20gJy4vc3BlbGwnO1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyBTbmFrZSB9IGZyb20gJy4vc25ha2UnO1xuaW1wb3J0IGtleXdvcmRzIGZyb20gXCIuL2tleXdvcmRzXCI7XG5pbXBvcnQgeyBUeXBlVGVzdCB9IGZyb20gJy4vdHlwZXRlc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIHtcbiAgICBjb25zdHJ1Y3Rvcihyb290LCBpbnB1dCkge1xuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xuICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgICAgIFxuICAgICAgICB0aGlzLkNFTExTSVpFID0gMjU7XG4gICAgICAgIHRoaXMuY3Vyc29yUG9zID0gWzAsMF07XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5jZWlsKHJvb3Qub2Zmc2V0SGVpZ2h0IC8gdGhpcy5DRUxMU0laRSkgLSAyO1xuICAgICAgICB0aGlzLndpZHRoID0gTWF0aC5mbG9vcihyb290Lm9mZnNldFdpZHRoIC8gdGhpcy5DRUxMU0laRSk7XG4gICAgICAgIHRoaXMuc3BlbGxzID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudFNwZWxsID0gbmV3IFNwZWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmZyYW1lcmF0ZSA9IDIwMDtcblxuICAgICAgICB0aGlzLnR5cGV0ZXN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5ncmlkID0gdGhpcy5wb3B1bGF0ZSgpO1xuICAgICAgICB0aGlzLnBsYXkgPSB0cnVlO1xuXG4gICAgICAgIGxldCBrZXl3b3Jkc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImtleXdvcmRzLWxpc3RcIik7XG4gICAgICAgIGxldCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28nKTtcbiAgICAgICAgbGV0IGNhc3ROZXdTcGVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXN0LW5ldy1zcGVsbCcpO1xuICAgICAgICBjYXN0TmV3U3BlbGwub25jbGljayA9ICgpID0+IHRoaXMubmV4dFNwZWxsKCk7XG5cbiAgICAgICAgbG9nby5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ncmlkLnB1c2godGhpcy5jdXJyZW50U3BlbGwuZ2VuZXJhdGVSYW5kb21TcGVsbCgpKTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3Qua2V5cyhrZXl3b3JkcykuZm9yRWFjaChrdyA9PiB7XG4gICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgIGxpLmlubmVyVGV4dCA9IGt3O1xuICAgICAgICAgIGxpLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmN1cnJlbnRTcGVsbC5yZWNlaXZlKGt3KTtcbiAgICAgICAgICBrZXl3b3Jkc0xpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlc2l6ZUdyaWQgPSB0aGlzLnJlc2l6ZUdyaWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWNlaXZlSW5wdXQgPSB0aGlzLnJlY2VpdmVJbnB1dC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlY2VpdmVDbGljayA9IHRoaXMucmVjZWl2ZUNsaWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5yZWNlaXZlSW5wdXQpO1xuXG4gICAgICAgIHRoaXMucm9vdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHBvcyB9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICAgICAgICAgIGlmIChwb3MpIHRoaXMucmVjZWl2ZUNsaWNrKHBvcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHRoaXMucmVzaXplR3JpZDtcbiAgICB9XG4gXG4gICAgcG9wdWxhdGUoKSB7XG4gICAgICAgIGxldCBncmlkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5oZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvd0FyciA9IFtdO1xuICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICByb3cuY2xhc3NOYW1lID0gJ3Jvdyc7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMud2lkdGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICdjZWxsJztcbiAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQucG9zID0gW2ksIGpdXG4gICAgICAgICAgICAgICAgcm93QXJyLnB1c2goY2VsbCk7XG5cbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgdGhpcy5yb290LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICBncmlkLnB1c2gocm93QXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBncmlkO1xuICAgIH1cblxuXG4gICAgY2xlYXJHcmlkRWxlbWVudHMoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLnJvb3QuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5yb290LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNpemVHcmlkKCkge1xuICAgICAgICBsZXQgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG4gICAgICAgIHRoaXMuY2xlYXJHcmlkRWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLmZsb29yKHJvb3Qub2Zmc2V0SGVpZ2h0IC8gdGhpcy5DRUxMU0laRSkgLSAxO1xuICAgICAgICB0aGlzLndpZHRoID0gTWF0aC5mbG9vcihyb290Lm9mZnNldFdpZHRoIC8gdGhpcy5DRUxMU0laRSk7XG4gICAgICAgIHRoaXMuZ3JpZCA9IHRoaXMucG9wdWxhdGUoKTtcbiAgICB9XG5cbiAgICBuZXh0U3BlbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLnNuYWtlTW9kZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbC5jbGVhclByZXZpb3VzUmVuZGVyKClcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWxsID0gbmV3IFNwZWxsKGdyaWQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFNwZWxsLnN0b3JlZFRleHQgfHwgdGhpcy5jdXJyZW50U3BlbGwuYWN0aXZlVGV4dCkge1xuICAgICAgICAgICAgdGhpcy5zcGVsbHMucHVzaCh0aGlzLmN1cnJlbnRTcGVsbCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbCA9IG5ldyBTcGVsbChncmlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBwcmV2U3BlbGwgPSB0aGlzLmN1cnJlbnRTcGVsbDtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWxsID0gbmV3IFNwZWxsKGdyaWQpO1xuICAgICAgICAgICAgcHJldlNwZWxsLnJlbmRlcigpXG4gICAgICAgIH0gIFxuICAgIH1cblxuICAgIGdldEVsZW1lbnQoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgbGV0IHggPSBjb29yZGluYXRlc1swXSAlIHRoaXMuaGVpZ2h0O1xuICAgICAgICBsZXQgeSA9IGNvb3JkaW5hdGVzWzFdICUgdGhpcy53aWR0aDtcbiAgICAgICAgaWYgKHggPCAwKSB4ICs9IHRoaXMuaGVpZ2h0O1xuICAgICAgICBpZiAoeSA8IDApIHkgKz0gdGhpcy53aWR0aDtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZFt4XVt5XTtcbiAgICB9XG5cblxuICAgIHNuYWtlTW9kZSgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmN1cnJlbnRTcGVsbCBpbnN0YW5jZW9mIFNuYWtlKVxuICAgIH1cblxuICAgIHBsYXlTbmFrZSgpIHtcbiAgICAgICAgbGV0IGxhc3RTcGVsbCA9IHRoaXMuY3VycmVudFNwZWxsO1xuICAgICAgICB0aGlzLnNwZWxscy5wdXNoKGxhc3RTcGVsbCk7XG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcih0aGlzLmhlaWdodCAvIDIpO1xuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IodGhpcy53aWR0aCAvIDIpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGNlbnRlclBvcyA9IFt4LCB5XTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbCA9IG5ldyBTbmFrZSh0aGlzLCBjZW50ZXJQb3MpXG4gICAgfVxuXG4gICAgcGxheVR5cGV0ZXN0KCkge1xuICAgICAgICAvLyBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgICAgdGhpcy5zcGVsbHMucHVzaCh0aGlzLmN1cnJlbnRTcGVsbCk7XG4gICAgICAgIGxldCBpbnN0ID0gbmV3IFNwZWxsKHRoaXMpO1xuICAgICAgICBpbnN0LmNhc3QoW1wicmlnaHRcIiwgXCJncmVlblwiXSk7XG4gICAgICAgIGluc3Quc3RvcmVkVGV4dCA9IFwicHJlc3MgZXNjIHRvIGV4aXRcIjtcbiAgICAgICAgaW5zdC5jdXJyZW50UG9zID0gWzEsIDFdO1xuICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbCA9IGluc3Q7XG4gICAgICAgIGNvbnNvbGUubG9nKGluc3QpXG5cbiAgICAgICAgaWYgKHRoaXMudHlwZXRlc3QpIHRoaXMudHlwZXRlc3QuY2xlYXJQcmV2aW91c1JlbmRlcigpO1xuICAgICAgICB0aGlzLnR5cGV0ZXN0ID0gbmV3IFR5cGVUZXN0KHRoaXMpO1xuICAgICAgICB0aGlzLnR5cGV0ZXN0LnJlbmRlcigpO1xuICAgICAgICBcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50U3BlbGwgPSBudWxsO1xuICAgIH1cblxuICAgIGV4aXRUeXBldGVzdCgpIHtcbiAgICAgICAgaWYgKHRoaXMudHlwZXRlc3QpIHRoaXMudHlwZXRlc3QuY2xlYXJQcmV2aW91c1JlbmRlcigpO1xuXG4gICAgICAgIHRoaXMudHlwZXRlc3QgPSBudWxsO1xuICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbC5jbGVhclByZXZpb3VzUmVuZGVyKCk7XG4gICAgICAgIHRoaXMuY3VycmVudFNwZWxsID0gbmV3IFNwZWxsKHRoaXMpO1xuICAgIH1cblxuICAgIHJlY2VpdmVDbGljayhwb3MpIHtcbiAgICAgICAgaWYgKHRoaXMuc25ha2VNb2RlKCkpIHJldHVybjtcbiAgICAgICAgbGV0IHBvc0FyciA9IHBvcy5zcGxpdChcIixcIikubWFwKGkgPT4gcGFyc2VJbnQoaSkpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50U3BlbGwpIHRoaXMuY3VycmVudFNwZWxsLmN1cnJlbnRQb3MgPSBwb3NBcnI7XG4gICAgfVxuXG4gICAgdXBkYXRlQ3VycmVudFBvc2l0aW9uKGtleWNvZGUpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBkZWx0YTsgXG5cbiAgICAgICAgc3dpdGNoIChrZXljb2RlKSB7XG4gICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgIGRlbHRhID0gWzAsIC0xXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICBkZWx0YSA9IFstMSwgMF07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgZGVsdGEgPSBbMCwgMV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgZGVsdGEgPSBbMSwgMF07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNuYWtlTW9kZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbC5tb3ZlcyA9IGRlbHRhO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHsgY3VycmVudFBvcyB9ID0gdGhpcy5jdXJyZW50U3BlbGw7XG4gICAgICAgIHRoaXMuY3VycmVudFNwZWxsLmN1cnJlbnRQb3MgPSBVdGlsLmFkZENvb3JkaW5hdGVzKGRlbHRhLCBjdXJyZW50UG9zKTtcbiAgICB9XG5cbiAgICByYW5kb21Qb3NpdGlvbigpIHtcbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmhlaWdodCk7XG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy53aWR0aCk7XG5cbiAgICAgICAgcmV0dXJuIFt4LHldO1xuICAgIH1cblxuICAgIHJlY2VpdmVJbnB1dChlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U3BlbGwpIHRoaXMuY3VycmVudFNwZWxsLmNsZWFyUHJldmlvdXNSZW5kZXIoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWxsID0gbmV3IFNwZWxsKHRoaXMpOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnR5cGV0ZXN0KSB7XG4gICAgICAgICAgdGhpcy50eXBldGVzdC5yZWNlaXZlKGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAzMikge1xuICAgICAgICAgIHRoaXMubmV4dFNwZWxsKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID49IDY1ICYmIGUua2V5Q29kZSA8IDkxKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc25ha2VNb2RlKCkpIHJldHVybjtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbC5yZWNlaXZlKGUua2V5KTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDggJiYgdGhpcy5jdXJyZW50U3BlbGwpIHtcbiAgICAgICAgICBpZiAodGhpcy5zbmFrZU1vZGUoKSkgcmV0dXJuO1xuICAgICAgICAgIHRoaXMuY3VycmVudFNwZWxsLmRlbGV0ZUNoYXJhY3RlcigpO1xuICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA8PSA0MCAmJiBlLmtleUNvZGUgPj0gMzcpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRQb3NpdGlvbihlLmtleUNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfSBcblxuICAgIGZyYW1lKCkge1xuICAgICAgICB0aGlzLnNwZWxscy5mb3JFYWNoKHNwZWxsID0+IHNwZWxsLm1vdmUoKSk7XG4gICAgXG4gICAgICAgIHRoaXMuY3VycmVudFNwZWxsLm1vdmUoKTtcbiAgICAgICAgaWYgKHRoaXMudHlwZXRlc3QpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZXRlc3QucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgYW5pbWF0ZShyYXRlKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnR5cGV0ZXN0KSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5mcmFtZXJhdGUgPSByYXRlIHx8IHRoaXMuZnJhbWVyYXRlO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWUoKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgICAgICB9LCB0aGlzLmZyYW1lcmF0ZSk7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgR3JpZCBmcm9tICcuL2dyaWQnO1xuaW1wb3J0IFNwZWxsIGZyb20gJy4vc3BlbGwnO1xuaW1wb3J0IHsgc2FtcGxlVGV4dCB9IGZyb20gXCIuL3NhbXBsZXRleHRcIjtcblxuaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHsgVHlwZVRlc3QgfSBmcm9tICcuL3R5cGV0ZXN0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpO1xuICAgIHdpbmRvdy5TcGVsbCA9IFNwZWxsO1xuICAgIGNvbnN0IGdyaWQgPSBuZXcgR3JpZChyb290LCBpbnB1dCk7XG5cbiAgICBncmlkLmFuaW1hdGUoKTtcbiAgICB3aW5kb3cuZ3JpZCA9IGdyaWQ7XG4gICAgd2luZG93LnNhbXBsZVRleHQgPSBzYW1wbGVUZXh0O1xuICAgIHdpbmRvdy50eXBldGVzdCA9IG5ldyBUeXBlVGVzdChncmlkKTtcblxufSkiLCJjb25zdCBrZXl3b3JkcyA9IHtcbiAgYWxsOiB7IHR5cGU6IFwiYWxsXCIgfSxcbiAgY2xlYXI6IHsgdHlwZTogXCJjbGVhclwiIH0sXG4gIHNwZWxsOiB7IHR5cGU6IFwic3BlbGxcIiB9LFxuICBzbmFrZTogeyB0eXBlOiBcInNuYWtlXCIgfSxcbiAgdHlwZTogeyB0eXBlOiBcInR5cGV0ZXN0XCIgfSxcbiAgdGVzdDogeyB0eXBlOiBcInR5cGV0ZXN0XCIgfSxcbiAgY2lyY2xlOiB7IHR5cGU6IFwiY2lyY2xlXCIgfSxcbiAgZmFzdDogeyB0eXBlOiBcInNwZWVkXCIsIGFjdGlvbjogMC44IH0sXG4gIHNsb3c6IHsgdHlwZTogXCJzcGVlZFwiLCBhY3Rpb246IDEuMjUgfSxcbiAgYmlnOiB7IHR5cGU6IFwiZm9udHNpemVcIiwgYWN0aW9uOiAxLjI1IH0sXG4gIGxpdHRsZTogeyB0eXBlOiBcImZvbnRzaXplXCIsIGFjdGlvbjogMC44IH0sXG4gIGhlbHA6IHsgdHlwZTogXCJpbmZvXCIsIGFjdGlvbjogXCJoZWxwXCIgfSxcbiAgdXA6IHsgdHlwZTogXCJtb3ZlXCIsIGFjdGlvbjogWy0xLCAwXSB9LFxuICBkb3duOiB7IHR5cGU6IFwibW92ZVwiLCBhY3Rpb246IFsxLCAwXSB9LFxuICBsZWZ0OiB7IHR5cGU6IFwibW92ZVwiLCBhY3Rpb246IFswLCAtMV0gfSxcbiAgcmlnaHQ6IHsgdHlwZTogXCJtb3ZlXCIsIGFjdGlvbjogWzAsIDFdIH0sXG4gIGNvbWljOiB7IHR5cGU6IFwiZm9udFwiLCBhY3Rpb246IFwiY29taWNcIiB9LFxuICBzYW5zOiB7IHR5cGU6IFwiZm9udFwiLCBhY3Rpb246IFwic2Fuc1wiIH0sXG4gIGZ1bjogeyB0eXBlOiBcImZvbnRcIiwgYWN0aW9uOiBcImZ1blwiIH0sXG4gIG1vbm86IHsgdHlwZTogXCJmb250XCIsIGFjdGlvbjogXCJtb25vXCIgfSxcbiAgc2VyaWY6IHsgdHlwZTogXCJmb250XCIsIGFjdGlvbjogXCJzZXJpZlwiIH0sXG4gIGJsdWU6IHsgdHlwZTogXCJjb2xvclwiLCBhY3Rpb246IFwiIzU3OThhZFwiIH0sXG4gIGdyZWVuOiB7IHR5cGU6IFwiY29sb3JcIiwgYWN0aW9uOiBcIiM1N2FkNmVcIiB9LFxuICB5ZWxsb3c6IHsgdHlwZTogXCJjb2xvclwiLCBhY3Rpb246IFwiI2RiYzAzNVwiIH0sXG4gIHJlZDogeyB0eXBlOiBcImNvbG9yXCIsIGFjdGlvbjogXCIjZGU0ODFiXCIgfSxcbiAgZW1vamk6IHsgdHlwZTogXCJlbW9qaVwiIH0sXG4gIGhlbGxvOiB7IHR5cGU6IFwidGV4dFwiLCBhY3Rpb246IFwid29ybGRcIiB9LFxuICBhYm91dDogeyB0eXBlOiAndGV4dCcsIGFjdGlvbjogXCJtYWRlIGJ5IHNpbW9uIGRlYmV2b2lzZVwiIH0sXG4gIHRvYmU6IHsgdHlwZTogJ3RleHQnLCBhY3Rpb246ICcuLi5vciBub3QgdG8gYmUnfSxcbiAgZm9vOiB7IHR5cGU6ICd0ZXh0JywgYWN0aW9uOiAnYmFyJyB9XG4gIFxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBrZXl3b3JkcztcblxuLy8gVE9ETzogXG4vLyByb3RhdGUsIHNuYWtlLCB0eXBldGVzdCwgYWJvdXQsIGluZGV4LCAgIiwibGV0IHRvcDEwMDAgPSBgdGhlXG5vZlxudG9cbmFuZFxuYVxuaW5cbmlzXG5pdFxueW91XG50aGF0XG5oZVxud2FzXG5mb3Jcbm9uXG5hcmVcbndpdGhcbmFzXG5JXG5oaXNcbnRoZXlcbmJlXG5hdFxub25lXG5oYXZlXG50aGlzXG5mcm9tXG5vclxuaGFkXG5ieVxubm90XG53b3JkXG5idXRcbndoYXRcbnNvbWVcbndlXG5jYW5cbm91dFxub3RoZXJcbndlcmVcbmFsbFxudGhlcmVcbndoZW5cbnVwXG51c2VcbnlvdXJcbmhvd1xuc2FpZFxuYW5cbmVhY2hcbnNoZVxud2hpY2hcbmRvXG50aGVpclxudGltZVxuaWZcbndpbGxcbndheVxuYWJvdXRcbm1hbnlcbnRoZW5cbnRoZW1cbndyaXRlXG53b3VsZFxubGlrZVxuc29cbnRoZXNlXG5oZXJcbmxvbmdcbm1ha2VcbnRoaW5nXG5zZWVcbmhpbVxudHdvXG5oYXNcbmxvb2tcbm1vcmVcbmRheVxuY291bGRcbmdvXG5jb21lXG5kaWRcbm51bWJlclxuc291bmRcbm5vXG5tb3N0XG5wZW9wbGVcbm15XG5vdmVyXG5rbm93XG53YXRlclxudGhhblxuY2FsbFxuZmlyc3Rcbndob1xubWF5XG5kb3duXG5zaWRlXG5iZWVuXG5ub3dcbmZpbmRcbmFueVxubmV3XG53b3JrXG5wYXJ0XG50YWtlXG5nZXRcbnBsYWNlXG5tYWRlXG5saXZlXG53aGVyZVxuYWZ0ZXJcbmJhY2tcbmxpdHRsZVxub25seVxucm91bmRcbm1hblxueWVhclxuY2FtZVxuc2hvd1xuZXZlcnlcbmdvb2Rcbm1lXG5naXZlXG5vdXJcbnVuZGVyXG5uYW1lXG52ZXJ5XG50aHJvdWdoXG5qdXN0XG5mb3JtXG5zZW50ZW5jZVxuZ3JlYXRcbnRoaW5rXG5zYXlcbmhlbHBcbmxvd1xubGluZVxuZGlmZmVyXG50dXJuXG5jYXVzZVxubXVjaFxubWVhblxuYmVmb3JlXG5tb3ZlXG5yaWdodFxuYm95XG5vbGRcbnRvb1xuc2FtZVxudGVsbFxuZG9lc1xuc2V0XG50aHJlZVxud2FudFxuYWlyXG53ZWxsXG5hbHNvXG5wbGF5XG5zbWFsbFxuZW5kXG5wdXRcbmhvbWVcbnJlYWRcbmhhbmRcbnBvcnRcbmxhcmdlXG5zcGVsbFxuYWRkXG5ldmVuXG5sYW5kXG5oZXJlXG5tdXN0XG5iaWdcbmhpZ2hcbnN1Y2hcbmZvbGxvd1xuYWN0XG53aHlcbmFza1xubWVuXG5jaGFuZ2VcbndlbnRcbmxpZ2h0XG5raW5kXG5vZmZcbm5lZWRcbmhvdXNlXG5waWN0dXJlXG50cnlcbnVzXG5hZ2FpblxuYW5pbWFsXG5wb2ludFxubW90aGVyXG53b3JsZFxubmVhclxuYnVpbGRcbnNlbGZcbmVhcnRoXG5mYXRoZXJcbmhlYWRcbnN0YW5kXG5vd25cbnBhZ2VcbnNob3VsZFxuY291bnRyeVxuZm91bmRcbmFuc3dlclxuc2Nob29sXG5ncm93XG5zdHVkeVxuc3RpbGxcbmxlYXJuXG5wbGFudFxuY292ZXJcbmZvb2RcbnN1blxuZm91clxuYmV0d2Vlblxuc3RhdGVcbmtlZXBcbmV5ZVxubmV2ZXJcbmxhc3RcbmxldFxudGhvdWdodFxuY2l0eVxudHJlZVxuY3Jvc3NcbmZhcm1cbmhhcmRcbnN0YXJ0XG5taWdodFxuc3RvcnlcbnNhd1xuZmFyXG5zZWFcbmRyYXdcbmxlZnRcbmxhdGVcbnJ1blxuZG9uJ3RcbndoaWxlXG5wcmVzc1xuY2xvc2Vcbm5pZ2h0XG5yZWFsXG5saWZlXG5mZXdcbm5vcnRoXG5vcGVuXG5zZWVtXG50b2dldGhlclxubmV4dFxud2hpdGVcbmNoaWxkcmVuXG5iZWdpblxuZ290XG53YWxrXG5leGFtcGxlXG5lYXNlXG5wYXBlclxuZ3JvdXBcbmFsd2F5c1xubXVzaWNcbnRob3NlXG5ib3RoXG5tYXJrXG5vZnRlblxubGV0dGVyXG51bnRpbFxubWlsZVxucml2ZXJcbmNhclxuZmVldFxuY2FyZVxuc2Vjb25kXG5ib29rXG5jYXJyeVxudG9va1xuc2NpZW5jZVxuZWF0XG5yb29tXG5mcmllbmRcbmJlZ2FuXG5pZGVhXG5maXNoXG5tb3VudGFpblxuc3RvcFxub25jZVxuYmFzZVxuaGVhclxuaG9yc2VcbmN1dFxuc3VyZVxud2F0Y2hcbmNvbG9yXG5mYWNlXG53b29kXG5tYWluXG5lbm91Z2hcbnBsYWluXG5naXJsXG51c3VhbFxueW91bmdcbnJlYWR5XG5hYm92ZVxuZXZlclxucmVkXG5saXN0XG50aG91Z2hcbmZlZWxcbnRhbGtcbmJpcmRcbnNvb25cbmJvZHlcbmRvZ1xuZmFtaWx5XG5kaXJlY3RcbnBvc2VcbmxlYXZlXG5zb25nXG5tZWFzdXJlXG5kb29yXG5wcm9kdWN0XG5ibGFja1xuc2hvcnRcbm51bWVyYWxcbmNsYXNzXG53aW5kXG5xdWVzdGlvblxuaGFwcGVuXG5jb21wbGV0ZVxuc2hpcFxuYXJlYVxuaGFsZlxucm9ja1xub3JkZXJcbmZpcmVcbnNvdXRoXG5wcm9ibGVtXG5waWVjZVxudG9sZFxua25ld1xucGFzc1xuc2luY2VcbnRvcFxud2hvbGVcbmtpbmdcbnNwYWNlXG5oZWFyZFxuYmVzdFxuaG91clxuYmV0dGVyXG50cnVlXG5kdXJpbmdcbmh1bmRyZWRcbmZpdmVcbnJlbWVtYmVyXG5zdGVwXG5lYXJseVxuaG9sZFxud2VzdFxuZ3JvdW5kXG5pbnRlcmVzdFxucmVhY2hcbmZhc3RcbnZlcmJcbnNpbmdcbmxpc3Rlblxuc2l4XG50YWJsZVxudHJhdmVsXG5sZXNzXG5tb3JuaW5nXG50ZW5cbnNpbXBsZVxuc2V2ZXJhbFxudm93ZWxcbnRvd2FyZFxud2FyXG5sYXlcbmFnYWluc3RcbnBhdHRlcm5cbnNsb3dcbmNlbnRlclxubG92ZVxucGVyc29uXG5tb25leVxuc2VydmVcbmFwcGVhclxucm9hZFxubWFwXG5yYWluXG5ydWxlXG5nb3Zlcm5cbnB1bGxcbmNvbGRcbm5vdGljZVxudm9pY2VcbnVuaXRcbnBvd2VyXG50b3duXG5maW5lXG5jZXJ0YWluXG5mbHlcbmZhbGxcbmxlYWRcbmNyeVxuZGFya1xubWFjaGluZVxubm90ZVxud2FpdFxucGxhblxuZmlndXJlXG5zdGFyXG5ib3hcbm5vdW5cbmZpZWxkXG5yZXN0XG5jb3JyZWN0XG5hYmxlXG5wb3VuZFxuZG9uZVxuYmVhdXR5XG5kcml2ZVxuc3Rvb2RcbmNvbnRhaW5cbmZyb250XG50ZWFjaFxud2Vla1xuZmluYWxcbmdhdmVcbmdyZWVuXG5vaFxucXVpY2tcbmRldmVsb3Bcbm9jZWFuXG53YXJtXG5mcmVlXG5taW51dGVcbnN0cm9uZ1xuc3BlY2lhbFxubWluZFxuYmVoaW5kXG5jbGVhclxudGFpbFxucHJvZHVjZVxuZmFjdFxuc3RyZWV0XG5pbmNoXG5tdWx0aXBseVxubm90aGluZ1xuY291cnNlXG5zdGF5XG53aGVlbFxuZnVsbFxuZm9yY2VcbmJsdWVcbm9iamVjdFxuZGVjaWRlXG5zdXJmYWNlXG5kZWVwXG5tb29uXG5pc2xhbmRcbmZvb3RcbnN5c3RlbVxuYnVzeVxudGVzdFxucmVjb3JkXG5ib2F0XG5jb21tb25cbmdvbGRcbnBvc3NpYmxlXG5wbGFuZVxuc3RlYWRcbmRyeVxud29uZGVyXG5sYXVnaFxudGhvdXNhbmRcbmFnb1xucmFuXG5jaGVja1xuZ2FtZVxuc2hhcGVcbmVxdWF0ZVxuaG90XG5taXNzXG5icm91Z2h0XG5oZWF0XG5zbm93XG50aXJlXG5icmluZ1xueWVzXG5kaXN0YW50XG5maWxsXG5lYXN0XG5wYWludFxubGFuZ3VhZ2VcbmFtb25nXG5ncmFuZFxuYmFsbFxueWV0XG53YXZlXG5kcm9wXG5oZWFydFxuYW1cbnByZXNlbnRcbmhlYXZ5XG5kYW5jZVxuZW5naW5lXG5wb3NpdGlvblxuYXJtXG53aWRlXG5zYWlsXG5tYXRlcmlhbFxuc2l6ZVxudmFyeVxuc2V0dGxlXG5zcGVha1xud2VpZ2h0XG5nZW5lcmFsXG5pY2Vcbm1hdHRlclxuY2lyY2xlXG5wYWlyXG5pbmNsdWRlXG5kaXZpZGVcbnN5bGxhYmxlXG5mZWx0XG5wZXJoYXBzXG5waWNrXG5zdWRkZW5cbmNvdW50XG5zcXVhcmVcbnJlYXNvblxubGVuZ3RoXG5yZXByZXNlbnRcbmFydFxuc3ViamVjdFxucmVnaW9uXG5lbmVyZ3lcbmh1bnRcbnByb2JhYmxlXG5iZWRcbmJyb3RoZXJcbmVnZ1xucmlkZVxuY2VsbFxuYmVsaWV2ZVxuZnJhY3Rpb25cbmZvcmVzdFxuc2l0XG5yYWNlXG53aW5kb3dcbnN0b3JlXG5zdW1tZXJcbnRyYWluXG5zbGVlcFxucHJvdmVcbmxvbmVcbmxlZ1xuZXhlcmNpc2VcbndhbGxcbmNhdGNoXG5tb3VudFxud2lzaFxuc2t5XG5ib2FyZFxuam95XG53aW50ZXJcbnNhdFxud3JpdHRlblxud2lsZFxuaW5zdHJ1bWVudFxua2VwdFxuZ2xhc3NcbmdyYXNzXG5jb3dcbmpvYlxuZWRnZVxuc2lnblxudmlzaXRcbnBhc3RcbnNvZnRcbmZ1blxuYnJpZ2h0XG5nYXNcbndlYXRoZXJcbm1vbnRoXG5taWxsaW9uXG5iZWFyXG5maW5pc2hcbmhhcHB5XG5ob3BlXG5mbG93ZXJcbmNsb3RoZVxuc3RyYW5nZVxuZ29uZVxuanVtcFxuYmFieVxuZWlnaHRcbnZpbGxhZ2Vcbm1lZXRcbnJvb3RcbmJ1eVxucmFpc2VcbnNvbHZlXG5tZXRhbFxud2hldGhlclxucHVzaFxuc2V2ZW5cbnBhcmFncmFwaFxudGhpcmRcbnNoYWxsXG5oZWxkXG5oYWlyXG5kZXNjcmliZVxuY29va1xuZmxvb3JcbmVpdGhlclxucmVzdWx0XG5idXJuXG5oaWxsXG5zYWZlXG5jYXRcbmNlbnR1cnlcbmNvbnNpZGVyXG50eXBlXG5sYXdcbmJpdFxuY29hc3RcbmNvcHlcbnBocmFzZVxuc2lsZW50XG50YWxsXG5zYW5kXG5zb2lsXG5yb2xsXG50ZW1wZXJhdHVyZVxuZmluZ2VyXG5pbmR1c3RyeVxudmFsdWVcbmZpZ2h0XG5saWVcbmJlYXRcbmV4Y2l0ZVxubmF0dXJhbFxudmlld1xuc2Vuc2VcbmVhclxuZWxzZVxucXVpdGVcbmJyb2tlXG5jYXNlXG5taWRkbGVcbmtpbGxcbnNvblxubGFrZVxubW9tZW50XG5zY2FsZVxubG91ZFxuc3ByaW5nXG5vYnNlcnZlXG5jaGlsZFxuc3RyYWlnaHRcbmNvbnNvbmFudFxubmF0aW9uXG5kaWN0aW9uYXJ5XG5taWxrXG5zcGVlZFxubWV0aG9kXG5vcmdhblxucGF5XG5hZ2VcbnNlY3Rpb25cbmRyZXNzXG5jbG91ZFxuc3VycHJpc2VcbnF1aWV0XG5zdG9uZVxudGlueVxuY2xpbWJcbmNvb2xcbmRlc2lnblxucG9vclxubG90XG5leHBlcmltZW50XG5ib3R0b21cbmtleVxuaXJvblxuc2luZ2xlXG5zdGlja1xuZmxhdFxudHdlbnR5XG5za2luXG5zbWlsZVxuY3JlYXNlXG5ob2xlXG50cmFkZVxubWVsb2R5XG50cmlwXG5vZmZpY2VcbnJlY2VpdmVcbnJvd1xubW91dGhcbmV4YWN0XG5zeW1ib2xcbmRpZVxubGVhc3RcbnRyb3VibGVcbnNob3V0XG5leGNlcHRcbndyb3RlXG5zZWVkXG50b25lXG5qb2luXG5zdWdnZXN0XG5jbGVhblxuYnJlYWtcbmxhZHlcbnlhcmRcbnJpc2VcbmJhZFxuYmxvd1xub2lsXG5ibG9vZFxudG91Y2hcbmdyZXdcbmNlbnRcbm1peFxudGVhbVxud2lyZVxuY29zdFxubG9zdFxuYnJvd25cbndlYXJcbmdhcmRlblxuZXF1YWxcbnNlbnRcbmNob29zZVxuZmVsbFxuZml0XG5mbG93XG5mYWlyXG5iYW5rXG5jb2xsZWN0XG5zYXZlXG5jb250cm9sXG5kZWNpbWFsXG5nZW50bGVcbndvbWFuXG5jYXB0YWluXG5wcmFjdGljZVxuc2VwYXJhdGVcbmRpZmZpY3VsdFxuZG9jdG9yXG5wbGVhc2VcbnByb3RlY3Rcbm5vb25cbndob3NlXG5sb2NhdGVcbnJpbmdcbmNoYXJhY3RlclxuaW5zZWN0XG5jYXVnaHRcbnBlcmlvZFxuaW5kaWNhdGVcbnJhZGlvXG5zcG9rZVxuYXRvbVxuaHVtYW5cbmhpc3RvcnlcbmVmZmVjdFxuZWxlY3RyaWNcbmV4cGVjdFxuY3JvcFxubW9kZXJuXG5lbGVtZW50XG5oaXRcbnN0dWRlbnRcbmNvcm5lclxucGFydHlcbnN1cHBseVxuYm9uZVxucmFpbFxuaW1hZ2luZVxucHJvdmlkZVxuYWdyZWVcbnRodXNcbmNhcGl0YWxcbndvbid0XG5jaGFpclxuZGFuZ2VyXG5mcnVpdFxucmljaFxudGhpY2tcbnNvbGRpZXJcbnByb2Nlc3Ncbm9wZXJhdGVcbmd1ZXNzXG5uZWNlc3NhcnlcbnNoYXJwXG53aW5nXG5jcmVhdGVcbm5laWdoYm9yXG53YXNoXG5iYXRcbnJhdGhlclxuY3Jvd2RcbmNvcm5cbmNvbXBhcmVcbnBvZW1cbnN0cmluZ1xuYmVsbFxuZGVwZW5kXG5tZWF0XG5ydWJcbnR1YmVcbmZhbW91c1xuZG9sbGFyXG5zdHJlYW1cbmZlYXJcbnNpZ2h0XG50aGluXG50cmlhbmdsZVxucGxhbmV0XG5odXJyeVxuY2hpZWZcbmNvbG9ueVxuY2xvY2tcbm1pbmVcbnRpZVxuZW50ZXJcbm1ham9yXG5mcmVzaFxuc2VhcmNoXG5zZW5kXG55ZWxsb3dcbmd1blxuYWxsb3dcbnByaW50XG5kZWFkXG5zcG90XG5kZXNlcnRcbnN1aXRcbmN1cnJlbnRcbmxpZnRcbnJvc2VcbmNvbnRpbnVlXG5ibG9ja1xuY2hhcnRcbmhhdFxuc2VsbFxuc3VjY2Vzc1xuY29tcGFueVxuc3VidHJhY3RcbmV2ZW50XG5wYXJ0aWN1bGFyXG5kZWFsXG5zd2ltXG50ZXJtXG5vcHBvc2l0ZVxud2lmZVxuc2hvZVxuc2hvdWxkZXJcbnNwcmVhZFxuYXJyYW5nZVxuY2FtcFxuaW52ZW50XG5jb3R0b25cbmJvcm5cbmRldGVybWluZVxucXVhcnRcbm5pbmVcbnRydWNrXG5ub2lzZVxubGV2ZWxcbmNoYW5jZVxuZ2F0aGVyXG5zaG9wXG5zdHJldGNoXG50aHJvd1xuc2hpbmVcbnByb3BlcnR5XG5jb2x1bW5cbm1vbGVjdWxlXG5zZWxlY3Rcbndyb25nXG5ncmF5XG5yZXBlYXRcbnJlcXVpcmVcbmJyb2FkXG5wcmVwYXJlXG5zYWx0XG5ub3NlXG5wbHVyYWxcbmFuZ2VyXG5jbGFpbVxuY29udGluZW50XG5veHlnZW5cbnN1Z2FyXG5kZWF0aFxucHJldHR5XG5za2lsbFxud29tZW5cbnNlYXNvblxuc29sdXRpb25cbm1hZ25ldFxuc2lsdmVyXG50aGFua1xuYnJhbmNoXG5tYXRjaFxuc3VmZml4XG5lc3BlY2lhbGx5XG5maWdcbmFmcmFpZFxuaHVnZVxuc2lzdGVyXG5zdGVlbFxuZGlzY3Vzc1xuZm9yd2FyZFxuc2ltaWxhclxuZ3VpZGVcbmV4cGVyaWVuY2VcbnNjb3JlXG5hcHBsZVxuYm91Z2h0XG5sZWRcbnBpdGNoXG5jb2F0XG5tYXNzXG5jYXJkXG5iYW5kXG5yb3BlXG5zbGlwXG53aW5cbmRyZWFtXG5ldmVuaW5nXG5jb25kaXRpb25cbmZlZWRcbnRvb2xcbnRvdGFsXG5iYXNpY1xuc21lbGxcbnZhbGxleVxubm9yXG5kb3VibGVcbnNlYXRcbmFycml2ZVxubWFzdGVyXG50cmFja1xucGFyZW50XG5zaG9yZVxuZGl2aXNpb25cbnNoZWV0XG5zdWJzdGFuY2VcbmZhdm9yXG5jb25uZWN0XG5wb3N0XG5zcGVuZFxuY2hvcmRcbmZhdFxuZ2xhZFxub3JpZ2luYWxcbnNoYXJlXG5zdGF0aW9uXG5kYWRcbmJyZWFkXG5jaGFyZ2VcbnByb3BlclxuYmFyXG5vZmZlclxuc2VnbWVudFxuc2xhdmVcbmR1Y2tcbmluc3RhbnRcbm1hcmtldFxuZGVncmVlXG5wb3B1bGF0ZVxuY2hpY2tcbmRlYXJcbmVuZW15XG5yZXBseVxuZHJpbmtcbm9jY3VyXG5zdXBwb3J0XG5zcGVlY2hcbm5hdHVyZVxucmFuZ2VcbnN0ZWFtXG5tb3Rpb25cbnBhdGhcbmxpcXVpZFxubG9nXG5tZWFudFxucXVvdGllbnRcbnRlZXRoXG5zaGVsbFxubmVja2A7XG5cblxubGV0IHdoaXRlc3BhY2UgPSAvW1xcclxcbl0rLztcbmxldCB3b3JkcyA9IHRvcDEwMDAuc3BsaXQod2hpdGVzcGFjZSk7XG5sZXQgdmFsaWR3b3JkcyA9IHdvcmRzLmZpbHRlcih3b3JkID0+IHdvcmQubGVuZ3RoID4gMik7XG5cbmV4cG9ydCBjb25zdCBzYW1wbGVUZXh0ID0gKHJhbmdlID0gMTAwMCkgPT4ge1xuICBjb25zb2xlLmxvZyh3b3Jkcy5sZW5ndGgpO1xuICByZXR1cm4gdmFsaWR3b3Jkcy5zbGljZSgwLCByYW5nZSk7XG59OyIsImltcG9ydCB7IGFkZENvb3JkaW5hdGVzLCByZXBsYWNlQ2hpbGRyZW4sIGluY2x1ZGVzQ29vcmRpbmF0ZXMgfSBmcm9tIFwiLi91dGlsXCI7XG5pbXBvcnQgU3BlbGwgZnJvbSBcIi4vc3BlbGxcIjtcblxuZXhwb3J0IGNsYXNzIFNuYWtlIHtcbiAgICBjb25zdHJ1Y3RvcihncmlkLCBwb3NpdGlvbikge1xuICAgICAgICB0aGlzLm1vdmVzID0gWzAsMF07XG4gICAgICAgIHRoaXMucG9zaXRpb25zID0gW3Bvc2l0aW9uXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cyA9IFtdO1xuICAgICAgICBsZXQgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBoZWFkLmNsYXNzTmFtZSA9ICdzbmFrZWhlYWQnO1xuICAgICAgICBoZWFkLmlubmVyVGV4dCA9IFwi8J+QjVwiO1xuICAgICAgICB0aGlzLmJvZHkgPSBbaGVhZF07IC8vIFt7IGVsZW1lbnQ6IDxzcGFuPiwgcG9zOiB9XVxuICAgICAgICB0aGlzLmdyaWQgPSBncmlkO1xuICAgICAgICBsZXQgaW5zdCA9IG5ldyBTcGVsbCh0aGlzLmdyaWQpO1xuICAgICAgICBpbnN0LnN0b3JlZFRleHQgPSAnYXJyb3cga2V5cyB0byBtb3ZlJztcbiAgICAgICAgaW5zdC5tb3ZlcyA9IFswLCAxXTtcbiAgICAgICAgaW5zdC5jYXN0KFsncmVkJywgJ2JsdWUnXSk7XG4gICAgICAgIHRoaXMuZ3JpZC5zcGVsbHMucHVzaChpbnN0KTtcbiAgICB9XG5cbiAgICBpc0VtcHR5KHBvcykge1xuICAgICAgICBsZXQgcmVzID0gIXRoaXMuZ3JpZC5nZXRFbGVtZW50KHBvcykuZmlyc3RDaGlsZDtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBnZXRQb2ludHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9ucy5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIGhhbmRsZUxvc3MoKSB7XG5cbiAgICAgICAgdGhpcy5jbGVhclByZXZpb3VzUmVuZGVyKCk7XG4gICAgICAgIGxldCBsb3NlclNwZWxsID0gbmV3IFNwZWxsKHRoaXMuZ3JpZCk7XG5cbiAgICAgICAgbG9zZXJTcGVsbC5jYXN0KFsnY2lyY2xlJywnYmx1ZScsJ3NhbnMnLCdyaWdodCcsJ2JpZyddKTtcbiAgICAgICAgbG9zZXJTcGVsbC5zdG9yZWRUZXh0ID0gJ0dhbWUgb3ZlcjogJyArICh0aGlzLmJvZHkubGVuZ3RoIC0gMSkgKyAnIFBPSU5UUyc7XG4gICAgICAgIHRoaXMuZ3JpZC5zcGVsbHMucHVzaChsb3NlclNwZWxsKTtcbiAgICAgICAgdGhpcy5ncmlkLmN1cnJlbnRTcGVsbCA9IG5ldyBTcGVsbCh0aGlzLmdyaWQpO1xuICAgIH1cblxuICAgIGNsZWFyUHJldmlvdXNSZW5kZXIoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5mb3JFYWNoKGVsZSA9PiBlbGUucmVtb3ZlKCkpO1xuICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMgPSBbXTtcbiAgICB9XG5cbiAgICBvdXRPZkJvdW5kcyhwb3MpIHtcbiAgICAgICAgcmV0dXJuIChwb3NbMF0gPj0gdGhpcy5ncmlkLmhlaWdodCB8fCBcbiAgICAgICAgICAgIHBvc1swXSA8IDAgfHwgXG4gICAgICAgICAgICBwb3NbMV0gPj0gdGhpcy5ncmlkLndpZHRoIHx8IFxuICAgICAgICAgICAgcG9zWzFdIDwgMClcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICBpZiAoIXRoaXMubW92ZXNbMF0gJiYgIXRoaXMubW92ZXNbMV0pIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gXG5cbiAgICAgICAgbGV0IG5leHRQb3NpdGlvbiA9IGFkZENvb3JkaW5hdGVzKHRoaXMucG9zaXRpb25zWzBdLCB0aGlzLm1vdmVzLCB0aGlzLmdyaWQpXG5cbiAgICAgICAgaWYgKGluY2x1ZGVzQ29vcmRpbmF0ZXModGhpcy5wb3NpdGlvbnMsIG5leHRQb3NpdGlvbikgfHwgXG4gICAgICAgICAgICB0aGlzLm91dE9mQm91bmRzKG5leHRQb3NpdGlvbikpIHtcblxuICAgICAgICAgICAgdGhpcy5oYW5kbGVMb3NzKClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5pc0VtcHR5KG5leHRQb3NpdGlvbikpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25zLnVuc2hpZnQobmV4dFBvc2l0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuZWF0KG5leHRQb3NpdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25zLnVuc2hpZnQobmV4dFBvc2l0aW9uKTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25zLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGVhdChwb3MpIHtcbiAgICAgICAgbGV0IHNuYWNrID0gdGhpcy5ncmlkLmdldEVsZW1lbnQocG9zKS5maXJzdENoaWxkO1xuXG4gICAgICAgIHRoaXMuYm9keS5wdXNoKHNuYWNrKTtcblxuICAgIH1cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQcmV2aW91c1JlbmRlcigpO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb25zLmZvckVhY2goKHBvcywgaSkgPT4ge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmdyaWQuZ2V0RWxlbWVudChwb3MpO1xuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5ib2R5W2ldO1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZCgnc25ha2UnKVxuICAgICAgICAgICAgcmVwbGFjZUNoaWxkcmVuKGVsZW1lbnQsIGNoaWxkKTtcblxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzLnB1c2goY2hpbGQpO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG5cblxufSIsImltcG9ydCBHcmlkIGZyb20gJy4vZ3JpZCc7XG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4vdXRpbCdcbmltcG9ydCBrZXl3b3JkSW5kZXggZnJvbSAnLi9rZXl3b3Jkcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwZWxsIHtcbiAgICBjb25zdHJ1Y3RvcihncmlkKSB7XG4gICAgICAgIHRoaXMucGVyRnJhbWVLZXl3b3JkcyA9IFtdO1xuICAgICAgICB0aGlzLmFwcGxpZWRLZXl3b3JkcyA9IFtdO1xuICAgICAgICB0aGlzLmdyaWQgPSBncmlkO1xuXG5cbiAgICAgICAgdGhpcy5jdXJyZW50UG9zID0gdGhpcy5ncmlkLnJhbmRvbVBvc2l0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5zdG9yZWRUZXh0ID0gJyc7XG4gICAgICAgIHRoaXMuYWN0aXZlVGV4dCA9ICcnO1xuICAgICAgICB0aGlzLmtleXdvcmRJbmRleCA9IGtleXdvcmRJbmRleDtcbiAgICAgICAgdGhpcy5yb3RhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLmNsYXNzQXJyID0gW107XG4gICAgICAgIHRoaXMubW92ZXMgPSBbMCwwXTtcbiAgICAgICAgdGhpcy5jb2xvcnMgPSBbXTtcbiAgICAgICAgdGhpcy5mb250ID0gJ21vbm8nO1xuICAgICAgICB0aGlzLnNpemUgPSAxNTtcblxuICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMgPSBbXTtcbiAgICB9XG5cbiAgICByZWNlaXZlKGlucHV0KSB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGV4dCArPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLmV4dHJhY3RLZXl3b3JkcygpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIGRlbGV0ZUNoYXJhY3RlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlVGV4dCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVUZXh0ID0gdGhpcy5hY3RpdmVUZXh0LnNsaWNlKDAsIHRoaXMuYWN0aXZlVGV4dC5sZW5ndGggLSAxKTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBjYXN0KGtleXdvcmRzKSB7XG4gICAgICAgIGlmICghKGtleXdvcmRzIGluc3RhbmNlb2YgQXJyYXkpKSBrZXl3b3JkcyA9IFtrZXl3b3Jkc107XG4gICAgICAgIGNvbnN0IG5vdFN0b3JlZCA9IFsnYWxsJywgJ2NsZWFyJywgJ3NwZWxsJywgJ3NuYWtlJywgJ3Rlc3QnXTtcblxuICAgICAgICBrZXl3b3Jkcy5mb3JFYWNoKGt3ID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwbHlLZXl3b3JkKGt3KTtcbiAgICAgICAgICAgIGlmICghbm90U3RvcmVkLmluY2x1ZGVzKGt3KSkgdGhpcy5hcHBsaWVkS2V5d29yZHMucHVzaChrdyk7IFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgYXBwbHlLZXl3b3JkKGt3KSB7XG4gICAgICAgIGxldCB7IGFjdGlvbiwgdHlwZSB9ID0gdGhpcy5rZXl3b3JkSW5kZXhba3ddO1xuICAgICAgICBcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdtb3ZlJzpcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVzID0gVXRpbC5hZGRDb29yZGluYXRlcyh0aGlzLm1vdmVzLCBhY3Rpb24pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb2xvcic6IFxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JzLnB1c2goYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JvdGF0ZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGUgPSB0aGlzLnJvdGF0ZSA/IG51bGwgOiAncm90YXRlJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZvbnQnOlxuICAgICAgICAgICAgICAgIHRoaXMuZW1vamkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvbnQgPSBhY3Rpb247XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzbmFrZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLmZyYW1lcmF0ZSA9IDE1MDtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQucGxheVNuYWtlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzcGVlZCc6XG4gICAgICAgICAgICAgICAgbGV0IG5ld2ZwcyA9IE1hdGguZmxvb3IodGhpcy5ncmlkLmZyYW1lcmF0ZSAqIGFjdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKG5ld2ZwcyA+IDQwMDApIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5mcmFtZXJhdGUgPSA0MDAwMDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld2ZwcyA8IDEwMCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkLmZyYW1lcmF0ZSA9IDEwMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkLmZyYW1lcmF0ZSA9IG5ld2ZwcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlZFRleHQgKz0gYWN0aW9uO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZm9udHNpemUnOlxuICAgICAgICAgICAgICAgIGxldCBuZXdzaXplID0gTWF0aC5mbG9vcih0aGlzLnNpemUgKiBhY3Rpb24pO1xuICAgICAgICAgICAgICAgIGlmIChuZXdzaXplID4gNDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplID0gNDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdzaXplIDwgNikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSA2O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSA9IG5ld3NpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2lyY2xlJzpcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzQXJyLnB1c2goJ2NpcmNsZScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2xlYXInOlxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5zcGVsbHMuZm9yRWFjaChzcGVsbCA9PiBzcGVsbC5jbGVhclByZXZpb3VzUmVuZGVyKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5zcGVsbHMgPSBbXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Vtb2ppJzpcbiAgICAgICAgICAgICAgICB0aGlzLmVtb2ppID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NwZWxsJzpcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlUmFuZG9tU3BlbGwoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FsbCc6XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnNwZWxscy5mb3JFYWNoKHNwZWxsID0+IHNwZWxsLmNhc3QodGhpcy5hcHBsaWVkS2V5d29yZHMpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3R5cGV0ZXN0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQucGxheVR5cGV0ZXN0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZXh0cmFjdEtleXdvcmRzKCkge1xuICAgICAgICBpZiAoIXRoaXMuY29udGFpbnNLZXl3b3JkKHRoaXMuYWN0aXZlVGV4dCkpIHJldHVybjtcblxuICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSB0aGlzLmFjdGl2ZVRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdWJzdHIgPSB0aGlzLmFjdGl2ZVRleHQuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICBsZXQga3cgPSB0aGlzLmNvbnRhaW5zS2V5d29yZChzdWJzdHIpO1xuXG4gICAgICAgICAgICBpZiAoa3cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlZFRleHQgKz0gc3Vic3RyO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FzdChrdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVUZXh0ID0gdGhpcy5hY3RpdmVUZXh0LnNsaWNlKGkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdEtleXdvcmRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgY29udGFpbnNLZXl3b3JkKHN0cikge1xuICAgICAgICBsZXQga3dzID0gT2JqZWN0LmtleXModGhpcy5rZXl3b3JkSW5kZXgpO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQga3cgb2Yga3dzKSB7IFxuICAgICAgICAgICAgaWYgKHN0ci5pbmNsdWRlcyhrdykpIHJldHVybiBrdztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY2xlYXJQcmV2aW91c1JlbmRlcigpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzLmZvckVhY2goZWxlID0+IGVsZS5yZW1vdmUoKSk7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UG9zID0gVXRpbC5hZGRDb29yZGluYXRlcyh0aGlzLmN1cnJlbnRQb3MsIHRoaXMubW92ZXMpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHNodWZmbGVDb2xvcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbG9ycy5sZW5ndGggPT09IDApIHJldHVybiAnbm9uZSc7XG4gICAgICAgIGlmICh0aGlzLmNvbG9ycy5sZW5ndGggPT09IDEgKSByZXR1cm4gdGhpcy5jb2xvcnNbMF1cbiAgICAgICAgdGhpcy5jb2xvcnMucHVzaCh0aGlzLmNvbG9ycy5zaGlmdCgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzWzBdO1xuICAgIH1cblxuICAgIGdlbmVyYXRlUmFuZG9tU3BlbGwoKSB7XG4gICAgICAgIGxldCBrZXl3b3JkcyA9IE9iamVjdC5rZXlzKHRoaXMua2V5d29yZEluZGV4KTtcbiAgICAgICAgY29uc29sZS5sb2coa2V5d29yZHMpO1xuICAgICAgICBsZXQgYXBwbGllZEtleXdvcmRzID0gJyc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGxldCByYW5kSWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGtleXdvcmRzLmxlbmd0aCAtIDYpKSArIDY7IFxuICAgICAgICAgICAgY29uc29sZS5sb2cocmFuZElkeCk7XG4gICAgICAgICAgICBhcHBsaWVkS2V5d29yZHMgKz0ga2V5d29yZHNbcmFuZElkeF07XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYXBwbGllZEtleXdvcmRzKTtcbiAgICAgICAgbGV0IHNwZWxsID0gbmV3IFNwZWxsKHRoaXMuZ3JpZCk7XG4gICAgICAgIHNwZWxsLnJlY2VpdmUoYXBwbGllZEtleXdvcmRzKTtcbiAgICAgICAgdGhpcy5ncmlkLnNwZWxscy5wdXNoKHNwZWxsKTtcbiAgICAgICAgcmV0dXJuIHNwZWxsO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5jbGVhclByZXZpb3VzUmVuZGVyKCk7XG5cbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLnN0b3JlZFRleHQgKyB0aGlzLmFjdGl2ZVRleHQ7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmN1cnJlbnRQb3M7XG4gICAgICAgIGxldCBkZWx0YTtcbiAgICAgICAgaWYgKHRoaXMubW92ZXNbMF0gPT09IDAgJiYgdGhpcy5tb3Zlc1sxXSA9PT0gMCkge1xuICAgICAgICAgICAgZGVsdGEgPSBbMCwxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB4ID0gTWF0aC5zaWduKHRoaXMubW92ZXNbMF0pO1xuICAgICAgICAgICAgbGV0IHkgPSBNYXRoLnNpZ24odGhpcy5tb3Zlc1sxXSk7XG4gICAgICAgICAgICBkZWx0YSA9IFt4LHldO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsZXR0ZXIgPSB0aGlzLmVtb2ppID8gVXRpbC50b0Vtb2ppKHRleHRbaV0pIDogdGV4dFtpXTtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCh0aGlzLmZvbnQsIHRoaXMucm90YXRlLCAnYWN0aXZlJywgLi4udGhpcy5jbGFzc0Fycik7XG4gICAgICAgICAgICBzcGFuLnN0eWxlLmZvbnRTaXplID0gdGhpcy5zaXplICsgJ3B4JztcbiAgICAgICAgICAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5zaHVmZmxlQ29sb3JzKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jb2xvcnMubGVuZ3RoID4gMCkgc3Bhbi5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7IFxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KHBvcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFV0aWwucmVwbGFjZUNoaWxkcmVuKGVsZW1lbnQsIHNwYW4pO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzLnB1c2goc3Bhbik7XG4gICAgICAgICAgICBwb3MgPSBVdGlsLmFkZENvb3JkaW5hdGVzKHBvcywgZGVsdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5jdXJyZW50U3BlbGwgPT09IHRoaXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIHNwYW4uY2xhc3NOYW1lID0gJ2N1cnNvcic7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5ncmlkLmdldEVsZW1lbnQocG9zKTtcbiAgICAgICAgICAgIFV0aWwucmVwbGFjZUNoaWxkcmVuKGVsZW1lbnQsIHNwYW4pO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzLnB1c2goc3Bhbik7XG4gICAgICAgIH07XG4gICAgfVxuXG59XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IHNhbXBsZVRleHQgfSBmcm9tIFwiLi9zYW1wbGV0ZXh0XCI7XG5pbXBvcnQgeyByZXBsYWNlQ2hpbGRyZW4sIGFkZENvb3JkaW5hdGVzIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5leHBvcnQgY2xhc3MgVHlwZVRlc3Qge1xuICAgIGNvbnN0cnVjdG9yKGdyaWQpIHtcbiAgICAgICAgdGhpcy5ncmlkID0gZ3JpZDtcbiAgICAgICAgdGhpcy53aWR0aCA9IE1hdGguZmxvb3IodGhpcy5ncmlkLndpZHRoICogMC43KTtcbiAgICAgICAgLy8gdGhpcy5oZWlnaHQgPSBNYXRoLmZsb29yKHRoaXMuZ3JpZC5oZWlnaHQgKiAwLjgpOyBcbiAgICAgICAgdGhpcy5wb3MgPSB0aGlzLmNhbGN1bGF0ZVBvcygpO1xuICAgICAgICB0aGlzLnVzZXJXb3JkcyA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRXb3JkID0gMDtcbiAgICAgICAgdGhpcy5iYWRrZXlzdHJva2VzID0gMDtcbiAgICAgICAgdGhpcy5yZW5kZXJlZFdvcmRCZWdpbiA9IDA7XG4gICAgICAgIHRoaXMucmVuZGVyZWRXb3JkRW5kID0gMDtcbiAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzPSBbXTtcbiAgICAgICAgdGhpcy5udW1Sb3dzID0gMztcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWU7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBcIlwiO1xuXG4gICAgICAgIHRoaXMudG9wV29yZHMgPSBzYW1wbGVUZXh0KCk7XG4gICAgICAgIHRoaXMuZW5zdXJlVXNlcldvcmRzKCk7XG4gICAgfVxuXG4gICAgb3ZlcigpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2xlYXJQcmV2aW91c1JlbmRlcigpO1xuICAgICAgICBsZXQgbG9zZXJTcGVsbCA9IG5ldyBTcGVsbCh0aGlzLmdyaWQpO1xuXG4gICAgICAgIGxvc2VyU3BlbGwuY2FzdChbXCJiaWdcIiwgXCJyZWRcIiwgXCJ5ZWxsb3dcIiwgXCJtb25vXCIsIFwicmlnaHRcIiwgJ2Rvd24nLCBcImJpZ1wiXSk7XG4gICAgICAgIGxvc2VyU3BlbGwuc3RvcmVkVGV4dCA9XG4gICAgICAgICAodGhpcy5jYWxjdWxhdGVXUE0oKSArICcgV1BNJyk7XG4gICAgICAgIHRoaXMuZ3JpZC5zcGVsbHMucHVzaChsb3NlclNwZWxsKTtcblxuICAgICAgICB0aGlzLmdyaWQuZXhpdFR5cGV0ZXN0KCk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlV1BNKCkge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudFRpbWUpIHJldHVybiAwO1xuICAgICAgICBsZXQgY29ycmVjdEtleXN0cm9rZXMgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50V29yZDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgd29yZCA9IHRoaXMudXNlcldvcmRzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIXdvcmQubWlzdHlwZWQpIHtcbiAgICAgICAgICAgICAgICBjb3JyZWN0S2V5c3Ryb2tlcyArPSAod29yZC53b3JkLmxlbmd0aCArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoY29ycmVjdEtleXN0cm9rZXMgLyA1KTtcbiAgICB9XG5cbiAgICBjbGVhclByZXZpb3VzUmVuZGVyKCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMuZm9yRWFjaChlbGUgPT4gZWxlLnJlbW92ZSgpKTtcbiAgICB9XG5cbiAgICB0aW1lc1VwKCkge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudFRpbWUpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IHRpbWVMZWZ0ID1cbiAgICAgICAgICA2MCAtIE1hdGguZmxvb3IoKG5vdy5nZXRUaW1lKCkgLSB0aGlzLmN1cnJlbnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwKTtcbiAgICAgICAgcmV0dXJuICh0aW1lTGVmdCA8IDApO1xuICAgICAgICBcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQcmV2aW91c1JlbmRlcigpO1xuICAgICAgICBpZiAodGhpcy50aW1lc1VwKCkpIHtcbiAgICAgICAgICAgIHRoaXMub3ZlcigpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVuZGVyUGFkZGluZygpO1xuICAgICAgICB0aGlzLnJlbmRlcldvcmREaXNwbGF5KClcbiAgICAgICAgdGhpcy5yZW5kZXJJbnB1dCgpO1xuXG4gICAgfSAgXG4gICAgXG4gICAgcmVuZGVyUGFkZGluZygpIHtcbiAgICAgICAgbGV0IG51bVJvd3MgPSB0aGlzLm51bVJvd3MgKyA3OyBcbiAgICAgICAgbGV0IHRvcCA9IHRoaXMucG9zWzBdIC0gMjtcbiAgICAgICAgbGV0IGxlZnQgPSB0aGlzLnBvc1sxXSAtIDI7XG4gICAgICAgIGxldCB3aWR0aCA9IHRoaXMud2lkdGggKyA0O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUm93czsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHdpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgbGV0IGVsID0gdGhpcy5ncmlkLmdldEVsZW1lbnQoW2kgKyB0b3AsIGogKyBsZWZ0XSk7XG4gICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NOYW1lID0gJ3Rlc3QtcGFkZGluZyc7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgICAgIHJlcGxhY2VDaGlsZHJlbihlbCwgY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVySW5wdXQoKSB7XG4gICAgICAgIGxldCB0b3AgPSB0aGlzLm51bVJvd3MgKyB0aGlzLnBvc1swXSArIDI7XG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5wb3NbMV07XG4gICAgICAgIGxldCBpbnB1dHdpZHRoID0gdGhpcy53aWR0aCAtIDY7XG4gICAgICAgIGxldCB0aW1lU3RhcnQgPSB0aGlzLndpZHRoO1xuICAgICAgICBsZXQgdGltZSA9IHRoaXMuY2FsY3VsYXRlVGltZSgpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dHdpZHRoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgbGV0IGVsID0gdGhpcy5ncmlkLmdldEVsZW1lbnQoW3RvcCwgaSArIGxlZnRdKTtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoXCJ0ZXN0LWlucHV0XCIsICd0eXBldGVzdCcpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzLnB1c2goY2hpbGQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dFtpXSkgY2hpbGQuaW5uZXJUZXh0ID0gdGhpcy5pbnB1dFtpXTtcbiAgICAgICAgICAgIGlmIChpID09PSB0aGlzLmlucHV0Lmxlbmd0aCkgY2hpbGQuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgICAgICAgICAgcmVwbGFjZUNoaWxkcmVuKGVsLCBjaGlsZCk7XG4gICAgICAgICAgICB0aW1lU3RhcnQgPSBpICsgbGVmdCArIDM7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBsZXQgZWwgPSB0aGlzLmdyaWQuZ2V0RWxlbWVudChbdG9wLCBpICsgdGltZVN0YXJ0XSk7XG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKFwidGVzdC10aW1lXCIsIFwidHlwZXRlc3RcIik7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMucHVzaChjaGlsZCk7XG4gICAgICAgICAgICBjaGlsZC5pbm5lclRleHQgPSB0aW1lW2ldO1xuICAgICAgICAgICAgcmVwbGFjZUNoaWxkcmVuKGVsLCBjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIHJlbmRlcldvcmREaXNwbGF5KCkge1xuICAgICAgICBsZXQgd29yZHNSZW5kZXJlZCA9IDA7XG4gICAgICAgIGxldCBmaXJzdENvbExlbmd0aCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5udW1Sb3dzIDsgcm93ICs9IDIpIHtcblxuICAgICAgICAgICAgbGV0IGNvbCA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoY29sIDw9IHRoaXMud2lkdGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgd29yZElkeCA9IHRoaXMucmVuZGVyZWRXb3JkQmVnaW4gKyB3b3Jkc1JlbmRlcmVkO1xuICAgICAgICAgICAgICAgIGxldCByZW5kZXJlZFdvcmQgPSB0aGlzLnVzZXJXb3Jkc1t3b3JkSWR4XTtcbiAgICAgICAgICAgICAgICBpZiAoY29sICsgcmVuZGVyZWRXb3JkLndvcmQubGVuZ3RoID4gdGhpcy53aWR0aCkgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBsZXQgcmVuZGVyQ29vcmQgPSBbcm93LCBjb2xdO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyV29yZCh3b3JkSWR4LCByZW5kZXJDb29yZCk7XG4gICAgICAgICAgICAgICAgd29yZHNSZW5kZXJlZCArPSAxO1xuICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb2wgKz0gcmVuZGVyZWRXb3JkLndvcmQubGVuZ3RoICsgMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJvdyA9PT0gMCkgZmlyc3RDb2xMZW5ndGggPSB3b3Jkc1JlbmRlcmVkO1xuXG4gICAgICAgIH1cbiBcbiAgICAgICAgdGhpcy5yZW5kZXJlZFdvcmRFbmQgPSB0aGlzLnJlbmRlcmVkV29yZEJlZ2luICsgZmlyc3RDb2xMZW5ndGg7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFdvcmQgPj0gdGhpcy5yZW5kZXJlZFdvcmRFbmQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRXb3JkQmVnaW4gPSB0aGlzLmN1cnJlbnRXb3JkO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGNhbGN1bGF0ZVRpbWUoKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXRoaXMuY3VycmVudFRpbWUpIHJldHVybiAnMTowMCc7XG5cbiAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCB0aW1lTGVmdCA9IDYwIC0gTWF0aC5mbG9vcigobm93LmdldFRpbWUoKSAtIHRoaXMuY3VycmVudFRpbWUuZ2V0VGltZSgpKSAvIDEwMDApO1xuXG4gICAgICAgIGlmICh0aW1lTGVmdCA8IDApIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuICcwOjAwJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtaW4gPSBNYXRoLmZsb29yKHRpbWVMZWZ0IC8gNjApO1xuICAgICAgICBsZXQgc2VjID0gdGltZUxlZnQgJSA2MDtcbiAgICAgICAgc2VjID0gKHNlYyA8IDEwKSA/ICcwJyArIHNlYyA6IHNlYy50b1N0cmluZygpO1xuICAgICAgICBsZXQgZm9ybWF0dGVkVGltZSA9IG1pbiArICc6JyArIHNlYztcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZFRpbWU7XG4gICAgfVxuXG4gICAgcmVuZGVyV29yZChpZHgsIHBvcykge1xuICAgICAgICBsZXQgdHlwZVN0YXJ0ID0gYWRkQ29vcmRpbmF0ZXModGhpcy5wb3MsIFswLDBdKVxuICAgICAgICBsZXQgd29yZEJlZ2luID0gYWRkQ29vcmRpbmF0ZXModHlwZVN0YXJ0LCBwb3MpO1xuICAgICAgICBsZXQgd29yZCA9IHRoaXMudXNlcldvcmRzW2lkeF07XG5cbiAgICAgICAgbGV0IHN0YXR1cyA9ICdub25lJztcblxuICAgICAgICBpZiAod29yZC5taXN0eXBlZCkge1xuICAgICAgICAgICAgc3RhdHVzID0gJ3JlZCc7XG4gICAgICAgIH0gZWxzZSBpZiAoaWR4IDwgdGhpcy5jdXJyZW50V29yZCkge1xuICAgICAgICAgICAgc3RhdHVzID0gJ3N1Y2Nlc3MnO1xuICAgICAgICB9IGVsc2UgaWYgKGlkeCA9PT0gdGhpcy5jdXJyZW50V29yZCkge1xuICAgICAgICAgICAgbGV0IG1hdGNoZXMgPSB0aGlzLnVzZXJXb3Jkc1t0aGlzLmN1cnJlbnRXb3JkXS53b3JkID09PSB0aGlzLmlucHV0O1xuICAgICAgICAgICAgc3RhdHVzID0gbWF0Y2hlcyA/ICdzdWNjZXNzJyA6ICdjdXJyZW50JztcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmQud29yZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGVsZUNvb3JkID0gYWRkQ29vcmRpbmF0ZXMod29yZEJlZ2luLCBbMCwgaV0pXG4gICAgICAgICAgICBsZXQgZWxlID0gdGhpcy5ncmlkLmdldEVsZW1lbnQoZWxlQ29vcmQpO1xuXG4gICAgICAgICAgICBsZXQgbGV0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBsZXR0ZXIuaW5uZXJIVE1MID0gd29yZC53b3JkW2ldO1xuICAgICAgICAgICAgbGV0dGVyLmNsYXNzTGlzdC5hZGQoXCJ0eXBldGVzdFwiLCBzdGF0dXMpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzLnB1c2gobGV0dGVyKTtcbiAgICAgICAgICAgIHJlcGxhY2VDaGlsZHJlbihlbGUsIGxldHRlcik7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG5leHRXb3JkKCkge1xuICAgICAgICBpZiAodGhpcy5pbnB1dC5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgdGhpcy5lbnN1cmVVc2VyV29yZHMoKTtcbiAgICAgICAgbGV0IGN1cnJlbnRXb3JkID0gdGhpcy51c2VyV29yZHNbdGhpcy5jdXJyZW50V29yZF07XG4gICAgICAgIGN1cnJlbnRXb3JkLm1pc3R5cGVkID0gdGhpcy5pbnB1dCAhPT0gY3VycmVudFdvcmQud29yZDtcbiAgICAgICAgdGhpcy5pbnB1dCA9ICcnO1xuICAgICAgICB0aGlzLmN1cnJlbnRXb3JkKys7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVDdXJyZW50V29yZCgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRXb3JkID0gdGhpcy51c2VyV29yZHNbdGhpcy5jdXJyZW50V29yZF07XG4gICAgICAgIGxldCBpbnB1dFJFID0gbmV3IFJlZ0V4cCgnXicgKyB0aGlzLmlucHV0KVxuICAgICAgICBjdXJyZW50V29yZC5taXN0eXBlZCA9ICFpbnB1dFJFLnRlc3QoY3VycmVudFdvcmQud29yZCk7XG4gICAgfVxuXG5cbiAgICBlbnN1cmVVc2VyV29yZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJXb3Jkcy5sZW5ndGggPCA1MCArIHRoaXMuY3VycmVudFdvcmQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDUwOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZElkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudG9wV29yZHMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZFdvcmQgPSB0aGlzLnRvcFdvcmRzW3JhbmRJZHhdO1xuICAgICAgICAgICAgICAgIGxldCB3b3JkID0ge1xuICAgICAgICAgICAgICAgICAgICB3b3JkOiByYW5kV29yZCxcbiAgICAgICAgICAgICAgICAgICAgbWlzdHlwZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMudXNlcldvcmRzLnB1c2god29yZCk7XG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjYWxjdWxhdGVQb3MoKSB7XG4gICAgICAgIGxldCB4ID0gNTtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmNlaWwoKDAuMyAqIHRoaXMuZ3JpZC53aWR0aCkgLyAyKTtcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICB9XG5cbiAgICByZWNlaXZlKGUpIHtcbiAgICAgICAgLy9kZXRlcm1pbmVzIFxuXG4gICAgICAgIGlmIChbMTMsIDMyXS5pbmNsdWRlcyhlLmtleUNvZGUpKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRXb3JkKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGUua2V5Q29kZSA+PSA2NSAmJiBlLmtleUNvZGUgPCA5MSkgfHwgZS5rZXlDb2RlID09PSAyMjIpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50VGltZSkgdGhpcy5jdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB0aGlzLmlucHV0ICs9IGUua2V5O1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUN1cnJlbnRXb3JkKClcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQuZXhpdFR5cGV0ZXN0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA4KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dCkgdGhpcy5pbnB1dCA9IHRoaXMuaW5wdXQuc2xpY2UoMCwgdGhpcy5pbnB1dC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVDdXJyZW50V29yZCgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlucHV0KTtcbiAgICB9XG5cbn0gIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZENvb3JkaW5hdGVzKGExLCBhMikge1xuICAgIHJldHVybiBbYTFbMF0gKyBhMlswXSwgYTFbMV0gKyBhMlsxXV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCb3VuZGVkQ29vcmRpbmF0ZXMoYTEsIGEyLCBncmlkKSB7XG4gICAgbGV0IHggPSBhMVswXSArIGEyWzBdXG4gICAgbGV0IHkgPSBhMVsxXSArIGEyWzFdO1xuICAgIHggPSB4ICUgZ3JpZC5oZWlnaHQ7XG4gICAgeSA9IHkgJSBncmlkLndpZHRoO1xuICAgIGlmICh4IDwgMCkgeCArPSBncmlkLmhlaWdodDtcbiAgICBpZiAoeSA8IDApIHkgKz0gZ3JpZC53aWR0aDtcbiAgICByZXR1cm4gW3gseV1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VDaGlsZHJlbihwYXJlbnQsIGNoaWxkKSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbENvb3JkaW5hdGVzKGExLCBhMikge1xuICAgIHJldHVybiBhMVswXSA9PT0gYTJbMF0gJiYgYTFbMV0gPT09IGEyWzFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5jbHVkZXNDb29yZGluYXRlcyhjb29yZExpc3QsIGNvb3JkKSB7XG4gICAgbGV0IHJlcyA9IGZhbHNlO1xuXG4gICAgY29vcmRMaXN0LmZvckVhY2goeHkgPT4ge1xuICAgICAgICBpZiAoZXF1YWxDb29yZGluYXRlcyh4eSwgY29vcmQpKSB7XG4gICAgICAgICAgICByZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9FbW9qaShzdHIpIHtcbiAgICBzdHIgPSBzdHIudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBFTU9KSVMgPSBbXG4gICAgICBcIvCfmKBcIixcbiAgICAgIFwi8J+Ys1wiLFxuICAgICAgXCLwn5Go4oCN8J+RqOKAjfCfkaZcIixcbiAgICAgIFwi8J+NhlwiLFxuICAgICAgXCLwn5C1XCIsXG4gICAgICBcIvCfkLFcIixcbiAgICAgIFwi8J+SqVwiLFxuICAgICAgXCLwn4yeXCIsXG4gICAgICBcIvCfjIhcIixcbiAgICAgIFwi8J+MilwiLFxuICAgICAgXCLwn5e9XCIsXG4gICAgICBcIvCfm7hcIixcbiAgICAgIFwi8J+RqOKAjfCfkajigI3wn5GmXCIsXG4gICAgICBcIvCfpZNcIixcbiAgICAgIFwi8J+RjFwiLFxuICAgICAgXCLwn4+eXCIsXG4gICAgICBcIvCfjqJcIixcbiAgICAgIFwi8J+allwiLFxuICAgICAgXCLwn42pXCIsXG4gICAgICBcIvCfjZRcIixcbiAgICAgIFwi8J+HrvCfh7dcIixcbiAgICAgIFwi8J+kpVwiLFxuICAgICAgXCLwn5GCXCIsXG4gICAgICBcIuKYolwiLFxuICAgICAgXCLwn4i1XCIsXG4gICAgICBcIvCfpKNcIlxuICAgIF07XG5cblxuICAgIGxldCBjb2RlID0gc3RyLmNoYXJDb2RlQXQoMCkgLSA5NztcbiAgICByZXR1cm4gRU1PSklTW2NvZGVdO1xuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==