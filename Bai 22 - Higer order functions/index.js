// Higer order functions
// la mot ham nhan vao 1 function lam tham so hoac tra ve mot ham
// ung dung chia nho chuong trinh, chia nho logic
// ket thuc ham giai phong bo nho
function debug(name){
    return function(str){
        console.log(`${name} ${str}`);
    }
}
const debug2 = debug('Mouse');
debug2('Error die!');


function waitAndRun(ms, func){
    setTimeout(func, ms);
}
function run(){
    console.log("run...");
}
waitAndRun(2000, run);
