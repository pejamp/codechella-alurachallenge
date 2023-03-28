import './style.scss';
import FullLogo from '../../assets/logo-white.svg';
import SmallLogo from '../../assets/brand-symbol-white.svg';
import QRCodeImage from '../../assets/qr-code.png';

interface TicketProps {
  userData: {
    fullName: string,
    ticketType: string,
  };
}

export function TicketQrCode({ userData }: TicketProps) {
  return (
    <div className='ticket-container'>
      <div className='ticket__brand'>
        <img src={FullLogo} alt="CodeChella logo" />
        <img src={SmallLogo} alt="CodeChella logo pequena" />
      </div>
      <div className='ticket__content'>
        <img className='ticket__qrcode' src={QRCodeImage} alt="QR Code" />
        <div className='ticket__info'>
          <h3>{userData.fullName}</h3>
          <span>Ingresso {userData.ticketType}</span>
          <span>Setor Pista</span>
          <span>Data: 11/03</span>
          <span>Local: São Paulo-SP</span>
        </div>
      </div>
    </div>
  );
}