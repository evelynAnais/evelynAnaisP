import './ProjectCard.css'

export default function ProjectCard({ item }) {
  return(
    <div className='container'>
      <div className='row d-flex justify-content-around task'>
        <div className='card' >
          <img src={item?.color_img} className='card-img-top grayscale abstract' alt='...'/>
          <div className='details'>
            <div className='details__inner'>
              <div className='card-body'>
                <h5 className='card-title'>{item?.title}</h5>
                <p className='card-text'>{item?.comment}</p>
              </div>
              <hr/>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>{item?.tech_stack}</li>
              </ul>
              <hr/>
              <div className='card-body'>
                <a href={item?.live_url} className='card-link links' target='_blank'>Live</a>
                <span> || </span>
                <a href={item?.code_url} className='card-link links' target='_blank'>Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 