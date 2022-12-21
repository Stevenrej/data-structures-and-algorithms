'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree{
  constructor(){
    this.root = null;
  }

  preOrder(){


    const traverse = (node) => {

      console.log(node.value);


      if(node.left){
        traverse(node.left);
      }
      if(node.right){
        traverse(node.right);
      }
    };

    traverse(this.root);
  }

  inOrder(){
    const traverse = (node) => {
      if(node.left) traverse(node.left);
      console.log(node.value);
      if(node.right) traverse(node.right);
    };
    traverse(this.root);
  }

  postOrder(){
    const traverse = (node) => {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      console.log(node.value);
    };
    traverse(this.root);
  }

  breadthFirst() {
    let values = [];
    let queue = [this.root];

    while (queue.length > 0) {
      let currentNode = queue.shift();
      console.log(currentNode.value);
      values.push(currentNode.value);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return values;
  }
}

class Search extends Tree {
  constructor() {
    super();
    this.root = null;
  }
  add(value) {
    const node = new Node(value);
    if (!this.root){
      return this.root = node;
    }

    const traverse = (node) => {
      if (node.value > value) {
        if (node.left) {
          traverse(node.left);
        } else {
          node.left = new Node(value);
          return;
        }
      } else {
        if (node.right) {
          traverse(node.right);
        } else {
          node.right = new Node(value);
          return;
        }
      }
    };
    traverse(this.root);
  }

  contains(value) {
    return this.postOrder().includes(value);
  }
}


let tree = new Tree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(17);

// console.log(tree);

// tree.preOrder();
// tree.inOrder();
// tree.postOrder();
tree.breadthFirst();


module.exports = { Node, Tree, Search };
