import Board from './Board.js';
import Event from './Event.js'

export default class Game {
    constructor(numberOfTowers = 3) {
        this.board = null;
        this.numberOfTowers = numberOfTowers;
        this.controllers = [];
    }

    initialize() {
        this.board = new Board(this.numberOfTowers);
        this.notify(Event.UPDATE);
    }

    move(instruction) {
        const { selected, target } = this.decode(instruction);
        this.board.move(selected, target);
        this.notify(Event.UPDATE);
        if (this.checkWinning()) this.notify(Event.WON);
    }

    decode(instruction) {
        const parts = instruction.split(' ');
        const data = {
            selected: parts[0],
            target: parts[1]
        };
        return data;
    }

    getTowers() {
        let result = [];
        
        for (let tower of this.board.towers) {
            let element = {
                number: tower.id,
                content: tower.getFormat(),
                size: tower.size
            };
            result.push(element);
        }
        return result;
    }

    addController(controller) {
        this.controllers.push(controller);
    }

    checkWinning() {
        let win = false;
        for (let tower of this.board.towers) {
            if (tower.isFull() && tower.id != 0) {
                win = true;
            };
        };
        return win;
    }

    notify(event, data = null) {
        for (let controller of this.controllers) {
            controller.update(event, data);
        }
    }
}