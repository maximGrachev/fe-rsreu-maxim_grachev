var Utils = (function () {
    'use strict'

    var MINUTES_IN_HOUR = 60;

    function convertToMinutes(date) {

        return date.getHours() * MINUTES_IN_HOUR + date.getMinutes() * 1;;
    }

    return {
        convertToMinutes: convertToMinutes
    }
} ())