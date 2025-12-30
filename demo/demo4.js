function createCounter() {
    let count = 0; // Private variable

    return {
        increment() {
            count++;
            return count;
        },
        getCount() {
            return count;
        }
    };
}

const counter = createCounter();

const result1 = counter.increment();
console.log(result1); // 1

const result2 = counter.increment();
console.log(result2); // 2

const finalCount = counter.getCount();
console.log(finalCount); // 2

const result3 = counter.increment();
console.log(result3); // 3

const finalCount3 = counter.getCount();
console.log(finalCount3); // 3