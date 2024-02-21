class Node {
    constructor (value, priority) {
        this.value = value
        this.priority = priority
    }
}

class PriorityQueue {
    constructor () {
        this.values = []
    }

    insert (node) {
        this.values.push(node)
        let currentIndex = this.values.length - 1
        while (true) {
            let parentIndex = Math.floor((currentIndex - 1)/2)
            let parent = this.values[parentIndex]
            if (parentIndex < 0) return this.values
            if (parent.priority <= this.values[currentIndex].priority) return this.values
            this.values[parentIndex] = this.values[currentIndex]
            this.values[currentIndex] = parent
            currentIndex = parentIndex
        }
    }

    extract () {
        if (!this.values.length) return undefined

        const max = this.values[0]
        const min = this.values.pop()
        if (!this.values.length) return max

        this.values[0] = min
        let length = this.values.length
        let currentIndex = 0
        const element = this.values[currentIndex]

        while (true) {
            let leftChildIndex = (2 * currentIndex) + 1
            let rightChildIndex = (2 * currentIndex) + 2
            let leftChild, rightChild
            let swapIndex = null

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex]
                if (leftChild.priority < element.priority) {
                    swapIndex = leftChildIndex
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex]
                if (
                    (!swapIndex && rightChild.priority < element.priority) ||
                    (swapIndex && rightChild.priority < leftChild.priority)
                ) {
                    swapIndex = rightChildIndex
                }
            }

            if (!swapIndex) break

            this.values[currentIndex] = this.values[swapIndex]
            this.values[swapIndex] = element
            currentIndex = swapIndex
        }

        return max
    }
}