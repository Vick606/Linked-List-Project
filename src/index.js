import { LinkedList } from './LinkedList.js';

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend(0);

console.log('List:', list.toString());
console.log('Size:', list.size);
console.log('Head:', list.head.value);
console.log('Tail:', list.tail.value);
console.log('At index 2:', list.at(2).value);

console.log('Popped value:', list.pop());
console.log('List after pop:', list.toString());

console.log('Contains 2:', list.contains(2));
console.log('Contains 4:', list.contains(4));

console.log('Index of 2:', list.find(2));
console.log('Index of 4:', list.find(4));