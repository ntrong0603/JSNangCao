// ...rest (toan tu)
// lay duoc phan con lai neu ban khong biet duoc truyen vao bao nhieu
// gom cac pha ntu thanh array
function log(...number){
    // console.log(number);// bo duoc buoc Array.form de chuyen arguments thanh array
    // console.log(arguments);// tra ve mang <> arguments chua tat ca bien truyen vao va la 1 array-like object

    return number.reduce((res, num) => res + num, 0);
    
}
console.log(log(1, 2, 3, 4));

function concat(separator, ...string){
    return string.join(separator);
}
console.log(concat('.','a','b','v'));