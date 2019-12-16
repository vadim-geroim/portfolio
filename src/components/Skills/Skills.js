import React from 'react'
import styles from './Skills.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
  return (
    <div className={styles.skillsWrapper}>
      <div className={styles.skillsContent}>
        <div className={styles.skillTitle}>My skills</div>
        <div className={styles.skills}>
          <Skill />
          <Skill />
          <Skill />
        </div>
      </div>
    </div>
  );
}

export default Skills;