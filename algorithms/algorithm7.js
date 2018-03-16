/*Shift array values
Given [ -1, -2, 4 ] => [ -2, 4, 0 ]*/

function shiftValues(arr)
{
    var temp = [ ];
    for (var i = 1; i < arr.length; i ++)
    {
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = 0;
    console.log(arr);
}
shiftValues([ -2, 4, 6, 8, 9 ])

// /*Given an array take any negative values and replace with a string*/
// function swapString (arr)
// {
//     for (var i = 0; i < arr.length; i++)
//     {
//         if (arr[i] < 0)
//         {
//             arr[i] = "NicCage";
//         }
//     }
//     // console.log(arr);
//     return arr;
// }
// swapString([-1, 2, -3, 4, -5])