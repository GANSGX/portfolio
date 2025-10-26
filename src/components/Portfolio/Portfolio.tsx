import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaNodeJs, 
  FaDocker 
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiTypescript, 
  SiPnpm, 
  SiVite, 
  SiSocketdotio,
  SiPostgresql,
  SiRedis,
  SiElectron
} from 'react-icons/si';
import ProjectCard from './ProjectCard';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const { t } = useTranslation();

  const freelanceTech = [
    { icon: <FaHtml5 />, name: 'HTML5', color: 'var(--color-html)' },
    { icon: <FaCss3Alt />, name: 'CSS3', color: 'var(--color-css)' },
    { icon: <SiJavascript />, name: 'JavaScript', color: 'var(--color-js)' },
    { icon: <FaReact />, name: 'React', color: 'var(--color-react)' },
    { icon: <SiTypescript />, name: 'TypeScript', color: 'var(--color-ts)' },
    { icon: <SiPnpm />, name: 'pnpm', color: 'var(--color-pnpm)' },
    { icon: <FaDocker />, name: 'Docker', color: 'var(--color-docker)' },
    { icon: <SiVite />, name: 'Vite', color: 'var(--color-vite)' }
  ];

  const cryptoxTech = [
    { icon: <FaReact />, name: 'React', color: 'var(--color-react)' },
    { icon: <SiTypescript />, name: 'TypeScript', color: 'var(--color-ts)' },
    { icon: <SiVite />, name: 'Vite', color: 'var(--color-vite)' },
    { icon: <SiSocketdotio />, name: 'Socket.io', color: 'var(--color-socketio)' },
    { icon: <FaNodeJs />, name: 'Node.js', color: 'var(--color-node)' },
    { icon: <SiPostgresql />, name: 'PostgreSQL', color: 'var(--color-postgres)' },
    { icon: <SiRedis />, name: 'Redis', color: 'var(--color-redis)' },
    { icon: <SiElectron />, name: 'Electron', color: 'var(--color-electron)' },
    { icon: <FaDocker />, name: 'Docker', color: 'var(--color-docker)' }
  ];

  return (
    <section id="portfolio" className={styles.portfolio}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {t('portfolio.title')}
      </motion.h2>

      <div className={styles.projectsContainer}>
        <ProjectCard
          title={t('portfolio.freelance.title')}
          period={t('portfolio.freelance.period')}
          description={t('portfolio.freelance.description')}
          techStack={freelanceTech}
          viewLink="#"
          githubLink="#"
          index={0}
        />

        <ProjectCard
          title={t('portfolio.cryptox.title')}
          period={t('portfolio.cryptox.period')}
          description={t('portfolio.cryptox.description')}
          techStack={cryptoxTech}
          status={t('portfolio.cryptox.status')}
          viewLink="#"
          githubLink="#"
          index={1}
        />
      </div>
    </section>
  );
};

export default Portfolio;