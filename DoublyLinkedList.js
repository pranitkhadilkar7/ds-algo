class Node {
    constructor (val) {
        this.value = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor () {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push (val) {
        const node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.length++
        return this
    }
}

const list = new DoublyLinkedList()