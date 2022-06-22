import iconoCerrarModal from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal}) => {

  const handelCerrar = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 300);

  }
  return (
    <div className="modal">
        <div className="cerrar-modal">
          <img src={iconoCerrarModal}
         alt="Icono cerrar"
         onClick={handelCerrar}
          />
        </div>
        <form className={`formulario ${animarModal? 'animar' : 'cerrar'}`}>
          <legend>Nuevo Gasto</legend>
          <div className="campo">
            <label htmlFor="nombre">Nombre Gasto</label>
            <input type="text" 
            id='nombre'
            placeholder='Agrega el nombre del gasto'
            />
          </div>
          <div className="campo">
            <label htmlFor="cantidad">Cantidad Gastada</label>
            <input type="number" 
            id='cantidad'
            min='0'
            placeholder='Agrega la cantidad gastada'
            />
          </div>
          <div className="campo">
            <label htmlFor="categoria">Cantidad Gastada</label>
            <select name="" id="categoria">
              <option value="">-- seleccione --</option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="gastos varios">Gastos varios</option>
              <option value="ocio">Ocio</option>
              <option value="salud">Salud</option>
              <option value="suscripciones">Suscripciones</option>
            </select>
          </div>
          <input type="submit" value="Agregar Gasto"/>
        </form>
    </div>
  );
};

export default Modal;