var n = 15;
var bag = '';

for(var i=1; i<=n; i++){
    if(i%3==0 && i%5==0){
        bag+="fizzbuzz"+' '
    }else if(i%3==0){
        bag+="fizz"+' '
    }else if(i%5==0){
        bag+="buzz"+' '
    }else{
        bag+=i+' '
    }
}
console.log(bag)