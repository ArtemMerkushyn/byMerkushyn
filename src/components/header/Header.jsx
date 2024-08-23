import { NavLink } from 'react-router-dom';
import styles from './header.module.scss'

export const Header = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logo}>{`<>Merkushyn'sSolutions</>`}</div>
                <nav>
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
                                to={'/x'}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className={styles.nav__item}>
                            <NavLink
                                className={({ isActive }) => (isActive ? styles.active : undefined)} 
                                to={'/xd'}
                            >Tech</NavLink>
                        </li>
                        <li className={styles.nav__item}>
                            <NavLink
                                className={({ isActive }) => (isActive ? styles.active : undefined)} 
                                to={'/xf'}
                            >Blog</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
