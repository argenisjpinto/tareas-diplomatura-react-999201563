// 1. Definir la clase
class Tarea {
    constructor(id, titulo, completada = false) {
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
        this.ultimoId = 0;
    }

    agregarTarea(titulo, completada = false) {
        this.ultimoId++;
        const tarea = new Tarea(this.ultimoId, titulo, completada);
        this.tareas.push(tarea);
        return tarea;
    }

    listarTareas() {
        console.log("\n📋 Lista de tareas:");
        if (this.tareas.length === 0) {
            console.log("  Todavía no hay tareas cargadas.");
            return;
        }

        this.tareas.forEach(t => {
            const estado = t.completada ? "✅ Completada" : "⏳ Pendiente";
            console.log(`  [${t.id}] ${t.titulo} - ${estado}`);
        });
    }

    buscarPorTitulo(titulo) {
        return this.tareas.find(
            t => t.titulo.toLowerCase() === titulo.toLowerCase()
        );
    }

    listarCompletadas() {
        return this.tareas.filter(t => t.completada);
    }
}

// 2. Simulación asíncrona
function cargarTareas() {
    return new Promise((resolve) => {
        console.log("Cargando tareas iniciales... ⏳");

        setTimeout(() => {
            resolve([
                new Tarea(1, "Repasar clases de Gabriel de JavaScript", true),
                new Tarea(2, "Practicar async/await más", false),
                new Tarea(3, "Subir la tarea a mi repo en github", false)
            ]);
        }, 2000);
    });
}

// Extra (opcional) Uso de Promise.all
function cargarUsuarios() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, nombre: "Ana" },
                { id: 2, nombre: "Luis" }
            ]);
        }, 1000);
    });
}

// 3. Flujo del programa
async function main() {
    try {
        const gestor = new GestorTareas();

        const [tareasIniciales, usuarios] = await Promise.all([
            cargarTareas(),
            cargarUsuarios()
        ]);

        gestor.tareas = tareasIniciales;
        gestor.ultimoId = tareasIniciales.length;

        console.log("\nTareas cargadas correctamente. ✅");
        gestor.listarTareas();

        console.log("\nUsuarios cargados (extra de Promise.all):", usuarios);

        console.log("\n➕ Agregando tarea nueva...");
        const nueva = gestor.agregarTarea("Practicar métodos map / filter / find");
        console.log("Nueva tarea:", nueva);

        gestor.listarTareas();

        console.log("\nTareas completadas:");
        const completadas = gestor.listarCompletadas();
        console.log(completadas.length ? completadas : "No hay tareas completadas todavía.");

        console.log("\nBuscando tarea: 'Subir la tarea al repositorio'");
        const buscada = gestor.buscarPorTitulo("Subir la tarea al repositorio");
        console.log("Resultado:", buscada || "No se encontró la tarea.");

        // Extra (opcional) Uso de map
        const titulos = gestor.tareas.map(t => t.titulo);
        console.log("\nTítulos de todas las tareas:", titulos);

        console.log("\n🏁 Fin del programa.");
    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

main();
