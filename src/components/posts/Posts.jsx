import { useState } from 'react';
import styles from './posts.module.scss';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Posts = () => {
    const [activeTopic, setActiveTopic] = useState('All');
    const [posts, setPosts] = useState([]);
    const [topics, setTopics] = useState(['All']);

    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        fetch('/db/posts.json') // Загружаем JSON из public
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);

                // Получаем уникальные темы постов
                const uniqueTopics = ['All', ...new Set(data.map(post => post.topic))];
                setTopics(uniqueTopics);
            })
            .catch((err) => console.error('Error downloading posts:', err));
    }, []);

    // Фильтрация постов по выбранной теме
    const filteredPosts = activeTopic === 'All' ? posts : posts.filter(post => post.topic === activeTopic);

    const displayedPosts = isHomePage ? filteredPosts.slice(-6) : filteredPosts;

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
                {displayedPosts.length > 0 ? (
                    displayedPosts.map((post) => (
                        <Link to={`/posts/${post._id}`} key={post._id} className={styles.post} state={{post}}>
                            <div className={styles.post__header}>{post.topic}</div>
                            <div className={styles.post__body}>
                                <h4 className={styles.post__title}>{post.title}</h4>
                                <p className={styles.post__text}>{post.text}</p>
                            </div>
                            <div className={styles.post__date}>{post.date}</div>
                        </Link>
                    ))
                ) : (
                    <p className={styles.noPosts}>No posts</p>
                )}
            </div>
        </div>
    );
}
