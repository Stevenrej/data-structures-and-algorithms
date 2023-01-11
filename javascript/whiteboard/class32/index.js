class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
}


function tree_intersection(tree1, tree2) {
  const hashtable = new Hashtable();
  const result = new Set();

  function traverse(node) {
    if (!node) return;
    hashtable.set(node.value, true);
    traverse(node.left);
    traverse(node.right);
  }

  traverse(tree1.root);

  function checkIntersection(node) {
    if (!node) return;
    if (hashtable.has(node.value)) {
      result.add(node.value);
    }
    checkIntersection(node.left);
    checkIntersection(node.right);
  }
  checkIntersection(tree2.root);
  return result;
}

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



class Hashtable {
  constructor() {
    this.table = new Array(128);
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = {};
    }
    this.table[index][key] = value;
  }

  get(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      return this.table[index][key];
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      return this.table[index][key] !== undefined;
    }
    return false;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        keys.push(...Object.keys(this.table[i]));
      }
    }
    return keys;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.table.length;
    }
    return hash;
  }
}

console.log(tree_intersection(tree1, tree2));

module.exports = {
  BinaryTree,
  tree_intersection,
  Node,
};
