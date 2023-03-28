import { Link } from 'react-router-dom';
import './style.scss';
import Logo from '../../assets/logo-white.svg';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className='header'>
      <Link to="/" className='header__logo'>
        <img src={Logo} alt="CodeChella Logo" />
      </Link>
      <div className='header__hamburger-menu' onBlur={() => setMenuOpen(false)}>
        <button className='hamburger-menu__btn' onClick={handleMenuClick}>
          <MenuIcon />
        </button>
        <nav className={`hamburger-menu__content ${menuOpen ? 'open' : ''}`} onMouseDown={(event) => event.preventDefault()}>
          <Link to="/experience">A experiência</Link>
          <Link to="/sectors">Mapa de Setores</Link>
          <Link to="/information">Informações</Link>
          <Link to="/ticket">Ingresso</Link>
        </nav>
      </div>
      <nav className='navmenu'>
        <Link to="/experience">A experiência</Link>
        <Link to="/sectors">Mapa de Setores</Link>
        <Link to="/information">Informações</Link>
        <Link to="/ticket">Ingresso</Link>
      </nav>
    </header>
  );
} 