function iterativeFibonacci(num) {
  let first = 0;
  let second = 1;
  for (let i = 0; i < num; i++) {
    let temp = first + second;
    first = second;
    second = temp;
  }
  return first;
}

function recursiveFibonacci(num) {
  if (num < 2) return num;
  return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
}

console.log(iterativeFibonacci(8));
console.log(recursiveFibonacci(8));
