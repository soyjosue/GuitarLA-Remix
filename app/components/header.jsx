import {
  Link,
  useLocation
} from '@remix-run/react';

import Navegacion from './navegacion';

import Logo from '../../public/img/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link 
          to="/"
          className="logo"
        >
          <img 
            src={Logo}
            className="logo"
            alt="imagen logo"
          />
        </Link>

        <Navegacion />
      </div>
    </header>
  )
}

export default Header