import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = props => {
    const {presupuesto, setPresupuesto, setPresupuestoValido} = props;
    const [mensaje, setMensaje] = useState('');


    const handlePresupuesto = e => {
        e.preventDefault();

        if (presupuesto <= 0 || isNaN(presupuesto)) {
            setMensaje('Ingrese un presupuesto válido')
            return;
        };

        setMensaje('');
        setPresupuestoValido(true);

    };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form className="formulario"
        onSubmit={handlePresupuesto}
        >
            <div className="campo">
                <label htmlFor="presupuesto">Definir Presupuesto</label>
                <input type="number" 
                id="presupuesto"
                min='0'
                className="nuevo-presupuesto"
                value={presupuesto}
                onChange={ e => setPresupuesto(Number(e.target.value))}
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