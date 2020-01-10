import { addCoordinates, replaceChildren, includesCoordinates } from "./util";
import Spell from "./spell";

export class Snake {
    constructor(grid, position) {
        this.moves = [0,0];
        this.positions = [position];
        
        this.renderedElements = [];
        let head = document.createElement("span");
        head.className = 'snakehead';
        head.innerText = "🐍";
        this.body = [head]; // [{ element: <span>, pos: }]
        this.grid = grid;
        let inst = new Spell(this.grid);
        inst.storedText = 'arrow keys to move';
        inst.moves = [0, 1];
        inst.cast(['red', 'blue']);
        this.grid.spells.push(inst);
    }

    isEmpty(pos) {
        let res = !this.grid.getElement(pos).firstChild;
        return res;
    }

    getPoints() {
        return this.positions.length - 1;
    }

    handleLoss() {

        this.clearPreviousRender();
        let loserSpell = new Spell(this.grid);

        loserSpell.cast(['circle','blue','sans','right','big']);
        loserSpell.storedText = 'Game over: ' + (this.body.length - 1) + ' POINTS';
        this.grid.spells.push(loserSpell);
        this.grid.currentSpell = new Spell(this.grid);
    }

    clearPreviousRender() {
        this.renderedElements.forEach(ele => ele.remove());
        this.renderedElements = [];
    }

    outOfBounds(pos) {
        return (pos[0] >= this.grid.height || 
            pos[0] < 0 || 
            pos[1] >= this.grid.width || 
            pos[1] < 0)
    }

    move() {
        if (!this.moves[0] && !this.moves[1]) {
            this.render();
            return;
        } 

        let nextPosition = addCoordinates(this.positions[0], this.moves, this.grid)

        if (includesCoordinates(this.positions, nextPosition) || 
            this.outOfBounds(nextPosition)) {

            this.handleLoss()
            return;
        } else if (!this.isEmpty(nextPosition)) {
            this.positions.unshift(nextPosition);
            this.eat(nextPosition)
        } else {
            this.positions.unshift(nextPosition);
            this.positions.pop();
        }
        this.render();
        
    }

    eat(pos) {
        let snack = this.grid.getElement(pos).firstChild;

        this.body.push(snack);

    }



    render() {
        this.clearPreviousRender();

        this.positions.forEach((pos, i) => {
            let element = this.grid.getElement(pos);
            let child = this.body[i];
            child.classList.add('snake')
            replaceChildren(element, child);

            this.renderedElements.push(child);
        })

    }



}