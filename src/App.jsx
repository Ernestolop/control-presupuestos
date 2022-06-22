import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);

  return (
    <div className="App">
      <Header 
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      />
    </div>
  );
};

export default App;
