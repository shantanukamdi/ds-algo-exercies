/*
  Given an array containing N integers and an target sum S, find the triplets that make up S.
  ip => arr = [1, 2, 3, 4, 5, 6, 7, 8, 15] S = 18
  op => [ [ 1, 2, 15 ], [ 3, 7, 8 ], [ 4, 6, 8 ], [ 5, 6, 7 ] ]
  
  Approach 1: Use 3 loops which would take O(n^3) time.
  Approach 2: Using 2 sum approach for i - 1 element. Would take O(n^2) and O(n) space.
  Approach 3: Using 2 sum approach with two pointer method. Array should be in sorted order. So this would take O(nlogn) for sorting and O(n^2) for two pointer approach.               So overall time complexity would be O(nlogn) + O(n^2)
*/

function triplets(arr, sum) {
    const result = [];
	arr.sort((a, b) => a - b);
    const n = arr.length;
    
    for(let i = 0; i < n - 2; i++) {
        let j = i + 1;
        let k = n - 1;
        while(j < k) {
            let currSum = arr[i];
            currSum += arr[j];
            currSum += arr[k];
            if(currSum == sum) {
                result.push([arr[i], arr[j], arr[k]]);
                j++;
                k--;
            }
            else if (currSum > sum){
                k--;
            } 
            else {
                j++;
            }
        }
    }
    return result;
}

const resultTriplets = triplets([1, 2, 3, 4, 5, 6, 7, 8, 15], 18);
console.log(resultTriplets);
