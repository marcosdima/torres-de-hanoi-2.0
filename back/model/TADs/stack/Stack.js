import StackNode from './StackNode.js'
// const StackNode = require('./StackNode');

export default class Stack {

    constructor() {
        this.tope = null;
        this.size = 0;
    }

    stack(data) {
        let node;
        
        if (typeof data === 'StackNode') {
            node = data;
        }
        else node = new StackNode(data);

        if (this.size == 0) {
            this.tope = node;
        }
        else {
            this.tope.stack(node);
            this.tope = node;
        }

        this.size++;
    }

    unStack() {
        const node = this.tope;
        if (node.downNode) {
            this.tope = this.tope.downNode;
            this.tope.removeUpNode()
            this.size--;
        }
        else {
            this.node = null;
            this.size = 0;
        }
        return node;
    }

    getString() {
        let auxStack = new Stack();
        let string = '';
        const size = this.size;

        for (let i = 0; i < size; i++) {
            let node = this.unStack();
            string += node.content + ' ';
            auxStack.stack(node);
        }
    
        this.fuseStacks(this, auxStack);

        string = string.trim();
        return string;
    }

    fuseStacks(stackTarget, stackAux) {
        const size = stackAux.size;
        for (let i = 0; i < size; i++) {
            const node = stackAux.unStack();
            stackTarget.stack(node);
        } 
    }
}

/* TEST
let pila = new Stack();
let node = new StackNode('Corazón');
let node2 = new StackNode('Pica');
let node3 = new StackNode('Diamante');

pila.stack(node);
pila.stack(node2);
pila.stack(node3);

console.log(pila.getString());

console.log(pila.getString());
*/