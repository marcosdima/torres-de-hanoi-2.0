export default class View {
    constructor(controller) {
        this.controller = controller;
        controller.addView(this);
    }

    setTowers() {
        let data = this.controller.getTowers();
        const target = document.getElementById('tower');
        target.innerHTML = "";
        // Create the towers.
        for (let element of data) {
            let tower = this.makeATower(element);
            tower.className = "golden";
            target.appendChild(tower);
        }
    }
    
    makeATower(data) {
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
}