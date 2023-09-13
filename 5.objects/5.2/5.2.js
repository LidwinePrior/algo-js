// 5.2 focntion qui mélange le noms des acteurs entrés par l'utilisateurs



function shuffle(actors) {    //fonction qui prend un tableau d'acteurs en entrée
    for (let i = actors.length - 1; i > 0; i--) {  // boucle for qui commence à la fin du tableau des acteurs et se déplace vers l'arrière jusqu'a l'index 0. Elle permettra de mélanger les acteurs
      const j = Math.floor(Math.random() * (i + 1));  // a chaque itérationde la boucle, cette ligne génère un nombre aléatoire j entre o et i inclus. Cela  servira à choisir un acteur aléatoire pour l'échanger avce l'acteur à l'index i
      [actors[i], actors[j]] = [actors[j], actors[i]];   // echange les éléments actors [i] et [j]
    }
  }

  function randomizeCast(tvSerie) {  //fonction  qui prend un objet tvSerie et la stock e dans une variable
    const actors = tvSerie.actors;   //extrait la liste des acteurs de l'objet tvSerie et la stock dans la variable actors
    shuffle(actors);   //appele la fonction shuffle que j'ai déclaré plus haut pour melanger la liste
  }
 
  
  let title = prompt("entrez le nom de ta serie favorite");
  let prodYear = prompt("entrez l'année de production de ta série favorite");
  let castmember = prompt("Entrez le nom des acteurs");
  let actors = castmember.split(",");
 
  
  let tvSerie = {
    title: title,
    prodYear: prodYear,
    actors: actors,
  };
  console.log("distribution normale: " + actors)
  randomizeCast(tvSerie); 
  console.log("distribution aléatoire des acteurs: " + tvSerie.actors);