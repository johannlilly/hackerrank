'use strict';

const fs = require('fs');


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

let propNum = new Number(0);
let newObj = new Object();

function stripProperty(obj, prop) {
  if (typeof prop == "undefined") propNum = Number(obj);
  if (propNum < 0) return obj;
  for (let p in obj ) {
    if (p !== prop) newObj.p = obj.p;
  }
  return newObj;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const obj = {};

  for (let i = 0; i < n; ++i) {
    const params = readLine().trim().split(' ');
    const k = params[0];
    const v = parseInt(params[1], 10);
    obj[k] = v;
  }

  const prop = readLine().trim();

  const result = stripProperty(obj, prop);

  Object.keys(result).sort().forEach(k => {
    ws.write(`${k} ${result[k]}\n`);
  });
  ws.end();
  }
}