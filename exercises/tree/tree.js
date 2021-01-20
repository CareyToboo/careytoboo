/**
 * Tree test
 */

class TreeNode {
    constructor (val, left, right) {
        this.val = (val === undefined) ? 0 : val
        this.left = (val === undefined) ? null : left
        this.right = (val === undefined) ? null : right
    }
}

class Tree {
    constructor(treeList) {
        this.traveList = []
        this.treeList = treeList

        this.root = new TreeNode(treeList[0])
        this.create(this.root, 0)
    }

    create(node, i) {
        const li = 2 * i + 1;
        const ri = 2 * i + 2;
        const list = this.treeList

        if(li < list.length){
            const newNode = new TreeNode(list[li]);
            node.left = newNode;
            this.create(newNode, li);
        }
        if(ri < list.length){
            const newNode = new TreeNode(list[ri]);
            node.right = newNode;
            this.create(newNode, ri);
        }
    }

    invertTree(root) {
        // this.tree = 
    }

    // 中   左中右
    inOrderTrave(root = this.root) {
        if (root) {
            this.inOrderTrave(root.left || null)
            this.traveList.push(root.val)
            this.inOrderTrave(root.right || null)
        }
    }
    // 前  中左右
    preOrderTrave(root = this.root) {
        if (root) {
            this.traveList.push(root.val)
            this.preOrderTrave(root.left || null)
            this.preOrderTrave(root.right || null)
        }
    }
    // 后  右左中
    postOrderTrave(root = this.root) {
        if (root) {
            this.postOrderTrave(root.right || null)
            this.postOrderTrave(root.left || null)
            this.traveList.push(root.val)
        }
    }

    print() {
        console.log('print:', this.traveList.join(','))
    }
}

const tree = new Tree([1,2,3,4,5,6,7])

tree.preOrderTrave()
tree.print()