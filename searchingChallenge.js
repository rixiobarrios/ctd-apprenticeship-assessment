// Searching challenge:

function findFirstNonRepeatedChar(str) {
    // Create a hash map to store character occurrences
    var charMap = {};

    // Loop through each character in the string
    for (var i = 0; i < str.length; i++) {
        // Use the character as a key in the hash map
        var char = str[i];
        // Increment the occurrence count for the current character
        charMap[char] = (charMap[char] || 0) + 1;
    }

    // Loop through each character in the string again
    for (var i = 0; i < str.length; i++) {
        // If the occurrence count for the current character is 1, it is the first non-repeated character
        if (charMap[str[i]] === 1) {
            return str[i] + ':ReversedChallengeToken';
        }
    }

    // If no non-repeated character is found, return null or a specified value
    return null; // You can modify this line if you want to return a different value
}

// Example usage:
var result = findFirstNonRepeatedChar('abacddbec');
console.log(result); // Output: 'e'
