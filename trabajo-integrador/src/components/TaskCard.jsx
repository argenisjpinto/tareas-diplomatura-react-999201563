const TaskCard = ({ task, onDelete, onEdit }) => {
  return (
    <article className={`task-card ${task.quadrant}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>

      <span className="quadrant-label">{task.quadrant}</span>

      <ul>
        <li>Tiempo: {task.timeAmount} {task.timeUnit}</li>
        <li>Frecuencia: {task.frequency}</li>
        <li>Categoría: {task.category}</li>
        <li>Prioridad: {task.priority}</li>
        <li>Importancia: {task.importance}</li>
      </ul>

      <div className="task-actions">
        <button onClick={() => onEdit(task)}>Editar</button>
        <button onClick={() => onDelete(task.id)}>Eliminar</button>
      </div>
    </article>
  );
};

export { TaskCard };