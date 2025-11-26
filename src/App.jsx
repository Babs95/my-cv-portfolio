import { useState } from 'react';
import { cvData, translations } from './data/cvData';
import { generatePDF } from './utils/pdfGenerator';
import './App.css';

function App() {
  const [language, setLanguage] = useState('fr');
  const [isGenerating, setIsGenerating] = useState(false);

  const data = cvData[language];
  const t = translations[language];

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    try {
      await generatePDF(language, data, t);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert(language === 'fr'
        ? 'Erreur lors de la génération du PDF. Veuillez réessayer.'
        : 'Error generating PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="app">
      <div className="controls">
        <div className="lang-selector">
          <button
            className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('fr')}
          >
            FR
          </button>
          <button
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            EN
          </button>
        </div>
        <button
          className="download-btn"
          onClick={handleDownloadPDF}
          disabled={isGenerating}
        >
          <span>{isGenerating ? '⏳' : '📥'}</span>
          <span>{isGenerating ? t.downloadingText : t.downloadText}</span>
        </button>
      </div>

      <div className="container">
        <header className="header">
          <h1>{data.personalInfo.name}</h1>
          <div className="title">{data.personalInfo.title}</div>
          <div className="contact-info">
            <div className="contact-item">
              <span>📱</span>
              <span>{data.personalInfo.phone}</span>
            </div>
            <div className="contact-item">
              <span>✉️</span>
              <span>{data.personalInfo.email}</span>
            </div>
            <div className="contact-item">
              <span>📍</span>
              <span>{data.personalInfo.location}</span>
            </div>
          </div>
        </header>

        <div className="main-content">
          {/* Profile Section */}
          <section className="section">
            <h2 className="section-title">{data.profile.title}</h2>
            <p className="profile-text">{data.profile.text}</p>
          </section>

          {/* Skills Section */}
          <section className="section">
            <h2 className="section-title">{data.skills.title}</h2>
            {data.skills.categories.map((category, index) => (
              <div key={index} className="skills-category">
                <h3>{category.name}</h3>
                <ul className="skills-list">
                  {category.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Experience Section */}
          <section className="section">
            <h2 className="section-title">{t.experienceTitle}</h2>
            {data.experiences.map((exp, index) => (
              <div key={index} className={`experience-item ${exp.subtitle ? 'has-freelance' : ''}`}>
                <div className="job-title">{exp.title}</div>
                <div className="company">{exp.company}</div>
                <div className="period">{exp.period}</div>
                <div className="location">{exp.location}</div>
                <div className="description">{exp.description}</div>
                {exp.tech && <div className="tech-stack">{exp.tech}</div>}
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="achievements">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} dangerouslySetInnerHTML={{ __html: achievement }}></li>
                    ))}
                  </ul>
                )}
                {exp.subtitle && (
                  <div className="freelance-projects">
                    <div className="freelance-subtitle">{exp.subtitle}</div>
                    {exp.projects && exp.projects.map((project, idx) => (
                      <div key={idx} className="project-item">
                        <div className="project-name">
                          {project.name} {project.period}
                        </div>
                        <div className="project-description">{project.description}</div>
                        <div className="project-tech">{project.tech}</div>
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                          {project.url}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* Teaching Section */}
          <section className="section">
            <h2 className="section-title">{t.teachingTitle}</h2>
            {data.teaching.map((teach, index) => (
              <div key={index} className="experience-item">
                <div className="job-title">{teach.title}</div>
                <div className="company">{teach.company}</div>
                <div className="period">{teach.period}</div>
                <ul className="achievements">
                  {teach.achievements.map((achievement, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: achievement }}></li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education Section */}
          <section className="section">
            <h2 className="section-title">{t.educationTitle}</h2>
            {data.education.map((edu, index) => (
              <div key={index} className="formation-item">
                <strong>{edu.title}</strong> | {edu.school} | {edu.period} | {edu.location}
              </div>
            ))}
          </section>

          {/* Languages Section */}
          <section className="section">
            <h2 className="section-title">{t.languagesTitle}</h2>
            <div className="languages">
              {data.languages.map((lang, index) => (
                <div key={index}>
                  <span>{lang.name}</span>
                  <span><strong>{lang.level}</strong></span>
                </div>
              ))}
            </div>
          </section>

          {/* Links Section */}
          <section className="section">
            <h2 className="section-title">{t.linksTitle}</h2>
            <div className="links-section">
              {data.links.map((link, index) => (
                <span key={index}>
                  {index > 0 && ' | '}
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
