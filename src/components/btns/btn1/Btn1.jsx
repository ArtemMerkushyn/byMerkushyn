import Icons from '../../Icons/Icons';
import styles from './btn1.module.scss';

export const Btn1 = ({ text, url }) => {
    // rel="noopener noreferrer" - щоб запобігти доступу нової сторінки до вихідної за допомогою window.opener
    return (
        <button className={styles.btn}>
            <a className={styles.btn__link} href={url} target='_blank' rel="noopener noreferrer">
                <Icons icon={'gitHub'}/>
                <span>{text}</span>
            </a>
        </button>
    );
}
