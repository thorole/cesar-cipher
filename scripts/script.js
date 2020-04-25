alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z", "æ", "ø", "å"];

//let cesarDeciphered = "";

function iterateString() {
    let cesarString = "";
    encryptedParagraph = document.getElementById("encrypted");
    userString = document.getElementById("inputText").value;
    for (let i = 0; i < userString.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (userString[i] == " ") {
                cesarString += " ";
                break;
            }
            else if (userString[i] == alphabet[j] && j > 15) {
                cesarString += alphabet[j - 16];
            }
            else if (userString[i] == alphabet[j]) {
                cesarString += alphabet[j + 13];
            }
            else {
                continue;
            }
        }
    }
    encryptedParagraph.innerHTML = cesarString;
}
/*function decipher(messageToDecrypt) {
    let userStringTwo = messageToDecrypt;
    for (let i = 0; i < userStringTwo.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (userStringTwo[i] == " ") {
                cesarDeciphered += " ";
                break;
            }
            else if (userStringTwo[i] == alphabet[j] && j < 13) {
                cesarDeciphered += alphabet[j + 16];
            }
            else if (userStringTwo[i] == alphabet[j]) {
                cesarDeciphered += alphabet[j - 13];
            }
            else {
                continue;
            }
        }
    }
}
*/

iterateString();
//iterateString("abcdefghijklmnopqrstuvwxyzæøå");
console.log(cesarString);
//decipher(cesarString);
console.log(cesarDeciphered);



