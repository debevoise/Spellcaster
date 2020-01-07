import { addCoordinates } from "./util";

export class Snake {
    constructor(grid, position) {
        this.moves = [0,0];
        this.positions = [position];
        let head = document.createElement("span").innerText("🐍").className('snake');
        this.body = [head]; // [{ element: <span>, pos: }]
        this.grid = grid;

    }

    isEmpty(pos) {
        !!this.grid.getElement(pos).firstChild
    }

    getPoints() {
        return this.positions.length - 1;
    }

    handleLoss() {
        this.
    }

    move() {
        if (!this.moves[0] && !this.moves[1]) return;
        let nextPosition = addCoordinates(this.positions[0], this.moves)
        if (!isEmpty(nextPosition)) this.eat(nextPosition);
    }





}