import './ProjectCard.css'

export default function ProjectCard({ item }) {
  return(
    <div className='container mt-2'>
      <div className='row d-flex justify-content-around task'>
        <div className='card' >
          <a href={item?.live_url} target='_blank' rel='noreferrer'>
          <img src={item?.color_img} className='card-img-top grayscale abstract' alt='...'/>
          </a>
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
                <a href={item?.live_url} className='card-link links' target='_blank' rel='noreferrer'>Live</a>
                <span> || </span>
                {item.code_url && <a href={item?.code_url} className='card-link links' target='_blank' rel='noreferrer'>Frontend Code</a>}              
                {item.api_code_url && <a href={item?.api_code_url} className='card-link links' target='_blank' rel='noreferrer'>Backend Code</a>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 