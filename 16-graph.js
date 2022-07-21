class Graph {
  constructor() {
    this.nodesCount = 0;
    this.adjacentNodes = {};
  }

  addVertex(node) {
    if (!this.adjacentNodes[node]) {
      this.adjacentNodes[node] = [];
      this.nodesCount++;
    }
  }

  addEdge(node1, node2) {
    if (!this.adjacentNodes[node1] || !this.adjacentNodes[node2])
      return "Input vertex is not present";
    this.adjacentNodes[node1].push(node2);
    this.adjacentNodes[node2].push(node1);
  }

  showConnections() {
    return this.adjacentNodes;
  }
}

let myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");
console.log(myGraph.showConnections());
