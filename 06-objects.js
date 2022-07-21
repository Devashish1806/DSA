let user = {
  age: 24,
  name: "Devashish Mali",
  magic: true,
  scream: function () {
    console.log("ahhhh!!");
  },
};

console.log(user.age);
user.spell = "abra ka dabra";
user.scream();
console.log(user);
