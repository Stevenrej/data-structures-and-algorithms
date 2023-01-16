

# Challenge

Features
Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

add node
Arguments: value
Returns: The added node
Add a node to the graph
add edge
Arguments: 2 nodes to be connected by the edge, weight (optional)
Returns: nothing
Adds a new edge between two nodes in the graph
If specified, assign a weight to the edge
Both nodes should already be in the Graph
get nodes
Arguments: none
Returns all of the nodes in the graph as a collection (set, list, or similar)
Empty collection returned if there are no nodes
get neighbors
Arguments: node
Returns a collection of edges connected to the given node
Include the weight of the connection in the returned collection
Empty collection returned if there are no nodes
size
Arguments: none
Returns the total number of nodes in the graph
0 if there are none

## Approach, Efficiency & API

The addNode method has an O(1) time complexity, as it simply adds a new key-value pair to the adjacency list. The addEdge method also has an O(1) time complexity, as it simply pushes a new edge object to the edge array of the corresponding nodes in the adjacency list.

The getNodes method has an O(n) time complexity, as it needs to iterate through all the keys of the adjacency list to return all the nodes. The getNeighbors method has an O(1) time complexity, as it simply returns the value of the adjacency list associated with the given node.

Both the breadthFirst and depthFirst methods have a time complexity of O(V + E) where V is the number of vertices and E is the number of edges. Because both methods use a queue or stack, the time complexity of visiting all vertices is O(V) and the time complexity of visiting all edges is O(E).

The size method has an O(1) time complexity, as it simply returns the size of the adjacency list which is directly proportional to the number of nodes in the graph.

In terms of space complexity, the Graph class has an O(V + E) space complexity. The adjacency list stores V vertices and E edges, resulting in the space complexity of O(V + E).

In summary, the Graph class uses an efficient adjacency list data structure and its methods have relatively low time and space complexities, making it suitable for small to medium-sized graphs.




