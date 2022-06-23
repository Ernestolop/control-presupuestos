import { useEffect, useState } from 'react';
import iconoCerrarModal from '../img/cerrar.svg'
import Mensaje from './Mensaje';

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar}) => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [editando, setEditando] =useState(false);
  const [id, setId] =useState(false);
  const [fecha, setFecha] =useState(false);
  
  
  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setEditando(true)
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setId(gastoEditar.id)
      setFecha(gastoEditar.fecha)
    };
  }, [])

  const handelCerrar = () => {
    setGastoEditar({});
    setEditando(false)
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 300);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if ([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son obligatorios');
      setTimeout(() => {
        setMensaje('');
      }, 2000);
    } else if(isNaN(cantidad) || cantidad <= 0) {
      setMensaje('Ingrese un gasto válido');
      setTimeout(() => {
        setMensaje('');
      }, 2000);
    } else {
      setMensaje('');
      guardarGasto({nombre, cantidad, categoria, id, fecha});
      handelCerrar();

    };
  };

  return (
    <div className="modal">
        <div className="cerrar-modal">
          <img src={iconoCerrarModal}
         alt="Icono cerrar"
         onClick={handelCerrar}
          />
        </div>
        <form className={`formulario ${animarModal? 'animar' : 'cerrar'}`}
        onSubmit={handleSubmit}
        >
          <legend>{editando? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
          {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
          <div className="campo">
            <label htmlFor="nombre">Nombre Gasto</label>
            <input type="text" 
            id='nombre'
            placeholder='Agrega el nombre del gasto'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            />
          </div>
          <div className="campo">
            <label htmlFor="cantidad">Cantidad Gastada</label>
            <input type="number" 
            id='cantidad'
            min='0'
            placeholder='Agrega la cantidad gastada'
            value={cantidad}
            onChange={e => setCantidad(Number(e.target.value))}
            />
          </div>
          <div className="campo">
            <label htmlFor="categoria">Cantidad Gastada</label>
            <select name="" id="categoria"
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
            >
              <option value="">-- seleccione --</option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="casa">Casa</option>
              <option value="gastos">Gastos varios</option>
              <option value="ocio">Ocio</option>
              <option value="salud">Salud</option>
              <option value="suscripciones">Suscripciones</option>
            </select>
          </div>
          <input type="submit" value={editando? 'Guardar Cambios' : 'Agregar Gasto'}/>
        </form>
    </div>
  );
};

export default Modal;