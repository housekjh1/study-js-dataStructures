console.log('0'.charCodeAt(0), '9'.charCodeAt(0), 'A'.charCodeAt(0), 'Z'.charCodeAt(0), 'a'.charCodeAt(0), 'z'.charCodeAt(0));

function charCount(str) {
    let result = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (isAlphaNumeric(char)) {
            result[char] = ++result[char] || 1;
        }
    }
    console.log(result);
}

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
            return false;
        }
    return true;
}

charCount("Hi there!");

