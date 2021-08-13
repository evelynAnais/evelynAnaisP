import './Loading.css'
import circle from '../assets/circle.svg';

export default function Loading() {
  return(
    <div className='d-flex flex-column justify-content-center align-items-center py-4'>
      <img className='size rotate' src={circle} />
      <h4>Waking up my lazy API, once it gives me my projects I'll shuffle them around!</h4>
      <p>...refresh and projects will reshuffle</p>
    </div>
  );
}