import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import '../style/pages.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Keremet Store</h2>
      <div className="contact-info">
        <h3 className="info">Адрес:</h3>
        <p className="info-text">Город Бишкек</p>
        <p className="info-text">ЦУМ 0 этаж отдел G lux 4
</p>
      </div>
      <div className="contact-info">
        <h3 className="info">Телефон:</h3>
        <p className="info-text"> +996 772 568 657</p>
      </div>
      <div className="instagram">
       <h2 className='info'>Инстаграм:</h2>
      <Link className='insta' to={'https://www.instagram.com/keremet_store.kg?igsh=dHI5a2YxY3JtNTh3'}>
            <FaInstagram />  Keremet.Store
          </Link>
        
      </div>
      <div className="map-container">
        <h3 className="map-heading">Location:</h3>
        <iframe
          title="Keremet Store Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.1428801506074!2d74.59913161443705!3d42.87680227915588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38790cd4aebd676b%3A0xb4e1af194fbbe2b2!2sCentral%20Department%20Store%20(TSUM)!5e0!3m2!1sen!2skg!4v1646630474960!5m2!1sen!2skg"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
