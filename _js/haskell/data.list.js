// head :: [a] -> a
const head = ([h]) => h;

// last :: [a] -> a
const last = (arr) => arr[arr.length - 1];

// tail :: [a] -> [a]
const tail = ([_, ...t]) => t;

// init :: [a] -> [a]
const init = (arr) => arr.slice(0, arr.length - 1);

// uncons :: [a] -> [a, [a]]
const uncons = ([h, ...t]) => [h, t];

module.exports = {
  head,
  last,
  tail,
  init,
  uncons,
};
