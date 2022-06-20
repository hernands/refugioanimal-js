const usuario = {

    nombre: '',
    mail: '',
    telefono: ''

};

const divRegistrado = document.getElementById('usuarioRegistrado');
const divNoRegistrado = document.getElementById('registrarUsuario');

const campoNombre = document.getElementById('name');
const campoEmail = document.getElementById('email');
const campoTelefono = document.getElementById('telefono');
const botonRegistrar = document.getElementById('botonRegistro');
const mensajeRegistro = document.getElementById('mensajeRegistro');

botonRegistrar.addEventListener('click', () => { crearusuario() });

const crearusuario = () => {

    const inputNombre = campoNombre.value;
    const inputEmail = campoEmail.value;
    const inputTel = campoTelefono.value;
    const registroExitoso = `¡Gracias por registrarte ${inputNombre}! Puedes seguir navegando.`
    const registroFallido = `Los campos no pueden estar vacíos.`

    if (inputNombre != '' && inputEmail != '' && inputTel != '') {

        usuario.nombre = inputNombre;
        usuario.mail = inputEmail;
        usuario.telefono = inputTel;
        mensajeRegistro.innerHTML = registroExitoso

        const usuarioJson = JSON.stringify(usuario);
        localStorage.setItem("usuario", usuarioJson);
        window.setTimeout(() => { location.reload() }, 2000);

    } else mensajeRegistro.innerHTML = registroFallido;

};

const usuarioLocal = localStorage.getItem("usuario");
const usuarioLocalParseado = JSON.parse(usuarioLocal);


if (usuarioLocal != null) {

    divRegistrado.classList.remove('d-none');
    const mostrarDatosNombre = document.getElementById('datosNombre');
    const mostrarDatosMail = document.getElementById('datosMail');
    const mostrarDatosTel = document.getElementById('datosTelefono');

    mostrarDatosNombre.innerHTML = usuarioLocalParseado.nombre;
    mostrarDatosMail.innerHTML = usuarioLocalParseado.mail;
    mostrarDatosTel.innerHTML = usuarioLocalParseado.telefono;

} else divNoRegistrado.classList.remove('d-none');

const btnEliminarUsuario = document.getElementById('eliminarUsuario');

const eliminarUsuario = () => {

    const borradoExitoso = document.getElementById('borradoExitoso');
    borradoExitoso.innerHTML = `Borraste los datos actuales. Puedes volver a registrarte si quieres.`;
    localStorage.removeItem("usuario");
    window.setTimeout(() => { location.reload() }, 2000);

};

btnEliminarUsuario.addEventListener('click', () => { eliminarUsuario() });



