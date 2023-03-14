import { Banner } from '../../components/banner';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { DefaultPage } from '../../layout-patterns/default-page';
import BannerSectors from '../../assets/images/banner-sectors.jpg';
import SectorsMap from '../../assets/images/sectors-map.png';
import './style.scss';

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
      </main>
      <Footer />
    </DefaultPage>
  );
}