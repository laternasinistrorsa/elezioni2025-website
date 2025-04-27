import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header({ showBackButton = false }) {
  const { t } = useTranslation();

  return (
    <div className="header">
      <Link to="/" className="logo">
        <div className="logo-circle">
          <img src="/logo_terna.png" alt="Logo" />
        </div>
        <span className="logo-text">La Terna Sinistrorsa</span>
      </Link>
      {showBackButton && (
        <Link to="/" className="back-button">
          {t('back_button')}
        </Link>
      )}
    </div>
  );
}

export default Header;