import React from 'react'
import styles from './Summary.module.css'

const Summary = () => {
  return (
    <div className={styles.summary}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <span>Hi there!</span>
          <span>My name is Vadim Geroim</span>
          <span>I'm a full-stack web developer</span>
        </div>
        <div className={styles.photo}>
          <img src="#" alt="Profile image"/>
        </div>
      </div>
    </div>
  );
};

export default Summary;