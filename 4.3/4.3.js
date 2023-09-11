// 4.3 

function rand10() {
    return Math.floor(Math.random() *10) +1;  
}

function multiRand(n) {
    let result = [];
    for (let i = 0; i< n; i++) {
        result.push(rand10());
    }
    return result;
}
let numb= 7;
let randomNumbers= multiRand(numb);
console.log(randomNumbers);