var DateUtils = (function () {
	"use strict";
	
	//1
	function getDifferenceDays(date1, date2) {
		result = date1.getDate() - date2.getDate();

		return Math.abs(result);
	}

	//2
	function getCurrentDate() {
		return new Date();
	}

	//3
	function formatDate(date) {
		var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

		return month[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear() + ", " + date.getHours() + ":" + date.getMinutes();
	}

	return {
		getDifferenceDays: getDifferenceDays,
		getCurrentDate: getCurrentDate,
		formatDate: formatDate,
	};
} ())