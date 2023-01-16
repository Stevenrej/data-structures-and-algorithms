
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(value) {
    this.adjacencyList.set(value, []);
    return value;
  }

  addEdge(node1, node2, weight = 0) {
    this.adjacencyList.get(node1).push({ node: node2, weight });
    this.adjacencyList.get(node2).push({ node: node1, weight });
  }

  getNodes() {
    return Array.from(this.adjacencyList.keys());
  }

  getNeighbors(node) {
    return this.adjacencyList.get(node);
  }

  size() {
    return this.adjacencyList.size;
  }
  breadthFirst (root, callback){
    const queue = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while(queue.length){
      current = queue.pop();
      if (callback) callback(current.value);
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors){
        if(!visited.has(edge.vertex)){
          visited.add(edge.vertex);
          queue.unshift(edge.vertex);
        }
      }

    }
    return visited;
  }

  depthFirst (root, callback){
    const stack = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while(stack.length){
      current = stack.pop();
      if (callback) callback(current.value);
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors){
        if(!visited.has(edge.vertex)){
          visited.add(edge.vertex);
          stack.push(edge.vertex);
        }
      }
    }
    return visited;
  }
}

module.exports = Graph;
