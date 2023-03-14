import './style.scss';

interface SectorCardProps {
  image: string;
  title: string;
  text: string;
}

export function SectorCard({ image, title, text }: SectorCardProps) {
  return (
    <div className='sector-card__container'>
      <div className='sector-card__image'>
        <img src={image} alt={""} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}