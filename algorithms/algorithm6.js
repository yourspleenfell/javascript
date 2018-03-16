/*Zeroing out negatives
given [-1, -2, 0] => [0, 0, 0]*/
function zeroNegative (arr) {
    arr = [-1, -2, 4];
    for (var i = 0; i <= arr.length; i++)
    {
        if(arr[i] <= 0)
        {
            arr[i] = 0 ;
        }
    }
    console.log(arr);
    return arr;
}
zeroNegative([-1, -2, 4]);

/*Min, max, average
Print the min, max, average of the given values
given [3, 4, 5*] => [3, 5, 4] */
function minMaxAvg (arr1) {
    var arr2 = [];
    var min = arr1[0];
    var max = arr1[0];
    var sum = 0;

    for (var i = 0; i < arr1.length; i++)
    {
        if (arr1[i] < min)
        {
            min = arr1[i];
        }
        if (arr1[i] > max)
        {
            max = arr1[i];
        }
        sum = sum + arr1[i];
    }
    var avg = sum / arr1.length;
    console.log("Min:", min);
    console.log("Max:", max,);
    console.log("Average:", avg);
}
minMaxAvg([3, 4, 5]);