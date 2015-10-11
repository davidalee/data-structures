

// ###Graph Solution

// Instantiate a new graph
var Graph = function( ){
  

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this[node] = {};
  this[node].edges = [];
  // this.val = node;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  if (this[node]) {
    return true;
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  var removed = this[node];
  delete this[node];
  return removed;
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  if (this[fromNode].edges.indexOf(toNode) === -1) {
    return false;
  }
  return true;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode].edges.push(toNode);
  this[toNode].edges.push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){

  var edgeI = this[fromNode].edges.indexOf(toNode);
  var fromRemoved = this[fromNode].edges.splice(edgeI, 1);

  var edgeToI = this[toNode].edges.indexOf(fromNode);
  var toRemoved = this[toNode].edges.splice(edgeToI, 1);

  // this[fromNode].edges
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for (var key in this) {
    if (this[key].edges){
      cb(key);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



