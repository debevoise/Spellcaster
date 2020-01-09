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

    }

    isEmpty(pos) {
        let res = !this.grid.getElement(pos).firstChild;
        return res;
    }

    getPoints() {
        return this.positions.length - 1;
    }

    handleLoss() {
        debugger
        this.clearPreviousRender();
        let loserSpell = new Spell(this.grid);


        loserSpell.cast(['fun','red','green','yellow','right']);
        loserSpell.storedText = 'YOULOSTSNAKE: ' + this.body.length + ' POINTS';
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
        debugger
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