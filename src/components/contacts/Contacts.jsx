import Icons from '../Icons/Icons';
import { BsTelegram } from 'react-icons/bs';
import styles from './contacts.module.scss';

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <a href="https://t.me/some_guy13" target="_blank" rel="noopener noreferrer">
        <BsTelegram/>
      </a>
      <a href="https://www.instagram.com/mer_kush" target="_blank" rel="noopener noreferrer">
        <Icons icon={'instagram'}/>
      </a>
      <a href="mailto:merkushyndev13@gmail.com" target="_blank" rel="noopener noreferrer">
        <Icons icon={'mail'}/>
      </a>
    </div>
  );
}
