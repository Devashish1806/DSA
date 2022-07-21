function reverseString(str) {
  if (str.length === 1) return str[0];
  return str.pop() + reverseString(str);
}

console.log(reverseString("Hello World!!".split("")));
