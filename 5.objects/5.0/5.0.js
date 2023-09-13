//5.0 Objets

//objets simples
let myObject = {
    "firstname": "Gerard",
    name: "Lambert",
    age: 42
  };
  
  
  console.log(myObject["age"]);    //use the [] notation to access values
  
  console.log(myObject.firstname);  // or the . notation

  myObject.age = 54;  //assign a new value
  
  delete myObject["name"];  //special keyword to delete key
  
  console.log(myObject);

// Objets et tableaux pour structures de données

let id = {
    firstname: "Gerard",
    lastname: "Lambert",
    age: 42,
    skills: [
      {
        skillName: "JavaScript",
        level: "advanced"
      },
      {
        skillName: "HTML",
        level: "advanced"
      }
    ],
    address: {
      street: "rue des Campanules",
      number: "10",
      city: "Paris",
      zip: 1000
    }
  }
console.log(id);
