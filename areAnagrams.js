
const testPairs = [
    ["listen", "silent"],
    ["hello", "world"],
    ["debit card", "bad credit"],
    ["astronomer", "moon starer"]
];

function areAnagrams(word1, word2) {
    // Remove non-alphabetic characters and convert to lowercase
    const cleanWord1 = word1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const cleanWord2 = word2.replace(/[^a-zA-Z]/g, '').toLowerCase();

    // If lengths are different, they can't be anagrams
    if (cleanWord1.length !== cleanWord2.length) {
        return false;
    }

    // Sort the characters in both words and compare
    const sortedWord1 = cleanWord1.split('').sort().join('');
    const sortedWord2 = cleanWord2.split('').sort().join('');

    return sortedWord1 === sortedWord2;
}


testPairs.forEach(pair => {
    const word1 = pair[0];
    const word2 = pair[1];
    console.log(`"${word1}" and "${word2}" are anagrams: ${areAnagrams(word1, word2)}`);
});
