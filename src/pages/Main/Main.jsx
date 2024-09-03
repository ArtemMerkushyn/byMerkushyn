import styles from './main.module.scss';

export const Main = () => {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__content}>
                    <span>Hi, I'm</span>
                    <h1>Artem<br/>Merkushyn</h1>
                    <p>Full stack developer developing web applications from idea to implementation</p>
                </div>
            </section>
        </div>
    );
}
