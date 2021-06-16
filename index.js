const Crank = require('./crank');

const crank = new Crank();
console.log(crank.set('key', 'val'));
module.exports = Crank;
