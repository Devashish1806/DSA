class Player {
  constructor(name, type) {
    console.log("Player:: ", name, type);
    this.name = name;
    this.type = type;
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("Wizard:: ", name, type);
  }
}

const player1 = new Player("Rajesh", "agent");
const wizard1 = new Wizard("Devashish", "admin");
