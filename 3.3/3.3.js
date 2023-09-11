// 3.3 dupliquer un tableau


// let arr = ["Alexandre", "Antoine", "Bastien"];
// let arrDup = [];

// for (let i = 0; i<arr.length; i++) {   //boucle for pour parcourir chaque élément  du tableau
//     console.log(arr[i]);  //on affiche les éléments dans la console
//     arrDup.push(arr[i]);  //on ajoute  chaque élément au tableau arrDup
// } 
// for (let i = 0; i< arrDup.length; i++) {
// console.log(arrDup[i]);   //on afichhe les éléments dans la console.
// }


let arr = ["Alexandre", "Antoine", "Bastien"];
let arrDup = arr.map(function(nom) {  //fonction callback pour appeler tout ce qu'il y a à l'intérieur du tableau et le dupliquer
    return nom;
});
arr.forEach(function(nom) { //appelle chaque élement un a un => ca eviter d'afficher les [] et les ""
    console.log(nom);
});

arrDup.forEach(function(nom) {
    console.log(nom)
});