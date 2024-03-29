import StackNode from './StackNode.js'
// const StackNode = require('./StackNode');

export default class Stack {
    constructor(maxSize=0) {
        this.tope = null;
        this.size = 0;
        this.maxSize = maxSize;
    }

    stack(data) {
        if (!this.isFull() && (data)) {
            let node;

            // Check if data isn't a StackNode, in that case initialice it as one.
            if (typeof data === 'StackNode') {
                node = data;
            }
            else node = new StackNode(data);
        
            // Check if it's the first plate.
            if (this.size == 0) {
                this.tope = node;
            }
            // If isn't, does the change of tope.
            else {
                this.tope.stack(node);
                this.tope = node;
            }
            
            this.size++;
        }
    }

    unStack() {
        let node = this.tope;

        if (node?.downNode) {
            this.tope = this.tope.downNode;
            this.tope.removeUpNode()
            this.size--;
        }
        else {
            this.tope = null;
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

    getArray() {
        let auxStack = new Stack(this.maxSize);
        let array = [];
        const emptySpace = this.maxSize - this.size;
        const size = this.size;

        for (let i = 0; i < emptySpace; i++) {
            array.push(0);
        } 

        if (!this.isEmpty()) {
            for (let i = 0; i < size; i++) {
                let node = this.unStack();
                array.push(node?.content);
                auxStack.stack(node.content);
            }

            if (this.size != size) this.fuseStacks(this, auxStack);
        }

        return array;
    }

    fuseStacks(stackTarget, stackAux) {
        const size = stackAux.size;
        stackTarget.tope = null;
        for (let i = 0; i < size; i++) {
            const node = stackAux.unStack();
            stackTarget.stack(node.content);
        } 
    }

    isEmpty() {
        return (this.size == 0);
    }

    isFull() {
        return (this.size == this.maxSize);
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