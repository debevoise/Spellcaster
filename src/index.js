import Grid from './grid';
import Spell from './spell';
import { sampleText } from "./sampletext";

import "./styles/index.scss";
import { TypeTest } from './typetest';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const input = document.getElementById('input');
    window.Spell = Spell;
    const grid = new Grid(root, input);

    grid.animate();
    window.grid = grid;
    window.sampleText = sampleText;
    window.typetest = new TypeTest(grid);

})