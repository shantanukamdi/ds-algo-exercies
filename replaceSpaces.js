/**
  Given a string with spaces, replace all the spaces with %20.
  ip => hello world! op => hello%20world!
  Approach 1: Iterate through the string. If we encounter a space, shift all the characters on the right by 3 places.
  Approach 2: Count the number of spaces. Then start from the right of the string. Idx would become str.length + 2 * spaces. If we encounter a space, then put %20, else copy the character to idx.
  
*/

function replaceSpaces(str) {
	let spaces = 0;
  const strArr = str.split('');
	const n = strArr.length;
	
	for(let i = 0; i < n; i++) {
		if(strArr[i] == ' ') spaces++;
	}
	
	let idx = n + 2 * spaces;
	
	for(let i = n - 1; i >= 0; i--) {
		if(strArr[i] == ' ') {
			strArr[idx - 1] = '0';
			strArr[idx - 2] = '2';
			strArr[idx - 3] = '%';
			idx = idx - 3;
		} else {
			strArr[idx - 1] =  strArr[i];
			idx -= 1;
		}			
	}
	
	console.log(strArr.join(''));
}

replaceSpaces('Hello World!');
