// head :: [a] -> a
const head = ([h]) => h;

// last :: [a] -> a
const last = (arr) => arr[arr.length - 1];

module.exports = {
  head,
  last,
};
