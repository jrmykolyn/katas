/**
 * Given N functions and input data, apply each function in succession and
 * return the result.
 *
 * Usage:
 * function add1(n) { return n + 1 };
 * function add2(n) { return n + 2 };
 * compose(add1, add2, 0); // 3;
 */
function compose() {
  var args = Array.prototype.slice.call(arguments, 0);
  var length = args.length;
  var fns = args.slice(0, length - 1);
  var data = args[length - 1];

  return fns.reduceRight(function(value, fn) { return fn(value); }, data);
}
