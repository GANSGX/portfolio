import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Contacts from './components/Contacts/Contacts';
import styles from './App.module.css';
import './i18n/config';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.container}>
        <Hero />
        <Skills />
        <Portfolio />
        <Experience />
        <Contacts />
      </main>
    </div>
  );
}

export default App;