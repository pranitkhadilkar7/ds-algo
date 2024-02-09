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

    pop () {
        if (!this.head) {
            return undefined
        }
        const node = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = node.prev
            this.tail.next = null
            node.prev = null
        }
        this.length--
        return node
    }

    shift () {
        if (!this.head) return undefined
        const node = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = node.next
            this.head.prev = null
            node.next = null
        }
        this.length--
        return node
    }

    unshift (val) {
        const node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        this.length++
        return this
    }

    #getWithForwardTraversal (index) {
        let curNode = this.head
        let counter = 0
        while (index !== counter) {
            curNode = curNode.next
            counter++
        }
        return curNode
    }

    #getWithBackwardTraversal (index) {
        let curNode = this.tail
        let counter = this.length - 1
        while (index !== counter) {
            curNode = curNode.prev
            counter--
        }
        return curNode
    }

    get (index) {
        if (index < 0 || index >= this.length) return undefined
        if (index < (this.length/2)) {
            return this.#getWithForwardTraversal(index)
        }
        return this.#getWithBackwardTraversal(index)
    }

    set (val, index) {
        const node = this.get(index)
        if (!!node) {
            node.value = val
            return true
        }
        return false
    }

    insert (val, index) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return !!this.unshift(val)
        if (index === this.length) return !!this.push(val)
        const prevNode = this.get(index - 1)
        const nextNode = prevNode.next
        const node = new Node(val)
        prevNode.next = node
        node.prev = prevNode
        node.next = nextNode
        nextNode.prev = node
        this.length++
        return true
    }
}

const list = new DoublyLinkedList()