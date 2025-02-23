import { useEffect, useState } from 'react';
import styles from './aboutme.module.scss';
import { useLocation } from 'react-router-dom';

export const AboutMe = () => {
    const [aboutMeItems, setAboutMeItems] = useState([]);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        fetch('/db/aboutme.json')
            .then((res) => res.json())
            .then((data) => {
                setAboutMeItems(data)
            })
            .catch((err) => console.error('Error downloading aboutMeItems :', err))
    }, []);

    const displayedAboutMeItems = isHomePage ? aboutMeItems.slice(-4) : aboutMeItems;

    return (
        <div className={styles.aboutme}>
            <p className={styles.aboutme__description}>
                Я — Full Stack Developer, специализирующийся на стеке MERN (MongoDB, Express, React, Node.js). Занимаюсь созданием веб-приложений, начиная от проектирования базы данных и серверной логики до разработки удобного и современного интерфейса. Для меня важно писать чистый, понятный код и создавать быстрые, эффективные решения.
            </p>
            <div className={styles.aboutme__text}>
                {displayedAboutMeItems.map((item, index) => (
                    <p 
                        key={index}
                        className={index % 2 ? styles.aboutme__right : styles.aboutme__left}
                        data-title = {item.title}
                        >
                        {item.text}
                    </p>
                ))}
            </div>
        </div>
    )
}
