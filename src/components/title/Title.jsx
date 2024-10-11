import styles from './title.module.scss';

export const Title = ({ text, align }) => {
    return (
        <h3 className={styles.title} style={{ textAlign: align }}>
            <span>{text}</span>
        </h3>
    );
}