import styles from './projects.module.scss';
import { useEffect, useState } from "react";
import { ArrowLink } from "../arrowLink/ArrowLink";
import { Btn2 } from "../btns/btn2/Btn2";
import { useLocation } from 'react-router-dom';

export const Projects = () => {
    const [projects, setProjects] = useState([]);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        fetch('/db/projects.json')
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
            })
            .catch((err) => console.log('Error downloading: ', err))
    }, []);

    const displayedProjets = isHomePage ? projects.slice(-6) : projects;

    return (
        <div className={styles.projects}>
            {displayedProjets.length > 0 ? (
                displayedProjets.map((project) => (
                    <div key={project._id} className={styles.project}>
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
                ))
            ) : (
                <div>No projects</div>
            )}
        </div>
    );
}
