import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import styles from './Experience.module.css';

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      period: t('experience.education.period'),
      title: t('experience.education.title'),
      company: t('experience.education.company'),
      position: t('experience.education.position'),
      description: t('experience.education.description')
    },
    {
      period: t('experience.freelance.period'),
      title: t('experience.freelance.title'),
      company: t('experience.freelance.company'),
      description: t('experience.freelance.description')
    },
    {
      period: t('experience.cryptox.period'),
      title: t('experience.cryptox.title'),
      company: t('experience.cryptox.company'),
      description: t('experience.cryptox.description')
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      <motion.h2 className={styles.title} initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        {t('experience.title')}
      </motion.h2>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} period={exp.period} title={exp.title} company={exp.company} position={exp.position} description={exp.description} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;