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
  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
      arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
  }

  const x       = arr.length;
  const x_start = x-(x-1);
  const x_end   = x-1;
  const y       = arr[0].length;
  const y_start = y-(y-1);
  const y_end   = y-1;

  let largestNumber = Number(0);
  let sum = Number(0);
  for (let i = x_start; i < x_end; i++) {
    for (let j = y_start; j < y_end; j++) {
      sum += arr[i-1][j-1];
      sum += arr[i-1][j];
      sum += arr[i-1][j+1];

      sum += arr[i][j];

      sum += arr[i+1][j-1];
      sum += arr[i+1][j];
      sum += arr[i+1][j+1];
      console.log(`sum = ${sum}`);
      if (sum > largestNumber) largestNumber = sum;
      console.log(`largestNumber = ${largestNumber}`);
      sum = 0;
      console.log('------------')
    }
  }
  return largestNumber;
}
