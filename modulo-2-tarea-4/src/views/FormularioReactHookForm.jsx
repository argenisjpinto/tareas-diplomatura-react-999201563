import { useForm } from 'react-hook-form';
import { useState } from 'react';

const FormularioReactHookForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [focusMsg, setFocusMsg] = useState("");
  const [hoverBtn, setHoverBtn] = useState(false);

  const onSubmit = (data) => {
    alert('Formulario enviado correctamente con React Hook Form');
    console.log("Formulario válido: ", data);
    reset();
  };

  const handleFocus = (e) => {
    setFocusMsg(`Estas editando ${e.target.name}`);
    console.log(`Campo ${e.target.name} enfocado.`);
  };

  const handleBlur = (e) => {
    setFocusMsg(`Saliste del campo ${e.target.name}`);
    console.log(`Campo ${e.target.name} desenfocado.`);
  };

  const handleKeyDownEmail = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      alert("Presionaste Enter en el campo email (React Hook Form)");
      console.log(`Presionaste Enter en el campo ${e.target.name}`);
    }
  };

  const nombreReg = register("nombre", { required: true });
  const emailReg = register("email", { required: true });

  const handleChange = (e, rhfOnChange) => {
    console.log(`Campo ${e.target.name} modificado. Nuevo valor: ${e.target.value}`);
    rhfOnChange(e);
  };


  return (
    <>
    <main className="form-main react-hook-form">
        <h2>Formulario de Eventos con React Hook Form</h2>
        <p className="form-description">Este es un formulario de ejemplo para demostrar el manejo de eventos en con Reaact Hook Form.
          <br />Prueba escribir, enfocar, salir del input, presionar la tecla Enter en el campo <strong>Email</strong> y hacer hover sobre el botón</p>
          {focusMsg && <p className="form-focus-info">{focusMsg}</p>}

          <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input 
            type="text" 
            id="nombre" 
            name='nombre'
            required
            placeholder="Ingresa tu nombre"
            ref={nombreReg.ref}
            onChange={(e) => handleChange(e, nombreReg.onChange)}
            onFocus={handleFocus}
            onBlur={(e) => { nombreReg.onBlur(e); handleBlur(e); }} />
          {errors.nombre && <span>Este campo es requerido</span>}
        </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input 
            type="email" 
            id="email" 
            name='email'
            required
            placeholder="Ingresa tu email"
            ref={emailReg.ref}
            onChange={(e) => handleChange(e, emailReg.onChange)}
            onFocus={handleFocus}
            onBlur={(e) => { emailReg.onBlur(e); handleBlur(e); }}
            onKeyDown={handleKeyDownEmail} />
          {errors.email && <span>Este campo es requerido</span>}
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

export { FormularioReactHookForm };