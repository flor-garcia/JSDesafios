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


/* -------------------------------  DESAFIO 4 ----------------------------------------------  */
/* do {
    let appointment = prompt(service)
    if (appointment == "EXIT" || appointment == "" || appointment == "exit") break;
    let day = prompt(dayOfAppointment)
    if (day == "EXIT" || day == "" || day == "exit") break;
    let hour = hourOfAppointment(appointment);
    console.log(hourOfDay);


    resp = prompt(`You have selected ${appointment} for ${day} at ${hour}. Do you want to confirm? yes or no.`)
    if (resp == "yes") {
        priceOfAppointment(appointment)
    }
    add = prompt (`Do you want to add more services? yes or no`)
    

} while (add == "yes")

if (add == "no"){
    alert(`Thanks for your purchase. See you soon!`)
}  */


/* DESAFIO 4 COMPLEMENTARIO */

/* let cost = parseInt(prompt(`Ingrese un costo`));

const discount = x => x * 0.50; 
const IVA = x => x * 0.21;

let precioFinal = discount(cost) + IVA(discount(cost))

alert(`El precio final es $${precioFinal}`)
 */

/* -------------------------------  DESAFIO 5 y 6 (OBJETOS Y ARRAY) ----------------------------------------------  */

/* const Products = [
    {id: 1, product: 'Esmaltado permanente', price: 23100},
    {id: 2, product: 'Acrilico colores basicos',  price: 35000},
    {id: 3, product: 'Acrilico francesa o baby boomer',  price: 38000},
    {id: 4, product: 'Manicure rusa',  price: 31500},
    {id: 5, product: 'Diseños', price: 500},
    {id: 6, product:  'Tratamiento endurecedor', price: 10500},
    {id: 7, product:  'Degradé',  price: 1500},
    {id: 8, product:  'Cristales swarovski',  price: 5200},
    {id: 9, product:  'Retiro de permanente otro salon',  price: 5000},
    {id: 10, product:  'Retiro de acrilico otro salon',  price: 8000},
 
] */
/* 

let cart = 0;

const hourOfDay = ['8 am','10 am','12 pm','14pm','16pm','18pm','20pm'];
const weekDay = [
    {Day: 'Monday' , Zone: 'Las Condes'},
    {Day: 'Thuesday', Zone: 'Lo Barnechea'},
    {Day: 'Wednesday', Zone: 'Nuñoa'},
    {Day: 'Thursday', Zone: 'La Florida'},
    {Day: 'Friday', Zone: 'Providencia'},
] */



/* Esta funcion despliega la lista de produtos dentro del array */
/* const serviceList = () => {
    let menu = 'Chose a service:\n';
    Products.forEach((product) => {
        // a lo que hay en menu "Chose a Service" le sumo lo siguiente:
        menu += product.product + "\n";});
        return prompt(`${menu} \n If you want to leave type EXIT`);
}
 */

/* Esta funcion permite encontrar el dia disponible en funcion a la zona ingresada por el cliente */
/* const dayList = (zone) =>{
        for (const element of weekDay){ 
            if(element.Zone === zone){
                return alert(`The day availiable for your zone is ${element.Day}.`)}
}} */


/* Esta funcion despliega la lista de horas dentro del array hourOfDay */
/* const hourList = () => {
    let hourMenu = `Select an hour: \n`;
    hourOfDay.forEach((hour) => {
        hourMenu += hour +  '\n';});
        return prompt(`${hourMenu} \n If you want to leave type EXIT`);
}

const addToCart = (serviceSelected) => {
    const found = Products.find(product => product.product === serviceSelected);
    console.log(found);
    cart += (found.price * 1.19);
    alert(`You have selected: \n ${found.product}.`);
}
 */


/* Ciclo */
/* do {
    let serviceSelected = serviceList();
    if (serviceSelected == "EXIT") break;
    let zoneSelected = prompt('Which is your zone?');
    let daySelected = dayList(zoneSelected);
    if (daySelected == "EXIT") break;
    let hourSelected = hourList();
    if (hourSelected == "EXIT") break;

    addToCart(serviceSelected);

    answer = prompt (`Do you want to add more services to the cart? yes or no.`)


 } while (answer == "yes")

 if (cart > 0){
     alert(`Your appointment has a total a value of $${cart}`)}

     alert(`Thank you, see you soon!`);
  */

/* -------------------------------  DESAFIO COMPLEMENTARIO 6 (ARRAY) ----------------------------------------------  */

let numbers = [3,86,105,24,-3]

numbers.sort((a,b) => {
    if (a < b) {
        return - 1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;}
});

console.log(numbers);


let leters = ["a","z","k","p","i"]

leters.sort((a,b) => {
    if (a < b) {
        return - 1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;}
});

console.log(leters)
