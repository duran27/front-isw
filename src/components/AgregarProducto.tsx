// src/components/AgregarProducto.tsx
import React, { useState } from 'react';

const AgregarProducto: React.FC = () => {
  const [idProducto, setIdProducto] = useState('');
  const [nombreProducto, setNombreProducto] = useState('');
  const [stockActual, setStockActual] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const producto = { id_producto: idProducto, nombre_producto: nombreProducto, stock: stockActual };

    try {
      const response = await fetch('http://localhost:5000/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
      });

      if (response.ok) {
        alert('Producto agregado exitosamente');
      } else {
        alert('Error al agregar el producto');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID del Producto:</label>
        <input
          type="text"
          value={idProducto}
          onChange={(e) => setIdProducto(e.target.value)}
        />
      </div>
      <div>
        <label>Nombre del Producto:</label>
        <input
          type="text"
          value={nombreProducto}
          onChange={(e) => setNombreProducto(e.target.value)}
        />
      </div>
      <div>
        <label>Stock Actual:</label>
        <input
          type="number"
          value={stockActual}
          onChange={(e) => setStockActual(Number(e.target.value))}
        />
      </div>
      <button type="submit">Agregar Producto</button>
    </form>
  );
};

export default AgregarProducto;
