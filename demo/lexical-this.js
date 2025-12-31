class Timer {
    constructor() {
        this.seconds = 0;
    }

    start() {
        setInterval( () =>  {
            this.seconds++; // WORKS!
            console.log(`${this.seconds}`);
            // this is Timer instance
        }, 1000);
    }
}

const timer = new Timer();
timer.start();