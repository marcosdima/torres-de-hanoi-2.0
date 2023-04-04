import Controller from './Controller.js'
import Game from './model/Game.js';

export function setTowers(data) {
    const target = document.getElementById('tower');
    // Create the towers.
    for (let element of data) {
        let tower = makeATower(element);
        tower.className = "golden";
        target.appendChild(tower);
    }
}

function makeATower(data) {
    let div = document.createElement('div');
    let arrayAux = [];
    console.log(data)
    // Set the 'Platos'.
    for (let element of data?.content) {
        
        if (!element) element = 0;

        let p = document.createElement('p');
        let plato = '-';

        for (let i = 0; i < element; i++) {
            plato = `-${plato}-`;
        }
        
        p.innerHTML = plato;
        p.className= 'flex-center disk';
        arrayAux.push(p);  
    }

    for (let i = arrayAux.length; i > 0; i--) {
        let pElement = arrayAux.shift();
        div.appendChild(pElement); 
    }

    return div;
}

let game = new Game();
let controller = new Controller(game);

const boton = document.getElementById('mi-boton');
boton.addEventListener('click', () => {
    game.move('0 2')
    game.move('0 2')
    game.move('0 1')
    game.move('2 1')
    game.move('2 1')
    setTowers(controller.getTowers());
});
