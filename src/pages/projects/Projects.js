import { useEffect, useState } from 'react';
import { getProject } from '../../utils/api';
import ProjectList from './ProjectList';
import './Projects.css';

export default function Projects() {
  const [project, setProject] = useState([]);
  
  function projects() {
    getProject().then((res) => setProject(res.data));
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
    </section>
    
  );
}