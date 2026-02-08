import { useEffect, useState } from "react";
import { addTask, updateTask } from "../services/apiFirebase";
import { useAuth } from "../context/AuthContext";

const initialForm = {
  title: "",
  description: "",
  timeAmount: "",
  timeUnit: "horas",
  frequency: "diario",
  category: "trabajo",
  priority: "urgente",
  importance: "importante",
};

const getQuadrant = (priority, importance) => {
  if (priority === "urgente" && importance === "importante") return "Q1";
  if (priority === "no_urgente" && importance === "importante") return "Q2";
  if (priority === "urgente" && importance === "no_importante") return "Q3";
  return "Q4";
};

const TaskForm = ({ onTaskSaved, taskToEdit, clearEdit }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (taskToEdit) {
      setFormData(taskToEdit);
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const quadrant = getQuadrant(formData.priority, formData.importance);

    if (taskToEdit) {
      await updateTask(taskToEdit.id, {
        ...formData,
        quadrant,
      });
    } else {
      await addTask({
        ...formData,
        timeAmount: Number(formData.timeAmount),
        quadrant,
        userId: user.uid,
      });
    }

    setFormData(initialForm);
    onTaskSaved();
    clearEdit();
  };

  return (
    <section>
      <h2>{taskToEdit ? "Editar Tarea" : "Nueva Tarea"}</h2>

      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Nombre de la actividad" value={formData.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Descripción de la actividad" value={formData.description} onChange={handleChange} />

        <input
          type="number"
          name="timeAmount"
          placeholder="Tiempo a dedicar"
          value={formData.timeAmount}
          onChange={handleChange}
          min={1}
          step={1}
          required
        />

        <select name="timeUnit" value={formData.timeUnit} onChange={handleChange}>
          <option value="minutos">Minutos</option>
          <option value="horas">Horas</option>
          <option value="dias">Días</option>
          <option value="semanas">Semanas</option>
        </select>

        <select name="frequency" value={formData.frequency} onChange={handleChange}>
          <option value="diario">Diario</option>
          <option value="semanal">Semanal</option>
          <option value="mensual">Mensual</option>
          <option value="anual">Anual</option>
        </select>

        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="trabajo">Trabajo</option>
          <option value="estudio">Estudio</option>
          <option value="personal">Personal</option>
          <option value="salud">Salud</option>
        </select>

        <select name="priority" value={formData.priority} onChange={handleChange}>
          <option value="urgente">Urgente</option>
          <option value="no_urgente">No urgente</option>
        </select>

        <select name="importance" value={formData.importance} onChange={handleChange}>
          <option value="importante">Importante</option>
          <option value="no_importante">No importante</option>
        </select>

        <button type="submit">
          {taskToEdit ? "Guardar cambios" : "Agregar tarea"}
        </button>

        {taskToEdit && (
          <button type="button" onClick={clearEdit}>
            Cancelar edición
          </button>
        )}
      </form>
    </section>
  );
};

export { TaskForm }