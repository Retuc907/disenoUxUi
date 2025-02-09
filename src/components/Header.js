import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage); // Cambiar el idioma
  };

  const getBackgroundColor = () => {
    switch (i18n.language) {
      case 'es':
        return '#FF5733'; // Rojo para español
      case 'en':
        return '#4CAF50'; // Verde para inglés
      case 'fr':
        return '#3f51b5'; // Azul para francés
      case 'de':
        return '#8B0000';
      default:
        return '#F588FF'; // Blanco por defecto
    }
  };


  return (
    <header style={{ backgroundColor: getBackgroundColor() }}>
      <h1>{t('title')}</h1> {/* Esto debería traducir "title" a español, inglés, etc. */}
      <select value={i18n.language} onChange={handleLanguageChange}>
        <option value="es">Español</option>
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="de">Aleman</option>
      </select>
    </header>
  );
};

export default Header;
    