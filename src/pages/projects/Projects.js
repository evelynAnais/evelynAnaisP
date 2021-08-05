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
    </section>
    
  );
}