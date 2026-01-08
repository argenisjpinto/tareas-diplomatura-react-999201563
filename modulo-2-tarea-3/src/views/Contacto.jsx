import { useState } from "react"

const Contacto = () => {
    const [enviado, setEnviado] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setEnviado(true)
    }

    return (
        <main className="contacto-main">
        <h2>Contacto</h2>
        {enviado ? (<p style={{ color: "green", fontSize: "18px" }}>Gracias por escribirnos! Pronto nos comunicaremos contigo!</p>) : (
            <form className="contacto-form" onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" required />

            <button type="submit">Enviar</button>
            </form>
        )}
        </main>
    )
}

export { Contacto }