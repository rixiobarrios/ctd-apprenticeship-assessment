// String challenge:

function StringChallenge(str) {
    // Initialize vowel count
    let vowelsCount = 0;
    // Define vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // Iterate through vowels in given string
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            // Accumulate count
            vowelsCount++;
        }
    }
    // Output total count
    return vowelsCount;
}

// Example usage:
console.log(StringChallenge('Hello')); // Output: 2
