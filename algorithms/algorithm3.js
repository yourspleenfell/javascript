function printMaxofArray(arr) {
    var arr = [1, 2, 3, 5, 6, 7, 99];
    var max = 0;
    for(var i=1; i< arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max)
}
printMaxofArray()