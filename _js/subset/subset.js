/**
 * Given sets `a` and `b`, return whether `a`
 * is a subset of `b`.
 *
 * @param {Array} a
 * @param {Array} b
 * @return {boolean}
 */
const isSubset = (a, b) => {
  // If `a` contains more members than `b`, it cannot be
  // a subset. Return false.
  if (a.length > b.length) return false;

  // Iterate over `a` and return false if a given member
  // is not present in `b`.
  for (let i = 0, x = a.length; i < x; i++) {
    if (b.indexOf(a[i]) === -1) return false;
  }

  // If every member of `a` is also a member of `b`, then
  // it is a subset. Return true.
  return true;
};

// Define sample data.
const sets = [
  [[1,2,3], [1,2,3,4]],
  [[1,2,3], [2,3,4]],
  [['a','b','c'],['a','b','c','d']],
  [['a','b','c'],['b','c','d']],
];

// Test sample data.
sets.forEach((set) => {
  const [a, b] = set;
  const result = isSubset(a, b);

  if (result) {
    console.log(`Set ${a} is a subset of ${b}`);
  } else {
    console.log(`Set ${a} is not a subset of ${b}`);
  }
});
