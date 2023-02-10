import caesarCipher from "./caesar_cypher";

describe("Caesar Cipher", () => {
  test("Contains non-alphabetic characters and rotates past the letter Z", () => {
    expect(caesarCipher("Hello_World!", 4)).toEqual("Lipps_Asvph!");
  });

  test("Rotate with k greater than 87 and past the letter z", () => {
    expect(caesarCipher("www.abc.xy", 87)).toEqual("fff.jkl.gh");
  });

  test("Happy days", () => {
    expect(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)).toEqual(
      "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"
    );
  });
});
