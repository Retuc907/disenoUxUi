import React from 'react';
import { useTranslation } from 'react-i18next';

import es from '../assets/es.jpg'
import en from '../assets/en.jpg'
import fr from '../assets/fr.jpg'
import de from '../assets/de.jpg'

const Main = () => {
  const { t,i18n } = useTranslation();

  const getImage = () => {
    switch (i18n.language) {
      case 'es':
        return es; // Imagen para español
      case 'en':
        return en; // Imagen para inglés
      case 'fr':
        return fr; // Imagen para francés
      case 'de':
        return de; // Imagen para aleman
      default:
        return es; // Imagen por defecto
    }
  };



  return (
    <main>
      <section>
        <h2>{t('description')}</h2> {/* La descripción cambia según el idioma */}
        <button>{t('button_text')}</button> {/* El texto del botón también es traducido */}
        <img src={getImage()} alt="Imagen dependiendo del idioma" />
      </section>
    </main>
  );
};

export default Main;
