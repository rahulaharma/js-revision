const fruits = [{
name:"rahul"
}, '2'];

// Create a copy using spread syntax.
const fruitsCopy = [...fruits];

fruitsCopy[0].name="aayush"
console.log(fruitsCopy);
console.log(fruits);
