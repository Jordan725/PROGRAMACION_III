// Mostrar mensaje después de enviar los datos del formulario
document
  .getElementById("form-contacto")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Realiza aquí el código para enviar el formulario por correo o procesar los datos

    // Muestra el mensaje de "Mensaje enviado"
    document.getElementById("mensaje-enviado").classList.remove("oculto");

    // Limpia el formulario
    document.getElementById("form-contacto").reset();
  });
