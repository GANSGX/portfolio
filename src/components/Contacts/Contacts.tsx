import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGithub, FaTelegram, FaEnvelope, FaCopyright } from 'react-icons/fa';
import { useState } from 'react';
import styles from './Contacts.module.css';

const Contacts = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com', label: 'GitHub', color: '#fff' },
    { icon: <FaTelegram />, url: 'https://t.me/', label: 'Telegram', color: '#0088cc' },
    { icon: <FaEnvelope />, url: 'mailto:your@email.com', label: 'Email', color: '#ea4335' }
  ];

  return (
    <section id="contacts" className={styles.contacts}>
      <motion.h2 className={styles.title} initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        {t('contacts.title')}
      </motion.h2>

      <motion.div className={styles.contactCard} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className={styles.content}>
          <h3 className={styles.heading}>{t('contacts.heading')}</h3>
          <p className={styles.subheading}>{t('contacts.subheading')}</p>
          <p className={styles.cta}>{t('contacts.cta')}</p>
        </div>

        <div className={styles.socialSection}>
          <div className={styles.socialLinks}>
            {socialLinks.map((link, index) => (
              <motion.a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} style={{ color: link.color }} onMouseEnter={() => setHoveredSocial(index)} onMouseLeave={() => setHoveredSocial(null)} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                {link.icon}
                {hoveredSocial === index && <div className={styles.tooltip}>{link.label}</div>}
              </motion.a>
            ))}
          </div>
        </div>

        <div className={styles.footer}>
          <FaCopyright className={styles.copyrightIcon} />
          {t('contacts.footer')} 2024 — {currentYear}
        </div>
      </motion.div>
    </section>
  );
};

export default Contacts;