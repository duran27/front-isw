import React, { useState, useEffect } from 'react';

interface Producto {
    id_producto: number;
    nombre_producto: string;
    stock: number;
}

const ConsultarStock = () => {
  const [idProducto, setIdProducto] = useState('');
  const [producto, setProducto] = useState<Producto | null>(null);
  const [error, setError] = useState(null);

  const handleBuscar = async () => {
    try {
      const response = await fetch(`http://localhost:5000/productos/${idProducto}`);
      if (!response.ok) {
        throw new Error('Error al buscar el producto');
      }
      const data = await response.json() as Producto;
      setProducto(data);
      setError(null); // Limpiar el mensaje de error
    } catch (error: any) {
        console.error('Error:', error);
        setError(error.message); // Mostrar el mensaje de error al usuario
    }
  };

  return (
    <div>
      <input
        type="text"
        value={idProducto}
        onChange={(e) => setIdProducto(e.target.value)}
        placeholder="Ingrese el ID del producto"
      />
      <button onClick={handleBuscar}>Buscar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {producto ? (
        <div>
          <p>Nombre: {producto.nombre_producto}</p>
          <p>Stock: {producto.stock}</p>
        </div>
      ) : (
        <p>No se encontró el producto</p>
      )}
    </div>
  );
};

export default ConsultarStock;