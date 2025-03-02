import { useParams } from 'react-router-dom';
import styles from './project.module.scss';
import { useEffect, useState } from 'react';

export const Project = () => {
    const { _id } = useParams();
    const [ project, setProject ] = useState(null);

    useEffect(() => {
        fetch('/db/projects.json')
            .then((res) => res.json())
            .then((data) => {
                const foundProject = data.find((project) => project._id === _id);
                setProject(foundProject);
            })
            .catch((err) => console.log('Error loading project ', err));
    }, [_id]);

    if (!project) {
        return <div>No project</div>
    }

    return (
        <div className={styles.container}>{project.title}</div>
    );
}
