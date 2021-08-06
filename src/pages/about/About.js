import { useState } from 'react';
import learningJS from '../../assets/learningJS.jpg';
import outside from '../../assets/outside.jpg';
import rightBefore from '../../assets/rightBefore.jpg';
import withHat from '../../assets/withHat.jpg';
import { dayName, randomWord, synonyms, days } from '../../utils/randomWords';
import { useInterval } from '../../utils/useInterval';
import './About.css';

export default function About() {
  const [change, setChange] = useState('great');
  
  useInterval(() => {
    setChange(randomWord(synonyms));
  }, 3000);

  return(
    <section>
      <div className='tri-three2'></div>
      <div className='container mt-5'>
        <div className='row'>
        <div className='col-sm'>
          <img src={learningJS} className='rounded img-thumbnail' alt='...'/>
        </div>
        <div className='col-sm'>
          <img src={outside} className='rounded img-thumbnail' alt='...'/>
        </div>
        <div className='col-sm'>
          <img src={rightBefore} className='rounded img-thumbnail' alt='...'/>
        </div>
        <div className='col-sm'>
          <img src={withHat} className='rounded img-thumbnail' alt='...'/>
        </div>
        </div>
        <div className='mt-5 mb-5'>
          <h2>Who Am I?</h2>
          <p>
            I believe that the only consistent thing in life is change and I love
            that about the tech world. It is constantly changing! Learning is the
            other thing that is consistent in life! In the tech world there
            is always something new to learn. Basically tech and I get along! Even 
            if at times we have our differences with margins on a "div" or an "s" 
            missing somewhere and I get a 500 server error.
          </p>
          <p>
            I like simplicity and efficiency, I like data! I love to learn! 
            I have liked tech for a very long time! I remember the first 
            computers and phones that I owned. I liked messing with the settings 
            and I still do. I was the person who read the manuals and I am still the
            person who will read a gym contract. I suppose I like to be
            well informed. Tell me what I can and can't do! 
          </p>
          <p>
            The best part about software is that "tell me what I can and can't do" goes
            out the window. Yes, we all follow guidelines to help each other understand,
            which is fantastic. But, what you can do with software is only limited to your 
            imagination! Well, imagination and how much you are willing to learn! 
          </p>
          <p>
            I am a tech nerd, I am about living as sustainably as I can, and I am 
            someone who will always push my understanding. Also, I love spread sheets and now 
            that I can make RESTful APIs, I want to make everything into an API!
          </p>
          <h4>Thanks for reading! Have a <span className='synonym'>{ change }</span> { dayName(days) }!</h4>
        </div>
      </div>
    </section>
  );
}
