import { useEffect, useState } from 'react';
import { getProject } from '../../utils/api';
import Loading from '../../components/Loading';
import ProjectList from './ProjectList';
import './Projects.css';

export default function Projects() {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(false);

  function projects() {
    setLoading(true);
    getProject().then((res) => {
      setProject(res.data)
      setLoading(false);
    });
  }
  useEffect(projects, []);

  return(
    <section>
      <div className='container'>
        <div className='row d-flex'>
          <hr className='hr'/>
          <hr className='hr-black'/>
          <h2 className='mb-4'>Projects</h2>
        </div>
      </div>
      <ProjectList project={project} />
      {loading && <Loading />}
      <div className='d-flex flex-column justify-content-center align-items-center py-4'>
        <div className='card border-0 bg-transparent projectSize'>
          <div className='card-body px-0 py-0'>
            <blockquote className='blockquote'>
              <hr/>
              <footer className='blockquote-footer'>Portfolio Tech Stack 
                <cite title='Source Title'> <br/>Javascript, Express, PostgreSQL, Node.js, Knex, React, HTML5, CSS3, Bootstrap
                </cite>
                <hr/>
              </footer>
            </blockquote>
          </div>
        </div>  
      </div>
    </section>
  );
}