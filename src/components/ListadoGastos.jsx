import Gasto from "./Gasto";


const ListadoGastos = ({gastos, setGastoEditar, setGastos, filtro, gastosFiltrados}) => {
  return (
    <div className="listado-gastos contenedor">
        {
          filtro? 
          (
            <>
              <h2>{gastosFiltrados.length? 'Gastos' : 'No hay gastos en esta categoria'}</h2>
              {
                    gastosFiltrados.map( gasto => (
                    <Gasto 
                      key={gasto.id}
                      gasto={gasto}
                      setGastoEditar={setGastoEditar}
                      gastos={gastos}
                      setGastos={setGastos} />
                    ))
              }
            </>
          )
          :
          (
            <>
              <h2>{gastos.length? 'Gastos' : 'Aun no hay gastos'}</h2>
              {
                    gastos.map( gasto => (
                    <Gasto 
                      key={gasto.id}
                      gasto={gasto}
                      setGastoEditar={setGastoEditar}
                      gastos={gastos}
                      setGastos={setGastos}
                    />
                    ))
              }
            </>
          )
        }
    </div>
  );
};

export default ListadoGastos;