import { Posts } from '../../components/posts/Posts';
import { Title } from '../../components/title/Title';
import styles from './postspage.module.scss';


export const PostsPage = () => {
    return (
        <div className={styles.container}>
            <section className={styles.posts}>
                <Title text={'Blog'} align={'center'}/>
                <Posts/>
            </section>
        </div>
    )
}
