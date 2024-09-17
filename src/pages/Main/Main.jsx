import { Btn1 } from '../../components/btns/btn1/Btn1.jsx';
import { Contacts } from '../../components/contacts/Contacts.jsx';
import styles from './main.module.scss';

export const Main = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__container}>
                <div className={styles.hero__content}>
                    <span>Hi, I'm</span>
                    <h1>Artem<br/>Merkushyn</h1>
                    <p>Full stack developer, developing web applications from idea to implementation</p>
                </div>
                <Btn1 text={'Take a look at Github'} url={'https://github.com/ArtemMerkushyn'}/>
                <Contacts/>
            </div>
            <img className={styles.hero__img1} src="/img/hero/hero1.png" alt="hero" />
            <img className={styles.hero__img2} src="/img/hero/hero2.png" alt="hero" />
        </section>
    );
}
