import Tower from "./Tower.js";

export default class Board {
    constructor(numberOfTowers) {
        this.numberOfTowers = numberOfTowers;
        this.towers = [];
        this.getReady();
    }

    getReady() {
        for (let i = 0; i < this.numberOfTowers; i++) {
            let firstTower = (i == 0);
            let newTower = new Tower(firstTower, 3, i);
            this.towers.push(newTower);
        };
    }

    move(towerChoosed, towerTarget) {
        const plate = this.towers[towerChoosed].getPlate();
        console.log(towerChoosed, towerTarget)
        if (plate) {
            this.towers[towerTarget].stackPlate(plate);
        }
        return plate;
    }
}