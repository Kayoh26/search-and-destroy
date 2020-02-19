'use strict';

// Complete this algo
const minJumps = arr => {
  let numJumps = 0;
  const arrayLength = arr.length -1;
  let index = 0;
  let maxValue = 0;

  while(index + maxValue <= arrayLength){
    let options = arr.slice(index, arr[index]+1);

    console.log('These are our options', options)
    maxValue = Math.max(...options);
    console.log('maxValue =', maxValue)

    numJumps++
    if(options.length === 1){
      index += options[0]
    } else {
      index += options.lastIndexOf(maxValue)
    }
    console.log('Here is our index', index);
    console.log('Here is our number of jumps', numJumps)
    // if (index + maxValue >= arrayLength){
    //   numJumps++
    // }
  }
  return numJumps
};

module.exports = minJumps
