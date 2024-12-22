let word1 = "RACECAR";
let word2 = "RECORDER";

function isPalindrome(word) {
    let reversed = word.split("").reverse().join("");
        console.log(`Original: ${word}, Reversed: ${reversed}`);
            return word === reversed;
            }

            console.log(`Is "${word1}" a palindrome?`, isPalindrome(word1));
            console.log(`Is "${word2}" a palindrome?`, isPalindrome(word2));