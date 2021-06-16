const { SocketClientTCP } = require('netlinkwrapper');
const utility = require('../lib/utility');

class Crank {
  constructor(host = 'localhost', port = 9876) {
    this.socket = new SocketClientTCP(port, host);
    // this.socket.connect(port, host, () => {
    //   utility.log(`crankdb tcp connection established for ${host}:${port}`);
    // });
  }

  send(data) {
    this.socket.send(data);
    return this.socket.receive().toString();
  }

  set(key, value) {
    if (typeof key !== 'string') utility.throwError('set key must be a string');
    if (key.length > 128) utility.throwError('length of key should be within 128 bytes');
    const inputVal = utility.convertJSONToString(value);
    return this.send(`set ${key} ${inputVal}`);
  }

  get(key) {
    if (typeof key !== 'string') utility.throwError('get key must be a string');
    this.send(`get ${key}`);
  }

  delete(key) {
    if (typeof key !== 'string') utility.throwError('delete key must be a string');
    this.send(`del ${key}`);
  }

  filter(filters = {}) {
    Object.keys(filters).forEach((key) => {
      if (typeof key !== 'string') utility.throwError('Filter keys can only have String values');
    });
    this.send(`find ${filters}`);
  }
}

module.exports = Crank;
