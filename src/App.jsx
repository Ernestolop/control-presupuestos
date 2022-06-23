import { useState, useEffect } from "react";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import Modal from "./components/Modal";
import {generarID} from "./helpers/index"
import iconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [presupuestoValido, setPresupuestoValido] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      handelNuevoGasto()
    };
  }, [gastoEditar])
  


  const handelNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 300);
  };

  const guardarGasto = gasto => {
    if (gasto.id) {
      const gastosActualizados = gastos.map(e => (e.id === gasto.id)? gasto : e);
      setGastos(gastosActualizados);
      return;
    };
    gasto.id = generarID();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);
  };

  return (
    <div className={modal ? 'fijar' : null}>
      <Header 
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      presupuestoValido={presupuestoValido}
      setPresupuestoValido={setPresupuestoValido}
      gastos={gastos}
      />
      {presupuestoValido && 
      (
      <>
        <main>
          <ListadoGastos
          gastos={gastos}
          setGastoEditar={setGastoEditar}
          />
        </main>
        <div className="nuevo-gasto">
          <img src={iconoNuevoGasto} 
          alt="Icono Nuevo Gasto"
          onClick={handelNuevoGasto}
        />
        </div>
      </>)
      }
      {modal &&  
      (<Modal 
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
        gastoEditar={gastoEditar}
        setGastoEditar={setGastoEditar}
      /> )
      }
    </div>
  );
};

export default App;
