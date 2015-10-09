var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Queue.prototype.size = function() {
	var keys = Object.keys(this.storage);
	return keys.length;
};

Queue.prototype.enqueue = function(value) {
	this.count += 1;
	this.storage[this.count] = value;
};

Queue.prototype.dequeue = function() {
	var keys = Object.keys(this.storage);
	var removed = this.storage[keys[0]];
	delete this.storage[keys[0]];
	return removed;
};
