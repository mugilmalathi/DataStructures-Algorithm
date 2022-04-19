var n1 = 2;
var n2 = 4;

function power(n1, n2){
    if(n2 == 0){
        return 1;
    }
    return n1 * power(n1, n2-1);
}

console.log(power(n1, n2))