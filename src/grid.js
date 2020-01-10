import Spell from './spell';
import * as Util from './util'
import { Snake } from './snake';
import keywords from "./keywords";
import { TypeTest } from './typetest';

export default class Grid {
    constructor(root, input) {
        this.root = root;
        this.input = input;
        
        this.CELLSIZE = 25;
        this.cursorPos = [0,0];
        this.height = Math.ceil(root.offsetHeight / this.CELLSIZE) - 2;
        this.width = Math.floor(root.offsetWidth / this.CELLSIZE);
        this.spells = [];
        this.currentSpell = new Spell(this);
        this.framerate = 200;

        this.typetest = null;
        this.grid = this.populate();
        this.play = true;

        let keywordsList = document.getElementById("keywords-list");
        let logo = document.getElementById('logo');
        let castNewSpell = document.getElementById('cast-new-spell');
        castNewSpell.onclick = () => this.nextSpell();

        logo.onclick = () => {
            this.grid.push(this.currentSpell.generateRandomSpell());
        }
        Object.keys(keywords).forEach(kw => {
          let li = document.createElement("li");
          li.innerText = kw;
          li.onclick = () => this.currentSpell.receive(kw);
          keywordsList.appendChild(li);
        });

        this.resizeGrid = this.resizeGrid.bind(this);
        this.receiveInput = this.receiveInput.bind(this);
        this.receiveClick = this.receiveClick.bind(this);

        document.addEventListener("keydown", this.receiveInput);

        this.root.addEventListener("click", (e) => {
            let { pos } = e.target.dataset;
            if (pos) this.receiveClick(pos);
        });

        window.onresize = this.resizeGrid;
    }
 
    populate() {
        let grid = [];
        for (let i = 0; i < this.height; i++) {
            let rowArr = [];
            let row = document.createElement('ul');
            row.className = 'row';
            for (let j = 0; j < this.width; j++) {
                let cell = document.createElement('div')
                cell.className = 'cell';
                cell.dataset.pos = [i, j]
                rowArr.push(cell);

                row.appendChild(cell);
            } 
            this.root.appendChild(row);
            grid.push(rowArr);
        }

        return grid;
    }


    clearGridElements() {
        while (this.root.firstChild) {
            this.root.firstChild.remove();
        }
    }

    resizeGrid() {
        let root = document.getElementById('root');
        this.clearGridElements();
        this.height = Math.floor(root.offsetHeight / this.CELLSIZE) - 1;
        this.width = Math.floor(root.offsetWidth / this.CELLSIZE);
        this.grid = this.populate();
    }

    nextSpell() {
        if (this.snakeMode()) {
            this.currentSpell.clearPreviousRender()
            this.currentSpell = new Spell(grid);
        } else if (this.currentSpell.storedText || this.currentSpell.activeText) {
            this.spells.push(this.currentSpell);
            this.currentSpell = new Spell(grid);
        } else {
            let prevSpell = this.currentSpell;
            this.currentSpell = new Spell(grid);
            prevSpell.render()
        }  
    }

    getElement(coordinates) {
        let x = coordinates[0] % this.height;
        let y = coordinates[1] % this.width;
        if (x < 0) x += this.height;
        if (y < 0) y += this.width;
        return this.grid[x][y];
    }


    snakeMode() {
        return (this.currentSpell instanceof Snake)
    }

    playSnake() {
        let lastSpell = this.currentSpell;
        this.spells.push(lastSpell);
        let x = Math.floor(this.height / 2);
        let y = Math.floor(this.width / 2);
        
        let centerPos = [x, y];

        this.currentSpell = new Snake(this, centerPos)
    }

    playTypetest() {
        // clearTimeout(this.timeout);
        if (this.typetest) this.typetest.clearPreviousRender();
        this.typetest = new TypeTest(this);
        this.typetest.render();
        // this.spells.push(this.currentSpell);
        // this.currentSpell = null;
    }

    exitTypetest() {
        if (this.typetest) this.typetest.clearPreviousRender();

        this.typetest = null;
        this.currentSpell.clearPreviousRender();
        this.currentSpell = new Spell(this);
    }

    receiveClick(pos) {
        if (this.snakeMode()) return;
        if (this.currentSpell) this.currentSpell.currentPos = pos;
    }

    updateCurrentPosition(keycode) {
        
        let delta; 

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

        let { currentPos } = this.currentSpell;
        this.currentSpell.currentPos = Util.addCoordinates(delta, currentPos);
    }

    randomPosition() {
        let x = Math.floor(Math.random() * this.height);
        let y = Math.floor(Math.random() * this.width);

        return [x,y];
    }

    receiveInput(e) {
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

    frame() {
        this.spells.forEach(spell => spell.move());
        
        if (this.typetest) {
            this.typetest.render()
        }
        this.currentSpell.move();
    }



    animate(rate) {
        // if (this.typetest) return;

        this.framerate = rate || this.framerate;
        this.timeout = setTimeout(() => {
            this.frame();
            this.animate();
        }, this.framerate);
    }


}