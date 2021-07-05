# [WIP] crankpm (CrankDB Node JS driver)

crankpm is the database driver for CrankDB for node js applications.

# Pre requisites

Setup [CrankDB](https://github.com/shreybatra/crankdb) and get it started.

To install run: `npm install crankpm`

# Sample implementation

```javascript
const Crank = require('crankpm');

const crank = new Crank();

const setRes = crank.set("key", "value");
const getRes = crank.get("key");
const delRes = crank.delete("key");

crank.set('year', { 2019: 'covid', 2020: 'vaccine' })
const findRes = crank.find({ 2019: 'covid' });

console.log({ setRes, getRes, delRes, findRes });
```

### Expected output:

```javascript
{
  setRes: '"key set"',
  getRes: '"value"',
  delRes: '"key deleted."',
  findRes: '[{"2019":"covid","2020":"vaccine"}]'
}
```


