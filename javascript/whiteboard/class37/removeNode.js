function mirrorTree(root) {
  if (root === null || root === undefined) {
    return;
  }
  let newTree = new BinaryTree(root.value)
  newTree.left = mirrorTree(root.right)
  newTree.right = mirrorTree(root.left)
  return newTree;
}
