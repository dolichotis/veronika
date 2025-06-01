import React, { useState } from "react";
import {MenuOutlined, CloseOutlined, WhatsAppOutlined, SendOutlined} from '@ant-design/icons';
import './header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="headerContainer">
      <div className="headerBlock">
        <div className="desktopMenu">
          <a href="#mainID" className="headerA">
            <button className="headerBut headerButFirst">Главная</button>
          </a>
          <a href="#aboutID" className="headerA">
            <button className="headerBut">О нас</button>
          </a>
          <a href="#servicesID" className="headerA">
            <button className="headerBut">Услуги</button>
          </a>
          <a href="#priceID" className="headerA">
            <button className="headerBut">Стоимость</button>
          </a>
          <a href="#reviewsID" className="headerA">
            <button className="headerBut headerButLast">Отзывы</button>
          </a>
          <a className='iconRow'>
            <a
              href="https://www.avito.ru/egorevsk/predlozheniya_uslug/zamena_ventsov_doma_3104702037"
              target="_blank" rel="noopener noreferrer">
              <img
                src='/img/avito.svg'
                alt="Avito"
                className='iconStyle avitoIconStyle'
              />
            </a>
            <a href="https://wa.me/79138903514" target="_blank" rel="noopener noreferrer">
              <WhatsAppOutlined className='iconStyle'/>
            </a>
            <a href="https://t.me/+79138903514" target="_blank" rel="noopener noreferrer">
              <SendOutlined className='iconStyle'/>
            </a>
          </a>
        </div>

        <div className="mobileMenuIcon" onClick={toggleMenu}>
          {menuOpen ? <CloseOutlined/> : <MenuOutlined/>}
        </div>
      </div>

      {menuOpen && (
        <div className="mobileMenu">
          <a href="#mainID" onClick={closeMenu}>Главная</a>
          <a href="#aboutID" onClick={closeMenu}>О нас</a>
          <a href="#servicesID" onClick={closeMenu}>Услуги</a>
          <a href="#priceID" onClick={closeMenu}>Стоимость</a>
          <a href="#reviewsID" onClick={closeMenu}>Отзывы</a>
        </div>
      )}
    </div>
  );
}


export default Header;
