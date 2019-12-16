import React from 'react'
import styles from './Projects.module.css'
import Project from "./Project/Project";

const Projects = () => {
  return (
    <div className={styles.projectsWrapper}>
      <div className={styles.projectsContent}>
        <div className={styles.projectsTitle}>My projects</div>
        <div className={styles.projects}>
          <Project/>
          <Project/>
          <Project/>
          <Project/>
        </div>
      </div>
    </div>
  );
};

export default Projects;

