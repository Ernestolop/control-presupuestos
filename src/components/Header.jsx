import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({presupuesto, setPresupuesto}) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>
        <NuevoPresupuesto 
            setPresupuesto={setPresupuesto}
            presupuesto={presupuesto}
        />
    </header>
  );
};

export default Header;