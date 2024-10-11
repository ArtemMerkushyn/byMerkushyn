import styles from './btn2.module.scss';

export const Btn2 = ({ text, url }) => {
    // rel="noopener noreferrer" - щоб запобігти доступу нової сторінки до вихідної за допомогою window.opener
    return (
        <button className={styles.btn}>
            <a className={styles.btn__link} href={url} target='_blank' rel="noopener noreferrer">
                <span>{text}</span>
            </a>
        </button>
    );
}
