import { useLocation, useParams } from 'react-router-dom';
import styles from './postpage.module.scss';
import { useEffect, useState } from 'react';

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

    if (!post) {
        return <p>No post</p>;
    }

    return (
        <div className={styles.container}>
            <section className={styles.post}>
                {post.title}
            </section>
        </div>
    );
}
