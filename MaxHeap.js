class MaxBinaryHeap {
    constructor () {
        this.values = [41, 39, 33, 18, 27, 12]
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
}