import { useLoaderData } from '@remix-run/react';

import { getPost } from '~/models/posts.server';

import { formatearFecha } from '~/utils/helpers';

export function meta({data})
{
  if(!data) 
  {
    return {
      title: 'GuitarLA - Entrada no encontrada',
      descripcion: `Guitarras, entrada no encontrada`
    }
  }

  return {
    title: `GuitarLA - ${data.data[0].attributes.titulo}`,
    descripcion: `Guitarras, entrada ${data.data[0].attributes.titulo}`
  }
}
export async function loader ({params})
{
  const { postUrl } = params;
  var post = await getPost(postUrl);
  if(post.data.length === 0) 
  {
    throw new Response('', {
      status: 404,
      statusText: 'Entrada no encontrada'
    })
  }

  return post;
}

const Post = () => {
  var post = useLoaderData();

  const { titulo, contenido, imagen, publishedAt } = post?.data[0]?.attributes;

  return (
    <article className='post mt-3'>
      <img 
        className="imagen" 
        alt={`imagen blog ${titulo}`} 
        src={imagen?.data?.attributes?.url} 
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  )
}

export default Post