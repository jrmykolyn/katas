// Given a collection of records and a dictionary of 'display names', update the
// collection such that each record includes the correct display name. Note that
// the the 'display names' dictionary is keyed using the `type` property of the
// the records.
//
// If a given `type` is not present in the 'display names' dictionary, fall back
// to 'Unknown'.
const records = [
  { type: 'A', subType: 1 },
  { type: 'B', subType: 2 },
  { type: 'C', subType: 3 },
  { type: 'D', subType: 4 },
];

const displayNames = {
  A: {
    name: 'Display Name A',
    subTypes: {
      1: { name: 'Display Name A1' },
    },
  },
  B: {
    name: 'Display Name B',
    subTypes: {
      2: { name: 'Display Name B2' },
    },
  },
  C: {
    name: 'Display Name C',
  },
  D: {
    name: 'Display Name D',
  }
};

/**
 * Given a dictionary of 'display name' objects, transform it such that each
 * value is the `name` property of the corresponding object.
 *
 * // Input
 * const displayNames = {
 *  typeA: { name: 'Display Name for Type A' },
 *  typeB: { name: 'Display Name for Type B' },
 * };
 *
 * // Output
 * {
 *  typeA: 'Display Name for Type A' },
 *  typeB: 'Display Name for Type B' },
 * }
 */
const toTypeDictionary = (dictionary = {}) => Object.keys(dictionary)
  .map((k) => [k, dictionary[k]])
  .reduce((acc, [k, { name }]) => ({ ...acc, [k]: name }), {});

/**
 * Given a dictionary of 'display name' objects, compute and return a dictionary
 * whose keys and values are derived from the `subTypes` property of each
 * 'display name' object.
 */
const toSubTypeDictionary = (dictionary = {}) => Object.keys(dictionary)
  .map((k) => dictionary[k].subTypes)
  .map((o) => toTypeDictionary(o))
  .reduce((acc, o) => ({ ...acc, ...o }), {});

const applyDisplayNameToRecord = (displayNames) => (record) => ({ ...record, displayName: toSubTypeDictionary(displayNames)[record.subType] || toTypeDictionary(displayNames)[record.type] || 'Unknown' });

const recordsWithDisplayNames = records.map(applyDisplayNameToRecord(displayNames));

console.log(recordsWithDisplayNames);
