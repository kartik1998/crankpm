const net = require("net");
const utility = require("../lib/utility");

class Crank {
  constructor(host = "localhost", port = 9876) {
    this.socket = new net.Socket();
    this.socket.connect(port, host, () => {
      utility.log(`crankdb tcp connection established for ${host}:${port}`);
    });
  }

  send(data, callback) {
    this.socket.write(data);
    this.socket.on("data", (data) => {
      return callback(data.toString());
    });
  }

  set(key, value, callback) {
    if (typeof key !== "string") utility.throwError("set key must be a string");
    if (key.length > 128)
      utility.throwError("length of key should be within 128 bytes");
    const inputVal = utility.convertJSONToString(value);
    this.send(`set ${key} ${inputVal}`, callback);
  }

  get(key, callback) {
    if (typeof key !== "string") utility.throwError("get key must be a string");
    this.send(`get ${key}`, callback);
  }

  delete(key, callback) {
    if (typeof key !== "string")
      utility.throwError("delete key must be a string");
    this.send(`del ${key}`, callback);
  }

  filter(filters = {}, callback) {
    Object.keys(filters).forEach((key) => {
      if (typeof key !== "string")
        utility.throwError("Filter keys can only have String values");
    });
    this.send(`find ${filters}`, callback);
  }
}

module.exports = Crank;
