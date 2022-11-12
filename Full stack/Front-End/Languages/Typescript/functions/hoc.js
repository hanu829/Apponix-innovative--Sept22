var sum = function () { console.log('im a sum'); };
sum();
function parent1(num, myfunc) {
    console.log(num);
    console.log(myfunc);
    myfunc();
    return 7;
}
parent1(3, sum);
function h() {
    console.log();
    return 4;