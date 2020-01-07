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
        this.colors = [];
        this.font = 'mono';
        this.size = 15;

        this.renderedElements = [];
    }

    receive(input) {
        this.activeText += input.toLowerCase();
        this.extractKeywords();
        this.render();
    }

    deleteCharacter() {
        if (this.activeText) {
            this.activeText = this.activeText.slice(0, this.activeText.length - 1);
        } 
    }

    cast(keywords) {
        if (!(keywords instanceof Array)) keywords = [keywords];
        const notStored = ['all', 'clear', 'spell', 'fast', 'slow'];

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
                this.colors.push(action);
                break;
            case 'font':
                this.emoji = false;
                this.font = action;
                break;
            case 'speed':
                let newfps = Math.floor(this.grid.framerate * action);
                if (newfps > 4000) {
                  this.grid.framerate = 40000;
                } else if (newfps < 100) {
                  this.grid.framerate = 100;
                } else {
                  this.grid.framerate = newfps;
                }
                break;
            case 'fontsize':
                let newsize = Math.floor(this.size * action);
                if (newsize > 40) {
                    this.size = 40;
                } else if (newsize < 6) {
                    this.size = 6;
                } else {
                    this.size = newsize;
                }
                console.log(this.size);
                break;
            case 'clear':
                this.grid.spells.forEach(spell => spell.clearPreviousRender());
                this.grid.spells = [];
                break;
            case 'emoji':
                this.emoji = true;
                break;
            case 'spell':
                this.generateRandomSpell();
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
                this.storedText += substr;
                this.cast(kw);
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

    shuffleColors() {
        if (this.colors.length === 0) return 'none';
        if (this.colors.length === 1 ) return this.colors[0]
        this.colors.push(this.colors.shift());
        return this.colors[1];
    }

    generateRandomSpell() {
        let keywords = Object.keys(this.keywordIndex);
        console.log(keywords);
        let appliedKeywords = '';

        for (let i = 0; i < 5; i++) {
            let randIdx = Math.floor(Math.random() * (keywords.length - 3)) + 3; 
            console.log(randIdx);
            appliedKeywords += keywords[randIdx];
        }
        console.log(appliedKeywords);
        let spell = new Spell(this.grid);
        spell.receive(appliedKeywords);
        this.grid.spells.push(spell);
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
            const letter = this.emoji ? Util.toEmoji(text[i]) : text[i];
            const span = document.createElement('span');

            span.textContent = letter.toUpperCase();
            span.classList.add(this.font, 'active');
            span.style.fontSize = this.size + 'px';
            span.style.backgroundColor = this.shuffleColors();
            if (this.colors.length > 0) span.style.color = 'white'; 
            const element = this.grid.getElement(pos);
            
            Util.replaceChildren(element, span);
            this.renderedElements.push(span);
            pos = Util.addCoordinates(pos, delta);
        }

        if (this.grid.currentSpell === this) {
            const span = document.createElement("span");
            span.className = 'cursor';
            const element = this.grid.getElement(pos);
            Util.replaceChildren(element, span);
            this.renderedElements.push(span);
        };
    }

}

