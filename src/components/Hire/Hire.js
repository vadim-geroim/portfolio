import React from 'react'
import styles from './Hire.module.css'

const Hire = () => {
  return (
    <div className={styles.hireWrapper}>
      <div className={styles.hireContent}>
        <div className={styles.hireTitle}>Would you like to work together ?</div>
        <button className={styles.hireButton}>Hire now</button>
      </div>
    </div>
  );
};

export default Hire;