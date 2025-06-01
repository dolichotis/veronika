import React from "react";
import { WhatsAppOutlined, SendOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <div style={footer} id="footerID">
      <div style={contactItem}>
        <p><strong>Контактное лицо:</strong> Иван</p>
        <p><strong>Телефон:</strong> <a style={stylea} href="tel:89138903514">8(913)890-35-14</a>
        </p>
      </div>
      <p style={{marginTop: "1rem"}}>
        Работаем по Подмосковью. Звоните за дополнительной информацией или пишите в&nbsp;
        <a style={stylea} href="https://wa.me/79138903514" target="_blank"
           rel="noopener noreferrer">WhatsApp</a> или&nbsp;
        <a style={stylea} href="https://t.me/+79138903514" target="_blank"
           rel="noopener noreferrer">Telegram</a>.
      </p>
      <div style={iconRow}>
        <a href="https://www.avito.ru/egorevsk/predlozheniya_uslug/zamena_ventsov_doma_3104702037"
           target="_blank" rel="noopener noreferrer">
          <img
            src='/img/avito.svg'
            alt="Avito"
            style={iconStyle}
          />
        </a>
        <a href="https://wa.me/79138903514" target="_blank" rel="noopener noreferrer">
          <WhatsAppOutlined style={{...iconStyle, fontSize: 20}}/>
        </a>
        <a href="https://t.me/+79138903514" target="_blank" rel="noopener noreferrer">
          <SendOutlined style={{...iconStyle, fontSize: 20}}/>
        </a>
      </div>
    </div>
  )
};

const footer = {
  backgroundColor: "#756b64",
  color: '#ffffff',
  padding: "10px",
  textAlign: "center",
  fontSize: "16px",
  marginTop: "20px",
};

const contactItem = {
  marginBottom: "10px",
};

const stylea = {
  color: '#c9bfbb',
}

const iconRow = {
  marginTop: "16px",
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  alignItems: "center",
};

const iconStyle = {
  color: "#ffffff",
  width: 30,
  height: 30,
  filter: "brightness(0) invert(1)", // для Avito логотипа
};

export default Footer;