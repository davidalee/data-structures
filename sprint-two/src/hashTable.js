var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[i] && this._storage[i][0][0] !== k){
    this._storage[i].push([k, v]);
  } else {
    this._storage[i] = [];
    this._storage[i].push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var j = 0; j < this._storage[i].length; j++){
    if (this._storage[i][j][0] === k){
      return this._storage[i][j][1];
    }
  }

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // for (var i = 0; i < this._storage.length; i++){
    for (var j = 0; j < this._storage[i].length; j++){
      if (this._storage[i][j][0] === k){
        this._storage[i][j][1] = null;
      }
    }
  // }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
