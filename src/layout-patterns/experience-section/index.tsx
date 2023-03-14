import './style.scss';

interface ExperienceProps {
  image: string;
  title: string;
  text: string;
}

export function ExperienceSection({ image, title, text }: ExperienceProps) {
  return (
    <section className="experience-section">
      <div className='section__image'>
        <img src={image} alt="Uma mulher pulando de felicidade" />
      </div>
      <div className='section__content'>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}