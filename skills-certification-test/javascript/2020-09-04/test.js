let propNum = new Number(0);
let newObj = new Object();

function stripProperty(obj, prop) {
  if (typeof prop == "undefined") {
      propNum = Number(obj);
      return propNum;
  }
  if (propNum < 0) return obj;
  for (let p in obj ) {
    if (p !== prop) newObj[p] = obj[p];
  }
  return newObj;
}

let testObj = { foo: 'red', bar: 'green' } 

stripProperty(2);
stripProperty(testObj);
