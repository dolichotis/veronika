import React from "react";

function Footer() {
  return (
    <div style={footer} id="footerID">
      <div style={contactItem}>
        <p><strong>Контактное лицо:</strong> Иван</p>
        <p><strong>Телефон:</strong> <a style={stylea} href="tel:89138903514">8(913)890-35-14</a></p>
      </div>
      <p style={{marginTop: "1rem"}}>
        Работаем по Подмосковью. Звоните за дополнительной информацией или пишите в&nbsp;
        <a style={stylea} href="https://wa.me/79138903514" target="_blank"
           rel="noopener noreferrer">WhatsApp</a> или&nbsp;
        <a style={stylea} href="https://t.me/+79138903514" target="_blank" rel="noopener noreferrer">Telegram</a>.
      </p>
    </div>
  )
};

const footer = {
  backgroundColor: "#756b64",
  color: '#ffffff',
  padding: "20px",
  textAlign: "center",
  fontSize: "16px",
  marginTop: "30px",
};

const contactItem = {
  marginBottom: "10px",
};

const stylea = {
  color: '#c9bfbb',
}

export default Footer;