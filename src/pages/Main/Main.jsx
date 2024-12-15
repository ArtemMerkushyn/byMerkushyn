import { Btn1 } from '../../components/btns/btn1/Btn1.jsx';
import { Btn2 } from '../../components/btns/btn2/Btn2.jsx';
import { Contacts } from '../../components/contacts/Contacts.jsx';
import Icons from '../../components/Icons/Icons.jsx';
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
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
                <section className={styles.projects}>
                        <Title text={'Projects'} align={'center'}/>
                        <div className={styles.projects__items}>
                            {projects.map((project) => (
                            <div key={project.id} className={styles.project}>
                                    <div className={styles.project__item}>
                                        <img src={project.img} alt="img" />
                                    </div>
                                    <div className={styles.project__item}>
                                        <h5 className={styles.project__title}>{project.title}</h5>
                                        <div className={styles.project__links}>
                                            <Btn2 text={'visit app website'} url={project.link}/>
                                            <ArrowLink text={'More info'} url={'https://artemmerkushyn.github.io/furni-shop/#hero'}/>
                                        </div>
                                    </div>
                                </div> 
                            ))}
                        </div>
                </section>
            </div>

            <div className={styles.container}>
                <section className={styles.skills}>
                    <Title text={'Skills'} align={'center'}/>
                    <div className={styles.skills__wrapper}>
                        <div className={styles.skills__items}>
                            <div className={styles.skills__img}>
                                <img src="/img/skills/Astronaut.png" alt="astronaut" />
                            </div>
                            <div className={`${styles.icon} ${styles.icon1}`}><FaHtml5/></div>
                            <div className={`${styles.icon} ${styles.icon2}`}><Icons icon="css" /></div>
                            <div className={`${styles.icon} ${styles.icon3}`}><Icons icon="js" /></div>
                            <div className={`${styles.icon} ${styles.icon4}`}><Icons icon="ts" /></div>
                            <div className={`${styles.icon} ${styles.icon5}`}><SiMongodb /></div>
                            <div className={`${styles.icon} ${styles.icon6}`}>Express</div>
                            <div className={`${styles.icon} ${styles.icon7}`}><FaReact /></div>
                            <div className={`${styles.icon} ${styles.icon8}`}><FaNode/></div>
                        </div>
                        <ul className={styles.skills__text}>
                            <li>
                                Знаю основы HTML, включая семантические элементы и работу с формами, что помогает создавать доступные и правильно структурированные страницы. Также имею опыт работы с CSS и SCSS для стилизации, использую Flexbox и Grid для создания адаптивных и отзывчивых интерфейсов. Работаю с SCSS для упрощения и улучшения структуры стилей, позволяя использовать переменные, миксины и наследование для более гибкой и модульной организации.
                            </li>
                            <br/>
                            <li>
                                JavaScript у меня на базовом уровне: работаю с переменными, типами данных, функциями, циклами и операторами. Знаком с асинхронностью, манипуляцией DOM и обработкой событий. Умею работать с массивами и объектами, использовать методы массивов, а также с JSON. Разбираюсь в объектно-ориентированном программировании и основах хранения данных.
                            </li>
                            <br/>
                            <li>
                                Я хорошо работаю с React, применяя функциональные компоненты и хуки. Умею настраивать маршрутизацию с React Router для создания многостраничных приложений. Использую Redux для управления состоянием и передачи данных между компонентами. Также имею опыт работы с API-запросами, включая получение и отправку данных, а также обработку асинхронных операций.
                            </li>
                            <br/>
                            <li>
                                На серверной стороне использую Node.js и Express.js для разработки RESTful API, настройки маршрутов и работы с middleware. Я знаком с авторизацией через JWT и понимаю основы безопасности приложений, включая работу с CORS и настройку защищенных маршрутов.
                            </li>
                            <br/>
                            <li>
                                Работаю с MongoDB, выполняю CRUD-операции, настраиваю индексы и использую Mongoose для удобного взаимодействия с базой данных, создавая модели и схемы. Это позволяет эффективно управлять данными и работать с большими объемами информации.
                            </li>
                            <br/>
                            <li>
                                Я активно использую Git для контроля версий, работаю с ветками, слияниями и разрешением конфликтов. Это позволяет мне легко работать в команде и управлять проектами на GitHub.
                            </li>
                            <br/>
                            <li>
                                У меня развиты навыки командной работы, коммуникации и критического мышления. Я умею решать проблемы, писать понятный код и адаптироваться к новым технологиям. Эффективно управляю временем, принимаю конструктивную критику и всегда готов помогать коллегам.
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
}
