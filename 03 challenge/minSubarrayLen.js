// Sliding Window - minSubArrayLen
// 양수 배열과 양수라는 두 개의 매개 변수를 받아들이는 minSubArrayLen이라는 함수를 작성하세요.
// 이 함수는 합이 함수에 전달된 정수보다 크거나 같은 인접한 하위 배열의 최소 길이를 반환해야 합니다. 값이 없는 경우 0을 반환합니다.

function minSubArrayLen(arr, n) {
    if (arr.length < 1 || n === null) return console.log(0);

    let sum = 0;
    let len = 0;
    let result = {};

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        len++;
        if (sum >= n) {
            result[sum] ? (result[sum] > len ? result[sum] = len : result[sum] = result[sum]) : result[sum] = len;
            sum = 0;
            len = 0;
        } else {
            for (let j = i + 1; j < arr.length; j++) {
                sum += arr[j];
                len++;
                if (sum < n) {
                    if (j === arr.length - 1) {
                        sum = 0;
                        len = 0;
                        break;
                    }
                    continue;
                } else {
                    result[sum] ? (result[sum] > len ? result[sum] = len : result[sum] = result[sum]) : result[sum] = len;
                    sum = 0;
                    len = 0;
                    break;
                }
            }
        }
    }

    let answer = Infinity;

    if (Object.keys(result).length === 0) return console.log(0);

    for (let i in result) {
        if (result[i] < answer) {
            answer = result[i];
        }
    }

    return console.log(answer);
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0