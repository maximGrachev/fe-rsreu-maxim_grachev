var ObjectUlils = (function () {
	"use strict";

	//1
	function findLength(object) {
		if (typeof object !== 'object') {
			throw new Error('It is not object');
		}

		return object.length;
	}

	//2
	function getProperties(object) {
		if (typeof object !== 'object') {
			throw new Error('It is not object');
		}

		var result = [];
		for (var key in object) {
			if (typeof object[key] === object){
				result[key] = getProperties(object);
			}
			result[key] = object[key];
		}

		return result;
	}

	return {
		findLength: findLength,
		getProperties: getProperties,
	};
} ())