import React from 'react';
import { Link } from 'react-router-dom';
import "../style/pages.css"; 


export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="home-text">
          <h1>Добро пожаловать в мир технологий</h1>
          <p>Откройте для себя новые возможности вместе с Keremet Store</p>
          <Link to="/catalog" className="dannoe">Посмотреть товары</Link>
        </div>
      </div>
      <div className="content">
        <h2>О нас</h2>
        <p>Keremet Store - ваш надежный партнер в мире технологий. Мы предлагаем широкий выбор качественных электронных устройств по доступным ценам.</p>
        <p>Мы стремимся к тому, чтобы каждый клиент получил наилучший сервис и удовлетворение от покупки в нашем магазине.</p>
        <Link to="/about" className="dannoe-2">Узнать больше</Link>
      </div>
    </div>
  );
}
