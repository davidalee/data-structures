var Queue = function(){
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count] = value;
    count += 1;
  };

  someInstance.dequeue = function(){
    var keys = Object.keys(storage);
    var removed = storage[keys[0]];
    delete storage[keys[0]];
    return removed;
  };

  someInstance.size = function(){
    var keys = Object.keys(storage);
    return keys.length;
  };

  return someInstance;
};
