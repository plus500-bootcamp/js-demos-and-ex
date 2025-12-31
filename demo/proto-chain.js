function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

const john = new Person('John');
john.greet(); // Output: Hello, my name is John

// 'toString' is found higher up in the prototype chain (Object.prototype)
console.log(john.toString()); // Output: [object Object]

// john
//   ↓ [[Prototype]]
// Person.prototype (has greet method)
//   ↓ [[Prototype]]
// Object.prototype (has toString, hasOwnProperty, etc.)
//   ↓ [[Prototype]]
// null

console.log(john); // Person { name: 'John' }