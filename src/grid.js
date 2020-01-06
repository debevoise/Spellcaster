export default class Grid {
    constructor(root, input) {
        this.root = root;
        this.input = input;

        this.CELLSIZE = 30;

        this.height = Math.floor(root.offsetHeight / this.CELLSIZE);
        this.width = Math.floor(root.offsetWidth / this.CELLSIZE);

        this.grid = this.populate();

        console.log(this.height, this.width)
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

    // populate() {
    //     for (let i = 0; i < this.height; i++) {
    //         let row = document.createElement('ul');
    //         row.className = 'row';
    //         for (let j = 0; j < this.width; j++) {
    //             let cell = document.createElement('div')
    //             cell.className = 'cell';
    //             row.appendChild(cell);
    //         }

    //         this.root.appendChild(row);
    //     }
    // }
}