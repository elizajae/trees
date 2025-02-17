/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues(node = this.root) {
    if (node === null) {
        return 0;
    }

    let totalSum = node.value;

    for (let child of node.children) {
        totalSum += this.sumValues(child);
    }

    return totalSum;
}


  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens(node = this.root) {
    if (node === null) {
        return 0;
    }
    let count = node.value % 2 === 0 ? 1 : 0;

    for (let child of node.children) {
        count += this.countEvens(child);
    }

    return count;
}

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

numGreater(lowerBound, node = this.root) {
        // Base case: if the node is null, return 0
        if (node === null) {
            return 0;
        }

        let count = node.value > lowerBound ? 1 : 0;

        for (let child of node.children) {
            count += this.numGreater(lowerBound, child);
        }

        return count;
    }
}


module.exports = { Tree, TreeNode };
