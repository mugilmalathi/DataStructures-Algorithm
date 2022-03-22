var arr1 = [1, 2, 3, 4];
var arr2 = [1, 2, 3, 4];
var arr3 = [1, 2, 3, 4];
var mat = [];

mat.push(arr1);
mat.push(arr2);
mat.push(arr3);

for(var i=0; i<mat.length; i++){
    var bag = '';
    for(var j=0; j<mat[0].length; j++){
        bag += mat[i][j] + " ";
    }
    console.log(bag)
}