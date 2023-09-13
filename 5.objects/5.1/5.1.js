//5.1 créer une fonction qui demande a l'utilisateur des données comprise dans un seul objet et les renvoyer.


function askTvSerie(title, prodYear, actors) { // fonction qui prend 3 arguments
  let serie = {   //déclare une variable et initialise un objet vide
    title: title,   //définit une propriété "title" dans l'objet série avce la valeur de la variable "title"
    prodYear: prodYear,
    actors: actors,
  };
  return serie;   // fonction retourne l'objet avec les données 

}

// demander aux utilisateurs les infos
let title = prompt("entrez le nom de ta serie favorite");
let prodYear = prompt("entrez l'année de production de ta série favorite");
let castMember = prompt("Entrez le noms de acteurs"); //demande à l'utilisateur les noms des acteurs, séparés par des virgules et stock les réponses dans castMember
let actors = castMember.split(",");  //cette ligne divise la chaîne de caractères castMember en un tableau en utilisant la virgule comme séparateur, de sorte que chaque noms d'acteurs soit un élément du tableau. Tableau stocké dans variable actors


let serieobject = askTvSerie(title, prodYear, actors);  //appelle la fonction askTvSerie avec les valeurs que vous avez obtenues de l'utilisateurs et stock l'objet série retourné dans la variable
const json = JSON.stringify(serieobject); //convertit à nouveau l'objet en une chaîne JSON.stringify() et stock cette chaîne dans la variable json
console.log(json);