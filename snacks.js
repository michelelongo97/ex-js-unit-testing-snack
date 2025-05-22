module.exports = { getInitials, createSlug, average, isPalindrome };

function getInitials(nomecognome) {
  const [nome, cognome] = nomecognome.split(" ").filter((str) => str !== "");
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlug(str) {
  if (!str) {
    throw new Error("Stringa non valida");
  }
  return str.toLowerCase().replaceAll(" ", "-");
}

function average(numbers) {
  let sum = 0;
  const total = numbers.forEach((number) => {
    sum += number;
  });
  return sum / numbers.length;
}

function isPalindrome(str) {
  const string = str.trim().split("").reverse().join("");

  return str.trim() === string;
}
