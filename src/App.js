import React, { useState } from 'react';
import Cabecera from './components/Cabecera';
import Listado from './components/Listado';


function App() {
  const [totalCantidadProductos,setTotalProductos]=useState(0);
  const nuevaCantidad = () => {setTotalProductos(totalCantidadProductos+ 1);}


  return (
    <div className="App">
      <Cabecera totalCantidadProductos={totalCantidadProductos} />
      <Listado nuevaCantidad={nuevaCantidad}/>
    </div>
  );
}

export default App;
