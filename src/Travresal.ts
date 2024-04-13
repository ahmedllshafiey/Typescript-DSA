class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree<T> {
    root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    // Inorder traversal (left, root, right)
    inorderTraversal(node: TreeNode<T> | null): void {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.value);
            this.inorderTraversal(node.right);
        }
    }

    // Preorder traversal (root, left, right)
    preorderTraversal(node: TreeNode<T> | null): void {
        if (node !== null) {
            console.log(node.value);
            this.preorderTraversal(node.left);
            this.preorderTraversal(node.right);
        }
    }

    // Postorder traversal (left, right, root)
    postorderTraversal(node: TreeNode<T> | null): void {
        if (node !== null) {
            this.postorderTraversal(node.left);
            this.postorderTraversal(node.right);
            console.log(node.value);
        }
    }
}

// Example usage:

// Create a binary tree instance
const tree = new BinaryTree<number>();

// Create tree nodes and build the tree structure
tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);

// Perform traversals
console.log("Inorder traversal:");
tree.inorderTraversal(tree.root);

console.log("Preorder traversal:");
tree.preorderTraversal(tree.root);

console.log("Postorder traversal:");
tree.postorderTraversal(tree.root);
