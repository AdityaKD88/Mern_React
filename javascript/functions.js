// defining the function
function addNums(a,b){
    var n = "This works in function only"
    console.log(a+b);
}

// calling the function
//addNums(8175,2276);
//addNums(9935,9605);
//addNums(9651,3460);
//addNums(7318,938);
//console.log(n);

const sumprod = function(x, y){
    s = x + y;
    p = x * y;

    return [s, p];
}

const [sum, prod] = sumprod(34, 12);
console.log(sum, prod);

const checkPerfect = (m) => {
    console.log(m**0.5);

    if(m**0.5 === parseInt(m**0.5)){
        console.log('perfect square');
        // return m;
    }else{
        console.log('not a perfect square');
    }
}

checkPerfect(49);
checkPerfect(52);

// console.log(2**5);

// '5' == 5 //true
// '5' === 5 //false
// 5 === 5 //true

console.log(5 === parseInt(5))
console.log(5.3454 === parseInt(5.3454))