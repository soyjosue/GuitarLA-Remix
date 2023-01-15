import Imagen from '../../public/img/nosotros.jpg';

import styles from '~/styles/nosotros.css';

export function meta()
{
  return {
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de música'
  };
}

export function links()
{
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: Imagen,
      as: 'image'
    }
  ];
}

const Nosotros = () => 
{

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={Imagen} alt="imagen sobre nosotros" />

        <div>
          <p>Nunc volutpat lacus non rutrum dapibus. Cras tempus, orci et efficitur consequat, turpis ligula ullamcorper ante, eget ullamcorper nulla risus sit amet metus. Integer facilisis enim efficitur tortor tincidunt fringilla. Curabitur faucibus ipsum arcu, eu lacinia ante eleifend ullamcorper. In quis augue lorem. Proin tortor turpis, imperdiet nec mollis sed, convallis non diam. Nulla facilisi. Suspendisse orci mauris, porta quis pharetra eu, pharetra sed elit. Suspendisse eu justo nec risus vulputate accumsan.</p>
          <p>Nunc volutpat lacus non rutrum dapibus. Cras tempus, orci et efficitur consequat, turpis ligula ullamcorper ante, eget ullamcorper nulla risus sit amet metus. Integer facilisis enim efficitur tortor tincidunt fringilla. Curabitur faucibus ipsum arcu, eu lacinia ante eleifend ullamcorper. In quis augue lorem. Proin tortor turpis, imperdiet nec mollis sed, convallis non diam. Nulla facilisi. Suspendisse orci mauris, porta quis pharetra eu, pharetra sed elit. Suspendisse eu justo nec risus vulputate accumsan.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros;