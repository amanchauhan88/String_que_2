const sentence = "The quick brown fox";

function findLongestWord(sentence) {
    const words = sentence.split(" ");

    let longestWord = "";
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i].replace(/[^a-zA-Z]/g, '');
        
        if (word.length > maxLength) {
            longestWord = word;
            maxLength = word.length;
        }
    }

    return longestWord;
}

console.log(`Longest word in "${sentence}":`, findLongestWord(sentence));
