import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <a href="#" className={styles.link}>Home</a>
          <a href="#" className={styles.link}>Skills</a>
          <a href="#" className={styles.link}>Projects</a>
          <a href="#" className={styles.link}>Contacts</a>
        </div>
      </div>
    </div>
  );
}

export default Header;