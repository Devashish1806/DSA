function firstRecurringCharacter(input) {
  let hash = {};
  for (let i = 0; i < input.length; i++) {
    if (!hash[input[i]]) {
      hash[input[i]] = input[i];
    } else {
      return input[i];
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
