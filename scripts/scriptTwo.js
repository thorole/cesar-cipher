alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z", "æ", "ø", "å", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z", "æ", "ø", "å"];

//let cesarDeciphered = "";

let cesarString = "";
let userString = "jegvilkoseisenga";
let key = [1, 2, 3];
let k = 0;
function iterateString() {


    for (let i = 0; i < userString.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (userString[i] == alphabet[j]) {
                cesarString += alphabet[j + key[k]];
                break;
            }
        }
        if (k == key.length - 1) {
            k = 0;
        }
        else {
            k++;
        }
    }
}
iterateString();
console.log(cesarString);

let reversedAlphabet = alphabet.reverse();
let decrypted = "";
let encryptedString = "kgjwkolqvfkvfpjb";
let keyToDecrypt = [1, 2, 3, 4];
let f = 0;
function iterateStringDecrypt() {


    for (let i = 0; i < userString.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (encryptedString[i] == alphabet[j]) {
                decrypted += reversedAlphabet[j + keyToDecrypt[f]];
                break;
            }
        }
        if (f == keyToDecrypt.length - 1) {
            f = 0;
        }
        else {
            f++;
        }
    }
}
iterateStringDecrypt();
console.log(decrypted);
