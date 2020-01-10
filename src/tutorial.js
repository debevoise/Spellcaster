import TutorialSpell from "./tutorialSpell";

export default class Tutorial {
    constructor(grid) {
        this.grid = grid;

        this.currentStage = 0;
        this.activeInstructions = [];

        this.stages = [
            [], [], [], [], []
        ]
    }

    populateInstructions() {
    
        let welcome = new Spell(this.grid);
        welcome.currentPos = [2,2];
        welcome.storedText = 'welcome to spellcaster'
        welcome.cast('red');

        let about = new Spell(this.grid);
        about.currentPos = [4, 4];
        about.storedText = "simply type to cast spells";
        about.cast("blue");

        this.stages[1].push(welcome);
        this.stages[2].push(welcome);


    }

}