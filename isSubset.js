/**
  Given two strings, check if second string is a subsequence of the first string or not.
  ip = "helloworld", "hld"
  op = true
  
  Approach 1: Generate all the subsequence of the string and match those with second string. This is inefficient approach as generating subsequence is 2^n.
  Approach 2: Two pointer approach. Start with end of both strings. If char is matching, decrement both the pointers, else decrement string one pointer only. 
              Check if second pointer is -1 or not. In this case, return true, else return false. O(n) approach
*/


function isSubset(s1, s2) {
	let i =  s1.length - 1;
	let j =  s2.length - 1;
	
	while(i >= 0 && j >= 0) {
		if(s2[j] == s1[i]) {
			i--;
			j--;
		} else {
			i--;
		}
	}
	
	if(j == -1) {
		return true;
	}
	return false;
}

isSubset("helloworld", "hld");
