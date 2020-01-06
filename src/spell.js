import Grid from './grid';
import * as Util from './util'
import keywordIndex from './keywords';

export default class Spell {
    constructor(grid) {
        this.perFrameKeywords = [];
        this.appliedKeywords = [];
        this.grid = grid;


        this.currentPos = this.grid.randomPosition();

        this.storedText = '';
        this.activeText = '';
        this.keywordIndex = keywordIndex;

        this.moves = [0,0];
        this.color = 'red';
        this.font = 'mono';
        this.size = 15;

        this.renderedElements = [];
    }

    receive(input) {
        this.activeText += input.toLowerCase();
        this.extractKeywords();
        this.render();
    }

    cast(keywords) {
        if (!(keywords instanceof Array)) keywords = [keywords];
        const notStored = ['all', 'clear'];

        keywords.forEach(kw => {
            this.applyKeyword(kw);
            if (!notStored.includes(kw)) this.appliedKeywords.push(kw); 
        });
    }

    applyKeyword(kw) {
        let { action, type } = this.keywordIndex[kw];
        
        switch (type) {
            case 'move':
                this.moves = Util.addCoordinates(this.moves, action)
                break;
            case 'color': 
                this.color = action;
                break;
            case 'font':
                this.font = action;
                break;
            case 'all':
                this.grid.spells.forEach(spell => spell.cast(this.appliedKeywords));
                break;
            default:
                break;
        }
        this.render();
    }

    extractKeywords() {
        if (!this.containsKeyword(this.activeText)) return;

        for (let i = 2; i <= this.activeText.length; i++) {
            let substr = this.activeText.slice(0, i);
            let kw = this.containsKeyword(substr);

            if (kw) {
                this.cast(kw);
                this.storedText += substr;
                this.activeText = this.activeText.slice(i);
                this.extractKeywords();
            }
        } 
    }

    containsKeyword(str) {
        let kws = Object.keys(this.keywordIndex);
        
        for (let kw of kws) { 
            if (str.includes(kw)) return kw;
        }
        return false;
    }

    clearPreviousRender() {
        this.renderedElements.forEach(ele => ele.remove());
    }

    move() {
        this.currentPos = Util.addCoordinates(this.currentPos, this.moves);
        this.render();
    }

    render() {
        this.clearPreviousRender();

        let text = this.storedText + this.activeText;
        let pos = this.currentPos;
        let delta;
        if (this.moves[0] === 0 && this.moves[1] === 0) {
            delta = [0,1];
        } else {
            let x = Math.sign(this.moves[0]);
            let y = Math.sign(this.moves[1]);
            delta = [x,y];
        }

        for (let i = 0; i < text.length; i++) {
            const letter = text[i];
            const span = document.createElement('span');

            span.textContent = letter;
            span.classList.add(this.size, this.color, this.font, 'active');

            const element = this.grid.getElement(pos);
            Util.replaceChildren(element, span);
            this.renderedElements.push(span);
            pos = Util.addCoordinates(pos, delta);
        }
    }

}

