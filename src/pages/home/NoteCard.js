export default function NoteCard({ note }) {
  const notes = note.map((item, index) => (
    <div key={index} className="card-body">
      <blockquote className="blockquote">
        <p>{item.joke}</p>
        <footer className="blockquote-footer"><cite title="Source Title">{item.who_said}</cite></footer>
      </blockquote>
    </div>
  ))
  return(
    <div className='card border-0'>
      {notes}
    </div>
  );
}