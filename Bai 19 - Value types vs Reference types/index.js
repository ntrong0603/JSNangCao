// Value types vs Reference types
//Value types
// luu luon gia tri trong bien
let a1 = 1;
let a2 = 1;
console.log(a1 === a2);


//Reference types(tham chieu): object, function, array
// luu dia chi cua obj tren bo nho
//
let obj1 = { a: 1};
let obj2 = { a: 1};
console.log(obj1 === obj2);


let a3 = a2;
console.log(a3 === a2);
a3 = 2;
console.log(a3);
console.log(a3 === a2);

// deu tham chieu den 1 obj, khi thay đổi giá trọ a ở obj3 thì ở obj 2 cũng thay đổi
// obj3 luu địa chỉ tham chiếu của obj2
let obj3 = obj2;
console.log(obj3 === obj2);
obj3.a = 2;
console.log(obj2);
console.log(obj3 === obj2);

// viet ham tranh truong hop thay doi dau vao, dac biet la obj
function log(x){
    x.b=5;
}
log(obj1);
console.log(obj1);