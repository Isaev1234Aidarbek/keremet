import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../style/pages.css"; 

export default function Cart({ cart }) {
  const totalItems = cart.reduce((acc, item) => acc + item.count, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="cArt-container">
      <div className="cart-items-container">
        {cart.length === 0 ? (
          <p>Ваша корзина пуста</p>
        ) : (
          cart.map((phone) => (
            <div className="cart-item" key={phone.id}>
              <img src={phone.images[0]} alt={phone.title} />
              <div className="cart-item-info">
                <h3>{phone.title}</h3>
                <p>Количество: {phone.count}</p>
                <p>Цена: {phone.price} Сом</p>
              </div>
            </div>
          ))
        )}
      </div>
      {totalItems > 0 && (
        <div className="cart-info">
          <p>Общее количество товаров: {totalItems}</p>
          <p>Общая стоимость: {totalPrice} Сом</p>
        </div>
      )}
      <Link to="/cart" className="cart-link">
        <FaCartShopping className="cart-icon" />
      </Link>
    </div>
  );
}

