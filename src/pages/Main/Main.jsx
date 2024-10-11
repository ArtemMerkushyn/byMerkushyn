import { Link } from 'react-router-dom';
import { Btn1 } from '../../components/btns/btn1/Btn1.jsx';
import { Btn2 } from '../../components/btns/btn2/Btn2.jsx';
import { Contacts } from '../../components/contacts/Contacts.jsx';
import Icons from '../../components/Icons/Icons.jsx';
import { Title } from '../../components/title/Title.jsx';
import styles from './main.module.scss';

export const Main = () => {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.hero__container}>
                    <div className={styles.hero__content}>
                        <span>Hi, I'm</span>
                        <h1>Artem<br/>Merkushyn</h1>
                        <p>Full stack developer, developing web applications from idea to implementation</p>
                    </div>
                    <Btn1 text={'Take a look at Github'} url={'https://github.com/ArtemMerkushyn'}/>
                    <Contacts/>
                </div>
                <img className={styles.hero__img1} src="/img/hero/hero1.png" alt="hero" />
                <img className={styles.hero__img2} src="/img/hero/hero2.png" alt="hero" />
                <div className={styles.hero__mause}>
                    <Icons icon={'mause'}/>
                    <div className={styles.hero__mausearrov}></div>
                    <div className={styles.hero__mausearrov}></div>
                </div>
            </section>

            <section className={styles.projects}>
                <Title text={'Projects'} align={'center'}/>
                <div className={styles.project}>
                    <div className={styles.project__item}>
                        <h5 className={styles.project__title}>Title</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem porro natus obcaecati a. Id dolorem quos pariatur vel nobis totam nulla accusamus, culpa veritatis earum deserunt aspernatur temporibus dicta, cupiditate laboriosam ex quisquam rerum, est dolore ullam. Nobis, nostrum modi soluta numquam fugit cumque veritatis maiores minus inventore nesciunt illo similique corporis sit minima officiis deserunt obcaecati pariatur animi eligendi atque dolorum. Consequatur ratione est voluptates blanditiis, iste mollitia voluptatibus nemo, voluptatem alias officia ad laboriosam? Quisquam molestiae eos magni, exercitationem aliquam repudiandae veniam, nihil sunt consequuntur dicta ipsum nam eum commodi rerum. Sunt fugiat porro ab ipsum repellat sapiente.
                        </p>
                        <Btn2 text={'visit app website'} url={'https://www.celoxis.com/cassets/img/pmc/project-management.png'}/>
                        <br/>
                        <Link className={styles.project__link} to={'/'}>More info</Link>
                    </div>
                    <div className={styles.project__item}>
                        <img src="https://www.celoxis.com/cassets/img/pmc/project-management.png" alt="img" />
                    </div>
                </div>
            </section>
        </>
    );
}
