var NumberUtils = (function () {
	"use strict";

	//1
	function isNumber(variable) {

		return (typeof variable == 'number' & variable == variable);
	}
	//2
	function isNegative(number) {
		if (!isNumber(number)) {
			throw new Error("It's not a number")
		}

		return number < 0;
	}
	//3
	function isPositive(number) {
		if (!isNumber(number)) {
			throw new Error("It's not a number")
		}

		return number > 0;
	}
	//4
	function factorial(number) {
		if (!isNumber(number) || isNegative(number)) {
			throw new Error("It's not a number or negative number")
		}

		return (number === 0 ? 1 : number * factorial(number - 1));
	}
	//5
	function isPrime(number) {
		if (!isNumber(number)) {
			throw new Error("It's not a number")
		}

		result = number === 1 || number === 0;

		for (var i = 2; i < number; i++) {
			if (number % i == 0) {
				result = false;
				break;
			}
			else {
				result = true;
			}
		}

		return result;
	}

	return {
		isNumber: isNumber,
		isNegative: isNegative,
		isPositive: isPositive,
		factorial: factorial,
		isPrime: isPrime
				}

} ())