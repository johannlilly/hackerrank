function processData(input) {
  let fine = new Number();
  let convertToDate = arr =>
    new Date(
      arr.split(' ')[2],
      arr.split(' ')[1] - 1,
      arr.split(' ')[0]
    );
  
  const returnDate = convertToDate(input.split('\n')[0]);
  const dueDate = convertToDate(input.split('\n')[1]);

  if (returnDate <= dueDate) {
    fine = 0;
  } else if (
    returnDate.getFullYear() <= dueDate.getFullYear()
    && returnDate.getMonth() <= dueDate.getMonth()
  ) {
    fine = 15 * (returnDate.getDate() - dueDate.getDate());
  } else if (
    returnDate.getFullYear() <= dueDate.getFullYear()
    && returnDate.getMonth() > dueDate.getMonth()
  ) {
    fine = 500 * (returnDate.getMonth() - dueDate.getMonth());
  } else if (returnDate.getFullYear() > dueDate.getFullYear()) {
    fine = 10000;
  }

  console.log(fine);
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
