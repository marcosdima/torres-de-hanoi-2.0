import Game from "./model/Game.js";

export default class Controller {

    constructor(model) {
        this.model = model;
        this.views = [];
        this.model.addController(this);

    }

    start() {
        this.model.initialize();
    }

    addView(view) {
        this.views.push(view);
    }

    getTowers() {
        return this.model.getTowers();
    }

    move(movement) {
        this.model.move(movement);
    }

    update(event, data = null) {
        for (let view of this.views) {
            switch(event) {
                case Event.START:
                    view.setTowers();
                    break;
                    
                case Event.MOVE:
                    view.setTowers();
                    break;
                default:
                    console.log('No Event detected :(')
            }
        }
    }

}