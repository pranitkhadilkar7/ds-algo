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
}