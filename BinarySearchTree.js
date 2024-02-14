class Node {
    constructor (val) {
        this.value = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null
    }

    insert (val) {
        const node = new Node(val)
        if (!this.root) {
            this.root = node
            return this
        }
        let currentNode = this.root
        while (true) {
            if (val < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = node
                    return this
                } else {
                    currentNode = currentNode.left
                }
            } else if (val > currentNode.value) {
                if (!currentNode.right) {
                    currentNode.right = node
                    return this
                } else {
                    currentNode = currentNode.right
                }
            } else {
                return undefined
            }
        }
        
    }
}

const tree = new BinarySearchTree()