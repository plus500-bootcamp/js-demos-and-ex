const obj = {
    name: 'Alice',
    greet: function() {
      console.log(`Hello, ${this.name}`);
    }
  };
  
  obj.greet(); // "Hello, Alice"
  
  const greetFn = obj.greet;
  greetFn(); // "Hello, undefined"