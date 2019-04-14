// arrow function expression
// fat arrow =>
// thay the function

//khai bao ham co ten la sum
function sum(a, b){
    return a + b;
}
console.log(sum(1,2));

//khai bao bien gan gia tri cho no la ham
var sum2 = function(a, b){
    return a + b;
}
console.log(sum2(5,2));

// viet ngan gon cua sum2
var sum3 = (a, b) => {
    return a + b;
}
console.log(sum3(6,2));

// nhan vao 2 tham so return ra so a + b
var sum4 = (a, b) => a + b;
console.log(sum4(6,4));

// co 1 tham so thi khong can viet ngoac cung dc, khong co tham so thi phai co ()
var squre = x => x*x;
var doSomeThing = () => Date.now();

var arr = [1, 2, 3];
arr.map(function(x){
    return x*x;
})
arr.map(x => x*x);