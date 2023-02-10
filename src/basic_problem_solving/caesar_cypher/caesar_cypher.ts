export default function caesarCipher(s: string, k: number): string {
  const MIN_UPPER_CASE = 65;
  const MAX_UPPER_CASE = 90;

  const MIN_LOWER_CASE = 97;
  const MAX_LOWER_CASE = 122;

  const k_real_rotation = k % 26;
  return s
    .split("")
    .map((char) => {
      if (/[a-zA-Z]/.test(char)) {
        const charCode = char.charCodeAt(0);
        const newCharCode = charCode + k_real_rotation;
        if (
          newCharCode > MAX_LOWER_CASE ||
          (newCharCode > MAX_UPPER_CASE && charCode <= MAX_UPPER_CASE)
        ) {
          return String.fromCharCode(newCharCode - 26);
        }

        return String.fromCharCode(newCharCode);
      }
      return char;
    })
    .join("");
}
