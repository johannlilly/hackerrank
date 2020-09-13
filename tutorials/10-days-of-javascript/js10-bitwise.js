'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getMaxLessThanK(n, k) {
  let a = n - 1;
  let b = n;
  let max = 0;
  for (b, a; b > a, a > 0; b--, a--) {
      for (let j = a; j > 0; j--) {
          if ((j&b) < k) {
              if ((j&b) > max) { max = (j&b) };
          }
      }
  }
  return max;
}

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}