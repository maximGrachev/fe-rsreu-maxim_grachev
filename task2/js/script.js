//1
function is_palindrome(a) {
    var b = [];
    var d = '';
    for (var i = 0; i < a.length; i++) {
        b[i] = a[a.length - i - 1];
        d = d + b[i];
    }
    return a == d;
}
//2
function combinator(word) {
    for (var j = 0; j < word.length; j++) {
        var c = word[j];
        var h = c;
        console.log(h);
        for (var k = j + 1; k < word.length; k++) {
            h = h + word[k];
            console.log(h);
        }
    }
    return (word);
}
//3
function sorter(str) {
    var a = [];
    var res = '';
    for (var k = 0; k < str.length; k++) {
        a[k] = str[k];
    }
    var c;
    var s = true;
    while (s == true) {
        s = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                c = a[i];
                a[i] = a[i + 1];
                a[i + 1] = c;
                s = true;
            }
        }
    }
    for (var k = 0; k < str.length; k++) {
        res = res + a[k];
    }
    return res;
}
//4
function longWord(phrase) {
    phrase = phrase + " ";
    var word = '';
    var l = phrase.length;
    var max = 0;
    for (var q = 0; q < l; q++) {
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
function order_without_unique(f) {
    var u = "";
    for (var t = 0; t < f.length; t++) {
        var tr = true;
        for (var t1 = 0; t1 < t; t1++) {
            if (f[t1] == f[t]) {
                tr = false;
            }
        }
        if (tr == true) {
            u = u + f[t];
        }
    }
    return u;
}