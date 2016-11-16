var ArrayUtils = (function () {
    "use strict";
    //1
    function isArray(value) {

        return Array.isArray(value);
    }

    //2
    function remove(array) {
        if (!isArray(array)) {
            throw new Error("It's not an array");
        }

        var i = 0;

        while (i < array.length) {
            if (array[i] == null || array[i] == 0 || array[i] == "" || array[i] == false || array[i] !== array[i]) {
                array.splice(i, 1);
                i--;
            }
            i++;
        }

        return array;
    }

    //3
    function findMax(array) {
        if (!isArray(array)) {
            throw new Error("It's not an array");
        }

        var result = a[0];

        for (var i = 0; i < array.length; i++) {
            if (array[i] > result) {
                result = array[i];
            }
        }

        return result;
    }

    //4
    function findMin(array) {
        if (!isArray(array)) {
            throw new Error("It's not an array");
        }

        var result = a[0];

        for (var i = 0; i < array.length; i++) {
            if (array[i] < result) {
                result = array[i];

            }
        }

        return result;
    }

    //5
    function convertToArray(string) {
        if (typeof string !== 'string') {
            throw new Error("It's not an array");
        }

        string = string + " ";

        var word = '';
        var arrayOfWords = [];
        var k = 0;

        for (var i = 0; i < string.length; i++) {
            if (string[i] !== " ") {
                word = word + string[i];

            } else {
                arrayOfWords[k] = word;
                word = "";
                k++;
            }
        }

        return arrayOfWords;
    }

    //5*
    function convertToArray1(string) {
        if (typeof string !== 'string') {
            throw new Error("It's not an array");
        }

        return string.split(' ');
    }

    //6
    function findFrequent(array) {
        if (!isArray(array)) {
            throw new Error("It's not an array");
        }

        mostFrequent = array[0];
        var maxRepeat = 0;

        for (var i = 0; i < array.length; i++) {
            var numberRepeat = 0;
            for (var j = i + 1; j < array.length; j++) {
                if (array[i] == array[j]) {
                    numberRepeat = numberRepeat + 1;
                }
            }
            if (numberRepeat > maxRepeat) {
                mostFrequent = array[i];
            }
            maxRepeat = numberRepeat;
        }

        return mostFrequent;
    }

    //7
    function clone(array) {
        if (!isArray(array)) {
            throw new Error("It's not an array");
        }
        var b = array;

        return b;
    }

    //8
    function removeDuplicate(array) {
        if (!isArray(array)) {
            throw new Error("It's not an array");
        }

        for (var i = 0; i < array.length; i++) {
            for (var j = i + 1; j < array.length; j++) {
                if (array[i] == array[j]) {
                    array.splice(j, 1);
                    j = j - 1;
                }
            }
        }

        return array;
    }

    //9
    function merge(array1, array2) {
        if (!isArray(array1) || !isArray(array2)) {
            throw new Error("It's not an array");
        }

        var result = array1.concat(array2);

        result = removeDuplicate(result);

        return result;
    }

    //10
    function deleteElement(array, number) {
        if (!isArray(array)) {
            throw new Error("It's not an array");
        }

        if (!isNumber(number)) {
            throw new Error("It's not a number");
        }

        array.splice(number, 1);

        return array;
    }

    //11
    function Sort(array) {
        if (!isArray(array)) {
            throw new Error("It's not an array");
        }

        function compareAuthor(book1, book2) {
            return book1.author[0] > book2.author[0];
        }

        return array.sort(compareAuthor);
    }

    return {
        isArray: isArray,
        remove: remove,
        findMax: findMax,
        findMin: findMin,
        convertToArray: convertToArray,
        findFrequent: findFrequent,
        clone: clone,
        removeDuplicate: removeDuplicate,
        deleteElement: deleteElement,
        merge: merge,
        Sort: Sort,
    }
} ())