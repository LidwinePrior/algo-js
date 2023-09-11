// 4.0 intro fonctions

function hello(name) {    //manière de base de déclarer une fonction
    console.log ("hello" + name);
}
hello();


function add(a, b) {  // a et b sont des arguments
    return a + b;  //return renvoi qqch (un resultat par exemple)
}
console.log("the sum of 2 and 3 is " + add(2, 3)); //appel d'une fonction



//Arrow functions => syntaxe + courte 
let myFunction = (a, b) => {  
    return a + b;
}
//ou let myFunction = (a, b) => a + b

console.log(myFunction(2, 3));


//Recursivity    -> utilisé dans tous les langages de prod
function count(i) {
    if (i <= 100) {
        console.log(i);
        count(i + 1);
    }
}
count(1);  //affiche tous les nombres de 1 à 100
