// Simple Encryption #1 - Alternating Split

/*
For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
Write two methods:

function encrypt(text, n)
function decrypt(encryptedText, n)
For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text.
*/

function encrypt(text, n) {
  if (n <= 0 || text === null || text.length === 0) return text;
  let encryptedTextStart = '';
  let encryptedTextEnd = '';
  text.split('').forEach((character, index) => {
    if (index % 2 === 0) encryptedTextStart += character;
    else encryptedTextEnd += character;
  });
  const encryptedText = encryptedTextEnd + encryptedTextStart;
  if (n > 1) return encrypt(encryptedText, n - 1);
  return encryptedText;
}

function decrypt(encryptedText, n) {
  if (n <= 0 || encryptedText === null || encryptedText.length === 0) return encryptedText;
  let decryptedText = '';
  const halfLength = encryptedText.length % 2 === 0 ? encryptedText.length / 2 : parseInt(encryptedText.length / 2);
  for (let i = 0; i < halfLength; i++) {
    decryptedText += (encryptedText[halfLength + i] + encryptedText[i]);
  }
  if (encryptedText.length % 2 !== 0) {
    decryptedText += encryptedText[encryptedText.length - 1];
  }
  if (n > 1) return decrypt(decryptedText, n - 1);
  return decryptedText;
}

module.exports = {
  encrypt,
  decrypt
};
