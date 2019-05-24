// Import data.
const { data, sports } = require('./data');

/**
 * Given an array of `data` and optional `min` and `max`
 * arguments, return the array member with the smallest
 * range.
 *
 * If the `min` parameter is omitted, the default value of
 * 'min' is used.
 *
 * If the `max` parameter is omitted, the default value of
 * 'max' is used.
 *
 * @param {Array<T>} data - The array of data to iterate over.
 * @param {string} min - The identifier for the 'min' property.
 * @param {string} max - The identifier for the 'max' property.
 * @return {T}
 */
const smallestRange = (data, min = 'min', max = 'max') => {
  return data.map((datum) => ({
    ...datum,
    range: datum[max] - datum[min],
  })).reduce((acc, datum) => {
    return !acc.range || datum.range < acc.range
      ? datum
      : acc;
  }, {});
};

// Test against sample data.
console.log(smallestRange(data));
console.log(smallestRange(sports, 'goalsFor', 'goalsAgainst'));
