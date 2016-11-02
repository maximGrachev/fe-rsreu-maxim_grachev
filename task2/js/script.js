//1
function is_palindrome(word) {
    var reversWordArray = [];
    var reversWord = '';

    for (var i = 0; i < word.length; i++) {
        reversWordArray[i] = word[word.length - i - 1];
        reversWord = reversWord + reversWordArray[i];
    }

    return word == reversWord;
}
//2
function combinator(word) {
    for (var j = 0; j < word.length; j++) {
        var letter = word[j];
        var combination = letter;

        console.log(combination);
        for (var k = j + 1; k < word.length; k++) {
            combination = combination + word[k];
            console.log(combination);
        }
    }

    return (word);
}
//3
function sorter(str) {
    var letter = [];
    var result = '';

    for (var k = 0; k < str.length; k++) {
        letter[k] = str[k];
    }
    var c;
    var checkOfEnd = true;

    while (checkOfEnd == true) {
        checkOfEnd = false;
        for (var i = 0; i < letter.length - 1; i++) {
            if (letter[i] > letter[i + 1]) {
                c = letter[i];
                letter[i] = letter[i + 1];
                letter[i + 1] = c;
                checkOfEnd = true;
            }
        }
    }
    for (var k = 0; k < str.length; k++) {
        result = result + letter[k];
    }

    return result;
}
//4
function longWord(phrase) {
    phrase = phrase + " ";
    var word = '';
    var lenght = phrase.length;
    var max = 0;

    for (var q = 0; q < lenght; q++) {
        if (phrase[q] !== " ") {
            word = word + phrase[q];
        }
        else {
            if (word.length > max) {
                max = word.length;
            }
            word = '';
        }
    }

    return max;
}
//5
function orderWithoutUnique(word) {
    var result = "";

    for (var t = 0; t < word.length; t++) {
        var check = true;

        for (var t1 = 0; t1 < t; t1++) {
            if (word[t1] == word[t]) {
                check = false;
            }
        }
        if (check == true) {
            result = result + word[t];
        }
    }

    return result;
}