import React from 'react';

import "../style/comp.css"; 

export default function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-bottom">
        
        <p>&copy; {new Date().getFullYear()} Keremet.store. Все права защищены.</p>
      </div>
    </footer>
  );
}

