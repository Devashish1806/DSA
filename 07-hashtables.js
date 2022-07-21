class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  get(key) {
    let address = this._hash(key);
    if (this.data[address]) {
      for (let i = 0; i < this.data[address].length; i++) {
        if (this.data[address][i][0] === key) return this.data[address][i][1];
      }
    }
    return undefined;
  }

  keys() {
    let keys = [];
    for (let items of this.data) {
      if (items) {
        for (let item of items) {
          keys.push(item[0]);
        }
      }
    }
    return keys;
  }
}

const hashTable1 = new HashTable(50);
hashTable1.set("grapes", 10000);
hashTable1.set("apples", 20000);
hashTable1.set("orange", 50000);
hashTable1.set("watermelon", 40000);
console.log(hashTable1.get("apples"));
console.log(hashTable1.keys());
