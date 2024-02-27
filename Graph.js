class Graph {
    constructor () {
        this.adjacencyList = {}
    }

    addVertex (value) {
        if (!this.adjacencyList[value]) this.adjacencyList[value] = []
    }
}