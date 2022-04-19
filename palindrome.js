var str = "malayalam";
var flag = true;

for(var i=0; i<str.length; i++){

    if(str[i] != str[str.length-i-1]){
        flag = false;
    }
}

if(flag){
    console.log("palindrome")
}else{
    console.log("not a palindrome")
}