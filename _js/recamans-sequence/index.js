/**
 * Recaman's sequence is a series of numbers. The values within the sequence are derived from their position, as well as the value of the previous numbers in the series.
 *
 * The rules that govern the sequence are as follows:
 * - The sequence is 0 indexed (ie. it contains a number at position 0).
 * - The first number in the sequence is 0.
 * - The number at a given position (n) is equal to value of (n - 1) plus OR minus the position.
 * - If (n - 1) minus the position yields a negative number, then the value of the posiiton is equal to (n - 1) plus the position.
 * - If (n - 1) minus the position yields a number that is already present in the sequence, then the value of the position is equal to (n - 1) plus the position.
 * - Otherwise the value of the position is equal to (n - 1) minus the position.
 *
 * Examples:
 *
 * Computing the value at position 1:
 * - First, retrieve the value for position 0 (eg. 1 - 1).
 * - The value for position 0 is 0.
 * - Then subtract the current position (eg. 1) from the retrieved value: 0 - 1.
 * - This gives us a value of -1.
 * - Since the numbers in Recaman's Sequence cannot be negative, we instead add the previously retrieved value to the current position: 0 + 1.
 * - This gives us a value of 1.
 * - The value for position 1 is 1.
 *
 * Computing the value at position 6:
 * - First, retrieve the value for position 5 (eg. 6 - 1).
 * - The value for position 5 is 7.
 * - Then subtrac the current position (eg. 6) from the retrieved value: 7 - 1.
 * - This gives us a value of 1.
 * - Although 1 is a positive number, it is already present in the sequence.
 * - As a result we add the previosly retrieved value to the current position: 7 + 6.
 * - The value for position 6 is 13.
 */
const recamansSequence = (n, cache = {}) => {
  if (!n) return 0;
  const prev = recamansSequence(n - 1, cache);
  const tmp = prev - n;
  const next = tmp > 0 && !(tmp in cache) ? tmp : prev + n;
  cache[next] = true;
  return next;
};

console.log(recamansSequence(0) === 0);
console.log(recamansSequence(1) === 1);
console.log(recamansSequence(2) === 3);
console.log(recamansSequence(3) === 6);
console.log(recamansSequence(4) === 2);
console.log(recamansSequence(5) === 7);
console.log(recamansSequence(6) === 13);
