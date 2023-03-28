import './style.scss';
import DateImage from '../../assets/images/date-section-image.jpg';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import { Button } from '../../components/button';

export function DatesSection() {
  return (
    <section className='date-container'>
      <div className='image'>
        <img src={DateImage} alt="Três músicos tocando em um show" />
      </div>
      <div className='description'>
        <h2>
          {'<'} 11 e 12 de Março {'>'} Aluródromo de São Paulo
        </h2>
        <p>
          Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!
        </p>
        <div className="buy-button">
          <Button type='link' href='/form' text='Comprar ingresso!' icon={<LocalActivityIcon />} />
        </div>
      </div>
    </section>
  );
}