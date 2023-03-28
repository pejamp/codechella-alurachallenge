import { Banner } from '../../components/banner';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { DefaultPage } from '../../layout-patterns/default-page';
import './style.scss';
import BannerTicket from '../../assets/images/banner-ticket.jpg';
import { TicketQrCode } from '../../components/ticket-QRcode';

export function Ticket() {
  const user = localStorage.getItem('user') || "{}";
  const userFormatted = (JSON.parse(user));

  return (
    <DefaultPage>
      <Header />
      <main>
        <Banner bannerImage={BannerTicket} bannerText={'Seu ingresso está aqui!'} />
        <section className='ticket'>
          <h2>Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h2>
          <TicketQrCode userData={userFormatted} />
        </section>
      </main>
      <Footer />
    </DefaultPage>
  );
}