import React from 'react'
import styles from './Contacts.module.css'

const Contacts = () => {
  return (
    <div className={styles.contactsWrapper}>
      <div className={styles.contactsContent}>
        <div className={styles.contactsTitle}>Contacts</div>
        <div className={styles.contactsForm}>
          <form>
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="E-mail"></input>
            <textarea placeholder="Your message"></textarea>
          </form>
        </div>
        <input type="submit" value="Submit" />
      </div>
    </div>
  );
};

export default Contacts;