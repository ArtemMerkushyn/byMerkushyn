import { NavLink } from 'react-router-dom';
import styles from './header.module.scss'
import { useState } from 'react';

export const Header = () => {
    const [ activeBurgerBtn, setActiveBurgerBtn ] = useState(false);

    const toggleBurgerMenu = () => {
        setActiveBurgerBtn(!activeBurgerBtn);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logo}>{`<>Merkushyn'sSolutions</>`}</div>
                <nav className={`${styles.nav} ${activeBurgerBtn ? styles.active : ''}`}>
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
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className={styles.nav__item}>
                            <NavLink
                                className={({ isActive }) => (isActive ? styles.active : undefined)} 
                                to={'/contacts'}
                            >
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <button
                    className={`${styles.burger__btn} ${activeBurgerBtn ? styles.active : ''}`}
                    onClick={toggleBurgerMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </header>
            <nav className={`${styles.navmenu} ${activeBurgerBtn ? styles.active : ''}`}>
                <ul className={styles.navmenu__items}>
                    <li className={styles.navmenu__item}>
                        <NavLink 
                            className={({ isActive }) => (isActive ? styles.active : undefined)} 
                            to={'/'}
                            onClick={() => setActiveBurgerBtn(false)}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className={styles.navmenu__item}>
                        <NavLink 
                            className={({ isActive }) => (isActive ? styles.active : undefined)}
                            to={'/projects'}
                            onClick={() => setActiveBurgerBtn(false)}
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li className={styles.navmenu__item}>
                        <NavLink
                            className={({ isActive }) => (isActive ? styles.active : undefined)} 
                            to={'/posts'}
                            onClick={() => setActiveBurgerBtn(false)}
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li className={styles.navmenu__item}>
                        <NavLink
                            className={({ isActive }) => (isActive ? styles.active : undefined)} 
                            to={'/contacts'}
                            onClick={() => setActiveBurgerBtn(false)}
                        >
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
