arrayPeludos.push(new Peludo('fatiga', 'perro', 'pardo', 'adulto', 'mediano'));
arrayPeludos.push(new Peludo('betun', 'perro', 'marron', 'viejo', 'grande'));
arrayPeludos.push(new Peludo('ein', 'perro', 'beige', 'cachorro', 'pequeño'));




// Loop original

let usuario = prompt("Bienvenido a Refugio Peludo. Empecemos con un usuario... ¿Cuál es tu nombre?");

function menuOpciones() {
    let eleccion = prompt(`¡Hola, ${usuario}!¿Qué deseas hacer? \n Selecciona una opción ingresando un número: \n1-Adoptar un peludo \n2-Dar un peludo en adopción \n3-Salir`);
    return eleccion;
}

let opcionEscogida = parseInt(menuOpciones());

while (opcionEscogida != 3) {

    switch (opcionEscogida) {

        case 1:

            alert('¡Genial! Elegiste adoptar a un peludo.');

            break;

        case 2:

            alert('¡Genial! Elegiste dar a un peludo en adopción.');

            break;

        default:

            alert('Por favor ingrese una opcion valida');

            break;

    };

    opcionEscogida = parseInt(menuOpciones());

};








