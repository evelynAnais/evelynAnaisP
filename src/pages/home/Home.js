import { useState, useEffect } from 'react';
import { getJoke, getQuote } from '../../utils/api';
import './Home.css';
import NoteCard from './NoteCard';

export default function Home() {
  const [sayings, setSayings] = useState([]);
  
  function getSayings() {
    Promise.all([getJoke(), getQuote()])
      .then((res) => {
        const [joke, quote] = res
        setSayings([...joke.data, ...quote.data]);
      }) 
  }
  useEffect(getSayings, []);
console.log(sayings)
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
        <hr/>
        <NoteCard sayings={sayings} />
      </div>
    </section>
  );
}