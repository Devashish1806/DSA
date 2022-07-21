function iterativeFectorial(number) {
  let factorial = 1;
  while (number >= 2) {
    factorial = factorial * number;
    number--;
  }
  return factorial;
}

function recursiveFactorial(number) {
  if (number === 2) return 2;
  return number * recursiveFactorial(number - 1);
}

console.log(iterativeFectorial(5));
console.log(recursiveFactorial(5));
