import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerTitle}>Geroim Vadim</div>
        <div className={styles.footerContent}>
          <div className={styles.footerItem}></div>
          <div className={styles.footerItem}></div>
          <div className={styles.footerItem}></div>
          <div className={styles.footerItem}></div>
        </div>
        <div className={styles.footerCopyright}>© 2019 all rights reserved</div>
      </div>
    </div>

  );
}

export default Footer;