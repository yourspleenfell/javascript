// Sqaure the values
// Given [1, 2, 3] => [1, 4, 9]
// Square and replace the values in the array
function squareValues(arr) {
    // arr = [num1, num2, num3];
    for (i = 0; i < arr.length; i++)
    {
        arr[i] = arr[i] ** 2;
    }
        console.log(arr);
}
squareValues([1, 2, 3])

// Greater than y
// Given [4, 2, 1], 1 => 2
// Return number of values that are greater than y in the array
function greaterThany(x, y) {
    // x = [num1, num2, num3];
    // y = num4;
    res = [ ];
    for (i = 0; y < x[i]; i++) {
       res.push(x[i]);
    }
    console.log(res.length)
}
greaterThany([4, 2, 1], 1)