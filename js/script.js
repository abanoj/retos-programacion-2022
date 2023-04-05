/* RETO 0
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

/* const retoCero = () =>{
    for (let i = 1; i <= 100; i++){
        if(i%3 === 0 && i%5 === 0){ console.log('fizzbuzz'); continue;}
        if(i%3 === 0) {console.log('fizz'); continue;}
        if(i%5 === 0) {console.log('buzz'); continue;}
        console.log(i);       
    }
}
retoCero(); */

/* RETO 1
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

/* const retoUno = (firstWord = '', secondWord = '') => {
    //Compruebo que existan las dos palabras y que sean tipo string
    if (firstWord === '' || secondWord === '') {console.info('Falta un argumento en la función'); return false}
    if (typeof firstWord !== 'string' || typeof secondWord !== 'string') {console.error('Los argumentos deben ser cadenas de texto'); return false}

    firstWord = firstWord.toLowerCase();
    secondWord = secondWord.toLowerCase();
    //Comrpuebo si las palabras son exactamente iguales
    if (firstWord === secondWord) return false;

    firstWord = firstWord.split('').sort().join('');
    secondWord = secondWord.split('').sort().join('');
    //Comprueba si son palindromos
    if (firstWord === secondWord){ return true}
    return false;
}
console.log(retoUno());
console.log(retoUno(34,true));
console.log(retoUno('Hola','Adios'));
console.log(retoUno('Hola','hola'));
console.log(retoUno('Aloha', 'Aolah')); */

/* RETO 2
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

const retoDos = () => {
    let fib = [0,1];
    for (let i = 0; i < 50; i++) {
        if(i===0 || i===1) {console.log(i); continue;}
        fib.push(fib[fib.length - 1] + fib[fib.length -2]);
        console.log(fib[fib.length - 1]);
    }
}
retoDos();
