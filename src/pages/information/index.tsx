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
            <Accordion title={"Qual é a classificação etária?"} content={'A partir de 16 anos, todo mundo pode entrar. De 13 a 15 anos, tem que estar acompanhado dos pais ou responsáveis legais. Menores de 10 anos não podem entrar.'} />
            <Accordion title={"Quais são os setores disponíveis?"} content={"Pista Premium Pista Comum Cadeiras térreo Cadeiras superiores Rampas"} />
            <Accordion title={"Quais são os itens proibidos?"} content={'Garrafas, latas, bebidas, utensílios de armazenagem, embalagens rígidas com tampa, capacetes, cadeiras ou bancos, armas de fogo e armas brancas, objetos pontiagudos, cortantes e/ou perfurantes, correntes e cinturões, fogos de artifício, objetos de vidro, substâncias inflamáveis, cigarro eletrônico, corrosivas e ou tóxicas, revistas, jornais, livros e copo térmico ou similares.'} />
            <Accordion title={"Quem tem direito a meia-entrada?"} content={'De acordo com a Lei Federal, têm direito ao benefício da meia-entrada aqueles que preencherem os requisitos e apresentarem os documentos comprobatórios.'} />
          </div>
        </section>
      </main>
      <Footer />
    </DefaultPage>
  );
}