'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  preOrder() {


    const traverse = (node) => {

      console.log(node.value);


      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
  }

  inOrder() {
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      console.log(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
  }

  postOrder() {
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      console.log(node.value);
    };
    traverse(this.root);
  }

  findLargestValue() {
    let largestValue = 0;

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      if (node.value > largestValue) largestValue = node.value;
    };

    traverse(this.root);
    return largestValue;
  }
}


class Search extends Tree {
  constructor() {
    super();
    this.root = null;
  }


  add(value) {
    const node = new Node(value);
    if (!this.root) {
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


console.log(tree.findLargestValue());
module.exports = { Node, Tree, Search };
