import './Home.css';

export default function Home() {
  return(
    <section>
      <div className="arrowSliding">
        <div className='tri-one'></div>
      </div>
      <div className="arrowSliding">
        <div className="tri-two"></div>
      </div>
      <div className="tri-three"></div>
      <div className="arrowSliding2 absolute">
        <div className="tri-four"></div>
      </div>
    </section>
  );
}