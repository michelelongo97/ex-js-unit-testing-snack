module.exports = { getInitials };

function getInitials(nomecognome) {
  const [nome, cognome] = nomecognome.split(" ").filter((str) => str !== "");
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}
