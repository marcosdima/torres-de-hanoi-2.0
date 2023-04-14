import Controller from './Controller.js'
import Game from './model/Game.js';
import View from './View.js';

let game = new Game();
let controller = new Controller(game);
let view = new View(controller);

const boton = document.getElementById('mi-boton');
boton.addEventListener('click', () => {
    controller.start();
});

const input = document.getElementById('enter');
input.addEventListener('click', () => {
    let movement = document.getElementById('mi-input').value;
    controller.move(movement);
})
