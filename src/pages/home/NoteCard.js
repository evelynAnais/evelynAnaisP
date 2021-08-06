export default function NoteCard({ sayings }) {
  let saying;
  if (sayings.length) {
     saying = sayings[Math.floor(Math.random() * sayings.length)]
    }
    
  return(
    <div className='card border-0 bg-transparent'>
      <div className='card-body px-0 py-0'>
        <hr/>
        <blockquote className='blockquote'>
          <p>{saying?.joke || saying?.quote}</p>
          <footer className='blockquote-footer'><cite title='Source Title'>{saying?.who_said}</cite></footer>
        </blockquote>
      </div>
    </div>
  );
}