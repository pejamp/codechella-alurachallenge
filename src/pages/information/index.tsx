import { Banner } from "../../components/banner";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { DefaultPage } from "../../layout-patterns/default-page";
import BannerInfo from '../../assets/images/banner-information.jpg';
import './style.scss';
import { Accordion } from "../../components/accordion";

export function Information() {
  return (
    <DefaultPage>
      <Header />
      <main>
        <Banner bannerImage={BannerInfo} bannerText={"Informações Gerais"} />
        <section className="questions">
          <h2>Perguntas Frequentes:</h2>
          <div className="questions__accordion">
            <Accordion title={"Quais serão as atrações?"} content={'Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. Confira o line-up em detalhes clicando neste link!'} />
            <Accordion title={"Qual é a classificação etária?"} content={''} />
            <Accordion title={"Quais são os setores disponíveis?"} content={''} />
            <Accordion title={"Quais são os itens proibidos?"} content={''} />
            <Accordion title={"Quais são os itens proibidos?"} content={''} />
          </div>
        </section>
      </main>
      <Footer />
    </DefaultPage>
  );
}