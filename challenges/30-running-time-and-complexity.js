function processData(input) {
  input = input.split('\n').map(number => Number(number));
  input.shift();
  const types = { prime: 'Prime', notPrime: 'Not prime' };
  const specialPrimes = [2,3];
  let message;
  for (let number of input) {
    if (number == 1) {
      message = types.notPrime;
    } else if (specialPrimes.includes(number)) {
      message = types.prime;
    } else {
      let count = 0;
      message = types.notPrime;
      if ((number+1) % 6 == 0 || (number-1) % 6 == 0) {
        for (let i = 2; i <= Math.pow(number,0.5); i++) {
          if (number % i == 0) {
            count++;
            break;
          }
        }
        message = count == 0 ? types.prime : types.notPrime; 
      }
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
