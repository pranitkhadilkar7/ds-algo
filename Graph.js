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

    removeVertex (vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    DFS (start) {
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList

        function traverse (vertex) {
            result.push(vertex)
            visited[vertex] = true
            for (let child of adjacencyList[vertex]) {
                if (!visited[child]) {
                    traverse(child)
                }
            }
        }
        traverse(start)
        return result
    }

    DFSIterative (start) {
        const result = []
        const visited = {}
        const stack = [start]
        let currentVertex

        visited[start] = true

        while (stack.length) {
            currentVertex = stack.pop()
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(el => {
                if (!visited[el]) {
                    visited[el] = true
                    stack.push(el)
                }
            })
        }
        return result
    }

    BFS (start) {
        const result = []
        const visited = []
        const queue = [start]
        let currentVertex
        visited[start] = true

        while (queue.length) {
            currentVertex = queue.shift()
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(el => {
                if (!visited[el]) {
                    visited[el] = true
                    queue.push(el)
                }
            })
        }
        return result
    }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('D', 'E')
graph.addEdge('D', 'F')
graph.addEdge('E', 'F')
