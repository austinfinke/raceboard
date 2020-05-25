const LinkedList = require('./LinkedList');

class HashTable {
  constructor() {
    // 103% size of input keys
    this.table = new Array(8);
  }

  hash(string) {
    const C = 3;
    let index = 0;

    for (const letter of string) 
      index += C * index + string.charCodeAt(letter);
    
    return index %= this.table.length;
  }

  buildBuckets() {
    for (let i = 0; i < this.table.length; i++) 
      this.table[i] = new LinkedList();
  
    return this;
  }

  insert(key) {
    let hash = key.getName();
    const i = this.hash(hash);
    let list = this.table[i].head;

    if (list === null) {
      this.table[i].add(key);
      return;
    }

    while (list) {
      if (list.data === key) 
        return console.log(`Key: "${key.getName()}" has already been added`);
      
      list = list.next;
    }
    this.table[i].add(key);
  }

  search(key) {
    const i = this.hash(key);
    return this.table[i].head;
    // return this.table[i].search(key).data;
  }
}

module.exports = HashTable;



