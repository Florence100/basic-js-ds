const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// function createNode() {
  class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
// }


class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.rootNode;
    // root = this.root;
    // return this
  }
  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.rootNode = addWithin(this.rootNode, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data)
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data)
      }

      return node;
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    return searchWithin(this.rootNode, data);

    function searchWithin(node, data) {
      
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return searchWithin(node.left, data);
      } else {
        return searchWithin(node.right, data);
      }
    }
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  
    return findNode(this.rootNode, data);

    function findNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        return findNode(node.left, data);
      } else if (data > node.data) {
        return findNode(node.right, data);
      } else {
        return node
      }
    }

  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.rootNode) {
      return;
    }

    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this.rootNode) {
      return;
    }

    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};

// const tree = new BinarySearchTree();

// tree.add(2);
// tree.add(7);
// tree.add(1);
// tree.add(8);
// tree.add(4);
// tree.add(32);
// tree.add(12);
// tree.add(14);
// console.log(tree.find(8).data); // 8
// console.log(tree.find(2).data); //2
// console.log(tree.find(32).data); //32
// console.log(tree.find(14).data);  //14

