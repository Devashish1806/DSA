function fibonnaci() {
  let cache = {};
  return function ds(n) {
    if (n < 2) return n;
    if (!cache[n]) {
      console.log("count");
      cache[n] = ds(n - 1) + ds(n - 2);
    }
    return cache[n];
  };
}

const fib = fibonnaci();
console.log(fib(1));
console.log(fib(3));
console.log(fib(5));
console.log(fib(5));
console.log(fib(6));
