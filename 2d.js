//trying to get a 2d array going

var myarray=new Array(10);

//create 2D array
for(i=0; i<10; i++)
{
  myarray[i]=new Array(10);
}
var lineBreak = ' ';

//load it up with dots
for(r=0; r<10; r++)
{
  for(c=0; c<10; c++)
  {
    myarray[r][c]=".";
  }
}

//display the dots
for(r=0; r<10; r++)
{
  console.log(lineBreak);
  for(c=0; c<10; c++)
  {
    process.stdout.write(myarray[r][c]);
  }
}
console.log(lineBreak);
