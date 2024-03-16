import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css'

function ProjectList() {
  const [collapseOpen, setCollapseOpen] = useState(false);

  const projects = [
    {
      title: "Cynthia Ugwu Clone",
      githubLink: "https://github.com/a12frin-shagufta/cynthia-ugwu-clone-js",
      imageSrc: "./images/work-5.svg"
    },
    {
      title: "Duo Website",
      githubLink: "https://github.com/a12frin-shagufta/brand-clone-website",
      imageSrc: "./images/work-5.svg"
    },
    {
      title: "Candy Website",
      githubLink: "https://github.com/a12frin-shagufta/React-candy-website",
      imageSrc: "./images/work-5.svg"
    },
    {
      title: "Async Project",
      githubLink: "https://github.com/a12frin-shagufta/async-project",
      imageSrc: "./images/work-5.svg"
    },
    
  ];

  return (
<>    


    
        
        <div className='project'>
        <h1 className='title-heading'>My Work</h1>
        </div>
        <div className="project-wrap">
      
      {projects.map((project, index) => (
        <div className="card" style={{ width: '18rem' }} key={index}>
          
          <img src={project.imageSrc} className="card-img-top" alt="Project" />
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <a href={project.githubLink} className="btn" target="_blank" rel="noopener noreferrer">
              Github
              <img src="./images/gihub.png" alt="Github Logo" className="github" />
            </a>
          </div>
        </div>
      ))}

<p className='toggle'>
        <button
          className="btn"
          type="button"
          onClick={() => setCollapseOpen(!collapseOpen)}
          aria-expanded={collapseOpen}
          aria-controls="collapseWidthExample"
          style={{backgroundColor: "#EED3D9",
          display: "block",
          marginBottom: "6vw",
        }}
        >
          more Projects
        </button>
      </p>

      <div style={{ minHeight: '100px',
    marginBottom: "5px"}}>
        
        <div className={`collapse ${collapseOpen ? 'show' : ''} collapse-horizontal`} id="collapseWidthExample">
          <div className="card card-body" style={{ width: '200px' }}>
          <a href="https://replit.com/@shagufta7572">Replit</a>
         <a href="https://codepen.io/afrin-135">Codepen</a>

          </div>
        </div>
      </div>
   
    </div>
   
</>
  );
}

export default ProjectList;


