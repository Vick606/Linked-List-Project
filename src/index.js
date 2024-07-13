import { LinkedList } from './LinkedList.js';

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend(0);

console.log('Initial list:', list.toString());

list.insertAt(1.5, 2);
console.log('After inserting 1.5 at index 2:', list.toString());

const removedValue = list.removeAt(3);
console.log(`Removed value: ${removedValue}`);
console.log('After removing index 3:', list.toString());
try {
  list.insertAt(10, 10); 
} catch (error) {
  console.log('Error caught:', error.message);
}

try {
  list.removeAt(-1);
} catch (error) {
  console.log('Error caught:', error.message);
}