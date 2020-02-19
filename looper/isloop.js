'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  const listCopy = linkedlist;
  let currNode = listCopy.tail;
  //console.log('currentNode', currNode.value, currNode.previous.next.value)
  if(!currNode.previous) {
    return false;
  }
  else if(currNode.value !== currNode.previous.next.value) {
    return true;
  }
  else {
    listCopy.removeTail();
    return isLoop(listCopy)
  }
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
