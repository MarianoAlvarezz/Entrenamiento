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

class Tarea {
    constructor(id, titulo, completada) {
        this.id = id;
        this.titulo = titulo;
        this.completada = completada;
    }

    toggleEstado() {
        this.completada = !this.completada;
    }
}

class GestorTareas {
    constructor() {
        this.tareas = [];
    }

    agregarTarea(titulo) {
        var nuevaId = this.tareas.length + 1;
        var nueva = new Tarea(nuevaId, titulo, false);
        this.tareas.push(nueva);
    }

    listarTareas() {
        this.tareas.forEach(function(t) {
            console.log(t.id + " - " + t.titulo + " - completada: " + t.completada);
        });
    }

    buscarPorTitulo(titulo) {
        var resultado = this.tareas.find(function(t) {
            return t.titulo === titulo;
        });
        return resultado;
    }

    listarCompletadas() {
        var completadas = this.tareas.filter(function(t) {
            return t.completada === true;
        });
        return completadas;
    }
}

function cargarTareas() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve([
                new Tarea(1, "Hacer ejercicio", true),
                new Tarea(2, "Practicar JS", false),
                new Tarea(3, "Trabajar un rato", true)
            ]);
        }, 2000);
    });
}

var gestor = new GestorTareas();

async function iniciar() {
    var tareasIniciales = await cargarTareas();
    console.log("Tareas cargadas correctamente");

    tareasIniciales.forEach(function(t) {
        gestor.tareas.push(t);
    });

    gestor.listarTareas();

    gestor.agregarTarea("Tomar agua");
    console.log("--- Lista actualizada ---");
    gestor.listarTareas();

    var completadas = gestor.listarCompletadas();
    console.log("--- Tareas completadas ---");
    completadas.forEach(function(t) {
        console.log(t.titulo);
    });

    // extra: map para obtener solo los titulos
    var titulos = gestor.tareas.map(function(t) {
        return t.titulo;
    });
    console.log("Titulos: ", titulos);
}

iniciar();
