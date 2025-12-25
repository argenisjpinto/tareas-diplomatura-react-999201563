import { useEffect, useCallback, useMemo, useRef, useState } from "react";
import "./App.css";
import { useLocalStorage } from "./hooks/useLocalStorage";

const tasksMock = [
  { id: "1", title: "Tarea 1: Antes de React", completed: true },
  { id: "2", title: "Tarea 2: JavaScript esencial", completed: true }, 
  { id: "3", title: "Tarea 3: Javascript avanzado", completed: true },
  { id: "4", title: "Tarea 4: React inicial", completed: false },
];

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", tasksMock);  
  const [inputTask, setInputTask] = useState('');
  const [searchText, setSearchText] = useState('');
  
  const handleInputTaskChange = useCallback((e) => setInputTask(e.target.value), []);
  const handleSearchChange = useCallback((e) => {setSearchText(e.target.value)}, []);

  const handleAddTask = useCallback(() => {
    if (inputTask.trim() === '') return;

    const newTask = {
      id: Date.now().toString(),
      title: inputTask,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setInputTask('');
  }, [inputTask, setTasks]);

  const handleToggleTask = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, [setTasks]);

  const handleDeleteTask = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, [setTasks]);

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const tasksFiltered = useMemo(() => {
    console.log("Filtrando tareas...");
    return tasks.filter((task) =>
      task.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [tasks, searchText]);

  const completedTasksCount = useMemo(() => {
    return tasks.filter((task) => task.completed).length;
  }, [tasks]);

  const pendingTasksCount = useMemo(() => {
    return tasks.filter((task) => !task.completed).length;
  }, [tasks]);

  return (
    <div>
      <header>
        <h1>📝 Lista de tareas de la diplomatura</h1>
      </header>

      <section>
        <div>
          <input ref={inputRef} type="text" placeholder="Escribe una tarea…" value={inputTask}
            onChange={handleInputTaskChange} aria-label="Nueva tarea"/>
          <button onClick={handleAddTask}>Agregar</button>
        </div>
      </section>

      <section>
        <div>
          <input type="text" placeholder="Buscar una tarea…" value={searchText}
            onChange={handleSearchChange} aria-label="Buscar una tarea"/>
        </div>
      </section>

      <section>
        <h2>Tareas</h2>
        <p>Completadas: {completedTasksCount} | Pendientes: {pendingTasksCount}</p><br/>
        <ul>
          {tasksFiltered.map((task) => (
            <li key={task.id} onClick={() => handleToggleTask(task.id)}>{task.completed ? "✅" : "❌"} {task.title}
            <button onClick={(e) => { e.stopPropagation(); handleDeleteTask(task.id)}} aria-label={`Eliminar ${task.title}`}>Eliminar</button></li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        &copy; 2025 Gestión de Tareas · Desarrollado por Argenis Pinto. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;