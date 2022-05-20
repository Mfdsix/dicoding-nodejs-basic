const _ = require('lodash');

const oddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);
console.log(oddEvenArray);