// const Froyo = {
//   Flavor1: "Vanilla",
//   Flavor2: "Strawberry",
//   Flavor3: "Coffee",
// };
// console.table(Froyo);

const userObject = {};
const userInput = (userInputString = prompt(
  "Welcome to our store! Please enter your froyo flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
));

userObject.order = userInput;
console.log(userInput.split(","));
const arr = userInput.split(",");
const count = {};

const froyoFlavors = (arr) => {
  const count = {};
  for (const element of arr) {
    if (element in count) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }
  return count;
};

console.log(froyoFlavors(userInput.split(",")));

// for (const element of arr) {
//   if (count[element]) {
//     count[element] += 1;
//   } else {
//     count[element] = 1;
//   }
// }

// console.log(count);
