let adoptados;

const traerDatosJson = async () => {

    let response = await fetch("../js/peludosadoptados.json");
    let data = await response.json();

    adoptados = data;

    console.log(adoptados);

};

traerDatosJson();
