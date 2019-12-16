import React from 'react'
import styles from "./Project.module.css";

const Project = () => {
  return(
    <div className={styles.project}>
      <div className={styles.projectPicture}>
        <button className={styles.viewButton}>View Project</button>
      </div>
      <div className={styles.projectInfo}>
        <div>Project title</div>
        <div>Project description</div>
      </div>
    </div>
  );
};

export default Project;