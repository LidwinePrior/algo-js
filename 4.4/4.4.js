//4.4 créé un fonction qui prend 2 paramètres: un tableau de noms et un nombre random.
//la fonction doit retourner un tableau d'une selection random d'élèves.


function pickLearner (array){  //fonction pour choisir un nom dans un tableau
    var rand = Math.random()*array.length | 0;  //variable qui prend un nombre au hasard =/= 0 sur la longueur du tableau
    var n = array[rand]; //variable qui choisi un nombre random dans le tableau
    return n;  //retourne le nombre random
}
let inputAr = ["Alexandre", "Antoine", "Bastien", "Carole", "Dorian", "Elisabeth", "Elodie", "Justin", "Justine F", "Justine L", "Kimi", "Layla", "Lidwine", "Lucas", "Marie", "Mathias", "Okly", "Pierre", "Robin", "Rosalie", "Stephane", "Tim", "Thomas", "Valentin", "Alexandre V", "Virginie"];
let n = pickLearner(inputAr);  // variable qui applique son nombre dans le tableau de noms
console.log(n)  //sors le nom en question