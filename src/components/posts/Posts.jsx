import { useState } from 'react';
import styles from './posts.module.scss';

export const Posts = () => {
    const [activeTopic, setActiveTopic] = useState('All');

    const topics = ['All', 'Programming', 'Sport', 'Other']
    return (
        <div className={styles.posts}>
            <div className={styles.posts__topics}>
                {topics.map((topic) => (
                    <button 
                        key={topic}
                        className={`${styles.posts__topic} ${activeTopic === topic ? styles.active : ''}`}
                        onClick={() => setActiveTopic(topic)}
                    >{topic}</button>
                ))}
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
