let arr1='apple'
let arr2='boll'
let arr3='cat'
let myarry=['apple','boll','cat']
console.log(arr1)
console.log(myarry[1])
//destructring 
let [apple,boll,cat]=myarry
console.log(apple)
var myobj={}
var s=3
var pen={colr:'red',cap:'yes'}
let myproducts=['apple','boll','cat']
myproducts.map((myitem)=>{console.log(myitem)})
var obj1={a:10,b:'boll',c:'cat'}
var obj2={a:10,b:'boll',c:'cat',d:'dog'}
var obj3={a:10,b:'boll',e:'elipant'}
var myarry1=[obj1,obj2,obj3]
console.log(myarry1)
myarry1.find((myitem)=>{console.log(myitem)})