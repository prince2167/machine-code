const num = [1, 2, 3, 4, 5];

// forEach
num.forEach((element) => {
  console.log(element);
});

// pollyfil of forEach
// input ---> cb
// parameter ---<  element,index array
// return ---> nothing

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], this, i);
  }
};

num.myForEach((element) => {
  console.log(element);
});

//--------------------------------------------------------------------------------------------------

// pllyfill of map

// const result = num.map((el, index, array) => el * 2);
console.log(result);

// input ---> cb
// parameter ---> el,index,array
// return ---> new array

Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
};

const output = num.map((el, index, array) => el * 2);
console.log(output);

//--------------------------------------------------------------------------------------------

// polfill of filter

const filterResult = num.filter((el, index, array) => el % 2 === 0);
console.log(filterResult);

// input ---> cb
// parameter ---> el,index,array
// return ---> array

Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const myFilterResult = num.filter((el, index, array) => el % 2 === 0);
console.log(myFilterResult);

// --------------------------------------------------------------------------------------------

// pollfil of reduce
const reduceResult = num.reduce((acc, curr) => acc + curr, 0);
console.log(reduceResult);

//  input---> cb,initialValue
// parameter ---> acc,curr, index, array
// return ---> acc

Array.prototype.myReduce = function (cb, initialValue) {
  if (this.length === 0) {
    throw new Error("Reduce of empty array with no initial value");
  }
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }

  return acc;
};

const myReduceResult = num.reduce((acc, curr) => acc + curr, 0);
console.log(myReduceResult);

// ---------------------------------------------------------------------------------------------
// pllyfil of find

const findResult = num.find((el) => el % 2 === 0);
console.log(findResult);

// input ---> cb
// parameter ---> el
// return ---> first element

Array.prototype.myFind = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return this[i];
    }
  }

  return undefined;
};

const myindResult = num.find((el) => el % 2 === 0);
console.log(myindResult);

// -----------------------------------------------------------------------------------------------

// pollyfil of some

const someResult = num.some((el) => el % 2 === 0);
console.log(someResult);

//  input ---> cb
// parameter ---> element
// return ---> boolean value

Array.prototype.mySome = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return true;
    }
  }

  return false;
};

const mySomeResult = num.some((el) => el % 2 === 0);
console.log(mySomeResult);
