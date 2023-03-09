import './style.scss';
import { Banner } from "../../components/banner";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import BannerHomepage from '../../assets/images/banner-homepage.jpg';

export function Home() {
  return (
    <div className="home-container">
      <Header />
      <main className='home-container__content-wrap'>
        <Banner bannerImage={BannerHomepage} hashtagCodeChella />
      </main>
      <Footer />
    </div>
  );
}