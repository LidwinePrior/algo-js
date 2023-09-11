let arr = [1, 2, 3, 4, 5];
let amount = 0;
for(let i= 0; i< arr.length; i++) {
    amount += arr[i];
}
let average = amount / arr.length;
console.log(average);




let num = [100, 101, 102];
let add = 0;
for (let a= 0; a< num.length; a++) {
    add += num[a];
}
let av = add / num.length;
console.log(av);

// let num = [100, 101, 102];
// let add = num.reduce((acc, valeur) => acc + valeur, 0);
// let av = add / num.length;
// console.log(av);