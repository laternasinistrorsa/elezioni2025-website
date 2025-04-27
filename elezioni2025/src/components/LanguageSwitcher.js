import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

function LanguageSwitcher() {
  const { i18n } = useTranslation();



  const location = useLocation();

  useEffect(() => {
    // Add language parameter to URL if not present
    const url = new URL(window.location);
    if (!url.searchParams.has('lang')) {
      let lang_code = i18n.language; // Default to Italian
      const lang = lang_code.split('-')[0]; // Get the language code (e.g., 'it' or 'en')
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url);
    }
    // Set the language based on the URL parameter
    const buttons = document.querySelectorAll('.language-btn');
    buttons.forEach((button) => {
      if (button.getAttribute('data-lang') === i18n.language) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
    
  }, [location, i18n.language]);

  

  
  useEffect(() => {
    // Set active class on the current language button
    const buttons = document.querySelectorAll('.language-btn');
    buttons.forEach((button) => {
      if (button.getAttribute('data-lang') === (i18n.language.split('-')[0])) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }, [i18n.language]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
    
    // Update URL with language parameter
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);
  };

  return (
    <div className="language-switcher">
      <button 
        className="language-btn" 
        data-lang="it" 
        onClick={() => changeLanguage('it')}
      >
        IT
      </button>
      <button 
        className="language-btn" 
        data-lang="en" 
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;