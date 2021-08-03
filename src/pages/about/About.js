import './About.css';
import learningJS from '../../assets/learningJS.jpg';
import outside from '../../assets/outside.jpg';
import rightBefore from '../../assets/rightBefore.jpg';
import withHat from '../../assets/withHat.jpg';

export default function About() {
  return(
    <section>
      <div className='tri-three2'></div>
        <div className='container'>
          <div className='row'>
          <div className='col-sm'>
            <img src={learningJS} className="rounded img-thumbnail" alt="..."/>
          </div>
          <div className='col-sm'>
            <img src={outside} className="rounded img-thumbnail" alt="..."/>
          </div>
          <div className='col-sm'>
            <img src={rightBefore} className="rounded img-thumbnail" alt="..."/>
          </div>
          <div className='col-sm'>
            <img src={withHat} className="rounded img-thumbnail" alt="..."/>
            </div>
        </div>
          <div>
            <h2>Who Am I?</h2>
          <p>
            I like simplicity and efficiency, I like data! I love to learn! I have liked tech for a very long time! 
            I remember the first computers and phones that I owned. How far we have come from that! 
          </p>
          </div>

      </div>
      
      
      
    </section>
  );
}
