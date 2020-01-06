import Grid from './grid'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const input = document.getElementById('input');

    const grid = new Grid(root, input);
})