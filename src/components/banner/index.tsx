import './style.scss';

interface BannerProps {
  bannerText?: string;
  bannerImage: string;
  hashtagCodeChella?: boolean;
}

export function Banner({ bannerText, bannerImage, hashtagCodeChella }: BannerProps) {
  return (
    <section className='banner' style={{ backgroundImage: `url(${bannerImage})` }}>
      <h1 className='banner__text'>{bannerText}</h1>
      { hashtagCodeChella && <span>#CodeChella2023!</span> }
    </section>
  );
}