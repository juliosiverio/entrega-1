
// Simulador de Clínica Odontológica

// Array para almacenar pacientes
const pacientes = [];

// Array para almacenar citas
const citas = [];

// Función para registrar un paciente
function registrarPaciente() {
    let nombre = prompt("Ingrese el nombre del paciente:");
    let edad = parseInt(prompt("Ingrese la edad del paciente:"));
    let telefono = prompt("Ingrese el teléfono del paciente:");
    
    // Verificar si el paciente ya está registrado
    let existe = pacientes.some(paciente => paciente.nombre.toLowerCase() === nombre.toLowerCase());
    if (existe) {
        alert("El paciente ya está registrado.");
        return;
    }
    
    if (nombre && !isNaN(edad) && telefono) {
        let paciente = { nombre, edad, telefono };
        pacientes.push(paciente);
        alert("Paciente registrado con éxito.");
        console.log("Pacientes registrados:", pacientes);
    } else {
        alert("Datos inválidos. Intente de nuevo.");
    }
}

// Función para agendar una cita
function agendarCita() {
    let nombrePaciente = prompt("Ingrese el nombre del paciente para la cita:");
    let fecha = prompt("Ingrese la fecha de la cita (DD/MM/AAAA):");
    let hora = prompt("Ingrese la hora de la cita (HH:MM):");
    
    // Verificar si el paciente está registrado
    let pacienteExiste = pacientes.some(paciente => paciente.nombre.toLowerCase() === nombrePaciente.toLowerCase());
    if (!pacienteExiste) {
        alert("El paciente no está registrado. Regístrelo antes de agendar una cita.");
        return;
    }
    
    // Verificar si ya existe una cita en esa fecha y hora
    let citaExistente = citas.some(cita => cita.fecha === fecha && cita.hora === hora);
    if (citaExistente) {
        alert("Ya hay una cita agendada en esa fecha y hora. Elija otro horario.");
        return;
    }
    
    if (nombrePaciente && fecha && hora) {
        let cita = { nombrePaciente, fecha, hora };
        citas.push(cita);
        alert("Cita agendada con éxito.");
        console.log("Citas agendadas:", citas);
    } else {
        alert("Datos inválidos. Intente de nuevo.");
    }
}

// Menú de opciones
function menu() {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n1. Registrar paciente\n2. Agendar cita\n3. Salir");
        switch(opcion) {
            case "1":
                registrarPaciente();
                break;
            case "2":
                agendarCita();
                break;
            case "3":
                alert("Saliendo del sistema.");
                break;
            default:
                alert("Opción inválida, intente de nuevo.");
        }
    } while (opcion !== "3");
}

// Ejecutar el menú
menu();
