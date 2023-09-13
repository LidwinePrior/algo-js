// 4.1 créer un programme qui calcule la surface d'un rectangle avec longueur et largeur donné par utilisateurs



function calcSurface(length, width) {  //fonction appelle la longueur et largeur
    return length * width;  //returns renvoie au calcul de la surface d'un rectangle
}


// demande à l'utilisateur la longueur et la largeur du rectangle
let length = prompt("Enter the length of a rectangle");
let width = prompt("Enter the width of a rectangle");


// affiche la surface
console.log(calcSurface(length, width));
