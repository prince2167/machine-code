const str = "hello";

const reverseString = (str) => {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
};

console.log(reverseString(str));

// ------------------------------------------------------------

const sum = (x) => {
  return function (y) {
    if (y) return sum(x + y);
    return x;
  };
};

console.log(sum(1)(2)(5)(10)());

// -----------------------------------------------------------------

const multiply = (x, y) => {
  console.log(x * y);
};

const multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);
