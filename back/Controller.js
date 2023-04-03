import Game from "./model/Game.js";

export default class Controller {

    constructor(model) {
        this.model = model;
        this.views = [];
        this.model.addController(this);
        this.model.initialize();
    }

    addView(view) {
        this.views.push(view);
    }

    getTowers() {
        return this.model.getTowers();
    }

    update(event, data) {
        for (let view of this.views) {
            switch(event) {
                case Event.START:
                    console.log('Comenzar!')
                    break;
                    
                case Event.MOVE:
                    console.log("Llegó al update!")
                    break;
                default:
                    console.log('No Event detected :(')
            }
        }
    }

}