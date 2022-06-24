import  { 
  LeadingActions , 
  SwipeableList , 
  SwipeableListItem , 
  SwipeAction , 
  TrailingActions , 
}  from  'react-swipeable-list' ; 
import  'react-swipeable-list/dist/styles.css' ;
import {formatearFecha, formatearCantidad} from '../helpers/index'
import ahorroIcono from '../img/icono_ahorro.svg'
import casaIcono from '../img/icono_casa.svg'
import comidaIcono from '../img/icono_comida.svg'
import gastosIcono from '../img/icono_gastos.svg'
import ocioIcono from '../img/icono_ocio.svg'
import saludIcono from '../img/icono_salud.svg'
import suscripcionesIcono from '../img/icono_suscripciones.svg'

const Gasto = ({gasto, setGastoEditar, gastos, setGastos}) => {
  const {nombre, cantidad, categoria, id, fecha} = gasto; 

  const diccionarioIconos = {
    ahorro : ahorroIcono,
    comida : comidaIcono,
    casa : casaIcono,
    gastos : gastosIcono,
    ocio : ocioIcono,
    salud : saludIcono,
    suscripciones : suscripcionesIcono,
  };

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>Editar</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => eliminarGasto(gasto)}>Eliminar</SwipeAction>
    </TrailingActions>
  );

  const eliminarGasto = gasto => {
    const confirmar = confirm('Deseas eliminar este gasto?');
    if (confirmar) {
      const gastosActualizados = gastos.filter(e => e.id !== gasto.id);
      setGastos(gastosActualizados);
    };
  };



  return (
    <SwipeableList>
      <SwipeableListItem
      leadingActions={leadingActions()}
      trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={diccionarioIconos[categoria]} alt="Icono gasto" />
            <div className="descripcion-gasto">
              <p className="categoria">{categoria}</p>
              <p className="nombre-gasto">{nombre}</p>
              <p className="fecha-gasto">Agregado el : <span>{formatearFecha(fecha)}</span></p>
            </div>
          </div>
          <p className='cantidad-gasto'>{formatearCantidad(cantidad)}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;