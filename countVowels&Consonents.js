let inputString = "hello world";
let vowelsCount = 0;
let consonantsCount = 0;


for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];
    
    // Check if the character is a vowel
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelsCount++;
    } 
    // Check if the character is a consonant
    else if (char >= 'a' && char <= 'z') {
        consonantsCount++;
    }
}

console.log("Number of vowels:", vowelsCount);
console.log("Number of consonants:", consonantsCount);
