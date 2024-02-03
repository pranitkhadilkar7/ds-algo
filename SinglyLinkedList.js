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
}

const list = new SinglyLinkedList()
list.push("Hii")
list.push("There!")
list.push("blaaa")

list.pop()
list.pop()
list.pop()

console.log(list)