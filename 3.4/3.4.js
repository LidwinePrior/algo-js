// 3.4 créer un programme qui affiche l'élément minimum et l'éléments max du tableau

let arr = [3, 2, 7, 1, 4];
let min = arr[0]; //initilaiser les variables min et max avec les premières valeurs du tableau
let max = arr[0];

for (let i = 1; i< arr.length; i++) {  //for parcours le tableau pour trouver le min et le max. A chaque itération on compare l'élément actuel avec min et max
    if (arr[i]<min) {
        min = arr[i];
    }
    if (arr[i]> max) {
        max = arr[i];
    }
}
console.log(min);
console.log(max);