function isPrime(num){
    let flag=0
    for(let i=2; i<num; i++){
        if(num%i==0){
            console.log(num, 'is not a prime number');
            break
        }
        else{
            flag=1
        }
    }
    if(flag==1){
        console.log(num, 'is a prime number')
    }
}

isPrime(7)
isPrime(40)