function printNames(sym) {
    var arr = ["James", "Jill", "Jane", "Jack"]
    for(temp=0; temp < arr.length ; temp++)
    {
      console.log(temp + "\xa0" + sym + "\xa0" + arr[temp]);
    }
}
printNames("->")