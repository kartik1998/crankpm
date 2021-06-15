# crankpm (CrankDB Node JS driver)

crankpm is the database driver for CrankDB for node js applications.

# Pre requisites

Setup [CrankDB](https://github.com/shreybatra/crankdb) and get it started.

# Sample implementation

```javascript
const crank = new Crank();
process.nextTick(() => {
  crank.get("1", (d) => {
    console.log(d);
  });
});
crank.set("1", "123", (d) => {
  console.log(d);
});
```
