const wordSearch = (letters, word) => {
  if (!word) {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  let copyMatrix = [];
  for (let i = 0; i < letters[0].length; i++) {
    copyMatrix[i] = [];
    for (let j = 0; j < letters.length; j++) {
      copyMatrix[i][j] = letters[j][i];
    }
  }
  const verticalJoin = copyMatrix.map(ls => ls.join(''));
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;