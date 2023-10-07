// why we need rest parameter.
// we can pass any number of arguments in the function.

function sum(...args)
{
    let result = 0;
    for (let i =0;i<args.length;i++)
    {
        result += args[i];
    }
    console.log(result);
}
sum(1,2,3,4,5,6,7,8,9,10);