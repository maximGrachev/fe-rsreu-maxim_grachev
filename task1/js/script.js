//1
function dispayLargest(number1, number2) {
	if (typeof number1 != 'number' || typeof number1 != 'number') {
		throw new Error("It's not a number");
	}

	return (number1 > number2) ? number1 : number2;
}
//2
function isEvenNumbrer(Number) {
	if (typeof Number != 'number') {
		throw new Error("It's not a number");
	}

	return Number % 2 == 0;
}
var i;

for (i = 0; i <= 9; i++) {
	var result = isEvenNumbrer(i) ? 'Even' : 'Odd';
	console.log(result);
}
//3
function is_Blank(String) {
	return String == false || String == undefined;
}

console.log(is_Blank(''));
console.log(is_Blank('     '));
console.log(is_Blank('  abc  '));