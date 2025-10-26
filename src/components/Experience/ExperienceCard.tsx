import { motion } from 'framer-motion';
import styles from './Experience.module.css';

interface ExperienceCardProps {
  period: string;
  title: string;
  company: string;
  position?: string;
  description: string;
  index: number;
}

const ExperienceCard = ({ period, title, company, position, description, index }: ExperienceCardProps) => {
  return (
    <motion.div className={styles.experienceItem} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }}>
      <div className={styles.dot} />
      <div className={styles.card}>
        <div className={styles.period}>{period}</div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <h4 className={styles.company}>{company}</h4>
        {position && <p className={styles.position}>{position}</p>}
        <p className={styles.description}>{description}</p>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;