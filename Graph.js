class Graph {
    constructor () {
        this.adjacencyList = {}
    }

    addVertex (value) {
        if (!this.adjacencyList[value]) this.adjacencyList[value] = []
    }

    addEdge (vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        }
    }

    removeEdge (vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1)
    }
}

const graph = new Graph()
graph.addVertex('Tokyo')
graph.addVertex('NYC')
graph.addVertex('Dallas')
graph.addEdge('Tokyo', 'Dallas')
graph.addEdge('Tokyo', 'NYC')