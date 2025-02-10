import { Projects } from '../../components/projects/Projects';
import { Title } from '../../components/title/Title';
import styles from './projects.module.scss';

export const ProjectsPage = () => {
    return (
      <div className={styles.container}>
        <section className={styles.projects}>
          <Title text={'Projects'} align={'center'}/>
          <Projects/>
        </section>
      </div>
    );
}

