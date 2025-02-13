import { useLocation, useParams } from 'react-router-dom';
import styles from './postpage.module.scss';
import { useEffect, useState } from 'react';
import { MdDateRange } from "react-icons/md";

export const PostPage = () => {
    const location = useLocation();
    const { _id } = useParams();
    const [ post, setPost ] = useState(location.state?.post || null);

    useEffect(() => {
        if(!post) {
            fetch(`/db/posts.json`)
                .then(res => res.json())
                .then(data => {
                    const foundPost = data.find(post => post._id === _id);
                    setPost(foundPost);
                })
                .catch(err => console.log('Error loading post: ', err));
        }
    }, [_id, post]);

    useEffect(() => {
        if (post) {
            console.log(post.text); // Проверяем исходный текст
            console.log(post.text.split('\n\n')); // Смотрим, правильно ли разбивается
        }
    }, [post]);

    if (!post) {
        return <p>No post</p>;
    }

    return (
        <div className={styles.container}>
            <section className={styles.post}>
                <div className={styles.post__body}>
                    <div className={styles.post__header}>
                        <div className={styles.post__date}>
                            <MdDateRange/><span>{post.date}</span>
                        </div>
                        <h3 className={styles.post__title}>{post.title}</h3>
                        <div className={styles.post__topic}>{post.topic}</div>
                    </div>
                    <div className={styles.post__text}>
                        <p style={{ whiteSpace: 'pre-line' }}>{post.text}</p>
                    </div>
                </div>
                <div className={styles.post__recommendations}>
                    
                </div>
            </section>
        </div>
    );
}
