import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import styles from './Portfolio.module.css';

interface ProjectCardProps {
  title: string;
  period: string;
  description: string;
  techStack: { icon: ReactNode; name: string; color?: string }[];
  image?: string;
  status?: string;
  viewLink?: string;
  githubLink?: string;
  index: number;
}

const ProjectCard = ({
  title,
  period,
  description,
  techStack,
  image,
  status,
  viewLink,
  githubLink,
  index
}: ProjectCardProps) => {
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  return (
    <motion.div className={styles.projectCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }}>
      <div className={styles.projectImage}>
        {status && <div className={styles.status}>{status}</div>}
        {image ? <img src={image} alt={title} /> : <div className={styles.imagePlaceholder}><span>{title}</span></div>}
      </div>

      <div className={styles.projectContent}>
        <div className={styles.projectPeriod}>{period}</div>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>

        <div className={styles.techStack}>
          {techStack.map((tech, i) => (
            <div key={i} className={styles.techItem} style={{ color: tech.color || 'var(--accent)' }} onMouseEnter={() => setHoveredTech(i)} onMouseLeave={() => setHoveredTech(null)}>
              {tech.icon}
              {hoveredTech === i && <div className={styles.tooltip}>{tech.name}</div>}
            </div>
          ))}
        </div>

        <div className={styles.projectButtons}>
          {viewLink && <a href={viewLink} target="_blank" rel="noopener noreferrer" className={styles.projectButton}>{index === 0 ? 'Смотреть проект' : 'View Project'}</a>}
          {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.projectButton}>GitHub</a>}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;