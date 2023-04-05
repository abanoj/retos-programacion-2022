/* RETO 1
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

/* const retoUno = () =>{
    for (let i = 1; i <= 100; i++){
        if(i%3 === 0 && i%5 === 0){ console.log('fizzbuzz'); continue;}
        if(i%3 === 0) {console.log('fizz'); continue;}
        if(i%5 === 0) {console.log('buzz'); continue;}
        console.log(i);       
    }
}
retoUno(); */

/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

const retoDos = (firstWord = '', secondWord = '') => {
    //Compruebo que existan las dos palabras y que sean tipo string
    if (firstWord === '' || secondWord === '') return console.info('Falta un argumento en la función');
    if (typeof firstWord !== 'string' || typeof secondWord !== 'string') return console.error('Los argumentos deben ser cadenas de texto');

    firstWord = firstWord.toLowerCase();
    secondWord = secondWord.toLowerCase();
    //Comrpuebo si las palabras son exactamente iguales
    if (firstWord === secondWord) return false;

    firstWord = firstWord.split('').sort().join('');
    secondWord = secondWord.split('').sort().join('');
    //Comprueba si son palindromos
    if (firstWord === secondWord){ return true}
    return false;

    console.log('Probando');
}
retoDos()
retoDos(34,true);
console.log(retoDos('Hola','Adios'));
console.log(retoDos('Hola','hola'));
console.log(retoDos('Aloha', 'Aolah'));

