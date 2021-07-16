/**
  Given array of strings, find the biggest number in the array after reaarangement.
  ip => ['10', '11', '20', '30', '3'] output => "330201110"
  Approach: Sort the array using a custom comparator in js. If X & Y are two numbers, then if XY > YX, that means X should be greater than Y. And if YX > XY, it means that y is greater than x. 
*/

function findBiggestNumber(arr) {
	const result = arr.sort((a, b) => `${b}${a}` - `${a}${b}`);
	return result.join('');
}

findBiggestNumber(['10', '11', '20', '30', '3']);
