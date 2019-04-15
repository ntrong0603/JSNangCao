// Destructuring
// dỡ bỏ cấu trúc
// const arr = [10, 20, 30, 40, 50];
// const arr2 = [10];
// const [a, , , d] =arr;// chi co array moi lam dc
// const [c, ...b] =arr;
// const [g, h = 20] =arr2;
// console.log(g, h);

const obj = {
    a: 1,
    b: 2,
    c: 3
}

const {a, b} = obj; // chi co obj moi lam dc
console.log(a, b);