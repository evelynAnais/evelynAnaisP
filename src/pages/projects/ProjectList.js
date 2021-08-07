import ProjectCard from './ProjectCard';

export default function ProjectList({ project }) {
  // let projects;
  // if (project.length) {
  //    projects = project[Math.floor(Math.random() * project.length)]
  //   }

  const projectList = project.filter((item) => item.display).map((item, index) => (

    
    <ProjectCard key={index} item={item}/>
  ));

  return(
    <div className='container'>
      <div className='row'>
        <div className='col'>
          {projectList.slice(0, projectList.length/2)}
        </div>
        <div className='col'>
          {projectList.slice(projectList.length/2)}
        </div>
      </div>
      <div className='row d-flex justify-content-around'>
      </div>
    </div>
  );
}