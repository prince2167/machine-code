// call

const user = {
  FirstName: "Prince",
  lastName: "Singh",
};

function printUser(hometown, state) {
  console.log(
    ` ${this.FirstName}  ${this.lastName} from ${hometown}  ${state}`
  );
}
// printUser.call(user, "Najafgarh", "New Delhi");

// polfill of call methode

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new error(this + "is not call able");
  }
  context.fn = this;
  context.fn(...args);
};

// printUser.myCall(user, "Najafgarh", "New Delhi");

// -----------------------------------------------------------------------------------------------------------

// apply

const user2 = {
  FirstName: "Aarohi",
  lastName: "Sharma",
};
// printUser.apply(user2, ["Najafgarh", "New Delhi"]);

// polfill of apply methode

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new error(this + "is not call able");
  }
  if (!Array.isArray(args)) {
    throw new error(this + "Create list from array");
  }
  context.fn = this;
  context.fn(...args);
};

// printUser.myApply(user2, ["Najafgarh", "New Delhi"]);

// -----------------------------------------------------------------------------------------------------------

// bind
const user3 = {
  FirstName: "Lokesh",
  lastName: "Khati",
};

const printName = printUser.bind(user3, "Dheradhun", "uthrakhand");

printName();

// polfill of bind methode

Function.prototype.myBind = function (...args) {
  if (typeof this !== "function") {
    throw new error(this + "is not call able");
  }
  let obj = this;
  let parmas = args.slice(1);
  return function (...newArgs) {
    obj.apply(args[0], [...parmas, ...newArgs]);
  };
};

const printName1 = printUser.myBind(user3, "Dheradhun");
printName1("uthrakhand");
