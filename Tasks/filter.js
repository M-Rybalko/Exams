// Filter array by type name

// Step 5
// Use Array.prototype.filter()

'use strict';

const filter = (array, type) => array
  .filter((element) => typeof element === type);

require('../Tests/filter.js')(filter);
