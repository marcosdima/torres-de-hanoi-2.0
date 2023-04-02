export default class Tower {
    static count = 0;
    constructor(fistTower = false, size = 3) {
        this.id = null;
        this.plates = new Array(size);
        
        setId();
        if (firstTower) setTower(size);
    }

    setId() {
        this.count += 1;
        this.id = this.count;
    }

    setTower(size) {
        for (let i = size; i > 0; i--) {
            this.plates.push(i);
        };
    }

    getDisc() {

    }
}