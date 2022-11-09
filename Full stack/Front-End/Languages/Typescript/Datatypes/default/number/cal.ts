// static calculator

var a:number=10
var b:number=20
console.log(a+b)
function mycal(){
    var val1=(document.getElementById('num1')as HTMLInputElement).value
    var val2=(document.getElementById('num2')as HTMLInputElement).value

    console.log(parseInt(val1)+parseInt(val2) )
}