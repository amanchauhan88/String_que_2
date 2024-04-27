const testString = "aaabbcc";


function compressString(str) {
    let compressedStr = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressedStr += str[i] + (count > 1 ? count : "");
            count = 1;
        }
    }

    return compressedStr;
}

console.log(`Original string: ${testString}`);
console.log(`Compressed string: ${compressString(testString)}`);
