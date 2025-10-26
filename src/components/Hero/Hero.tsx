import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiPostgresql, SiRedis, SiMongodb, SiTailwindcss } from 'react-icons/si';
import styles from './Hero.module.css';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [displayedCode, setDisplayedCode] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  const getCodeByLanguage = () => {
    if (i18n.language === 'ru') {
      return [
        'const developer = {',
        '  name: "Вадим Анохин",',
        '  role: "Frontend Разработчик",',
        '  location: "Новосибирск, Россия",',
        '  skills: [',
        '    "React", "TypeScript", "Node.js"',
        '  ],',
        '  passion: "Создание отличного UX",',
        '  status: "Доступен для работы"',
        '};',
        '// Готов создать что-то удивительное!'
      ];
    } else {
      return [
        'const developer = {',
        '  name: "Vadim Anokhin",',
        '  role: "Frontend Developer",',
        '  location: "Novosibirsk, Russia",',
        '  skills: [',
        '    "React", "TypeScript", "Node.js"',
        '  ],',
        '  passion: "Building great UX",',
        '  status: "Available for work"',
        '};',
        '// Ready to create something amazing!'
      ];
    }
  };

  const fullCode = getCodeByLanguage();

  useEffect(() => {
    setDisplayedCode([]);
    setCurrentLine(0);
    setCurrentChar(0);
  }, [i18n.language]);

  useEffect(() => {
    if (currentLine >= fullCode.length) return;

    const currentFullLine = fullCode[currentLine];
    
    if (currentChar < currentFullLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode(prev => {
          const newCode = [...prev];
          if (!newCode[currentLine]) {
            newCode[currentLine] = '';
          }
          newCode[currentLine] = currentFullLine.substring(0, currentChar + 1);
          return newCode;
        });
        setCurrentChar(currentChar + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(currentLine + 1);
        setCurrentChar(0);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentChar, currentLine, fullCode]);

  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const formatCode = (line: string) => {
    if (!line) return '';
    return line
      .replace(/(const|let|var)/g, '<span class="' + styles.codeKeyword + '">$1</span>')
      .replace(/(".*?")/g, '<span class="' + styles.codeString + '">$1</span>')
      .replace(/(developer|skills|name|role|location|passion|status)/g, '<span class="' + styles.codeFunction + '">$1</span>')
      .replace(/(\/\/.*)/g, '<span class="' + styles.codeComment + '">$1</span>');
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <p className={styles.greeting}>{t('hero.greeting')}</p>
          <h1 className={styles.name}>{t('hero.name')}</h1>
          <h2 className={styles.title}>{t('hero.title')}</h2>
          <p className={styles.subtitle}>{t('hero.subtitle')}</p>
          <p className={styles.description}>{t('hero.description')}</p>
          <button className={styles.cta} onClick={scrollToContacts}>{t('hero.cta')}</button>
        </div>
      </div>

      <div className={styles.visualization}>
        <FaReact className={styles.floatingIcon} style={{ color: '#61dafb', top: '10%', left: '15%' }} />
        <SiTypescript className={styles.floatingIcon} style={{ color: '#3178c6', top: '20%', left: '75%' }} />
        <FaNodeJs className={styles.floatingIcon} style={{ color: '#339933', top: '45%', left: '10%' }} />
        <SiJavascript className={styles.floatingIcon} style={{ color: '#f7df1e', top: '35%', left: '85%' }} />
        <FaDocker className={styles.floatingIcon} style={{ color: '#2496ed', top: '65%', left: '20%' }} />
        <SiPostgresql className={styles.floatingIcon} style={{ color: '#336791', top: '75%', left: '80%' }} />
        <FaGitAlt className={styles.floatingIcon} style={{ color: '#f05032', top: '55%', left: '70%' }} />
        <SiRedis className={styles.floatingIcon} style={{ color: '#dc382d', top: '85%', left: '40%' }} />
        <SiMongodb className={styles.floatingIcon} style={{ color: '#47a248', top: '30%', left: '50%' }} />
        <SiTailwindcss className={styles.floatingIcon} style={{ color: '#06b6d4', top: '60%', left: '45%' }} />
        
        {fullCode.map((_, index) => (
          <div key={index} className={styles.codeLine}>
            <span className={styles.lineNumber}>{index + 1}</span>
            <div className={styles.codeContent} dangerouslySetInnerHTML={{ __html: formatCode(displayedCode[index] || '') }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;