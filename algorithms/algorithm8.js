/* Rotate left
Given [ 1, 2, 3, 4 ] => [ 2, 3, 4, 1 ] */

function rotateLeft(arr) 
{
    var temp = arr[0];
    for (var i = 1; i < arr.length; i ++)
    {
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = temp;
    console.log(arr);
}
rotateLeft([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);

/*Reverse Array
Given [ 1, 2, 3, 4 ] => [ 4, 3, 2, 1 ] */

function reverseArray(arr)
{
    newarr = [];
    for (i = arr.length - 1; i >= 0; i--)
    {
        newarr.push(arr[i]);
    }
    console.log(newarr);
    return newarr;
}
reverseArray([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);