module.exports = { getInitials, createSlug };

function getInitials(nomecognome) {
  const [nome, cognome] = nomecognome.split(" ").filter((str) => str !== "");
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlug(str) {
  return str.toLowerCase();
}
