// Objects are used to store key value pairs.

let user = {name:'raju', age:25, email:'raju@gmail.com', 'enroll-no':'A-1214'};

let key = 'enroll-no';

console.log(user.email);
console.log(user['enroll-no']);
console.log(user[key]);

console.log(user['name']);

console.log(user);

console.log(user.address) // undefined
//user.address = 'Lucknow-226001';
user['address'] = 'Lucknow-226001';
console.log(user)

user.name = 'Shamu';
console.log(user);

let brand = 'Samsung';
let model = 'Galaxy S22';
let colors = ['White', 'Black', 'Gray'];
let price = 60000

let smartphone = { brand, model, colors, price };
console.log(smartphone.colors[1]);
console.log();

// 1. passing object as an argument to a function
// const printDetails = (obj) => {
//     console.log(obj.brand);
//     console.log(obj.model);
// }

// 2. passing key as an argument to a function
const printDetails = ({brand, model}) => {
    console.log(brand);
    console.log(model);
}

printDetails(smartphone);
// printDetails(); // this will throw error


let myorders = [
    { id : 23456, name : 'T-Shirt', price : 500 },
    { id : 38954, name : 'Tie', price : 374 },
    { id : 86537, name : 'Trouser', price : 1299 },
];

console.log(myorders.length);

// WAP to filter the orders which are less than 1000

console.log(myorders[1].name);

const filOrders = myorders.filter( (obj) => { return obj.price < 1000 });
console.log(filOrders);