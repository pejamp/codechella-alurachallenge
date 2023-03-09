import './style.scss';
import Logo from '../../assets/logo-white.svg';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Icon } from '@mui/material';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className='header'>
      <a href="#" className='header__logo'>
        <img src={Logo} alt="CodeChella Logo" />
      </a>
      <div className='header__hamburger-menu' onBlur={() => setMenuOpen(false)}>
        <button className='hamburger-menu__btn' onClick={handleMenuClick}>
          <MenuIcon />
        </button>
        <div className={`hamburger-menu__content ${menuOpen ? 'open' : ''}`} onMouseDown={(event) => event.preventDefault()}>
          <a href="#">A experiência</a>
          <a href="#">Mapa de Setores</a>
          <a href="#">Informações</a>
          <a href="#">Ingresso</a>
        </div>
      </div>
    </header>
  );
} 

//<i className="fa-solid fa-bars"></i>