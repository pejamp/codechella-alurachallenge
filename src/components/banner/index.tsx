import './style.scss';

interface BannerProps {
  bannerText?: string;
  bannerImage: string;
  hashtagCodeChella?: boolean;
}

export function Banner({ bannerText, bannerImage, hashtagCodeChella }: BannerProps) {
  return (
    <section className='banner'>
      <div className="banner__image" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${bannerImage})` }}></div>
      <h1 className='banner__text'>{bannerText}</h1>
      { hashtagCodeChella && <span>#CodeChella2023!</span> }
    </section>
  );
}