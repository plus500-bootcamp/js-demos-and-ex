const person = {
    name: 'Sarah',
    age: 28,

    introduce: function() {
        console.log(`Hi, I'm ${this.name}`);

        setTimeout(function() {
            console.log(`I'm ${this.age} years old`);
            // BUG: this.age is undefined here
        }, 1000);
    }
};

person.introduce();
// Expected output:
// "Hi, I'm Sarah" (immediately)
// "I'm 28 years old" (after 1 second)
// Actual output:
// "Hi, I'm Sarah" (immediately)
// "I'm undefined years old" (after 1 second)
