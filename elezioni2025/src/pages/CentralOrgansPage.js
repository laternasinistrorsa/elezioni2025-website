import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import LanguageSwitcher from '../components/LanguageSwitcher';
import CandidateCard from '../components/CandidateCard';
import '../styles/centralorgans.css';

function CentralOrgansPage() {
  const { t, i18n } = useTranslation();
  const [downloadLink, setDownloadLink] = useState('');
  
  useEffect(() => {
    // Update document title
    document.title = t('central_organs_page_title');
    
    // Set download link based on the current language
    const link = `https://elezioni2025.laternasinistrorsa/download/OrganiCentrali-${(i18n.language.split("-")[0])}-LTS.pdf`;
    
    setDownloadLink(link.toLowerCase());
  }, [t, i18n.language]);

  // Academic Senate candidates
  const senateCandidates = [
    {
      id: 1,
      name: 'Clarissa Pasculli',
      description: 'Industrial Safety and risk engineering',
      spotifyTrackId: '0vjeOZ3Ft5jvAi9SBFJm1j',
      firstCandidate: false,
    },
    {
      id: 2,
      name: 'Francesca Rausa detta Franca',
      description: 'Ingegneria ambientale',
      spotifyTrackId: '4w3tQBXhn5345eUXDGBWZG',
      firstCandidate: true,
    },
    {
      id: 3,
      name: 'Erica Ardu',
      description: 'Ingegneria dei Materiali',
      spotifyTrackId: '2EEeOnHehOozLq4aS0n6SL',
      firstCandidate: false,
    },
  ];

  // Board of Directors candidate
  const boardCandidates = [
    {
      id: 1,
      name: 'Luca Ferrari',
      description: 'Ingegneria Civile, 4° anno',
      spotifyTrackId: '7huH1ed9v3pIfAisPQ0ME7',
      firstCandidate: true,
    },
  ];

  return (
    <div className="container">
      {/* Header with logo and back button */}
      <Header showBackButton={true} />
      
      {/* Language Switcher */}
      <LanguageSwitcher />
      
      {/* Central Organs title */}
      <h1 className="central-organs-title">{t('central_bodies')}</h1>
      <h3><strong>Non</strong><span> sono solo canzonette</span></h3>
      
      {/* Download program section - NEW */}
      <div className="download-section central-organs-download-section">
        <h2>{t('program_title')}</h2>
        <p>{t('central_organs_program_desc') || t('program_desc')}</p>
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
      
      {/* Academic Senate section */}
      <div className="organ-section">
        <h2>{t('academic_senate')}</h2>
        <p className="organ-description">{t('academic_senate_desc')}</p>
        
        <div className="candidates-grid central-candidates-grid">
          {senateCandidates.map(candidate => (
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
      
      {/* Section divider */}
      <div className="section-divider"></div>
      
      {/* Board of Directors section */}
      <div className="organ-section">
        <h2>{t('board_of_directors')}</h2>
        <p className="organ-description">{t('board_of_directors_desc')}</p>
        
        <div className="candidates-grid central-candidates-grid board-candidates-grid">
          {boardCandidates.map(candidate => (
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
    </div>
  );
}

export default CentralOrgansPage;