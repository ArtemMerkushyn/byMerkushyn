import { Btn1 } from '../../components/btns/btn1/Btn1.jsx';
import { Btn2 } from '../../components/btns/btn2/Btn2.jsx';
import { Contacts } from '../../components/contacts/Contacts.jsx';
import Icons from '../../components/Icons/Icons.jsx';
import { Title } from '../../components/title/Title.jsx';
import styles from './main.module.scss';
import { ArrowLink } from '../../components/arrowLink/ArrowLink.jsx';
import projects from '../../db/projects.json';

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
                <div className={styles.projects__items}>
                    {projects.map((project) => (
                       <div key={project.id} className={styles.project}>
                            <div className={styles.project__item}>
                                <h5 className={styles.project__title}>{project.title}</h5>
                                <p>{project.description}</p>
                                <Btn2 text={'visit app website'} url={project.link}/>
                                <br/>
                                <ArrowLink text={'More info'} url={'https://artemmerkushyn.github.io/furni-shop/#hero'}/>
                            </div>
                            <div className={styles.project__item}>
                                <img src="https://www.celoxis.com/cassets/img/pmc/project-management.png" alt="img" />
                            </div>
                        </div> 
                    ))}
                </div>
            </section>
        </>
    );
}
