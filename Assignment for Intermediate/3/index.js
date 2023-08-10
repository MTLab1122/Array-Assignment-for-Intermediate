"use strict";
const array = [12, 45, 6, 23, 67, 2, 8];
if (array.length === 0) {
    console.log("The array is empty.");
}
else {
    const smallest = Math.min(...array);
    const largest = Math.max(...array);
    console.log("Array:", array);
    console.log("Smallest:", smallest);
    console.log("Largest:", largest);
}
