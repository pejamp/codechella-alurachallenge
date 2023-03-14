import { Banner } from '../../components/banner';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import BannerExperience from '../../assets/images/banner-experience.jpg'
import FirstSectionExperience from '../../assets/images/image1-experience.jpg'
import SecondSectionExperience from '../../assets/images/image2-experience.jpg'
import ThirdSectionExperience from '../../assets/images/image3-experience.jpg'
import './style.scss';
import { ExperienceSection } from '../../layout-patterns/experience-section';

export function Experience() {
  return (
    <div className="experience-container">
      <Header />
      <main>
        <Banner bannerText='A Experiência' bannerImage={BannerExperience} />
        <div className='experience-sections'>
          <ExperienceSection image={FirstSectionExperience} title={'Acessibilidade e Inclusão'} text={'Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!'} />
          <ExperienceSection image={SecondSectionExperience} title={'Sustentabilidade'} text={'Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.'} />
          <ExperienceSection image={ThirdSectionExperience} title={'Atrações'} text={'Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!'} />
        </div>
      </main>
      <Footer />
    </div>
  )
}