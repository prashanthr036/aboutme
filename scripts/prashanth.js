function myCube(input)
{
    number = input;
    var cube;
if (number< 0)
{
    cube = 0;
}
else if (number > 2500){
    cube = 0;
    
}
else
{
    cube = number * number * number;
}

return cube;

}