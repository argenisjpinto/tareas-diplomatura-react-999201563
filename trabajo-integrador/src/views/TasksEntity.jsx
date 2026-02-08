import { useEffect, useState } from "react";
import { getTasksByUser, deleteTask } from "../services/apiFirebase";
import { useAuth } from "../context/AuthContext";
import { TaskForm } from "../components/TaskForm";
import { TaskCard } from "../components/TaskCard";
import "../styles/Tasks.css";

const groupByQuadrant = (tasks) => ({
  Q1: tasks.filter(t => t.quadrant === "Q1"),
  Q2: tasks.filter(t => t.quadrant === "Q2"),
  Q3: tasks.filter(t => t.quadrant === "Q3"),
  Q4: tasks.filter(t => t.quadrant === "Q4"),
});

const TasksEntity = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const loadTasks = async () => {
    const data = await getTasksByUser(user.uid);
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const quadrants = groupByQuadrant(tasks);

  return (
    <>
      <main className="tasks-page">
        <h1 className="tasks-title">Gestión de Tareas</h1>

        <section className="task-form">
          <TaskForm
            onTaskSaved={loadTasks}
            taskToEdit={taskToEdit}
            clearEdit={() => setTaskToEdit(null)}
          />
        </section>

        <section className="matrix-grid">

          <div className="matrix-cell Q1">
            <h2>Importante / Urgente (Q1)</h2>
            {quadrants.Q1.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onDelete={handleDelete}
                onEdit={setTaskToEdit}
              />
            ))}
          </div>

          <div className="matrix-cell Q2">
            <h2>Importante / No urgente (Q2)</h2>
            {quadrants.Q2.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onDelete={handleDelete}
                onEdit={setTaskToEdit}
              />
            ))}
          </div>

          <div className="matrix-cell Q3">
            <h2>No importante / Urgente (Q3)</h2>
            {quadrants.Q3.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onDelete={handleDelete}
                onEdit={setTaskToEdit}
              />
            ))}
          </div>

          <div className="matrix-cell Q4">
            <h2>No importante / No urgente (Q4)</h2>
            {quadrants.Q4.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onDelete={handleDelete}
                onEdit={setTaskToEdit}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export { TasksEntity }