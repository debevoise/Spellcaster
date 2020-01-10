import { sampleText } from "./sampletext";
import { replaceChildren, addCoordinates } from "./util";

export class TypeTest {
    constructor(grid) {
        this.grid = grid;

        this.width = Math.floor(this.grid.width * 0.7);
        // this.height = Math.floor(this.grid.height * 0.8); 
        this.pos = this.calculatePos();
        this.userWords = [];
        this.currentWord = 0;
        this.badkeystrokes = 0;
        this.renderedWordBegin = 0;
        this.renderedWordEnd = 0;
        this.renderedElements= [];
        this.numRows = 3;
        
        this.currentTime;
        this.input = "";

        this.topWords = sampleText();
        this.ensureUserWords();
    }

    over() {
        
        this.clearPreviousRender();
        let loserSpell = new Spell(this.grid);

        loserSpell.cast(["big", "red", "yellow", "mono", "right", 'down', "big"]);
        loserSpell.storedText =
         (this.calculateWPM() + ' WPM');
        this.grid.spells.push(loserSpell);

        this.grid.exitTypetest();
    }

    calculateWPM() {
        if (!this.currentTime) return 0;
        let correctKeystrokes = 0;

        for (let i = 0; i < this.currentWord; i++) {
            let word = this.userWords[i];

            if (!word.mistyped) {
                correctKeystrokes += (word.word.length + 1);
            }
        }

        return Math.floor(correctKeystrokes / 5);
    }

    clearPreviousRender() {
        this.renderedElements.forEach(ele => ele.remove());
    }

    timesUp() {
        if (!this.currentTime) return false;

        let now = new Date();
        let timeLeft =
          60 - Math.floor((now.getTime() - this.currentTime.getTime()) / 1000);
        return (timeLeft < 0);
        
    }

    render() {
        this.clearPreviousRender();
        if (this.timesUp()) {
            this.over()
            return;
        }
        
        this.renderPadding();
        this.renderWordDisplay()
        this.renderInput();

    }  
    
    renderPadding() {
        let numRows = this.numRows + 7; 
        let top = this.pos[0] - 2;
        let left = this.pos[1] - 2;
        let width = this.width + 4;

        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < width; j++) {
                let child = document.createElement('span');
                let el = this.grid.getElement([i + top, j + left]);
                child.className = 'test-padding';
                this.renderedElements.push(child);
                replaceChildren(el, child);
            }
        }
    }

    renderInput() {
        let top = this.numRows + this.pos[0] + 2;
        let left = this.pos[1];
        let inputwidth = this.width - 6;
        let timeStart = this.width;
        let time = this.calculateTime()

        for (let i = 0; i < inputwidth; i++) {
            let child = document.createElement("span");
            let el = this.grid.getElement([top, i + left]);
            child.classList.add("test-input", 'typetest');
            this.renderedElements.push(child);

            if (this.input[i]) child.innerText = this.input[i];
            if (i === this.input.length) child.classList.add('current');
            replaceChildren(el, child);
            timeStart = i + left + 3;
        }


        for (let i = 0; i < time.length; i++) {
            let child = document.createElement("span");
            let el = this.grid.getElement([top, i + timeStart]);
            child.classList.add("test-time", "typetest");
            this.renderedElements.push(child);
            child.innerText = time[i];
            replaceChildren(el, child);
        }
    };
    
    renderWordDisplay() {
        let wordsRendered = 0;
        let firstColLength = 0;

        for (let row = 0; row < this.numRows ; row += 2) {

            let col = 0;
            while (col <= this.width) {
                let wordIdx = this.renderedWordBegin + wordsRendered;
                let renderedWord = this.userWords[wordIdx];
                if (col + renderedWord.word.length > this.width) break;

                let renderCoord = [row, col];
                this.renderWord(wordIdx, renderCoord);
                wordsRendered += 1;
           
                col += renderedWord.word.length + 1;
            }

            if (row === 0) firstColLength = wordsRendered;

        }
 
        this.renderedWordEnd = this.renderedWordBegin + firstColLength;

        if (this.currentWord >= this.renderedWordEnd) {
            this.renderedWordBegin = this.currentWord;
        } 
    }

    calculateTime() {
        
        if (!this.currentTime) return '1:00';

        let now = new Date();
        let timeLeft = 60 - Math.floor((now.getTime() - this.currentTime.getTime()) / 1000);

        if (timeLeft < 0) {
            
            return '0:00';
        }

        let min = Math.floor(timeLeft / 60);
        let sec = timeLeft % 60;
        sec = (sec < 10) ? '0' + sec : sec.toString();
        let formattedTime = min + ':' + sec;
        return formattedTime;
    }

    renderWord(idx, pos) {
        let typeStart = addCoordinates(this.pos, [0,0])
        let wordBegin = addCoordinates(typeStart, pos);
        let word = this.userWords[idx];

        let status = 'none';

        if (word.mistyped) {
            status = 'red';
        } else if (idx < this.currentWord) {
            status = 'success';
        } else if (idx === this.currentWord) {
            let matches = this.userWords[this.currentWord].word === this.input;
            status = matches ? 'success' : 'current';
        }
        

        for (let i = 0; i < word.word.length; i++) {
            let eleCoord = addCoordinates(wordBegin, [0, i])
            let ele = this.grid.getElement(eleCoord);

            let letter = document.createElement("span");
            letter.innerHTML = word.word[i];
            letter.classList.add("typetest", status);
            this.renderedElements.push(letter);
            replaceChildren(ele, letter);
        }

    }

    nextWord() {
        if (this.input.length === 0) return;
        this.ensureUserWords();
        let currentWord = this.userWords[this.currentWord];
        currentWord.mistyped = this.input !== currentWord.word;
        this.input = '';
        this.currentWord++;
    }

    validateCurrentWord() {
        let currentWord = this.userWords[this.currentWord];
        let inputRE = new RegExp('^' + this.input)
        currentWord.mistyped = !inputRE.test(currentWord.word);
    }


    ensureUserWords() {
        if (this.userWords.length < 50 + this.currentWord) {
            for (let i = 0; i <= 50; i++) {
                let randIdx = Math.floor(Math.random() * this.topWords.length);
                let randWord = this.topWords[randIdx];
                let word = {
                    word: randWord,
                    mistyped: false
                }
                
                this.userWords.push(word);
            } 
        }
    }


    calculatePos() {
        let x = 5;
        let y = Math.ceil((0.3 * this.grid.width) / 2);
        return [x, y];
    }

    receive(e) {
        //determines 

        if ([13, 32].includes(e.keyCode)) {
            this.nextWord();
        } else if ((e.keyCode >= 65 && e.keyCode < 91) || e.keyCode === 222) {
            if (!this.currentTime) this.currentTime = new Date();
            this.input += e.key;
            this.validateCurrentWord()
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

} 