import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import LanguageSwitcher from '../components/LanguageSwitcher';
import CandidateCard from '../components/CandidateCard';
import '../styles/school.css';

function SchoolPage(args) {
  const { t, i18n } = useTranslation();
  const [selectedCourse, setSelectedCourse] = useState('');
  const [courseCandidates, setCourseCandidates] = useState([]);
  const [downloadLink, setDownloadLink] = useState('');

  useEffect(() => {
    // Update document title
    document.title = t('school_page_title_'+args.school);
    // Set download link based on the selected school
    const link = `https://elezioni2025.laternasinistrorsa/download/${args.school}-${i18n.language}.pdf`; // Replace with actual link
    setDownloadLink(link);
  }, [t, i18n.language, args.school]);

  // Sample data for school candidates
/* 
  {
    id: 1,
    name: 'Marco Rossi',
    description: 'Architettura, 3° anno',
    spotifyTrackId: '7huH1ed9v3pIfAisPQ0ME7',
    firstCandidate: false,
  },
  {
    id: 2,
    name: 'Laura Bianchi',
    description: 'Urbanistica, 2° anno',
    spotifyTrackId: '4cOdK2wGLETKBW3PvgPWqT',
    firstCandidate: true,
  },
  {
    id: 3,
    name: 'Andrea Verdi',
    description: 'Architettura, 5° anno',
    spotifyTrackId: '4cOdK2wGLETKBW3PvgPWqT',
    firstCandidate: false,
  } */
  const schoolCandidates = {
    "3i": [
      {
        name: 'Nicolò Valenza',
        description: 'Ing. Aerospaziale',
        spotifyTrackId: '7huH1ed9v3pIfAisPQ0ME7',
        firstCandidate: false,
      },
      {
        name: 'Giuseppe Cirimele',
        description: 'Ing. Aerospaziale',
        spotifyTrackId: '4cOdK2wGLETKBW3PvgPWqT',
        firstCandidate: true,
      },
      {
        name: 'Mauro Preta',
        description: 'Ing. Informatica',
        spotifyTrackId: '4cOdK2wGLETKBW3PvgPWqT',
        firstCandidate: false,
      },
    ]
  };

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
      <h1 className="school-title">{t('school_name_'+args.school)}</h1>
      <h3><strong>Non</strong><span> sono solo canzonette</span></h3>
      
      {/* Download program section */}
      <div className="download-section">
        <h2>{t('program_title')}</h2>
        <p>{t('program_desc')}</p>
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
      
      {/* School candidates section */}
      <h2>{t('school_candidates')}</h2>
      
      <div className="candidates-grid">
        {schoolCandidates[args.school].map(candidate => (
          <CandidateCard
            key={candidate.id}
            name={candidate.name}
            description={candidate.description}
            spotifyTrackId={candidate.spotifyTrackId}
            firstCandidate={candidate.firstCandidate}
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
