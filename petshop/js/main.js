alert("La cueva de Odin!");

/* datos del cliente */
const nombrePersona = prompt("Hola, cual es tu nombre?");
const nombreMascota = prompt("Cual es el nombre de tu mascota?");

/* datos del carrito */
let kiloAlimento = Number(prompt("Cuanto kilogramos de alimento vas a llevar?"));
let bolsaPiedritas = Number(prompt("Cuantas bolsas de piedritas vas a llevar?"));
let ropaCliente = Number(prompt("Cuantas prendas de mascota vas a llevar?"));

/* precios */
const unKiloAlimento = 3000;
const unaBolsaPiedritas = 4500;
const ropaMascota = 10000;

/* calculos */
const alimento = kiloAlimento * unKiloAlimento;
const piedras = bolsaPiedritas * unaBolsaPiedritas
const ropa = ropaCliente * ropaMascota

const total = alimento + piedras + ropa;
const descuento = total * 0.80;

/* resultado en consola */
console.log("Hola " + nombrePersona + " y " + nombreMascota + ", bienvenidos!");

console.log("Bien " + nombrePersona + ", el alimento es: $" + alimento + " las piedritas es: $" + piedras + " y la ropa para " + nombreMascota + " es: $" + ropa);

console.log("El total es: $" + total + " pero si abonas en efectivo tenes 20% de descuento, te queda en: $" + descuento);