const res = document.getElementById('res');
const btnClr = document.getElementById('btnClr');
const btnEql = document.getElementById('btnEql');

class Button {
  constructor(id) {
    document.getElementById(id).addEventListener('click', this.onclick);
    this.value = document.getElementById(id);
  }
}

/**
 * handle binary digit buttons
 */
class BinaryDigit extends Button {
  constructor(id) {
    super(id);
  }
  onclick() {
    if (expression.operator == '') {
      if (expression.operand1 == '') {
        expression.operand1 = this.innerText;
      } else {
        expression.operand1 += this.innerText;
      }
      updateRes(String(parseInt(expression.operand1), 2));
    } else {
      if (expression.operand2 == '') {
        expression.operand2 = this.innerText;
      } else {
        expression.operand2 += this.innerText;
      }
      updateRes(String(parseInt(expression.operand2), 2));
    }
  }
};

/**
 * handle performable operation buttons
 */
class Operation extends Button {
  constructor(id) {
    super(id);
  }
  onclick() {
    expression.operator = this.innerText;
  }
};

const btn0 = new BinaryDigit('btn0');
const btn1 = new BinaryDigit('btn1');

const btnSum = new Operation('btnSum');
const btnSub = new Operation('btnSub');
const btnMul = new Operation('btnMul');
const btnDiv = new Operation('btnDiv');

const expression = { operand1: '', operand2: '', operator: '' }

/**
 * handle updating the result window
 * @param {string} value
 */
let updateRes = value => {
  res.innerHTML = value;
}

/**
 * handle button to clear result window
 */
btnClr.onclick = () => {
  expression.operand1 = '';
  expression.operator = '';
  expression.operand2 = '';
  updateRes('');
}

/**
 * handle equals button to get result
 */
btnEql.onclick = () => {
  let sol;
  if (expression.operand2 == '') {
    sol = expression.operand1;
    updateRes(String(parseInt(sol),2));
  } else {
    let op1 = expression.operand1;
    let op2 = expression.operand2;
    switch(expression.operator) {
      case '+': sol = op1 + op2; break;
      case '-': sol = op1 - op2; break;
      case '*': sol = op1 * op2; break;
      case '/': sol = op1 / op2; break;
    }
    updateRes(String(parseInt(sol, 2)));
  }
}