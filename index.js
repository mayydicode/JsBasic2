console.log("hello Mayy");
let a = " Toi la String";
// console.log(a);
// console.log(4 + 5 + "a");
// console.log("a" + 5 + 4);
let text = "Tu hoc JS";
// console.log(text.length);
// console.log(text.toUpperCase());
// console.log(a);
// Opject
let b = {
  name: "Mayy",
  address: "Hue",
};
// console.log("Ten toi la:", b.name);

// <--Array-->
let pet = {
  dog: "lu",
  cat: "meo",
};
// console.log("day la con cho ten:", pet);

// <--Empty,NULL,Underfined-->

// <--For Looops-->
console.log("Hello world ");
for (let i = 1; i <= 10; i++) {
  // console.log("check variable i:", i);
}

// let arr4 = ["MU", "Mcty", "Liver", "chelsea"];
// for (let i = 0; i < arr4.length; i++) {
//   console.log("Cac doi bong :", arr4[i]);
// }

// <--While/Do While Loops-->
let arr = ["MU", "Mcty", "Liver", "chelsea"];

// <--If/else-->
let arrTop4 = ["live", "Chelsea", "MU", "Man city"];

// let i = 0;
// while (i < arrTop4.length) {
//   if (arrTop4[i].length === 2) {
//     console.log("Top :", i + 1, arrTop4[i]);
//   } else if (arrTop4[i].length === 7) {
//     console.log("top :", i + 1, arrTop4[i]);
//   }

//   i++;
// }

//--Switch Case--

//--Variable--

//Functions

// function sum(a, b) {
//   return a + b;
// }
// console.log("Tong a va b:", sum(1, 2));

// function getName(x, y) {
//   return x + y;
// }
// console.log("Tong :", getName(9, 6));

//--Arrow Functions--

let Name = (x, y) => {
  return x + y;
};
console.log("Tong:", Name(2, 3));

//--Function vs Method--

// --setInterval---
let sum = (a, b, callback) => {
  let tong = a + b;
  setTimeout(() => {
    callback(tong);
  }, 2000);

  let i = 0;
  let timer = setInterval(() => {
    callback(tong);
    i++;
    if (i === 5) {
      clearInterval(timer);
    }
  }, 2000);
  console.log("check sum i:", i);
};

let prinSum = (Message) => {
  // console.log("check tong:", Message);
};

sum(6, 9, prinSum);

let test = (a, b) => {
  return a + b;
};
console.log("Tong cua a va b:", test(1, 3));
