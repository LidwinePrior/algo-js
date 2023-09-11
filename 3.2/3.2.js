// 3.2 calculer la moyenne

let arr = [1, 2, 3, 4, 5];
let amount = 0;   //on calcule la somme
for(let i= 0; i< arr.length; i++) {
    amount += arr[i];       // boucle for parcours le tableau et additionne les éléments, à chaque itération on ajoute la valeur de aar[i] à la variable somme
}
let average = amount / arr.length;   //moyenne= somme / le nombre  d'éléments
console.log(average); 




let num = [100, 101, 102];
let add = 0;
for (let a= 0; a< num.length; a++) {
    add += num[a];
}
let av = add / num.length;
console.log(av);

// let num = [100, 101, 102];
// let add = num.reduce((acc, valeur) => acc + valeur, 0);  //callback pour additionnner tousnles éléments
// let av = add / num.length;
// console.log(av);