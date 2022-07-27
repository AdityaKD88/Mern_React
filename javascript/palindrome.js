const isPalindrome = (num) => {
    let temp=num;
    let rev=0;
    while(num>0){
        dig=num%10
        rev=rev*10+dig
        num=parseInt(num/10)
    }
    if(rev==temp)
    console.log(temp, 'is a Palindrome number')
    else
    console.log(temp, 'is not a palindrome number')
}

isPalindrome(14451)
isPalindrome(16461)