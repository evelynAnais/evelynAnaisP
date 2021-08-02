import './Home.css';

export default function Home() {
  return(
    <section>
      <div className="arrowSliding">
        <div className='tri-one'></div>
      </div>
      <div className="arrowSliding2">
        <div className="tri-two"></div>
      </div>
      <div className="tri-three"></div>
      <div className="arrowSliding2 absolute">
        <div className="tri-four"></div>
      </div>
      <div className='absolute-intro'>
        <h1>Hello! I am Evelyn</h1>
        <h4>I am a full stack Software Engineer</h4>
      </div>
    </section>
  );
}