import React, { useState } from 'react';


function ActualizarStock() {
  const [idProducto, setIdProducto] = useState<string>('');
  const [nuevoStock, setNuevoStock] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [cargando, setCargando] = useState(false);

  const handleEditarStock = async () => {
    setCargando(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:5000/productos/${idProducto}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ stock: nuevoStock }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Error al actualizar el stock');
      } else {
        // Manejar la respuesta exitosa
        console.log('Stock actualizado correctamente');
        // Mostrar un mensaje de éxito al usuario
        setError('Stock actualizado correctamente');
      }
    } catch (error: any) {
      console.error('Error:', error);
      setError('Error de conexión con el servidor');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese el ID del producto"
        value={idProducto}
        onChange={(e) => setIdProducto(e.target.value)}
      />
      <input
        type="number"
        placeholder="Ingrese el nuevo stock"
        value={nuevoStock}
        onChange={(e) => setNuevoStock(Number(e.target.value))}
      />
      <button disabled={cargando} onClick={handleEditarStock}>
        {cargando ? 'Actualizando...' : 'Editar Stock'}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}



export default ActualizarStock;