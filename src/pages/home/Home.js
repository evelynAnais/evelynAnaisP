import './Home.css';

export default function Home() {
  return(
    <section>
      <div className='arrowSliding'>
        <div className='tri-one'></div>
      </div>
      <div className='arrowSliding4'>
        <div className='tri-two'></div>
      </div>
      <div className='tri-three'></div>
      <div className='arrowSliding2 absolute'>
        <div className='tri-four'></div>
      </div>
      <div className='absolute-intro'>
        <h1>Hello, I'm Evelyn!</h1>
        <h4>I'm a full stack Software Engineer</h4>
      </div>
    </section>
  );
}