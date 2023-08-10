// 1. Use array method such as indexOf(),lastIndexOf(), and slice().

// IndexOf(): Find the Index of an element.
const cars:string[]=['Toyota', 'Honda', 'Mercedes','Rollsroyce'];
const indexOfHonda=cars.indexOf('Honda');
console.log(`The index of Honda is: ${indexOfHonda}`);

//LastIndexOf(): Find the last Index of an element if they use 2 more times in an array.
const cars1 = ['toyota', 'Honda', 'Mercedes', 'toyota', 'rollsroyce'];
const lastIndexOfApple = cars1.lastIndexOf('toyota');
console.log(`The LastIndex of 'toyota': ${lastIndexOfApple}`);

//Slice(): It create a new array from the existing array.
const cars2 = ['toyota', 'Honda', 'Mercedes', 'toyota', 'rollsroyce'];
const newArray = cars2.slice(2, 5);
console.log(`The Slice of cars2 is:  ${newArray}`);

