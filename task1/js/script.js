//1
function displargest(a, b) {
	if (typeof a != 'number') {
		throw new Error("It's not a number");
	}
	var c;
	if (a > b) {
		c = a;
	}
	else {
		c = b;
	}
	return (c);
}
//2
function isEvenNumbrer(a) {
	if (typeof a != 'number') {
		throw new Error("It's not a number");
	}
	return a % 2 == 0;
}
var i;
for (i = 0; i <= 9; i++) {
	var result = isEvenNumbrer(i) ? 'Even' : 'Odd';
	console.log(result);
}
//3
function is_Blank(b) {
	if ((b == false) || (b == undefined))
		return true;
	else return false;
}
console.log(is_Blank(''));
console.log(is_Blank('     '));
console.log(is_Blank('  abc  '));