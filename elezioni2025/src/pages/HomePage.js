import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import LanguageSwitcher from '../components/LanguageSwitcher';
import '../styles/home.css';

function HomePage() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Update document title
    document.title = t('page_title');
  }, [t, i18n.language]);

  return (
    <div className="container">
      <Header />
      
      <LanguageSwitcher />
      
      <h1>{t('title')}</h1>
      <h3>
        <strong>{t('subtitle_part1')}</strong> <span>{t('subtitle_part2')}</span>
      </h3>

      <div className="button-container">
        <button className="spotify-button button-organi-centrali full-width-button">
          {t('central_bodies')}
        </button>
        
        <div className="button-grid">
          <Link to="/programma-elettorale/3i">
            <button className="spotify-button button-scuola">
              {t('school_3i')}
            </button>
          </Link>
          <button className="spotify-button button-scuola">
            {t('school_auic')}
          </button>
          <button className="spotify-button button-scuola">
            {t('school_icat')}
          </button>
          <button className="spotify-button button-scuola">
            {t('school_design')}
          </button>
          <button className="spotify-button button-scuola">
            {t('phd')}
          </button>
          <button className="spotify-button button-scuola">
            {t('cnsu')}
          </button>
        </div>
        
        <button className="spotify-button-outline full-width-button">
          {t('contact')}
        </button>
      </div>
    </div>
  );
}

export default HomePage;