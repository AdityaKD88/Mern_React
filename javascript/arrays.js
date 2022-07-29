const nums = [34, 67, 12, 45, 90, 56, 'nice'];

console.log(nums);
console.log(typeof(nums));
// 1. Arrays can contain multiple type of Data
// 2. Arrays support indexing - index starts from 0
// 3. Arrays are dynamic - size can be changed
// 4. Arrays are mutable - can be changed

const fruits = ['apple', 'banana', 'mango', 'orange', 'pineapple'];

// Indexing - accessing a single element
console.log(fruits[3]);

// slicing - accessing multiple element
console.log(fruits.slice(1,4));

// these will give all the elements
console.log(fruits.slice(1));
console.log(fruits.slice(1,10));

// undefined
console.log(fruits[100]);

// this will give an empty array
console.log(fruits.slice(10,20));

// remove multiple elements
fruits.splice(3,2);
console.log(fruits);

// remove last element
fruits.pop();
console.log(fruits);

// adding new elements
fruits.push('cherry');
console.log(fruits);

// traverse using index
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

// traverse using for-of loop (like for-each in java)
for(let i of fruits){
    console.log(i);
}

// traverse using for-each function
// forEach passes the function parameter automatically
fruits.forEach((ele)=>{
    console.log(ele);
}); 

// question
const numbers = [2,5,7,3,5,4,3];
// WAP to square each of the numbers in above array and store them in array
const squares=[]
numbers.forEach((n)=>{
    squares.push(n**2)
})
console.log(squares)
