// --------------------------------------------------
// SETUP
// --------------------------------------------------
const arr = new Array(10).fill(null).map((_, i) => i);

// --------------------------------------------------
// DEFINE
// --------------------------------------------------
const arrToBst = (arr) => {
  // If the array only contains 1 item, return a node whose value is equal to
  // the value within the array.
  if (arr.length === 1) return { value: arr[0] };

  // If the array contains 2 items, return a node whose value is equal to the
  // second item in the array. Additionally, compute the value of the 'left'
  // child node by invoking the function recursively.
  if (arr.length === 2) return { value: arr[1], left: arrToBst(arr.slice(0, 1)) };

  // If the array contains 3 or more items, let the value of the current node
  // be equal to the 'middle' item. Compute the values by of the 'left' and
  // 'right' child nodes by invoking the function recursively an passing in the
  // left or right subset.
  else return {
    value: arr[Math.floor(arr.length / 2)],
    left: arrToBst(arr.slice(0, Math.floor(arr.length / 2))),
    right: arrToBst(arr.slice(Math.floor(arr.length / 2) + 1)),
  };
};

// --------------------------------------------------
// INIT
// --------------------------------------------------
console.log(JSON.stringify(arrToBst(arr), null, 2));
