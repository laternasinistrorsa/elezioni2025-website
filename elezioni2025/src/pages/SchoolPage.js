import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import LanguageSwitcher from '../components/LanguageSwitcher';
import CandidateCard from '../components/CandidateCard';
import '../styles/school.css';

function SchoolPage() {
  const { t, i18n } = useTranslation();
  const [selectedCourse, setSelectedCourse] = useState('');
  const [courseCandidates, setCourseCandidates] = useState([]);

  useEffect(() => {
    // Update document title
    document.title = t('school_page_title');
  }, [t, i18n.language]);

  // Sample data for school candidates
  const schoolCandidates = [
    {
      id: 1,
      name: 'Marco Rossi',
      description: 'Architettura, 3° anno',
      spotifyTrackId: '7huH1ed9v3pIfAisPQ0ME7'
    },
    {
      id: 2,
      name: 'Laura Bianchi',
      description: 'Urbanistica, 2° anno',
      spotifyTrackId: '4cOdK2wGLETKBW3PvgPWqT'
    },
    {
      id: 3,
      name: 'Andrea Verdi',
      description: 'Architettura, 5° anno',
      spotifyTrackId: '4cOdK2wGLETKBW3PvgPWqT'
    }
  ];

  // Sample data for course candidates
  const courses = {
    architettura: [
      {
        id: 1,
        name: 'Sofia Neri',
        description: 'Rep. Corso di Architettura',
        spotifyTrackId: '4cOdK2wGLETKBW3PvgPWqT'
      },
      {
        id: 2,
        name: 'Paolo Gialli',
        description: 'Rep. Corso di Architettura',
        spotifyTrackId: '4cOdK2wGLETKBW3PvgPWqT'
      }
    ],
    urbanistica: [
      {
        id: 1,
        name: 'Giulia Blu',
        description: 'Rep. Corso di Urbanistica',
        spotifyTrackId: '4cOdK2wGLETKBW3PvgPWqT'
      }
    ],
    design: [
      {
        id: 1,
        name: 'Mario Rossi',
        description: 'Rep. Corso di Design degli Interni',
        spotifyTrackId: '4cOdK2wGLETKBW3PvgPWqT'
      }
    ]
  };

  // Handle course selection
  const handleCourseChange = (e) => {
    const course = e.target.value;
    setSelectedCourse(course);
    setCourseCandidates(courses[course] || []);
  };

  return (
    <div className="container">
      {/* Header with logo and back button */}
      <Header showBackButton={true} />
      
      {/* Language Switcher */}
      <LanguageSwitcher />
      
      {/* School title */}
      <h1 className="school-title">{t('school_name')}</h1>
      <h3><strong>Non</strong><span>sono solo canzonette</span></h3>
      
      {/* Download program section */}
      <div className="download-section">
        <h2>{t('program_title')}</h2>
        <p>{t('program_desc')}</p>
        <button className="download-button">
          <svg className="download-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>{t('download_button')}</span>
        </button>
      </div>
      
      {/* Section divider */}
      <div className="section-divider"></div>
      
      {/* School candidates section */}
      <h2>{t('school_candidates')}</h2>
      
      <div className="candidates-grid">
        {schoolCandidates.map(candidate => (
          <CandidateCard
            key={candidate.id}
            name={candidate.name}
            description={candidate.description}
            spotifyTrackId={candidate.spotifyTrackId}
          />
        ))}
      </div>
      
      {/* Section divider */}
      <div className="section-divider"></div>
      
      {/* Course candidates section */}
      <h2>{t('course_candidates')}</h2>
      
      {/* Dropdown for selecting the course */}
      <div className="courses-dropdown">
        <select 
          className="dropdown-select" 
          id="course-selector"
          value={selectedCourse}
          onChange={handleCourseChange}
        >
          <option value="" disabled>{t('select_course')}</option>
          <option value="architettura">Architettura</option>
          <option value="urbanistica">Urbanistica</option>
          <option value="design">Design degli Interni</option>
        </select>
      </div>
      
      {/* Course candidates grid */}
      {selectedCourse && courseCandidates.length > 0 && (
        <div className="candidates-grid">
          {courseCandidates.map(candidate => (
            <CandidateCard
              key={candidate.id}
              name={candidate.name}
              description={candidate.description}
              spotifyTrackId={candidate.spotifyTrackId}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SchoolPage;
// Note: The Spotify track IDs are placeholders and should be replaced with actual track IDs.
