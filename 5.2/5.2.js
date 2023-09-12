// 5.2 focntion qui mélange le noms des acteurs entrés par l'utilisateurs



function shuffle(actors) {    //fonction qui mélange les noms des acteurs rentrés par l'utilisateur
    for (let i = actors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [actors[i], actors[j]] = [actors[j], actors[i]];
    }
  }

  function randomizeCast(tvSerie) {
    const actors = tvSerie.actors;
    shuffle(actors);
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
 
  randomizeCast(tvSerie);
  console.log(tvSerie.actors);