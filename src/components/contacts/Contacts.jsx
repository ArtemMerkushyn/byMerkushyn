import Icons from "../Icons/Icons"
import styles from './contacts.module.scss';

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
        <Icons icon={'whatsapp'}/>
        <Icons icon={'instagram'}/>
        <Icons icon={'mail'}/>
    </div>
  )
}
