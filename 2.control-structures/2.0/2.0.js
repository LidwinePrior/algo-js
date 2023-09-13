// 2.0

let size = 185;
let weight = 80;

if((size>=50) || (weight >=45)) {
    console.log("You probably are an adlut");
} else {
    console.log("You probably are a child");
}

if((size>=150) || (weight>=45)) {
    console.log("You probably are an adlut");
} else if ((size>=50) || (weight >=10)) {
    console.log("You probably are a child");
} else {
    console.log("You are a baby");
}

let i = 1;
while (i<=100) {
    console.log(i);
    i+=1;
}

for (let i= 1; i <=100; i += 1){
    console.log(i);
}