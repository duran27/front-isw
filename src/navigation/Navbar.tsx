import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importa el archivo de estilos CSS de la Navbar


const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>

        <li>
          <Link to="/agregar-producto">Ingresar nuevo Producto</Link>
        </li>
        <li>
          <Link to="/actualizar-stock">Actualizar stock</Link>
        </li>

        <li>
          <Link to="/consultar-stock">Consultar stock</Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
