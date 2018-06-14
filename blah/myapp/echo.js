echo("Echo!!!", 10);
echo("Tater Tots", 3);

function echo(str, num) {
  for(var i = 0; i < num; i++)
  {
    console.log(str);
  }
}

function average(arr) {
  var avg = 0;
  for(var i = 0; i < arr.length; i++)
  {
    avg += arr[i];
  }
  return Math.round(avg/arr.length);
}

var scores = [23, 42, 32,64,85,24,97];
console.log(average(scores));

