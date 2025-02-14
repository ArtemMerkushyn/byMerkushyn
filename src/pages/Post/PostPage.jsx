import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MdDateRange } from "react-icons/md";
import styles from './postpage.module.scss';

export const PostPage = () => {
    const { _id } = useParams();
    const [ post, setPost ] = useState(null);
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
            fetch(`/db/posts.json`)
                .then(res => res.json())
                .then(data => {
                    const foundPost = data.find(post => post._id === _id);
                    setPost(foundPost);

                    if (foundPost) {
                        // Фильтруем посты с таким же topic (исключая текущий)
                        const filteredPosts = data.filter(p => p.topic === foundPost.topic && p._id !== _id);
                        // Перемешиваем массив и берём 2 случайных поста
                        const shuffled = filteredPosts.sort(() => Math.random() - 0.5);
                        setRecommendations(shuffled.slice(0, 2));
                    }
                })
                .catch(err => console.log('Error loading post: ', err));
    }, [_id]);

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
                    {recommendations.length > 0 ? (
                        recommendations.map((post, index) => (
                            <div key={index}>
                                {post.title}
                            </div>
                        ))
                    ) : ( 
                        <div>No recommendations</div>
                    )}
                </div>
            </section>
        </div>
    );
}
