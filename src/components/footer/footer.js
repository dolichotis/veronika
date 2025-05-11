import React from "react";

function Footer() {
  return (
    <div style={footer} id="footerID">
      <div style={contactItem}>
        <p><strong>Контактное лицо:</strong> Вероника</p>
        <p><strong>Телефон:</strong> <a href="tel:89998887766">8 (999) 888-77-66</a></p>
      </div>
      <p style={{marginTop: "1rem"}}>
        Работаем по Подмосковью. Звоните за дополнительной информацией или пишите в&nbsp;
        <a href="https://wa.me/79998887766" target="_blank"
           rel="noopener noreferrer">WhatsApp</a> или&nbsp;
        <a href="https://t.me/username" target="_blank" rel="noopener noreferrer">Telegram</a>.
      </p>
    </div>
  )
};

const footer = {
  backgroundColor: "#756b64",
  padding: "20px",
  textAlign: "center",
  fontSize: "16px",
  marginTop: "30px",
};

const contactItem = {
  marginBottom: "10px",
};

export default Footer;