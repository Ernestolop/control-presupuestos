import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
    const [mensaje, setMensaje] = useState('');

    const handlePresupuesto = e => {
        e.preventDefault();
        if (Number(presupuesto) <= 0 || isNaN(Number(presupuesto))) {
            setMensaje('Ingrese un presupuesto válido')
        } else {
            setMensaje('')
        }
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form className="formulario"
        onSubmit={handlePresupuesto}
        >
            <div className="campo">
                <label htmlFor="">Definir Presupuesto</label>
                <input type="number" 
                min='0'
                className="nuevo-presupuesto"
                value={presupuesto}
                onChange={ e => setPresupuesto(e.target.value)}
                />
            </div>
            <input type="submit" 
            value="Añadir"
            />
            {mensaje && <Mensaje tipo={'error'}>{mensaje}</Mensaje>}
        </form>
    </div>
  );
};

export default NuevoPresupuesto;