// var let const
// 1. declaration (khai bao bien)
// 2. hoisting
// 3. block scope (if, for, ...)
// 4. redeclaration (khai bao lai)

var a = 1; // co the khaiu bao lai dc, co hoisting, khong block scope
let b = 2; // khong the khai bao lai, block scope, chi ton tai trong block
const c = 3; // khong the khai bao lai, bat buoc co gia tri khi khai bao, block scope, chi ton tai trong block

console.log(a, b, c);

var a = 3;
console.log(a);

for(let i = 0; i<5; i++){
    console.log(i);
}

//console.log(i); dung let i se bao loi, neu dung va i se bang 5 (vong lap ket thuc khi i = 5);

