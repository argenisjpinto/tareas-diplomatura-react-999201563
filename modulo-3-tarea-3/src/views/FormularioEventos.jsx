import { useState } from "react";

const FormularioEventos = () => {
  const [form, setForm] = useState({nombre: '', email: ''})
  const [focus, setFocus] = useState('')
  const [hoverBtn, setHoverBtn] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm((prev) => ({...prev, [name]: value}))
    console.log(`Campo ${name} modificado. Nuevo valor: ${value}`)
  }

  const handleFocus = (e) => {
    setFocus(`Estas editando ${e.target.name}`)
    console.log(`Campo ${e.target.name} enfocado.`)
  }

  const handleBlur = (e) => {
    setFocus(`Saliste del campo ${e.target.name}`)
    console.log(`Campo ${e.target.name} desenfocado.`)
  }

  const handleKeyDownNombre = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      alert('Presionaste Enter en el campo nombre')
      console.log(`Presionaste Enter en el campo ${e.target.name}`)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Formulario enviado correctamente')
    console.log('Formulario enviado con datos:', form)
  }

  return (
    <>
      <main className="form-main">
        <h2>Formulario de Eventos</h2>
        <p className="form-description">Este es un formulario de ejemplo para demostrar el manejo de eventos en React.
          <br />Prueba escribir, enfocar, salir del input, presionar la tecla Enter en el campo <strong>Nombre</strong>  y hacer hover sobre el botón</p>
        {focus && <p className="form-focus-info">{focus}</p>}

        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input className="form-input"
              type="text"
              id="nombre"
              name="nombre"
              required
              value={form.nombre}
              placeholder="Ingresa tu nombre"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={handleKeyDownNombre}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input className="form-input"
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              placeholder="Ingresa tu email"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <button className={`form-button ${hoverBtn ? 'hover' : ''}`} 
              type="submit" 
              onMouseEnter={() => setHoverBtn(true)} 
              onMouseLeave={() => setHoverBtn(false)}>
              Enviar
            </button>
          </div>
        </form>
      </main>
    </>
  )
}

export { FormularioEventos };