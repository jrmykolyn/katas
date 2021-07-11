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
 */
