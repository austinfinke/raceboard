class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(data) {
    const node = new Node(data);

    if (this.head === null)
      this.head = node;
    else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
    return this;
  }

  remove(rmData) {
    let current = this.head;
    while (current) {
      if (current.data === rmData) {
        this.head = current.next;
        this.length--;
        return console.log(`Data Removed: ${rmData}`);;
      }
      if (current.next && current.next.data === rmData) {
        current.next = current.next.next;
        this.length--;
        return console.log(`Data Removed: ${rmData}`);;
      }
      current = current.next;
    }
    console.log(`Data: "${rmData}" not found`);
  }

  search(sData) {
    let current = this.head;
    while (current) {
      if (current.data.getName() === sData)
        return current.data;
      current = current.next;
    }
    console.log(`Data: "${sData}" not found`);
  }

  print() {
    let string = '';
    let current = this.head;
    while (current) {
      string += `${current.data.getName()},`;
      current = current.next;
    }
    return string;
  }
}
