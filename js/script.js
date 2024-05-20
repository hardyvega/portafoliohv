//funcion que me aplica el estil a la opcion seleccionada en el menu y quita la previamente seleccionado
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //hace desaparecer el menu una vez que se ha seleccionado una opcion en el modo
    var x = document.getElementById("nav");
    x.className = "";
}

//funcion que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav")
    if (x.className === ""){
        x.className = "responsive";
    } else {
        x.className = "";
    }
}
//Animacion de las barra de habilidades
window.onscroll = function(){
    efectoHabilidades()
};

//Funcion que aplica la animacion de la barra de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("jv").classList.add("barra-progreso4");
    }
}

//validacioon contactame
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        // Evitar el envío del formulario
        event.preventDefault();

        // Capturar los valores de los campos
        const nombre = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('Mensaje').value.trim();

        // Variables para controlar la validación
        let isValid = true;

        // Validar nombre (no vacío)
        if (nombre === "") {
            isValid = false;
            alert("El campo de nombre no puede estar vacío.");
        }

        // Validar email (formato correcto)
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            alert("Por favor, ingresa un correo electrónico válido.");
        }

        // Validar mensaje (no vacío)
        if (message === "") {
            isValid = false;
            alert("El campo de mensaje no puede estar vacío.");
        }

        // Si todo es válido, enviar el formulario
        if (isValid) {
            form.submit();
        }
    })
})