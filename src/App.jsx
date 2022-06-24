import { useState, useEffect } from "react";
import Filtros from "./components/Filtros";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import Modal from "./components/Modal";
import {generarID} from "./helpers/index"
import iconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) ?? 0);
  const [presupuestoValido, setPresupuestoValido] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState(JSON.parse(localStorage.getItem('gastos')) ?? []);
  const [gastoEditar, setGastoEditar] = useState({});
  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      handelNuevoGasto()
    };
  }, [gastoEditar])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto);
  }, [presupuesto]);

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos));
  }, [gastos]);

  useEffect(() => {
    if (presupuesto > 0 ) {
      setPresupuestoValido(true);
    };
  }, []);
  
  useEffect(() => {
    if (filtro) {
      const gastosFil = gastos.filter(gasto => gasto.categoria === filtro);
      setGastosFiltrados(gastosFil);
    }
  }, [filtro]);
  


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
      setGastos={setGastos}
      />
      {presupuestoValido && 
      (
      <>
        <main>
          <Filtros
          filtro={filtro}
          setFiltro={setFiltro}
          />
          <ListadoGastos
          gastos={gastos}
          setGastoEditar={setGastoEditar}
          setGastos={setGastos}
          filtro={filtro}
          gastosFiltrados={gastosFiltrados}
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
