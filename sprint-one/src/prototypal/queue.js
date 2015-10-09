var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage ={};
  newQueue.count = 0;
  return newQueue;
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
	if (keys.length > 0) {
		var removed = this.storage[keys[0]];
		delete this.storage[keys[0]];
		return removed;
	}
};