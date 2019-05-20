const fs = require("fs");

const hello = fs.readFileSync('hello.txt', 'utf-8').trim();

module.exports = {
  hello
};
