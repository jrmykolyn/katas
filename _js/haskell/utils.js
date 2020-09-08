const equals = (actual, expected) => actual === expected;

const deepEquals = (actual, expected) => {
  if (equals(actual, expected)) return true;
  if (Array.isArray(actual)) return actual.every((value, i) => deepEquals(value, expected[i]));
  if (typeof actual === 'object') return Object.keys(actual).map((key) => [key, actual[key]]).every(([key, value]) => deepEquals(value, expected[key]));
  return false;
};

const expect = (actual) => ({
  toBe: (expected) => equals(actual, expected),
  toEqual: (expected) => deepEquals(actual, expected),
});

module.exports = {
  expect,
};
