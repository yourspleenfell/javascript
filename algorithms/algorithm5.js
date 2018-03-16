// Sqaure the values
// Given [1, 2, 3] => [1, 4, 9]
// Square and replace the values in the array
function squareValues(arr) {
    for (i = 0; i < arr.length; i++)
    {
        arr[i] **= 2;
    }
        console.log(arr);
        return arr;
}
squareValues([1, 2, 3])

// Greater than y
// Given [4, 2, 1], 1 => 2
// Return number of values that are greater than y in the array
function greaterThany(x, y) {
    result = [ ];
    for (i = 0; y < x[i]; i++) {
       result.push(x[i]);
    }
    console.log(result.length)
}
greaterThany([4, 2, 1], 8)