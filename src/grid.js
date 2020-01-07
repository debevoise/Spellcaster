import Spell from './spell';
import * as Util from './util'

export default class Grid {
    constructor(root, input) {
        this.root = root;
        this.input = input;
        
        this.CELLSIZE = 25;
        this.cursorPos = [0,0];
        this.height = Math.floor(root.offsetHeight / this.CELLSIZE) - 1;
        this.width = Math.floor(root.offsetWidth / this.CELLSIZE);
        this.spells = [];
        this.currentSpell = new Spell(this);
        this.framerate = 200;
        this.grid = this.populate();
        this.play = true;

        this.resizeGrid = this.resizeGrid.bind(this);
        this.receiveInput = this.receiveInput.bind(this);
        document.addEventListener("keydown", this.receiveInput);
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
        if (this.currentSpell.storedText || this.currentSpell.activeText) {
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

    updateCurrentPosition(keycode) {
        let { currentPos } = this.currentSpell;
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

        this.currentSpell.currentPos = Util.addCoordinates(delta, currentPos);
        this.currentSpell.render();
    }

    randomPosition() {
        let x = Math.floor(Math.random() * this.height);
        let y = Math.floor(Math.random() * this.width);

        return [x,y];
    }

    receiveInput(e) {
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

    frame() {
        this.spells.forEach(spell => spell.move());
        this.currentSpell.move();
    }



    animate(rate) {
        this.framerate = rate || this.framerate;
        this.timeout = setTimeout(() => {
            this.frame();
            this.animate();
        }, this.framerate);
    }
}