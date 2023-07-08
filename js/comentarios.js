document
  .getElementById("form-comentario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var mensaje = document.getElementById("mensaje").value;

    // Crear el elemento de comentario
    var comentario = document.createElement("div");
    comentario.classList.add("comentario");
    comentario.innerHTML = "<strong>" + nombre + ":</strong> " + mensaje;

    // Agregar el comentario a la lista de comentarios
    var comentariosLista = document.getElementById("comentarios-lista");
    comentariosLista.appendChild(comentario);

    // Limpiar el formulario
    document.getElementById("nombre").value = "";
    document.getElementById("mensaje").value = "";
  });
