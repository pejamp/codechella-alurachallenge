import './style.scss';
import HomeImage from '../../assets/images/home-image.jpg';
import { Banner } from "../../components/banner";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import BannerHomepage from '../../assets/images/banner-homepage.jpg';
import { DatesSection } from '../../layout-patterns/dates-section';
import { LineupDay } from '../../layout-patterns/lineup-day';
import { DefaultPage } from '../../layout-patterns/default-page';
import { lineupSaturday } from '../../data/saturday';
import { lineupSunday } from '../../data/sunday';

export function Home() {
  return (
    <DefaultPage>
      <Header />
      <main className='home-container__content-wrap'>
        <Banner bannerText='Boas-vindas ao' bannerImage={BannerHomepage} hashtagCodeChella />
        <DatesSection />
        <section className='lineup'>
          <h2 className='lineup__title'>/Line-Up/</h2>
          <LineupDay weekday='sábado' day='11/03' attractions={lineupSaturday} />
          <LineupDay weekday='domingo' day='12/03' attractions={lineupSunday} />
        </section>
        <div className='banner-bottom' style={{ backgroundImage: `url(${HomeImage})` }}></div>
      </main>
      <Footer />
    </DefaultPage>
  );
}