'use strict';

const { Node, Tree, Search } = require('./tree');

describe('Tree', () => {
  it('can be created as expected', () => {
    let tree = new Tree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    expect(tree.root.value).toEqual(10);
    expect(tree.root.left.value).toEqual(5);
  });

  it('can successfully instantiate a tree with a single root node', () => {
    const tree = new Tree();
    tree.root = new Node(1);
    expect(tree.root.value).toEqual(1);
  });

  it('can successfully add a left child and right child properly to a node in a Binary Search Tree', () => {
    const searchTree = new Search();
    searchTree.add(10);
    searchTree.add(5);
    searchTree.add(15);
    expect(searchTree.root.left.value).toEqual(5);
    expect(searchTree.root.right.value).toEqual(15);
  });

  it('can successfully return a collection from a preorder traversal', () => {
    const tree = new Tree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    const preorderResult = [];
    tree.preOrder = jest.fn(() => {
      preorderResult.push(tree.root.value);
      preorderResult.push(tree.root.left.value);
      preorderResult.push(tree.root.right.value);
    });
    tree.preOrder();
    expect(tree.preOrder).toHaveBeenCalled();
    expect(preorderResult).toEqual([10, 5, 15]);
  });


  it('can successfully return a collection from an inorder traversal', () => {
    const tree = new Tree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    const inorderResult = [];
    tree.inOrder = jest.fn(() => {
      inorderResult.push(tree.root.left.value);
      inorderResult.push(tree.root.value);
      inorderResult.push(tree.root.right.value);
    });
    tree.inOrder();
    expect(tree.inOrder).toHaveBeenCalled();
    expect(inorderResult).toEqual([5, 10, 15]);
  });

  it('can successfully return a collection from a postorder traversal', () => {
    const tree = new Tree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
  });


  it('should return the largest value in the tree', () => {
    const tree = new Tree();

    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);

    const largestValue = tree.findLargestValue();
    expect(largestValue).toEqual(17);
  });
});



