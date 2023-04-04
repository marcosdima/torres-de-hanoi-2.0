import Stack from '../model/TADs/stack/Stack.js'

export default class Tower {
    constructor(firstTower = false, size = 3, towerNumber) {
        this.id = towerNumber;
        this.plates = new Stack(size);
        this.size = size;
        if (firstTower) this.setTower(size);
    }

    setTower(size) {
        for (let i = size; i > 0; i--) {
            this.plates.stack(i);
        };
    }

    getPlate() {
        return this.plates.unStack().content;
    }

    stackPlate(plate) {
        this.plates.stack(plate);
    }

    getStringFormat() {
        return this.plates.getString();
    }

    getFormat() {
        return this.plates.getArray();
    }
}