/* DESAFIO 1 */

/* let savenombre = prompt("Ingresa tu nombre")
let saveapellido = prompt("Ingresa tu apellido")
console.log(savenombre + " " + saveapellido)
alert("¡Hola" + " " + savenombre + " " + saveapellido + "!")
document.write("¡Hola" + " " + savenombre + " " + saveapellido + "!")
 */

/* DESAFIO 2 */

/* let edad = parseInt(prompt("Ingrese edad"));

if (edad >= (18) && edad < (100)) {
    alert("¡Bienvenido a BeerCraft!");
} else if (edad < (parseInt(18))){
    alert("Lo sentimos! no puedes ver el contenido de esta página");
} else {
    alert("No has ingresado tu edad o el número ingresado no es válido");
} */

/* DESAFIO 3 */

/* let max = 50;
let min = 1;


let number = Math.random() * max;
number = parseInt(number);

while (true) {
    userNumber = prompt("Ingresa un número entre 1 y 50 para ganar");
    if (userNumber == number) {
        alert("YOU WIN");
    } else if ((userNumber == 0) || (userNumber < number)) {
        alert(`${userNumber} es menor al número ganador. Intente de nuevo`);
    } else if (userNumber > number) {
        alert(`${userNumber} es mayor al número ganador`)
    } else{
        prompt("No has ingresado ningún número. Ingresa un número entre 1 y 50 para ganar")
    }
} */

/* DESAFIO 3 VERSION 2 */

/* let input = prompt("Enter a Fruit")

while (input != "ESC") {
    switch (input) {
        case "banana":
            alert(`You have enter banana, which color is yellow`);
            break;
        case "apple":
            alert("You have enter apple, which color is red");
            break;
        case "orange":
            alert("You have enter orange, which color is orange");
            break;
        default:
            input = prompt("We don't have record of the fruit you have chosen. Enter another Fruit");
            break;
    }
}
 */


/* DESAFIO 4 */
/* do {

    let appointment = prompt(service)
    if (appointment == "EXIT" || appointment == "" || appointment == "exit") break;
    let day = prompt(dayOfAppointment)
    if (day == "EXIT" || day == "" || day == "exit") break;
    let hour = hourOfAppointment(appointment)


    resp = prompt(`You have selected ${appointment} for ${day} at ${hour}. Do you want to confirm? yes or no.`)
    if (resp == "yes") {
        priceOfAppointment(appointment)
    }
    add = prompt (`Do you want to add more services? yes or no`)
    

} while (add == "yes")

if (add == "no"){
    alert(`Thanks for your purchase. See you soon!`)
} */


/* DESAFIO 4 COMPLEMENTARIO */

/* let cost = parseInt(prompt(`Ingrese un costo`));

const discount = x => x * 0.50; 
const IVA = x => x * 0.21;

let precioFinal = discount(cost) + IVA(discount(cost))

alert(`El precio final es $${precioFinal}`)
 */