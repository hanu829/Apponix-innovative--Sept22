interface  Iglass{
    frame:string,
    shape:string,
    color:string,
[key:string]:string
}


var glass1:Iglass = {
    frame: 'squre',
    shape: 'squre',
    color: 'red'
};
console.log(glass1);
glass1.ll='yes'