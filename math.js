function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}

//module.exports = add;
//module.exports = sub; //this will overwrite the module.exports (wrong way)
module.exports= {
     add,
     sub,
};
