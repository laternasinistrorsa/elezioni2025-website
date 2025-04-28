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
        <Link to="/programma-elettorale/organi-centrali">
          <button className="spotify-button button-organi-centrali full-width-button">
            {t('central_bodies')}
          </button>
        </Link>
        <div className="button-grid">
          <Link to="/programma-elettorale/3i">
            <button className="spotify-button button-scuola">
              {t('school_3i')}
            </button>
          </Link>
          <Link to="/programma-elettorale/AUIC">
            <button className="spotify-button button-scuola">
              {t('school_auic')}
            </button>
          </Link>
          <Link to="/programma-elettorale/ICAT">
            <button className="spotify-button button-scuola">
              {t('school_icat')}
            </button>
          </Link>
          <Link to="/programma-elettorale/Design">
            <button className="spotify-button button-scuola">
              {t('school_design')}
            </button>
          </Link>
          
          <Link to="/programma-elettorale/dottorandi">
            <button className="spotify-button button-scuola">
              {t('phd')}
            </button>
          </Link>
          <a href='https://linktr.ee/TitoCNSU' rel='noopener noreferrer'>
          <button className="spotify-button button-scuola">
            {t('cnsu')}
          </button>
          </a>
        </div>
        <a href="https://www.instagram.com/la_terna_sinistrorsa/" target="_blank" rel="noopener noreferrer">
          <button className="spotify-button-outline full-width-button">
          {t('contact')}  
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              style={{ position: 'absolute', marginLeft: '8px', marginBottom: '0px' }}
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            
          </button>
        </a>
      </div>
    </div>
  );
}

export default HomePage;