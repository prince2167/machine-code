//  Flatten an array
const array = [
  [[1, [1.1]], 2, 3],
  [4, 5],
];

const flattenArray = (array) => {
  return array.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc = acc.concat(flattenArray(curr));
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
};

console.log(flattenArray(array));

// flatten an object

const obj = {
  A: 12,
  B: 23,
  c: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

const falttenObject = (obj, parent) => {
  let result = {};
  const getFalttenObject = (obj, parent) => {
    for (let key in obj) {
      const newParent = parent + key;
      const value = obj[key];
      if (typeof value === "object") {
        getFalttenObject(value, newParent + ".");
      } else {
        result[newParent] = value;
      }
    }
  };
  getFalttenObject(obj, parent);
  return result;
};

console.log(falttenObject(obj, ""));
