import React from "react";
import '../hojas-estilos/Testimonio.css';

function Testimonio(props){
  return(
    <div className="container">
      <div className='contenedor-testimonio'>
        <img className="imagen-testimonio"
          src={require(`../imagenes/${props.imagen}.png`)}
          alt='Imagen Shawn'
        />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>
            <strong>{props.nombre}</strong> en {props.pais}
          </p>
          <p className='cargo-testimonio'>
            <strong>{props.cargo}</strong> en <strong>{props.empresa}</strong>
          </p>
          <p className='texto-testimonio'>"{props.testimonio}"</p>
        </div>
      </div>
    </div>
    
  );
} 
export default Testimonio;
