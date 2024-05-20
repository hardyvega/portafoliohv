//Obtener las referencias del DOM/HTML

const ciudadInput = document.getElementById("ciudad");

const obtenerPronosticoBtn = document.getElementById("obtenerPronostico");

const pronosticoDiv = document.getElementById("pronostico");

//Función que me permite obtener el pronostico

obtenerPronosticoBtn.addEventListener("click", obtenerPronostico);
function obtenerPronostico(){
   const ciudad = ciudadInput.value.trim();

   if (ciudad===""){
    mostrarError("Por favor ingresa una ciudad");
    return;
   }
   //Pega tu llave API acá abajo
   const apiKey = "a2b3b130836df2b29363946fccb90e93";

   const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

   //Realizar una solicitud http utilizando la funcion fetch a la url 

   fetch(url)
    .then(response => response.json())
    .then(data=>{

        mostrarPronostico(data);
    })

    .catch(error=>{
        mostrarError("Error al obtener el pronóstico");
});

}
//MOstrar los datos en el HTML
function mostrarPronostico(data){


    const {name, main, weather}=data;
    const temperatura = main.temp;
    const sensacion = main.feels_like;
    const humedad = main.humidity;
    const descripcion = weather[0].decription;
    const pronosticoHTML = `
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">${name}</h2>
                <p class="card-text">Temperatura: ${temperatura}</p>
                <p class="card-text">Sensación: ${sensacion}</p>
                <p class="card-text">Humedad: ${humedad}</p>
                <p class="card-text">Descripción: ${descripcion}</p>
            </div>
        </div>
    `;
    pronosticoDiv.innerHTML = pronosticoHTML;
}
    function mostrarError(mensaje){
        const errorHTML = `
            <div class="alert alert-danger" role="alert">
                ${mensaje}
            </div>
        `;
        pronosticoDiv.innerHTML = errorHTML;
    }

