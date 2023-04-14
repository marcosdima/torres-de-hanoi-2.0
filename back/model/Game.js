import Board from './Board.js';
import Event from './Event.js'

export default class Game {
    constructor(numberOfTowers = 3) {
        this.board = new Board(numberOfTowers);
        this.controllers = [];
    }

    initialize() {
        this.notify(Event.START)
    }

    move(instruction) {
        const { selected, target } = this.decode(instruction);
        this.board.move(selected, target);
        this.notify(Event.MOVE)
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

    notify(event, data = null) {
        for (let controller of this.controllers) {
            controller.update(event, data);
        }
    }
}