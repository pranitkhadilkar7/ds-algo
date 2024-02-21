class MaxBinaryHeap {
    constructor () {
        this.values = [55, 39, 41, 18, 27, 12, 33]
    }

    insert (val) {
        this.values.push(val)
        let currentIndex = this.values.length - 1
        while (true) {
            let parentIndex = Math.floor((currentIndex-1)/2)
            let parent = this.values[parentIndex]
            if (parentIndex < 0) return this.values
            if (parent >= this.values[currentIndex]) return this.values
            this.values[parentIndex] = this.values[currentIndex]
            this.values[currentIndex] = parent
            currentIndex = parentIndex
        }
    }

    extractMax () {
        if (!this.values.length) return undefined

        const max = this.values[0]
        const end = this.values.pop()
        if (!this.values.length) return max

        this.values[0] = end
        let length = this.values.length
        let currentIndex = 0
        const element = this.values[currentIndex]
        while (true) {
            const leftChildIndex = (2 * currentIndex) + 1
            const rightChildIndex = (2 * currentIndex) + 2
            let leftElement, rightElement
            let swapIndex = null

            if (leftChildIndex < length) {
                leftElement = this.values[leftChildIndex]
                if (leftElement > element) {
                    swapIndex = leftChildIndex 
                }
            }

            if (rightChildIndex < length) {
                rightElement = this.values[rightChildIndex]
                if ((!swapIndex && rightElement > element) ||
                    (swapIndex && rightElement > leftElement)) {
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

const heap = new MaxBinaryHeap()