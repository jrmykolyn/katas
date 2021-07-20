/**
 * Given a number, return a boolean value indicating whether or not it is perfect.
 *
 * For a number to be considered perfect it must be equal to the sum of its proper divisors.
 *
 * For example:
 * - The proper divisors for 6 are 1, 2, and 3.
 * - The sum of 1, 2 and 3 is 6.
 * - Therefore 6 is a perfect number.
 */
const isPerfect = (n) => {
  // Generate a list of numbers beginning with 1 and ending with `n - 1`.
  const nums = new Array(n - 1).fill(null).map((_, i) => i + 1);

  // From that list take the subset of proper divisors.
  const factors = nums.filter((num) => n % num === 0);

  // Sum the resulting subset...
  const sum = factors.reduce((sum, factor) => factor + sum, 0);

  // And compare it to the current value of `n`.
  return sum === n;
};

console.log(isPerfect(6));
console.log(isPerfect(28));
console.log(isPerfect(496));
console.log(isPerfect(8128));
