import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styles from './Skills.module.css';

interface SkillCardProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  index: number;
  color?: string;
}

const SkillCard = ({ icon, title, description, index, color }: SkillCardProps) => {
  return (
    <motion.div className={styles.skillCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }}>
      <div className={styles.skillHeader}>
        <span className={styles.bullet}>•</span>
        {icon && <div className={styles.skillIcon} style={{ color: color || 'var(--accent)' }}>{icon}</div>}
        <span className={styles.skillTitle}>{title}</span>
      </div>
      {description && <p className={styles.skillDescription}>{description}</p>}
    </motion.div>
  );
};

export default SkillCard;