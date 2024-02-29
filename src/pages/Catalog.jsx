import React from 'react';
import { Link } from 'react-router-dom';
import '../style/pages.css';

const Catalog = ({ phonesData, addCart }) => {
  return (
    <div className="shop">
      {phonesData.map(phone => (
        <div className="cards" key={phone.id}>
          <img src={phone.images[0]} alt={phone.title} />
          <div className="cards-top">
            <Link className='name-title' to={`/details/${phone.id}`}>
              <h1>{phone.title}</h1>
            </Link>
           
          </div>
          <p>{phone.description}</p>
          <div className="cards-bot">
            <h2>{phone.price} Сом</h2>
            <button onClick={() => addCart(phone)}>Добавить в корзину</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catalog;

