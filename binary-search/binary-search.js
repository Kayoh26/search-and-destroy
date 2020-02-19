'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	if(array.length <= 1){
		return array[0] === target ? true : false
	} else {
		const midpoint = Math.floor(array.length/2);
		//console.log('midpoint', midpoint, 'target', target)
		//console.log('array[midpoint] === target', array[midpoint] === target)
		if(array[midpoint] === target){
			return true
		} else {
			if (target > array[midpoint]){
				const rightArray = array.slice(midpoint)
				//console.log('right Array', rightArray)
				return binarySearch(rightArray, target)
			} else {
				const leftArray = array.slice(0,midpoint)
				//console.log('left Array', leftArray)
				return binarySearch(leftArray, target)
			}
		}

	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
