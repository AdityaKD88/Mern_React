const perfectSquare = () => {
    for(let i=1;i<=1000;i++){
        if(i**0.5 === parseInt(i**0.5)){
            console.log(i);
            // return m;
        }
    }
}

const arr=[434, 32, 456, 12, 66, 35, 99, 5653, 345, 23465, 350];
newArr=[]
for(let a of arr){
    if(a<100){
        newArr.push(a);
    }
}

console.log('--------Perfect square--------');
perfectSquare()
console.log('--------Nos. less than 100--------');
console.log(newArr)