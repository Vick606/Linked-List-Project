class Node {
    constructor(value = null, nextNode = null) {
      this.value = value;
      this.nextNode = nextNode;
    }
  }
  
  export class LinkedList {
    constructor() {
      this.headNode = null;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (!this.headNode) {
        this.headNode = newNode;
        return;
      }
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  
    prepend(value) {
      const newNode = new Node(value, this.headNode);
      this.headNode = newNode;
    }
  
    get size() {
      let count = 0;
      let current = this.headNode;
      while (current) {
        count++;
        current = current.nextNode;
      }
      return count;
    }
  
    get head() {
      return this.headNode;
    }
  
    get tail() {
      if (!this.headNode) return null;
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      return current;
    }
  
    at(index) {
      if (index < 0 || !this.headNode) return null;
      let current = this.headNode;
      for (let i = 0; i < index; i++) {
        if (!current.nextNode) return null;
        current = current.nextNode;
      }
      return current;
    }
  }