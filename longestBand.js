/*
  Given an array of n elements, find the largest band. A band is defined as a subsequence which can be ordered in such a manner that all the elements appears consecutive.
  ip => [1, 9, 3, 0, 18, 5, 2, 4, 10, 7, 12, 6], op => 8
  Approach: Maintain a set for O(1) lookup. Now for every element(arr[i]), check if there is prev element or not. If we have a prev element, ignore it. If not, then that element can be starting element of the band. Then calculate the next element and increment the count; 
*/

function largestBand(arr) {
	// throw exception if arr is not passed
	if(!(arr instanceof Array)) throw new Error(`Argument passed needs to be an Array, but was passed ${typeof arr}`);
	
	// check for empty array
	if(arr.length === 0) return 0;
	
	const n = arr.length;
	const set = new Set(...arr);
	let largestLen = 1;
	
	for(let i = 0; i < n; i++) {
		const prev = arr[i] - 1;
		
		if(!set.has(prev)) {
			const next = arr[i] + 1;
			let cnt = 1;
			
			while(set.has(next)) {
				next++;
				cnt++;
			}
			largestLen = Math.max(largestLen, cnt);
		}
	}
	return largestLen;
}

largestBand([1, 9, 3, 0, 18, 5, 2, 4, 10, 7, 12, 6]);

