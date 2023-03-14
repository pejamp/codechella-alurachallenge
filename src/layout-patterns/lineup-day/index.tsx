import './style.scss';

export function LineupDay() {
  return (
    <div className='lineup-day'>
      <div className='lineup__date'>
        <h3>SÁBADO {'<'}11/03{'>'}</h3>
      </div>
      <div className='lineup__attractions'>
        <h3 className='attractions__headliner'>System of a DOM</h3>
      
        <h4 className='attractions__second'>Python Maiden</h4>
        <h4 className='attractions__second'>Apollo Client 2001</h4>
      
        <h4 className='attractions__second'>Bon Java</h4>
        <h4 className='attractions__second'>NickCallback</h4>
      
        <h5 className='attractions__third'>Linkin Promises</h5>
        <h5 className='attractions__third'>Fullstack Fighters</h5>
    
        <h5 className='attractions__third'>Papa React</h5>
        <h5 className='attractions__third'>Angular in Chains</h5>
    
        <h6 className='attractions__fourth'>Agnostic Front-end</h6>
        <h6 className='attractions__fourth'>SlipkNode</h6>
      
        <h6 className='attractions__fourth'>Pink Flutter</h6>
        <h6 className='attractions__fourth'>Kiss</h6> 
      </div>
    </div>
  );
}