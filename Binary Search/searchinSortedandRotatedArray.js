
function bs(n, t, arr){
    var low = 0;
    var high = n-1;
    
    while(low<=high){
        var mid = Math.floor(low+(high-low)/2);
        if(arr[mid] === t){
            return mid;
        }
        else if(arr[low] <= arr[mid]){
            if(t >= arr[low] && t < arr[mid]){
                high = mid-1;
            }
            else{
                low = mid+1;
            }
        }
        else if(arr[mid] <= arr[high]){
            if(t > arr[mid] && t <= arr[high]){
                low = mid+1;
            }
            else{
                high = mid-1;
            }
        }
    }
    return -1;
}

console.log(bs(5, 1, [3, 4, 5, 1, 2]))

// I/P --> n=5; t=1; arr=[3,4,5,1,2]
//  O/P --> 3 