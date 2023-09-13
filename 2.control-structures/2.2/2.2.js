let min = prompt("Enter a min number");
let max = prompt("Enter a max number");
let current = 10;

if((current > min) && (current < max)) {
    console.log(current);
} else if (min>max) {
    console.log("Not bad but try again! You're almost there!");
}
