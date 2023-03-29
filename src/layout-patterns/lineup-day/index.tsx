import './style.scss';

type Attraction = {
  id: number;
  type: string;
  name: string;
}

interface LineupDayProps {
  weekday: string;
  day: string;
  attractions: Attraction[];
}

export function LineupDay({ day, weekday, attractions }: LineupDayProps) {
  return (
    <div className='lineup-day'>
      <div className='lineup__date'>
        <h3>{weekday} {'<'}{day}{'>'}</h3>
      </div>
      <div className='lineup__attractions'>
        {attractions.map((attraction) => {
          if (attraction.type == 'first') {
            return (<h3 className='attractions__headliner'>{attraction.name}</h3>)
          } 
          if (attraction.type == 'second') {
            return (<h4 className='attractions__second'>{attraction.name}</h4>)
          } 
          if (attraction.type == 'third') {
            return (<h5 className='attractions__third'>{attraction.name}</h5>)
          } 
          if (attraction.type == 'fourth') {
            return (<h6 className='attractions__fourth'>{attraction.name}</h6>)
          } 
        })}
      </div>
    </div>
  );
}