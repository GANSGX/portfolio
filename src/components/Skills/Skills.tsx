import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiRedux, SiMobx, SiTailwindcss } from 'react-icons/si';
import SkillCard from './SkillCard';
import styles from './Skills.module.css';

const Skills = () => {
  const { t } = useTranslation();

  const hardSkills = [
    { icon: <FaHtml5 />, title: t('skills.hard.html'), color: 'var(--color-html)' },
    { icon: <FaCss3Alt />, title: t('skills.hard.css'), color: 'var(--color-css)' },
    { icon: <FaSass />, title: t('skills.hard.sass'), color: 'var(--color-sass)' },
    { icon: <SiJavascript />, title: t('skills.hard.javascript'), color: 'var(--color-js)' },
    { icon: <SiTypescript />, title: t('skills.hard.typescript'), color: 'var(--color-ts)' },
    { icon: <FaReact />, title: t('skills.hard.react'), color: 'var(--color-react)' },
    { icon: <SiRedux />, title: t('skills.hard.redux'), color: 'var(--color-redux)' },
    { icon: <SiMobx />, title: t('skills.hard.mobx'), color: 'var(--color-mobx)' },
    { icon: <FaNodeJs />, title: t('skills.hard.node'), color: 'var(--color-node)' },
    { icon: <FaGitAlt />, title: t('skills.hard.git'), color: 'var(--color-git)' },
    { icon: <FaGithub />, title: t('skills.hard.github'), color: '#fff' },
    { icon: <SiTailwindcss />, title: t('skills.hard.tailwind'), color: 'var(--color-tailwind)' }
  ];

  const softSkills = [
    { title: t('skills.soft.problemSolving.title'), description: t('skills.soft.problemSolving.description') },
    { title: t('skills.soft.teamwork.title'), description: t('skills.soft.teamwork.description') },
    { title: t('skills.soft.communication.title'), description: t('skills.soft.communication.description') },
    { title: t('skills.soft.fastLearning.title'), description: t('skills.soft.fastLearning.description') },
    { title: t('skills.soft.attention.title'), description: t('skills.soft.attention.description') },
    { title: t('skills.soft.timeManagement.title'), description: t('skills.soft.timeManagement.description') },
    { title: t('skills.soft.adaptability.title'), description: t('skills.soft.adaptability.description') },
    { title: t('skills.soft.responsibility.title'), description: t('skills.soft.responsibility.description') }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <motion.h2 className={styles.title} initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        {t('skills.title')}
      </motion.h2>

      <div className={styles.grid}>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>{t('skills.hardSkills')}</h3>
          <div className={styles.skillsContainer}>
            {hardSkills.map((skill, index) => (
              <SkillCard key={index} icon={skill.icon} title={skill.title} color={skill.color} index={index} />
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>{t('skills.softSkills')}</h3>
          <div className={styles.skillsContainer}>
            {softSkills.map((skill, index) => (
              <SkillCard key={index} title={skill.title} description={skill.description} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;