/*
  Given an non-negative array of heights(each element has a width of 1 unit), return the maximum water trapped between elements.
  ip => [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] op => 6
  
  Approach: Maintain two arrays left and right with maxLeft height till i and maxRight height till i, then iterate over the array and increment the count of min(l[i], r[i]) - 1
*/

function trappingWater(arr) {
	let count = 0;
	const n = arr.length;
	const left = [];
	const right = [];
	left[0] = arr[0];
	right[n - 1] = arr[n - 1];
	
	// fill in left height array
	for(let i = 1; i < n; i++) {
		left[i] = Math.max(left[i - 1], arr[i]);
		right[n - i - 1] = Math.max(right[n - i], arr[i]);
	}
	for(let i = 0; i < n; i++) {
		count += Math.min(left[i], right[i]) - arr[i];
	}
	
	return count;
}

trappingWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
