import styles from './posts.module.scss';

export const Posts = () => {
    return (
        <div className={styles.posts}>
            <div className={styles.posts__topics}>
                <button className={styles.posts__topic}>All</button>
                <button className={styles.posts__topic}>Programming</button>
                <button className={styles.posts__topic}>Sport</button>
                <button className={styles.posts__topic}>Other</button>
            </div>
        </div>
    );
}
