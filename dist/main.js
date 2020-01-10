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
      if (this.typetest) this.typetest.clearPreviousRender();
      this.typetest = new _typetest__WEBPACK_IMPORTED_MODULE_4__["TypeTest"](this);
      this.typetest.render(); // this.spells.push(this.currentSpell);
      // this.currentSpell = null;
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
      if (this.currentSpell) this.currentSpell.currentPos = pos;
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

      if (this.typetest) {
        this.typetest.render();
      }

      this.currentSpell.move();
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
          var inst = new Spell(this.grid);
          inst.cast(['right', 'green']);
          inst.storedText = 'press esc to exit';
          inst.currentPos = [1, 1];
          this.grid.currentSpell = inst;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9rZXl3b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FtcGxldGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc25ha2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwZWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiXSwibmFtZXMiOlsiR3JpZCIsInJvb3QiLCJpbnB1dCIsIkNFTExTSVpFIiwiY3Vyc29yUG9zIiwiaGVpZ2h0IiwiTWF0aCIsImNlaWwiLCJvZmZzZXRIZWlnaHQiLCJ3aWR0aCIsImZsb29yIiwib2Zmc2V0V2lkdGgiLCJzcGVsbHMiLCJjdXJyZW50U3BlbGwiLCJTcGVsbCIsImZyYW1lcmF0ZSIsInR5cGV0ZXN0IiwiZ3JpZCIsInBvcHVsYXRlIiwicGxheSIsImtleXdvcmRzTGlzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsb2dvIiwiY2FzdE5ld1NwZWxsIiwib25jbGljayIsIm5leHRTcGVsbCIsInB1c2giLCJnZW5lcmF0ZVJhbmRvbVNwZWxsIiwiT2JqZWN0Iiwia2V5cyIsImtleXdvcmRzIiwiZm9yRWFjaCIsImt3IiwibGkiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwicmVjZWl2ZSIsImFwcGVuZENoaWxkIiwicmVzaXplR3JpZCIsImJpbmQiLCJyZWNlaXZlSW5wdXQiLCJyZWNlaXZlQ2xpY2siLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInBvcyIsInRhcmdldCIsImRhdGFzZXQiLCJ3aW5kb3ciLCJvbnJlc2l6ZSIsImkiLCJyb3dBcnIiLCJyb3ciLCJjbGFzc05hbWUiLCJqIiwiY2VsbCIsImZpcnN0Q2hpbGQiLCJyZW1vdmUiLCJjbGVhckdyaWRFbGVtZW50cyIsInNuYWtlTW9kZSIsImNsZWFyUHJldmlvdXNSZW5kZXIiLCJzdG9yZWRUZXh0IiwiYWN0aXZlVGV4dCIsInByZXZTcGVsbCIsInJlbmRlciIsImNvb3JkaW5hdGVzIiwieCIsInkiLCJTbmFrZSIsImxhc3RTcGVsbCIsImNlbnRlclBvcyIsIlR5cGVUZXN0IiwiY3VycmVudFBvcyIsImtleWNvZGUiLCJkZWx0YSIsIm1vdmVzIiwiVXRpbCIsInJhbmRvbSIsImtleUNvZGUiLCJrZXkiLCJkZWxldGVDaGFyYWN0ZXIiLCJ1cGRhdGVDdXJyZW50UG9zaXRpb24iLCJzcGVsbCIsIm1vdmUiLCJyYXRlIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJmcmFtZSIsImFuaW1hdGUiLCJzYW1wbGVUZXh0IiwiYWxsIiwidHlwZSIsImNsZWFyIiwic25ha2UiLCJ0ZXN0IiwiY2lyY2xlIiwiZmFzdCIsImFjdGlvbiIsInNsb3ciLCJiaWciLCJsaXR0bGUiLCJoZWxwIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiY29taWMiLCJzYW5zIiwiZnVuIiwibW9ubyIsInNlcmlmIiwiYmx1ZSIsImdyZWVuIiwieWVsbG93IiwicmVkIiwiZW1vamkiLCJoZWxsbyIsImFib3V0IiwidG9iZSIsImZvbyIsInRvcDEwMDAiLCJ3aGl0ZXNwYWNlIiwid29yZHMiLCJzcGxpdCIsInZhbGlkd29yZHMiLCJmaWx0ZXIiLCJ3b3JkIiwibGVuZ3RoIiwicmFuZ2UiLCJjb25zb2xlIiwibG9nIiwic2xpY2UiLCJwb3NpdGlvbiIsInBvc2l0aW9ucyIsInJlbmRlcmVkRWxlbWVudHMiLCJoZWFkIiwiYm9keSIsImluc3QiLCJjYXN0IiwicmVzIiwiZ2V0RWxlbWVudCIsImxvc2VyU3BlbGwiLCJlbGUiLCJuZXh0UG9zaXRpb24iLCJhZGRDb29yZGluYXRlcyIsImluY2x1ZGVzQ29vcmRpbmF0ZXMiLCJvdXRPZkJvdW5kcyIsImhhbmRsZUxvc3MiLCJpc0VtcHR5IiwidW5zaGlmdCIsImVhdCIsInBvcCIsInNuYWNrIiwiZWxlbWVudCIsImNoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVwbGFjZUNoaWxkcmVuIiwicGVyRnJhbWVLZXl3b3JkcyIsImFwcGxpZWRLZXl3b3JkcyIsInJhbmRvbVBvc2l0aW9uIiwia2V5d29yZEluZGV4Iiwicm90YXRlIiwiY2xhc3NBcnIiLCJjb2xvcnMiLCJmb250Iiwic2l6ZSIsInRvTG93ZXJDYXNlIiwiZXh0cmFjdEtleXdvcmRzIiwiQXJyYXkiLCJub3RTdG9yZWQiLCJhcHBseUtleXdvcmQiLCJpbmNsdWRlcyIsInBsYXlTbmFrZSIsIm5ld2ZwcyIsIm5ld3NpemUiLCJwbGF5VHlwZXRlc3QiLCJjb250YWluc0tleXdvcmQiLCJzdWJzdHIiLCJzdHIiLCJrd3MiLCJzaGlmdCIsInJhbmRJZHgiLCJ0ZXh0Iiwic2lnbiIsImxldHRlciIsInNwYW4iLCJ0ZXh0Q29udGVudCIsInRvVXBwZXJDYXNlIiwic3R5bGUiLCJmb250U2l6ZSIsImJhY2tncm91bmRDb2xvciIsInNodWZmbGVDb2xvcnMiLCJjb2xvciIsImNhbGN1bGF0ZVBvcyIsInVzZXJXb3JkcyIsImN1cnJlbnRXb3JkIiwiYmFka2V5c3Ryb2tlcyIsInJlbmRlcmVkV29yZEJlZ2luIiwicmVuZGVyZWRXb3JkRW5kIiwibnVtUm93cyIsImN1cnJlbnRUaW1lIiwidG9wV29yZHMiLCJlbnN1cmVVc2VyV29yZHMiLCJjYWxjdWxhdGVXUE0iLCJleGl0VHlwZXRlc3QiLCJjb3JyZWN0S2V5c3Ryb2tlcyIsIm1pc3R5cGVkIiwibm93IiwiRGF0ZSIsInRpbWVMZWZ0IiwiZ2V0VGltZSIsInRpbWVzVXAiLCJvdmVyIiwicmVuZGVyUGFkZGluZyIsInJlbmRlcldvcmREaXNwbGF5IiwicmVuZGVySW5wdXQiLCJ0b3AiLCJlbCIsImlucHV0d2lkdGgiLCJ0aW1lU3RhcnQiLCJ0aW1lIiwiY2FsY3VsYXRlVGltZSIsIndvcmRzUmVuZGVyZWQiLCJmaXJzdENvbExlbmd0aCIsImNvbCIsIndvcmRJZHgiLCJyZW5kZXJlZFdvcmQiLCJyZW5kZXJDb29yZCIsInJlbmRlcldvcmQiLCJtaW4iLCJzZWMiLCJ0b1N0cmluZyIsImZvcm1hdHRlZFRpbWUiLCJpZHgiLCJ0eXBlU3RhcnQiLCJ3b3JkQmVnaW4iLCJzdGF0dXMiLCJtYXRjaGVzIiwiZWxlQ29vcmQiLCJpbm5lckhUTUwiLCJpbnB1dFJFIiwiUmVnRXhwIiwicmFuZFdvcmQiLCJuZXh0V29yZCIsInZhbGlkYXRlQ3VycmVudFdvcmQiLCJhMSIsImEyIiwiYWRkQm91bmRlZENvb3JkaW5hdGVzIiwicGFyZW50IiwicmVtb3ZlQ2hpbGQiLCJlcXVhbENvb3JkaW5hdGVzIiwiY29vcmRMaXN0IiwiY29vcmQiLCJ4eSIsInRvRW1vamkiLCJFTU9KSVMiLCJjb2RlIiwiY2hhckNvZGVBdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7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QyxDQUFELENBQUYsS0FBVUMsRUFBRSxDQUFDLENBQUQsQ0FBdEM7QUFDSDtBQUVNLFNBQVN0RyxtQkFBVCxDQUE2QjJHLFNBQTdCLEVBQXdDQyxLQUF4QyxFQUErQztBQUNsRCxNQUFJbEgsR0FBRyxHQUFHLEtBQVY7QUFFQWlILFdBQVMsQ0FBQzVOLE9BQVYsQ0FBa0IsVUFBQThOLEVBQUUsRUFBSTtBQUNwQixRQUFJSCxnQkFBZ0IsQ0FBQ0csRUFBRCxFQUFLRCxLQUFMLENBQXBCLEVBQWlDO0FBQzdCbEgsU0FBRyxHQUFHLElBQU47QUFDSDtBQUNKLEdBSkQ7QUFNQSxTQUFPQSxHQUFQO0FBQ0g7QUFFTSxTQUFTb0gsT0FBVCxDQUFpQjVFLEdBQWpCLEVBQXNCO0FBQ3pCQSxLQUFHLEdBQUdBLEdBQUcsQ0FBQ1osV0FBSixFQUFOO0FBRUEsTUFBSXlGLE1BQU0sR0FBRyxDQUNYLElBRFcsRUFFWCxJQUZXLEVBR1gsVUFIVyxFQUlYLElBSlcsRUFLWCxJQUxXLEVBTVgsSUFOVyxFQU9YLElBUFcsRUFRWCxJQVJXLEVBU1gsSUFUVyxFQVVYLElBVlcsRUFXWCxJQVhXLEVBWVgsSUFaVyxFQWFYLFVBYlcsRUFjWCxJQWRXLEVBZVgsSUFmVyxFQWdCWCxJQWhCVyxFQWlCWCxJQWpCVyxFQWtCWCxJQWxCVyxFQW1CWCxJQW5CVyxFQW9CWCxJQXBCVyxFQXFCWCxNQXJCVyxFQXNCWCxJQXRCVyxFQXVCWCxJQXZCVyxFQXdCWCxHQXhCVyxFQXlCWCxJQXpCVyxFQTBCWCxJQTFCVyxDQUFiO0FBOEJBLE1BQUlDLElBQUksR0FBRzlFLEdBQUcsQ0FBQytFLFVBQUosQ0FBZSxDQUFmLElBQW9CLEVBQS9CO0FBQ0EsU0FBT0YsTUFBTSxDQUFDQyxJQUFELENBQWI7QUFFSCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBTcGVsbCBmcm9tICcuL3NwZWxsJztcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IHsgU25ha2UgfSBmcm9tICcuL3NuYWtlJztcbmltcG9ydCBrZXl3b3JkcyBmcm9tIFwiLi9rZXl3b3Jkc1wiO1xuaW1wb3J0IHsgVHlwZVRlc3QgfSBmcm9tICcuL3R5cGV0ZXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XG4gICAgY29uc3RydWN0b3Iocm9vdCwgaW5wdXQpIHtcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5DRUxMU0laRSA9IDI1O1xuICAgICAgICB0aGlzLmN1cnNvclBvcyA9IFswLDBdO1xuICAgICAgICB0aGlzLmhlaWdodCA9IE1hdGguY2VpbChyb290Lm9mZnNldEhlaWdodCAvIHRoaXMuQ0VMTFNJWkUpIC0gMjtcbiAgICAgICAgdGhpcy53aWR0aCA9IE1hdGguZmxvb3Iocm9vdC5vZmZzZXRXaWR0aCAvIHRoaXMuQ0VMTFNJWkUpO1xuICAgICAgICB0aGlzLnNwZWxscyA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbCA9IG5ldyBTcGVsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5mcmFtZXJhdGUgPSAyMDA7XG5cbiAgICAgICAgdGhpcy50eXBldGVzdCA9IG51bGw7XG4gICAgICAgIHRoaXMuZ3JpZCA9IHRoaXMucG9wdWxhdGUoKTtcbiAgICAgICAgdGhpcy5wbGF5ID0gdHJ1ZTtcblxuICAgICAgICBsZXQga2V5d29yZHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrZXl3b3Jkcy1saXN0XCIpO1xuICAgICAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvJyk7XG4gICAgICAgIGxldCBjYXN0TmV3U3BlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FzdC1uZXctc3BlbGwnKTtcbiAgICAgICAgY2FzdE5ld1NwZWxsLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm5leHRTcGVsbCgpO1xuXG4gICAgICAgIGxvZ28ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5wdXNoKHRoaXMuY3VycmVudFNwZWxsLmdlbmVyYXRlUmFuZG9tU3BlbGwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMoa2V5d29yZHMpLmZvckVhY2goa3cgPT4ge1xuICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICBsaS5pbm5lclRleHQgPSBrdztcbiAgICAgICAgICBsaS5vbmNsaWNrID0gKCkgPT4gdGhpcy5jdXJyZW50U3BlbGwucmVjZWl2ZShrdyk7XG4gICAgICAgICAga2V5d29yZHNMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZXNpemVHcmlkID0gdGhpcy5yZXNpemVHcmlkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVjZWl2ZUlucHV0ID0gdGhpcy5yZWNlaXZlSW5wdXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWNlaXZlQ2xpY2sgPSB0aGlzLnJlY2VpdmVDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMucmVjZWl2ZUlucHV0KTtcblxuICAgICAgICB0aGlzLnJvb3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgeyBwb3MgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgICAgICBpZiAocG9zKSB0aGlzLnJlY2VpdmVDbGljayhwb3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cub25yZXNpemUgPSB0aGlzLnJlc2l6ZUdyaWQ7XG4gICAgfVxuIFxuICAgIHBvcHVsYXRlKCkge1xuICAgICAgICBsZXQgZ3JpZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3dBcnIgPSBbXTtcbiAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgcm93LmNsYXNzTmFtZSA9ICdyb3cnO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLndpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnY2VsbCc7XG4gICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnBvcyA9IFtpLCBqXVxuICAgICAgICAgICAgICAgIHJvd0Fyci5wdXNoKGNlbGwpO1xuXG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHRoaXMucm9vdC5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgZ3JpZC5wdXNoKHJvd0Fycik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ3JpZDtcbiAgICB9XG5cblxuICAgIGNsZWFyR3JpZEVsZW1lbnRzKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5yb290LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzaXplR3JpZCgpIHtcbiAgICAgICAgbGV0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuICAgICAgICB0aGlzLmNsZWFyR3JpZEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5mbG9vcihyb290Lm9mZnNldEhlaWdodCAvIHRoaXMuQ0VMTFNJWkUpIC0gMTtcbiAgICAgICAgdGhpcy53aWR0aCA9IE1hdGguZmxvb3Iocm9vdC5vZmZzZXRXaWR0aCAvIHRoaXMuQ0VMTFNJWkUpO1xuICAgICAgICB0aGlzLmdyaWQgPSB0aGlzLnBvcHVsYXRlKCk7XG4gICAgfVxuXG4gICAgbmV4dFNwZWxsKCkge1xuICAgICAgICBpZiAodGhpcy5zbmFrZU1vZGUoKSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwuY2xlYXJQcmV2aW91c1JlbmRlcigpXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbCA9IG5ldyBTcGVsbChncmlkKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRTcGVsbC5zdG9yZWRUZXh0IHx8IHRoaXMuY3VycmVudFNwZWxsLmFjdGl2ZVRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuc3BlbGxzLnB1c2godGhpcy5jdXJyZW50U3BlbGwpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwgPSBuZXcgU3BlbGwoZ3JpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcHJldlNwZWxsID0gdGhpcy5jdXJyZW50U3BlbGw7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbCA9IG5ldyBTcGVsbChncmlkKTtcbiAgICAgICAgICAgIHByZXZTcGVsbC5yZW5kZXIoKVxuICAgICAgICB9ICBcbiAgICB9XG5cbiAgICBnZXRFbGVtZW50KGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGxldCB4ID0gY29vcmRpbmF0ZXNbMF0gJSB0aGlzLmhlaWdodDtcbiAgICAgICAgbGV0IHkgPSBjb29yZGluYXRlc1sxXSAlIHRoaXMud2lkdGg7XG4gICAgICAgIGlmICh4IDwgMCkgeCArPSB0aGlzLmhlaWdodDtcbiAgICAgICAgaWYgKHkgPCAwKSB5ICs9IHRoaXMud2lkdGg7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRbeF1beV07XG4gICAgfVxuXG5cbiAgICBzbmFrZU1vZGUoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5jdXJyZW50U3BlbGwgaW5zdGFuY2VvZiBTbmFrZSlcbiAgICB9XG5cbiAgICBwbGF5U25ha2UoKSB7XG4gICAgICAgIGxldCBsYXN0U3BlbGwgPSB0aGlzLmN1cnJlbnRTcGVsbDtcbiAgICAgICAgdGhpcy5zcGVsbHMucHVzaChsYXN0U3BlbGwpO1xuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IodGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKHRoaXMud2lkdGggLyAyKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBjZW50ZXJQb3MgPSBbeCwgeV07XG5cbiAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwgPSBuZXcgU25ha2UodGhpcywgY2VudGVyUG9zKVxuICAgIH1cblxuICAgIHBsYXlUeXBldGVzdCgpIHtcbiAgICAgICAgLy8gY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgIGlmICh0aGlzLnR5cGV0ZXN0KSB0aGlzLnR5cGV0ZXN0LmNsZWFyUHJldmlvdXNSZW5kZXIoKTtcbiAgICAgICAgdGhpcy50eXBldGVzdCA9IG5ldyBUeXBlVGVzdCh0aGlzKTtcbiAgICAgICAgdGhpcy50eXBldGVzdC5yZW5kZXIoKTtcbiAgICAgICAgLy8gdGhpcy5zcGVsbHMucHVzaCh0aGlzLmN1cnJlbnRTcGVsbCk7XG4gICAgICAgIC8vIHRoaXMuY3VycmVudFNwZWxsID0gbnVsbDtcbiAgICB9XG5cbiAgICBleGl0VHlwZXRlc3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnR5cGV0ZXN0KSB0aGlzLnR5cGV0ZXN0LmNsZWFyUHJldmlvdXNSZW5kZXIoKTtcblxuICAgICAgICB0aGlzLnR5cGV0ZXN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwuY2xlYXJQcmV2aW91c1JlbmRlcigpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbCA9IG5ldyBTcGVsbCh0aGlzKTtcbiAgICB9XG5cbiAgICByZWNlaXZlQ2xpY2socG9zKSB7XG4gICAgICAgIGlmICh0aGlzLnNuYWtlTW9kZSgpKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTcGVsbCkgdGhpcy5jdXJyZW50U3BlbGwuY3VycmVudFBvcyA9IHBvcztcbiAgICB9XG5cbiAgICB1cGRhdGVDdXJyZW50UG9zaXRpb24oa2V5Y29kZSkge1xuICAgICAgICBcbiAgICAgICAgbGV0IGRlbHRhOyBcblxuICAgICAgICBzd2l0Y2ggKGtleWNvZGUpIHtcbiAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgZGVsdGEgPSBbMCwgLTFdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgIGRlbHRhID0gWy0xLCAwXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICBkZWx0YSA9IFswLCAxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICBkZWx0YSA9IFsxLCAwXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc25ha2VNb2RlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWxsLm1vdmVzID0gZGVsdGE7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgeyBjdXJyZW50UG9zIH0gPSB0aGlzLmN1cnJlbnRTcGVsbDtcbiAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwuY3VycmVudFBvcyA9IFV0aWwuYWRkQ29vcmRpbmF0ZXMoZGVsdGEsIGN1cnJlbnRQb3MpO1xuICAgIH1cblxuICAgIHJhbmRvbVBvc2l0aW9uKCkge1xuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLndpZHRoKTtcblxuICAgICAgICByZXR1cm4gW3gseV07XG4gICAgfVxuXG4gICAgcmVjZWl2ZUlucHV0KGUpIHtcbiAgICAgICAgaWYgKHRoaXMudHlwZXRlc3QpIHtcbiAgICAgICAgICB0aGlzLnR5cGV0ZXN0LnJlY2VpdmUoZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAxMyB8fCBlLmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgICAgdGhpcy5uZXh0U3BlbGwoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPj0gNjUgJiYgZS5rZXlDb2RlIDwgOTEpIHtcbiAgICAgICAgICBpZiAodGhpcy5zbmFrZU1vZGUoKSkgcmV0dXJuO1xuICAgICAgICAgIHRoaXMuY3VycmVudFNwZWxsLnJlY2VpdmUoZS5rZXkpO1xuICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gOCAmJiB0aGlzLmN1cnJlbnRTcGVsbCkge1xuICAgICAgICAgIGlmICh0aGlzLnNuYWtlTW9kZSgpKSByZXR1cm47XG4gICAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwuZGVsZXRlQ2hhcmFjdGVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlIDw9IDQwICYmIGUua2V5Q29kZSA+PSAzNykge1xuICAgICAgICAgIHRoaXMudXBkYXRlQ3VycmVudFBvc2l0aW9uKGUua2V5Q29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9IFxuXG4gICAgZnJhbWUoKSB7XG4gICAgICAgIHRoaXMuc3BlbGxzLmZvckVhY2goc3BlbGwgPT4gc3BlbGwubW92ZSgpKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnR5cGV0ZXN0KSB7XG4gICAgICAgICAgICB0aGlzLnR5cGV0ZXN0LnJlbmRlcigpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwubW92ZSgpO1xuICAgIH1cblxuXG5cbiAgICBhbmltYXRlKHJhdGUpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMudHlwZXRlc3QpIHJldHVybjtcblxuICAgICAgICB0aGlzLmZyYW1lcmF0ZSA9IHJhdGUgfHwgdGhpcy5mcmFtZXJhdGU7XG4gICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mcmFtZSgpO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgICAgIH0sIHRoaXMuZnJhbWVyYXRlKTtcbiAgICB9XG5cblxufSIsImltcG9ydCBHcmlkIGZyb20gJy4vZ3JpZCc7XG5pbXBvcnQgU3BlbGwgZnJvbSAnLi9zcGVsbCc7XG5pbXBvcnQgeyBzYW1wbGVUZXh0IH0gZnJvbSBcIi4vc2FtcGxldGV4dFwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgeyBUeXBlVGVzdCB9IGZyb20gJy4vdHlwZXRlc3QnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0Jyk7XG4gICAgd2luZG93LlNwZWxsID0gU3BlbGw7XG4gICAgY29uc3QgZ3JpZCA9IG5ldyBHcmlkKHJvb3QsIGlucHV0KTtcblxuICAgIGdyaWQuYW5pbWF0ZSgpO1xuICAgIHdpbmRvdy5ncmlkID0gZ3JpZDtcbiAgICB3aW5kb3cuc2FtcGxlVGV4dCA9IHNhbXBsZVRleHQ7XG4gICAgd2luZG93LnR5cGV0ZXN0ID0gbmV3IFR5cGVUZXN0KGdyaWQpO1xuXG59KSIsImNvbnN0IGtleXdvcmRzID0ge1xuICBhbGw6IHsgdHlwZTogXCJhbGxcIiB9LFxuICBjbGVhcjogeyB0eXBlOiBcImNsZWFyXCIgfSxcbiAgc3BlbGw6IHsgdHlwZTogXCJzcGVsbFwiIH0sXG4gIHNuYWtlOiB7IHR5cGU6IFwic25ha2VcIiB9LFxuICB0eXBlOiB7IHR5cGU6IFwidHlwZXRlc3RcIiB9LFxuICB0ZXN0OiB7IHR5cGU6IFwidHlwZXRlc3RcIiB9LFxuICBjaXJjbGU6IHsgdHlwZTogXCJjaXJjbGVcIiB9LFxuICBmYXN0OiB7IHR5cGU6IFwic3BlZWRcIiwgYWN0aW9uOiAwLjggfSxcbiAgc2xvdzogeyB0eXBlOiBcInNwZWVkXCIsIGFjdGlvbjogMS4yNSB9LFxuICBiaWc6IHsgdHlwZTogXCJmb250c2l6ZVwiLCBhY3Rpb246IDEuMjUgfSxcbiAgbGl0dGxlOiB7IHR5cGU6IFwiZm9udHNpemVcIiwgYWN0aW9uOiAwLjggfSxcbiAgaGVscDogeyB0eXBlOiBcImluZm9cIiwgYWN0aW9uOiBcImhlbHBcIiB9LFxuICB1cDogeyB0eXBlOiBcIm1vdmVcIiwgYWN0aW9uOiBbLTEsIDBdIH0sXG4gIGRvd246IHsgdHlwZTogXCJtb3ZlXCIsIGFjdGlvbjogWzEsIDBdIH0sXG4gIGxlZnQ6IHsgdHlwZTogXCJtb3ZlXCIsIGFjdGlvbjogWzAsIC0xXSB9LFxuICByaWdodDogeyB0eXBlOiBcIm1vdmVcIiwgYWN0aW9uOiBbMCwgMV0gfSxcbiAgY29taWM6IHsgdHlwZTogXCJmb250XCIsIGFjdGlvbjogXCJjb21pY1wiIH0sXG4gIHNhbnM6IHsgdHlwZTogXCJmb250XCIsIGFjdGlvbjogXCJzYW5zXCIgfSxcbiAgZnVuOiB7IHR5cGU6IFwiZm9udFwiLCBhY3Rpb246IFwiZnVuXCIgfSxcbiAgbW9ubzogeyB0eXBlOiBcImZvbnRcIiwgYWN0aW9uOiBcIm1vbm9cIiB9LFxuICBzZXJpZjogeyB0eXBlOiBcImZvbnRcIiwgYWN0aW9uOiBcInNlcmlmXCIgfSxcbiAgYmx1ZTogeyB0eXBlOiBcImNvbG9yXCIsIGFjdGlvbjogXCIjNTc5OGFkXCIgfSxcbiAgZ3JlZW46IHsgdHlwZTogXCJjb2xvclwiLCBhY3Rpb246IFwiIzU3YWQ2ZVwiIH0sXG4gIHllbGxvdzogeyB0eXBlOiBcImNvbG9yXCIsIGFjdGlvbjogXCIjZGJjMDM1XCIgfSxcbiAgcmVkOiB7IHR5cGU6IFwiY29sb3JcIiwgYWN0aW9uOiBcIiNkZTQ4MWJcIiB9LFxuICBlbW9qaTogeyB0eXBlOiBcImVtb2ppXCIgfSxcbiAgaGVsbG86IHsgdHlwZTogXCJ0ZXh0XCIsIGFjdGlvbjogXCJ3b3JsZFwiIH0sXG4gIGFib3V0OiB7IHR5cGU6ICd0ZXh0JywgYWN0aW9uOiBcIm1hZGUgYnkgc2ltb24gZGViZXZvaXNlXCIgfSxcbiAgdG9iZTogeyB0eXBlOiAndGV4dCcsIGFjdGlvbjogJy4uLm9yIG5vdCB0byBiZSd9LFxuICBmb286IHsgdHlwZTogJ3RleHQnLCBhY3Rpb246ICdiYXInIH1cbiAgXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGtleXdvcmRzO1xuXG4vLyBUT0RPOiBcbi8vIHJvdGF0ZSwgc25ha2UsIHR5cGV0ZXN0LCBhYm91dCwgaW5kZXgsICAiLCJsZXQgdG9wMTAwMCA9IGB0aGVcbm9mXG50b1xuYW5kXG5hXG5pblxuaXNcbml0XG55b3VcbnRoYXRcbmhlXG53YXNcbmZvclxub25cbmFyZVxud2l0aFxuYXNcbklcbmhpc1xudGhleVxuYmVcbmF0XG5vbmVcbmhhdmVcbnRoaXNcbmZyb21cbm9yXG5oYWRcbmJ5XG5ub3RcbndvcmRcbmJ1dFxud2hhdFxuc29tZVxud2VcbmNhblxub3V0XG5vdGhlclxud2VyZVxuYWxsXG50aGVyZVxud2hlblxudXBcbnVzZVxueW91clxuaG93XG5zYWlkXG5hblxuZWFjaFxuc2hlXG53aGljaFxuZG9cbnRoZWlyXG50aW1lXG5pZlxud2lsbFxud2F5XG5hYm91dFxubWFueVxudGhlblxudGhlbVxud3JpdGVcbndvdWxkXG5saWtlXG5zb1xudGhlc2VcbmhlclxubG9uZ1xubWFrZVxudGhpbmdcbnNlZVxuaGltXG50d29cbmhhc1xubG9va1xubW9yZVxuZGF5XG5jb3VsZFxuZ29cbmNvbWVcbmRpZFxubnVtYmVyXG5zb3VuZFxubm9cbm1vc3RcbnBlb3BsZVxubXlcbm92ZXJcbmtub3dcbndhdGVyXG50aGFuXG5jYWxsXG5maXJzdFxud2hvXG5tYXlcbmRvd25cbnNpZGVcbmJlZW5cbm5vd1xuZmluZFxuYW55XG5uZXdcbndvcmtcbnBhcnRcbnRha2VcbmdldFxucGxhY2Vcbm1hZGVcbmxpdmVcbndoZXJlXG5hZnRlclxuYmFja1xubGl0dGxlXG5vbmx5XG5yb3VuZFxubWFuXG55ZWFyXG5jYW1lXG5zaG93XG5ldmVyeVxuZ29vZFxubWVcbmdpdmVcbm91clxudW5kZXJcbm5hbWVcbnZlcnlcbnRocm91Z2hcbmp1c3RcbmZvcm1cbnNlbnRlbmNlXG5ncmVhdFxudGhpbmtcbnNheVxuaGVscFxubG93XG5saW5lXG5kaWZmZXJcbnR1cm5cbmNhdXNlXG5tdWNoXG5tZWFuXG5iZWZvcmVcbm1vdmVcbnJpZ2h0XG5ib3lcbm9sZFxudG9vXG5zYW1lXG50ZWxsXG5kb2VzXG5zZXRcbnRocmVlXG53YW50XG5haXJcbndlbGxcbmFsc29cbnBsYXlcbnNtYWxsXG5lbmRcbnB1dFxuaG9tZVxucmVhZFxuaGFuZFxucG9ydFxubGFyZ2VcbnNwZWxsXG5hZGRcbmV2ZW5cbmxhbmRcbmhlcmVcbm11c3RcbmJpZ1xuaGlnaFxuc3VjaFxuZm9sbG93XG5hY3RcbndoeVxuYXNrXG5tZW5cbmNoYW5nZVxud2VudFxubGlnaHRcbmtpbmRcbm9mZlxubmVlZFxuaG91c2VcbnBpY3R1cmVcbnRyeVxudXNcbmFnYWluXG5hbmltYWxcbnBvaW50XG5tb3RoZXJcbndvcmxkXG5uZWFyXG5idWlsZFxuc2VsZlxuZWFydGhcbmZhdGhlclxuaGVhZFxuc3RhbmRcbm93blxucGFnZVxuc2hvdWxkXG5jb3VudHJ5XG5mb3VuZFxuYW5zd2VyXG5zY2hvb2xcbmdyb3dcbnN0dWR5XG5zdGlsbFxubGVhcm5cbnBsYW50XG5jb3ZlclxuZm9vZFxuc3VuXG5mb3VyXG5iZXR3ZWVuXG5zdGF0ZVxua2VlcFxuZXllXG5uZXZlclxubGFzdFxubGV0XG50aG91Z2h0XG5jaXR5XG50cmVlXG5jcm9zc1xuZmFybVxuaGFyZFxuc3RhcnRcbm1pZ2h0XG5zdG9yeVxuc2F3XG5mYXJcbnNlYVxuZHJhd1xubGVmdFxubGF0ZVxucnVuXG5kb24ndFxud2hpbGVcbnByZXNzXG5jbG9zZVxubmlnaHRcbnJlYWxcbmxpZmVcbmZld1xubm9ydGhcbm9wZW5cbnNlZW1cbnRvZ2V0aGVyXG5uZXh0XG53aGl0ZVxuY2hpbGRyZW5cbmJlZ2luXG5nb3RcbndhbGtcbmV4YW1wbGVcbmVhc2VcbnBhcGVyXG5ncm91cFxuYWx3YXlzXG5tdXNpY1xudGhvc2VcbmJvdGhcbm1hcmtcbm9mdGVuXG5sZXR0ZXJcbnVudGlsXG5taWxlXG5yaXZlclxuY2FyXG5mZWV0XG5jYXJlXG5zZWNvbmRcbmJvb2tcbmNhcnJ5XG50b29rXG5zY2llbmNlXG5lYXRcbnJvb21cbmZyaWVuZFxuYmVnYW5cbmlkZWFcbmZpc2hcbm1vdW50YWluXG5zdG9wXG5vbmNlXG5iYXNlXG5oZWFyXG5ob3JzZVxuY3V0XG5zdXJlXG53YXRjaFxuY29sb3JcbmZhY2Vcbndvb2Rcbm1haW5cbmVub3VnaFxucGxhaW5cbmdpcmxcbnVzdWFsXG55b3VuZ1xucmVhZHlcbmFib3ZlXG5ldmVyXG5yZWRcbmxpc3RcbnRob3VnaFxuZmVlbFxudGFsa1xuYmlyZFxuc29vblxuYm9keVxuZG9nXG5mYW1pbHlcbmRpcmVjdFxucG9zZVxubGVhdmVcbnNvbmdcbm1lYXN1cmVcbmRvb3JcbnByb2R1Y3RcbmJsYWNrXG5zaG9ydFxubnVtZXJhbFxuY2xhc3NcbndpbmRcbnF1ZXN0aW9uXG5oYXBwZW5cbmNvbXBsZXRlXG5zaGlwXG5hcmVhXG5oYWxmXG5yb2NrXG5vcmRlclxuZmlyZVxuc291dGhcbnByb2JsZW1cbnBpZWNlXG50b2xkXG5rbmV3XG5wYXNzXG5zaW5jZVxudG9wXG53aG9sZVxua2luZ1xuc3BhY2VcbmhlYXJkXG5iZXN0XG5ob3VyXG5iZXR0ZXJcbnRydWVcbmR1cmluZ1xuaHVuZHJlZFxuZml2ZVxucmVtZW1iZXJcbnN0ZXBcbmVhcmx5XG5ob2xkXG53ZXN0XG5ncm91bmRcbmludGVyZXN0XG5yZWFjaFxuZmFzdFxudmVyYlxuc2luZ1xubGlzdGVuXG5zaXhcbnRhYmxlXG50cmF2ZWxcbmxlc3Ncbm1vcm5pbmdcbnRlblxuc2ltcGxlXG5zZXZlcmFsXG52b3dlbFxudG93YXJkXG53YXJcbmxheVxuYWdhaW5zdFxucGF0dGVyblxuc2xvd1xuY2VudGVyXG5sb3ZlXG5wZXJzb25cbm1vbmV5XG5zZXJ2ZVxuYXBwZWFyXG5yb2FkXG5tYXBcbnJhaW5cbnJ1bGVcbmdvdmVyblxucHVsbFxuY29sZFxubm90aWNlXG52b2ljZVxudW5pdFxucG93ZXJcbnRvd25cbmZpbmVcbmNlcnRhaW5cbmZseVxuZmFsbFxubGVhZFxuY3J5XG5kYXJrXG5tYWNoaW5lXG5ub3RlXG53YWl0XG5wbGFuXG5maWd1cmVcbnN0YXJcbmJveFxubm91blxuZmllbGRcbnJlc3RcbmNvcnJlY3RcbmFibGVcbnBvdW5kXG5kb25lXG5iZWF1dHlcbmRyaXZlXG5zdG9vZFxuY29udGFpblxuZnJvbnRcbnRlYWNoXG53ZWVrXG5maW5hbFxuZ2F2ZVxuZ3JlZW5cbm9oXG5xdWlja1xuZGV2ZWxvcFxub2NlYW5cbndhcm1cbmZyZWVcbm1pbnV0ZVxuc3Ryb25nXG5zcGVjaWFsXG5taW5kXG5iZWhpbmRcbmNsZWFyXG50YWlsXG5wcm9kdWNlXG5mYWN0XG5zdHJlZXRcbmluY2hcbm11bHRpcGx5XG5ub3RoaW5nXG5jb3Vyc2VcbnN0YXlcbndoZWVsXG5mdWxsXG5mb3JjZVxuYmx1ZVxub2JqZWN0XG5kZWNpZGVcbnN1cmZhY2VcbmRlZXBcbm1vb25cbmlzbGFuZFxuZm9vdFxuc3lzdGVtXG5idXN5XG50ZXN0XG5yZWNvcmRcbmJvYXRcbmNvbW1vblxuZ29sZFxucG9zc2libGVcbnBsYW5lXG5zdGVhZFxuZHJ5XG53b25kZXJcbmxhdWdoXG50aG91c2FuZFxuYWdvXG5yYW5cbmNoZWNrXG5nYW1lXG5zaGFwZVxuZXF1YXRlXG5ob3Rcbm1pc3NcbmJyb3VnaHRcbmhlYXRcbnNub3dcbnRpcmVcbmJyaW5nXG55ZXNcbmRpc3RhbnRcbmZpbGxcbmVhc3RcbnBhaW50XG5sYW5ndWFnZVxuYW1vbmdcbmdyYW5kXG5iYWxsXG55ZXRcbndhdmVcbmRyb3BcbmhlYXJ0XG5hbVxucHJlc2VudFxuaGVhdnlcbmRhbmNlXG5lbmdpbmVcbnBvc2l0aW9uXG5hcm1cbndpZGVcbnNhaWxcbm1hdGVyaWFsXG5zaXplXG52YXJ5XG5zZXR0bGVcbnNwZWFrXG53ZWlnaHRcbmdlbmVyYWxcbmljZVxubWF0dGVyXG5jaXJjbGVcbnBhaXJcbmluY2x1ZGVcbmRpdmlkZVxuc3lsbGFibGVcbmZlbHRcbnBlcmhhcHNcbnBpY2tcbnN1ZGRlblxuY291bnRcbnNxdWFyZVxucmVhc29uXG5sZW5ndGhcbnJlcHJlc2VudFxuYXJ0XG5zdWJqZWN0XG5yZWdpb25cbmVuZXJneVxuaHVudFxucHJvYmFibGVcbmJlZFxuYnJvdGhlclxuZWdnXG5yaWRlXG5jZWxsXG5iZWxpZXZlXG5mcmFjdGlvblxuZm9yZXN0XG5zaXRcbnJhY2VcbndpbmRvd1xuc3RvcmVcbnN1bW1lclxudHJhaW5cbnNsZWVwXG5wcm92ZVxubG9uZVxubGVnXG5leGVyY2lzZVxud2FsbFxuY2F0Y2hcbm1vdW50XG53aXNoXG5za3lcbmJvYXJkXG5qb3lcbndpbnRlclxuc2F0XG53cml0dGVuXG53aWxkXG5pbnN0cnVtZW50XG5rZXB0XG5nbGFzc1xuZ3Jhc3NcbmNvd1xuam9iXG5lZGdlXG5zaWduXG52aXNpdFxucGFzdFxuc29mdFxuZnVuXG5icmlnaHRcbmdhc1xud2VhdGhlclxubW9udGhcbm1pbGxpb25cbmJlYXJcbmZpbmlzaFxuaGFwcHlcbmhvcGVcbmZsb3dlclxuY2xvdGhlXG5zdHJhbmdlXG5nb25lXG5qdW1wXG5iYWJ5XG5laWdodFxudmlsbGFnZVxubWVldFxucm9vdFxuYnV5XG5yYWlzZVxuc29sdmVcbm1ldGFsXG53aGV0aGVyXG5wdXNoXG5zZXZlblxucGFyYWdyYXBoXG50aGlyZFxuc2hhbGxcbmhlbGRcbmhhaXJcbmRlc2NyaWJlXG5jb29rXG5mbG9vclxuZWl0aGVyXG5yZXN1bHRcbmJ1cm5cbmhpbGxcbnNhZmVcbmNhdFxuY2VudHVyeVxuY29uc2lkZXJcbnR5cGVcbmxhd1xuYml0XG5jb2FzdFxuY29weVxucGhyYXNlXG5zaWxlbnRcbnRhbGxcbnNhbmRcbnNvaWxcbnJvbGxcbnRlbXBlcmF0dXJlXG5maW5nZXJcbmluZHVzdHJ5XG52YWx1ZVxuZmlnaHRcbmxpZVxuYmVhdFxuZXhjaXRlXG5uYXR1cmFsXG52aWV3XG5zZW5zZVxuZWFyXG5lbHNlXG5xdWl0ZVxuYnJva2VcbmNhc2Vcbm1pZGRsZVxua2lsbFxuc29uXG5sYWtlXG5tb21lbnRcbnNjYWxlXG5sb3VkXG5zcHJpbmdcbm9ic2VydmVcbmNoaWxkXG5zdHJhaWdodFxuY29uc29uYW50XG5uYXRpb25cbmRpY3Rpb25hcnlcbm1pbGtcbnNwZWVkXG5tZXRob2Rcbm9yZ2FuXG5wYXlcbmFnZVxuc2VjdGlvblxuZHJlc3NcbmNsb3VkXG5zdXJwcmlzZVxucXVpZXRcbnN0b25lXG50aW55XG5jbGltYlxuY29vbFxuZGVzaWduXG5wb29yXG5sb3RcbmV4cGVyaW1lbnRcbmJvdHRvbVxua2V5XG5pcm9uXG5zaW5nbGVcbnN0aWNrXG5mbGF0XG50d2VudHlcbnNraW5cbnNtaWxlXG5jcmVhc2VcbmhvbGVcbnRyYWRlXG5tZWxvZHlcbnRyaXBcbm9mZmljZVxucmVjZWl2ZVxucm93XG5tb3V0aFxuZXhhY3RcbnN5bWJvbFxuZGllXG5sZWFzdFxudHJvdWJsZVxuc2hvdXRcbmV4Y2VwdFxud3JvdGVcbnNlZWRcbnRvbmVcbmpvaW5cbnN1Z2dlc3RcbmNsZWFuXG5icmVha1xubGFkeVxueWFyZFxucmlzZVxuYmFkXG5ibG93XG5vaWxcbmJsb29kXG50b3VjaFxuZ3Jld1xuY2VudFxubWl4XG50ZWFtXG53aXJlXG5jb3N0XG5sb3N0XG5icm93blxud2VhclxuZ2FyZGVuXG5lcXVhbFxuc2VudFxuY2hvb3NlXG5mZWxsXG5maXRcbmZsb3dcbmZhaXJcbmJhbmtcbmNvbGxlY3RcbnNhdmVcbmNvbnRyb2xcbmRlY2ltYWxcbmdlbnRsZVxud29tYW5cbmNhcHRhaW5cbnByYWN0aWNlXG5zZXBhcmF0ZVxuZGlmZmljdWx0XG5kb2N0b3JcbnBsZWFzZVxucHJvdGVjdFxubm9vblxud2hvc2VcbmxvY2F0ZVxucmluZ1xuY2hhcmFjdGVyXG5pbnNlY3RcbmNhdWdodFxucGVyaW9kXG5pbmRpY2F0ZVxucmFkaW9cbnNwb2tlXG5hdG9tXG5odW1hblxuaGlzdG9yeVxuZWZmZWN0XG5lbGVjdHJpY1xuZXhwZWN0XG5jcm9wXG5tb2Rlcm5cbmVsZW1lbnRcbmhpdFxuc3R1ZGVudFxuY29ybmVyXG5wYXJ0eVxuc3VwcGx5XG5ib25lXG5yYWlsXG5pbWFnaW5lXG5wcm92aWRlXG5hZ3JlZVxudGh1c1xuY2FwaXRhbFxud29uJ3RcbmNoYWlyXG5kYW5nZXJcbmZydWl0XG5yaWNoXG50aGlja1xuc29sZGllclxucHJvY2Vzc1xub3BlcmF0ZVxuZ3Vlc3Ncbm5lY2Vzc2FyeVxuc2hhcnBcbndpbmdcbmNyZWF0ZVxubmVpZ2hib3Jcbndhc2hcbmJhdFxucmF0aGVyXG5jcm93ZFxuY29yblxuY29tcGFyZVxucG9lbVxuc3RyaW5nXG5iZWxsXG5kZXBlbmRcbm1lYXRcbnJ1YlxudHViZVxuZmFtb3VzXG5kb2xsYXJcbnN0cmVhbVxuZmVhclxuc2lnaHRcbnRoaW5cbnRyaWFuZ2xlXG5wbGFuZXRcbmh1cnJ5XG5jaGllZlxuY29sb255XG5jbG9ja1xubWluZVxudGllXG5lbnRlclxubWFqb3JcbmZyZXNoXG5zZWFyY2hcbnNlbmRcbnllbGxvd1xuZ3VuXG5hbGxvd1xucHJpbnRcbmRlYWRcbnNwb3RcbmRlc2VydFxuc3VpdFxuY3VycmVudFxubGlmdFxucm9zZVxuY29udGludWVcbmJsb2NrXG5jaGFydFxuaGF0XG5zZWxsXG5zdWNjZXNzXG5jb21wYW55XG5zdWJ0cmFjdFxuZXZlbnRcbnBhcnRpY3VsYXJcbmRlYWxcbnN3aW1cbnRlcm1cbm9wcG9zaXRlXG53aWZlXG5zaG9lXG5zaG91bGRlclxuc3ByZWFkXG5hcnJhbmdlXG5jYW1wXG5pbnZlbnRcbmNvdHRvblxuYm9yblxuZGV0ZXJtaW5lXG5xdWFydFxubmluZVxudHJ1Y2tcbm5vaXNlXG5sZXZlbFxuY2hhbmNlXG5nYXRoZXJcbnNob3BcbnN0cmV0Y2hcbnRocm93XG5zaGluZVxucHJvcGVydHlcbmNvbHVtblxubW9sZWN1bGVcbnNlbGVjdFxud3JvbmdcbmdyYXlcbnJlcGVhdFxucmVxdWlyZVxuYnJvYWRcbnByZXBhcmVcbnNhbHRcbm5vc2VcbnBsdXJhbFxuYW5nZXJcbmNsYWltXG5jb250aW5lbnRcbm94eWdlblxuc3VnYXJcbmRlYXRoXG5wcmV0dHlcbnNraWxsXG53b21lblxuc2Vhc29uXG5zb2x1dGlvblxubWFnbmV0XG5zaWx2ZXJcbnRoYW5rXG5icmFuY2hcbm1hdGNoXG5zdWZmaXhcbmVzcGVjaWFsbHlcbmZpZ1xuYWZyYWlkXG5odWdlXG5zaXN0ZXJcbnN0ZWVsXG5kaXNjdXNzXG5mb3J3YXJkXG5zaW1pbGFyXG5ndWlkZVxuZXhwZXJpZW5jZVxuc2NvcmVcbmFwcGxlXG5ib3VnaHRcbmxlZFxucGl0Y2hcbmNvYXRcbm1hc3NcbmNhcmRcbmJhbmRcbnJvcGVcbnNsaXBcbndpblxuZHJlYW1cbmV2ZW5pbmdcbmNvbmRpdGlvblxuZmVlZFxudG9vbFxudG90YWxcbmJhc2ljXG5zbWVsbFxudmFsbGV5XG5ub3JcbmRvdWJsZVxuc2VhdFxuYXJyaXZlXG5tYXN0ZXJcbnRyYWNrXG5wYXJlbnRcbnNob3JlXG5kaXZpc2lvblxuc2hlZXRcbnN1YnN0YW5jZVxuZmF2b3JcbmNvbm5lY3RcbnBvc3RcbnNwZW5kXG5jaG9yZFxuZmF0XG5nbGFkXG5vcmlnaW5hbFxuc2hhcmVcbnN0YXRpb25cbmRhZFxuYnJlYWRcbmNoYXJnZVxucHJvcGVyXG5iYXJcbm9mZmVyXG5zZWdtZW50XG5zbGF2ZVxuZHVja1xuaW5zdGFudFxubWFya2V0XG5kZWdyZWVcbnBvcHVsYXRlXG5jaGlja1xuZGVhclxuZW5lbXlcbnJlcGx5XG5kcmlua1xub2NjdXJcbnN1cHBvcnRcbnNwZWVjaFxubmF0dXJlXG5yYW5nZVxuc3RlYW1cbm1vdGlvblxucGF0aFxubGlxdWlkXG5sb2dcbm1lYW50XG5xdW90aWVudFxudGVldGhcbnNoZWxsXG5uZWNrYDtcblxuXG5sZXQgd2hpdGVzcGFjZSA9IC9bXFxyXFxuXSsvO1xubGV0IHdvcmRzID0gdG9wMTAwMC5zcGxpdCh3aGl0ZXNwYWNlKTtcbmxldCB2YWxpZHdvcmRzID0gd29yZHMuZmlsdGVyKHdvcmQgPT4gd29yZC5sZW5ndGggPiAyKTtcblxuZXhwb3J0IGNvbnN0IHNhbXBsZVRleHQgPSAocmFuZ2UgPSAxMDAwKSA9PiB7XG4gIGNvbnNvbGUubG9nKHdvcmRzLmxlbmd0aCk7XG4gIHJldHVybiB2YWxpZHdvcmRzLnNsaWNlKDAsIHJhbmdlKTtcbn07IiwiaW1wb3J0IHsgYWRkQ29vcmRpbmF0ZXMsIHJlcGxhY2VDaGlsZHJlbiwgaW5jbHVkZXNDb29yZGluYXRlcyB9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCBTcGVsbCBmcm9tIFwiLi9zcGVsbFwiO1xuXG5leHBvcnQgY2xhc3MgU25ha2Uge1xuICAgIGNvbnN0cnVjdG9yKGdyaWQsIHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMubW92ZXMgPSBbMCwwXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbnMgPSBbcG9zaXRpb25dO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzID0gW107XG4gICAgICAgIGxldCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGhlYWQuY2xhc3NOYW1lID0gJ3NuYWtlaGVhZCc7XG4gICAgICAgIGhlYWQuaW5uZXJUZXh0ID0gXCLwn5CNXCI7XG4gICAgICAgIHRoaXMuYm9keSA9IFtoZWFkXTsgLy8gW3sgZWxlbWVudDogPHNwYW4+LCBwb3M6IH1dXG4gICAgICAgIHRoaXMuZ3JpZCA9IGdyaWQ7XG4gICAgICAgIGxldCBpbnN0ID0gbmV3IFNwZWxsKHRoaXMuZ3JpZCk7XG4gICAgICAgIGluc3Quc3RvcmVkVGV4dCA9ICdhcnJvdyBrZXlzIHRvIG1vdmUnO1xuICAgICAgICBpbnN0Lm1vdmVzID0gWzAsIDFdO1xuICAgICAgICBpbnN0LmNhc3QoWydyZWQnLCAnYmx1ZSddKTtcbiAgICAgICAgdGhpcy5ncmlkLnNwZWxscy5wdXNoKGluc3QpO1xuICAgIH1cblxuICAgIGlzRW1wdHkocG9zKSB7XG4gICAgICAgIGxldCByZXMgPSAhdGhpcy5ncmlkLmdldEVsZW1lbnQocG9zKS5maXJzdENoaWxkO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGdldFBvaW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25zLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgaGFuZGxlTG9zcygpIHtcblxuICAgICAgICB0aGlzLmNsZWFyUHJldmlvdXNSZW5kZXIoKTtcbiAgICAgICAgbGV0IGxvc2VyU3BlbGwgPSBuZXcgU3BlbGwodGhpcy5ncmlkKTtcblxuICAgICAgICBsb3NlclNwZWxsLmNhc3QoWydjaXJjbGUnLCdibHVlJywnc2FucycsJ3JpZ2h0JywnYmlnJ10pO1xuICAgICAgICBsb3NlclNwZWxsLnN0b3JlZFRleHQgPSAnR2FtZSBvdmVyOiAnICsgKHRoaXMuYm9keS5sZW5ndGggLSAxKSArICcgUE9JTlRTJztcbiAgICAgICAgdGhpcy5ncmlkLnNwZWxscy5wdXNoKGxvc2VyU3BlbGwpO1xuICAgICAgICB0aGlzLmdyaWQuY3VycmVudFNwZWxsID0gbmV3IFNwZWxsKHRoaXMuZ3JpZCk7XG4gICAgfVxuXG4gICAgY2xlYXJQcmV2aW91c1JlbmRlcigpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzLmZvckVhY2goZWxlID0+IGVsZS5yZW1vdmUoKSk7XG4gICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cyA9IFtdO1xuICAgIH1cblxuICAgIG91dE9mQm91bmRzKHBvcykge1xuICAgICAgICByZXR1cm4gKHBvc1swXSA+PSB0aGlzLmdyaWQuaGVpZ2h0IHx8IFxuICAgICAgICAgICAgcG9zWzBdIDwgMCB8fCBcbiAgICAgICAgICAgIHBvc1sxXSA+PSB0aGlzLmdyaWQud2lkdGggfHwgXG4gICAgICAgICAgICBwb3NbMV0gPCAwKVxuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmICghdGhpcy5tb3Zlc1swXSAmJiAhdGhpcy5tb3Zlc1sxXSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBcblxuICAgICAgICBsZXQgbmV4dFBvc2l0aW9uID0gYWRkQ29vcmRpbmF0ZXModGhpcy5wb3NpdGlvbnNbMF0sIHRoaXMubW92ZXMsIHRoaXMuZ3JpZClcblxuICAgICAgICBpZiAoaW5jbHVkZXNDb29yZGluYXRlcyh0aGlzLnBvc2l0aW9ucywgbmV4dFBvc2l0aW9uKSB8fCBcbiAgICAgICAgICAgIHRoaXMub3V0T2ZCb3VuZHMobmV4dFBvc2l0aW9uKSkge1xuXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUxvc3MoKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzRW1wdHkobmV4dFBvc2l0aW9uKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnMudW5zaGlmdChuZXh0UG9zaXRpb24pO1xuICAgICAgICAgICAgdGhpcy5lYXQobmV4dFBvc2l0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnMudW5zaGlmdChuZXh0UG9zaXRpb24pO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZWF0KHBvcykge1xuICAgICAgICBsZXQgc25hY2sgPSB0aGlzLmdyaWQuZ2V0RWxlbWVudChwb3MpLmZpcnN0Q2hpbGQ7XG5cbiAgICAgICAgdGhpcy5ib2R5LnB1c2goc25hY2spO1xuXG4gICAgfVxuXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5jbGVhclByZXZpb3VzUmVuZGVyKCk7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbnMuZm9yRWFjaCgocG9zLCBpKSA9PiB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KHBvcyk7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmJvZHlbaV07XG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKCdzbmFrZScpXG4gICAgICAgICAgICByZXBsYWNlQ2hpbGRyZW4oZWxlbWVudCwgY2hpbGQpO1xuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMucHVzaChjaGlsZCk7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cblxuXG59IiwiaW1wb3J0IEdyaWQgZnJvbSAnLi9ncmlkJztcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IGtleXdvcmRJbmRleCBmcm9tICcuL2tleXdvcmRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BlbGwge1xuICAgIGNvbnN0cnVjdG9yKGdyaWQpIHtcbiAgICAgICAgdGhpcy5wZXJGcmFtZUtleXdvcmRzID0gW107XG4gICAgICAgIHRoaXMuYXBwbGllZEtleXdvcmRzID0gW107XG4gICAgICAgIHRoaXMuZ3JpZCA9IGdyaWQ7XG5cblxuICAgICAgICB0aGlzLmN1cnJlbnRQb3MgPSB0aGlzLmdyaWQucmFuZG9tUG9zaXRpb24oKTtcblxuICAgICAgICB0aGlzLnN0b3JlZFRleHQgPSAnJztcbiAgICAgICAgdGhpcy5hY3RpdmVUZXh0ID0gJyc7XG4gICAgICAgIHRoaXMua2V5d29yZEluZGV4ID0ga2V5d29yZEluZGV4O1xuICAgICAgICB0aGlzLnJvdGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY2xhc3NBcnIgPSBbXTtcbiAgICAgICAgdGhpcy5tb3ZlcyA9IFswLDBdO1xuICAgICAgICB0aGlzLmNvbG9ycyA9IFtdO1xuICAgICAgICB0aGlzLmZvbnQgPSAnbW9ubyc7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDE1O1xuXG4gICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cyA9IFtdO1xuICAgIH1cblxuICAgIHJlY2VpdmUoaW5wdXQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVUZXh0ICs9IGlucHV0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuZXh0cmFjdEtleXdvcmRzKCk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZGVsZXRlQ2hhcmFjdGVyKCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVUZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVRleHQgPSB0aGlzLmFjdGl2ZVRleHQuc2xpY2UoMCwgdGhpcy5hY3RpdmVUZXh0Lmxlbmd0aCAtIDEpO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGNhc3Qoa2V5d29yZHMpIHtcbiAgICAgICAgaWYgKCEoa2V5d29yZHMgaW5zdGFuY2VvZiBBcnJheSkpIGtleXdvcmRzID0gW2tleXdvcmRzXTtcbiAgICAgICAgY29uc3Qgbm90U3RvcmVkID0gWydhbGwnLCAnY2xlYXInLCAnc3BlbGwnLCAnc25ha2UnLCAndGVzdCddO1xuXG4gICAgICAgIGtleXdvcmRzLmZvckVhY2goa3cgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcHBseUtleXdvcmQoa3cpO1xuICAgICAgICAgICAgaWYgKCFub3RTdG9yZWQuaW5jbHVkZXMoa3cpKSB0aGlzLmFwcGxpZWRLZXl3b3Jkcy5wdXNoKGt3KTsgXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICBhcHBseUtleXdvcmQoa3cpIHtcbiAgICAgICAgbGV0IHsgYWN0aW9uLCB0eXBlIH0gPSB0aGlzLmtleXdvcmRJbmRleFtrd107XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ21vdmUnOlxuICAgICAgICAgICAgICAgIHRoaXMubW92ZXMgPSBVdGlsLmFkZENvb3JkaW5hdGVzKHRoaXMubW92ZXMsIGFjdGlvbilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbG9yJzogXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvcnMucHVzaChhY3Rpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncm90YXRlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZSA9IHRoaXMucm90YXRlID8gbnVsbCA6ICdyb3RhdGUnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZm9udCc6XG4gICAgICAgICAgICAgICAgdGhpcy5lbW9qaSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9udCA9IGFjdGlvbjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NuYWtlJzpcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQuZnJhbWVyYXRlID0gMTUwO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5wbGF5U25ha2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NwZWVkJzpcbiAgICAgICAgICAgICAgICBsZXQgbmV3ZnBzID0gTWF0aC5mbG9vcih0aGlzLmdyaWQuZnJhbWVyYXRlICogYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3ZnBzID4gNDAwMCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkLmZyYW1lcmF0ZSA9IDQwMDAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3ZnBzIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmdyaWQuZnJhbWVyYXRlID0gMTAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmdyaWQuZnJhbWVyYXRlID0gbmV3ZnBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVkVGV4dCArPSBhY3Rpb247XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdmb250c2l6ZSc6XG4gICAgICAgICAgICAgICAgbGV0IG5ld3NpemUgPSBNYXRoLmZsb29yKHRoaXMuc2l6ZSAqIGFjdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKG5ld3NpemUgPiA0MCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSA0MDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld3NpemUgPCA2KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSA9IDY7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplID0gbmV3c2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjaXJjbGUnOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NBcnIucHVzaCgnY2lyY2xlJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjbGVhcic6XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnNwZWxscy5mb3JFYWNoKHNwZWxsID0+IHNwZWxsLmNsZWFyUHJldmlvdXNSZW5kZXIoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnNwZWxscyA9IFtdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZW1vamknOlxuICAgICAgICAgICAgICAgIHRoaXMuZW1vamkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3BlbGwnOlxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVSYW5kb21TcGVsbCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWxsJzpcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQuc3BlbGxzLmZvckVhY2goc3BlbGwgPT4gc3BlbGwuY2FzdCh0aGlzLmFwcGxpZWRLZXl3b3JkcykpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndHlwZXRlc3QnOlxuICAgICAgICAgICAgICAgIGxldCBpbnN0ID0gbmV3IFNwZWxsKHRoaXMuZ3JpZCk7XG4gICAgICAgICAgICAgICAgaW5zdC5jYXN0KFsncmlnaHQnLCAnZ3JlZW4nXSk7XG4gICAgICAgICAgICAgICAgaW5zdC5zdG9yZWRUZXh0ID0gJ3ByZXNzIGVzYyB0byBleGl0JztcbiAgICAgICAgICAgICAgICBpbnN0LmN1cnJlbnRQb3MgPSBbMSwxXTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQuY3VycmVudFNwZWxsID0gaW5zdDtcblxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5wbGF5VHlwZXRlc3QoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBleHRyYWN0S2V5d29yZHMoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluc0tleXdvcmQodGhpcy5hY3RpdmVUZXh0KSkgcmV0dXJuO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHRoaXMuYWN0aXZlVGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHN1YnN0ciA9IHRoaXMuYWN0aXZlVGV4dC5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIGxldCBrdyA9IHRoaXMuY29udGFpbnNLZXl3b3JkKHN1YnN0cik7XG5cbiAgICAgICAgICAgIGlmIChrdykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVkVGV4dCArPSBzdWJzdHI7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXN0KGt3KTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVRleHQgPSB0aGlzLmFjdGl2ZVRleHQuc2xpY2UoaSk7XG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0S2V5d29yZHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBjb250YWluc0tleXdvcmQoc3RyKSB7XG4gICAgICAgIGxldCBrd3MgPSBPYmplY3Qua2V5cyh0aGlzLmtleXdvcmRJbmRleCk7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBrdyBvZiBrd3MpIHsgXG4gICAgICAgICAgICBpZiAoc3RyLmluY2x1ZGVzKGt3KSkgcmV0dXJuIGt3O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjbGVhclByZXZpb3VzUmVuZGVyKCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMuZm9yRWFjaChlbGUgPT4gZWxlLnJlbW92ZSgpKTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQb3MgPSBVdGlsLmFkZENvb3JkaW5hdGVzKHRoaXMuY3VycmVudFBvcywgdGhpcy5tb3Zlcyk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgc2h1ZmZsZUNvbG9ycygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29sb3JzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICdub25lJztcbiAgICAgICAgaWYgKHRoaXMuY29sb3JzLmxlbmd0aCA9PT0gMSApIHJldHVybiB0aGlzLmNvbG9yc1swXVxuICAgICAgICB0aGlzLmNvbG9ycy5wdXNoKHRoaXMuY29sb3JzLnNoaWZ0KCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xvcnNbMF07XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVSYW5kb21TcGVsbCgpIHtcbiAgICAgICAgbGV0IGtleXdvcmRzID0gT2JqZWN0LmtleXModGhpcy5rZXl3b3JkSW5kZXgpO1xuICAgICAgICBjb25zb2xlLmxvZyhrZXl3b3Jkcyk7XG4gICAgICAgIGxldCBhcHBsaWVkS2V5d29yZHMgPSAnJztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJhbmRJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoa2V5d29yZHMubGVuZ3RoIC0gNikpICsgNjsgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyYW5kSWR4KTtcbiAgICAgICAgICAgIGFwcGxpZWRLZXl3b3JkcyArPSBrZXl3b3Jkc1tyYW5kSWR4XTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhhcHBsaWVkS2V5d29yZHMpO1xuICAgICAgICBsZXQgc3BlbGwgPSBuZXcgU3BlbGwodGhpcy5ncmlkKTtcbiAgICAgICAgc3BlbGwucmVjZWl2ZShhcHBsaWVkS2V5d29yZHMpO1xuICAgICAgICB0aGlzLmdyaWQuc3BlbGxzLnB1c2goc3BlbGwpO1xuICAgICAgICByZXR1cm4gc3BlbGw7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmNsZWFyUHJldmlvdXNSZW5kZXIoKTtcblxuICAgICAgICBsZXQgdGV4dCA9IHRoaXMuc3RvcmVkVGV4dCArIHRoaXMuYWN0aXZlVGV4dDtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuY3VycmVudFBvcztcbiAgICAgICAgbGV0IGRlbHRhO1xuICAgICAgICBpZiAodGhpcy5tb3Zlc1swXSA9PT0gMCAmJiB0aGlzLm1vdmVzWzFdID09PSAwKSB7XG4gICAgICAgICAgICBkZWx0YSA9IFswLDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHggPSBNYXRoLnNpZ24odGhpcy5tb3Zlc1swXSk7XG4gICAgICAgICAgICBsZXQgeSA9IE1hdGguc2lnbih0aGlzLm1vdmVzWzFdKTtcbiAgICAgICAgICAgIGRlbHRhID0gW3gseV07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxldHRlciA9IHRoaXMuZW1vamkgPyBVdGlsLnRvRW1vamkodGV4dFtpXSkgOiB0ZXh0W2ldO1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGxldHRlci50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKHRoaXMuZm9udCwgdGhpcy5yb3RhdGUsICdhY3RpdmUnLCAuLi50aGlzLmNsYXNzQXJyKTtcbiAgICAgICAgICAgIHNwYW4uc3R5bGUuZm9udFNpemUgPSB0aGlzLnNpemUgKyAncHgnO1xuICAgICAgICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLnNodWZmbGVDb2xvcnMoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbG9ycy5sZW5ndGggPiAwKSBzcGFuLnN0eWxlLmNvbG9yID0gJ3doaXRlJzsgXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5ncmlkLmdldEVsZW1lbnQocG9zKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgVXRpbC5yZXBsYWNlQ2hpbGRyZW4oZWxlbWVudCwgc3Bhbik7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMucHVzaChzcGFuKTtcbiAgICAgICAgICAgIHBvcyA9IFV0aWwuYWRkQ29vcmRpbmF0ZXMocG9zLCBkZWx0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ncmlkLmN1cnJlbnRTcGVsbCA9PT0gdGhpcykge1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgc3Bhbi5jbGFzc05hbWUgPSAnY3Vyc29yJztcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmdyaWQuZ2V0RWxlbWVudChwb3MpO1xuICAgICAgICAgICAgVXRpbC5yZXBsYWNlQ2hpbGRyZW4oZWxlbWVudCwgc3Bhbik7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMucHVzaChzcGFuKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbn1cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgc2FtcGxlVGV4dCB9IGZyb20gXCIuL3NhbXBsZXRleHRcIjtcbmltcG9ydCB7IHJlcGxhY2VDaGlsZHJlbiwgYWRkQ29vcmRpbmF0ZXMgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmV4cG9ydCBjbGFzcyBUeXBlVGVzdCB7XG4gICAgY29uc3RydWN0b3IoZ3JpZCkge1xuICAgICAgICB0aGlzLmdyaWQgPSBncmlkO1xuXG4gICAgICAgIHRoaXMud2lkdGggPSBNYXRoLmZsb29yKHRoaXMuZ3JpZC53aWR0aCAqIDAuNyk7XG4gICAgICAgIC8vIHRoaXMuaGVpZ2h0ID0gTWF0aC5mbG9vcih0aGlzLmdyaWQuaGVpZ2h0ICogMC44KTsgXG4gICAgICAgIHRoaXMucG9zID0gdGhpcy5jYWxjdWxhdGVQb3MoKTtcbiAgICAgICAgdGhpcy51c2VyV29yZHMgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50V29yZCA9IDA7XG4gICAgICAgIHRoaXMuYmFka2V5c3Ryb2tlcyA9IDA7XG4gICAgICAgIHRoaXMucmVuZGVyZWRXb3JkQmVnaW4gPSAwO1xuICAgICAgICB0aGlzLnJlbmRlcmVkV29yZEVuZCA9IDA7XG4gICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cz0gW107XG4gICAgICAgIHRoaXMubnVtUm93cyA9IDM7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lO1xuICAgICAgICB0aGlzLmlucHV0ID0gXCJcIjtcblxuICAgICAgICB0aGlzLnRvcFdvcmRzID0gc2FtcGxlVGV4dCgpO1xuICAgICAgICB0aGlzLmVuc3VyZVVzZXJXb3JkcygpO1xuICAgIH1cblxuICAgIG92ZXIoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNsZWFyUHJldmlvdXNSZW5kZXIoKTtcbiAgICAgICAgbGV0IGxvc2VyU3BlbGwgPSBuZXcgU3BlbGwodGhpcy5ncmlkKTtcblxuICAgICAgICBsb3NlclNwZWxsLmNhc3QoW1wiYmlnXCIsIFwicmVkXCIsIFwieWVsbG93XCIsIFwibW9ub1wiLCBcInJpZ2h0XCIsICdkb3duJywgXCJiaWdcIl0pO1xuICAgICAgICBsb3NlclNwZWxsLnN0b3JlZFRleHQgPVxuICAgICAgICAgKHRoaXMuY2FsY3VsYXRlV1BNKCkgKyAnIFdQTScpO1xuICAgICAgICB0aGlzLmdyaWQuc3BlbGxzLnB1c2gobG9zZXJTcGVsbCk7XG5cbiAgICAgICAgdGhpcy5ncmlkLmV4aXRUeXBldGVzdCgpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVdQTSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRUaW1lKSByZXR1cm4gMDtcbiAgICAgICAgbGV0IGNvcnJlY3RLZXlzdHJva2VzID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3VycmVudFdvcmQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHdvcmQgPSB0aGlzLnVzZXJXb3Jkc1tpXTtcblxuICAgICAgICAgICAgaWYgKCF3b3JkLm1pc3R5cGVkKSB7XG4gICAgICAgICAgICAgICAgY29ycmVjdEtleXN0cm9rZXMgKz0gKHdvcmQud29yZC5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGNvcnJlY3RLZXlzdHJva2VzIC8gNSk7XG4gICAgfVxuXG4gICAgY2xlYXJQcmV2aW91c1JlbmRlcigpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzLmZvckVhY2goZWxlID0+IGVsZS5yZW1vdmUoKSk7XG4gICAgfVxuXG4gICAgdGltZXNVcCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRUaW1lKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCB0aW1lTGVmdCA9XG4gICAgICAgICAgNjAgLSBNYXRoLmZsb29yKChub3cuZ2V0VGltZSgpIC0gdGhpcy5jdXJyZW50VGltZS5nZXRUaW1lKCkpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiAodGltZUxlZnQgPCAwKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmNsZWFyUHJldmlvdXNSZW5kZXIoKTtcbiAgICAgICAgaWYgKHRoaXMudGltZXNVcCgpKSB7XG4gICAgICAgICAgICB0aGlzLm92ZXIoKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlbmRlclBhZGRpbmcoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJXb3JkRGlzcGxheSgpXG4gICAgICAgIHRoaXMucmVuZGVySW5wdXQoKTtcblxuICAgIH0gIFxuICAgIFxuICAgIHJlbmRlclBhZGRpbmcoKSB7XG4gICAgICAgIGxldCBudW1Sb3dzID0gdGhpcy5udW1Sb3dzICsgNzsgXG4gICAgICAgIGxldCB0b3AgPSB0aGlzLnBvc1swXSAtIDI7XG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5wb3NbMV0gLSAyO1xuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLndpZHRoICsgNDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvd3M7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIGxldCBlbCA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KFtpICsgdG9wLCBqICsgbGVmdF0pO1xuICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTmFtZSA9ICd0ZXN0LXBhZGRpbmcnO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICByZXBsYWNlQ2hpbGRyZW4oZWwsIGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcklucHV0KCkge1xuICAgICAgICBsZXQgdG9wID0gdGhpcy5udW1Sb3dzICsgdGhpcy5wb3NbMF0gKyAyO1xuICAgICAgICBsZXQgbGVmdCA9IHRoaXMucG9zWzFdO1xuICAgICAgICBsZXQgaW5wdXR3aWR0aCA9IHRoaXMud2lkdGggLSA2O1xuICAgICAgICBsZXQgdGltZVN0YXJ0ID0gdGhpcy53aWR0aDtcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLmNhbGN1bGF0ZVRpbWUoKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXR3aWR0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIGxldCBlbCA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KFt0b3AsIGkgKyBsZWZ0XSk7XG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKFwidGVzdC1pbnB1dFwiLCAndHlwZXRlc3QnKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKGNoaWxkKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRbaV0pIGNoaWxkLmlubmVyVGV4dCA9IHRoaXMuaW5wdXRbaV07XG4gICAgICAgICAgICBpZiAoaSA9PT0gdGhpcy5pbnB1dC5sZW5ndGgpIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICAgICAgICAgIHJlcGxhY2VDaGlsZHJlbihlbCwgY2hpbGQpO1xuICAgICAgICAgICAgdGltZVN0YXJ0ID0gaSArIGxlZnQgKyAzO1xuICAgICAgICB9XG5cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgbGV0IGVsID0gdGhpcy5ncmlkLmdldEVsZW1lbnQoW3RvcCwgaSArIHRpbWVTdGFydF0pO1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZChcInRlc3QtdGltZVwiLCBcInR5cGV0ZXN0XCIpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgY2hpbGQuaW5uZXJUZXh0ID0gdGltZVtpXTtcbiAgICAgICAgICAgIHJlcGxhY2VDaGlsZHJlbihlbCwgY2hpbGQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICByZW5kZXJXb3JkRGlzcGxheSgpIHtcbiAgICAgICAgbGV0IHdvcmRzUmVuZGVyZWQgPSAwO1xuICAgICAgICBsZXQgZmlyc3RDb2xMZW5ndGggPSAwO1xuXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMubnVtUm93cyA7IHJvdyArPSAyKSB7XG5cbiAgICAgICAgICAgIGxldCBjb2wgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGNvbCA8PSB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHdvcmRJZHggPSB0aGlzLnJlbmRlcmVkV29yZEJlZ2luICsgd29yZHNSZW5kZXJlZDtcbiAgICAgICAgICAgICAgICBsZXQgcmVuZGVyZWRXb3JkID0gdGhpcy51c2VyV29yZHNbd29yZElkeF07XG4gICAgICAgICAgICAgICAgaWYgKGNvbCArIHJlbmRlcmVkV29yZC53b3JkLmxlbmd0aCA+IHRoaXMud2lkdGgpIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgbGV0IHJlbmRlckNvb3JkID0gW3JvdywgY29sXTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcldvcmQod29yZElkeCwgcmVuZGVyQ29vcmQpO1xuICAgICAgICAgICAgICAgIHdvcmRzUmVuZGVyZWQgKz0gMTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29sICs9IHJlbmRlcmVkV29yZC53b3JkLmxlbmd0aCArIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyb3cgPT09IDApIGZpcnN0Q29sTGVuZ3RoID0gd29yZHNSZW5kZXJlZDtcblxuICAgICAgICB9XG4gXG4gICAgICAgIHRoaXMucmVuZGVyZWRXb3JkRW5kID0gdGhpcy5yZW5kZXJlZFdvcmRCZWdpbiArIGZpcnN0Q29sTGVuZ3RoO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRXb3JkID49IHRoaXMucmVuZGVyZWRXb3JkRW5kKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkV29yZEJlZ2luID0gdGhpcy5jdXJyZW50V29yZDtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVUaW1lKCkge1xuICAgICAgICBcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRUaW1lKSByZXR1cm4gJzE6MDAnO1xuXG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgdGltZUxlZnQgPSA2MCAtIE1hdGguZmxvb3IoKG5vdy5nZXRUaW1lKCkgLSB0aGlzLmN1cnJlbnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwKTtcblxuICAgICAgICBpZiAodGltZUxlZnQgPCAwKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiAnMDowMCc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWluID0gTWF0aC5mbG9vcih0aW1lTGVmdCAvIDYwKTtcbiAgICAgICAgbGV0IHNlYyA9IHRpbWVMZWZ0ICUgNjA7XG4gICAgICAgIHNlYyA9IChzZWMgPCAxMCkgPyAnMCcgKyBzZWMgOiBzZWMudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IGZvcm1hdHRlZFRpbWUgPSBtaW4gKyAnOicgKyBzZWM7XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWRUaW1lO1xuICAgIH1cblxuICAgIHJlbmRlcldvcmQoaWR4LCBwb3MpIHtcbiAgICAgICAgbGV0IHR5cGVTdGFydCA9IGFkZENvb3JkaW5hdGVzKHRoaXMucG9zLCBbMCwwXSlcbiAgICAgICAgbGV0IHdvcmRCZWdpbiA9IGFkZENvb3JkaW5hdGVzKHR5cGVTdGFydCwgcG9zKTtcbiAgICAgICAgbGV0IHdvcmQgPSB0aGlzLnVzZXJXb3Jkc1tpZHhdO1xuXG4gICAgICAgIGxldCBzdGF0dXMgPSAnbm9uZSc7XG5cbiAgICAgICAgaWYgKHdvcmQubWlzdHlwZWQpIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdyZWQnO1xuICAgICAgICB9IGVsc2UgaWYgKGlkeCA8IHRoaXMuY3VycmVudFdvcmQpIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdzdWNjZXNzJztcbiAgICAgICAgfSBlbHNlIGlmIChpZHggPT09IHRoaXMuY3VycmVudFdvcmQpIHtcbiAgICAgICAgICAgIGxldCBtYXRjaGVzID0gdGhpcy51c2VyV29yZHNbdGhpcy5jdXJyZW50V29yZF0ud29yZCA9PT0gdGhpcy5pbnB1dDtcbiAgICAgICAgICAgIHN0YXR1cyA9IG1hdGNoZXMgPyAnc3VjY2VzcycgOiAnY3VycmVudCc7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkLndvcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBlbGVDb29yZCA9IGFkZENvb3JkaW5hdGVzKHdvcmRCZWdpbiwgWzAsIGldKVxuICAgICAgICAgICAgbGV0IGVsZSA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KGVsZUNvb3JkKTtcblxuICAgICAgICAgICAgbGV0IGxldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgbGV0dGVyLmlubmVySFRNTCA9IHdvcmQud29yZFtpXTtcbiAgICAgICAgICAgIGxldHRlci5jbGFzc0xpc3QuYWRkKFwidHlwZXRlc3RcIiwgc3RhdHVzKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKGxldHRlcik7XG4gICAgICAgICAgICByZXBsYWNlQ2hpbGRyZW4oZWxlLCBsZXR0ZXIpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBuZXh0V29yZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIHRoaXMuZW5zdXJlVXNlcldvcmRzKCk7XG4gICAgICAgIGxldCBjdXJyZW50V29yZCA9IHRoaXMudXNlcldvcmRzW3RoaXMuY3VycmVudFdvcmRdO1xuICAgICAgICBjdXJyZW50V29yZC5taXN0eXBlZCA9IHRoaXMuaW5wdXQgIT09IGN1cnJlbnRXb3JkLndvcmQ7XG4gICAgICAgIHRoaXMuaW5wdXQgPSAnJztcbiAgICAgICAgdGhpcy5jdXJyZW50V29yZCsrO1xuICAgIH1cblxuICAgIHZhbGlkYXRlQ3VycmVudFdvcmQoKSB7XG4gICAgICAgIGxldCBjdXJyZW50V29yZCA9IHRoaXMudXNlcldvcmRzW3RoaXMuY3VycmVudFdvcmRdO1xuICAgICAgICBsZXQgaW5wdXRSRSA9IG5ldyBSZWdFeHAoJ14nICsgdGhpcy5pbnB1dClcbiAgICAgICAgY3VycmVudFdvcmQubWlzdHlwZWQgPSAhaW5wdXRSRS50ZXN0KGN1cnJlbnRXb3JkLndvcmQpO1xuICAgIH1cblxuXG4gICAgZW5zdXJlVXNlcldvcmRzKCkge1xuICAgICAgICBpZiAodGhpcy51c2VyV29yZHMubGVuZ3RoIDwgNTAgKyB0aGlzLmN1cnJlbnRXb3JkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA1MDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRvcFdvcmRzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRXb3JkID0gdGhpcy50b3BXb3Jkc1tyYW5kSWR4XTtcbiAgICAgICAgICAgICAgICBsZXQgd29yZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgd29yZDogcmFuZFdvcmQsXG4gICAgICAgICAgICAgICAgICAgIG1pc3R5cGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJXb3Jkcy5wdXNoKHdvcmQpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY2FsY3VsYXRlUG9zKCkge1xuICAgICAgICBsZXQgeCA9IDU7XG4gICAgICAgIGxldCB5ID0gTWF0aC5jZWlsKCgwLjMgKiB0aGlzLmdyaWQud2lkdGgpIC8gMik7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfVxuXG4gICAgcmVjZWl2ZShlKSB7XG4gICAgICAgIC8vZGV0ZXJtaW5lcyBcblxuICAgICAgICBpZiAoWzEzLCAzMl0uaW5jbHVkZXMoZS5rZXlDb2RlKSkge1xuICAgICAgICAgICAgdGhpcy5uZXh0V29yZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKChlLmtleUNvZGUgPj0gNjUgJiYgZS5rZXlDb2RlIDwgOTEpIHx8IGUua2V5Q29kZSA9PT0gMjIyKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFRpbWUpIHRoaXMuY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dCArPSBlLmtleTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVDdXJyZW50V29yZCgpXG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgdGhpcy5ncmlkLmV4aXRUeXBldGVzdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gOCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXQpIHRoaXMuaW5wdXQgPSB0aGlzLmlucHV0LnNsaWNlKDAsIHRoaXMuaW5wdXQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlQ3VycmVudFdvcmQoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pbnB1dCk7XG4gICAgfVxuXG59ICIsImV4cG9ydCBmdW5jdGlvbiBhZGRDb29yZGluYXRlcyhhMSwgYTIpIHtcbiAgICByZXR1cm4gW2ExWzBdICsgYTJbMF0sIGExWzFdICsgYTJbMV1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQm91bmRlZENvb3JkaW5hdGVzKGExLCBhMiwgZ3JpZCkge1xuICAgIGxldCB4ID0gYTFbMF0gKyBhMlswXVxuICAgIGxldCB5ID0gYTFbMV0gKyBhMlsxXTtcbiAgICB4ID0geCAlIGdyaWQuaGVpZ2h0O1xuICAgIHkgPSB5ICUgZ3JpZC53aWR0aDtcbiAgICBpZiAoeCA8IDApIHggKz0gZ3JpZC5oZWlnaHQ7XG4gICAgaWYgKHkgPCAwKSB5ICs9IGdyaWQud2lkdGg7XG4gICAgcmV0dXJuIFt4LHldXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlQ2hpbGRyZW4ocGFyZW50LCBjaGlsZCkge1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxDb29yZGluYXRlcyhhMSwgYTIpIHtcbiAgICByZXR1cm4gYTFbMF0gPT09IGEyWzBdICYmIGExWzFdID09PSBhMlsxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluY2x1ZGVzQ29vcmRpbmF0ZXMoY29vcmRMaXN0LCBjb29yZCkge1xuICAgIGxldCByZXMgPSBmYWxzZTtcblxuICAgIGNvb3JkTGlzdC5mb3JFYWNoKHh5ID0+IHtcbiAgICAgICAgaWYgKGVxdWFsQ29vcmRpbmF0ZXMoeHksIGNvb3JkKSkge1xuICAgICAgICAgICAgcmVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRW1vamkoc3RyKSB7XG4gICAgc3RyID0gc3RyLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBsZXQgRU1PSklTID0gW1xuICAgICAgXCLwn5igXCIsXG4gICAgICBcIvCfmLNcIixcbiAgICAgIFwi8J+RqOKAjfCfkajigI3wn5GmXCIsXG4gICAgICBcIvCfjYZcIixcbiAgICAgIFwi8J+QtVwiLFxuICAgICAgXCLwn5CxXCIsXG4gICAgICBcIvCfkqlcIixcbiAgICAgIFwi8J+MnlwiLFxuICAgICAgXCLwn4yIXCIsXG4gICAgICBcIvCfjIpcIixcbiAgICAgIFwi8J+XvVwiLFxuICAgICAgXCLwn5u4XCIsXG4gICAgICBcIvCfkajigI3wn5Go4oCN8J+RplwiLFxuICAgICAgXCLwn6WTXCIsXG4gICAgICBcIvCfkYxcIixcbiAgICAgIFwi8J+PnlwiLFxuICAgICAgXCLwn46iXCIsXG4gICAgICBcIvCfmpZcIixcbiAgICAgIFwi8J+NqVwiLFxuICAgICAgXCLwn42UXCIsXG4gICAgICBcIvCfh67wn4e3XCIsXG4gICAgICBcIvCfpKVcIixcbiAgICAgIFwi8J+RglwiLFxuICAgICAgXCLimKJcIixcbiAgICAgIFwi8J+ItVwiLFxuICAgICAgXCLwn6SjXCJcbiAgICBdO1xuXG5cbiAgICBsZXQgY29kZSA9IHN0ci5jaGFyQ29kZUF0KDApIC0gOTc7XG4gICAgcmV0dXJuIEVNT0pJU1tjb2RlXTtcblxufSJdLCJzb3VyY2VSb290IjoiIn0=