var NumberUtils = (function () {
    "use strict";
    function isNumber(variable) {
        return (typeof variable == 'number' & variable == variable);
    }
    return {
        isNumber: isNumber,
    };
} ())
var Calculator = (function () {
    "use strict";

    var result = 0;

    function getResult() {
        return result;
    }

    function reset() {
        return result = 0;
    }

    function add(value) {
        if (!NumberUtils.isNumber(value)) {
            throw new Error("It's not a number")
        }

        result += value;
        return add;
    }

    function subtract(value) {
        if (!NumberUtils.isNumber(value)) {
            throw new Error("It's not a number")
        }

        result = result - value;
        return subtract;
    }

    function divide(value) {
        if (!NumberUtils.isNumber(value)) {
            throw new Error("It's not a number")
        }

        result = result / value;
        return divide;
    }

    function multiply(value) {
        if (!NumberUtils.isNumber(value)) {
            throw new Error("It's not a number")
        }

        result = result * value;
        return multiply;
    }

    return {
        getResult: getResult,
        reset: reset,
        add: add,
        subtract: subtract,
        divide: divide,
        multiply: multiply,
    };
} ()) 