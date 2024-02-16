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

    find (val) {
        let currentNode = this.root
        while (!!currentNode) {
            if (val === currentNode.value) return currentNode
            if (val < currentNode.value) {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }
        return undefined
    }

    breadthFirstSearch () {
        if (!this.root) return false
        const queue = []
        const visited = []
        queue.push(this.root)
        while (queue.length) {
            const node = queue.shift()
            visited.push(node.value)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return visited
    }
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)