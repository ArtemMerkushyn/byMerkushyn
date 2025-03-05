import { Btn1 } from '../../components/btns/btn1/Btn1.jsx';
import { Contacts } from '../../components/contacts/Contacts.jsx';
import Icons from '../../components/Icons/Icons.jsx';
import { FaHtml5, FaCss3Alt, FaReact, FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { Title } from '../../components/title/Title.jsx';
import { Posts } from '../../components/posts/Posts.jsx';
import { Btn3 } from '../../components/btns/btn3/Btn3.jsx';
import { Projects } from '../../components/projects/Projects.jsx';
import styles from './main.module.scss';
import { AboutMe } from '../../components/aboutme/AboutMe.jsx';

export const Main = () => {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.hero__container}>
                    <div className={styles.hero__content}>
                        <span>Hi, I'm</span>
                        <h1>Artem<br/>Merkushyn</h1>
                        <p>Machine Learning Engineer, training algorithms to make the world smarter tomorrow.</p>
                    </div>
                    <Btn1 text={'Take a look at GitHub'} url={'https://github.com/ArtemMerkushyn'}/>
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

            <div className={styles.container}>
                <section className={styles.aboutme}>
                    <Title text={'About me'} align={'center'}/>
                    <AboutMe/>
                    <div className={styles.posts__link}>
                        <Btn3 text={'More about me'} url={'/aboutme'}/>
                    </div>
                </section>
            </div>

            <div className={styles.container}>
                <section className={styles.projects}>
                    <Title text={'Projects'} align={'center'}/>
                    <Projects/>
                    <div className={styles.projects__link}>
                            <Btn3 text={'More pojects'} url={'projects'}/>
                    </div>
                </section>
            </div>

            <div className={styles.container}>
                <section className={styles.skills}>
                    <Title text={'Skills'} align={'center'}/>
                    <div className={styles.skills__container}>
                        <div className={styles.skills__image}>
                            <p className={styles.skills__quote}>
                                Technology is the bridge between an idea and a finished product, and I strive to build it reliably.
                            </p>
                            <img src="/img/skills/Astronaut.png" alt="astronaut" />
                        </div>
                        <ul className={styles.skills__items}>
                            <li className={styles.skills__item}>
                                <FaHtml5 />
                                <div>
                                    <h5 className={styles.skills__title}>HTML</h5>
                                    <p className={styles.skills__text}>1 year experience</p>
                                </div>
                            </li>
                            <li className={styles.skills__item}>
                                <FaCss3Alt />
                                <div>
                                    <h5 className={styles.skills__title}>CSS</h5>
                                    <p className={styles.skills__text}>1 year experience</p>
                                </div>
                            </li>
                            <li className={styles.skills__item}>
                                <IoLogoJavascript />
                                <div>
                                    <h5 className={styles.skills__title}>JavaScript</h5>
                                    <p className={styles.skills__text}>1 year experience</p>
                                </div>
                            </li>
                            <li className={styles.skills__item}>
                                <SiTypescript />
                                <div>
                                    <h5 className={styles.skills__title}>TypeScript</h5>
                                    <p className={styles.skills__text}>1 year experience</p>
                                </div>
                            </li>
                            <li className={styles.skills__item}>
                                <FaReact />
                                <div>
                                    <h5 className={styles.skills__title}>React</h5>
                                    <p className={styles.skills__text}>1 year experience</p>
                                </div>
                            </li>
                            <li className={styles.skills__item}>
                                <FaNode />
                                <div>
                                    <h5 className={styles.skills__title}>Node.js</h5>
                                    <p className={styles.skills__text}>1 year experience</p>
                                </div>
                            </li>
                            <li className={styles.skills__item}>
                                <SiMongodb />
                                <div>
                                    <h5 className={styles.skills__title}>MongoDB</h5>
                                    <p className={styles.skills__text}>1 year experience</p>
                                </div>
                            </li>
                            <li className={styles.skills__item}>
                                <SiExpress />
                                <div>
                                    <h5 className={styles.skills__title}>Express</h5>
                                    <p className={styles.skills__text}>1 year experience</p>
                                </div>
                            </li>
                            <li className={styles.skills__item}>
                                <RiNextjsFill />
                                <div>
                                    <h5 className={styles.skills__title}>Next.js</h5>
                                    <p className={styles.skills__text}>1 year experience</p>
                                </div>
                            </li>
                        </ul>
                    </div>  
                </section>
            </div>

            <div className={styles.container}>
                <section className={styles.posts}>
                    <Title text={'Blog'} align={'center'}/>
                    <Posts/>
                    <div className={styles.posts__link}>
                        <Btn3 text={'More posts'} url={'/posts'}/>
                    </div>
                </section>
            </div>
        </>
    );
}
