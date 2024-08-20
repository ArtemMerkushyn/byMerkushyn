import styles from './styles/_main.scss';
import { Header } from './components/header/Header';

function App() {
  return (
    <div className={styles.container}>
      <Header/>
    </div>
  );
}

export default App;
