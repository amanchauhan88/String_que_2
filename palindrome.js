let str = "racecar"

for(var i=0; i<str.length/2; i++){
    if(str[i]!== str[str.length-1-i]){
        console.log("not a palindrome");
        break;
    }else{
        console.log("palindrome");
        break;
    }
}