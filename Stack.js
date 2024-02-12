class Node {
    constructor (val) {
        this.value = val
        this.next = null
    }
}

class Stack {
    constructor () {
        this.first = null
        this.last = null
        this.size = null
    }

    push (val) {
        const node = new Node(val)
        if (!this.first) {
            this.first = node
            this.last = node
        } else {
            node.next = this.first
            this.first = node
        }
        return ++this.size
    }

    pop () {
        if (!this.first) return null
        const node = this.first
        if (this.size === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
        }
        this.size--
        return node.value
    }
}

const stack = new Stack()