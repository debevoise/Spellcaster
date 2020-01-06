import Grid from './grid';
import Spell from './spell'
import "./styles/index.scss";

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const input = document.getElementById('input');
    window.Spell = Spell;
    const grid = new Grid(root, input);
    grid.animate();
    window.grid = grid;
})