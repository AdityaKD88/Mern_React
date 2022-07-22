num = 77

if (num%7==0 & num%11==0){
    console.log('Given number is divisible by both 7 and 11');
}else if (num%7==0){
    console.log('Given number is divisible by only 7');
}else if (num%11==0){
    console.log('Given number is divisible only by 11');
}else{
    console.log('Given number is neither divisible by 7 nor by 11');
}