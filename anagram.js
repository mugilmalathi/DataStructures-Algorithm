var str1 = "abcd";
var str2 = "bcad";

str1.sort(function(a,b){
    return a>b
})

str2.sort(function(a,b){
    return b>a
})

if(str1 === str2){
    console.log("yes")
}else{
    console.log("no")
}