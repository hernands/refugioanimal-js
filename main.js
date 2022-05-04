

class Peludo {

    constructor(nombre, especie, pelaje, edad, porte) {
        this.nombre = nombre;
        this.especie = especie;
        this.pelaje = pelaje;
        this.edad = edad;
        this.porte = porte;
        this.adoptado = false;
    };

    mostrarPerfil() {
        perfil = `
        \nNombre: ${this.nombre} 
        \nEspecie: ${this.especie} 
        \nPelaje: ${this.pelaje} 
        \nEdad: ${this.edad} 
        \nPorte: ${this.porte}
        `;
        return perfil;
    };

};

const arrayPeludos = [];


function nuevoPeludo(nombre, especie, pelaje, edad, porte) {
    arrayPeludos.push(new Peludo(nombre, especie, pelaje, edad, porte));
};

nuevoPeludo('Fatiga', 'perro', 'pardo', 'adulto', 'mediano');
nuevoPeludo('Betun', 'perro', 'marron', 'viejo', 'grande');
nuevoPeludo('Salem', 'gato', 'negro', 'cachorro', 'pequeño');


let usuario = prompt("Bienvenido a Refugio Peludo. Empecemos con un usuario... ¿Cuál es tu nombre?");

function menuOpciones() {
    let eleccion = prompt(`¡Hola, ${usuario}!¿Qué deseas hacer? \n Selecciona una opción ingresando un número: \n1-Adoptar un peludo \n2-Dar un peludo en adopción \n3-Salir`);
    return eleccion;
}

let opcionEscogida = parseInt(menuOpciones());

while (opcionEscogida != 3) {

    switch (opcionEscogida) {

        case 1:

            function peludosDisponibles() {
                let listaPeludos = ''

                for (const peludo of arrayPeludos) {
                    let mostrarPeludo = `
                        
                        ${arrayPeludos.indexOf(peludo) + 1} - ${peludo.nombre} (${peludo.especie})\n
                    `;

                    listaPeludos += mostrarPeludo;

                }
                return listaPeludos;
            }

            let elegirPeludo = parseInt(prompt(`¡Genial! Elegiste adoptar a un peludo. Selecciona a quién te gustaría adoptar ingresando el número correspondiente: \n ${peludosDisponibles()}`));

            let indexPeludo = elegirPeludo - 1;

            alert(`Felicidades ${usuario}! Elegiste a ${arrayPeludos[indexPeludo].nombre}. Pronto nos contactaremos contigo para finalizar el proceso de adopción.`);

            arrayPeludos.splice(indexPeludo, 1);

            break;

        case 2:

            alert('¡Genial! Elegiste dar a un peludo en adopción. A continuación te solicitaremos los datos para iniciar el proceso.');

            let pedirNombre = prompt('¿Cómo se llama tu peludo?');
            let pedirEspecie = prompt('¿Es un perro o un gato?');
            let pedirPelaje = prompt('¿Qué tipo de pelaje tiene? (negro, atigrado, manchado, etc.)');
            let pedirEdad = prompt('¿Qué edad tiene? (cachorro, adulto, viejito)');
            let pedirPorte = prompt('¿Qué porte tiene? (mediano, pequeño o grande)');

            nuevoPeludo(pedirNombre, pedirEspecie, pedirPelaje, pedirEdad, pedirPorte);

            alert(`Genial, ${pedirNombre} ya ha sido incorporado a la lista de peludos disponibles. Podras verificarlo seleccionando la opcion ADOPTAR A UN PELUDO.`)

            break;

        default:

            alert('Por favor ingrese una opcion valida');

            break;

    };

    opcionEscogida = parseInt(menuOpciones());

};
