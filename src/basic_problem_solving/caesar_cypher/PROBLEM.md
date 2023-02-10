Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc

## Example
s = hello-world!
k = 3

The alphabet is rotated by 3, matching the mapping above. The encrypted string is 'khoor-zruog!'.

Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

## Function Description

### caesarCipher has the following parameter(s):
string s: text to be ciphered
int k: the alphabet rotation factor

### Returns
string: the encrypted string