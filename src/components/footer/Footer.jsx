import { NavLink } from 'react-router-dom';
import styles from './footer.module.scss';
import { Contacts } from '../contacts/Contacts';
import { Btn1 } from '../btns/btn1/Btn1';

export const Footer = () => {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <div className={styles.footer__top}>
                    <div className={styles.logo}>{`<>Merkushyn'sSolutions</>`}</div>
                    <nav className={`${styles.nav} ''}`}>
                        <ul className={styles.nav__items}>
                            <li className={styles.nav__item}>
                                <NavLink 
                                    className={({ isActive }) => (isActive ? styles.active : undefined)} 
                                    to={'/'}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className={styles.nav__item}>
                                <NavLink 
                                    className={({ isActive }) => (isActive ? styles.active : undefined)}
                                    to={'/projects'}
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li className={styles.nav__item}>
                                <NavLink
                                    className={({ isActive }) => (isActive ? styles.active : undefined)} 
                                    to={'/posts'}
                                >Blog</NavLink>
                            </li>
                            <li className={styles.nav__item}>
                                <NavLink
                                    className={({ isActive }) => (isActive ? styles.active : undefined)} 
                                    to={'/contacts'}
                                >Contacts</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.footer__middle}>
                    <div className={styles.contacts}>
                        <Contacts/>
                        <a className={styles.contacts__phone} href="tel:+380958827306">+380958827306</a>
                    </div>
                    <div className={styles.github}>
                        <Btn1 text={'Take a look at GitHub'} url={'https://github.com/ArtemMerkushyn'}/>
                    </div>
                </div>
                <div className={styles.footer__bottom}>
                    First, there was the Big Bang… and then the first commit
                    <br/>
                    © 2025 — <>Merkushyn'sSolutions</>
                </div>
            </footer>
        </div>
    );
}
