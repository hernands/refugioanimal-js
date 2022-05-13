
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

nuevoPeludo('Chems', 'perro', 'beige', 'adulto', 'mediano');

nuevoPeludo('Doge', 'perro', 'mostaza', 'adulto', 'mediano');

nuevoPeludo('Salem', 'gato', 'negro', 'cachorro', 'pequeño');

nuevoPeludo('Grumpy', 'gato', 'blanco', 'adulto', 'mediano');

nuevoPeludo('Gato con Botas', 'gato', 'naranja', 'adulto', 'pequeño');

nuevoPeludo('Taylor', 'gato', 'atigrado', 'adulto', 'grande');



let cantidadPeludos = document.getElementById("cantidadPeludos");

cantidadPeludos.innerText = `${arrayPeludos.length} peludos en adopción`;
cantidadPeludos.style.color = "#fcba03";
cantidadPeludos.style.fontWeight = "bold";


let contenedorTarjetas = document.querySelector('.peludosEnAdopcion');

let mostrarTarjeta = (especie) => {

    for (const peludo of especie) {

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

}

const botonGato = document.getElementById("verGatos");
const botonPerro = document.getElementById("verPerros");

botonGato.addEventListener("click", () => { seleccionEspecie("gato") }, { once: true });

botonPerro.addEventListener("click", () => { seleccionEspecie("perro") }, { once: true });

function seleccionEspecie(especie) {

    if (especie == "gato") {

        const arrayEspecie = arrayPeludos.filter((elem) => (elem.especie == "gato"));

        mostrarTarjeta(arrayEspecie);


    };

    if (especie == "perro") {

        const arrayEspecie = arrayPeludos.filter((elem) => (elem.especie == "perro"));

        mostrarTarjeta(arrayEspecie);


    }

}



// for (const peludo of arrayPeludos) {

//     let html = `
//         <div class="card my-3" style="width: 18rem;">
//             <img src="./img/dogejpg.webp" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">Nombre: ${peludo.nombre}</h5>
//                 <p class="card-text">Edad: ${peludo.edad}</p>
//                 <p class="card-text">Pelaje: ${peludo.pelaje}</p>
//                 <p class="card-text">Porte: ${peludo.porte}</p>
//                 <a href="#" class="btn btn-primary">Adoptar</a>
//             </div>
//         </div>
//     `
//     let tarjeta = document.createElement('div');
//     tarjeta.className = "col-12 col-md-6 col-lg-3"
//     tarjeta.innerHTML = html;
//     contenedorTarjetas.appendChild(tarjeta);
// }