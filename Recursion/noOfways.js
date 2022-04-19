
var n = 7;

function noOfWays(n){
    if(n < 0){
        return 0;
    }
    if(n == 0){
        return 1;
    }
    for(var i=0; i<=n; i++){
        return noOfWays(n-1) + noOfWays(n-3) + noOfWays(n-5)
    }
}
console.log(noOfWays(n))


//  Output ---> 12