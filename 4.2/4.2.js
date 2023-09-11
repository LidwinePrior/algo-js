// 4.2 créer une fonction qui renvoie un nombre entier aléatoire entre 1 et 10 et un programme qui affiche le résultat



//fonction qui génère un nombre entier aléatoire entre 1 et 10
function rand10() {
    return Math.floor(Math.random() *10) +1;  //un nombre entier entre 1 et 10
}

//programme for qui affiche le résultat de la fonction  rand10() à chaque éxecution
for  (let i = 0; i<5; i++) {  //ici on a itéré 5x = exécuter le programme 5x
    let randomNum = rand10();
    console.log(randomNum);
}