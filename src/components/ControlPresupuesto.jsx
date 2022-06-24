import { useState,useEffect} from 'react'
import {formatearCantidad} from '../helpers/index'

import  {  CircularProgressbar, buildStyles }  from  '@rhazegh/react-circular-progressbar'; 
import  '@rhazegh/react-circular-progressbar/dist/styles.css' ;

const ControlPresupuesto = ({setPresupuesto, presupuesto, gastos, setGastos, setPresupuestoValido}) => {

  const [disponible, setDisponible] = useState(presupuesto);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
    const totalDisponible = presupuesto - totalGastado;
    const percent = ((totalGastado/presupuesto)*100).toFixed(2);
    setGastado(totalGastado);
    setDisponible(totalDisponible);
    setTimeout(() => {
      setPorcentaje(percent);
    }, 1000);
  }, [gastos])

  const handleResetApp = () => {
    const confirmar = confirm('Deseas reiniciar la aplicacion? se perderan todos los datos') 
    if (confirmar) {
      setPresupuesto(0);
      setGastos([]);
      setPresupuestoValido(false);
    }
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
        < CircularProgressbar value={porcentaje}
        styles={buildStyles({
          pathColor : porcentaje > 100? '#dc2626' : '#3b82f6',
          textColor : porcentaje > 100? '#dc2626' : '#3b82f6',
          trailColor : '#f5f5f5',
        })}
        text={`${porcentaje}% Gastado`}
        / > 
        </div>
        <div className="contenido-presupuesto">
            <button className='reset-app' type='button' onClick={handleResetApp}>Reiniciar App</button>
            <p><span>Presupuesto : </span> {formatearCantidad(presupuesto)}</p>
            <p  className={disponible < 0 ? 'negativo' : undefined }><span>Disponible : </span> {formatearCantidad(disponible)}</p>
            <p><span>Gastado : </span> {formatearCantidad(gastado)}</p>
        </div>

    </div>
  );
};

export default ControlPresupuesto;