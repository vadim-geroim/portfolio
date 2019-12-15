import React from 'react'
import styles from "./Skill.module.css";

const Skill = () => {
  return(
    <div className={styles.skill}>
      <div className={styles.skillIcon}>Icon</div>
      <div className={styles.skillInfo}>Info</div>
    </div>
  );
};

export default Skill;