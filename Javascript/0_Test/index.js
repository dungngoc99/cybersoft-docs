// Bai 1
function getBudgets(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    const employee = list[i];
    sum += employee.budget;
  }
  return sum;
}

let result_1 = getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
]);
console.log("Budget 1: ", result_1);

let result_2 = getBudgets([
  { name: "John", age: 21, budget: 29000 },
  { name: "Steve", age: 32, budget: 32000 },
  { name: "Martin", age: 16, budget: 1600 },
]);
console.log("Budget 2: ", result_2);

// Bai 2
function getDistance(pointA, pointB) {
  let distance = 0;
  distance = (pointA.x - pointB.x) ** 2 + (pointA.y - pointB.y) ** 2;
  let result = Math.sqrt(distance);
  return result;
}

const a = { x: 5, y: 6 };
const b = { x: 3, y: -2 };
console.log(getDistance(a, b));
// Bai 3
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

// Bai 4
function freeShipping(order) {
  let sumPrice = 0;
  for (let key in order) {
    sumPrice += order[key];
  }
  if (sumPrice >= 50.0) {
    console.log("freeship");
  } else {
    console.log("no freeship");
  }
}

freeShipping({ Shampoo: 5.99, "Rubber Ducks": 15.99 });

freeShipping({ "Flatscreen TV": 399.99 });

freeShipping({ Monopoly: 11.99, "Secret Hitler": 35.99, Bananagrams: 13.99 });
// Bai 5

function greeting(name) {
  const guestList = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina",
  };
  for (let key in guestList) {
    let country = guestList[key];
    if (name === key) {
      return `Hi! I'm ${key}, and I'm from ${country}.`;
    } else {
      return `Hi! I'm a guest.`;
    }
  }
}

console.log(greeting("Randy"));
