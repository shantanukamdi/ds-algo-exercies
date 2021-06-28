/*
  Write a function that takes and array, and return the highest peak. A peak is defined as element which strictly increases upto a point and then it strictly descends like a mountain.
  ip => [5, 6, 1, 2, 3, 4, 5, 6, 3, 2, 0, 1, 2, 3, -2, 4]
  op => 9 (1, 2, 3, 4, 5, 6, 3, 2, 0)
  
  Approach: 
  a. Find all peaks (prevEl < currEl < nextEl)
  b. For every peak, count till last valley and count till next valley.
  c. while doing b, increment counter
*/
function highestPeak(a) {
  const n = a.length;
  let peak = 0;
  
  for(let i = 0; i <= n - 2; ) {
    // check for peak condition
    if(a[i] > a[i - 1] && a[i] > a[i+1]) {
      let count = 1;
      let j = i;
      
      // count till prev valley and the condition j >= 0 is for lower bound of array
      while(j >= 0 && a[j] > a[j-1]) {
        j--;
        count++;
      }
      
      // count till next valley and the condition i <= n - 2 is for upper bound of array
      while(i <= n - 2 && a[i] > a[i+1]) {
        i++;
        count++;
      }
      peak = Math.max(peak, count);
    }
    else {
      i++;
    }
  }
    return peak;
}

const peak = highestPeak([5, 6, 1, 2, 3, 4, 5, 6, 3, 2, 0, 1, 2, 3, -2, 4]);
console.log(peak);
