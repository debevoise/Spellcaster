import Spell from './spell';

export default class Grid {
    constructor(root, input) {
        this.root = root;
        this.input = input;
        
        this.CELLSIZE = 30;
        this.cursorPos = [0,0];
        this.height = Math.floor(root.offsetHeight / this.CELLSIZE);
        this.width = Math.floor(root.offsetWidth / this.CELLSIZE);
        this.spells = [];
        this.currentSpell = new Spell(this);
        this.framerate = 200;
        this.grid = this.populate();

        this.receiveInput = this.receiveInput.bind(this);
        document.addEventListener("keydown", this.receiveInput);
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

    nextSpell() {
        // if (this.currentSpell.appliedKeywords.length > 0) {
            this.spells.push(this.currentSpell);
        // }
        this.currentSpell = new Spell(grid);
    }

    getElement(coordinates) {
        let x = coordinates[0] % this.height;
        let y = coordinates[1] % this.width;
        if (x < 0) x += this.height;
        if (y < 0) y += this.width;
        return this.grid[x][y];
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
            console.log(this.currentSpell.storedText, this.currentSpell.activeText)
        }
    } 

    frame() {
        this.currentSpell.move();
        this.spells.forEach(spell => spell.move());
    }

    animate(rate) {
        this.framerate = rate || this.framerate;

        this.timeout = setTimeout(() => {
            this.frame();
            this.animate();
        }, this.framerate);
    }
}