'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() { 
    return inputString[currentLine++];
}



function main() {
  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    let max = 0;

    for (let b = n, a = n-1; b>a, a>0; b--, a--) {
      for (let i = a; i>0; i--) {
        if ((i&b)<k) {
          if((i&b) > max) { max = (i&b); }
        }
      }
    }
    console.log(max);
  }
}
