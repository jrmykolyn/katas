// Define `inRange()`.
const inRange = (i, lowerBound, upperBound) => {
  if (typeof i !== 'number') throw new Error('i must be a number.');
  if (typeof lowerBound !== 'number') throw new Error('lowerBound must be a number.');
  if (typeof upperBound !== 'number') throw new Error('upperBound must be a number.');
  return (i >= lowerBound && i <= upperBound);
};

// Define bounds.
const bounds = [-1, 10];

// Define sample data.
const vals = [-1, 0, 1, 5, 10, 'foo', true, null, undefined, {}, [], NaN];

// Test sample data.
vals.forEach((val) => {
  try {
    console.log(inRange(val, ...bounds));
  } catch (e) {
    console.log(e.message);
  }
});

