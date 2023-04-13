import Controller from './Controller.js'
import Game from './model/Game.js';

export function setTowers(data) {
    const target = document.getElementById('tower');
    target.innerHTML = "";
    console.log(data);
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
        p.id = 'main-board'
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
    game.move('0 1')
    game.move('0 1')
    setTowers(controller.getTowers());
    
    // setTowers(controller.getTowers());
});
