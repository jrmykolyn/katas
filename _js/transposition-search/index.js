/**
 * Given an element and a collection of elements, return a tuple that contains:
 * - The index of the element within the collection.
 * - The collection.
 *
 * If the element is not present in the collection, the tuple will contain an
 * index value of -1.
 *
 * If the element is found in the collection, the element within the collection
 * will be shifted to the left by one position. If the element within the
 * collection is at position 0, it will not be shifted.
 */
const transpositionSearch = (el, arr) => {
  const i = arr.indexOf(el);

  return i === -1 || i === 0
    ? [i, arr]
    : [i, [...arr.slice(0, i - 1), arr[i], arr[i - 1], ...arr.slice(i + 1)]];
};

const a = ['a', 'b', 'c'];
console.log(a);
const [_, b] = transpositionSearch('c', a);
console.log(b);
const [__, c] = transpositionSearch('c', b);
console.log(c);
