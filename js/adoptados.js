let adoptados;

const traerDatosJson = async () => {

    let response = await fetch("../js/peludosadoptados.json");
    let data = await response.json();

    adoptados = data;

    console.log(adoptados);

    for (const peludo of adoptados) {

        let tarjetaAdoptados = document.createElement("div");
        tarjetaAdoptados.classList.add("card");
        tarjetaAdoptados.setAttribute("style", "width: 18rem;");

        tarjetaAdoptados.innerHTML = `
        <img src=${peludo.imagen} class="card-img-top" alt="${peludo.nombre}">
        <div class="card-body">
            <h4 class="card-title">${peludo.nombre}</h4>
            <p class="card-text fw-bold">Edad: ${peludo.edad}</p>
            <p class="card-text fw-bold">Pelaje: ${peludo.pelaje}</p>                
            <p class="card-text fw-bold">Porte: ${peludo.porte}</p>
            <div class='btn btn-primary botonGlobal d-block botonAdoptar'>Adoptar</div>
        </div>        
        `

        document.getElementById("seccionAdoptados").append(tarjetaAdoptados);

    }

};

traerDatosJson();



