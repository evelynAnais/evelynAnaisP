import './Home.css';

export default function Home() {
  return(
    <section>
      <div className="arrowSliding">
        <div className='tri-one'></div>
      </div>
      
      <div class="arrow-down"></div>
      <div class="arrow-left"></div>
      <div class="arrow-right"></div>

      <div id="arrowAnim">
        <div className="arrowSliding">
          <div className="arrow"></div>
        </div>
        <div className="arrowSliding delay1">
          <div className="arrow"></div>
        </div>
        <div className="arrowSliding delay2">
          <div className="arrow"></div>
        </div>
        <div className="arrowSliding delay3">
          <div className="arrow"></div>
        </div>
      </div>

    </section>
  );
}