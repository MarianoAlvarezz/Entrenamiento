var formulario = document.querySelector(".formulario_consulta");
 
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
 
    var nombre = document.querySelector("#nombre").value;
    var edad = document.querySelector("#edad").value;
    var mensaje = document.querySelector("#mensaje_resultado");
 
    if (edad >= 18) {
        mensaje.textContent = "✅ Bienvenido, " + nombre + ", tienes acceso al evento.";
        mensaje.classList.remove("mensaje_error");
        mensaje.classList.add("mensaje_ok");
    } else {
        mensaje.textContent = "❌ Lo sentimos, " + nombre + ", debes ser mayor de edad.";
        mensaje.classList.remove("mensaje_ok");
        mensaje.classList.add("mensaje_error");
    }
});