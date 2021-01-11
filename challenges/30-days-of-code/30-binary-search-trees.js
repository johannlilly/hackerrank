// Start of function Node
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
  this.insert = function(root, data) {
      if (root === null) {
          this.root = new Node(data);
          
          return this.root;
      }
      
      if (data <= root.data) {
          if (root.left) {
              this.insert(root.left, data);
          } else {
              root.left = new Node(data);
          }
      } else {
          if (root.right) {
              this.insert(root.right, data);
          } else {
              root.right = new Node(data);
          }
      }
      
      return this.root;
  };
  
  // Start of function getHeight
  /**
   * Troublesome input:
c
   */
  this.getHeight = function(root) {
    let height = 0;
    let compareBranches = (left, right, depth) => {
        let leftExists = (typeof left !== 'undefined' && left != null);
        let rightExists = (typeof right !== 'undefined' && right != null);

        if (leftExists || rightExists) {
            depth++;
            if (depth > height) { height = depth; }
        }
        
        if (leftExists) { compareBranches(left.left, left.right, depth); }
        if (rightExists) { compareBranches(right.left, right.right, depth); }
    }

    compareBranches(root.left, root.right, height);
    return height;

  }; // End of function getHeight
}; // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding('ascii');

var _input = "";

process.stdin.on('data', function (data) {
  _input += data;
});

process.stdin.on('end', function () {
  var tree = new BinarySearchTree();
  var root = null;
  
  var values = _input.split('\n').map(Number);
  
  for (var i = 1; i < values.length; i++) {
      root = tree.insert(root, values[i]);
  }
  
  console.log(tree.getHeight(root));
});