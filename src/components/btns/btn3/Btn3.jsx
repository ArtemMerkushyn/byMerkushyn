import { Link } from 'react-router-dom';
import styles from './btn3.module.scss';

export const Btn3 = ({ text, url }) => {
    return (
        <button className={styles.btn}>
            <Link to={url}>
                {text}
            </Link>
        </button>
    );
}
