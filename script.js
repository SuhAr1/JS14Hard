let num = 266219,
    result = 1;
for (let i of String(num).split('')) result *= +i;
    result = result ** 3;
console.log(String(result).substring(0, 2));



// console.log(result);
// String(num).split('');
// console.log(String(num).split(''));
// let result = 1;
// for (let i = 0; i < num.length; i++){
//     result = result * num[i];
// }
// console.log(typeof String(num).split(''));