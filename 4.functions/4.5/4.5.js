// 4.5  créer une fonction qui calcule la distance entre 2 points( A et B)

function calcDistance (A, B) { 
    //calcule des différences en x et y entre le point A et le point B 
    let deltaX = B.x - A.x;
    let deltaY = B.y - A.y;
    //calcul de la distance euclidienne en utilisant le théorème de Pythagore (a² + b² = c²)
    let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    return distance;   //distance euclidienne entre les 2 points
}

let pointA = {x:1, y:1};   //A premier point avce propriétés x et y
let pointB = {x:2, y:2};   //B 2eme point avec propriétés x et y
let distance = calcDistance(pointA, pointB);
console.log(distance)