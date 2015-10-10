var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var nextNode = new Node();
    nextNode.value = value;
    if (list.head === null) {
      list.head = nextNode;
      list.tail = nextNode;
    } else if (list.head) {
      list.tail.next = nextNode;
      list.tail = nextNode;
    }
  };

  list.removeHead = function(){
    var currentHead = list.head.value;
    var nextItem = list.head.next;
    list.head = nextItem;
    return currentHead;
  };

  list.contains = function(target, currentNode){
    //iterate through the linked list starting at the value of the node at list.head, check for the target
    //next, check next property of the node at list .head, and check that value for the target

      currentNode =  currentNode || list.head;
      if (currentNode.value === target) {
        return true;
      } else {
        if (currentNode.next === null) {
          return false;
        } else {
          currentNode = currentNode.next;
          return list.contains(target, currentNode);
        }
      }


  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
