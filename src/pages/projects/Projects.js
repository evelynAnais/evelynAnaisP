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
      <ProjectList project={project} />
      {/* <div className='tri-three5'></div>
      <div className='tri-three6'></div> */}
    </section>
    
  );
}