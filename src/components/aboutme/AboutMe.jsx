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

    const displayedAboutMeItems = isHomePage ? aboutMeItems.slice(0, 4) : aboutMeItems;

    return (
        <div className={styles.aboutme}>
            <p className={styles.aboutme__description}>
                Я — Machine Learning Engineer, специализирующийся на создании и обучении моделей машинного обучения. Занимаюсь разработкой алгоритмов, начиная от подготовки данных и выбора модели до оптимизации и внедрения в реальную среду. Для меня важно создавать умные и эффективные решения, которые изменяют мир к лучшему.
            </p>
            <div className={styles.aboutme__text}>
                {displayedAboutMeItems.map((item, index) => (
                    <p 
                        key={index}
                        className={index % 2 ? styles.aboutme__left : styles.aboutme__right}
                        data-title = {item.title}
                        >
                        {item.text}
                    </p>
                ))}
            </div>
        </div>
    )
}
