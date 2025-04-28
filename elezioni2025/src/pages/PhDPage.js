import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import LanguageSwitcher from '../components/LanguageSwitcher';
import CandidateCard from '../components/CandidateCard';
import '../styles/school.css';
import phdCandidates from '../candidates/phd';

function PhDPage() {
  const { t, i18n } = useTranslation();
  const [downloadLink, setDownloadLink] = useState('');

  useEffect(() => {
    // Update document title
    document.title = t('phd_page_title');
    
    // Set download link based on the selected language
    const base_domain = process.env.REACT_APP_BASE_DOMAIN || 'https://elezioni2025.laternasinistrorsa.it';
    const link = `${base_domain}/download/PhD-${(i18n.language.split("-")[0])}-LTS.pdf`;
    
    setDownloadLink(link.toLowerCase());
  }, [t, i18n.language]);

  return (
    <div className="container">
      {/* Header with logo and back button */}
      <Header showBackButton={true} />
      
      {/* Language Switcher */}
      <LanguageSwitcher />
      
      {/* PhD title */}
      <h1 className="school-title">{t('phd_name')}</h1>
      <h3><strong>Non</strong><span> sono solo canzonette</span></h3>
      
      {/* Download program section */}
      <div className="download-section">
        <h2>{t('program_title')}</h2>
        <p>{t('phd_program_desc') || t('program_desc')}</p>
        <a href={downloadLink} target="_blank" rel="noopener noreferrer">
          <button className="download-button">
            <svg className="download-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>{t('download_button')}</span>
          </button>
        </a>
      </div>
      
      {/* Section divider */}
      <div className="section-divider"></div>
      
      {/* PhD candidates section */}
      <h2>{t('school_candidates')}</h2>
      
      <div className="candidates-grid phd-candidates-grid">
        {phdCandidates.map(candidate => (
          <CandidateCard
            key={candidate.id}
            name={candidate.name}
            description={candidate.description}
            spotifyTrackId={candidate.spotifyTrackId}
            firstCandidate={candidate.firstCandidate}
          />
        ))}
      </div>
    </div>
  );
}

export default PhDPage;