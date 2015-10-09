var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the nmew style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  _.extend(someInstance, queueMethods);
  return someInstance; 
};

var queueMethods = {};

queueMethods.size = function() {
	var keys = Object.keys(this.storage);
	return keys.length;
};
queueMethods.enqueue = function(value) {
	this.count += 1;
	this.storage[this.count] = value;
};
queueMethods.dequeue = function() {
	var keys = Object.keys(this.storage);
	var removed = this.storage[keys[0]];
	delete this.storage[keys[0]];
	return removed;
};

_.extend = function(obj1, obj2) {
	for (var key in obj2) {
		obj1[key] = obj2[key];
	}
}