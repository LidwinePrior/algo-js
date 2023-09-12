// 4.6   créer une fonction récursive qui renvoie la factorielle d'un nombre.

//nombre factorielle = produit de tous les entiers positifs inférieur ou égaux a un nombre donné généralement représenter par "n!"
//ex: la factorielle de 5! est le produit de tous les entier de 1 à 5.
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// factorielle d'un nombre est la multiplication de tous les entiers de 1 a "n".
//sauf 0 est définie comme égale à 1 par convention.

function factorial(a) {  //{number} a = le nombre pour lequel la fonction doit être calculée
    if (a === 0 || a === 1) {
        return 1; //factorielle de 0 = toujours 1
    } else {
        //returns {number} la factorielle du nombre donné
        return a * factorial(a - 1); //appel récursif pour calculer la factorielle
    } 
}
let number = 7;
let result = factorial(number);
console.log(result);

//appel récursif = quand fonction s'appelle elle-même pour résoudre un problème de manière itérative.
//c-a-d résout un problème en le divisant en des sous-problèmes. Chaque fois que la fonction est appelée, elle travaille sur un sous-problème réduit
// et s'appelle elle-même  jusqu'à ce qu'elle atteigne un cas de base ou la réponse est directement connue.
//1. cas de base: scénario ou la focntion renvoie la valeur directe sans faire d'appels récursifs
//2. cas récursif: fonction divise en sous-problème plus petits et résout chaque sous-problèmes en appelant la fonction elle-même
//3. progression vers le cas de base: chaque appel récursif foit progresser vers le cas de base. Les paramètres passés à chaque appel récursif doivent se rapprocher du cas de base pourque la récursion se termine.
//Dans la factorielle ci-dessus, on appelle la factorielle 7. la fonction se divise en plusieurs appels récursifs de factiral.
// factorial(7) appelle factorial (6) qui à son tour appelle factorial (5) et ainsi de suite jusqu'a factorial(0)
// ou la valeur 1 est renvoyée. Ensuite, toutes les valeurs sont remontées et multiliées pour donner la factorielle finale.