function fetchData(url, callback) {
    // Simulate an asynchronous API call
    setTimeout(() => {
        const data = `Data from ${url}`;
        callback(data); // Execute the callback with the fetched data
    }, 1500);
}

function displayData(result) {
    console.log("Received:", result);
}

console.log("Requesting data...");
fetchData("https://api.example.com/items", displayData); // displayData is the callback
console.log("Continuing program execution...");