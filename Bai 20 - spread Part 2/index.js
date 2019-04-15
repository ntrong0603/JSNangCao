// ...spread an object

const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: {e: 10}
}
// clone: tao ra obj2 giong het obj1 nhung khi thay doi gia tri obj2 khong thay doi gia tri obj1
// Shallow copy
const obj2 = {...obj1, z: 1000};
// for(let key in obj1){
//     obj2[key] = obj1[key];
// }
// obj2.b = 5;
obj2.d.e = 11;

const obj3 = Object.assign({}, obj1);
obj3.d.e = 31;
console.log({obj1, obj2, obj3});

//deep clone