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
    this.send(`set ${key} ${value}`, callback);
  }
}

module.exports = Crank;
