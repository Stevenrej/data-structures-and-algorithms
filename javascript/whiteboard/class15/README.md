# Trees

In computer science, a tree is a widely used abstract data type that represents a hierarchical tree structure with a set of connected nodes. Each node in the tree can be connected to many children (depending on the type of tree), but must be connected to exactly one parent, except for the root node, which has no parent. These constraints mean there are no cycles or "loops" (no node can be its own ancestor), and also that each child can be treated like the root node of its own subtree, making recursion a useful technique for tree traversal. In contrast to linear data structures, many trees cannot be represented by relationships between neighboring nodes in a single straight line.

## Challenge

Features
Node
Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
Binary Tree
Create a Binary Tree class
Define a method for each of the depth first traversals:
pre order
in order
post order
Each depth first traversal method should return an array of values, ordered appropriately.
Binary Search Tree
Create a Binary Search Tree class
This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
Add
Arguments: value
Return: nothing
Adds a new node with that value in the correct location in the binary search tree.
Contains
Argument: value
Returns: boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency
Getting the nesscary methods in the classes abd being able to finish all tests.

## API


preOrder(): This method traverses a binary tree in pre-order fashion (root, left, right) and logs the value of each node to the console.

inOrder(): This method traverses a binary tree in in-order fashion (left, root, right) and logs the value of each node to the console.

postOrder(): This method traverses a binary tree in post-order fashion (left, right, root) and logs the value of each node to the console.

add(value): This method adds a new node with a given value to a binary search tree.

contains(value): This method returns a boolean indicating whether the given value is present in the binary search tree.
