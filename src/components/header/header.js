import React from "react";

import './header.css';

function Header() {
  return (
    <div className="headerBlock">
      <a href="#mainID" className="headerA">
        <button className="headerBut headerButFirst">Главная</button></a>
      <a href="#aboutID" className="headerA">
        <button className="headerBut">О нас</button></a>
      <a href="#servicesID" className="headerA">
        <button className="headerBut">Услуги</button></a>
      <a href="#priceID" className="headerA">
        <button className="headerBut">Стоимость</button></a>
      <a href="#mainID" className="headerA">
        <button className="headerBut headerButLast">Контакты</button></a>
    </div>
);
}

export default Header;