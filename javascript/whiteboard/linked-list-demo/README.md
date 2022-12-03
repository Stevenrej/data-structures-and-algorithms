# Singly Linked List

A singly linked list is a type of linked list that is unidirectional, that is, it can be traversed in only one direction from head to the last node (tail). Each element in a linked list is called a node. A single node contains data and a pointer to the next node which helps in maintaining the structure of the list.

## Challenge

Node
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

Linked List
Create a Linked List class
Within your Linked List class, include a head property.
Upon instantiation, an empty Linked List should be created.
The class should contain the following methods
insert
includes
toString

## Approach & Efficiency

Time: O(n)
Space: O(1)

## API

insert:

Arguments: value
Returns: nothing
Adds a new node with that value to the head of the list with an O(1) Time performance.

includes:

Arguments: value
Returns: Boolean
Indicates whether that value exists as a Node’s value somewhere within the list.

toString:

Arguments: none
Returns: a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"
