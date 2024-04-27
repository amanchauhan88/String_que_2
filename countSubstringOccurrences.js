

const testString = "hellohellohellohello";
const testSubstring = "hello";

function countSubstringOccurrences(str, substr) {
    let count = 0;
    let index = str.indexOf(substr);

    while (index !== -1) {
        count++;
        index = str.indexOf(substr, index + 1);
    }

    return count;
}

console.log(`Number of occurrences of "${testSubstring}" in "${testString}":`, countSubstringOccurrences(testString, testSubstring));
