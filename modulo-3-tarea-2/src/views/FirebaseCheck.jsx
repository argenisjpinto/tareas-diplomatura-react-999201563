import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const FirebaseCheck = () => {
  const [status, setStatus] = useState("Presioná el botón para verificar Firebase");

  const handleCheckFirebase = async () => {
    setStatus("Verificando conexión...");

    try {
      const ref = collection(db, "test");
      await getDocs(ref);

      console.log("✅ Firebase y Firestore conectados correctamente");
      setStatus("✅ Firebase está correctamente vinculado (Firestore operativo)");
    } catch (error) {
      console.error("❌ Error al conectar con Firebase:", error);
      setStatus("❌ Error al conectar con Firebase. Revisar configuración.");
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