import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navigation/Navbar';
import AgregarProducto from './components/AgregarProducto';
import ActualizarStock from './components/ActualizarStock';
import ConsultarStock from './components/ConsultarStock';

const App: React.FC = () => {
  return (
    <div className='App-bg'>
      <Router>
        <div className="App">
          <header>
            <h1>MAVEC</h1>
            <h2>Gestión de Productos</h2>
          </header>
          <Navbar />
          <Routes>
            <Route path="/agregar-producto" element={<AgregarProducto />} />
            <Route path="/actualizar-stock" element={<ActualizarStock />} />
            <Route path="/consultar-stock" element={<ConsultarStock />} />
            {/* Otras rutas */}
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
