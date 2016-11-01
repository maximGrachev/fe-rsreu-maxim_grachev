//1
var a = 5;
var b = "JavaScript";
alert(a);
alert(b);
//2
a = 2;
var h = 1;
function triangleArea(a, h) {
	return 0.5 * a * h;
}


var area = triangleArea(a, h);
alert(area);
//3
var i = 0;
var j = 0;
var k = 0;
var m = [1, 2, 3];
for (i = 0; i < 3; i++) {
	m[i] = m[i] - 1;
	console.log(m[i]);
}
while (j <= 2) {
	m[j] = m[j] * 2;
	console.log(m[j]);
	j++;
}
do {
	m[k] = "element";
	console.log(m[k]);
	k++;
} while (k < 3);
//4
var x = 2, y = 3;
y = ++x;
console.log(x);
console.log(y);
x = 2;
y = 3;
y = x++;
console.log(x);
console.log(y);
//5
function isPositiveNumber(a) {
	if (typeof a != 'number') {
		throw new Error("It's not a number");
	}

	return a > 0;
}

var result = isPositiveNumber(6) ? 'yes' : 'no';

console.log(result);
//6
var name = prompt("What is your name?");
alert(name);
//7
function factorial(num) {
	if (num > 0) {
		var fact = 1;
		for (i = 1; i <= num; i++) {
			fact = fact * i;
		}
	} else {
		throw new Error("Hey! Argument must be more then 0");
	}

	return fact;
}

console.log(factorial(3));