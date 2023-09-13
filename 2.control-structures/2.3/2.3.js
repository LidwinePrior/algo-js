let i=2
while (i <=100) {
    console.log(i);
    i+=2;
}
for (let i = 1; i<=50; i++) { //pour la variable i = 1; comprise entre 1 et 100; après chaque boucle i ajouté de 2
    if(i%2 ===0){ //si i modulo 2 = 0 ca veut dire que c'est pair et donc s'affiche si modulo =/= 0 alors ne s'affiche pas
        console.log(i);
    }
}
