// 4.1 créer un programme qui demande aux users la longeur et largeru d'un rectangle et afficher la surface de celui-ci 

function calcSurface(length, width) {
    return length * width;
}

let length = parseFloat(prompt("Enter the length of a rectangle"));
let width = parseFloat(prompt("Enter the width of a rectangle"));

console.log(calcSurface(length, width));
