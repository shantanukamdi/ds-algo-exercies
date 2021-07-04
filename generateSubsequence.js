/**
  Given a string, generate all the subsequences. 
  ip => abcd
  op => "abcd", "abc", "abd", "ab", "acd", "ac", "ad", "a", "bcd", "bc", "bd", "b", "cd", "c", "d", ""
*/


function generateSubsequence(s, o, result) {
	if(s.length == 0) {
		result.push(o);
		return;
	}
	
	const ch = s[0];
	const reducedStr = s.substring(1);
	
	generateSubsequence(reducedStr, o + ch, result);
	
	generateSubsequence(reducedStr, o, result);

}

const result = [];
generateSubsequence("abcd", "", result);
console.log('result', result);
