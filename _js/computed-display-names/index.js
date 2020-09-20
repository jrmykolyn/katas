// Given a collection of records and a dictionary of 'display names', update the
// collection such that each record includes the correct display name. Note that
// the the 'display names' dictionary is keyed using the `type` property of the
// the records.
//
// If a given `type` is not present in the 'display names' dictionary, fall back
// to 'Unknown'.
const records = [
  { type: 'A' },
  { type: 'B' },
  { type: 'C' },
  { type: 'D' },
];

const displayNames = {
  A: 'Display Name A',
  B: 'Display Name B',
  C: 'Display Name C',
};

const applyDisplayNameToRecord = (displayNames) => (record) => ({ ...record, displayName: displayNames[record.type] || 'Unknown' });

const recordsWithDisplayNames = records.map(applyDisplayNameToRecord(displayNames));

console.log(recordsWithDisplayNames);
