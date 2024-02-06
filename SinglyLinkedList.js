class Node {
    constructor (val) {
        this.value = val
        this.next = null
    }
}

class SinglyLinkedList {
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
            this.tail = node
        }
        this.length++
        return this
    }

    pop () {
        if (!this.head) {
            return undefined
        }
        let cur = this.head
        let pre = null
        while (cur) {
            if (cur.next) {
                pre = cur
                cur = cur.next
            } else {
                cur = null
            }
            
        }
        if (pre) {
            cur = pre.next
            this.tail = pre
            this.tail.next = null
            this.length--
            return cur
        }
        cur = this.head
        this.head = null
        this.tail = null
        this.length--
        return cur
    }

    shift () {
        if (!this.head) return undefined
        var curHead = this.head
        this.head = this.head.next
        this.length--
        if (!this.head) {
            this.tail = null
        }
        return curHead
    }

    unshift (val) {
        const node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.length++
        return this
    }

    get (index) {
        if (index < 0 || index >= this.length) return null
        let curIndex = 0
        let curNode = this.head
        while (index !== curIndex) {
            curNode = curNode.next
            curIndex++
        }
        return curNode
    }

    set (value, index) {
        const node = this.get(index)
        if (node) {
            node.value = value
            return true
        }
        return false
    }

    insert (value, index) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return !!this.unshift(value)
        if (index === this.length) return !!this.push(value)
        const newNode = new Node(value)
        const preNode = this.get(index - 1)
        const nextNode = preNode.next
        preNode.next = newNode
        newNode.next = nextNode
        this.length++
        return true
    }

    remove (index) {
        if (index < 0 || index >= this.length) return null
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        const preNode = this.get(index - 1)
        const node = preNode.next
        preNode.next = preNode.next.next
        this.length--
        return node
    }
}

const list = new SinglyLinkedList()
list.push("Hii")
list.push("There!")
list.push("blaaa")

console.log(list)