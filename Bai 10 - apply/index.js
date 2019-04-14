// apply
// call: func.call(this, param1, param2,....)
// apply: func.apply(this, [param1, param2, .....])

function sum(){
    const number = Array.from(arguments);
    return number.reduce((result, num) => result + num, 0);
}

function average(){
    // sum
    // dung apply goi ham khong biet co bao nhieu gia tri dau vao
    const x = sum.apply(null, arguments);
    return x/arguments.length;
    // sum / arguments.length
}

console.log(average(2, 99, 100));