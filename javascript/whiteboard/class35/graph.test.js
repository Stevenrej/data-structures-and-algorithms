const Graph = require('./index');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('Node can be successfully added to the graph', () => {
    const node = graph.addNode(1);
    expect(node).toBe(1);
    expect(graph.adjacencyList.has(1)).toBe(true);
  });

  test('An edge can be successfully added to the graph', () => {
    graph.addNode(1);
    graph.addNode(2);
    graph.addEdge(1, 2, 5);
    expect(graph.adjacencyList.get(1)).toEqual([{ node: 2, weight: 5 }]);
    expect(graph.adjacencyList.get(2)).toEqual([{ node: 1, weight: 5 }]);
  });

  test('A collection of all nodes can be properly retrieved from the graph', () => {
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    const nodes = graph.getNodes();
    expect(nodes).toEqual([1, 2, 3]);
  });

  test('All appropriate neighbors can be retrieved from the graph', () => {
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addEdge(1, 2, 5);
    graph.addEdge(1, 3, 10);
    const neighbors = graph.getNeighbors(1);
    expect(neighbors).toEqual([{ node: 2, weight: 5 }, { node: 3, weight: 10 }]);
  });

  test('Neighbors are returned with the weight between nodes included', () => {
    graph.addNode(1);
    graph.addNode(2);
    graph.addEdge(1, 2, 5);
    const neighbors = graph.getNeighbors(1);
    expect(neighbors[0]).toEqual({ node: 2, weight: 5 });
  });

  test('The proper size is returned, representing the number of nodes in the graph', () => {
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    expect(graph.size()).toBe(3);
  });

  test('A graph with only one node and edge can be properly returned', () => {
    graph.addNode(1);
    graph.addEdge(1, 1, 0);
    expect(graph.size()).toBe(1);
    expect(graph.getNeighbors(1)).toEqual([{ node: 1, weight: 0 },{ node: 1, weight: 0 }]);
  });
});

