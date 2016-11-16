var StringUtils = (function () {
	"use strict";

	//1
	function isString(variable) {

		return (typeof variable == 'string');
	}
	//2
	function canParseToNumber(string) {
		if (!isString(string)) {
			throw new Error("It's not a string")
		}

		return !isNaN(string);
	}
	//3
	function getStringLength(string) {
		if (!isString(string)) {
			throw new Error("It's not a string")
		}

		return string.length;
	}
	//4
	function camelize(string) {
		var result = "";

		if (!isString(string)) {
			throw new Error("It's not a string")
		}

		for (var i = 0; i < getStringLength(string); i++) {
			if (string[i] !== " ") {
				result = result + string[i];
			}
		}

		return result;
	}
	//5
	function capitalize(string) {
		var firstLetter = string[0];

		firstLetter = firstLetter.toUpperCase();
		var result = firstLetter;

		for (i = 1; i < getStringLength(string); i++) {
			result = result + string[i];
		}

		return result;
	}
	//6
	function findOccurrences(part, string) {
		if (!isString(string) || !isString(part)) {
			throw new Error("It's not a string")
		}

		var result = 0;

		string = string.toLowerCase();
		part = part.toLowerCase();

		for (var i = 0; i <= (string.length - part.length); i++) {
			var partString = "";

			for (var j = 0; j < part.length; j++) {
				partString = partString + string[i + j];
			}

			if (partString == part) {
				result = result + 1;
			}
		}

		return result;
	}

	return {
		isString: isString,
		canParseToNumber: canParseToNumber,
		getStringLength: getStringLength,
		camelize: camelize,
		capitalize: capitalize,
		findOccurrences: findOccurrences
	}

} ());