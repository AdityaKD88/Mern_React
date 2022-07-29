// map is a function of array
// map returns a new array
// callback function - function calls the function

arr1 = [23,5,2,5,26,3];

const newNums = arr1.map((n)=>{return n**2})
console.log(newNums);

prices = [100,99,4724,999,3199];

// const newPrices = prices.map((p)=>{return ('₹'+p)})
const newPrices = prices.map(p=>('₹'+p))
console.log(newPrices);

const arr2 = [23,43,6,8,10,3,6,27];
// create a new array where if old element is even divide it by 2
// & if it is odd multiply it by 2

newArr2 = arr2.map(n=>{ if(n%2==0) return n/2; else return n*2; })
newArr2 = arr2.map(n => n%2==0 ? n/2 : n*2) //using tertiary operator

console.log(newArr2);

// Filter

const filteredArr2 = arr2.filter((a)=>{return a%2==0})
console.log(filteredArr2);