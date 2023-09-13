// 4.3 créé un programme  qui demande le nombre de nombres random et l'affiche 

function rand10() {   //fonction qui génère un nombre entier aléatoire entre 1 et 10
    return Math.floor(Math.random() *10) +1;  
}

function multiRand(n) {   
    let result = [];
    for (let i = 0; i< n; i++) {     // boucle for parcours rand10 et ajoute les éléments a son tableau
        result.push(rand10());
    }
    return result;
}
let numb= 7;
let randomNumbers= multiRand(numb);
console.log(randomNumbers);