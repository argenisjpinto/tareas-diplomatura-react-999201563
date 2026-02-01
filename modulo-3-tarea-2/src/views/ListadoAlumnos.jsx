import React, { useEffect, useRef, useState } from "react";
import { subscribeStudents, addNewStudent, updateStudent, deleteStudent } from "../services/apiFirebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../config/firebase";


const initialForm = { name: "", age: "", course: "", photo: "" };

const ListadoAlumnos = () => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState("");

  const [students, setStudents] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribeAuth();
  }, []);

  const handleLogin = async () => {
    setAuthError("");
    try {
      await signInWithEmailAndPassword(
        auth,
        "prueba.react.utn@diplomatura.com",
        "123456"
      );
    } catch (error) {
      setAuthError(error.message);
    }
  };

const handleLogout = async () => {
  await signOut(auth);
};



  useEffect(() => {
    const unsubscribe = subscribeStudents(setStudents);
    return () => unsubscribe();
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === "age") {
      setFormData(prev => ({ ...prev, age: value === "" ? "" : Number(value) }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData(initialForm);
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.course.trim() || formData.age === "" || Number.isNaN(Number(formData.age))) {
      alert("Completa nombre, curso, edad (numérica) y foto.");
      return;
    }

    setLoading(true);
    try {
      if (editingId) {
        await updateStudent(editingId, {
          name: formData.name.trim(),
          age: Number(formData.age)
        });
        
        await mergeUpdateStudent(editingId, {
          course: formData.course.trim(),
          photo: formData.photo.trim()
        });
      } else {
        await addNewStudent({
          name: formData.name.trim(),
          age: Number(formData.age),
          course: formData.course.trim(),
          photo: formData.photo.trim()
        });
      }
      resetForm();
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (student) => {
    setEditingId(student.id);
    setFormData({
      name: student.name ?? "",
      age: student.age ?? "",
      course: student.course ?? "",
      photo: student.photo ?? ""
    });
    scrollToForm();
  };

  const handleDelete = async (id) => {
    const ok = confirm("¿Seguro que querés eliminar este alumno?");
    if (!ok) return;

    setLoading(true);
    try {
      await deleteStudent(id);
      if (editingId === id) resetForm();
      scrollToForm();
    } finally {
      setLoading(false);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
  };

  return (
    <main className="alumnos-main">
      <section className="alumnos-list">
        <div className="alumnos-header">
          <h2>Listado de Alumnos</h2>
        </div>
        <div className="auth-box">
          {user ? (
            <>
              <p>Sesión iniciada como <strong>{user.email}</strong></p>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </>
          ) : (
            <>
              <p>No autenticado</p>
              <button onClick={handleLogin}>Iniciar sesión</button>
              {authError && <p className="auth-error">{authError}</p>}
            </>
          )}
        </div>

        <form ref={formRef} className="alumnos-form" onSubmit={handleSubmit}>
          {!user && (<p className="auth-warning">Debes iniciar sesión para agregar, editar o eliminar alumnos.</p> )}
          <input name="name" placeholder="Nombre" value={formData.name} onChange={onChange} required/>
          <input name="age" type="number" placeholder="Edad" value={formData.age} onChange={onChange} min="16" max="120" required/>
          <input name="course" placeholder="Curso" value={formData.course} onChange={onChange} required/>
          <input name="photo" placeholder="URL de la foto" value={formData.photo} onChange={onChange} required/>
          <div className="form-buttons">
            <button type="submit" disabled={!user || loading}>
                {editingId ? "Guardar cambios" : "Agregar alumno"}
            </button>

            {(editingId || formData.name || formData.course || formData.age !== "" || formData.photo !== "") && (
                <button type="button" onClick={resetForm} disabled={loading} className="btn-secondary">
                Limpiar
                </button>
            )}
            </div>
        </form>

        <div className="students-grid">
          {students.length === 0 ? (
            <p style={{ opacity: 0.8 }}>
              No hay alumnos todavía? Agrega uno con el formulario.
            </p>
          ) : (
            students.map((s) => (
              <article className="student-card" key={s.id}>
                <img src={s.photo || "https://via.placeholder.com/300?text=Sin+foto"} alt={`Foto de ${s.name}`} className="card-image"/>
                <h3 className="card-name">{s.name}</h3>
                <p className="card-meta">Edad: <b>{s.age}</b></p>
                <p className="card-meta">Curso: <b>{s.course}</b></p>
                <p className="card-id">ID: {s.id}</p>

                <div className="card-buttons">
                  <button onClick={() => handleEdit(s)} disabled={!user || loading}>
                    Editar
                  </button>
                  <button onClick={() => handleDelete(s.id)} disabled={!user || loading}>
                    Eliminar
                  </button>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
};

export { ListadoAlumnos };