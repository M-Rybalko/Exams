// Sum all numbers from an array

// Step 6(1)
// Implement with Array.map()

'use strict';

const sum = (array) => {
  let res = 0;
  const condition = (element) => {
    if (typeof element === 'number') res += element;
  };
  array.map(condition);
  return res;
};

require('../Tests/sum.js')(sum);
