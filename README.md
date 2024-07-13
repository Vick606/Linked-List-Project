# Linked List Implementation in JavaScript

## Part of The Odin Project Curriculum

This project is an implementation of a linked list data structure in JavaScript, created as part of The Odin Project's curriculum. It demonstrates a practical application of fundamental computer science concepts and JavaScript programming skills.

## 🔗 What is a Linked List?

A linked list is a linear data structure where elements are stored in nodes. Each node contains a data field and a reference (or link) to the next node in the sequence. Unlike arrays, linked lists do not store elements in contiguous memory locations, making them more flexible for certain operations.

## 🚀 Features

This implementation includes the following operations:

- `append(value)`: Add a new node to the end of the list
- `prepend(value)`: Add a new node to the start of the list
- `size()`: Get the total number of nodes in the list
- `head()`: Get the first node in the list
- `tail()`: Get the last node in the list
- `at(index)`: Get the node at a specific index
- `pop()`: Remove the last element from the list
- `contains(value)`: Check if a value exists in the list
- `find(value)`: Get the index of a node containing a specific value
- `toString()`: Represent the linked list as a string
- `insertAt(value, index)`: Insert a new node at a specific index
- `removeAt(index)`: Remove a node at a specific index

## 🛠️ Technologies Used

- JavaScript (ES6+)
- Node.js
- Webpack for bundling

## 🏗️ Project Structure

The project is structured as follows:

- `src/LinkedList.js`: Contains the `LinkedList` and `Node` class implementations
- `src/index.js`: Entry point for testing the linked list implementation
- `webpack.config.js`: Webpack configuration for bundling
- `package.json`: Project metadata and dependencies

## 🎓 Learning Outcomes

Through this project, I've gained practical experience in:

- Implementing complex data structures in JavaScript
- Working with classes and object-oriented programming concepts
- Managing node references and list traversal
- Handling edge cases in data structure operations
- Using modern JavaScript features and module systems
- Setting up a development environment with Webpack

## 🚀 How to Run

1. Clone this repository
2. Run `npm install` to install dependencies
3. Use `npm run build` to build the project
4. Run `node dist/main.js` to see the linked list in action

## 🤝 Contributing

While this project is primarily for learning purposes, suggestions and improvements are welcome! Feel free to fork the project and submit a pull request.

## 📚 Further Reading

To learn more about linked lists and other data structures, check out these resources:
- [The Odin Project](https://www.theodinproject.com/)
- [JavaScript Data Structures and Algorithms](https://github.com/trekhleb/javascript-algorithms)

Happy coding! 🚀