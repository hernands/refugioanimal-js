
class Peludo {

    constructor(nombre, especie, pelaje, edad, porte) {

        this.nombre = nombre.toUpperCase();

        this.especie = especie;

        this.pelaje = pelaje;

        this.edad = edad;

        this.porte = porte;

    };

    mostrarPerfil() {

        let perfil = `

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

nuevoPeludo('Betun', 'perro', 'marron', 'viejito', 'grande');

nuevoPeludo('Salem', 'gato', 'negro', 'cachorro', 'pequeño');

nuevoPeludo('Filipo', 'perro', 'atigrado', 'adulto', 'mediano');


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


            let elegirPeludo = parseInt(prompt(`¡Genial! Elegiste adoptar a un peludo. Selecciona a quién te gustaría adoptar ingresando el número correspondiente, o presiona 0 para realizar una búsqueda: \n ${peludosDisponibles()}`));


            if (parseInt(elegirPeludo) === 0) {

                let criterioDeBusqueda = parseInt(prompt('Elegiste buscar. Selecciona un criterio de búsqueda: \n1- Buscar por nombre (ej: Firulais) \n2- Buscar por especie (perro o gato) \n3- Buscar por pelaje(Ej.: beige): \n4- Buscar por edad (cachorro, adulto o viejito) \n5-Buscar por porte (pequeño, mediano o grande) \nO ingresa cualquier otra entrada para salir al menú principal. '));

                function busquedaPorCaracteristica(criterio) {

                    let busquedaCaracteristicas = prompt(`Elegiste buscar por ${criterio}. Ingresa tu busqueda`);

                    let arrayBusqueda = arrayPeludos.filter((elem) => (elem[criterio].toLowerCase() == busquedaCaracteristicas.toLowerCase()));

                    let cantidadCoincidencias = arrayBusqueda.length;

                    if (cantidadCoincidencias == 0) {
                        alert('No hay resultados.');
                    } else {

                        let listaEncontrados = '';

                        for (objeto of arrayBusqueda) {

                            let objetoEncontrado = `${objeto.nombre}(${objeto[criterio]}),`;

                            listaEncontrados += objetoEncontrado;

                        };

                        alert(`Encontramos las siguientes coincidencias: ${listaEncontrados}. Podés adoptar a cualquiera de ellos en el menú "adoptar a un peludo :)"`);
                    };

                }

                switch (criterioDeBusqueda) {

                    case 1:

                        let busquedaNombre = prompt('Elegiste buscar por nombre.Ingresa tu busqueda');

                        let resultadoBusqueda = arrayPeludos.filter((elem) => (elem.nombre == busquedaNombre.toUpperCase()));

                        let cantidadDeNombres = resultadoBusqueda.length;

                        if (cantidadDeNombres == 0) {

                            alert('Lo sentimos, no hay ningún Peludo con ese nombre :(');

                        } else {

                            alert(`Increible! Encontramos a ${cantidadDeNombres} Peludo/s con ese nombre. Podrás encontrarlo/s ingresando en la opción: "adoptar a un peludo".`);
                        }

                        break;

                    case 2:

                        busquedaPorCaracteristica('especie');

                        break;


                    case 3:

                        busquedaPorCaracteristica('pelaje');

                        break;

                    case 4:

                        busquedaPorCaracteristica('edad');

                        break;

                    case 5:

                        busquedaPorCaracteristica('porte');

                        break;

                    default:

                        alert('Opcion inval0ida. Regresarás al menú principal.');

                        break;
                }

            } else if (elegirPeludo > 0 && elegirPeludo <= arrayPeludos.length) {

                let indexPeludo = elegirPeludo - 1;

                let confirmarEleccion = parseInt(prompt(`Excelente. esta es tu selección:\n ${arrayPeludos[indexPeludo].mostrarPerfil()}\n Ingresa 1 para confirmar o 2 para cancelar.`));

                switch (confirmarEleccion) {

                    case 1:

                        alert(`Felicidades ${usuario}! Elegiste a ${arrayPeludos[indexPeludo].nombre}. Pronto nos contactaremos contigo para finalizar el proceso de adopción.`);

                        arrayPeludos.splice(indexPeludo, 1);

                        break;

                    case 2:

                        alert('¡Qué lástima! Bueno, siempre habrá otro peludo esperándote.');

                        break;

                }


            } else

                alert('Elegiste una opción inválida. Vuelve a intentarlo.')

            break;

        case 2:

            alert('¡Genial! Elegiste dar a un peludo en adopción. A continuación te solicitaremos los datos para iniciar el proceso.');

            let pedirNombre = prompt('¿Cómo se llama tu peludo?');

            let pedirEspecie = prompt('¿Es un perro o un gato?');

            let pedirPelaje = prompt('¿Qué tipo de pelaje tiene? (negro, atigrado, manchado, etc.)');

            let pedirEdad = prompt('¿Qué edad tiene? (cachorro, adulto, viejito)');

            let pedirPorte = prompt('¿Qué porte tiene? (mediano, pequeño o grande)');

            nuevoPeludo(pedirNombre, pedirEspecie, pedirPelaje, pedirEdad, pedirPorte);

            alert(`Genial, ${pedirNombre} ya ha sido incorporado a la lista de peludos disponibles. Podras verificarlo seleccionando la opcion ADOPTAR A UN PELUDO o en el listado de la página web seleccionando la opción SALIR.`);

            break;

        default:

            alert('Por favor ingrese una opcion valida');

            break;

    };

    opcionEscogida = parseInt(menuOpciones());

};



let cantidadPeludos = document.getElementById("cantidadPeludos");

cantidadPeludos.innerText = `${arrayPeludos.length} peludos en adopción`;
cantidadPeludos.style.color = "#fcba03";
cantidadPeludos.style.fontWeight = "bold";


let contenedorTarjetas = document.querySelector('.peludosEnAdopcion');


for (const peludo of arrayPeludos) {

    let html = `
        <div class="card my-3" style="width: 18rem;">
            <img src="./img/dogejpg.webp" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Nombre: ${peludo.nombre}</h5>
                <p class="card-text">Edad: ${peludo.edad}</p>
                <p class="card-text">Pelaje: ${peludo.pelaje}</p>                
                <p class="card-text">Porte: ${peludo.porte}</p>
                <a href="#" class="btn btn-primary">Adoptar</a>
            </div>
        </div>
    `
    let tarjeta = document.createElement('div');
    tarjeta.className = "col-12 col-md-6 col-lg-3"
    tarjeta.innerHTML = html;
    contenedorTarjetas.appendChild(tarjeta);
}