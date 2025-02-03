import styles from './posts.module.scss';

export const Posts = () => {
    return (
        <div className={styles.posts}>
            <div className={styles.posts__topics}>
                <button className={styles.posts__topic}>programming</button>
                <button className={styles.posts__topic}>sport</button>
                <button className={styles.posts__topic}>other</button>
            </div>
        </div>
    );
}
