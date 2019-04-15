// ...spread
// trai cac phan tu cua array ra thanh phan tu
const a = [1, 2, 3];
const b = [0, ...a, 4];
console.log(b);

function sum(...number){
    return number.reduce((res,num) => res + num);
}
console.log(sum(...a));