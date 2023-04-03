import Controller from './Controller.js'
import Game from './model/Game.js';

export function setTowers(data) {
    const target = document.getElementById('tower');
    for (let element of data) {
        let tower = makeATower(element);
        tower.className = "golden";
        target.appendChild(tower);
    }
}

function makeATower(data) {
    let div = document.createElement('div');
    const elements = data.content.split(' ');
    console.log(elements);
    for (const element of elements) {
        let p = document.createElement('p');
        let plato = '-';

        for (let i = 0; i < Number(element); i++) {
            plato = `-${plato}-`;
          }
        
        p.innerHTML = plato;
        p.className= 'flex-center disk';
        div.appendChild(p);   
    }
    return div;
}

let game = new Game();
let controller = new Controller(game);

const boton = document.getElementById('mi-boton');
boton.addEventListener('click', () => {
    setTowers(controller.getTowers());
});
