# crankpm (CrankDB Node JS driver)

crankpm is the database driver for CrankDB for node js applications.

# Pre requisites

Setup [CrankDB](https://github.com/shreybatra/crankdb) and get it started.
To install run: `npm install https://git@github.com:kartik1998/crankpm.git`

# Sample implementation

```javascript
const Crank = require('crankpm');

const crank = new Crank();

const setRes = crank.set("key", "value");
const getRes = crank.get("key");
console.log({ setRes, getRes });
```

### Expected output:

```
{ setRes: '"key set"', getRes: '"value"' }
```


