function charCount(str) {
    let result = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            result[char] = ++result[char] || 1;
        }
    }
    console.log(result);
}

charCount("Hi there!");

console.log('a'.charCodeAt(0));