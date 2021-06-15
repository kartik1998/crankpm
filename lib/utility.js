const os = require("os");

exports.log = (message) => {
  console.log(
    `[${new Date().toISOString()}][${os.hostname()}][${os.platform()}] ${message}`
  );
};

exports.throwError = (message) => {
  const err = new Error(message);
  throw err;
};

exports.convertJSONToString = (data) => {
  try {
    return JSON.stringify(data);
  } catch (err) {
    return data;
  }
};
