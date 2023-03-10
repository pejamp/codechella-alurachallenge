import './style.scss';

export function LineupDay() {
  return (
    <div className='lineup-day'>
      <div className='lineup__date'>
        <h3>SÁBADO {'<'}11/03{'>'}</h3>
      </div>
      <div className='lineup__attractions'>
        <div className='attractions'>
          <h4 className='attractions__headliner'>System of a DOM</h4>
        </div>
        <div className='attractions'>
          <span className='attractions__second'>Python Maiden</span>
          <span className='attractions__second'>Apollo Client 2001</span>
        </div>
        <div className='attractions'>
          <span className='attractions__second'>Bon Java</span>
          <span className='attractions__second'>NickCallback</span>
        </div>
        <div className='attractions'>
          <span className='attractions__third'>Linkin Promises</span>
          <span className='attractions__third'>Fullstack Fighters</span>
        </div>
        <div className='attractions'>
          <span className='attractions__third'>Papa React</span>
          <span className='attractions__third'>Angular in Chains</span>
        </div>
        <div className='attractions'>
          <span className='attractions__fourth'>Agnostic Front-end</span>
          <span className='attractions__fourth'>SlipkNode</span>
        </div>
        <div className='attractions'>
          <span className='attractions__fourth'>Pink Flutter</span>
          <span className='attractions__fourth'>Kiss</span>
        </div>
      </div>
    </div>
  );
}