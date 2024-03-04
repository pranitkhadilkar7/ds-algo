class PriorityQueue {
    constructor () {
        this.values = []
    }

    enqueue(value, priority) {
        this.values.push({value, priority})
        this.sort()
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

    Dijkstra (start, end) {
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {}
        const path = []
        let smallest

        for (const vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null
        }

        while (nodes.values.length) {
            smallest = nodes.dequeue().value
            if (smallest === end) {
                console.log(distances)
                console.log(previous)
                while(previous[smallest]) {
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break
            }

            if (smallest || distances[smallest] !== Infinity) {
                for (const neighbor in this.adjacencyList[smallest]) {
                    // find neighboring node
                    const nextNode = this.adjacencyList[smallest][neighbor]
                    // calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight
                    let nextNeighbor = nextNode.node
                    if (candidate < distances[nextNeighbor]) {
                        distances[nextNeighbor] = candidate
                        previous[nextNeighbor] = smallest
                        nodes.enqueue(nextNeighbor, candidate)
                    }
                }
            }
        }
        return path.concat(smallest).reverse()
    }
}

const graph = new WeightedGraph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B", 4)
graph.addEdge("A", "C", 2)
graph.addEdge("B", "E", 3)
graph.addEdge("C", "D", 2)
graph.addEdge("C", "F", 4)
graph.addEdge("D", "E", 3)
graph.addEdge("D", "F", 1)
graph.addEdge("E", "F", 1)