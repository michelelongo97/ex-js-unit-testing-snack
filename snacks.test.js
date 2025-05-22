const { getInitials, createSlug } = require("./snacks.js");

//1
test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
  expect(getInitials("Michele Longo")).toBe("M.L.");
  expect(getInitials("michele longo")).toBe("M.L.");
  expect(getInitials("michele  longo")).toBe("M.L.");
});

//2
test("La funzione createSlug restituisce una stringa in lowercase", () => {
  expect(createSlug("CIAO")).toBe("ciao");
});
//3
//  test('La funzione average calcola la media aritmetica di un array di numeri')
//4
//  test('La funzione createSlug sostituisce gli spazi con -.')
///////////La funzione createSlug sostituisce gli spazi con -.
//5
//  test('La funzione isPalindrome verifica se una stringa è un palindromo.')
//6
//  test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.')
//7
//  test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id"')
///////////Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).
