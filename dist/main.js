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
    this.height = Math.floor(root.offsetHeight / this.CELLSIZE) - 1;
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
      this.typetest.render();
      this.spells.push(this.currentSpell);
      this.currentSpell = null;
    }
  }, {
    key: "exitTypetest",
    value: function exitTypetest() {
      if (this.typetest) this.typetest.clearPreviousRender();
      this.typetest = null;
      this.currentSpell = new _spell__WEBPACK_IMPORTED_MODULE_0__["default"](this);
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
      } else this.currentSpell.move();

      ;
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
  typetest: {
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
  type: {
    type: "typetest"
  },
  test: {
    type: "typetest"
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
  var range = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
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
      debugger;
      this.clearPreviousRender();
      var loserSpell = new _spell__WEBPACK_IMPORTED_MODULE_1__["default"](this.grid);
      loserSpell.cast(['fun', 'red', 'green', 'yellow', 'right']);
      loserSpell.storedText = 'YOULOSTSNAKE: ' + this.body.length + ' POINTS';
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
      debugger;
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
    value: function over() {}
  }, {
    key: "clearPreviousRender",
    value: function clearPreviousRender() {
      this.renderedElements.forEach(function (ele) {
        return ele.remove();
      });
    }
  }, {
    key: "render",
    value: function render() {
      this.clearPreviousRender();
      this.renderPadding();
      this.renderWordDisplay();
      this.renderInput();
      console.log(this.calculateTime());
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
      var timeStart = this.width + 2;
      var time = this.calculateTime();

      for (var i = 0; i < inputwidth; i++) {
        var child = document.createElement("span");
        var el = this.grid.getElement([top, i + left]);
        child.classList.add("test-input", 'typetest');
        this.renderedElements.push(child);
        if (this.input[i]) child.innerText = this.input[i];
        if (i === this.input.length) child.classList.add('current');
        Object(_util__WEBPACK_IMPORTED_MODULE_1__["replaceChildren"])(el, child);
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

      if (wordsRendered <= 8) {
        this.numRows = 5;
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
      if (timeLeft < 0) return '0:00';
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
      var y = Math.floor(0.3 * this.grid.width / 2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9rZXl3b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FtcGxldGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc25ha2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwZWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiXSwibmFtZXMiOlsiR3JpZCIsInJvb3QiLCJpbnB1dCIsIkNFTExTSVpFIiwiY3Vyc29yUG9zIiwiaGVpZ2h0IiwiTWF0aCIsImZsb29yIiwib2Zmc2V0SGVpZ2h0Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsInNwZWxscyIsImN1cnJlbnRTcGVsbCIsIlNwZWxsIiwiZnJhbWVyYXRlIiwidHlwZXRlc3QiLCJncmlkIiwicG9wdWxhdGUiLCJwbGF5Iiwia2V5d29yZHNMaXN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxvZ28iLCJjYXN0TmV3U3BlbGwiLCJvbmNsaWNrIiwibmV4dFNwZWxsIiwicHVzaCIsImdlbmVyYXRlUmFuZG9tU3BlbGwiLCJPYmplY3QiLCJrZXlzIiwia2V5d29yZHMiLCJmb3JFYWNoIiwia3ciLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJyZWNlaXZlIiwiYXBwZW5kQ2hpbGQiLCJyZXNpemVHcmlkIiwiYmluZCIsInJlY2VpdmVJbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJvbnJlc2l6ZSIsImkiLCJyb3dBcnIiLCJyb3ciLCJjbGFzc05hbWUiLCJqIiwiY2VsbCIsImZpcnN0Q2hpbGQiLCJyZW1vdmUiLCJjbGVhckdyaWRFbGVtZW50cyIsInNuYWtlTW9kZSIsImNsZWFyUHJldmlvdXNSZW5kZXIiLCJzdG9yZWRUZXh0IiwiYWN0aXZlVGV4dCIsInByZXZTcGVsbCIsInJlbmRlciIsImNvb3JkaW5hdGVzIiwieCIsInkiLCJTbmFrZSIsImxhc3RTcGVsbCIsImNlbnRlclBvcyIsIlR5cGVUZXN0Iiwia2V5Y29kZSIsImRlbHRhIiwibW92ZXMiLCJjdXJyZW50UG9zIiwiVXRpbCIsInJhbmRvbSIsImUiLCJrZXlDb2RlIiwia2V5IiwiZGVsZXRlQ2hhcmFjdGVyIiwidXBkYXRlQ3VycmVudFBvc2l0aW9uIiwic3BlbGwiLCJtb3ZlIiwicmF0ZSIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZnJhbWUiLCJhbmltYXRlIiwic2FtcGxlVGV4dCIsImFsbCIsInR5cGUiLCJjbGVhciIsInNuYWtlIiwiY2lyY2xlIiwiZmFzdCIsImFjdGlvbiIsInNsb3ciLCJiaWciLCJsaXR0bGUiLCJoZWxwIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiY29taWMiLCJzYW5zIiwiZnVuIiwibW9ubyIsInNlcmlmIiwiYmx1ZSIsImdyZWVuIiwieWVsbG93IiwicmVkIiwiZW1vamkiLCJoZWxsbyIsInRlc3QiLCJ0b3AxMDAwIiwid2hpdGVzcGFjZSIsIndvcmRzIiwic3BsaXQiLCJ2YWxpZHdvcmRzIiwiZmlsdGVyIiwid29yZCIsImxlbmd0aCIsInJhbmdlIiwiY29uc29sZSIsImxvZyIsInNsaWNlIiwicG9zaXRpb24iLCJwb3NpdGlvbnMiLCJyZW5kZXJlZEVsZW1lbnRzIiwiaGVhZCIsImJvZHkiLCJwb3MiLCJyZXMiLCJnZXRFbGVtZW50IiwibG9zZXJTcGVsbCIsImNhc3QiLCJlbGUiLCJuZXh0UG9zaXRpb24iLCJhZGRDb29yZGluYXRlcyIsImluY2x1ZGVzQ29vcmRpbmF0ZXMiLCJvdXRPZkJvdW5kcyIsImhhbmRsZUxvc3MiLCJpc0VtcHR5IiwidW5zaGlmdCIsImVhdCIsInBvcCIsInNuYWNrIiwiZWxlbWVudCIsImNoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVwbGFjZUNoaWxkcmVuIiwicGVyRnJhbWVLZXl3b3JkcyIsImFwcGxpZWRLZXl3b3JkcyIsInJhbmRvbVBvc2l0aW9uIiwia2V5d29yZEluZGV4Iiwicm90YXRlIiwiY2xhc3NBcnIiLCJjb2xvcnMiLCJmb250Iiwic2l6ZSIsInRvTG93ZXJDYXNlIiwiZXh0cmFjdEtleXdvcmRzIiwiQXJyYXkiLCJub3RTdG9yZWQiLCJhcHBseUtleXdvcmQiLCJpbmNsdWRlcyIsInBsYXlTbmFrZSIsIm5ld2ZwcyIsIm5ld3NpemUiLCJwbGF5VHlwZXRlc3QiLCJjb250YWluc0tleXdvcmQiLCJzdWJzdHIiLCJzdHIiLCJrd3MiLCJzaGlmdCIsInJhbmRJZHgiLCJ0ZXh0Iiwic2lnbiIsImxldHRlciIsInNwYW4iLCJ0ZXh0Q29udGVudCIsInRvVXBwZXJDYXNlIiwic3R5bGUiLCJmb250U2l6ZSIsImJhY2tncm91bmRDb2xvciIsInNodWZmbGVDb2xvcnMiLCJjb2xvciIsImNhbGN1bGF0ZVBvcyIsInVzZXJXb3JkcyIsImN1cnJlbnRXb3JkIiwiYmFka2V5c3Ryb2tlcyIsInJlbmRlcmVkV29yZEJlZ2luIiwicmVuZGVyZWRXb3JkRW5kIiwibnVtUm93cyIsImN1cnJlbnRUaW1lIiwidG9wV29yZHMiLCJlbnN1cmVVc2VyV29yZHMiLCJyZW5kZXJQYWRkaW5nIiwicmVuZGVyV29yZERpc3BsYXkiLCJyZW5kZXJJbnB1dCIsImNhbGN1bGF0ZVRpbWUiLCJ0b3AiLCJlbCIsImlucHV0d2lkdGgiLCJ0aW1lU3RhcnQiLCJ0aW1lIiwid29yZHNSZW5kZXJlZCIsImZpcnN0Q29sTGVuZ3RoIiwiY29sIiwid29yZElkeCIsInJlbmRlcmVkV29yZCIsInJlbmRlckNvb3JkIiwicmVuZGVyV29yZCIsIm5vdyIsIkRhdGUiLCJ0aW1lTGVmdCIsImdldFRpbWUiLCJtaW4iLCJzZWMiLCJ0b1N0cmluZyIsImZvcm1hdHRlZFRpbWUiLCJpZHgiLCJ0eXBlU3RhcnQiLCJ3b3JkQmVnaW4iLCJzdGF0dXMiLCJtaXN0eXBlZCIsIm1hdGNoZXMiLCJlbGVDb29yZCIsImlubmVySFRNTCIsImlucHV0UkUiLCJSZWdFeHAiLCJyYW5kV29yZCIsIm5leHRXb3JkIiwidmFsaWRhdGVDdXJyZW50V29yZCIsImV4aXRUeXBldGVzdCIsImExIiwiYTIiLCJhZGRCb3VuZGVkQ29vcmRpbmF0ZXMiLCJwYXJlbnQiLCJyZW1vdmVDaGlsZCIsImVxdWFsQ29vcmRpbmF0ZXMiLCJjb29yZExpc3QiLCJjb29yZCIsInh5IiwidG9FbW9qaSIsIkVNT0pJUyIsImNvZGUiLCJjaGFyQ29kZUF0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsSTs7O0FBQ2pCLGdCQUFZQyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBOztBQUNyQixTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxL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WCxVQUhXLEVBSVgsSUFKVyxFQUtYLElBTFcsRUFNWCxJQU5XLEVBT1gsSUFQVyxFQVFYLElBUlcsRUFTWCxJQVRXLEVBVVgsSUFWVyxFQVdYLElBWFcsRUFZWCxJQVpXLEVBYVgsVUFiVyxFQWNYLElBZFcsRUFlWCxJQWZXLEVBZ0JYLElBaEJXLEVBaUJYLElBakJXLEVBa0JYLElBbEJXLEVBbUJYLElBbkJXLEVBb0JYLElBcEJXLEVBcUJYLE1BckJXLEVBc0JYLElBdEJXLEVBdUJYLElBdkJXLEVBd0JYLEdBeEJXLEVBeUJYLElBekJXLEVBMEJYLElBMUJXLENBQWI7QUE4QkEsTUFBSUMsSUFBSSxHQUFHMUUsR0FBRyxDQUFDMkUsVUFBSixDQUFlLENBQWYsSUFBb0IsRUFBL0I7QUFDQSxTQUFPRixNQUFNLENBQUNDLElBQUQsQ0FBYjtBQUVILEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFNwZWxsIGZyb20gJy4vc3BlbGwnO1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyBTbmFrZSB9IGZyb20gJy4vc25ha2UnO1xuaW1wb3J0IGtleXdvcmRzIGZyb20gXCIuL2tleXdvcmRzXCI7XG5pbXBvcnQgeyBUeXBlVGVzdCB9IGZyb20gJy4vdHlwZXRlc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIHtcbiAgICBjb25zdHJ1Y3Rvcihyb290LCBpbnB1dCkge1xuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xuICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgICAgIFxuICAgICAgICB0aGlzLkNFTExTSVpFID0gMjU7XG4gICAgICAgIHRoaXMuY3Vyc29yUG9zID0gWzAsMF07XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5mbG9vcihyb290Lm9mZnNldEhlaWdodCAvIHRoaXMuQ0VMTFNJWkUpIC0gMTtcbiAgICAgICAgdGhpcy53aWR0aCA9IE1hdGguZmxvb3Iocm9vdC5vZmZzZXRXaWR0aCAvIHRoaXMuQ0VMTFNJWkUpO1xuICAgICAgICB0aGlzLnNwZWxscyA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbCA9IG5ldyBTcGVsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5mcmFtZXJhdGUgPSAyMDA7XG5cbiAgICAgICAgdGhpcy50eXBldGVzdCA9IG51bGw7XG4gICAgICAgIHRoaXMuZ3JpZCA9IHRoaXMucG9wdWxhdGUoKTtcbiAgICAgICAgdGhpcy5wbGF5ID0gdHJ1ZTtcblxuICAgICAgICBsZXQga2V5d29yZHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrZXl3b3Jkcy1saXN0XCIpO1xuICAgICAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvJyk7XG4gICAgICAgIGxldCBjYXN0TmV3U3BlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FzdC1uZXctc3BlbGwnKTtcbiAgICAgICAgY2FzdE5ld1NwZWxsLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm5leHRTcGVsbCgpO1xuXG4gICAgICAgIGxvZ28ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5wdXNoKHRoaXMuY3VycmVudFNwZWxsLmdlbmVyYXRlUmFuZG9tU3BlbGwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMoa2V5d29yZHMpLmZvckVhY2goa3cgPT4ge1xuICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICBsaS5pbm5lclRleHQgPSBrdztcbiAgICAgICAgICBsaS5vbmNsaWNrID0gKCkgPT4gdGhpcy5jdXJyZW50U3BlbGwucmVjZWl2ZShrdyk7XG4gICAgICAgICAga2V5d29yZHNMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZXNpemVHcmlkID0gdGhpcy5yZXNpemVHcmlkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVjZWl2ZUlucHV0ID0gdGhpcy5yZWNlaXZlSW5wdXQuYmluZCh0aGlzKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5yZWNlaXZlSW5wdXQpO1xuICAgICAgICB3aW5kb3cub25yZXNpemUgPSB0aGlzLnJlc2l6ZUdyaWQ7XG4gICAgfVxuIFxuICAgIHBvcHVsYXRlKCkge1xuICAgICAgICBsZXQgZ3JpZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3dBcnIgPSBbXTtcbiAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgcm93LmNsYXNzTmFtZSA9ICdyb3cnO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLndpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnY2VsbCc7XG4gICAgICAgICAgICAgICAgcm93QXJyLnB1c2goY2VsbCk7XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHRoaXMucm9vdC5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgZ3JpZC5wdXNoKHJvd0Fycik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ3JpZDtcbiAgICB9XG5cbiAgICBjbGVhckdyaWRFbGVtZW50cygpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMucm9vdC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2l6ZUdyaWQoKSB7XG4gICAgICAgIGxldCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcbiAgICAgICAgdGhpcy5jbGVhckdyaWRFbGVtZW50cygpO1xuICAgICAgICB0aGlzLmhlaWdodCA9IE1hdGguZmxvb3Iocm9vdC5vZmZzZXRIZWlnaHQgLyB0aGlzLkNFTExTSVpFKSAtIDE7XG4gICAgICAgIHRoaXMud2lkdGggPSBNYXRoLmZsb29yKHJvb3Qub2Zmc2V0V2lkdGggLyB0aGlzLkNFTExTSVpFKTtcbiAgICAgICAgdGhpcy5ncmlkID0gdGhpcy5wb3B1bGF0ZSgpO1xuICAgIH1cblxuICAgIG5leHRTcGVsbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc25ha2VNb2RlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWxsLmNsZWFyUHJldmlvdXNSZW5kZXIoKVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwgPSBuZXcgU3BlbGwoZ3JpZCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50U3BlbGwuc3RvcmVkVGV4dCB8fCB0aGlzLmN1cnJlbnRTcGVsbC5hY3RpdmVUZXh0KSB7XG4gICAgICAgICAgICB0aGlzLnNwZWxscy5wdXNoKHRoaXMuY3VycmVudFNwZWxsKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWxsID0gbmV3IFNwZWxsKGdyaWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHByZXZTcGVsbCA9IHRoaXMuY3VycmVudFNwZWxsO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwgPSBuZXcgU3BlbGwoZ3JpZCk7XG4gICAgICAgICAgICBwcmV2U3BlbGwucmVuZGVyKClcbiAgICAgICAgfSAgXG4gICAgfVxuXG4gICAgZ2V0RWxlbWVudChjb29yZGluYXRlcykge1xuICAgICAgICBsZXQgeCA9IGNvb3JkaW5hdGVzWzBdICUgdGhpcy5oZWlnaHQ7XG4gICAgICAgIGxldCB5ID0gY29vcmRpbmF0ZXNbMV0gJSB0aGlzLndpZHRoO1xuICAgICAgICBpZiAoeCA8IDApIHggKz0gdGhpcy5oZWlnaHQ7XG4gICAgICAgIGlmICh5IDwgMCkgeSArPSB0aGlzLndpZHRoO1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkW3hdW3ldO1xuICAgIH1cblxuXG4gICAgc25ha2VNb2RlKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuY3VycmVudFNwZWxsIGluc3RhbmNlb2YgU25ha2UpXG4gICAgfVxuXG4gICAgcGxheVNuYWtlKCkge1xuICAgICAgICBsZXQgbGFzdFNwZWxsID0gdGhpcy5jdXJyZW50U3BlbGw7XG4gICAgICAgIHRoaXMuc3BlbGxzLnB1c2gobGFzdFNwZWxsKTtcbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKHRoaXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcih0aGlzLndpZHRoIC8gMik7XG4gICAgICAgIFxuICAgICAgICBsZXQgY2VudGVyUG9zID0gW3gsIHldO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFNwZWxsID0gbmV3IFNuYWtlKHRoaXMsIGNlbnRlclBvcylcbiAgICB9XG5cbiAgICBwbGF5VHlwZXRlc3QoKSB7XG4gICAgICAgIC8vIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgICBpZiAodGhpcy50eXBldGVzdCkgdGhpcy50eXBldGVzdC5jbGVhclByZXZpb3VzUmVuZGVyKCk7XG4gICAgICAgIHRoaXMudHlwZXRlc3QgPSBuZXcgVHlwZVRlc3QodGhpcyk7XG4gICAgICAgIHRoaXMudHlwZXRlc3QucmVuZGVyKCk7XG4gICAgICAgIHRoaXMuc3BlbGxzLnB1c2godGhpcy5jdXJyZW50U3BlbGwpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbCA9IG51bGw7XG4gICAgfVxuXG4gICAgZXhpdFR5cGV0ZXN0KCkge1xuICAgICAgICBpZiAodGhpcy50eXBldGVzdCkgdGhpcy50eXBldGVzdC5jbGVhclByZXZpb3VzUmVuZGVyKCk7XG4gICAgICAgIHRoaXMudHlwZXRlc3QgPSBudWxsO1xuICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbCA9IG5ldyBTcGVsbCh0aGlzKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDdXJyZW50UG9zaXRpb24oa2V5Y29kZSkge1xuICAgICAgICBsZXQgZGVsdGE7IFxuXG4gICAgICAgIHN3aXRjaCAoa2V5Y29kZSkge1xuICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICBkZWx0YSA9IFswLCAtMV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgZGVsdGEgPSBbLTEsIDBdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgIGRlbHRhID0gWzAsIDFdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgIGRlbHRhID0gWzEsIDBdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zbmFrZU1vZGUoKSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwubW92ZXMgPSBkZWx0YTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB7IGN1cnJlbnRQb3MgfSA9IHRoaXMuY3VycmVudFNwZWxsO1xuICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbC5jdXJyZW50UG9zID0gVXRpbC5hZGRDb29yZGluYXRlcyhkZWx0YSwgY3VycmVudFBvcyk7XG4gICAgICAgIHRoaXMuY3VycmVudFNwZWxsLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHJhbmRvbVBvc2l0aW9uKCkge1xuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLndpZHRoKTtcblxuICAgICAgICByZXR1cm4gW3gseV07XG4gICAgfVxuXG4gICAgcmVjZWl2ZUlucHV0KGUpIHtcbiAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy50eXBldGVzdCkge1xuICAgICAgICAgIHRoaXMudHlwZXRlc3QucmVjZWl2ZShlKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDEzIHx8IGUua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgICB0aGlzLm5leHRTcGVsbCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA+PSA2NSAmJiBlLmtleUNvZGUgPCA5MSkge1xuICAgICAgICAgIGlmICh0aGlzLnNuYWtlTW9kZSgpKSByZXR1cm47XG4gICAgICAgICAgdGhpcy5jdXJyZW50U3BlbGwucmVjZWl2ZShlLmtleSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA4ICYmIHRoaXMuY3VycmVudFNwZWxsKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc25ha2VNb2RlKCkpIHJldHVybjtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVsbC5kZWxldGVDaGFyYWN0ZXIoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPD0gNDAgJiYgZS5rZXlDb2RlID49IDM3KSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50UG9zaXRpb24oZS5rZXlDb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgIH0gXG5cbiAgICBmcmFtZSgpIHtcbiAgICAgICAgdGhpcy5zcGVsbHMuZm9yRWFjaChzcGVsbCA9PiBzcGVsbC5tb3ZlKCkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMudHlwZXRlc3QpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZXRlc3QucmVuZGVyKClcbiAgICAgICAgfSBlbHNlIHRoaXMuY3VycmVudFNwZWxsLm1vdmUoKTs7XG4gICAgfVxuXG5cblxuICAgIGFuaW1hdGUocmF0ZSkge1xuICAgICAgICAvLyBpZiAodGhpcy50eXBldGVzdCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmZyYW1lcmF0ZSA9IHJhdGUgfHwgdGhpcy5mcmFtZXJhdGU7XG4gICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmZyYW1lKCk7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICAgICAgfSwgdGhpcy5mcmFtZXJhdGUpO1xuICAgIH1cblxuXG59IiwiaW1wb3J0IEdyaWQgZnJvbSAnLi9ncmlkJztcbmltcG9ydCBTcGVsbCBmcm9tICcuL3NwZWxsJztcbmltcG9ydCB7IHNhbXBsZVRleHQgfSBmcm9tIFwiLi9zYW1wbGV0ZXh0XCI7XG5cbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCB7IFR5cGVUZXN0IH0gZnJvbSAnLi90eXBldGVzdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKTtcbiAgICB3aW5kb3cuU3BlbGwgPSBTcGVsbDtcbiAgICBjb25zdCBncmlkID0gbmV3IEdyaWQocm9vdCwgaW5wdXQpO1xuXG4gICAgZ3JpZC5hbmltYXRlKCk7XG4gICAgd2luZG93LmdyaWQgPSBncmlkO1xuICAgIHdpbmRvdy5zYW1wbGVUZXh0ID0gc2FtcGxlVGV4dDtcbiAgICB3aW5kb3cudHlwZXRlc3QgPSBuZXcgVHlwZVRlc3QoZ3JpZCk7XG5cbn0pIiwiY29uc3Qga2V5d29yZHMgPSB7XG4gIGFsbDogeyB0eXBlOiBcImFsbFwiIH0sXG4gIGNsZWFyOiB7IHR5cGU6IFwiY2xlYXJcIiB9LFxuICBzcGVsbDogeyB0eXBlOiBcInNwZWxsXCIgfSxcbiAgc25ha2U6IHsgdHlwZTogXCJzbmFrZVwiIH0sXG4gIHR5cGV0ZXN0OiB7IHR5cGU6IFwidHlwZXRlc3RcIiB9LFxuICBjaXJjbGU6IHsgdHlwZTogXCJjaXJjbGVcIiB9LFxuICBmYXN0OiB7IHR5cGU6IFwic3BlZWRcIiwgYWN0aW9uOiAwLjggfSxcbiAgc2xvdzogeyB0eXBlOiBcInNwZWVkXCIsIGFjdGlvbjogMS4yNSB9LFxuICBiaWc6IHsgdHlwZTogXCJmb250c2l6ZVwiLCBhY3Rpb246IDEuMjUgfSxcbiAgbGl0dGxlOiB7IHR5cGU6IFwiZm9udHNpemVcIiwgYWN0aW9uOiAwLjggfSxcbiAgaGVscDogeyB0eXBlOiBcImluZm9cIiwgYWN0aW9uOiBcImhlbHBcIiB9LFxuICB1cDogeyB0eXBlOiBcIm1vdmVcIiwgYWN0aW9uOiBbLTEsIDBdIH0sXG4gIGRvd246IHsgdHlwZTogXCJtb3ZlXCIsIGFjdGlvbjogWzEsIDBdIH0sXG4gIGxlZnQ6IHsgdHlwZTogXCJtb3ZlXCIsIGFjdGlvbjogWzAsIC0xXSB9LFxuICByaWdodDogeyB0eXBlOiBcIm1vdmVcIiwgYWN0aW9uOiBbMCwgMV0gfSxcbiAgY29taWM6IHsgdHlwZTogXCJmb250XCIsIGFjdGlvbjogXCJjb21pY1wiIH0sXG4gIHNhbnM6IHsgdHlwZTogXCJmb250XCIsIGFjdGlvbjogXCJzYW5zXCIgfSxcbiAgZnVuOiB7IHR5cGU6IFwiZm9udFwiLCBhY3Rpb246IFwiZnVuXCIgfSxcbiAgbW9ubzogeyB0eXBlOiBcImZvbnRcIiwgYWN0aW9uOiBcIm1vbm9cIiB9LFxuICBzZXJpZjogeyB0eXBlOiBcImZvbnRcIiwgYWN0aW9uOiBcInNlcmlmXCIgfSxcbiAgYmx1ZTogeyB0eXBlOiBcImNvbG9yXCIsIGFjdGlvbjogXCIjNTc5OGFkXCIgfSxcbiAgZ3JlZW46IHsgdHlwZTogXCJjb2xvclwiLCBhY3Rpb246IFwiIzU3YWQ2ZVwiIH0sXG4gIHllbGxvdzogeyB0eXBlOiBcImNvbG9yXCIsIGFjdGlvbjogXCIjZGJjMDM1XCIgfSxcbiAgcmVkOiB7IHR5cGU6IFwiY29sb3JcIiwgYWN0aW9uOiBcIiNkZTQ4MWJcIiB9LFxuICBlbW9qaTogeyB0eXBlOiBcImVtb2ppXCIgfSxcbiAgaGVsbG86IHsgdHlwZTogXCJ0ZXh0XCIsIGFjdGlvbjogXCJ3b3JsZFwiIH0sXG4gIHR5cGU6IHsgdHlwZTogXCJ0eXBldGVzdFwiIH0sXG4gIHRlc3Q6IHsgdHlwZTogXCJ0eXBldGVzdFwiIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGtleXdvcmRzO1xuXG4vLyBUT0RPOiBcbi8vIHJvdGF0ZSwgc25ha2UsIHR5cGV0ZXN0LCBhYm91dCwgaW5kZXgsICAiLCJcblxuXG5cbmxldCB0b3AxMDAwID0gYHRoZVxub2ZcbnRvXG5hbmRcbmFcbmluXG5pc1xuaXRcbnlvdVxudGhhdFxuaGVcbndhc1xuZm9yXG5vblxuYXJlXG53aXRoXG5hc1xuSVxuaGlzXG50aGV5XG5iZVxuYXRcbm9uZVxuaGF2ZVxudGhpc1xuZnJvbVxub3JcbmhhZFxuYnlcbm5vdFxud29yZFxuYnV0XG53aGF0XG5zb21lXG53ZVxuY2FuXG5vdXRcbm90aGVyXG53ZXJlXG5hbGxcbnRoZXJlXG53aGVuXG51cFxudXNlXG55b3VyXG5ob3dcbnNhaWRcbmFuXG5lYWNoXG5zaGVcbndoaWNoXG5kb1xudGhlaXJcbnRpbWVcbmlmXG53aWxsXG53YXlcbmFib3V0XG5tYW55XG50aGVuXG50aGVtXG53cml0ZVxud291bGRcbmxpa2VcbnNvXG50aGVzZVxuaGVyXG5sb25nXG5tYWtlXG50aGluZ1xuc2VlXG5oaW1cbnR3b1xuaGFzXG5sb29rXG5tb3JlXG5kYXlcbmNvdWxkXG5nb1xuY29tZVxuZGlkXG5udW1iZXJcbnNvdW5kXG5ub1xubW9zdFxucGVvcGxlXG5teVxub3Zlclxua25vd1xud2F0ZXJcbnRoYW5cbmNhbGxcbmZpcnN0XG53aG9cbm1heVxuZG93blxuc2lkZVxuYmVlblxubm93XG5maW5kXG5hbnlcbm5ld1xud29ya1xucGFydFxudGFrZVxuZ2V0XG5wbGFjZVxubWFkZVxubGl2ZVxud2hlcmVcbmFmdGVyXG5iYWNrXG5saXR0bGVcbm9ubHlcbnJvdW5kXG5tYW5cbnllYXJcbmNhbWVcbnNob3dcbmV2ZXJ5XG5nb29kXG5tZVxuZ2l2ZVxub3VyXG51bmRlclxubmFtZVxudmVyeVxudGhyb3VnaFxuanVzdFxuZm9ybVxuc2VudGVuY2VcbmdyZWF0XG50aGlua1xuc2F5XG5oZWxwXG5sb3dcbmxpbmVcbmRpZmZlclxudHVyblxuY2F1c2Vcbm11Y2hcbm1lYW5cbmJlZm9yZVxubW92ZVxucmlnaHRcbmJveVxub2xkXG50b29cbnNhbWVcbnRlbGxcbmRvZXNcbnNldFxudGhyZWVcbndhbnRcbmFpclxud2VsbFxuYWxzb1xucGxheVxuc21hbGxcbmVuZFxucHV0XG5ob21lXG5yZWFkXG5oYW5kXG5wb3J0XG5sYXJnZVxuc3BlbGxcbmFkZFxuZXZlblxubGFuZFxuaGVyZVxubXVzdFxuYmlnXG5oaWdoXG5zdWNoXG5mb2xsb3dcbmFjdFxud2h5XG5hc2tcbm1lblxuY2hhbmdlXG53ZW50XG5saWdodFxua2luZFxub2ZmXG5uZWVkXG5ob3VzZVxucGljdHVyZVxudHJ5XG51c1xuYWdhaW5cbmFuaW1hbFxucG9pbnRcbm1vdGhlclxud29ybGRcbm5lYXJcbmJ1aWxkXG5zZWxmXG5lYXJ0aFxuZmF0aGVyXG5oZWFkXG5zdGFuZFxub3duXG5wYWdlXG5zaG91bGRcbmNvdW50cnlcbmZvdW5kXG5hbnN3ZXJcbnNjaG9vbFxuZ3Jvd1xuc3R1ZHlcbnN0aWxsXG5sZWFyblxucGxhbnRcbmNvdmVyXG5mb29kXG5zdW5cbmZvdXJcbmJldHdlZW5cbnN0YXRlXG5rZWVwXG5leWVcbm5ldmVyXG5sYXN0XG5sZXRcbnRob3VnaHRcbmNpdHlcbnRyZWVcbmNyb3NzXG5mYXJtXG5oYXJkXG5zdGFydFxubWlnaHRcbnN0b3J5XG5zYXdcbmZhclxuc2VhXG5kcmF3XG5sZWZ0XG5sYXRlXG5ydW5cbmRvbid0XG53aGlsZVxucHJlc3NcbmNsb3NlXG5uaWdodFxucmVhbFxubGlmZVxuZmV3XG5ub3J0aFxub3Blblxuc2VlbVxudG9nZXRoZXJcbm5leHRcbndoaXRlXG5jaGlsZHJlblxuYmVnaW5cbmdvdFxud2Fsa1xuZXhhbXBsZVxuZWFzZVxucGFwZXJcbmdyb3VwXG5hbHdheXNcbm11c2ljXG50aG9zZVxuYm90aFxubWFya1xub2Z0ZW5cbmxldHRlclxudW50aWxcbm1pbGVcbnJpdmVyXG5jYXJcbmZlZXRcbmNhcmVcbnNlY29uZFxuYm9va1xuY2FycnlcbnRvb2tcbnNjaWVuY2VcbmVhdFxucm9vbVxuZnJpZW5kXG5iZWdhblxuaWRlYVxuZmlzaFxubW91bnRhaW5cbnN0b3Bcbm9uY2VcbmJhc2VcbmhlYXJcbmhvcnNlXG5jdXRcbnN1cmVcbndhdGNoXG5jb2xvclxuZmFjZVxud29vZFxubWFpblxuZW5vdWdoXG5wbGFpblxuZ2lybFxudXN1YWxcbnlvdW5nXG5yZWFkeVxuYWJvdmVcbmV2ZXJcbnJlZFxubGlzdFxudGhvdWdoXG5mZWVsXG50YWxrXG5iaXJkXG5zb29uXG5ib2R5XG5kb2dcbmZhbWlseVxuZGlyZWN0XG5wb3NlXG5sZWF2ZVxuc29uZ1xubWVhc3VyZVxuZG9vclxucHJvZHVjdFxuYmxhY2tcbnNob3J0XG5udW1lcmFsXG5jbGFzc1xud2luZFxucXVlc3Rpb25cbmhhcHBlblxuY29tcGxldGVcbnNoaXBcbmFyZWFcbmhhbGZcbnJvY2tcbm9yZGVyXG5maXJlXG5zb3V0aFxucHJvYmxlbVxucGllY2VcbnRvbGRcbmtuZXdcbnBhc3NcbnNpbmNlXG50b3Bcbndob2xlXG5raW5nXG5zcGFjZVxuaGVhcmRcbmJlc3RcbmhvdXJcbmJldHRlclxudHJ1ZVxuZHVyaW5nXG5odW5kcmVkXG5maXZlXG5yZW1lbWJlclxuc3RlcFxuZWFybHlcbmhvbGRcbndlc3Rcbmdyb3VuZFxuaW50ZXJlc3RcbnJlYWNoXG5mYXN0XG52ZXJiXG5zaW5nXG5saXN0ZW5cbnNpeFxudGFibGVcbnRyYXZlbFxubGVzc1xubW9ybmluZ1xudGVuXG5zaW1wbGVcbnNldmVyYWxcbnZvd2VsXG50b3dhcmRcbndhclxubGF5XG5hZ2FpbnN0XG5wYXR0ZXJuXG5zbG93XG5jZW50ZXJcbmxvdmVcbnBlcnNvblxubW9uZXlcbnNlcnZlXG5hcHBlYXJcbnJvYWRcbm1hcFxucmFpblxucnVsZVxuZ292ZXJuXG5wdWxsXG5jb2xkXG5ub3RpY2VcbnZvaWNlXG51bml0XG5wb3dlclxudG93blxuZmluZVxuY2VydGFpblxuZmx5XG5mYWxsXG5sZWFkXG5jcnlcbmRhcmtcbm1hY2hpbmVcbm5vdGVcbndhaXRcbnBsYW5cbmZpZ3VyZVxuc3RhclxuYm94XG5ub3VuXG5maWVsZFxucmVzdFxuY29ycmVjdFxuYWJsZVxucG91bmRcbmRvbmVcbmJlYXV0eVxuZHJpdmVcbnN0b29kXG5jb250YWluXG5mcm9udFxudGVhY2hcbndlZWtcbmZpbmFsXG5nYXZlXG5ncmVlblxub2hcbnF1aWNrXG5kZXZlbG9wXG5vY2Vhblxud2FybVxuZnJlZVxubWludXRlXG5zdHJvbmdcbnNwZWNpYWxcbm1pbmRcbmJlaGluZFxuY2xlYXJcbnRhaWxcbnByb2R1Y2VcbmZhY3RcbnN0cmVldFxuaW5jaFxubXVsdGlwbHlcbm5vdGhpbmdcbmNvdXJzZVxuc3RheVxud2hlZWxcbmZ1bGxcbmZvcmNlXG5ibHVlXG5vYmplY3RcbmRlY2lkZVxuc3VyZmFjZVxuZGVlcFxubW9vblxuaXNsYW5kXG5mb290XG5zeXN0ZW1cbmJ1c3lcbnRlc3RcbnJlY29yZFxuYm9hdFxuY29tbW9uXG5nb2xkXG5wb3NzaWJsZVxucGxhbmVcbnN0ZWFkXG5kcnlcbndvbmRlclxubGF1Z2hcbnRob3VzYW5kXG5hZ29cbnJhblxuY2hlY2tcbmdhbWVcbnNoYXBlXG5lcXVhdGVcbmhvdFxubWlzc1xuYnJvdWdodFxuaGVhdFxuc25vd1xudGlyZVxuYnJpbmdcbnllc1xuZGlzdGFudFxuZmlsbFxuZWFzdFxucGFpbnRcbmxhbmd1YWdlXG5hbW9uZ1xuZ3JhbmRcbmJhbGxcbnlldFxud2F2ZVxuZHJvcFxuaGVhcnRcbmFtXG5wcmVzZW50XG5oZWF2eVxuZGFuY2VcbmVuZ2luZVxucG9zaXRpb25cbmFybVxud2lkZVxuc2FpbFxubWF0ZXJpYWxcbnNpemVcbnZhcnlcbnNldHRsZVxuc3BlYWtcbndlaWdodFxuZ2VuZXJhbFxuaWNlXG5tYXR0ZXJcbmNpcmNsZVxucGFpclxuaW5jbHVkZVxuZGl2aWRlXG5zeWxsYWJsZVxuZmVsdFxucGVyaGFwc1xucGlja1xuc3VkZGVuXG5jb3VudFxuc3F1YXJlXG5yZWFzb25cbmxlbmd0aFxucmVwcmVzZW50XG5hcnRcbnN1YmplY3RcbnJlZ2lvblxuZW5lcmd5XG5odW50XG5wcm9iYWJsZVxuYmVkXG5icm90aGVyXG5lZ2dcbnJpZGVcbmNlbGxcbmJlbGlldmVcbmZyYWN0aW9uXG5mb3Jlc3RcbnNpdFxucmFjZVxud2luZG93XG5zdG9yZVxuc3VtbWVyXG50cmFpblxuc2xlZXBcbnByb3ZlXG5sb25lXG5sZWdcbmV4ZXJjaXNlXG53YWxsXG5jYXRjaFxubW91bnRcbndpc2hcbnNreVxuYm9hcmRcbmpveVxud2ludGVyXG5zYXRcbndyaXR0ZW5cbndpbGRcbmluc3RydW1lbnRcbmtlcHRcbmdsYXNzXG5ncmFzc1xuY293XG5qb2JcbmVkZ2VcbnNpZ25cbnZpc2l0XG5wYXN0XG5zb2Z0XG5mdW5cbmJyaWdodFxuZ2FzXG53ZWF0aGVyXG5tb250aFxubWlsbGlvblxuYmVhclxuZmluaXNoXG5oYXBweVxuaG9wZVxuZmxvd2VyXG5jbG90aGVcbnN0cmFuZ2VcbmdvbmVcbmp1bXBcbmJhYnlcbmVpZ2h0XG52aWxsYWdlXG5tZWV0XG5yb290XG5idXlcbnJhaXNlXG5zb2x2ZVxubWV0YWxcbndoZXRoZXJcbnB1c2hcbnNldmVuXG5wYXJhZ3JhcGhcbnRoaXJkXG5zaGFsbFxuaGVsZFxuaGFpclxuZGVzY3JpYmVcbmNvb2tcbmZsb29yXG5laXRoZXJcbnJlc3VsdFxuYnVyblxuaGlsbFxuc2FmZVxuY2F0XG5jZW50dXJ5XG5jb25zaWRlclxudHlwZVxubGF3XG5iaXRcbmNvYXN0XG5jb3B5XG5waHJhc2VcbnNpbGVudFxudGFsbFxuc2FuZFxuc29pbFxucm9sbFxudGVtcGVyYXR1cmVcbmZpbmdlclxuaW5kdXN0cnlcbnZhbHVlXG5maWdodFxubGllXG5iZWF0XG5leGNpdGVcbm5hdHVyYWxcbnZpZXdcbnNlbnNlXG5lYXJcbmVsc2VcbnF1aXRlXG5icm9rZVxuY2FzZVxubWlkZGxlXG5raWxsXG5zb25cbmxha2Vcbm1vbWVudFxuc2NhbGVcbmxvdWRcbnNwcmluZ1xub2JzZXJ2ZVxuY2hpbGRcbnN0cmFpZ2h0XG5jb25zb25hbnRcbm5hdGlvblxuZGljdGlvbmFyeVxubWlsa1xuc3BlZWRcbm1ldGhvZFxub3JnYW5cbnBheVxuYWdlXG5zZWN0aW9uXG5kcmVzc1xuY2xvdWRcbnN1cnByaXNlXG5xdWlldFxuc3RvbmVcbnRpbnlcbmNsaW1iXG5jb29sXG5kZXNpZ25cbnBvb3JcbmxvdFxuZXhwZXJpbWVudFxuYm90dG9tXG5rZXlcbmlyb25cbnNpbmdsZVxuc3RpY2tcbmZsYXRcbnR3ZW50eVxuc2tpblxuc21pbGVcbmNyZWFzZVxuaG9sZVxudHJhZGVcbm1lbG9keVxudHJpcFxub2ZmaWNlXG5yZWNlaXZlXG5yb3dcbm1vdXRoXG5leGFjdFxuc3ltYm9sXG5kaWVcbmxlYXN0XG50cm91YmxlXG5zaG91dFxuZXhjZXB0XG53cm90ZVxuc2VlZFxudG9uZVxuam9pblxuc3VnZ2VzdFxuY2xlYW5cbmJyZWFrXG5sYWR5XG55YXJkXG5yaXNlXG5iYWRcbmJsb3dcbm9pbFxuYmxvb2RcbnRvdWNoXG5ncmV3XG5jZW50XG5taXhcbnRlYW1cbndpcmVcbmNvc3Rcbmxvc3RcbmJyb3duXG53ZWFyXG5nYXJkZW5cbmVxdWFsXG5zZW50XG5jaG9vc2VcbmZlbGxcbmZpdFxuZmxvd1xuZmFpclxuYmFua1xuY29sbGVjdFxuc2F2ZVxuY29udHJvbFxuZGVjaW1hbFxuZ2VudGxlXG53b21hblxuY2FwdGFpblxucHJhY3RpY2VcbnNlcGFyYXRlXG5kaWZmaWN1bHRcbmRvY3RvclxucGxlYXNlXG5wcm90ZWN0XG5ub29uXG53aG9zZVxubG9jYXRlXG5yaW5nXG5jaGFyYWN0ZXJcbmluc2VjdFxuY2F1Z2h0XG5wZXJpb2RcbmluZGljYXRlXG5yYWRpb1xuc3Bva2VcbmF0b21cbmh1bWFuXG5oaXN0b3J5XG5lZmZlY3RcbmVsZWN0cmljXG5leHBlY3RcbmNyb3Bcbm1vZGVyblxuZWxlbWVudFxuaGl0XG5zdHVkZW50XG5jb3JuZXJcbnBhcnR5XG5zdXBwbHlcbmJvbmVcbnJhaWxcbmltYWdpbmVcbnByb3ZpZGVcbmFncmVlXG50aHVzXG5jYXBpdGFsXG53b24ndFxuY2hhaXJcbmRhbmdlclxuZnJ1aXRcbnJpY2hcbnRoaWNrXG5zb2xkaWVyXG5wcm9jZXNzXG5vcGVyYXRlXG5ndWVzc1xubmVjZXNzYXJ5XG5zaGFycFxud2luZ1xuY3JlYXRlXG5uZWlnaGJvclxud2FzaFxuYmF0XG5yYXRoZXJcbmNyb3dkXG5jb3JuXG5jb21wYXJlXG5wb2VtXG5zdHJpbmdcbmJlbGxcbmRlcGVuZFxubWVhdFxucnViXG50dWJlXG5mYW1vdXNcbmRvbGxhclxuc3RyZWFtXG5mZWFyXG5zaWdodFxudGhpblxudHJpYW5nbGVcbnBsYW5ldFxuaHVycnlcbmNoaWVmXG5jb2xvbnlcbmNsb2NrXG5taW5lXG50aWVcbmVudGVyXG5tYWpvclxuZnJlc2hcbnNlYXJjaFxuc2VuZFxueWVsbG93XG5ndW5cbmFsbG93XG5wcmludFxuZGVhZFxuc3BvdFxuZGVzZXJ0XG5zdWl0XG5jdXJyZW50XG5saWZ0XG5yb3NlXG5jb250aW51ZVxuYmxvY2tcbmNoYXJ0XG5oYXRcbnNlbGxcbnN1Y2Nlc3NcbmNvbXBhbnlcbnN1YnRyYWN0XG5ldmVudFxucGFydGljdWxhclxuZGVhbFxuc3dpbVxudGVybVxub3Bwb3NpdGVcbndpZmVcbnNob2VcbnNob3VsZGVyXG5zcHJlYWRcbmFycmFuZ2VcbmNhbXBcbmludmVudFxuY290dG9uXG5ib3JuXG5kZXRlcm1pbmVcbnF1YXJ0XG5uaW5lXG50cnVja1xubm9pc2VcbmxldmVsXG5jaGFuY2VcbmdhdGhlclxuc2hvcFxuc3RyZXRjaFxudGhyb3dcbnNoaW5lXG5wcm9wZXJ0eVxuY29sdW1uXG5tb2xlY3VsZVxuc2VsZWN0XG53cm9uZ1xuZ3JheVxucmVwZWF0XG5yZXF1aXJlXG5icm9hZFxucHJlcGFyZVxuc2FsdFxubm9zZVxucGx1cmFsXG5hbmdlclxuY2xhaW1cbmNvbnRpbmVudFxub3h5Z2VuXG5zdWdhclxuZGVhdGhcbnByZXR0eVxuc2tpbGxcbndvbWVuXG5zZWFzb25cbnNvbHV0aW9uXG5tYWduZXRcbnNpbHZlclxudGhhbmtcbmJyYW5jaFxubWF0Y2hcbnN1ZmZpeFxuZXNwZWNpYWxseVxuZmlnXG5hZnJhaWRcbmh1Z2VcbnNpc3Rlclxuc3RlZWxcbmRpc2N1c3NcbmZvcndhcmRcbnNpbWlsYXJcbmd1aWRlXG5leHBlcmllbmNlXG5zY29yZVxuYXBwbGVcbmJvdWdodFxubGVkXG5waXRjaFxuY29hdFxubWFzc1xuY2FyZFxuYmFuZFxucm9wZVxuc2xpcFxud2luXG5kcmVhbVxuZXZlbmluZ1xuY29uZGl0aW9uXG5mZWVkXG50b29sXG50b3RhbFxuYmFzaWNcbnNtZWxsXG52YWxsZXlcbm5vclxuZG91YmxlXG5zZWF0XG5hcnJpdmVcbm1hc3RlclxudHJhY2tcbnBhcmVudFxuc2hvcmVcbmRpdmlzaW9uXG5zaGVldFxuc3Vic3RhbmNlXG5mYXZvclxuY29ubmVjdFxucG9zdFxuc3BlbmRcbmNob3JkXG5mYXRcbmdsYWRcbm9yaWdpbmFsXG5zaGFyZVxuc3RhdGlvblxuZGFkXG5icmVhZFxuY2hhcmdlXG5wcm9wZXJcbmJhclxub2ZmZXJcbnNlZ21lbnRcbnNsYXZlXG5kdWNrXG5pbnN0YW50XG5tYXJrZXRcbmRlZ3JlZVxucG9wdWxhdGVcbmNoaWNrXG5kZWFyXG5lbmVteVxucmVwbHlcbmRyaW5rXG5vY2N1clxuc3VwcG9ydFxuc3BlZWNoXG5uYXR1cmVcbnJhbmdlXG5zdGVhbVxubW90aW9uXG5wYXRoXG5saXF1aWRcbmxvZ1xubWVhbnRcbnF1b3RpZW50XG50ZWV0aFxuc2hlbGxcbm5lY2tgO1xuXG5cblxubGV0IHdoaXRlc3BhY2UgPSAvW1xcclxcbl0rLztcbmxldCB3b3JkcyA9IHRvcDEwMDAuc3BsaXQod2hpdGVzcGFjZSk7XG5sZXQgdmFsaWR3b3JkcyA9IHdvcmRzLmZpbHRlcih3b3JkID0+IHdvcmQubGVuZ3RoID4gMik7XG5cbmV4cG9ydCBjb25zdCBzYW1wbGVUZXh0ID0gKHJhbmdlID0gMzAwKSA9PiB7XG4gIGNvbnNvbGUubG9nKHdvcmRzLmxlbmd0aCk7XG4gIHJldHVybiB2YWxpZHdvcmRzLnNsaWNlKDAsIHJhbmdlKTtcbn07IiwiaW1wb3J0IHsgYWRkQ29vcmRpbmF0ZXMsIHJlcGxhY2VDaGlsZHJlbiwgaW5jbHVkZXNDb29yZGluYXRlcyB9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCBTcGVsbCBmcm9tIFwiLi9zcGVsbFwiO1xuXG5leHBvcnQgY2xhc3MgU25ha2Uge1xuICAgIGNvbnN0cnVjdG9yKGdyaWQsIHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMubW92ZXMgPSBbMCwwXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbnMgPSBbcG9zaXRpb25dO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzID0gW107XG4gICAgICAgIGxldCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGhlYWQuY2xhc3NOYW1lID0gJ3NuYWtlaGVhZCc7XG4gICAgICAgIGhlYWQuaW5uZXJUZXh0ID0gXCLwn5CNXCI7XG4gICAgICAgIHRoaXMuYm9keSA9IFtoZWFkXTsgLy8gW3sgZWxlbWVudDogPHNwYW4+LCBwb3M6IH1dXG4gICAgICAgIHRoaXMuZ3JpZCA9IGdyaWQ7XG5cbiAgICB9XG5cbiAgICBpc0VtcHR5KHBvcykge1xuICAgICAgICBsZXQgcmVzID0gIXRoaXMuZ3JpZC5nZXRFbGVtZW50KHBvcykuZmlyc3RDaGlsZDtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBnZXRQb2ludHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9ucy5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIGhhbmRsZUxvc3MoKSB7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIHRoaXMuY2xlYXJQcmV2aW91c1JlbmRlcigpO1xuICAgICAgICBsZXQgbG9zZXJTcGVsbCA9IG5ldyBTcGVsbCh0aGlzLmdyaWQpO1xuXG5cbiAgICAgICAgbG9zZXJTcGVsbC5jYXN0KFsnZnVuJywncmVkJywnZ3JlZW4nLCd5ZWxsb3cnLCdyaWdodCddKTtcbiAgICAgICAgbG9zZXJTcGVsbC5zdG9yZWRUZXh0ID0gJ1lPVUxPU1RTTkFLRTogJyArIHRoaXMuYm9keS5sZW5ndGggKyAnIFBPSU5UUyc7XG4gICAgICAgIHRoaXMuZ3JpZC5zcGVsbHMucHVzaChsb3NlclNwZWxsKTtcbiAgICAgICAgdGhpcy5ncmlkLmN1cnJlbnRTcGVsbCA9IG5ldyBTcGVsbCh0aGlzLmdyaWQpO1xuICAgIH1cblxuICAgIGNsZWFyUHJldmlvdXNSZW5kZXIoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5mb3JFYWNoKGVsZSA9PiBlbGUucmVtb3ZlKCkpO1xuICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMgPSBbXTtcbiAgICB9XG5cbiAgICBvdXRPZkJvdW5kcyhwb3MpIHtcbiAgICAgICAgcmV0dXJuIChwb3NbMF0gPj0gdGhpcy5ncmlkLmhlaWdodCB8fCBcbiAgICAgICAgICAgIHBvc1swXSA8IDAgfHwgXG4gICAgICAgICAgICBwb3NbMV0gPj0gdGhpcy5ncmlkLndpZHRoIHx8IFxuICAgICAgICAgICAgcG9zWzFdIDwgMClcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICBpZiAoIXRoaXMubW92ZXNbMF0gJiYgIXRoaXMubW92ZXNbMV0pIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gXG5cbiAgICAgICAgbGV0IG5leHRQb3NpdGlvbiA9IGFkZENvb3JkaW5hdGVzKHRoaXMucG9zaXRpb25zWzBdLCB0aGlzLm1vdmVzLCB0aGlzLmdyaWQpXG5cbiAgICAgICAgaWYgKGluY2x1ZGVzQ29vcmRpbmF0ZXModGhpcy5wb3NpdGlvbnMsIG5leHRQb3NpdGlvbikgfHwgXG4gICAgICAgICAgICB0aGlzLm91dE9mQm91bmRzKG5leHRQb3NpdGlvbikpIHtcblxuICAgICAgICAgICAgdGhpcy5oYW5kbGVMb3NzKClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5pc0VtcHR5KG5leHRQb3NpdGlvbikpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25zLnVuc2hpZnQobmV4dFBvc2l0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuZWF0KG5leHRQb3NpdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25zLnVuc2hpZnQobmV4dFBvc2l0aW9uKTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25zLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGVhdChwb3MpIHtcbiAgICAgICAgbGV0IHNuYWNrID0gdGhpcy5ncmlkLmdldEVsZW1lbnQocG9zKS5maXJzdENoaWxkO1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICB0aGlzLmJvZHkucHVzaChzbmFjayk7XG5cbiAgICB9XG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmNsZWFyUHJldmlvdXNSZW5kZXIoKTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9ucy5mb3JFYWNoKChwb3MsIGkpID0+IHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5ncmlkLmdldEVsZW1lbnQocG9zKTtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuYm9keVtpXTtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ3NuYWtlJylcbiAgICAgICAgICAgIHJlcGxhY2VDaGlsZHJlbihlbGVtZW50LCBjaGlsZCk7XG5cbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKGNoaWxkKTtcbiAgICAgICAgfSlcblxuICAgIH1cblxuXG5cbn0iLCJpbXBvcnQgR3JpZCBmcm9tICcuL2dyaWQnO1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuL3V0aWwnXG5pbXBvcnQga2V5d29yZEluZGV4IGZyb20gJy4va2V5d29yZHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGVsbCB7XG4gICAgY29uc3RydWN0b3IoZ3JpZCkge1xuICAgICAgICB0aGlzLnBlckZyYW1lS2V5d29yZHMgPSBbXTtcbiAgICAgICAgdGhpcy5hcHBsaWVkS2V5d29yZHMgPSBbXTtcbiAgICAgICAgdGhpcy5ncmlkID0gZ3JpZDtcblxuXG4gICAgICAgIHRoaXMuY3VycmVudFBvcyA9IHRoaXMuZ3JpZC5yYW5kb21Qb3NpdGlvbigpO1xuXG4gICAgICAgIHRoaXMuc3RvcmVkVGV4dCA9ICcnO1xuICAgICAgICB0aGlzLmFjdGl2ZVRleHQgPSAnJztcbiAgICAgICAgdGhpcy5rZXl3b3JkSW5kZXggPSBrZXl3b3JkSW5kZXg7XG4gICAgICAgIHRoaXMucm90YXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5jbGFzc0FyciA9IFtdO1xuICAgICAgICB0aGlzLm1vdmVzID0gWzAsMF07XG4gICAgICAgIHRoaXMuY29sb3JzID0gW107XG4gICAgICAgIHRoaXMuZm9udCA9ICdtb25vJztcbiAgICAgICAgdGhpcy5zaXplID0gMTU7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzID0gW107XG4gICAgfVxuXG4gICAgcmVjZWl2ZShpbnB1dCkge1xuICAgICAgICB0aGlzLmFjdGl2ZVRleHQgKz0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy5leHRyYWN0S2V5d29yZHMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBkZWxldGVDaGFyYWN0ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVGV4dCA9IHRoaXMuYWN0aXZlVGV4dC5zbGljZSgwLCB0aGlzLmFjdGl2ZVRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgY2FzdChrZXl3b3Jkcykge1xuICAgICAgICBpZiAoIShrZXl3b3JkcyBpbnN0YW5jZW9mIEFycmF5KSkga2V5d29yZHMgPSBba2V5d29yZHNdO1xuICAgICAgICBjb25zdCBub3RTdG9yZWQgPSBbJ2FsbCcsICdjbGVhcicsICdzcGVsbCcsICdmYXN0JywgJ3Nsb3cnXTtcblxuICAgICAgICBrZXl3b3Jkcy5mb3JFYWNoKGt3ID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwbHlLZXl3b3JkKGt3KTtcbiAgICAgICAgICAgIGlmICghbm90U3RvcmVkLmluY2x1ZGVzKGt3KSkgdGhpcy5hcHBsaWVkS2V5d29yZHMucHVzaChrdyk7IFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgYXBwbHlLZXl3b3JkKGt3KSB7XG4gICAgICAgIGxldCB7IGFjdGlvbiwgdHlwZSB9ID0gdGhpcy5rZXl3b3JkSW5kZXhba3ddO1xuICAgICAgICBcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdtb3ZlJzpcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVzID0gVXRpbC5hZGRDb29yZGluYXRlcyh0aGlzLm1vdmVzLCBhY3Rpb24pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb2xvcic6IFxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JzLnB1c2goYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JvdGF0ZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGUgPSB0aGlzLnJvdGF0ZSA/IG51bGwgOiAncm90YXRlJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZvbnQnOlxuICAgICAgICAgICAgICAgIHRoaXMuZW1vamkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvbnQgPSBhY3Rpb247XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzbmFrZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLmZyYW1lcmF0ZSA9IDE1MDtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQucGxheVNuYWtlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzcGVlZCc6XG4gICAgICAgICAgICAgICAgbGV0IG5ld2ZwcyA9IE1hdGguZmxvb3IodGhpcy5ncmlkLmZyYW1lcmF0ZSAqIGFjdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKG5ld2ZwcyA+IDQwMDApIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5mcmFtZXJhdGUgPSA0MDAwMDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld2ZwcyA8IDEwMCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkLmZyYW1lcmF0ZSA9IDEwMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkLmZyYW1lcmF0ZSA9IG5ld2ZwcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdmb250c2l6ZSc6XG4gICAgICAgICAgICAgICAgbGV0IG5ld3NpemUgPSBNYXRoLmZsb29yKHRoaXMuc2l6ZSAqIGFjdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKG5ld3NpemUgPiA0MCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSA0MDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld3NpemUgPCA2KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSA9IDY7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplID0gbmV3c2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zaXplKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0Fyci5wdXNoKCdjaXJjbGUnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NsZWFyJzpcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQuc3BlbGxzLmZvckVhY2goc3BlbGwgPT4gc3BlbGwuY2xlYXJQcmV2aW91c1JlbmRlcigpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQuc3BlbGxzID0gW107XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbW9qaSc6XG4gICAgICAgICAgICAgICAgdGhpcy5lbW9qaSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzcGVsbCc6XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVJhbmRvbVNwZWxsKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhbGwnOlxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5zcGVsbHMuZm9yRWFjaChzcGVsbCA9PiBzcGVsbC5jYXN0KHRoaXMuYXBwbGllZEtleXdvcmRzKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0eXBldGVzdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnBsYXlUeXBldGVzdCgpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZXh0cmFjdEtleXdvcmRzKCkge1xuICAgICAgICBpZiAoIXRoaXMuY29udGFpbnNLZXl3b3JkKHRoaXMuYWN0aXZlVGV4dCkpIHJldHVybjtcblxuICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSB0aGlzLmFjdGl2ZVRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdWJzdHIgPSB0aGlzLmFjdGl2ZVRleHQuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICBsZXQga3cgPSB0aGlzLmNvbnRhaW5zS2V5d29yZChzdWJzdHIpO1xuXG4gICAgICAgICAgICBpZiAoa3cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlZFRleHQgKz0gc3Vic3RyO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FzdChrdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVUZXh0ID0gdGhpcy5hY3RpdmVUZXh0LnNsaWNlKGkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdEtleXdvcmRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgY29udGFpbnNLZXl3b3JkKHN0cikge1xuICAgICAgICBsZXQga3dzID0gT2JqZWN0LmtleXModGhpcy5rZXl3b3JkSW5kZXgpO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQga3cgb2Yga3dzKSB7IFxuICAgICAgICAgICAgaWYgKHN0ci5pbmNsdWRlcyhrdykpIHJldHVybiBrdztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY2xlYXJQcmV2aW91c1JlbmRlcigpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzLmZvckVhY2goZWxlID0+IGVsZS5yZW1vdmUoKSk7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UG9zID0gVXRpbC5hZGRDb29yZGluYXRlcyh0aGlzLmN1cnJlbnRQb3MsIHRoaXMubW92ZXMpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHNodWZmbGVDb2xvcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbG9ycy5sZW5ndGggPT09IDApIHJldHVybiAnbm9uZSc7XG4gICAgICAgIGlmICh0aGlzLmNvbG9ycy5sZW5ndGggPT09IDEgKSByZXR1cm4gdGhpcy5jb2xvcnNbMF1cbiAgICAgICAgdGhpcy5jb2xvcnMucHVzaCh0aGlzLmNvbG9ycy5zaGlmdCgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzWzFdO1xuICAgIH1cblxuICAgIGdlbmVyYXRlUmFuZG9tU3BlbGwoKSB7XG4gICAgICAgIGxldCBrZXl3b3JkcyA9IE9iamVjdC5rZXlzKHRoaXMua2V5d29yZEluZGV4KTtcbiAgICAgICAgY29uc29sZS5sb2coa2V5d29yZHMpO1xuICAgICAgICBsZXQgYXBwbGllZEtleXdvcmRzID0gJyc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGxldCByYW5kSWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGtleXdvcmRzLmxlbmd0aCAtIDMpKSArIDM7IFxuICAgICAgICAgICAgY29uc29sZS5sb2cocmFuZElkeCk7XG4gICAgICAgICAgICBhcHBsaWVkS2V5d29yZHMgKz0ga2V5d29yZHNbcmFuZElkeF07XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYXBwbGllZEtleXdvcmRzKTtcbiAgICAgICAgbGV0IHNwZWxsID0gbmV3IFNwZWxsKHRoaXMuZ3JpZCk7XG4gICAgICAgIHNwZWxsLnJlY2VpdmUoYXBwbGllZEtleXdvcmRzKTtcbiAgICAgICAgdGhpcy5ncmlkLnNwZWxscy5wdXNoKHNwZWxsKTtcbiAgICAgICAgcmV0dXJuIHNwZWxsO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5jbGVhclByZXZpb3VzUmVuZGVyKCk7XG5cbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLnN0b3JlZFRleHQgKyB0aGlzLmFjdGl2ZVRleHQ7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmN1cnJlbnRQb3M7XG4gICAgICAgIGxldCBkZWx0YTtcbiAgICAgICAgaWYgKHRoaXMubW92ZXNbMF0gPT09IDAgJiYgdGhpcy5tb3Zlc1sxXSA9PT0gMCkge1xuICAgICAgICAgICAgZGVsdGEgPSBbMCwxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB4ID0gTWF0aC5zaWduKHRoaXMubW92ZXNbMF0pO1xuICAgICAgICAgICAgbGV0IHkgPSBNYXRoLnNpZ24odGhpcy5tb3Zlc1sxXSk7XG4gICAgICAgICAgICBkZWx0YSA9IFt4LHldO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsZXR0ZXIgPSB0aGlzLmVtb2ppID8gVXRpbC50b0Vtb2ppKHRleHRbaV0pIDogdGV4dFtpXTtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCh0aGlzLmZvbnQsIHRoaXMucm90YXRlLCAnYWN0aXZlJywgLi4udGhpcy5jbGFzc0Fycik7XG4gICAgICAgICAgICBzcGFuLnN0eWxlLmZvbnRTaXplID0gdGhpcy5zaXplICsgJ3B4JztcbiAgICAgICAgICAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5zaHVmZmxlQ29sb3JzKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jb2xvcnMubGVuZ3RoID4gMCkgc3Bhbi5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7IFxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KHBvcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFV0aWwucmVwbGFjZUNoaWxkcmVuKGVsZW1lbnQsIHNwYW4pO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzLnB1c2goc3Bhbik7XG4gICAgICAgICAgICBwb3MgPSBVdGlsLmFkZENvb3JkaW5hdGVzKHBvcywgZGVsdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5jdXJyZW50U3BlbGwgPT09IHRoaXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIHNwYW4uY2xhc3NOYW1lID0gJ2N1cnNvcic7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5ncmlkLmdldEVsZW1lbnQocG9zKTtcbiAgICAgICAgICAgIFV0aWwucmVwbGFjZUNoaWxkcmVuKGVsZW1lbnQsIHNwYW4pO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzLnB1c2goc3Bhbik7XG4gICAgICAgIH07XG4gICAgfVxuXG59XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IHNhbXBsZVRleHQgfSBmcm9tIFwiLi9zYW1wbGV0ZXh0XCI7XG5pbXBvcnQgeyByZXBsYWNlQ2hpbGRyZW4sIGFkZENvb3JkaW5hdGVzIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5leHBvcnQgY2xhc3MgVHlwZVRlc3Qge1xuICAgIGNvbnN0cnVjdG9yKGdyaWQpIHtcbiAgICAgICAgdGhpcy5ncmlkID0gZ3JpZDtcblxuICAgICAgICB0aGlzLndpZHRoID0gTWF0aC5mbG9vcih0aGlzLmdyaWQud2lkdGggKiAwLjcpO1xuICAgICAgICAvLyB0aGlzLmhlaWdodCA9IE1hdGguZmxvb3IodGhpcy5ncmlkLmhlaWdodCAqIDAuOCk7IFxuICAgICAgICB0aGlzLnBvcyA9IHRoaXMuY2FsY3VsYXRlUG9zKCk7XG4gICAgICAgIHRoaXMudXNlcldvcmRzID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudFdvcmQgPSAwO1xuICAgICAgICB0aGlzLmJhZGtleXN0cm9rZXMgPSAwO1xuICAgICAgICB0aGlzLnJlbmRlcmVkV29yZEJlZ2luID0gMDtcbiAgICAgICAgdGhpcy5yZW5kZXJlZFdvcmRFbmQgPSAwO1xuICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHM9IFtdO1xuICAgICAgICB0aGlzLm51bVJvd3MgPSAzO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZTtcbiAgICAgICAgdGhpcy5pbnB1dCA9IFwiXCI7XG5cbiAgICAgICAgdGhpcy50b3BXb3JkcyA9IHNhbXBsZVRleHQoKTtcbiAgICAgICAgdGhpcy5lbnN1cmVVc2VyV29yZHMoKTtcbiAgICB9XG5cbiAgICBvdmVyKCkge1xuXG4gICAgfVxuXG4gICAgY2xlYXJQcmV2aW91c1JlbmRlcigpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnRzLmZvckVhY2goZWxlID0+IGVsZS5yZW1vdmUoKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmNsZWFyUHJldmlvdXNSZW5kZXIoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJQYWRkaW5nKCk7XG4gICAgICAgIHRoaXMucmVuZGVyV29yZERpc3BsYXkoKVxuICAgICAgICB0aGlzLnJlbmRlcklucHV0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2FsY3VsYXRlVGltZSgpKVxuICAgIH0gIFxuICAgIFxuICAgIHJlbmRlclBhZGRpbmcoKSB7XG4gICAgICAgIGxldCBudW1Sb3dzID0gdGhpcy5udW1Sb3dzICsgNzsgXG4gICAgICAgIGxldCB0b3AgPSB0aGlzLnBvc1swXSAtIDI7XG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5wb3NbMV0gLSAyO1xuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLndpZHRoICsgNDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvd3M7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIGxldCBlbCA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KFtpICsgdG9wLCBqICsgbGVmdF0pO1xuICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTmFtZSA9ICd0ZXN0LXBhZGRpbmcnO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICByZXBsYWNlQ2hpbGRyZW4oZWwsIGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcklucHV0KCkge1xuICAgICAgICBsZXQgdG9wID0gdGhpcy5udW1Sb3dzICsgdGhpcy5wb3NbMF0gKyAyO1xuICAgICAgICBsZXQgbGVmdCA9IHRoaXMucG9zWzFdO1xuICAgICAgICBsZXQgaW5wdXR3aWR0aCA9IHRoaXMud2lkdGggLSA2O1xuICAgICAgICBsZXQgdGltZVN0YXJ0ID0gdGhpcy53aWR0aCArIDI7XG4gICAgICAgIGxldCB0aW1lID0gdGhpcy5jYWxjdWxhdGVUaW1lKClcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0d2lkdGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBsZXQgZWwgPSB0aGlzLmdyaWQuZ2V0RWxlbWVudChbdG9wLCBpICsgbGVmdF0pO1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZChcInRlc3QtaW5wdXRcIiwgJ3R5cGV0ZXN0Jyk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudHMucHVzaChjaGlsZCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0W2ldKSBjaGlsZC5pbm5lclRleHQgPSB0aGlzLmlucHV0W2ldO1xuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXMuaW5wdXQubGVuZ3RoKSBjaGlsZC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgICAgICAgICByZXBsYWNlQ2hpbGRyZW4oZWwsIGNoaWxkKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIGxldCBlbCA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KFt0b3AsIGkgKyB0aW1lU3RhcnRdKTtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoXCJ0ZXN0LXRpbWVcIiwgXCJ0eXBldGVzdFwiKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIGNoaWxkLmlubmVyVGV4dCA9IHRpbWVbaV07XG4gICAgICAgICAgICByZXBsYWNlQ2hpbGRyZW4oZWwsIGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgcmVuZGVyV29yZERpc3BsYXkoKSB7XG4gICAgICAgIGxldCB3b3Jkc1JlbmRlcmVkID0gMDtcbiAgICAgICAgbGV0IGZpcnN0Q29sTGVuZ3RoID0gMDtcblxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLm51bVJvd3MgOyByb3cgKz0gMikge1xuXG4gICAgICAgICAgICBsZXQgY29sID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChjb2wgPD0gdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgICAgIGxldCB3b3JkSWR4ID0gdGhpcy5yZW5kZXJlZFdvcmRCZWdpbiArIHdvcmRzUmVuZGVyZWQ7XG4gICAgICAgICAgICAgICAgbGV0IHJlbmRlcmVkV29yZCA9IHRoaXMudXNlcldvcmRzW3dvcmRJZHhdO1xuICAgICAgICAgICAgICAgIGlmIChjb2wgKyByZW5kZXJlZFdvcmQud29yZC5sZW5ndGggPiB0aGlzLndpZHRoKSBicmVhaztcblxuICAgICAgICAgICAgICAgIGxldCByZW5kZXJDb29yZCA9IFtyb3csIGNvbF07XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJXb3JkKHdvcmRJZHgsIHJlbmRlckNvb3JkKTtcbiAgICAgICAgICAgICAgICB3b3Jkc1JlbmRlcmVkICs9IDE7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbCArPSByZW5kZXJlZFdvcmQud29yZC5sZW5ndGggKyAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocm93ID09PSAwKSBmaXJzdENvbExlbmd0aCA9IHdvcmRzUmVuZGVyZWQ7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3b3Jkc1JlbmRlcmVkIDw9IDgpIHtcbiAgICAgICAgICAgIHRoaXMubnVtUm93cyA9IDU7XG4gICAgICAgIH0gXG4gICAgICAgIHRoaXMucmVuZGVyZWRXb3JkRW5kID0gdGhpcy5yZW5kZXJlZFdvcmRCZWdpbiArIGZpcnN0Q29sTGVuZ3RoO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRXb3JkID49IHRoaXMucmVuZGVyZWRXb3JkRW5kKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkV29yZEJlZ2luID0gdGhpcy5jdXJyZW50V29yZDtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVUaW1lKCkge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudFRpbWUpIHJldHVybiAnMTowMCc7XG5cbiAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCB0aW1lTGVmdCA9IDYwIC0gTWF0aC5mbG9vcigobm93LmdldFRpbWUoKSAtIHRoaXMuY3VycmVudFRpbWUuZ2V0VGltZSgpKSAvIDEwMDApO1xuXG4gICAgICAgIGlmICh0aW1lTGVmdCA8IDApIHJldHVybiAnMDowMCc7XG4gICAgICAgIFxuICAgICAgICBsZXQgbWluID0gTWF0aC5mbG9vcih0aW1lTGVmdCAvIDYwKTtcbiAgICAgICAgbGV0IHNlYyA9IHRpbWVMZWZ0ICUgNjA7XG4gICAgICAgIHNlYyA9IChzZWMgPCAxMCkgPyAnMCcgKyBzZWMgOiBzZWMudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IGZvcm1hdHRlZFRpbWUgPSBtaW4gKyAnOicgKyBzZWM7XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWRUaW1lO1xuICAgIH1cblxuICAgIHJlbmRlcldvcmQoaWR4LCBwb3MpIHtcbiAgICAgICAgbGV0IHR5cGVTdGFydCA9IGFkZENvb3JkaW5hdGVzKHRoaXMucG9zLCBbMCwwXSlcbiAgICAgICAgbGV0IHdvcmRCZWdpbiA9IGFkZENvb3JkaW5hdGVzKHR5cGVTdGFydCwgcG9zKTtcbiAgICAgICAgbGV0IHdvcmQgPSB0aGlzLnVzZXJXb3Jkc1tpZHhdO1xuXG4gICAgICAgIGxldCBzdGF0dXMgPSAnbm9uZSc7XG5cbiAgICAgICAgaWYgKHdvcmQubWlzdHlwZWQpIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdyZWQnO1xuICAgICAgICB9IGVsc2UgaWYgKGlkeCA8IHRoaXMuY3VycmVudFdvcmQpIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdzdWNjZXNzJztcbiAgICAgICAgfSBlbHNlIGlmIChpZHggPT09IHRoaXMuY3VycmVudFdvcmQpIHtcbiAgICAgICAgICAgIGxldCBtYXRjaGVzID0gdGhpcy51c2VyV29yZHNbdGhpcy5jdXJyZW50V29yZF0ud29yZCA9PT0gdGhpcy5pbnB1dDtcbiAgICAgICAgICAgIHN0YXR1cyA9IG1hdGNoZXMgPyAnc3VjY2VzcycgOiAnY3VycmVudCc7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkLndvcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBlbGVDb29yZCA9IGFkZENvb3JkaW5hdGVzKHdvcmRCZWdpbiwgWzAsIGldKVxuICAgICAgICAgICAgbGV0IGVsZSA9IHRoaXMuZ3JpZC5nZXRFbGVtZW50KGVsZUNvb3JkKTtcblxuICAgICAgICAgICAgbGV0IGxldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgbGV0dGVyLmlubmVySFRNTCA9IHdvcmQud29yZFtpXTtcbiAgICAgICAgICAgIGxldHRlci5jbGFzc0xpc3QuYWRkKFwidHlwZXRlc3RcIiwgc3RhdHVzKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50cy5wdXNoKGxldHRlcik7XG4gICAgICAgICAgICByZXBsYWNlQ2hpbGRyZW4oZWxlLCBsZXR0ZXIpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBuZXh0V29yZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIHRoaXMuZW5zdXJlVXNlcldvcmRzKCk7XG4gICAgICAgIGxldCBjdXJyZW50V29yZCA9IHRoaXMudXNlcldvcmRzW3RoaXMuY3VycmVudFdvcmRdO1xuICAgICAgICBjdXJyZW50V29yZC5taXN0eXBlZCA9IHRoaXMuaW5wdXQgIT09IGN1cnJlbnRXb3JkLndvcmQ7XG4gICAgICAgIHRoaXMuaW5wdXQgPSAnJztcbiAgICAgICAgdGhpcy5jdXJyZW50V29yZCsrO1xuICAgIH1cblxuICAgIHZhbGlkYXRlQ3VycmVudFdvcmQoKSB7XG4gICAgICAgIGxldCBjdXJyZW50V29yZCA9IHRoaXMudXNlcldvcmRzW3RoaXMuY3VycmVudFdvcmRdO1xuICAgICAgICBsZXQgaW5wdXRSRSA9IG5ldyBSZWdFeHAoJ14nICsgdGhpcy5pbnB1dClcbiAgICAgICAgY3VycmVudFdvcmQubWlzdHlwZWQgPSAhaW5wdXRSRS50ZXN0KGN1cnJlbnRXb3JkLndvcmQpO1xuICAgIH1cblxuXG4gICAgZW5zdXJlVXNlcldvcmRzKCkge1xuICAgICAgICBpZiAodGhpcy51c2VyV29yZHMubGVuZ3RoIDwgNTAgKyB0aGlzLmN1cnJlbnRXb3JkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA1MDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRvcFdvcmRzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRXb3JkID0gdGhpcy50b3BXb3Jkc1tyYW5kSWR4XTtcbiAgICAgICAgICAgICAgICBsZXQgd29yZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgd29yZDogcmFuZFdvcmQsXG4gICAgICAgICAgICAgICAgICAgIG1pc3R5cGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJXb3Jkcy5wdXNoKHdvcmQpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY2FsY3VsYXRlUG9zKCkge1xuICAgICAgICBsZXQgeCA9IDU7XG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcigoMC4zICogdGhpcy5ncmlkLndpZHRoKSAvIDIpO1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH1cblxuICAgIHJlY2VpdmUoZSkge1xuICAgICAgICAvL2RldGVybWluZXMgXG5cbiAgICAgICAgaWYgKFsxMywgMzJdLmluY2x1ZGVzKGUua2V5Q29kZSkpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dFdvcmQoKTtcbiAgICAgICAgfSBlbHNlIGlmICgoZS5rZXlDb2RlID49IDY1ICYmIGUua2V5Q29kZSA8IDkxKSB8fCBlLmtleUNvZGUgPT09IDIyMikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRUaW1lKSB0aGlzLmN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQgKz0gZS5rZXk7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlQ3VycmVudFdvcmQoKVxuICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5leGl0VHlwZXRlc3QoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0KSB0aGlzLmlucHV0ID0gdGhpcy5pbnB1dC5zbGljZSgwLCB0aGlzLmlucHV0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUN1cnJlbnRXb3JkKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW5wdXQpO1xuICAgIH1cblxufSAiLCJleHBvcnQgZnVuY3Rpb24gYWRkQ29vcmRpbmF0ZXMoYTEsIGEyKSB7XG4gICAgcmV0dXJuIFthMVswXSArIGEyWzBdLCBhMVsxXSArIGEyWzFdXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJvdW5kZWRDb29yZGluYXRlcyhhMSwgYTIsIGdyaWQpIHtcbiAgICBsZXQgeCA9IGExWzBdICsgYTJbMF1cbiAgICBsZXQgeSA9IGExWzFdICsgYTJbMV07XG4gICAgeCA9IHggJSBncmlkLmhlaWdodDtcbiAgICB5ID0geSAlIGdyaWQud2lkdGg7XG4gICAgaWYgKHggPCAwKSB4ICs9IGdyaWQuaGVpZ2h0O1xuICAgIGlmICh5IDwgMCkgeSArPSBncmlkLndpZHRoO1xuICAgIHJldHVybiBbeCx5XVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUNoaWxkcmVuKHBhcmVudCwgY2hpbGQpIHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsQ29vcmRpbmF0ZXMoYTEsIGEyKSB7XG4gICAgcmV0dXJuIGExWzBdID09PSBhMlswXSAmJiBhMVsxXSA9PT0gYTJbMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlc0Nvb3JkaW5hdGVzKGNvb3JkTGlzdCwgY29vcmQpIHtcbiAgICBsZXQgcmVzID0gZmFsc2U7XG5cbiAgICBjb29yZExpc3QuZm9yRWFjaCh4eSA9PiB7XG4gICAgICAgIGlmIChlcXVhbENvb3JkaW5hdGVzKHh5LCBjb29yZCkpIHtcbiAgICAgICAgICAgIHJlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0Vtb2ppKHN0cikge1xuICAgIHN0ciA9IHN0ci50b0xvd2VyQ2FzZSgpO1xuXG4gICAgbGV0IEVNT0pJUyA9IFtcbiAgICAgIFwi8J+YoFwiLFxuICAgICAgXCLwn5izXCIsXG4gICAgICBcIvCfkajigI3wn5Go4oCN8J+RplwiLFxuICAgICAgXCLwn42GXCIsXG4gICAgICBcIvCfkLVcIixcbiAgICAgIFwi8J+QsVwiLFxuICAgICAgXCLwn5KpXCIsXG4gICAgICBcIvCfjJ5cIixcbiAgICAgIFwi8J+MiFwiLFxuICAgICAgXCLwn4yKXCIsXG4gICAgICBcIvCfl71cIixcbiAgICAgIFwi8J+buFwiLFxuICAgICAgXCLwn5Go4oCN8J+RqOKAjfCfkaZcIixcbiAgICAgIFwi8J+lk1wiLFxuICAgICAgXCLwn5GMXCIsXG4gICAgICBcIvCfj55cIixcbiAgICAgIFwi8J+OolwiLFxuICAgICAgXCLwn5qWXCIsXG4gICAgICBcIvCfjalcIixcbiAgICAgIFwi8J+NlFwiLFxuICAgICAgXCLwn4eu8J+Ht1wiLFxuICAgICAgXCLwn6SlXCIsXG4gICAgICBcIvCfkYJcIixcbiAgICAgIFwi4piiXCIsXG4gICAgICBcIvCfiLVcIixcbiAgICAgIFwi8J+ko1wiXG4gICAgXTtcblxuXG4gICAgbGV0IGNvZGUgPSBzdHIuY2hhckNvZGVBdCgwKSAtIDk3O1xuICAgIHJldHVybiBFTU9KSVNbY29kZV07XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9