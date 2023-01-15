import { useLoaderData } from '@remix-run/react';

import Curso from '~/components/curso';
import ListadoGuitarras from '~/components/listado-guitarras';
import ListadoPosts from '~/components/listado-posts';

import { getGuitarras } from '~/models/guitarras.server';
import { getPosts } from '~/models/posts.server';
import { getCurso } from '~/models/curso.server';

import stylesGuitarras from '~/styles/guitarras.css'
import stylesPosts from '~/styles/blog.css'
import stylesCurso from '~/styles/curso.css'

export function meta() {
  return {};
}
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
];
}
export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ]);

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  };
}

const Index = () => {
  var { guitarras, posts, curso } = useLoaderData();
  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras 
          guitarras={guitarras}
        />
      </main>

      <Curso 
        curso={curso.attributes}
      />

      <section className="contenedor">
        <ListadoPosts
          posts={posts}
        />
      </section>
    </>
  )
}

export default Index;