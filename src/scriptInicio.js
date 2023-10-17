
function cargarInicio() {
    const parrafo = document.getElementById("bienvenida");
    const archivo = "contenido.txt";

    const xhr = new XMLHttpRequest();
    xhr.open("GET", archivo, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            parrafo.textContent = xhr.responseText;
        } else {
            parrafo.textContent = "Error al cargar el archivo.";
            console.error("Error al cargar el archivo:", xhr.statusText);
        }
    };

    xhr.send();
};
    

cargarInicio();
