var NumberUtils = (function () {
    "use strict";
    function isNumber(variable) {
        return (typeof variable == 'number' & variable == variable);
    }

    return {
        isNumber: isNumber,
    };
} ())

function Calculator() {
    "use strict";

    function getResult() {
        return this.result;
    }

    function reset() {
        this.result = 0;
        return this;
    }

    function add(value) {
        if (!NumberUtils.isNumber(value)) {
            throw new Error("It's not a number")
        }

        this.result += value;
        return this;
    }

    function subtract(value) {
        if (!NumberUtils.isNumber(value)) {
            throw new Error("It's not a number")
        }

        this.result -= value;
        return this;
    }

    function divide(value) {
        if (!NumberUtils.isNumber(value)) {
            throw new Error("It's not a number")
        }
        this.result /= value;

        return this;
    }

    function multiply(value) {
        if (!NumberUtils.isNumber(value)) {
            throw new Error("It's not a number")
        }
        this.result *= value;

        return this;
    }

    function getInitialState(callback) {

        setTimeout(function () {
            reset.bind("Calculator");
        }, 500);
    }

    return {
        result: 0,
        getResult: getResult,
        reset: reset,
        add: add,
        subtract: subtract,
        divide: divide,
        multiply: multiply,
        getInitialState: getInitialState
    };
}

var calculator = new Calculator();
calculator.getInitialState();


