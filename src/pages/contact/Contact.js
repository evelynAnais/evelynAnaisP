import './Contact.css';

export default function Contact() {
  return(
    <section className='text-center my-4'>
      {/* <div className='arrowSliding3'>
          <div className='tri-one2'></div>
      </div> */}
      <a className='a-contact' href='https://github.com/evelynAnais' target='_blank' rel='noreferrer'>
        <i className='fab fa-github fa-2x'></i>
      </a>
      <a className='a-contact' href='https://twitter.com/evelynAnais44' target='_blank' rel='noreferrer'>
        <i className='fab fa-twitter fa-2x'></i>
      </a>
      <a className='a-contact' href='https://www.linkedin.com/in/evelyn-ploughman/' target='_blank' rel='noreferrer'>
        <i className='fab fa-linkedin-in fa-2x'></i>
      </a>
      <a className='a-contact' href='mailto:evelyn.a.n.d.30@gmail.com' target='_blank' rel='noreferrer'>
        <i className='fas fa-envelope fa-2x'></i>
      </a>
      <hr className='hr'/>
      <hr className='hr-black'/>
    </section>
  );
}