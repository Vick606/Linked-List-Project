import { LinkedList } from './LinkedList.js';

const list = new LinkedList();

list.append(1);
list.append(2);
list.prepend(0);

console.log('Size:', list.size);
console.log('Head:', list.head.value);
console.log('Tail:', list.tail.value);
console.log('At index 1:', list.at(1).value);