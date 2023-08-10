"use strict";
const myArray = [1, 2, 3, 4, 5];
const a = 4;
for (let i = 0; i <= myArray.length; i++) {
    if (a === myArray[i]) {
        console.log(`the element is  founded on index ${i}`);
    }
    else {
        console.log(`the  element is  not founded on index  ${i}`);
    }
}
