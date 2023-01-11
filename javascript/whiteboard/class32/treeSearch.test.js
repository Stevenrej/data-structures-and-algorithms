

const {tree_intersection, BinaryTree, Node} = require('./index');





describe('tree_intersection', () => {
  it('returns the common values in two binary trees', () => {
    const tree1 = new BinaryTree();
    tree1.root = new Node(1);
    tree1.root.left = new Node(2);
    tree1.root.right = new Node(3);
    tree1.root.left.left = new Node(8);
    tree1.root.left.right = new Node(9);

    const tree2 = new BinaryTree();
    tree2.root = new Node(6);
    tree2.root.left = new Node(7);
    tree2.root.right = new Node(8);
    tree2.root.left.left = new Node(9);
    tree2.root.left.right = new Node(10);

    const expected = new Set([8, 9]);
    expect(tree_intersection(tree1, tree2)).toEqual(expected);
  });

  it('handles empty trees', () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();
    expect(tree_intersection(tree1, tree2)).toEqual(new Set());
  });

  it('handles no common values', () => {
    const tree1 = new BinaryTree();
    tree1.root = new Node(1);
    tree1.root.left = new Node(2);
    tree1.root.right = new Node(3);
    tree1.root.left.left = new Node(8);
    tree1.root.left.right = new Node(9);

    const tree2 = new BinaryTree();
    tree2.root = new Node(4);
    tree2.root.left = new Node(5);
    tree2.root.right = new Node(6);
    tree2.root.left.left = new Node(7);
    tree2.root.left.right = new Node(16);

    expect(tree_intersection(tree1, tree2)).toEqual(new Set());
  });

  it('handles all Common Values', () => {

    const tree1 = new BinaryTree();

    tree1.root = new Node(1000);

    tree1.root.left = new Node(2000);

    tree1.root.right = new Node(3000);
    tree1.root.left.left = new Node(8000);
    tree1.root.left.right = new Node(9000);


    const tree2 = new BinaryTree();
    tree2.root = new Node(1000);
    tree2.root.left = new Node(2000);
    tree2.root.right = new Node(3000);
    tree2.root.left.left = new Node(8000);
    tree2.root.left.right = new Node(9000);

    const expected = new Set([1000, 2000, 3000, 8000, 9000]);
    expect(tree_intersection(tree1, tree2)).toEqual(expected);
  });

});
