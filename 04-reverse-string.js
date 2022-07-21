function reverse(str) {
  let arrayStr = str.split("");
  let arrayReverse = [];
  for (let i = arrayStr.length - 1; i >= 0; i--) {
    arrayReverse.push(arrayStr[i]);
  }
  let reverseStr = arrayReverse.join("");
  return reverseStr;
}
console.log(reverse(`Hello I'm Devashish Mali`));

function reverse2(str) {
  return str.split("").reverse().join("");
}
console.log(reverse2(`Hello I'm Devashish Mali`));

const reverse3 = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverse3(`Hello I'm Devashish Mali`));
