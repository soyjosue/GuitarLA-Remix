import { useState } from 'react';

import { useLoaderData, useOutletContext } from '@remix-run/react';

import { getGuitarra } from '~/models/guitarras.server';

export async function loader({request, params})
{
  const { guitarraUrl } = params;
  var guitarra = await getGuitarra(guitarraUrl);

  if (guitarra.data.length === 0) 
  {
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra no encontrada'
    });
  }

  return guitarra;
}

export function meta({data})
{
  if(!data) 
  {
    return {
      title: 'GuitarLA - Guitarra no encontrada',
      descripcion: `Guitarras, venta de guitarras, guitarra no encontrada`
    }
  }

  return {
    title: `GuitarLA - ${data.data[0].attributes.nombre}`,
    descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
  }
}

const Guitarra = () => {
  const { agregarCarrito } = useOutletContext();
  const [ cantidad, setCantidad ] = useState(0);
  var guitarra = useLoaderData();

  const { nombre, descripcion, imagen, precio, id } = guitarra.data[0].attributes;

  const handleSubmit = (e) => 
  {
    e.preventDefault();

    if(cantidad < 1) 
    {
      alert('Debe seleccionar una cantidad');
      return;
    }

    const guitarraSeleccionada = 
    {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }

    agregarCarrito(guitarraSeleccionada);
  }

  return (
    <div className='guitarra'>
      <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />

      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className='precio'>${precio}</p>

        <form 
          onSubmit={handleSubmit}
          className='formulario'
        >
          <label htmlFor="cantidad">Cantidad</label>
          <select 
            id="cantidad"
            value={cantidad}
            onChange={({target:{value}}) => setCantidad(parseInt(value))}
          >
            <option value="0">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input 
            type="submit"
            value="Agregar al Carrito"
          />
        </form>
      </div>
    </div>
  )
}

export default Guitarra;