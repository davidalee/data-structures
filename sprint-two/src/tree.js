var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];

  return newTree;
};

_.extend = function(obj1, obj2){
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var child = new Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target){
  if ( this.value === target ) {
    return true;
  }
  if (this.children) {  
    for ( var i = 0; i < this.children.length; i++ ){
      if (this.children[i].contains(target)) {
      return true;
      }
    }
  }
  return false;
  

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
