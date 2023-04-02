class StackNode {
    
    constructor(content, ) {
        this.downNode = null;
        this.upNode = null;
        this.content = null;

        this.setContent(content);
    }

    setContent(content) {
        this.content = content;
    }

    stack(node) {
        this.upNode = node;
        node.downNode = this;
    }

    removeUpNode() {
        this.upNode = null;
    }

};

module.exports = StackNode;