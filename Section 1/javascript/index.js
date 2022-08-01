console.log("Hello JavaScript!")

age = 21

console.log(age);
console.log(typeof(age));

if(age >= 18){

    a="This should be global";
    var x = 'This only works inside function';
    let y = "This should be local";
    const z = 'This is a constant';
    z="new value";

    console.log(y);

    console.log('You are eligible for DL');
}else{
    console.log('You are not eligiblr for DL');
}

console.log(a);
console.log(x);
// console.log(y);
console.log(z);