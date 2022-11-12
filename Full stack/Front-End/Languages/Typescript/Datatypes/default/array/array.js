var arr1 = 'apple';
var arr2 = 'boll';
var arr3 = 'cat';
var myarry = ['apple', 'boll', 'cat'];
console.log(arr1);
console.log(myarry[1]);
//destructring 
var apple = myarry[0], boll = myarry[1], cat = myarry[2];
console.log(apple);
var myobj = {};
var s = 3;
var pen = { colr: 'red', cap: 'yes' };
var myproducts = ['apple', 'boll', 'cat'];
myproducts.map(function (myitem) { console.log(myitem); });
var obj1 = { a: 10, b: 'boll', c: 'cat', d: 'dog' };
var obj2 = { a: 10, b: 'boll', c: 'cat', d: 'dog' };
var obj3 = { a: 10, b: 'boll', e: 'elipant' };
var myarry1 = [obj1, obj2, obj3];
console.log(myarry1);
var j=myarry1.find(function (myitem) {return myitem.c=='cat' });
console.log(j)
var j2=myarry1.filter(function (myitem) {return myitem.d=='dog' });
console.log(j2)