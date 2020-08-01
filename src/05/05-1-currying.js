function multiply(a, b) {
  return a * b;
}

function multiplyTwo(a) {
  return multiply(a, 2);
}

function multiplyX(x) {
  return function(a) {
    return multiply(a, x);
  };
}

const multiplyThree = multiplyX(3);
const multiplyFour = multiplyX(4);

// const result1 = multiplyThree(3);
// const result2 = multiplyFour(3);
const result1 = multiplyX(3)(3);
const result2 = multiplyX(4)(3);
console.log(result1);
console.log(result2);

const equatation = (a, b, c) => x => x * a * b + c;
const fomular = equatation(2, 3, 4);
const x = 10;
const result = fomular(x);
console.log(result);

const add = (a, b) => a + b;
const addX = x => a => add(x, a);

const addFour = addX(4);
const fomular2 = x => addFour(multiplyThree(multiplyTwo(x)));
