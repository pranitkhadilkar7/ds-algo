class PriorityQueue {
    constructor () {
        this.values = []
    }

    enqueue(value, priority) {
        this.values.push({value, priority})
        this.values.sort
    }
    dequeue () {
        return this.values.shift()
    }

    sort () {
        this.values.sort((a, b) => a.priority - b.priority)
    }
}

class WeightedGraph {
    constructor () {
        this.adjacencyList = {}
    }

    addVertex (vertex) {
        this.adjacencyList[vertex] = []
    }

    addEdge (vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight})
        this.adjacencyList[vertex2].push({node: vertex1, weight})
    }
}