import { useEffect, useState } from 'react';
import styles from './aboutme.module.scss';
import { Btn3 } from '../btns/btn3/Btn3';

export const AboutMe = () => {
    const [aboutMeItems, setAboutMeItems] = useState([]);

    useEffect(() => {
        fetch('/db/aboutme.json')
            .then((res) => res.json())
            .then((data) => {
                setAboutMeItems(data)
            })
            .catch((err) => console.error('Error downloading aboutMeItems :', err))
    }, []);

    return (
        <div className={styles.aboutme}>
            <p className={styles.aboutme__description}>
                Я — Full Stack Developer, специализирующийся на стеке MERN (MongoDB, Express, React, Node.js). Занимаюсь созданием веб-приложений, начиная от проектирования базы данных и серверной логики до разработки удобного и современного интерфейса. Для меня важно писать чистый, понятный код и создавать быстрые, эффективные решения.
            </p>
            <div className={styles.aboutme__text}>
                {aboutMeItems.map((item, index) => (
                    <p 
                        key={index}
                        className={index % 2 ? styles.aboutme__right : styles.aboutme__left}
                        data-title = {item.title}
                        >
                        {item.text}
                    </p>
                ))}
                <div className={styles.posts__link}>
                    <Btn3 text={'More about me'} url={'/aboutme'}/>
                </div>
            </div>
        </div>
    )
}
