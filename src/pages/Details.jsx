import React from 'react';
import { useParams } from 'react-router-dom';
import '../style/pages.css';

const Details = ({ phonesData, addCart }) => {
  const { id } = useParams();
  const product = phonesData.find(product => product.id === parseInt(id));

  return (
    
    <div className="details-container">
      {product ? (
        <div className='Details-all'>
          <img src={product.images[0]} alt={product.title} className="product-image" />
          <div className="Details">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Цена: {product.price} Сом</p>
          <h3 className='product-history'>{product.history}</h3>
          <button onClick={() => addCart(product)}>Добавить в корзину</button>
          </div>
        </div>
        
      ) : (
        <div className="not-found">Product not found</div>
      )}
    </div>
    
  );
};

export default Details;

