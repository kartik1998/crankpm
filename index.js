const Crank = require("./crank");

const crank = new Crank();

crank.set("1", "123", (d) => {
  console.log(d);
});
