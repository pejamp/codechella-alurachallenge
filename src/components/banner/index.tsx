import './style.scss';

interface BannerProps {
  bannerImage: string;
  hashtagCodeChella: boolean;
}

export function Banner({ bannerImage, hashtagCodeChella }: BannerProps) {
  return (
    <section className='banner' style={{ backgroundImage: `url(${bannerImage})` }}>
      <h1 className='banner__text'>Boas-vindas ao</h1>
      { hashtagCodeChella && <span>#CodeChella2023!</span> }
    </section>
  );
}