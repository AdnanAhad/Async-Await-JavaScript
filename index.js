console.log("first line"); // 1

async function demo() {
  console.log("Indide function"); // 3

  const promise = await fetch("https://api.github.com/users");
  console.log("after promise"); // 7
  const users = await promise.json();
  console.log("after users"); // 8
  return users;
}

console.log("before calling function "); // 2
const demoCall = demo();
console.log("after calling function"); //4
console.log(demoCall); //5

demoCall.then((data) => console.log(data)); //9

console.log("last line of code"); //6

// -------------------------------------------------------

// console.log("first line of code"); //1
// function demo2() {
//   console.log("inside function");
//   fetch("https://api.github.com/users")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
//   console.log("after fetch");
//   return "returning value";
// }

// console.log("before calling");
// const demoCall2 = demo2();
// console.log("after calling");
// console.log(demoCall2);
// console.log("last Code");
