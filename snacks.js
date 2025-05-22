module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
};

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

function findPostById(posts, id) {
  if (isNaN(id)) {
    throw new Error("Id deve essere un numero");
  }
  posts.forEach((post) => {
    if (
      post.id === undefined ||
      post.title === undefined ||
      post.slug === undefined
    ) {
      throw new Error("Array è sbagliato");
    }
  });
  return posts.find((p) => p.id === id) || null;
}
