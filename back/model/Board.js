import Tower from "./Tower.js";

export default class Board {
    constructor(numberOfTowers, size = 3) {
        this.numberOfTowers = numberOfTowers;
        this.sizeOfTowers = size;
        this.towers = [];
        this.getReady();
    }

    getReady() {
        for (let i = 0; i < this.numberOfTowers; i++) {
            let newTower = new Tower(this.sizeOfTowers, i);
            this.towers.push(newTower);
        };
        this.initialiceTower();
    }

    initialiceTower() {
        for (let i = this.sizeOfTowers; i > 0; i--) {
            this.towers[0].stackPlate(i);
        };
    }

    move(towerChoosed, towerTarget) {
        let returnPlate = null
        console.log(this.towers)
        let plate = this.towers[towerChoosed].getPlate();
        
        if (plate) returnPlate = this.towers[towerTarget].stackPlate(plate);
        if (returnPlate) this.towers[towerChoosed].stackPlate(returnPlate);

        return plate;
    }
}