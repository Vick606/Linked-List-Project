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
        pop() {
          if (!this.headNode) return null;
          if (!this.headNode.nextNode) {
            const value = this.headNode.value;
            this.headNode = null;
            return value;
          }
          let current = this.headNode;
          while (current.nextNode.nextNode) {
            current = current.nextNode;
          }
          const value = current.nextNode.value;
          current.nextNode = null;
          return value;
        }
      
        contains(value) {
          let current = this.headNode;
          while (current) {
            if (current.value === value) return true;
            current = current.nextNode;
          }
          return false;
        }
      
        find(value) {
          let current = this.headNode;
          let index = 0;
          while (current) {
            if (current.value === value) return index;
            current = current.nextNode;
            index++;
          }
          return null;
        }
      
        toString() {
          let result = '';
          let current = this.headNode;
          while (current) {
            result += `( ${current.value} ) -> `;
            current = current.nextNode;
          }
          result += 'null';
          return result;
        }
            insertAt(value, index) {
              if (index < 0 || index > this.size) {
                throw new Error('Index out of bounds');
              }
          
              const newNode = new Node(value);
          
              if (index === 0) {
                newNode.nextNode = this.headNode;
                this.headNode = newNode;
                return;
              }
          
              let current = this.headNode;
              for (let i = 0; i < index - 1; i++) {
                current = current.nextNode;
              }
          
              newNode.nextNode = current.nextNode;
              current.nextNode = newNode;
            }
          
            removeAt(index) {
              if (index < 0 || index >= this.size) {
                throw new Error('Index out of bounds');
              }
          
              if (index === 0) {
                const removedValue = this.headNode.value;
                this.headNode = this.headNode.nextNode;
                return removedValue;
              }
          
              let current = this.headNode;
              for (let i = 0; i < index - 1; i++) {
                current = current.nextNode;
              }
          
              const removedValue = current.nextNode.value;
              current.nextNode = current.nextNode.nextNode;
              return removedValue;
            }
          }