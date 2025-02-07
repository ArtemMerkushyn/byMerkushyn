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
            <div className={styles.posts__items}>
                <div className={styles.post}>
                    <div className={styles.post__header}>Programming</div>
                    <div className={styles.post__body}>
                        <h4 className={styles.post__title}>The future of software engineering</h4>
                        <p className={styles.post__text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ex aperiam magnam tempore dignissimos nisi veniam at quo velit debitis sint inventore ullam illo, ad ipsum, animi quibusdam, sed natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ex aperiam magnam tempore dignissimos nisi veniam at quo velit debitis sint inventore ullam illo, ad ipsum, animi quibusdam, sed natus?
                        </p>
                    </div>
                </div>
                <div className={styles.post}>
                    <div className={styles.post__header}>Programming</div>
                    <div className={styles.post__body}>
                        <h4 className={styles.post__title}>The future of software engineering</h4>
                        <p className={styles.post__text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ex aperiam magnam tempore dignissimos nisi veniam at quo velit debitis sint inventore ullam illo, ad ipsum, animi quibusdam, sed natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ex aperiam magnam tempore dignissimos nisi veniam at quo velit debitis sint inventore ullam illo, ad ipsum, animi quibusdam, sed natus?
                        </p>
                    </div>
                </div>
                <div className={styles.post}>
                    <div className={styles.post__header}>Programming</div>
                    <div className={styles.post__body}>
                        <h4 className={styles.post__title}>The future of software engineering</h4>
                        <p className={styles.post__text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ex aperiam magnam tempore dignissimos nisi veniam at quo velit debitis sint inventore ullam illo, ad ipsum, animi quibusdam, sed natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ex aperiam magnam tempore dignissimos nisi veniam at quo velit debitis sint inventore ullam illo, ad ipsum, animi quibusdam, sed natus?
                        </p>
                    </div>
                </div>
                <div className={styles.post}>
                    <div className={styles.post__header}>Programming</div>
                    <div className={styles.post__body}>
                        <h4 className={styles.post__title}>The future of software engineering</h4>
                        <p className={styles.post__text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ex aperiam magnam tempore dignissimos nisi veniam at quo velit debitis sint inventore ullam illo, ad ipsum, animi quibusdam, sed natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ex aperiam magnam tempore dignissimos nisi veniam at quo velit debitis sint inventore ullam illo, ad ipsum, animi quibusdam, sed natus?
                        </p>
                    </div>
                </div>
                <div className={styles.post}>
                    <div className={styles.post__header}>Programming</div>
                    <div className={styles.post__body}>
                        <h4 className={styles.post__title}>The future of software engineering</h4>
                        <p className={styles.post__text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ex aperiam magnam tempore dignissimos nisi veniam at quo velit debitis sint inventore ullam illo, ad ipsum, animi quibusdam, sed natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ex aperiam magnam tempore dignissimos nisi veniam at quo velit debitis sint inventore ullam illo, ad ipsum, animi quibusdam, sed natus?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
