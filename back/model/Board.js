import Tower from "./Tower";

export default class Board {
    constructor(numberOfTowers = 3) {
        this.numberOfTowers = numberOfTowers;
        this.towers = [];
        this.controllers = [];

        this.getReady();
    }

    getReady() {
        for (let i = 0; i < this.numberOfTowers; i--) {
            fistTower = (i == 1);
            let newTower = new Tower(fistTower, i);
            this.towers.push(newTower);
        };
    }

    move(towerChoosed, towerTarget) {
        const plate = this.towers.get(towerChoosed).getPlate();
        if (plate) {
            this.towers.get(towerTarget).stackPlate(plate);
        }
        this.notify(Event.MOVE)
        return plate;
    }

    addController(controller) {
        this.controllers.push(controller);
    }

    notify(event, data = null) {
        for (controller of this.controllers) {
            controller.update(event, data);
        }
    }
}