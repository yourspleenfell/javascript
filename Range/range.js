function printRange (start, end, skip)
{
  var num1 = start;
  var num2 = end;
  var num3 = skip;
  var res = 0;
  
  if(end === undefined)
  {
    end = start;
    start = 0;
  }
  
  if(skip === undefined)
  {
    skip = 1;
  }
  
  while(start < end-1)
  {
    start = start + skip;
    res = start;
    console.log(res)
  }
}
printRange(17)