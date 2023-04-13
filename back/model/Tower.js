import Stack from '../model/TADs/stack/Stack.js'

export default class Tower {
    constructor(size = 3, towerNumber) {
        this.id = towerNumber;
        this.plates = new Stack(size);
        this.size = size;
    }

    getPlate() {
        return this.plates.unStack().content;
    }

    stackPlate(plate) {
        let returnPlate = null

        // Si la torre no tiene nada, se apila directamente.
        if (!this.plates.tope) this.plates.stack(plate);
        // Si el plato a apilar es de un tamaño menor al plato tope, se apila.
        else if (plate < this.plates.tope.content) this.plates.stack(plate);
        // Caso contrario, devolvemos el plato.
        else returnPlate = plate;

        return returnPlate;
    }

    getStringFormat() {
        return this.plates.getString();
    }

    getFormat() {
        return this.plates.getArray();
    }
}