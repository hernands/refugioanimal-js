class Peludo {

    constructor(nombre, especie, pelaje, edad, porte, imagen) {

        this.nombre = nombre.toUpperCase();
        this.especie = especie;
        this.pelaje = pelaje;
        this.edad = edad;
        this.porte = porte;
        this.imagen = imagen;
        this.adoptado = false;

    };


};

const arrayPeludos = [];

function nuevoPeludo(nombre, especie, pelaje, edad, porte, imagen) {

    arrayPeludos.push(new Peludo(nombre, especie, pelaje, edad, porte, imagen));

};

nuevoPeludo('Fatiga', 'perro', 'pardo', 'adulto', 'mediano', 'https://px.cdn.bigbangnews.com/bigbang/022019/1552084486149.webp?cw=&ch=540&extw=jpg');
nuevoPeludo('Betun', 'perro', 'marron', 'viejito', 'grande', 'https://www.personality-database.com/profile_images/203592.png');
nuevoPeludo('Chems', 'perro', 'beige', 'adulto', 'pequeño', 'https://i.pinimg.com/736x/03/6a/01/036a01687bf6430d12f40a1e611cd840.jpg');
nuevoPeludo('Doge', 'perro', 'mostaza', 'adulto', 'mediano', './img/dogejpg.webp');
nuevoPeludo('Salem', 'gato', 'negro', 'cachorro', 'pequeño', 'https://pbs.twimg.com/profile_images/616367539820589056/h4SNK5g9_400x400.jpg');
nuevoPeludo('Grumpy', 'gato', 'blanco', 'adulto', 'mediano', 'https://imgflip.com/s/meme/Grumpy-Cat.jpg');
nuevoPeludo('Gato con Botas', 'gato', 'naranja', 'adulto', 'pequeño', 'https://i2-prod.mirror.co.uk/incoming/article25609261.ece/ALTERNATES/s615b/0_PUSS-IN-BOOTS.jpg');
nuevoPeludo('Taylor', 'gato', 'atigrado', 'adulto', 'grande', 'https://i.pinimg.com/originals/1b/c2/77/1bc2772104246b7e829ddab4bcb78d14.jpg');

let cantidadPeludos = document.getElementById("cantidadPeludos");

cantidadPeludos.innerText = `${arrayPeludos.length} peludos en adopción`;
cantidadPeludos.style.color = "#F6B61E";
cantidadPeludos.style.fontWeight = "bold";

let contenedorTarjetas = document.querySelector('.peludosEnAdopcion');

let mostrarTarjeta = (especie) => {

    for (const peludo of especie) {

        let html = `
            <div class="card my-3" style="width: 18rem;">
                <img src=${peludo.imagen} class="card-img-top" alt="${peludo.nombre}">
                <div class="card-body">
                    <h5 class="card-title">Nombre: ${peludo.nombre}</h5>
                    <p class="card-text">Edad: ${peludo.edad}</p>
                    <p class="card-text">Pelaje: ${peludo.pelaje}</p>                
                    <p class="card-text">Porte: ${peludo.porte}</p>
                    <a href="#" onclick="alert('Felicidades, elegiste a ${peludo.nombre}!!! Nuestro equipo de adopcion se contactará contigo a la brevedad para finalizar el proceso de adopción.')" class="btn btn-primary">Adoptar</a>
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

