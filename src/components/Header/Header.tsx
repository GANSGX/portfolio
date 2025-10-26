import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Header.module.css';

const Header = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { key: 'home', id: 'hero' },
    { key: 'skills', id: 'skills' },
    { key: 'portfolio', id: 'portfolio' },
    { key: 'experience', id: 'experience' },
    { key: 'contacts', id: 'contacts' }
  ];

  return (
    <motion.header className={styles.header} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          {navItems.map((item, index) => (
            <motion.div key={item.key} className={styles.navItem} onClick={() => scrollToSection(item.id)} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              {t(`nav.${item.key}`)}
              <span className={`${styles.corner} ${styles.cornerBottomLeft}`} />
              <span className={`${styles.corner} ${styles.cornerBottomRight}`} />
            </motion.div>
          ))}
        </nav>
        <LanguageSwitcher />
      </div>
    </motion.header>
  );
};

export default Header;