const person = {
    name: 'Sarah',
    age: 28,

    introduce: function () {
        console.log(`Hi, I'm ${this.name}`);

        setTimeout(() => {
            console.log(`I'm ${this.age} years old`);
        }, 1000);
    }
};

person.introduce();