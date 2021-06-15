const net = require("net");
const utility = require("../lib/utility");

class Crank {
  constructor(host = "localhost", port = 9876) {
    this.socket = new net.Socket();
    this.socket.connect(port, host, (err) => {
      if (err) {
        utility.log(err.message);
      }
      utility.log(`crankdb tcp connection established for ${host}:${port}`);
    });
  }
}

module.exports = Crank;
