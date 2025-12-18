import './Tarjeta.css';

function Tarjeta({ nombre, profesion, imagen, descripcion }) {
    return (
        <div className="tarjeta">
            <img src={imagen} alt={`Imagen de ${nombre}`} className="tarjeta-imagen" />
            <h2 className="tarjeta-nombre">{nombre}</h2>
            <h3 className="tarjeta-profesion">{profesion}</h3>
            <p className="tarjeta-descripcion">{descripcion}</p>
        </div>
    );
}

export default Tarjeta;