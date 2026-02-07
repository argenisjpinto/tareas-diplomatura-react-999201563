import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const FirebaseCheck = () => {
  const [status, setStatus] = useState("Presioná el botón para verificar Firebase");

  const handleCheckFirebase = async () => {
    try {
      const ref = collection(db, "students");
      await getDocs(ref);
      setStatus("✅ Firebase y Firestore funcionan correctamente");
    } catch (error) {
      console.error(error);
      setStatus("❌ Error al conectar con Firebase");
    }
  };

  return (
    <main className="home-main">
      <h2>Firebase Check</h2>
      <p>{status}</p>
      <div>
        <button className="form-button-firebase" onClick={handleCheckFirebase} style={{ marginTop: "20px" }}>
            Verificar conexión con Firebase
        </button>
      </div>
    </main>
  );
};

export { FirebaseCheck };