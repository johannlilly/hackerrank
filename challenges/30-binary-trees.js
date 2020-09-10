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
    
    // Start of function levelOrder
    this.levelOrder = function(root) {

      // Add your code here
      // To print values separated by spaces use process.stdout.write(someValue + ' ')
      let bfs = new Array();
      let traverseLevel = (node, level, order) => {
        node.level = level;
        node.order = order;
        bfs.push([node.level, node.order, node.data]);

        if (typeof node.left !== 'undefined' && node.left != null)  {
          traverseLevel(node.left, level + 1, ++order);
        }
        if (typeof node.right !== 'undefined' && node.right != null) {
          traverseLevel(node.right, level + 1, ++order);
        }
      }
      
      traverseLevel(root, 0, 0);
      process.stdout.write(
        bfs
          .sort()
          .reduce((acc, v) => [...acc, v[2]], [])
          .join(' ')
      );

	}; // End of function levelOrder
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
    
    tree.levelOrder(root);
});