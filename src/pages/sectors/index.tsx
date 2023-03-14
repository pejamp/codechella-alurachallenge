import { Banner } from '../../components/banner';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { DefaultPage } from '../../layout-patterns/default-page';
import BannerSectors from '../../assets/images/banner-sectors.jpg';
import SectorsMap from '../../assets/images/sectors-map.png';
import './style.scss';
import { SectorCard } from '../../layout-patterns/sector-card';
import FirstCard from '../../assets/images/sector-card1.jpg';
import SecondCard from '../../assets/images/sector-card2.jpg';
import ThirdCard from '../../assets/images/sector-card3.jpg';

export function Sectors() {
  return (
    <DefaultPage>
      <Header />
      <main>
        <Banner bannerImage={BannerSectors} bannerText={'Mapa de Setores'} />
        <section className="stadium">
          <div className='stadium__map'>
            <img src={SectorsMap} alt="Mapa dos setores do estádio" />
          </div>
          <div className='stadium__subtitles'>
            <span>Legenda:</span>
            <ul className='subtitles'>
              <li className='subtitles__premium'>Pista Premium</li>
              <li className='subtitles__common'>Pista Comum</li>
              <li className='subtitles__ground'>Cadeiras térreo</li>
              <li className='subtitles__upper'>Cadeiras superiores</li>
              <li className='subtitles__ramps'>Rampas</li>
            </ul>
          </div>
        </section>
        <section className="details">
          <h2>Mais detalhes sobre os setores:</h2>
          <div className='details__cards'>
            <SectorCard image={FirstCard} title={'Pista'} text={'Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade.'} />
            <SectorCard image={SecondCard} title={'Pista Premium'} text={'Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área.'} />
            <SectorCard image={ThirdCard} title={'Cadeiras'} text={'Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas.'} />
          </div>
        </section>
      </main>
      <Footer />
    </DefaultPage>
  );
}