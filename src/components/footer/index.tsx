import './style.scss';
import Logo from '../../assets/logo-white.svg';

export function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__media'>
        <span className="footer__logo">
          <img src={Logo} alt="CodeChella Logo" />
        </span>
        <div className='social-media'>
          <span>Acesse nossas redes: </span>
          <div className='social-media__icons'>
            <a href="#">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitch"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <p className='footer__developed-by'>
        Desenvolvido por Alura. Projeto fictício sem fins comerciais.
      </p>
    </footer>
  );
}