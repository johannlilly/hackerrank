function processData(input) {
  input = input.split('\n').map(number => Number(number));
  const testCases = Number(input.shift());
  const specialPrimes = [2,3,5];
  const types = { prime: 'Prime', notPrime: 'Not prime' };
  let message;
  for (let number of input) {
      if (specialPrimes.includes(number)) {
          message = types.prime;
      } else if (number == 1) {
          message = types.notPrime;
      } else {;
          let count = 0;
          for (let i = 2; i < number; i++) {
              if (number % i == 0) {
                  count++;
              }
          }
          message = count == 0
          ? types.prime
          : types.notPrime; 
      }
      console.log(message);
  }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
 processData(_input);
});
