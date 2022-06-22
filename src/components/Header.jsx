import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = props => {
    const {presupuesto, setPresupuesto, presupuestoValido, setPresupuestoValido} = props;

  return (
    <header>
        <h1>Planificador de gastos</h1>

        {presupuestoValido ? 
        (<ControlPresupuesto
            setPresupuesto={setPresupuesto}
            presupuesto={presupuesto}
        />)
        :
        (<NuevoPresupuesto 
            setPresupuesto={setPresupuesto}
            presupuesto={presupuesto}
            setPresupuestoValido={setPresupuestoValido}
        />)
        }
        
    </header>
  );
};

export default Header;