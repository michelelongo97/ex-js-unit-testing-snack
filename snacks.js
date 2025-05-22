module.exports = { getInitials, createSlug, average };

function getInitials(nomecognome) {
  const [nome, cognome] = nomecognome.split(" ").filter((str) => str !== "");
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlug(str) {
  return str.toLowerCase().replaceAll(" ", "-");
}

function average(numbers) {
  let sum = 0;
  const total = numbers.forEach((number) => {
    sum += number;
  });
  return sum / numbers.length;
}
