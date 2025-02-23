import { Btn1 } from '../../components/btns/btn1/Btn1';
import { Contacts } from '../../components/contacts/Contacts';
import  { AboutMe as AboutMeComponent }  from '../../components/aboutme/AboutMe.jsx';
import styles from './aboutme.module.scss';

export default function AboutMe() {
  return (
    <div className={styles.container}>
        <section className={styles.aboutme}>
            <h3 className={styles.aboutme__title}>Artem <br/> Merkushyn</h3> 
            <Btn1 text={'Take a look at GitHub'} url={'https://github.com/ArtemMerkushyn'}/>
            <Contacts/>
            <a className={styles.aboutme__call} href="tel:+380958827306">+380958827306</a>
            <div className={styles.aboutme__lacation}>Ukraine, Kyiv</div>
            <AboutMeComponent/>
        </section>
    </div>
  );
}
