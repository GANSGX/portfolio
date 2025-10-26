import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <motion.div className={styles.switcher} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className={`${styles.slider} ${i18n.language === 'en' ? styles.right : ''}`} />
      <div className={styles.buttonContainer}>
        <button className={`${styles.button} ${i18n.language === 'ru' ? styles.active : ''}`} onClick={() => changeLanguage('ru')}>
          RU
        </button>
        <button className={`${styles.button} ${i18n.language === 'en' ? styles.active : ''}`} onClick={() => changeLanguage('en')}>
          EN
        </button>
      </div>
    </motion.div>
  );
};

export default LanguageSwitcher;