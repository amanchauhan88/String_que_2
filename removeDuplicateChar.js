let str = "hellllooo";
let uniqueChars = "";

for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (!uniqueChars.includes(currentChar)) {
        uniqueChars += currentChar;
    }
}

console.log(uniqueChars); 
