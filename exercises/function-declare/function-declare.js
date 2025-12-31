const person = {
    name: 'Sarah',
    age: 28,

    introduce: function () {
        console.log(`Hi, I'm ${this.name}`);

        setTimeout(function () {
            console.log(`I'm ${this.age} years old`);
            // BUG: this.age is undefined here
        }, 1000);
    }
};

person.introduce();