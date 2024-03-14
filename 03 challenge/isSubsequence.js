// 다중 포인터 - isSubsequence
// 두 문자열을 받아 첫 번째 문자열의 문자가 두 번째 문자열의 문자의 일부에 포함되는지 확인하는 isSubsequence라는 함수를 작성합니다. 즉, 이 함수는 첫 번째 문자열의 문자가 순서가 바뀌지 않고 두 번째 문자열의 어딘가에 나타나는지 확인해야 합니다.
// O(N + M)

function isSubsequence(str1, str2) {
    if (str1.length > str2.length) return console.log(false);
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            let count = i + 1;
            for (let j = i + 1; j < str2.length; j++) {
                if (str1[i] === str2[j]) {
                    break;
                } else {
                    count++;
                }
            }
            if (count === str2.length) {
                return console.log(false);
            }
        }
    }
    return console.log(true);
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false