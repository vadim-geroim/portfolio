import React from 'react'
import styles from './Hire.module.css'

const Hire = () => {
  return (
    <div className={styles.hire}>
      <div className={styles.hireTitle}>Would you like to work together ?</div>
      <button className={styles.hireButton}>Hire now</button>
    </div>
  );
}

export default Hire;