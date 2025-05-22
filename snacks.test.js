const {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
} = require("./snacks.js");

describe("Manipolazione stringhe", () => {
  //1
  test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
    expect(getInitials("Michele Longo")).toBe("M.L.");
    expect(getInitials("michele longo")).toBe("M.L.");
    expect(getInitials("michele  longo")).toBe("M.L.");
  });

  //5
  test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("alla")).toBeTruthy();
    expect(isPalindrome("alta")).toBeFalsy();
  });
});

describe("operazione sugli array", () => {
  //3
  test("La funzione average calcola la media aritmetica di un array di numeri", () => {
    expect(average([3, 3, 3])).toBe(3);
  });

  const posts = [
    { id: 1, title: "Titolo 1", slug: "titolo-1" },
    { id: 2, title: "Titolo 2", slug: "titolo-2" },
    { id: 3, title: "Titolo 3", slug: "titolo-3" },
  ];

  //7
  test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id"', () => {
    expect(findPostById(posts, 1)).toEqual({
      id: 1,
      title: "Titolo 1",
      slug: "titolo-1",
    });
    expect(findPostById(posts, 5)).toBe(null);
    expect(() => findPostById(posts, "stringa")).toThrow(
      "Id deve essere un numero"
    );
    expect(() => findPostById([1, 2], 1)).toThrow("Array è sbagliato");
  });
});

describe("Slug", () => {
  //2
  test("La funzione createSlug restituisce una stringa in lowercase", () => {
    expect(createSlug("MICHELE LONGO")).toBe("michele-longo");
  });

  //4
  test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug("Michele Longo")).toBe("michele-longo");
  });

  //6
  test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug("")).toThrow("Stringa non valida");
  });
});
