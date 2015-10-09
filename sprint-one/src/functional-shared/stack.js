var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.size = stackMethods.size;
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  return someInstance;
};

var stackMethods = {};
stackMethods.size = function() {
  var keys = Object.keys(this.storage);
  return keys.length;
};
stackMethods.push = function(value) {
	this.count += 1;
	this.storage[this.count] = value;
};
stackMethods.pop = function() {
  if( this.count > 0 ) {
    var removed = this.storage[this.count];
    delete this.storage[this.count];
    this.count -= 1;
    return removed;
  }

}
