
const message = "hello world";
const shift = 3;

function caesarCipherEncrypt(message, shift) {
    // Define the alphabet
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetLength = alphabet.length;

    // Convert the message to lowercase
    message = message.toLowerCase();

    let encryptedMessage = "";

    // Iterate through each character in the message
    for (let i = 0; i < message.length; i++) {
        // Get the current character
        let char = message[i];
        // Check if the character is a letter
        if (/[a-z]/.test(char)) {
            // Find the index of the character in the alphabet
            let currentIndex = alphabet.indexOf(char);
            // Calculate the new index after shifting
            let newIndex = (currentIndex + shift) % alphabetLength;
            // Handle wrapping around the alphabet if newIndex is negative
            if (newIndex < 0) {
                newIndex += alphabetLength;
            }
            // Append the encrypted character to the result
            encryptedMessage += alphabet[newIndex];
        } else {
            // Append non-letter characters unchanged
            encryptedMessage += char;
        }
    }

    return encryptedMessage;
}

// Test the function with a message and a shift value

const encryptedMessage = caesarCipherEncrypt(message, shift);
console.log(`Original Message: ${message}`);
console.log(`Encrypted Message: ${encryptedMessage}`);
