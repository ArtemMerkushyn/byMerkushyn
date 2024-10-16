import { Link } from 'react-router-dom';
import styles from './arrowLink.module.scss';

export const ArrowLink = ({ text, url }) => {
    return (
        <Link className={styles.link} to={url}>{text}</Link>
    );
}
